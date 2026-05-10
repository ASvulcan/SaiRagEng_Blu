import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bg1 from "../../assest/aleksandrs-zeltisevs-O-vNkUIFgtA-unsplash.jpg";
import bg2 from "../../assest/chris-hunter-JtyoQYtPdsU-unsplash.jpg";
import bg3 from "../../assest/declan-sun-ltpDzIWKYR8-unsplash.jpg";
import bg4 from "../../assest/samuel-pagel-h7ABHB1X4s8-unsplash.jpg";

const serviceBgMap = {
  "01": bg1,
  "02": bg2,
  "03": bg3,
  "04": bg4,
};

const services = [
  {
    id: "01",
    title: "Façade Engineering",
    description: "Comprehensive façade design and detailing aligned with project specifications and international standards.",
    items: [
      "Curtain Wall Systems (Unitized, Semi-unitized / Stick)",
      "Structural Glazing Systems",
      "Skylights and Canopies",
      "Dry Cladding Systems",
      "Façade Design Development & Detailing",
      "Shop Drawings & Technical Documentation",
    ],
  },
  {
    id: "02",
    title: "Structural Support & Interface Design",
    description: "Design and detailing of critical support elements for structural integrity and seamless integration.",
    items: [
      "Mullions and Transoms",
      "Brackets and Anchoring Systems",
      "Embed and Connection Details",
      "Interface Coordination with Primary Structure",
    ],
  },
  {
    id: "03",
    title: "Mechanical Design Services",
    description: "Engineering support for mechanical components and assemblies focused on functionality and manufacturability.",
    items: [
      "3D Modeling and Design Development",
      "Mechanical Component Design",
      "Assembly Design and Detailing",
      "Manufacturing and Fabrication Drawings",
    ],
  },
  {
    id: "04",
    title: "CAD & BIM Services",
    description: "Accurate drafting and modeling support to enhance coordination and project efficiency.",
    items: [
      "2D Drafting and Documentation",
      "3D Modeling and BIM Support",
      "Design Coordination and Clash Detection",
      "Drawing Standardization and Quality Control",
    ],
  },
];

function ServiceCard({ id, title, description, items, open, onToggle }) {
  return (
    <div
      className={`group bg-white/90 dark:bg-[#1e293b]/90 backdrop-blur-sm border rounded-xl p-7 transition-all duration-300 cursor-pointer ${
        open
          ? "border-[#38bdf8] shadow-lg shadow-[#38bdf8]/10"
          : "border-gray-200 dark:border-gray-700"
      }`}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <span className="text-xs font-bold font-mono tracking-wider text-[#38bdf8]">
            {id}
          </span>
          <h3 className="text-lg font-bold mt-1 mb-2 text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-1 shrink-0"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700">
              <ul className="space-y-2">
                {items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.05 }}
                    className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <span className="mt-0.5 shrink-0 text-[#38bdf8]">▹</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  const [openId, setOpenId] = useState(null);

  const hasOpen = openId !== null;

  const toggleCard = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* Blurred background image — changes based on which card is open */}
      <AnimatePresence>
        {hasOpen && (
          <motion.div
            key={openId}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
            style={{
              backgroundImage: `url(${serviceBgMap[openId]})`,
              filter: "blur(24px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      {/* Overlay for light mode — reduced opacity when card is open so image is recognizable */}
      <div
        className="absolute inset-0"
        style={{
          background: hasOpen
            ? "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.40) 100%)"
            : "linear-gradient(180deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.95) 100%)",
          transition: "background 0.5s ease",
        }}
      />
      {/* Overlay for dark mode */}
      <div
        className={`absolute inset-0 dark:block hidden`}
        style={{
          background: hasOpen
            ? "linear-gradient(180deg, rgba(15,23,42,0.60) 0%, rgba(15,23,42,0.45) 100%)"
            : "linear-gradient(180deg, rgba(15,23,42,0.98) 0%, rgba(15,23,42,0.95) 100%)",
          transition: "background 0.5s ease",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#38bdf8]" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#38bdf8]">
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            What We Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <ServiceCard
                {...s}
                open={openId === s.id}
                onToggle={() => toggleCard(s.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}