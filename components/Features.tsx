"use client";

import { motion } from "framer-motion";
import { MessageSquare, CalendarRange, Workflow, ShieldCheck, HeartHandshake, Eye } from "lucide-react";

export default function Features() {
  const featuresList = [
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Conversational Speed-to-Lead",
      desc: "Instantly trigger customized multi-channel text callback sequences to engage new prospects under 2 minutes.",
    },
    {
      icon: <CalendarRange className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Interactive AI Calendar Booking",
      desc: "Conversational assistants query database slots to book appointments directly within chat conversations.",
    },
    {
      icon: <Workflow className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Smart Pipeline Routing Logic",
      desc: "Automated conditional triggers assign incoming leads to sales representatives based on performance metrics.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "CRM Database Hygiene Sync",
      desc: "Automated phone format checks and duplicate contact merging logs to secure database records clean.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Conversion Feedback API Loops",
      desc: "Signal qualified GHL pipeline conversions back to ad managers to lower search/social campaign CAC.",
    },
    {
      icon: <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Unified Performance Analytics",
      desc: "Keep a transparent, unified view of campaign click metrics, pipeline values, and appointment costs.",
    },
  ];

  return (
    <section id="features" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Operational Capabilities
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Performance Operational Capabilities
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-200">
            A review of advanced CRM configurations and custom integrations engineered 
            to secure operational scale.
          </p>
        </div>

        {/* Features Grid (6 cards max) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresList.map((feat, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between min-h-[180px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center mb-5 border border-blue-100 dark:border-blue-900/30">
                  {feat.icon}
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-950 dark:text-white leading-snug">
                  {feat.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-[13px] text-slate-650 dark:text-slate-350 leading-relaxed font-semibold">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
