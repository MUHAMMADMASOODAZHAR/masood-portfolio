"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  // First item open by default
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What does a typical project cost?",
      answer: "A standard GoHighLevel CRM setup or speed-to-lead workflow starts at $1,500. Complex integrations featuring custom API middleware or ad Conversion API feedback loops range between $2,500 and $5,000. Custom outbound conversational AI voice integrations are quoted dynamically based on script complexity.",
    },
    {
      question: "How long does implementation take?",
      answer: "A standard GoHighLevel setup takes approximately 2 weeks. Custom integrations, conversions API feeds, or conversational AI agent models take 3 to 4 weeks. Your team simply needs to provide brand assets, software API keys, and scope outlines during our setup phase.",
    },
    {
      question: "Can you fix an existing GoHighLevel setup?",
      answer: "Yes. I audit broken pipelines, malfunctioning trigger loops, or database schema configuration errors. I rebuild the underlying structures, test custom field parameters, and re-connect clean integrations to restore stable operations.",
    },
    {
      question: "Can you build AI voice and chat agents?",
      answer: "Yes. I construct custom OpenAI API conversational prompt architectures connected to SMS, web chat, or phone dialer API endpoints. The AI qualified leads, answers company FAQs, queries real-time calendar availability, and registers bookings.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. I offer monthly support retainers to monitor database sync logs, tweak conversational AI prompt sheets, and upgrade automations as your operations scale.",
    },
    {
      question: "Will I own the system?",
      answer: "Yes. 100% of all GoHighLevel sub-accounts, Make/Zapier automation blueprints, OpenAI API endpoints, and prompt documentation belong directly to your business. I do not retain lock-in access.",
    },
    {
      question: "What is required to start?",
      answer: "To get started, schedule a strategy call. Once we confirm scope fit, I will send a simple audit document to collect system access keys, brand guidelines, and sales intake scripts.",
    },
  ];

  return (
    <section id="faq" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            FAQ
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-200">
            Everything you need to know about GoHighLevel configurations, 
            pricing, support, and AI agent integrations.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${idx}`}
                  id={`faq-btn-${idx}`}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-650 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors duration-300 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-sm md:text-base leading-snug pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${idx}`}
                      role="region"
                      aria-labelledby={`faq-btn-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 text-base text-slate-700 dark:text-slate-200 leading-relaxed font-semibold">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
