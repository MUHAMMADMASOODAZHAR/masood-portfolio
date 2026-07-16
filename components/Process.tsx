"use client";

import { motion } from "framer-motion";
import { Phone, Search, FileCode, CheckSquare, Presentation, BarChart } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Discovery Call",
      desc: "We align on your business targets, evaluate current CRM pipelines, define conversational AI rules, and scope out integration hooks to structure a detailed project roadmap.",
    },
    {
      num: "02",
      icon: <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "System Audit & Plan",
      desc: "I run a detailed technical audit on your current database flows, web forms, and manual bottlenecks. Then, I construct an automation blueprint detailing trigger events.",
    },
    {
      num: "03",
      icon: <FileCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Build & Integration",
      desc: "I set up the GHL environment, configure custom fields and pipeline stages, program conversational OpenAI agent prompts, and link middleware webhooks on Zapier/Make.",
    },
    {
      num: "04",
      icon: <CheckSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Testing & Quality Control",
      desc: "We run comprehensive simulator tests: checking lead assign routing, validating phone/email input formats, monitoring voice bot responses, and testing Conversion API tags.",
    },
    {
      num: "05",
      icon: <Presentation className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Launch & Training",
      desc: "We route live production traffic to your customized CRM. I run deep walkthrough training sessions with your sales reps and hand over detailed system user manuals.",
    },
    {
      num: "06",
      icon: <BarChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Optimization & Support",
      desc: "We track pipeline analytics, refine LLM prompt parameters to elevate booking conversion percentages, and monitor offline Facebook/Google ad signals to reduce CAC.",
    },
  ];

  return (
    <section id="process" className="py-10 md:py-14 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            My Process
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Clear Process From Strategy to Launch
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-200">
            A structured, engineering-first roadmap designed to take your automation engine 
            from scoping to stable production scale.
          </p>
        </div>

        {/* Process Steps Grid */}
        {/* Desktop: 3 columns, 2 rows (3x2). Tablet: 2 columns. Mobile: 1 column */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl relative hover:shadow-md transition-shadow duration-300 flex flex-col justify-between min-h-[260px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Header: Prominent Step Number & Icon */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-blue-600/30 dark:text-blue-400/20 select-none">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white">
                  {step.title}
                </h3>
                
                <p className="mt-3 text-xs sm:text-[13px] text-slate-650 dark:text-slate-300 leading-relaxed font-medium">
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
