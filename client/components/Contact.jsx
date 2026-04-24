// components/Contact.jsx
"use client"
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer id="contact" className="py-20 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          
          {/* Left Side */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl font-bold tracking-tighter text-white mb-8 italic leading-[1.1]"
            >
              Let's build <br/> something {' '}
              <span className="relative inline-block px-2">
                <span className="relative z-10">iconic.</span>
                <motion.span 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "circOut" }}
                  className="absolute bottom-1 left-0 h-[80%] bg-purple-600/90 -z-0 rounded-sm"
                />
              </span>
            </motion.h2>
            
            <p className="text-gray-500 text-lg max-w-sm mb-12">
              Available for strategic partnerships, AI research collaborations, or speaking engagements.
            </p>
            
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.5em] text-purple-500 font-bold mb-3">Primary Channel</p>
                <a href="mailto:official.acobd@gmail.com" className="text-xl text-white hover:text-purple-400 transition-all border-b border-white/10 pb-1">
                  mdhzarif03@gmail.com
                </a>
              </div>
              
              <div className="flex gap-8 pt-4">
                <a href="https://github.com/mdhzarif03" target="_blank" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/mdhzarif/" target="_blank" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/muhammadhasanzarif/" target="_blank" className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-white transition-colors">Instagram</a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-md"
          >
            <form action="https://formspree.io/f/xyklojra" method="POST" className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1 font-bold">Full Name</label>
                  <input name="name" type="text" required placeholder="Enter name" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500/50 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1 font-bold">Email Address</label>
                  <input name="email" type="email" required placeholder="email@example.com" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500/50 transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1 font-bold">Subject</label>
                <input name="subject" type="text" placeholder="Inquiry" className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500/50 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.3em] text-gray-500 ml-1 font-bold">Message</label>
                <textarea name="message" rows="4" required placeholder="Hey Zarif! I'm..." className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white placeholder:text-gray-700 focus:outline-none focus:border-purple-500/50 transition-all resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.4em] text-[10px] rounded-2xl hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-xl shadow-purple-500/5">
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase tracking-[0.3em] text-gray-600 font-bold select-none">
          <p>© 2026 Muhammad Hasan Zarif | All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
            <p className="italic">Built with precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
}