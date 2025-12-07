'use client';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


export default function ThemeToggle() {
const [isDark, setIsDark] = useState(true);


useEffect(() => {
const body = document.documentElement;
if (localStorage.theme === 'light') {
body.classList.remove('dark');
setIsDark(false);
} else {
body.classList.add('dark');
setIsDark(true);
}
}, []);


const toggle = () => {
const body = document.documentElement;
if (body.classList.contains('dark')) {
body.classList.remove('dark');
localStorage.theme = 'light';
setIsDark(false);
} else {
body.classList.add('dark');
localStorage.theme = 'dark';
setIsDark(true);
}
};


return (
<button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-white/10 transition">
{isDark ? <FaSun /> : <FaMoon />}
</button>
);
}