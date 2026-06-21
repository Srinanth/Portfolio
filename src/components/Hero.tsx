import React, { useState, useEffect } from 'react';
import { Download, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaWhatsapp } from 'react-icons/fa';
interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

const FrameGlassGradient: React.FC<FrameProps> = ({ children, className = '' }) => (
  <div className={`relative p-0.5 rounded-2xl overflow-hidden group ${className}`}>
    <div className="absolute -inset-12 bg-linear-to-r from-red-600 via-rose-500 to-neutral-900 rounded-2xl animate-[spin_10s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity" />
    <div className="relative bg-gray-900/90 backdrop-blur-md rounded-2xl p-2.5 border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] w-full h-full">
      <div className="rounded-xl overflow-hidden w-full h-full">
        {children}
      </div>
    </div>
  </div>
);

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

  const renderProfileWithFrame = (className = 'w-full h-full') => (
    <FrameGlassGradient className={className}>
      <img
        src="me.png"
        alt="Profile"
        draggable="false"
        className="w-full h-full object-cover"
      />
    </FrameGlassGradient>
  );

  const renderSocialLinks = () => (
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
  );

  const renderBioText = () => (
    <div className="text-gray-300 leading-relaxed mb-8 max-w-xl tw-slide-up text-left sm:text-justify mx-auto md:mx-0 space-y-4">
      <p>
        I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at Rajiv Gandhi Institute of Technology, Kottayam. I have a strong interest in cybersecurity, AI-driven automation, and full-stack web development.
      </p>
      <p>
        I enjoy working with both front-end and back-end technologies, challenging myself by learning new frameworks and tools. I’m eager to take on meaningful projects and continue improving my skills through real-world experience.
      </p>
    </div>
  );

  const renderResumeButton = () => (
    <a 
      href="/Srinanth_MV_CV.pdf" 
      download="Srinanth_MV_CV.pdf"
      className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 tw-ink-reveal w-fit"
    >
      <Download size={18} />
      Download Resume
    </a>
  );

  return (
    <section id="about" className="min-h-screen bg-transparent relative flex items-center justify-center pt-24 pb-16">
      <div className="relative z-10 px-6 max-w-6xl w-full flex items-center justify-center">
        {!connected ? (
          <div className="w-full max-w-lg mx-auto py-12 tw-fade-in">
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
        ) : (
          <div className="flex flex-col tw-fade-in w-full animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-heading font-black tracking-tight text-white mb-8 text-center md:text-left">
              Srinanth M V
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="md:hidden w-72 h-72 mx-auto mb-6">
                  {renderProfileWithFrame("w-full h-full")}
                </div>
                {renderSocialLinks()}
                {renderBioText()}
                {renderResumeButton()}
              </div>
              <div className="hidden md:flex justify-center items-center">
                <div className="w-80 h-80 md:w-96 md:h-96">
                  {renderProfileWithFrame("w-full h-full")}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;