"use client";

import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 backdrop-blur-xs transition-shadow ${shadow ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Muhammad Umer
        </h1>
        <div className="flex items-center space-x-6">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-aqua-400 transition">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
