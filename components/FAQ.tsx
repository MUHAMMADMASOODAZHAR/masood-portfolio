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
      answer: "A standard GoHighLevel CRM setup or speed-to-lead workflow typically ranges between $1,500 and $2,500. Complex implementations involving custom API middleware, AI voice/chat agents, or ad Conversions API feedback loops range from $2,500 to $5,000+ depending on exact scope.",
    },
    {
      question: "How long does implementation take?",
      answer: "A standard GoHighLevel setup takes approximately 1 to 2 weeks. Custom integrations, Conversions API feeds, or conversational AI agent models take 2 to 4 weeks depending on the complexity of your sales workflows.",
    },
    {
      question: "Can you fix an existing GoHighLevel setup?",
      answer: "Yes. I audit malfunctioning workflows, broken pipeline triggers, or disorganized contact databases. I clean up custom field schemas, repair trigger loops, and re-connect integrations for smooth operations.",
    },
    {
      question: "Can you build AI voice and chat agents?",
      answer: "Yes. I build custom conversational AI models (using OpenAI and Vapi) connected to SMS, web chat, or phone lines. The AI qualifies leads, answers business FAQs, queries live calendar availability, and books appointments.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes. I offer monthly optimization retainers to monitor database logs, tweak AI prompt sheets, maintain integrations, and support your team as your lead volume scales.",
    },
    {
      question: "Will I own the workflows and integrations?",
      answer: "Yes. 100% of all GoHighLevel sub-accounts, automation blueprints (N8N/Zapier), prompt sheets, and API endpoints belong directly to your business. You retain full ownership.",
    },
    {
      question: "Can you connect GoHighLevel with custom software?",
      answer: "Yes. Using webhooks, N8N, Zapier, and custom REST API endpoints, I can connect GoHighLevel with custom databases, internal tools, Asana, Slack, Stripe, or proprietary client portals.",
    },
    {
      question: "What information do you need before starting?",
      answer: "To start, we begin with a short strategy call. Once scope is defined, I collect admin access to your relevant platforms (GHL, domain DNS, ad accounts, API keys) and an outline of your current sales intake steps.",
    },
  ];

  return (
    <section id="faq" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            FAQ
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Clear answers regarding project scope, pricing, timelines, AI integrations, and ongoing support.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/80 dark:bg-slate-900 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${idx}`}
                  id={`faq-btn-${idx}`}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors duration-200 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 dark:text-white text-base md:text-[17px] leading-snug pr-4">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
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
                      <div className="p-5 md:p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
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
