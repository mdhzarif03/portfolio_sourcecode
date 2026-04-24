"use client"
import { motion } from 'framer-motion'; // FIX 1: Added missing import

export default function Certificates() {
  const certs = [
    { title: "CS50x", org: "Harvard University", link: "#" },
    { title: "Artificial Intelligence", org: "HP Life", link: "#" },
    { title: "JPMorganChase's Software Engineering", org: "Forage", link: "#" }
  ];

  return (
    <section id="certificates" className="py-16 max-w-6xl mx-auto px-6">
      <div className="mb-12">
        <h2 className="text-purple-500 font-bold text-[10px] uppercase tracking-[0.4em] mb-2">Credentials</h2>
        <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">Verified Academic & Professional Milestones</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex flex-col gap-6 backdrop-blur-sm transition-all hover:border-purple-500/40"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center text-[10px] font-bold text-purple-400">
              CERT
            </div>
            <div className="flex-grow">
              <h3 className="text-white font-bold text-lg leading-tight mb-1">{c.title}</h3>
              <p className="text-gray-500 text-sm">{c.org}</p>
            </div>
            <a href={c.link} target="_blank" className="text-gray-400 hover:text-white text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 transition-colors">
              View Document <span className="text-lg">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
} // FIX 2: Ensure there is no stray "s" after this bracket!