import React, { useState, useEffect } from 'react';
import { Download, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaWhatsapp } from 'react-icons/fa';

const Hero: React.FC = () => {
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

  return (
    <section className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center justify-center pt-16">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full tw-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 max-w-6xl w-full">
        <div className="mb-8 tw-fade-in">
          <div className="bg-gray-800/80 border border-gray-700 rounded-lg p-4 mb-6 font-mono text-left max-w-lg mx-auto tw-slide-up">
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

        {connected && (
          <div className="flex flex-col md:flex-row items-start gap-10 tw-fade-in">
            <div className="flex-1 w-full flex flex-col items-center text-center md:items-start md:text-left order-2 md:order-1">

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tw-slide-up">
                Srinanth M V
              </h1>

              <div className="md:hidden w-60 h-60 mx-auto mb-6 tw-fade-in">
                <img
                  src="me.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex justify-center md:justify-start gap-4 mb-6 text-gray-300 text-2xl tw-slide-up">
                <a href="https://github.com/Srinanth" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/srinanth-mv" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com/_.srinanth_" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <FaInstagram />
                </a>
                <a href="https://discord.com/users/touyaaaaa" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <FaDiscord />
                </a>
                <a href="https://wa.me/9778421467" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
                  <FaWhatsapp />
                </a>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 tw-slide-up">
                I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at Rajiv Gandhi Institute of Technology, Kottayam. 
                <br /><br />
                I have a strong interest in cybersecurity, AI-driven automation, and full-stack web development. I enjoy working with both front-end and back-end technologies and like to challenge myself by learning new frameworks and tools. <br /><br />
                I’m eager to take on meaningful projects and continue improving my skills through real-world experience.
              </p>

              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-colors tw-ink-reveal">
                <Download size={18} />
                Download Resume
              </button>
            </div>

            <div className="hidden md:block w-80 h-80 md:w-96 md:h-96 overflow-hidden border-none tw-fade-in">
              <img
                src="me.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
