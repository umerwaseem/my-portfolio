"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl p-10 rounded-3xl bg-glass border border-white/10 backdrop-blur-lg shadow-xl"
      >
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-aqua-400">
              Muhammad Umer
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Software Engineer — Creative and detail-focused Frontend Developer
              with strong expertise in Angular and building dynamic, scalable,
              and user-centric web applications.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow hover:scale-105 transition"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-block px-6 py-3 rounded-full border border-white/20"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 shadow-2xl flex items-center justify-center">
              <img
                src="/avatar.png"
                alt="avatar"
                className="w-48 h-48 rounded-full border-4 border-white/10"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
