// components/Hero.jsx
"use client"
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-[85vh] flex flex-col justify-center items-start max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-purple-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-4"
      >
        Founder @ ACOB • Software Developer • AI Enthusiast
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-none mb-8"
      >
        Zarif<span className="text-purple-500 text-glow">.</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xl md:text-2xl max-w-2xl leading-relaxed font-light"
      >
        I build software and explore AI while leading <span className="text-white font-medium italic">Applied Cognitio Olympiad Bangladesh</span>. My work focuses on using technology to improve how students learn and think.
      </motion.p>
    </section>
  )
}