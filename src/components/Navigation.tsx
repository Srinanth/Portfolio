import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#education", label: "Education" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-white font-bold text-xl"
            >
              <Terminal className="w-6 h-6 text-red-500" />
              <span>Portfolio</span>
            </motion.a>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-red-400 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0 }}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-md"
          >
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      <motion.div
        className="h-1 bg-red-500"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default Navigation;
