"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
/* import ThemeToggle from "./ThemeToggle"; */

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled ? "backdrop-blur-sm bg-white/5 shadow-lg" : "p-6"
      }`}
    >
      <div className="container-max px-6 flex justify-between items-center">
        <Link
          href="#"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          Muhammad Umer
        </Link>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="hidden md:inline hover:text-purple-300 transition"
          >
            About
          </a>
          <a
            href="#skills"
            className="hidden md:inline hover:text-pink-300 transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hidden md:inline hover:text-cyan-300 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hidden md:inline hover:text-aqua-300 transition"
          >
            Contact
          </a>
        {/*   <ThemeToggle /> */}
        </div>
      </div>
    </nav>
  );
}
