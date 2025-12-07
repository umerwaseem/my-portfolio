"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="p-8 rounded-3xl bg-glass border border-white/20 shadow-xl"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-aqua-400 text-transparent bg-clip-text">
          Muhammad Umer
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-gray-200 max-w-xl">
          Creative and detail-focused Frontend Developer specializing in Angular and dynamic, scalable web applications.
        </p>
      </motion.div>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        className="mt-10 px-8 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg text-white font-semibold"
      >
        View My Work
      </motion.a>
    </section>
  );
}
