"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const change = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e: any) => {
    e.preventDefault();
    setStatus("sending");
    // For demo: simulate call
    await new Promise((r) => setTimeout(r, 900));
    setStatus("done");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Contact
        </h2>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl bg-glass border border-white/10"
        >
          <input
            required
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Your name"
            className="w-full p-3 rounded-lg bg-white/5 mb-4"
          />
          <input
            required
            name="email"
            value={form.email}
            onChange={change}
            placeholder="Your email"
            className="w-full p-3 rounded-lg bg-white/5 mb-4"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={change}
            placeholder="Message"
            className="w-full p-3 rounded-lg bg-white/5 mb-4 h-36"
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "done" && (
              <span className="text-sm text-green-300">
                Message sent (demo)
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
