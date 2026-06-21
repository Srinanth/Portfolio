import React, { useEffect, useRef } from 'react';

// Neural Circuits (Circuit nodes with electrical pulses) - Sole Background Animation
export const GlobalBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initCircuits();
    };
    window.addEventListener('resize', handleResize);

    interface CircuitNode {
      x: number;
      y: number;
      connections: number[];
    }

    interface Pulse {
      fromNode: number;
      toNode: number;
      progress: number;
      speed: number;
    }

    let nodes: CircuitNode[] = [];
    let pulses: Pulse[] = [];

    const initCircuits = () => {
      nodes = [];
      pulses = [];
      const cols = 8;
      const rows = 6;
      const cellW = width / cols;
      const cellH = height / rows;

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          nodes.push({
            x: c * cellW + (Math.random() - 0.5) * (cellW * 0.4),
            y: r * cellH + (Math.random() - 0.5) * (cellH * 0.4),
            connections: [],
          });
        }
      }

      const nodesPerCol = cols + 1;
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const idx = r * nodesPerCol + c;
          if (c < cols && Math.random() > 0.3) {
            nodes[idx].connections.push(idx + 1);
          }
          if (r < rows && Math.random() > 0.3) {
            nodes[idx].connections.push(idx + nodesPerCol);
          }
          if (c < cols && r < rows && Math.random() > 0.7) {
            nodes[idx].connections.push(idx + nodesPerCol + 1);
          }
        }
      }
    };

    initCircuits();

    const spawnPulse = () => {
      if (nodes.length === 0) return;
      const eligibleNodes = nodes
        .map((n, i) => ({ n, i }))
        .filter((item) => item.n.connections.length > 0);
      if (eligibleNodes.length === 0) return;

      const start = eligibleNodes[Math.floor(Math.random() * eligibleNodes.length)];
      const target = start.n.connections[Math.floor(Math.random() * start.n.connections.length)];

      pulses.push({
        fromNode: start.i,
        toNode: target,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
      });
    };

    let lastPulseTime = 0;

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, width, height);

      // Draw background traces
      ctx.strokeStyle = 'rgba(239, 68, 68, 0.04)';
      ctx.lineWidth = 1;
      nodes.forEach((n) => {
        n.connections.forEach((connIdx) => {
          const targetNode = nodes[connIdx];
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(targetNode.x, targetNode.y);
          ctx.stroke();
        });
      });

      // Spawn pulse
      if (timestamp - lastPulseTime > 250 && pulses.length < 20) {
        spawnPulse();
        lastPulseTime = timestamp;
      }

      // Draw active pulses
      pulses.forEach((p, index) => {
        p.progress += p.speed;

        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];

        if (!from || !to) {
          pulses.splice(index, 1);
          return;
        }

        const currentX = from.x + (to.x - from.x) * p.progress;
        const currentY = from.y + (to.y - from.y) * p.progress;

        const grad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 6);
        grad.addColorStop(0, 'rgba(239, 68, 68, 0.9)');
        grad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(239, 68, 68, 0.35)';
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        if (p.progress >= 1) {
          const nextConns = to.connections;
          if (nextConns.length > 0 && Math.random() > 0.4) {
            const nextTarget = nextConns[Math.floor(Math.random() * nextConns.length)];
            pulses[index] = {
              fromNode: p.toNode,
              toNode: nextTarget,
              progress: 0,
              speed: p.speed,
            };
          } else {
            pulses.splice(index, 1);
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame((t) => {
      lastPulseTime = t;
      draw(t);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-35" />;
};
