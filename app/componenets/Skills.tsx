"use client";

import { motion } from "framer-motion";
import { FaAngular, FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";

const skills = [
  { name: "Angular", icon: <FaAngular className="text-red-500" />, level: 90 },
  { name: "React", icon: <FaReact className="text-blue-400" />, level: 80 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: 85 },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        My Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="p-6 rounded-3xl bg-glass border border-white/20 shadow-lg flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-4 text-2xl">
              {skill.icon}
              <h3 className="font-semibold text-xl">{skill.name}</h3>
            </div>
            <div className="w-full bg-white/20 rounded-full h-4">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="h-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
