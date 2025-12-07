"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 rounded-3xl bg-glass border border-white/20 shadow-lg"
      >
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          About Me
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto">
          Creative and detail-focused Frontend Developer with expertise in Angular, building dynamic and scalable web applications. Experienced in designing configurable form-based UIs, integrating Angular Material components, and delivering seamless user experiences for complex enterprise systems.
        </p>
      </motion.div>
    </section>
  );
}
