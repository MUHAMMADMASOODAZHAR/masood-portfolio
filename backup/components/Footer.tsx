"use client";

import { MessageSquareDot } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-white">
              <MessageSquareDot className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight">
                Masood <span className="text-blue-500">Azhar.</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Fractional systems and automation architect. 
              Engineering custom CRM systems, conversational AI models, 
              and paid acquisition pipelines for high-performance scale.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">Navigation</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-400 hover:text-white hover:underline transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Systems & Standards */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-white">Standard Stack</h4>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>GoHighLevel CRM Setup</li>
              <li>OpenAI Assistants API</li>
              <li>Zapier & Make Integrations</li>
              <li>Meta & Google Tracking API</li>
            </ul>
          </div>

        </div>

        {/* Copyright & Sign off */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-500">
            © {currentYear} Masood Azhar. All rights reserved. Deployed via custom CRM frameworks.
          </p>
          <div className="flex gap-6 text-[10px] text-slate-500">
            <a href="#home" className="hover:underline hover:text-slate-350">Privacy Policy</a>
            <a href="#home" className="hover:underline hover:text-slate-350">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
