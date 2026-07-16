"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "./button";

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("home");
      const faqElement = document.getElementById("faq");
      const contactElement = document.getElementById("contact");
      
      if (!heroElement) return;

      const scrollPosition = window.scrollY;
      const heroHeight = heroElement.offsetHeight;
      
      // Calculate where FAQ and Contact sections start relative to current scroll
      let faqTop = Infinity;
      let contactTop = Infinity;

      if (faqElement) {
        faqTop = faqElement.offsetTop - window.innerHeight + 100;
      }
      if (contactElement) {
        contactTop = contactElement.offsetTop - window.innerHeight + 100;
      }

      // Visible only after scrolling past the hero section, but hidden when approaching FAQ or Contact form
      const pastHero = scrollPosition > heroHeight - 100;
      const beforeFaq = scrollPosition < faqTop;
      const beforeContact = scrollPosition < contactTop;

      setIsVisible(pastHero && beforeFaq && beforeContact);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-45 md:hidden bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800/80 p-4 shadow-[0_-8px_24px_rgba(15,23,42,0.06)] pb-[calc(1rem+env(safe-area-inset-bottom))]"
        >
          <Button
            onClick={handleClick}
            variant="default"
            size="default"
            className="w-full justify-center cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Free Strategy Call</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
