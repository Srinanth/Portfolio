import React from "react";
import { motion } from "framer-motion";
import { Users, Terminal, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Intern",
    company: "Zynact",
    period: "Mar 2026 – Present",
    icon: <Briefcase className="w-6 h-6 text-red-500" />,
    description: [
      "Designed and developed the backend architecture for a highly scalable, multi-tenant AI agent automation platform.",
      "Implemented secure multi-tenant data isolation and API authentication workflows.",
      "Optimized backend system performance to support asynchronous AI agent execution and automation pipelines."
    ],
  },
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
      "Contributed key frontend and backend features for their flagship product, 'Hostel Finder'.",
      "Spearheaded the integration of frontend interfaces with backend services to deliver a unified user experience.",
      "Optimized webpage performance, implemented SEO configurations, and coordinated deployment workflows."
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 14,
    },
  },
};

const iconVariants = {
  hidden: { scale: 1 },
  visible: { scale: 1 },
  hover: {
    scale: 1.15,
    rotate: 8,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 10,
    },
  },
};

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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 max-w-4xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-800/50 border border-red-500/30 rounded-xl p-8 shadow-lg hover:border-red-500/60 transition-colors duration-300 relative group cursor-default"
              style={{
                boxShadow: "0 4px 20px -5px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 relative z-10">
                <div className="flex items-center gap-4">
                  <motion.div 
                    variants={iconVariants}
                    className="p-3 rounded-lg border border-red-500 bg-red-500/10 shrink-0"
                  >
                    {exp.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-100 transition-colors">{exp.title}</h3>
                    <p className="text-red-500 font-medium">{exp.company}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-400 font-mono bg-gray-900/50 px-3 py-1 rounded-full border border-gray-700 w-fit shrink-0">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3 relative z-10">
                {exp.description.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                    <span className="text-sm leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;