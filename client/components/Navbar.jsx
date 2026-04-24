// components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="fixed top-8 left-0 w-full z-[100] pointer-events-none">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center pointer-events-auto">
        <div className="text-white font-bold text-xl tracking-tighter">Z.</div>
        <div className="flex gap-10 backdrop-blur-md bg-white/5 border border-white/10 px-6 py-2 rounded-full">
          {/* Added 'Certificates' to the array below */}
          {['About', 'Work', 'Certificates', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}