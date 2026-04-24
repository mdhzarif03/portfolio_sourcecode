// components/About.jsx
export default function About() {
  return (
    <section id="about" className="py-16 max-w-5xl mx-auto px-6">
      <div className="border-t border-white/10 pt-12 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-bold">The Narrative</h2>
          <p className="text-xl text-white leading-snug mb-6">
            Driven by curiosity, I explore how systems work diving into programming and technology while building projects like ACOB to rethink how students in Bangladesh experience learning.
          </p>
        </div>
        <div className="space-y-6 text-sm text-gray-400 leading-relaxed">

          <p>
            As a self-taught programmer, I’ve always focused on understanding things deeply, not just using them. That mindset led me to create ACOB ({""}
            <a
              href="https://acobd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="acob-link"
            >
              Applied Cognitio Olympiad Bangladesh
            </a>
            ), where I’m building a growing community of students who want to think beyond memorization and approach problems differently.
          </p>

          <p>
            When I’m not working on ACOB, I spend my time exploring AI and robotics—learning, experimenting, and testing ideas that could shape the future of learning and innovation.
          </p>
        </div>
      </div>
    </section>
  )
}