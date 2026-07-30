"use client";

import { motion } from "framer-motion";
import { Phone, Compass, Cpu, CheckCircle2, Rocket, RefreshCw } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Discovery Call",
      desc: "Review your business model, lead channels, current bottlenecks, and automation goals.",
    },
    {
      num: "02",
      icon: <Compass className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "System Audit and Plan",
      desc: "Audit existing software, design custom pipeline stages, and map workflow triggers.",
    },
    {
      num: "03",
      icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Build and Integration",
      desc: "Configure GoHighLevel, train AI conversational models, and connect API webhooks.",
    },
    {
      num: "04",
      icon: <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Testing and Quality Control",
      desc: "Run end-to-end lead simulations to verify SMS timing, CRM tagging, and calendar sync.",
    },
    {
      num: "05",
      icon: <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Launch and Training",
      desc: "Deploy live triggers, transfer account ownership, and train your team on pipeline management.",
    },
    {
      num: "06",
      icon: <RefreshCw className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Optimization and Support",
      desc: "Monitor execution logs, refine AI prompt rules, and optimize lead conversion rates.",
    },
  ];

  return (
    <section id="process" className="py-10 md:py-14 lg:py-16 bg-slate-50/50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Implementation Roadmap
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Clear Process From Strategy to Launch
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A structured six-step workflow designed to deliver reliable GoHighLevel CRM setups and AI automation.
          </p>
        </div>

        {/* 6 Steps Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 rounded-2xl relative shadow-xs flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-extrabold text-slate-300 dark:text-slate-700 font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-950 dark:text-white mb-2">
                  {step.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
