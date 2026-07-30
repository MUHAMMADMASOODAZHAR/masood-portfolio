"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
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
    setIsOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-3 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleAnchorClick(e, "#home")}
            className="flex items-center gap-2.5 text-slate-950 dark:text-white focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1 shrink-0"
          >
            <Image
              src="/logo.png"
              alt="Masood Azhar - GoHighLevel & AI Automation Specialist"
              width={48}
              height={32}
              className="h-8 sm:h-8.5 w-auto object-contain"
              priority
            />
            <span className="text-xl font-bold tracking-tight">
              Masood <span className="text-blue-600 dark:text-blue-400">Azhar.</span>
            </span>
          </a>

          {/* Desktop Links (14px font size) */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-sm font-semibold text-slate-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-1.5 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="default"
              size="default"
              className="h-[44px] rounded-[10px] px-5 font-semibold cursor-pointer shadow-sm text-sm"
            >
              Book a Free Strategy Call
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-700 dark:text-slate-200 hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-40 bg-white/98 dark:bg-slate-950/98 backdrop-blur-xl flex flex-col justify-between p-6 lg:hidden border-t border-slate-200/80 dark:border-slate-800/80 overflow-y-auto"
          >
            <div className="space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="block text-base font-semibold text-slate-900 dark:text-slate-100 hover:text-blue-600 py-3 border-b border-slate-100 dark:border-slate-900"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-6 pb-6">
              <Button
                onClick={() => {
                  setIsOpen(false);
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="default"
                size="default"
                className="w-full h-[48px] rounded-[10px] font-semibold text-sm cursor-pointer shadow-sm text-center"
              >
                Book a Free Strategy Call
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}