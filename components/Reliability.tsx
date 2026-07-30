"use client";

import { motion } from "framer-motion";
import { Workflow, Zap, Database, ShieldCheck, Cpu, FileText } from "lucide-react";

export default function Reliability() {
  const cards = [
    {
      icon: <Workflow className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Reliable Workflow Architecture",
      desc: "Automations designed with clear triggers, conditions, fallbacks, and error handling.",
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Fast Lead Response",
      desc: "Automated SMS, email, AI voice, and chat follow-up for new leads.",
    },
    {
      icon: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Organized CRM Structure",
      desc: "Clean pipelines, custom fields, tags, segmentation, and opportunity stages.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Testing and Quality Control",
      desc: "Every workflow, form, message, webhook, and handoff is tested before launch.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Scalable Integrations",
      desc: "Systems designed to support additional tools, users, locations, and workflows.",
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Documentation and Ownership",
      desc: "Clear documentation, training, and full client ownership of all assets.",
    },
  ];

  return (
    <section id="reliability" className="py-10 md:py-14 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Systems Architecture
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Systems Designed for Reliability, Performance and Growth
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Every system is structured, tested, and documented to support consistent performance as your business grows.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 rounded-2xl shadow-xs hover:border-blue-200 dark:hover:border-blue-900/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center mb-5 border border-blue-100 dark:border-blue-900/30">
                  {card.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
