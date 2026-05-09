import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F7F9FC] text-[#0B1F33]">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#00AEEF]"></div>
            <span className="text-[#00AEEF] tracking-[0.15em] text-sm font-bold uppercase">CONTACT US</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get in Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 bg-white shadow-sm border border-[#D9E1EA] flex flex-col items-start gap-4"
          >
            <div className="w-12 h-12 bg-[#0B1F33] text-[#00AEEF] flex items-center justify-center rounded-sm">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1F3A5F] mb-1">EMAIL</h3>
              <a href="mailto:engineering@sairag.net" className="text-[#0B1F33] hover:text-[#00AEEF] font-medium text-sm transition-colors">
                engineering@sairag.net
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white shadow-sm border border-[#D9E1EA] flex flex-col items-start gap-4"
          >
            <div className="w-12 h-12 bg-[#0B1F33] text-[#00AEEF] flex items-center justify-center rounded-sm">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1F3A5F] mb-1">PHONE</h3>
              <a href="tel:+918668479379" className="text-[#0B1F33] hover:text-[#00AEEF] font-medium text-sm transition-colors">
                +91-8668479379
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 bg-white shadow-sm border border-[#D9E1EA] flex flex-col items-start gap-4 lg:col-span-2"
          >
            <div className="w-12 h-12 bg-[#0B1F33] text-[#00AEEF] flex items-center justify-center rounded-sm">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#1F3A5F] mb-1">OFFICE ADDRESS</h3>
              <address className="text-[#0B1F33] not-italic font-medium text-sm leading-relaxed">
                F102, Mahindra Royale Society, Nehru Nagar, Pimpri, Pune - 411018, India
              </address>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <span className="text-sm font-bold text-[#1F3A5F] uppercase mr-3">FOLLOW US:</span>
          <span className="text-sm italic text-[#1F3A5F]/70">Coming soon.</span>
        </motion.div>
      </div>
    </section>
  );
}
