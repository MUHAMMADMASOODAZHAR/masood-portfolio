"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, LineChart } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Audit & Strategy",
      desc: "We analyze your current CRM setup, lead flows, and drop-off points. Then, we map out a step-by-step integration blueprint detailing the exact triggers, AI Prompts, and tracking APIs needed.",
    },
    {
      num: "02",
      icon: <PenTool className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Architect & Build",
      desc: "I build the GoHighLevel environment, script the conversational AI agents, connect webhooks via Zapier/Make, and test edge cases to guarantee lead handoffs occur flawlessly.",
    },
    {
      num: "03",
      icon: <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Traffic & Launch",
      desc: "We configure Google and Meta Ads targeting ready-to-book leads. We deploy landing pages and custom conversion tracking APIs to train the ad algorithms to acquire high-intent buyers.",
    },
    {
      num: "04",
      icon: <LineChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Scale & Optimize",
      desc: "We analyze lead conversion stats daily. We upgrade Prompt layouts, adjust automated sequences based on client feedback, and fine-tune ad targets to reduce acquisition costs.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            My Process
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            How We Automate Your Growth Engine
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            A systematic, data-driven methodology designed to establish reliable CRM foundations 
            and scale customer acquisition.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* Badge Number */}
                <div className="absolute -top-4 left-6 bg-blue-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm tracking-widest">
                  {step.num}
                </div>

                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-6 mt-2 border border-blue-100 dark:border-blue-900/30">
                  {step.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
