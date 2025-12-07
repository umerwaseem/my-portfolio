"use client";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 px-6 mt-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} Muhammad Umer</div>
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="github">
            <FaGithub />
          </a>
          <a href="#" aria-label="linkedin">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="twitter">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
