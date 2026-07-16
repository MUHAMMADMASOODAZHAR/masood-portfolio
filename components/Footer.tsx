"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Image src="/logo.png" alt="Masood Azhar Logo" width={48} height={32} className="h-8 w-auto object-contain" />
              <span className="text-xl font-bold tracking-tight">
                Masood <span className="text-blue-500">Azhar.</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              GHL CRM systems developer and automation specialist. 
              Engineering custom CRM systems, conversational AI models, 
              and paid acquisition pipelines for high-performance scale.
            </p>

            {/* Email Contact */}
            <div className="text-sm pt-2">
              <span className="text-slate-500 font-bold block uppercase text-[10px] tracking-wider">Business Email</span>
              <a href="mailto:masood@example.com" className="text-slate-350 hover:text-white font-bold hover:underline">
                masood@example.com
              </a>
            </div>
          </div>

          {/* Quick Sitemap Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-200">Sitemap</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-white hover:underline transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Profiles & Booking */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-slate-200">Connect</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:underline transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
                >
                  LinkedIn Developer Profile
                </a>
              </li>
              <li>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:underline transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
                >
                  Upwork Agency Profile
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:underline transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
                >
                  Calendly Direct Link
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Terms */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} Masood Azhar. All rights reserved. Deployed under secure GHL guidelines.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#home" onClick={(e) => handleAnchorClick(e, "#home")} className="hover:underline hover:text-slate-400">Privacy Policy</a>
            <a href="#home" onClick={(e) => handleAnchorClick(e, "#home")} className="hover:underline hover:text-slate-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
