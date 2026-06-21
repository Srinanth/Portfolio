import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationItems = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Rajiv Gandhi Institute of Technology, Kottayam",
    period: "2024 - present",
    description:
      "I have joined Rajiv Gandhi Institute of Technology in Kottayam, a prestigious government engineering college, where I am pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering.",
  },
  {
    degree: "12th Standard",
    institution: "ST. Sebastian's Higher Secondary School",
    period: "2023 - 2024",
    description:
      "I have successfully completed my 12th standard from ST. Sebastian's Higher Secondary School, a state government institution, with an outstanding score of 96%.",
  },
  {
    degree: "10th Standard",
    institution: "ST. Sebastian's Higher Secondary School",
    period: "2021 - 2022",
    description:
      "I have successfully completed my 10th standard from ST. Sebastian's Higher Secondary School, a state government institution, with an impressive score of 96%.",
  },
];

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-transparent" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-4">
             My <span className="text-red-500">Education</span>
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gray-800/60 border border-red-500/30 rounded-xl p-8 hover:border-red-500/50 transition-colors duration-300 relative group cursor-default backdrop-blur-sm"
                style={{
                  boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg shrink-0">
                      <GraduationCap className="w-6 h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold text-white group-hover:text-red-100 transition-colors">
                        {item.degree}
                      </h3>
                      <p className="text-red-500 font-medium font-sans">{item.institution}</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400 font-mono bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700 w-fit shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed relative z-10 text-left sm:text-justify">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
