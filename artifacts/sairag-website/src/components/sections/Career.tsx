import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Career() {
  return (
    <section id="career" className="py-24 bg-[#1F3A5F] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-[#00AEEF]"></div>
              <span className="text-[#00AEEF] tracking-[0.15em] text-sm font-bold uppercase">CAREER</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Join SaiRag Engineering</h2>
            
            <div className="space-y-6 text-[#D9E1EA] text-lg leading-relaxed max-w-xl">
              <p>
                We are always interested in connecting with talented engineers and design professionals who share our commitment to precision, quality, and reliable delivery.
              </p>
              <p>
                For career inquiries, please reach out to us at the email below.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#0B1F33] p-10 lg:p-16 border border-[#1F3A5F]/50 flex flex-col items-start"
          >
            <span className="text-xs font-bold text-[#1F3A5F] uppercase tracking-widest mb-4 block">CAREER ENQUIRIES</span>
            <a 
              href="mailto:engineering@sairag.net" 
              className="group flex items-center gap-4 text-xl md:text-3xl font-medium text-white hover:text-[#00AEEF] transition-colors break-all"
            >
              engineering@sairag.net
              <ArrowRight className="text-[#00AEEF] transform group-hover:translate-x-2 transition-transform shrink-0" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
