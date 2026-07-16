"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, Workflow, FileText, Key, Award } from "lucide-react";

export default function Benefits() {
  const benefitsList = [
    {
      icon: <Workflow className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Built Around Your Sales Process",
      desc: "Every automation is mapped to mimic your best sales representative, not a generic pre-made sequence.",
    },
    {
      icon: <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Zero Generic Templates",
      desc: "I construct custom pipeline layouts and integrations tailored to your specific service workflows.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Detailed Diagnostic Testing",
      desc: "Every webhook, calendar trigger, and OpenAI prompt undergoes rigorous multi-scenario testing before launch.",
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Comprehensive Documentation",
      desc: "You receive screen-share video walk-throughs and detailed PDF manuals to train your internal operators.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Ongoing Optimization Support",
      desc: "I offer monthly optimization retainers to monitor database logs, tweak AI prompts, and support integrations.",
    },
    {
      icon: <Key className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "100% Asset Ownership",
      desc: "All sub-accounts, prompt sheets, and API endpoints are registered directly in your name.",
    },
  ];

  return (
    <section id="benefits" className="py-10 md:py-14 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Why Work With Me
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Designed for Reliability & Scalability
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-200">
            I don&apos;t just link APIs; I design high-integrity database systems built to turn 
            paid traffic into booked sales conversations.
          </p>
        </div>

        {/* Benefits Grid (6 cards max) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitsList.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm flex flex-col justify-between min-h-[160px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center mb-4 border border-blue-100 dark:border-blue-900/30">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] text-slate-650 dark:text-slate-350 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
