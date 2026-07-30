"use client";

import { motion } from "framer-motion";
import { MessageSquareCode, Database, BarChart3, Puzzle, ArrowRight } from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  summary: string;
  bullets: string[];
  tools: string[];
  actionLabel: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      icon: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "GoHighLevel CRM Systems",
      summary: "End-to-end CRM setup that consolidates leads, automates instant speed-to-lead follow-up, and organizes pipeline tracking.",
      bullets: [
        "Automated 2-minute SMS & email callback sequences",
        "Custom pipeline stages and visual tracking boards",
        "Clean contact field schemas, tags, and smart lists",
        "Calendar booking integration and appointment reminders"
      ],
      tools: ["GoHighLevel", "Twilio", "Mailgun"],
      actionLabel: "Discuss CRM Setup",
    },
    {
      icon: <MessageSquareCode className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "AI Voice and Chat Agents",
      summary: "24/7 conversational text and voice agents powered by OpenAI to qualify inbound leads and schedule calendar appointments.",
      bullets: [
        "Inbound & outbound AI voice qualification screening",
        "Real-time calendar slot querying and direct booking",
        "Custom knowledge base prompt rules and guardrails",
        "Automated rep handoff alerts upon qualification"
      ],
      tools: ["OpenAI", "Vapi AI Voice", "Make.com"],
      actionLabel: "Explore AI Agents",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Meta and Google Ads",
      summary: "High-converting paid acquisition campaigns backed by CRM Conversions API tracking to optimize ad budgets for real appointments.",
      bullets: [
        "Offline Conversions API event feedback loops",
        "Fast-loading, mobile-responsive landing pages",
        "Audience exclusion rules and targeted lead funnels",
        "Lead attribution and cost-per-appointment tracking"
      ],
      tools: ["Meta Pixel", "Google GTM", "GHL Funnels"],
      actionLabel: "View Ad Setup",
    },
    {
      icon: <Puzzle className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Integrations and Workflow Automation",
      summary: "Custom API webhook integrations connecting your CRM, billing, project management, and team communication tools.",
      bullets: [
        "Custom API webhook middleware pipelines via N8N & Zapier",
        "Automated Asana task generation upon deal closure",
        "Real-time Slack notification alerts for sales teams",
        "Stripe payment billing webhooks & data sync"
      ],
      tools: ["N8N", "Zapier", "Webhooks", "Node.js"],
      actionLabel: "Plan Integrations",
    },
  ];

  return (
    <section id="services" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Services & Core Capabilities
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Connected Systems Built for Scale
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            I configure robust tech infrastructure to solve sales bottlenecks, scale customer acquisition, 
            and automate manual workflows.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-slate-50/80 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-6 md:p-8 rounded-2xl hover:border-blue-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-[20px] font-bold text-slate-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Summary */}
                <p className="text-sm md:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-5">
                  {service.summary}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">Includes:</span>
                  <ul className="space-y-2 list-none pl-0 text-sm text-slate-650 dark:text-slate-300">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-blue-500 mt-1 shrink-0">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Tools & Action */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 items-center">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Tools:</span>
                  {service.tools.map((t) => (
                    <span key={t} className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-850 px-2.5 py-0.5 rounded-md border border-slate-200/60 dark:border-slate-700/60">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{service.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
