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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Tools", href: "#tools" },
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
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleAnchorClick(e, "#home")}
            className="flex items-center gap-2 text-slate-950 dark:text-white focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
          >
            <Image src="/logo.png" alt="Masood Azhar Logo" width={48} height={32} className="h-8 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight">
              Masood <span className="text-blue-600 dark:text-blue-400">Azhar.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-[15px] font-semibold text-slate-650 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-2 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="default"
              size="default"
              className="cursor-pointer"
            >
              Book a Free Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus-visible:ring-2 focus-visible:ring-blue-600 focus:outline-none cursor-pointer"
          >
            {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] p-6 bg-white dark:bg-slate-950 border-b border-slate-250 dark:border-slate-800 shadow-xl z-40 md:hidden flex flex-col space-y-4 max-h-[calc(100vh-60px)] overflow-y-auto"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-base font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 border-b border-slate-50 dark:border-slate-900 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
              >
                {link.label}
              </a>
            ))}
            
            <Button
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="default"
              size="default"
              className="w-full justify-center mt-2 cursor-pointer"
            >
              Book a Free Strategy Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}