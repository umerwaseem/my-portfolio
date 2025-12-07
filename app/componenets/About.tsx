"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-3xl bg-glass border border-white/10 backdrop-blur-md"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            About Me
          </h2>
          <p className="mt-4 text-gray-200">
            Creative and detail-focused Frontend Developer with expertise in
            Angular and building dynamic and scalable web applications.
            Experienced in designing highly configurable form-based UIs,
            integrating Angular Material, and delivering seamless user
            experiences for complex enterprise systems in financial and
            messaging domains.
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/5">
              <h4 className="font-semibold">Experience</h4>
              <p className="text-sm text-gray-300">
                Enterprise applications, integrations, reconciliation tools.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5">
              <h4 className="font-semibold">Focus</h4>
              <p className="text-sm text-gray-300">
                Performance, reusability, UX, forms, Angular.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5">
              <h4 className="font-semibold">Tools</h4>
              <p className="text-sm text-gray-300">
                Angular, Next.js, Tailwind, Framer Motion.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
