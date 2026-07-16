"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Globe, MessageSquare, Briefcase, DollarSign, ArrowRight } from "lucide-react";
import { Button } from "./button";

interface ToolTile {
  name: string;
  desc: string;
  logoIcon: React.ReactNode;
}

interface ToolCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  tools: ToolTile[];
}

export default function Tools() {
  const categories: ToolCategory[] = [
    {
      id: "crm",
      label: "CRM",
      icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      tools: [
        {
          name: "GoHighLevel",
          desc: "CRM and lead management",
          logoIcon: (
            <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="GoHighLevel Logo">
              <rect x={3} y={3} width={18} height={18} rx={2} />
              <path d="M21 9H3M21 15H3M12 3v18" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "automation",
      label: "Automation",
      icon: <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      tools: [
        {
          name: "N8N",
          desc: "Custom workflow automation",
          logoIcon: (
            <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="N8N Logo">
              <circle cx={12} cy={12} r={3} />
              <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
            </svg>
          ),
        },
        {
          name: "Zapier",
          desc: "Conditional API triggers",
          logoIcon: (
            <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Zapier Logo">
              <path d="M12 3v18M3 12h18M5.5 5.5l13 13M5.5 18.5l13-13" />
            </svg>
          ),
        },
        {
          name: "Webhooks",
          desc: "Real-time trigger endpoints",
          logoIcon: (
            <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Webhooks Logo">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "advertising",
      label: "Advertising",
      icon: <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      tools: [
        {
          name: "Meta Ads",
          desc: "Paid social lead generation",
          logoIcon: (
            <svg className="w-6 h-6 text-blue-650" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Meta Ads Logo">
              <path d="M7 12a5 5 0 0110 0M17 12a5 5 0 01-10 0" />
            </svg>
          ),
        },
        {
          name: "Google Ads",
          desc: "Search intent conversions",
          logoIcon: (
            <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Google Ads Logo">
              <path d="M12 3l9 16H3L12 3z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "communication",
      label: "Communication",
      icon: <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      tools: [
        {
          name: "Twilio",
          desc: "SMS & call routing pipelines",
          logoIcon: (
            <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Twilio Logo">
              <circle cx={12} cy={12} r={9} />
              <circle cx={12} cy={12} r={3} />
            </svg>
          ),
        },
        {
          name: "WhatsApp",
          desc: "Instant customer chat feeds",
          logoIcon: (
            <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="WhatsApp Logo">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "operations",
      label: "Operations",
      icon: <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      tools: [
        {
          name: "Asana",
          desc: "Task boards & operations sync",
          logoIcon: (
            <svg className="w-6 h-6 text-rose-455" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Asana Logo">
              <circle cx={12} cy={8} r={2} />
              <circle cx={8} cy={14} r={2} />
              <circle cx={16} cy={14} r={2} />
            </svg>
          ),
        },
        {
          name: "Slack",
          desc: "Internal team notifications",
          logoIcon: (
            <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Slack Logo">
              <rect x={3} y={3} width={7} height={7} rx={1} />
              <rect x={14} y={3} width={7} height={7} rx={1} />
              <rect x={14} y={14} width={7} height={7} rx={1} />
              <rect x={3} y={14} width={7} height={7} rx={1} />
            </svg>
          ),
        },
        {
          name: "Google Sheets",
          desc: "Data archive backups",
          logoIcon: (
            <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Google Sheets Logo">
              <rect x={3} y={3} width={18} height={18} rx={2} />
              <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "payments",
      label: "Payments",
      icon: <DollarSign className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      tools: [
        {
          name: "Stripe",
          desc: "Automated billing webhooks",
          logoIcon: (
            <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-label="Stripe Logo">
              <path d="M8 9h8M8 15h8M12 5v14" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section
      id="tools"
      className="relative py-10 md:py-14 lg:py-16 bg-gradient-to-b from-slate-50 via-blue-50/20 to-white dark:from-slate-950 dark:via-slate-900/40 dark:to-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Network Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-650 dark:text-blue-400 uppercase">
            Tools & Platforms
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Tools and Platforms Connected Around Your Workflow
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-350 leading-relaxed font-normal">
            I connect your CRM, advertising, communication, operations, and payment tools into one reliable system.
          </p>
        </div>

        {/* Categories Grid - 3 columns, 2 rows on desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-6 md:p-8 rounded-[16px] shadow-sm hover:shadow-[0_8px_30px_rgba(59,130,246,0.04)] hover:-translate-y-0.5 hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-350 flex flex-col min-h-[220px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-50 dark:border-slate-850">
                <span className="p-1 rounded-md bg-blue-50 dark:bg-blue-950/40 shrink-0">
                  {cat.icon}
                </span>
                <h3 className="text-sm sm:text-base font-semibold text-slate-950 dark:text-white uppercase tracking-wider">
                  {cat.label}
                </h3>
              </div>

              {/* Software Tiles */}
              <div className="space-y-3 flex-grow">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-850/60 border border-slate-100/40 dark:border-slate-800/40 hover:bg-slate-100/50 dark:hover:bg-slate-800/60 transition-colors duration-200"
                  >
                    {/* Logo wrapper */}
                    <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-100/60 dark:border-slate-800/60 shrink-0 shadow-xs">
                      {tool.logoIcon}
                    </div>
                    {/* Labels */}
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-950 dark:text-white truncate">
                        {tool.name}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Link CTA */}
        <div className="text-center mt-12 pt-4">
          <Button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="link"
            className="cursor-pointer inline-flex flex-wrap items-center justify-center gap-1.5 text-sm font-medium hover:underline text-blue-600 whitespace-normal text-center max-w-full px-4"
          >
            <span>Need a custom integration? Discuss Your Workflow</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/button:translate-x-0.5 shrink-0" />
          </Button>
        </div>

      </div>
    </section>
  );
}
