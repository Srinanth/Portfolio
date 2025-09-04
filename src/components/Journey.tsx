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
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gray-700"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
            >
              <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800"></div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`bg-gray-900 border ${item.color} rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg ${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-400 font-mono">{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;