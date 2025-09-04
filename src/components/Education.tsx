import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const educationItems = [
  {
    degree: "10th Standard",
    institution: "ST:Sebastian's Higher Secondary School",
    period: "2021 - 2022",
    grade: "96%",
    description:
      "I have successfully completed my 10th standard from ST:Sebastian's Higher Secondary School, a state government institution, with an impressive score of 96%.",
  },
  {
    degree: "12th Standard",
    institution: "ST:Sebastian's Higher Secondary School",
    period: "2023 - 2024",
    grade: "96%",
    description:
      "I have successfully completed my 12th standard from ST:Sebastian's Higher Secondary School, a state government institution, with an outstanding score of 96%.",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Rajiv Gandhi Institute of Technology, Kottayam",
    period: "2024 - present",
    grade: "Pursuing",
    description:
      "I have joined Rajiv Gandhi Institute of Technology in Kottayam, a prestigious government engineering college, where I am pursuing a Bachelor of Technology (B.Tech) degree in Computer Science and Engineering.",
  },
];

const Education: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="education">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
             My <span className="text-red-500">Education</span>
          </h2>

        </motion.div>

        {/* Education List */}
        <div className="space-y-8">
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-red-300 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="space-y-1 text-gray-300 mb-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-gray-400" />
                        <span className="font-medium">{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <div className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-1 inline-block">
                      <span className="text-green-400 font-mono text-sm">
                        Grade: {item.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
