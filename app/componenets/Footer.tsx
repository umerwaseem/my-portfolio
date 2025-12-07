"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 px-6 mt-24 bg-glass border-t border-white/20 text-center text-gray-200">
      <div className="flex justify-center gap-6 mb-4 text-2xl">
        <a href="https://github.com/" target="_blank" className="hover:text-purple-400 transition"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" className="hover:text-pink-400 transition"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" className="hover:text-aqua-400 transition"><FaTwitter /></a>
      </div>
      <p>© {new Date().getFullYear()} Muhammad Umer. All rights reserved.</p>
    </footer>
  );
}
