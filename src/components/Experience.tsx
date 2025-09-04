import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

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
            My <span className="text-red-500">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 border border-red-500/50 rounded-lg p-6 shadow-lg hover:shadow-xl max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg border border-red-500 bg-red-500/10">
              <Users className="w-6 h-6 text-red-500" />
            </div>
            <span className="text-sm text-gray-400 font-mono">
              2025 – Present
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Volunteer at Tinkerhub
          </h3>
          <p className="text-gray-300">
            Actively contributing as a volunteer at Tinkerhub by helping peers
            explore technology, conducting sessions, and engaging in community-driven
            projects to foster learning and collaboration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
