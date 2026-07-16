"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Users } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Years Experience", value: "6+" },
    { label: "Systems Automated", value: "150+" },
    { label: "Ad Spend Managed", value: "$2M+" },
    { label: "Client ROI Avg", value: "4.2x" },
  ];

  const highlights = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "AI-Powered Efficiency",
      desc: "Integrating OpenAI and voice agents to automate custom follow-ups and handle front-line inquiries 24/7.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "CRM Infrastructure",
      desc: "Designing end-to-end GoHighLevel pipelines that capture, track, and close leads without manual friction.",
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Performance Ads",
      desc: "Scaling digital campaigns across Meta and Google Ads with custom conversions and retargeting architectures.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "Partner-Centric Approach",
      desc: "Working as a fractional systems architect, aligning closely with sales teams to drive real bottom-line revenue.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            About Masood Azhar
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            The Engineer Behind Your Automation Engine
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350 leading-relaxed">
            I help modern businesses eliminate administrative overhead and scale lead generation. 
            By connecting custom AI systems with robust GHL infrastructure and high-performance advertising, 
            I construct predictable growth pipelines.
          </p>
        </div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Stats & Brief */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Systems & Automation Architect
              </h3>
              <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
                With a focus on workflow automation, my specialty is configuring complex trigger setups, 
                multi-channel communications, database syncs, and intelligent AI decision trees that 
                remove administrative bloat.
              </p>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-5 border border-blue-100 dark:border-blue-900/30">
                  {highlight.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                  {highlight.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                  {highlight.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
