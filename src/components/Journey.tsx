import React from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Brain } from 'lucide-react';

const timelineItems = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development Foundations",
    period: "2022-2023",
    description: "Started my journey in web development by learning the fundamentals of HTML, CSS, and JavaScript. Built small practice projects to strengthen my basics.",
    color: "border-blue-500 bg-blue-500/10"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "React Development",
    period: "2024",
    description: "Expanded my web development skills by learning React. Built more dynamic and interactive applications, gaining confidence in modern frontend development.",
    color: "border-purple-500 bg-purple-500/10"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Cybersecurity Basics",
    period: "2024",
    description: "Started exploring cybersecurity, focusing on network security, ethical hacking basics, and understanding how systems can be made more secure.",
    color: "border-red-500 bg-red-500/10"
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Automation & Integration",
    period: "2025-Present",
    description: "Currently exploring AI automation with tools like n8n and LLMs, while combining my web development and cybersecurity knowledge to build secure, AI-powered applications.",
    color: "border-green-500 bg-green-500/10"
  }
];

const cardVariants = {
  hover: {
    y: -5,
    scale: 1.01,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 16px -6px rgba(239, 68, 68, 0.15)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20
    }
  }
};

const iconVariants = {
  hover: {
    scale: 1.15,
    rotate: 6,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 10,
    },
  },
};

const About: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-red-500">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gray-700"></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
            >
              {/* Timeline Dot - Scales up in place */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.1, type: "spring" as const, stiffness: 120 }}
                viewport={{ once: true, margin: "-50px" }}
                className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 z-10"
              />

              {/* Timeline Card - Slides in from side */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} w-full`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover="hover"
                  variants={cardVariants}
                  transition={{ 
                    type: "spring" as const, 
                    stiffness: 80, 
                    damping: 14, 
                    delay: index * 0.1 
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`bg-gray-900 border ${item.color} rounded-lg p-6 shadow-lg transition-all duration-300 relative group cursor-default`}
                >
                  {/* Glowing hover highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />

                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <motion.div 
                      variants={iconVariants}
                      className={`p-2 rounded-lg ${item.color}`}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-sm text-gray-400 font-mono">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 relative z-10 group-hover:text-red-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 relative z-10 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;