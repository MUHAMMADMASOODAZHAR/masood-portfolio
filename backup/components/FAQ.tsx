"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is GoHighLevel (GHL) and do I need to buy it separately?",
      answer: "GoHighLevel acts as the core database, CRM, landing page host, and automation builder. You will need your own GHL subscription (or I can set you up under my partner program) so you have absolute ownership of your client database. Any subscriptions for third-party middleware (like Make.com or Twilio) are billed directly to your business to preserve data transparency.",
    },
    {
      question: "How do conversational AI agents qualify leads and book appointments?",
      answer: "We connect conversational Large Language Models (like GPT-4) to your communication pipelines (SMS, web chat, Facebook Messenger). We inject a customized company knowledge base, rules, and objective constraints. The AI can then hold helpful conversations, answer specific product FAQs, query live GHL calendars for available slots, and book appointments directly without human receptionists.",
    },
    {
      question: "What is an offline conversion API feedback loop, and how does it lower ad spend?",
      answer: "Standard web trackers only measure initial button clicks or form fills, which often leads to ad networks optimization for low-quality clicks. A conversion feedback loop signals the Meta and Google algorithms exactly when a lead converts into a 'Qualified Lead', a 'Booked Consultation', or a 'Completed Sale' inside GHL. This informs the ad algorithms to target high-intent profiles, lowering your cost per conversion.",
    },
    {
      question: "Do you build custom webhooks or write code for integrations?",
      answer: "Yes. While we leverage standard connectors like Zapier and Make for efficiency, I write custom Node.js, Python scripts, or API webhooks when connecting platforms that lack pre-built integrations, ensuring your entire ecosystem syncs seamlessly.",
    },
    {
      question: "How long does a setup engagement take and what is required from my team?",
      answer: "A standard GoHighLevel CRM setup and speed-to-lead workflow takes approximately 2 weeks. More complex architectures involving outbound AI voice dialers or customized database dashboards require 3-4 weeks. Your team simply needs to provide system access keys, brand assets, and answers to our operational scoping audit.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Frequently Asked Questions
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            Everything you need to know about GoHighLevel configurations, 
            AI automations, and ad feedback loop integrations.
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
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors duration-300"
                >
                  <span className="font-bold text-slate-950 dark:text-white text-sm md:text-base leading-snug pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-850 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-700/60 text-slate-600 dark:text-slate-400">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 text-xs md:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
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
