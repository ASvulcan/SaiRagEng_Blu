import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    id: "01",
    title: "Façade Engineering",
    description: "We provide comprehensive façade design and detailing solutions aligned with project specifications and international standards.",
    items: [
      "Curtain Wall Systems (Unitized, Semi-unitized / Stick systems)",
      "Structural Glazing Systems",
      "Skylights and Canopies",
      "Dry Cladding Systems",
      "Façade Design Development & Detailing",
      "Shop Drawings and Technical Documentation"
    ]
  },
  {
    id: "02",
    title: "Structural Support & Interface Design",
    description: "Design and detailing of critical support elements to ensure structural integrity and seamless integration.",
    items: [
      "Mullions and Transoms",
      "Brackets and Anchoring Systems",
      "Embed and Connection Details",
      "Interface Coordination with Primary Structure"
    ]
  },
  {
    id: "03",
    title: "Mechanical Design Services",
    description: "Engineering support for mechanical components and assemblies with a focus on functionality and manufacturability.",
    items: [
      "3D Modeling and Design Development",
      "Mechanical Component Design",
      "Assembly Design and Detailing",
      "Manufacturing and Fabrication Drawings"
    ]
  },
  {
    id: "04",
    title: "CAD & BIM Services",
    description: "Accurate drafting and modeling support to enhance coordination and project efficiency.",
    items: [
      "2D Drafting and Documentation",
      "3D Modeling and BIM Support",
      "Design Coordination and Clash Detection",
      "Drawing Standardization and Quality Control"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0B1F33] text-white relative">
      {/* Background SVG abstract elements */}
      <svg className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 640 800">
        <line x1="0" y1="0" x2="640" y2="800" stroke="#00AEEF" strokeWidth="2" />
        <line x1="640" y1="0" x2="0" y2="800" stroke="#00AEEF" strokeWidth="2" />
      </svg>

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
            <span className="text-[#00AEEF] tracking-[0.15em] text-sm font-bold uppercase">SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">What We Do</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111111] border border-[#1F3A5F] p-8 md:p-10 hover:border-[#00AEEF]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-8 text-8xl font-black text-[#1F3A5F]/20 group-hover:text-[#1F3A5F]/40 transition-colors pointer-events-none select-none">
                {service.id}
              </div>
              
              <div className="relative z-10">
                <div className="text-[#00AEEF] font-mono font-bold mb-4">{service.id}</div>
                <h3 className="text-2xl font-bold mb-4 text-[#D9E1EA]">{service.title}</h3>
                <p className="text-[#D9E1EA]/70 mb-8 text-sm leading-relaxed min-h-[60px]">
                  {service.description}
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`item-${service.id}`} className="border-[#1F3A5F]/50">
                    <AccordionTrigger className="text-sm font-medium hover:text-[#00AEEF] hover:no-underline text-[#D9E1EA]">
                      View Capabilities
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="pt-4 space-y-2">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-[#D9E1EA]/80">
                            <span className="text-[#00AEEF] mt-1 shrink-0">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
