import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "../../assets/hero-bg.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center bg-[#111111] overflow-hidden pt-20">
      {/* Background photograph */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark gradient overlay — keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#0B1F33]/80 to-[#111111]/50" />
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `linear-gradient(#00AEEF 1px, transparent 1px), linear-gradient(90deg, #00AEEF 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        backgroundPosition: 'center center'
      }}></div>
      
      {/* Abstract geometric shapes */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1280 800">
        <line x1="128" y1="0" x2="128" y2="800" stroke="#1F3A5F" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="1152" y1="0" x2="1152" y2="800" stroke="#1F3A5F" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="1152" cy="240" r="4" fill="none" stroke="#00AEEF" strokeWidth="1" />
        <circle cx="128" cy="560" r="4" fill="none" stroke="#00AEEF" strokeWidth="1" />
        <path d="M 896 640 L 1088 640 L 1088 760" fill="none" stroke="#1F3A5F" strokeWidth="1" />
      </svg>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#00AEEF]"></div>
            <span className="text-[#00AEEF] tracking-[0.2em] text-sm font-semibold uppercase">Precision Driven</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.9] tracking-tight mb-8">
            SaiRag<br />
            <span className="text-[#D9E1EA]">Engineering LLP</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#D9E1EA]/80 max-w-2xl leading-relaxed border-l-2 border-[#1F3A5F] pl-6">
            Advanced Façade Engineering & Mechanical Design Solutions — Delivering precision-driven façade design, detailing, CAD/BIM, and mechanical engineering support for global projects.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.2em] text-[#D9E1EA]/60 uppercase">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} className="text-[#00AEEF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
