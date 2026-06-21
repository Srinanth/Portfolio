import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface TerminalLoaderProps {
  children: React.ReactNode;
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({ children }) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'ssh srinanth@portfolio.dev';
  const [commandOutput, setCommandOutput] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShowCursor(false);
          setCommandOutput('→ connection established');
          setTimeout(() => setConnected(true), 700);
        }, 600);
      }
    }, 70);

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  if (!connected) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-50">
        <div className="w-full max-w-lg mx-auto py-12 px-6 tw-fade-in">
          <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-4 font-mono text-left tw-slide-up">
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <Terminal size={16} />
              <span className="text-xs">terminal@portfolio:~$</span>
            </div>
            <div className="text-gray-300">
              <span className="text-red-400">$</span> 
              <span className="tw-typewriter">{typedText}</span>
              {showCursor && <span className="tw-blink">|</span>}
            </div>
            {commandOutput && (
              <div className="text-green-400 mt-1 tw-fade-in">
                {commandOutput}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return <div className="animate-fadeIn">{children}</div>;
};

export default TerminalLoader;
