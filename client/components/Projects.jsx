"use client"
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      type: "Web Application",
      title: "HERODOTUS",
      desc: "A personal, private web-based note-taking application built for Harvard's CS50x.",
      link: "https://github.com/mdhzarif03"
    },
    {
      type: "Desktop Application",
      title: "TASK MANAGER",
      desc: "GUI-based Task Manager with add, delete, and persistent JSON storage.",
      link: "https://github.com/mdhzarif03"
    }
  ];

  return (
    <section id="work" className="py-16 max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-purple-500 font-bold mb-2 italic">// PORTFOLIO</p>
          <h3 className="text-4xl font-bold text-white tracking-tighter">Selected Work</h3>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {projects.map((p, index) => (
          <motion.a
            key={index}
            href={p.link}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group block p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all"
          >
            <div className="flex justify-between items-start mb-10">
              <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500 font-bold">{p.type}</span>
              <span className="text-white group-hover:text-purple-500 transition-colors text-xl">↗</span>
            </div>
            <h4 className="text-3xl font-bold text-white mb-3 tracking-tighter">{p.title}</h4>
            <p className="text-gray-500 font-light text-sm leading-relaxed">{p.desc}</p>
          </motion.a>
        ))}
      </div>

      <div className="flex justify-center">
        <motion.a 
          href="https://github.com/mdhzarif03" 
          target="_blank"
          className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-white font-bold hover:bg-white hover:text-black transition-all duration-500"
        >
          Discover more on GitHub
        </motion.a>
      </div>
    </section>
  );
}