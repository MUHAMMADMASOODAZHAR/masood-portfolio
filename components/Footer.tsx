"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Logo & Positioning Statement */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <Image src="/logo.png" alt="Masood Azhar - GoHighLevel & AI Automation Specialist" width={48} height={32} className="h-8 w-auto object-contain" />
              <span className="text-xl font-bold tracking-tight">
                Masood <span className="text-blue-500">Azhar.</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed font-normal">
              GoHighLevel systems developer and AI automation specialist. 
              Engineering custom CRM systems, conversational AI models, 
              and paid acquisition pipelines for high-performance scale.
            </p>

            {/* Direct Email */}
            <div className="text-sm pt-2">
              <span className="text-slate-500 font-bold block uppercase text-[10px] tracking-wider">Business Email</span>
              <a href="mailto:masood.786tmp@gmail.com" className="text-slate-300 hover:text-blue-400 font-bold transition-colors">
                masood.786tmp@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links (At least 14px text) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-blue-400">Navigation</h3>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Profiles (At least 14px text) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase font-extrabold tracking-widest text-blue-400">Connect & Booking</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  LinkedIn Profile ↗
                </a>
              </li>
              <li>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Upwork Profile ↗
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/masood-786tmp/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-200"
                >
                  Calendly Direct Link ↗
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Terms */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Masood Azhar. All rights reserved. GoHighLevel & AI Automation Architecture.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#home" onClick={(e) => handleAnchorClick(e, "#home")} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#home" onClick={(e) => handleAnchorClick(e, "#home")} className="hover:text-slate-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
