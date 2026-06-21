import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-transparent border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="text-gray-400">© 2026 Srinanth M V. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Srinanth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/srinanth-mv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="tel:+911234567890"
            className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1"
          >
            <Phone size={20} />
            <span className="text-sm">+91 9778421467</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
