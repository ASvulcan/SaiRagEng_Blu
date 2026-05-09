import { motion } from "framer-motion";

const deliverables = [
  "Shop Drawings",
  "Fabrication Drawings",
  "General Arrangement (GA) Drawings",
  "Installation Drawings",
  "3D Models and Assemblies",
  "Bills of Quantities (BOQs) and Material Take-offs"
];

export function Deliverables() {
  return (
    <section className="py-24 bg-[#111111] text-white border-t border-[#1F3A5F]/20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#00AEEF]"></div>
            <span className="text-[#00AEEF] tracking-[0.15em] text-sm font-bold uppercase">OUR DELIVERABLES</span>
            <div className="w-8 h-[1px] bg-[#00AEEF]"></div>
          </div>
          <h2 className="text-4xl font-bold tracking-tight mb-6">Project-Ready Outputs</h2>
          <p className="text-[#D9E1EA]/70">We provide structured, project-ready engineering outputs:</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group flex items-center justify-center p-6 bg-[#0B1F33] border border-[#1F3A5F]/50 hover:border-[#00AEEF] transition-all relative overflow-hidden"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#00AEEF] opacity-0 group-hover:opacity-100 transition-opacity m-2"></div>
              
              <span className="text-[#D9E1EA] text-center font-medium text-sm group-hover:text-white transition-colors">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
