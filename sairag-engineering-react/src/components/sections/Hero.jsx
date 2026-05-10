import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import local background images from assest folder
import bg1 from "../../assest/aleksandrs-zeltisevs-O-vNkUIFgtA-unsplash.jpg";
import bg2 from "../../assest/chris-hunter-JtyoQYtPdsU-unsplash.jpg";
import bg3 from "../../assest/declan-sun-ltpDzIWKYR8-unsplash.jpg";
import bg4 from "../../assest/samuel-pagel-h7ABHB1X4s8-unsplash.jpg";

const heroImages = [bg1, bg2, bg3, bg4];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background carousel with crossfade — 16:9 aspect ratio, zoom-cropped to fill */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={heroImages[currentIndex]}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center" }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.7) 50%, rgba(15,23,42,0.4) 100%)",
        }}
      />

      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.5) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Carousel navigation dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentIndex
                ? "bg-[#38bdf8] w-6"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-[#38bdf8]" />
            <span className="text-xs tracking-[0.15em] uppercase text-[#38bdf8]">
              Precision Driven
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-6 text-white">
            SaiRag<br />
            <span className="text-white/60">Engineering LLP</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8 text-white/70">
            Advanced Façade Engineering & Mechanical Design Solutions — Delivering precision-driven design, detailing, CAD/BIM, and mechanical engineering support for global projects.
          </p>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-all bg-[#38bdf8] text-white hover:brightness-110 shadow-lg shadow-[#38bdf8]/20"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-4"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" className="w-full h-full">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}