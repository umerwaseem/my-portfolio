"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Dynamic Form Builder",
    desc: "Angular project with configurable, reusable form components and Material UI integration.",
    link: "#",
  },
  {
    title: "Enterprise Dashboard",
    desc: "Interactive dashboard for financial data with charts, tables, and real-time updates.",
    link: "#",
  },
  {
    title: "Recon Tool",
    desc: "Reconciliation application for messaging and financial systems with smooth UX.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="p-6 rounded-3xl bg-glass border border-white/20 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-pink-300 mb-2">{p.title}</h3>
              <p className="text-gray-200">{p.desc}</p>
            </div>
            <a
              href={p.link}
              className="mt-4 text-purple-400 hover:text-purple-600 transition font-semibold"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
