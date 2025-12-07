'use client';
import { motion } from 'framer-motion';


export default function Preloader(){
return (
<div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black/60 to-transparent z-50">
<motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }} className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400" />
</div>
);
}