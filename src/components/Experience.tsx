import React from "react";
import { motion } from "framer-motion";
import { Users, Terminal, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Technical Team",
    company: "Computer Science Association, RIT Kottayam",
    period: "Jan 2026 – Present",
    icon: <Terminal className="w-6 h-6 text-red-500" />,
    description: [
      "Provided technical guidance for the official website of “TechThrive 2.0”, a national-level hackathon hosted by the department, advising on technology stack selection and implementation strategy",
      "Contributed to development and maintenance of the platform, ensuring stable performance and usability.",
      " Collaborated with the organizing team to ensure smooth technical setup and successful execution of the event."
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Flink",
    period: "Dec 2025 – Present",
    icon: <Briefcase className="w-6 h-6 text-red-500" />,
    description: [
      "Developing responsive frontend interfaces for a Chartered Accountant firm using React.js.",
      "Optimizing layout structures and performance to deliver production-ready, client-facing web applications.",
      "Collaborating with design teams to implement business-focused features aligned with client requirements."
    ],
  },
  {
    title: "Volunteer",
    company: "Tinkerhub RIT",
    period: "July 2025 – Present",
    icon: <Users className="w-6 h-6 text-red-500" />,
    description: [
      "Conducted a hands-on n8n workshop attended by 40+ participants, demonstrating practical automation workflows and real-world use cases.",
      "Mentored participants during 'Tink-Her-Hack', supporting project development and problem-solving.",
      "Coordinated technical and organizational activities for initiatives such as “Useless Project 2.0”, study jams,and community workshops."
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900" id="experience">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-red-500">Journey</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-red-500/30 rounded-xl p-8 shadow-lg hover:border-red-500/60 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg border border-red-500 bg-red-500/10">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-red-500 font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 font-mono bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700 w-fit">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;