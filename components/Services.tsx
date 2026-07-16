"use client";

import { motion } from "framer-motion";
import { MessageSquareCode, Database, BarChart3, Puzzle, ArrowRight } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  bullets: string[];
  tools: string[];
  isAi?: boolean;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "CRM and GoHighLevel Setup",
      problem: "Inefficient manual pipeline tracking and leads dropping off due to delayed callback outreach.",
      solution: "Configure customized GHL sub-accounts, stage triggers, and automated instant speed-to-lead follow-up flows.",
      benefit: "Consolidates your contacts and secures lead follow-ups under 2 minutes automatically.",
      bullets: [
        "Automated 2-minute text callback sequences",
        "Customized pipeline stage visual tracking boards",
        "Clean contact field schemas and trigger triggers"
      ],
      tools: ["GoHighLevel CRM", "Twilio", "Mailgun"],
    },
    {
      icon: <MessageSquareCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "AI Agents and Automation",
      problem: "Receptionists overwhelmed by call volume or failing to respond to chats after business hours.",
      solution: "Deploy OpenAI-powered text and voice conversational agents to handle intake and book calendar appointments.",
      benefit: "Secures 24/7 lead screening and calendar slot bookings without manual human operations.",
      bullets: [
        "Outbound AI voice qualification screening",
        "Live calendar slot sync and direct scheduling",
        "Custom knowledge base prompt guardrails"
      ],
      tools: ["OpenAI API", "Vapi AI Voice", "Make.com"],
      isAi: true,
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Meta and Google Ads",
      problem: "Paid campaigns generating high click volumes but low numbers of actual booked sales meetings.",
      solution: "Configure Conversions API integrations sending CRM qualification events back to ad platforms.",
      benefit: "Trains ad algorithms to optimize budgets for qualified prospects rather than cheap clicks.",
      bullets: [
        "Offline Conversions API event trigger loops",
        "Fast-loading mobile-responsive landing pages",
        "Algorithmic audience exclusion rules setup"
      ],
      tools: ["Meta Pixel", "Google GTM", "GHL Funnels"],
    },
    {
      icon: <Puzzle className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "API and Custom Integrations",
      problem: "Disjointed software applications (billing, calendars, CRM) unable to share details.",
      solution: "Program secure API webhook connections through self-hosted N8N or Zapier servers.",
      benefit: "Unifies data flow across platforms, removing repetitive copy-paste administrative work.",
      bullets: [
        "Custom API webhook middleware pipelines",
        "Sales closure notifications sent to Slack feeds",
        "Asana workspace task generation automation"
      ],
      tools: ["N8N.io", "Zapier", "Node.js Webhooks"],
    },
  ];

  const aiWorkflow = [
    { label: "Incoming Lead", desc: "Form/Chat" },
    { label: "Voice Waveform", desc: "Audio Feed" },
    { label: "AI Qualification", desc: "GPT Screening" },
    { label: "Appointment Booking", desc: "Calendar Sync" },
    { label: "CRM Update", desc: "Stage Shift" },
    { label: "Human Handoff", desc: "Rep Alert" },
  ];

  return (
    <section id="services" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Services & Solutions
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High-Performance CRM & Automation Engines
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-200">
            I configure robust tech infrastructure to solve sales bottlenecks, scale customer acquisition, 
            and automate manual workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-8 rounded-3xl hover:border-blue-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                {/* Icon & Title Header with Top Accent Color */}
                <div className="flex items-center gap-4 mb-6 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300 animate-pulse">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Structured Sections */}
                <div className="space-y-4 text-left">
                  {/* Problem solved */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Problem Solved</span>
                    <p className="text-xs sm:text-[13px] text-slate-650 dark:text-slate-350 mt-0.5 leading-relaxed">
                      {service.problem}
                    </p>
                  </div>

                  {/* What is built */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">What Is Built</span>
                    <p className="text-xs sm:text-[13px] text-slate-650 dark:text-slate-350 mt-0.5 leading-relaxed">
                      {service.solution}
                    </p>
                  </div>

                  {/* Business benefit */}
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Business Benefit</span>
                    <p className="text-xs sm:text-[13px] text-slate-700 dark:text-slate-200 mt-0.5 leading-relaxed font-bold">
                      {service.benefit}
                    </p>
                  </div>

                  {/* Bullets List */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1.5">Scope Inclusions</span>
                    <ul className="space-y-1.5 text-xs text-slate-650 dark:text-slate-350 leading-relaxed list-none pl-0">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tools row */}
              <div className="mt-6 pt-4 border-t border-slate-150 dark:border-slate-800 flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider mr-2">Tools:</span>
                  {service.tools.map((t) => (
                    <span key={t} className="text-[10px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-850 px-2 py-0.5 rounded-md border border-slate-200/30 dark:border-slate-700/30">
                      {t}
                    </span>
                  ))}
                </div>

                {/* AI Qualification Flow Timeline (Nested) */}
                {service.isAi && (
                  <div className="mt-2 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-2">
                      AI Lead Qualification Flow
                    </span>
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap items-center gap-y-2.5 gap-x-1.5 text-center sm:text-left">
                      {aiWorkflow.map((step, stepIdx) => (
                        <div key={stepIdx} className="flex items-center gap-1 shrink-0 bg-white dark:bg-slate-850 border border-slate-200/50 dark:border-slate-800/60 px-2 py-1.5 rounded-xl">
                          <div className="text-center">
                            <div className="text-[10px] font-bold text-slate-900 dark:text-white leading-none">{step.label}</div>
                            <div className="text-[8px] text-slate-500 mt-0.5 leading-none">{step.desc}</div>
                          </div>
                          {stepIdx < aiWorkflow.length - 1 && (
                            <ArrowRight className="hidden sm:block w-2.5 h-2.5 text-slate-400 shrink-0 ml-1.5" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
