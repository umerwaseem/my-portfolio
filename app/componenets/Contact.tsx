"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
        Contact Me
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 rounded-3xl bg-glass border border-white/20 shadow-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-4 rounded-xl bg-white/10 placeholder-gray-300 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-aqua-400 transition h-32 resize-none"
          required
        />
        <button
          type="submit"
          className="py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
