"use client";

import { motion } from "framer-motion";
import { Phone, Search, FileCode, CheckSquare, Presentation, BarChart } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Discovery Call",
      desc: "Align on business goals, sales process, CRM requirements, and integration needs to define project scope.",
    },
    {
      num: "02",
      icon: <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "System Audit and Plan",
      desc: "Audit existing tools, forms, and workflows to map out a clear automation blueprint and data flow.",
    },
    {
      num: "03",
      icon: <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Build and Integration",
      desc: "Configure GoHighLevel pipelines, build AI prompt rules, and establish middleware webhooks and API triggers.",
    },
    {
      num: "04",
      icon: <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Testing and Quality Control",
      desc: "Rigorously test lead routing, form triggers, AI agent conversations, and webhooks before going live.",
    },
    {
      num: "05",
      icon: <Presentation className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Launch and Training",
      desc: "Deploy production workflows, provide team walkthrough training, and deliver complete system documentation.",
    },
    {
      num: "06",
      icon: <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Optimization and Support",
      desc: "Monitor system health, refine conversation logic, and optimize pipeline metrics for ongoing performance.",
    },
  ];

  return (
    <section id="process" className="py-10 md:py-14 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            My Process
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Clear Process From Strategy to Launch
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A structured, engineering-first roadmap designed to take your automation engine 
            from scoping to stable production scale.
          </p>
        </div>

        {/* Process Steps Grid: Desktop 3x2, Tablet 2x3, Mobile 1x6 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 rounded-2xl relative hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex justify-between items-center mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-blue-600/30 dark:text-blue-400/20 select-none font-mono">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {step.title}
                </h3>
                
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
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
