"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageSquareDot } from "lucide-react";
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

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-slate-950 dark:text-white">
            <MessageSquareDot className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-xl font-bold tracking-tight">
              Masood <span className="text-blue-600 dark:text-blue-400">Azhar.</span>
            </h1>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-650 dark:text-slate-350 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-250 uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="default"
              size="sm"
              className="bg-slate-950 text-white dark:bg-white dark:text-slate-950 rounded-full font-bold px-5 py-2 text-xs uppercase tracking-wider hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white hover:text-white transition-all cursor-pointer"
            >
              Book a Call
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] p-6 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl z-40 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 py-2 border-b border-slate-50 dark:border-slate-900 transition-colors"
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
              size="lg"
              className="w-full text-center py-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-400 dark:hover:text-white transition-all cursor-pointer text-xs uppercase tracking-widest mt-2"
            >
              Book a Call
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}