"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Dynamic Form Builder",
    desc: "Angular-based configurable form system with Material integration.",
    link: "#",
    tags: ["Angular", "Forms"],
  },
  {
    title: "Enterprise Dashboard",
    desc: "Real-time financial dashboards with performant rendering.",
    link: "#",
    tags: ["React", "Charts"],
  },
  {
    title: "Recon Tool",
    desc: "Reconciliation app for messaging and financial systems.",
    link: "#",
    tags: ["Node", "Integration"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="p-6 rounded-2xl bg-glass border border-white/10 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-pink-300">{p.title}</h3>
              <p className="mt-3 text-gray-200">{p.desc}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a href={p.link} className="text-purple-300 font-semibold">
                  View →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
