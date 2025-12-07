"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if(theme === 'light') {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }

  return (
    <button onClick={toggleTheme} className="text-xl p-2 rounded-full hover:bg-white/20 transition">
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}
