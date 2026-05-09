export function Footer() {
  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT US", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "CAREER", href: "#career" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 border-t border-[#1F3A5F]/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-3xl font-bold tracking-tight text-white flex flex-col leading-none mb-6">
              <span>SaiRag</span>
              <span className="text-lg font-medium text-[#D9E1EA]">Engineering LLP</span>
            </a>
            <p className="text-[#D9E1EA]/70 max-w-md">
              Advanced Façade Engineering & Mechanical Design Solutions — Delivering precision-driven façade design, detailing, CAD/BIM, and mechanical engineering support for global projects.
            </p>
          </div>
          
          <div>
            <h4 className="text-[#00AEEF] font-semibold tracking-wider text-sm mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-[#D9E1EA] hover:text-[#00AEEF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#00AEEF] font-semibold tracking-wider text-sm mb-6 uppercase">Contact</h4>
            <ul className="space-y-4 text-sm text-[#D9E1EA]">
              <li>
                <a href="mailto:engineering@sairag.net" className="hover:text-[#00AEEF] transition-colors">
                  engineering@sairag.net
                </a>
              </li>
              <li>
                <a href="tel:+918668479379" className="hover:text-[#00AEEF] transition-colors">
                  +91-8668479379
                </a>
              </li>
              <li className="leading-relaxed">
                F102, Mahindra Royale Society,<br />
                Nehru Nagar, Pimpri,<br />
                Pune - 411018, India
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#1F3A5F]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#D9E1EA]/50">
          <p>© 2024 SaiRag Engineering LLP. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Engineering Precision</span>
            <span>Delivered Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
