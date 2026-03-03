import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Lock } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "TempSpace",
    category: "Web Development",
    description:
      "A frictionless file-sharing platform that allows users to create temporary spaces using short codes without requiring authentication. It features automatic expiration and manual destruction mechanisms to ensure secure, non-persistent storage.",
    tech: ["React", "Node.js", "Supabase", "Tailwind CSS"],
    status: "completed",
    github: "https://github.com/Srinanth/TempSpace",
    live: "https://tempspace.vercel.app", 
  },
  {
    id: 2,
    title: "OneAI",
    category: "AI & Automation",
    description:
      "A unified, personal AI Application that integrates multiple top-tier LLMs (Gemini, ChatGPT, DeepSeek, Claude, Grok) into a single interface. Features dynamic model routing via OpenRouter and Official APIs, real-time token tracking, and custom context retrieval.",
    tech: ["Flutter", "Riverpod", "Node.js", "TypeScript", "Supabase", "OpenRouter"],
    status: "completed",
    github: "https://github.com/Srinanth/OneAI",
  },
  {
    id: 3,
    title: "Assignment Agent",
    category: "AI & Automation",
    description:
      "A full-stack automation system that completes assignments on your behalf. Upload your work (PDF, DOCX, PPTX, image) via Web UI or Telegram. The agent processes it using LLMs and delivers results via email or Telegram with minimal effort.",
    tech: ["N8N", "Python", "Telegram API", "FastAPI", "Gemini API"],
    status: "completed",
    github: "https://github.com/Srinanth/AI-Agent",
    live: "https://assignment-agent.vercel.app",
  },
  {
    id: 4,
    title: "ReturnIt",
    category: "AI & Web Development",
    description:
      "An AI-powered lost and found platform that helps users report, search, and match lost/found items based on location and description. Built as part of the IPR Project for Semester 2.",
    tech: ["React", "Firebase", "TailwindCSS", "Express.js"],
    status: "completed",
    github: "https://github.com/Srinanth/Los_N_Foun-",
    live: "https://los-n-found-p783.onrender.com",
  },
  {
    id: 5,
    title: "Ani-JS",
    category: "Web Development",
    description:
      "A lightweight JavaScript animation library that mimics Tailwind-style utility classes without requiring Tailwind installation. Provides minimal CSS for clean animations like fadeIn, slideUp, and more. This portfolio is built on Ani-Js",
    tech: ["JavaScript", "CSS", "NPM"],
    status: "completed",
    github: "https://github.com/Srinanth/Ani-Js",
    live: "https://ani-js.vercel.app",
  },
  {
    id: 6,
    title: "Poetry AI",
    category: "AI & Web Development",
    description:
      "A MERN stack application that transforms user-input sentences into beautiful poetry. Brings words to life in poetic form using AI models.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Gemini API"],
    status: "completed",
    github: "https://github.com/Srinanth/Poetry-Generator",
    live: "https://poetry-ai-theta.vercel.app",
  },
];

const Projects: React.FC = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI & Automation':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'Web Development':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Cybersecurity':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-colors group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className={`px-3 py-1 rounded-full text-xs border ${getCategoryColor(project.category)}`}>
          {project.category}
        </span>
        {project.status === 'encrypted' && (
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-red-400"
          >
            <Lock size={16} />
          </motion.div>
        )}
      </div>

      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-300 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.status === 'encrypted' ? (
          <span className="font-mono text-red-400">
            [CLASSIFIED] - Security project details encrypted. Access pending clearance level upgrade.
          </span>
        ) : (
          project.description
        )}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-gray-800 text-gray-300 text-sm rounded border border-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.status !== 'encrypted' && (
        <div className="flex gap-3">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.github}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github size={16} />
            <span className="text-sm">Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            href={project.live}
            className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"
          >
            <ExternalLink size={16} />
            <span className="text-sm">Live Demo</span>
          </motion.a>
        </div>
      )}
    </motion.div>
  );

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span> 
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
