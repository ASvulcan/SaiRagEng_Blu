import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";

function Counter({ from, to, duration = 2, suffix = "" }: { from: number; to: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 bg-[#F7F9FC] text-[#0B1F33] relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none" style={{
        backgroundImage: `linear-gradient(#1F3A5F 1px, transparent 1px), linear-gradient(90deg, #1F3A5F 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#00AEEF]"></div>
            <span className="text-[#00AEEF] tracking-[0.15em] text-sm font-bold uppercase">ABOUT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Engineering Precision,<br />Delivered Globally</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[#1F3A5F] leading-relaxed"
          >
            <p className="mb-6">
              SaiRag Engineering LLP is a Pune-based engineering services company Specialized in façade engineering and mechanical design solutions.
            </p>
            <p>
              We partner with global clients to deliver high-quality design, detailing, and CAD/BIM support with a strong focus on precision, efficiency, and international engineering standards.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            <div className="border-l-2 border-[#00AEEF] pl-6">
              <div className="text-4xl md:text-5xl font-bold text-[#0B1F33] mb-2 font-mono">
                <Counter from={2000} to={2023} />
              </div>
              <div className="text-xs font-semibold tracking-wider text-[#1F3A5F] uppercase">YEAR FOUNDED</div>
            </div>
            <div className="border-l-2 border-[#00AEEF] pl-6">
              <div className="text-4xl md:text-5xl font-bold text-[#0B1F33] mb-2 font-mono">
                <Counter from={0} to={26} suffix="+" />
              </div>
              <div className="text-xs font-semibold tracking-wider text-[#1F3A5F] uppercase">PROJECTS DELIVERED</div>
            </div>
            <div className="border-l-2 border-[#00AEEF] pl-6">
              <div className="text-4xl md:text-5xl font-bold text-[#0B1F33] mb-2 font-mono">
                <Counter from={40000} to={49000} suffix="+" />
              </div>
              <div className="text-xs font-semibold tracking-wider text-[#1F3A5F] uppercase">ENGINEERING HOURS</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#1F3A5F]/10 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#0B1F33] flex items-center gap-3">
              <span className="w-1 h-6 bg-[#00AEEF]"></span>
              Our Vision
            </h3>
            <p className="mb-6 text-[#1F3A5F]/80 italic">"We aspire to become a trusted engineering partner for global clients, recognized for consistency, technical excellence, and reliability."</p>
            <ul className="space-y-3 text-sm text-[#1F3A5F]">
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                Strengthen our position in facade engineering and mechanical design services
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                Continuously enhance our capabilities in CAD, BIM, and advanced engineering tools
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                Expand our presence across European and international markets
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                Build long-term partnerships based on trust, quality, and performance
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#0B1F33] flex items-center gap-3">
              <span className="w-1 h-6 bg-[#00AEEF]"></span>
              Our Approach
            </h3>
            <p className="mb-6 text-[#1F3A5F]/80 italic">"At SaiRag Engineering, we believe that quality engineering is defined by attention to detail, clarity in communication, and a deep understanding of real-world execution."</p>
            <ul className="space-y-3 text-sm text-[#1F3A5F]">
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                A strong focus on precision and detailing
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                Alignment with international standards and best practices
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                Seamless integration with client standards and workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#00AEEF] mt-1">▹</span>
                Commitment to timely and consistent delivery
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 text-[#0B1F33] flex items-center gap-3">
              <span className="w-1 h-6 bg-[#00AEEF]"></span>
              Working with Us
            </h3>
            <div className="space-y-4 text-sm text-[#1F3A5F]">
              <p>
                We collaborate with façade consultants, contractors, fabricators, and engineering firms who value dependable support and high-quality outputs.
              </p>
              <p>
                By combining technical expertise with a structured and professional approach, we ensure that our clients receive engineering solutions they can rely on.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
