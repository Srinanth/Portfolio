import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaWrench, FaReact, FaNodeJs, FaDatabase, FaPython, FaDocker, FaJava, FaHtml5, FaCss3Alt, FaJs, FaLinux, FaBug, FaSearch } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiExpress, SiSupabase, SiFastapi, SiFlutter, SiDart, SiPostgresql, SiSqlite, SiGithubactions, SiSvelte, SiNextdotjs } from "react-icons/si";

const skillsData = [
  {
    title: "Programming Languages",
    icon: <FaCode className="w-5 h-5" />,
    color: "border-yellow-500 text-yellow-400",
    skills: [
      { name: "C", icon: <FaCode /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Dart", icon: <SiDart /> },
      { name: "Shell Script", icon: <FaCode /> },
    ],
  },
  {
    title: "Web & App Development",
    icon: <FaCode className="w-5 h-5" />,
    color: "border-blue-500 text-blue-400",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Svelte", icon: <SiSvelte /> },
      { name: "SvelteKit", icon: <SiSvelte /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Firebase", icon: <FaDatabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <FaDatabase /> },
      { name: "MySQL", icon: <FaDatabase /> },
      { name: "SQLite", icon: <SiSqlite /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    title: "Other Technologies",
    icon: <FaWrench className="w-5 h-5" />,
    color: "border-green-500 text-green-400",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "n8n", icon: <FaWrench /> },
      { name: "CI/CD", icon: <SiGithubactions /> },
      { name: "Kali Linux", icon: <FaLinux /> },
      { name: "Burp Suite", icon: <FaBug /> },
      { name: "Wireshark", icon: <FaSearch /> },
      { name: "OSINT", icon: <FaSearch /> },
      { name: "Docker", icon: <FaDocker /> },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 140,
      damping: 12,
    },
  },
  hover: {
    y: -3,
    scale: 1.05,
    borderColor: "rgba(239, 68, 68, 0.8)",
    backgroundColor: "rgba(239, 68, 68, 0.15)",
    color: "#ffffff",
    boxShadow: "0 6px 15px -3px rgba(239, 68, 68, 0.3)",
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 15,
    },
  },
};

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-transparent" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-white mb-4">
            Technical <span className="text-red-500">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className={`${category.color}`}>{category.icon}</div>
                <h3 className="text-xl font-heading font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    whileHover="hover"
                    className="px-4 py-2 rounded-full border border-gray-600 bg-gray-900/50 text-gray-300 flex items-center gap-2 text-sm cursor-default"
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
