"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Bot, GitMerge } from "lucide-react";
import { Button } from "./button";

interface CaseStudy {
  title: string;
  category: string;
  icon: React.ReactNode;
  problem: string;
  solutionBullets: string[];
  result: string;
  tools: string[];
  gradient: string;
  actionText: string;
}

export default function Portfolio() {
  const caseStudies: CaseStudy[] = [
    {
      title: "GoHighLevel CRM and Automated Lead Follow-Up System",
      category: "CRM & Workflow Optimization",
      icon: <Layers className="w-5 h-5 text-white" />,
      problem: "Incoming leads from web forms and ads were managed manually across spreadsheets, causing slow response times and missed callbacks.",
      solutionBullets: [
        "Consolidated all form, chat, and ad lead sources into a single GoHighLevel CRM environment.",
        "Programmed automated SMS & email speed-to-lead sequences that trigger under 2 minutes.",
        "Structured clear pipeline stages with automatic sales team notification alerts."
      ],
      tools: ["GoHighLevel CRM", "Twilio SMS", "Mailgun"],
      result: "Centralized lead management with initial outreach automated to respond instantly upon lead submission.",
      gradient: "from-blue-600 to-indigo-700",
      actionText: "View GoHighLevel CRM Case Study",
    },
    {
      title: "AI Voice and Chat Appointment-Booking Workflow",
      category: "Conversational AI Integration",
      icon: <Bot className="w-5 h-5 text-white" />,
      problem: "Staff receptionists were overwhelmed by repetitive phone inquiries and unable to qualify leads or book appointments after hours.",
      solutionBullets: [
        "Connected OpenAI conversational models to web chat and phone API endpoints.",
        "Configured real-time calendar availability queries and direct appointment booking rules.",
        "Set strict prompt guardrails to ensure precise qualification and smooth rep handoffs."
      ],
      tools: ["OpenAI API", "Vapi AI Voice", "Make.com", "Calendly"],
      result: "Automated 24/7 lead screening and calendar slot booking directly into client calendars.",
      gradient: "from-blue-700 to-violet-800",
      actionText: "Explore AI Voice Agent Systems",
    },
    {
      title: "GoHighLevel and Asana Integration Using N8N",
      category: "Enterprise Middleware Sync",
      icon: <GitMerge className="w-5 h-5 text-white" />,
      problem: "Sales representatives manually copied closed client details from the CRM into project management software, causing data errors.",
      solutionBullets: [
        "Constructed a secure webhook receiver using self-hosted N8N middleware.",
        "Automated workspace creation and template task board generation on Asana.",
        "Synced client custom fields between CRM contacts and operational task boards."
      ],
      tools: ["N8N Automation", "GoHighLevel API", "Asana API"],
      result: "Seamless operational handoff with project workspace generation completely automated upon deal closure.",
      gradient: "from-slate-800 to-blue-900",
      actionText: "Review Workflow Integration Services",
    },
  ];

  return (
    <section id="portfolio" className="py-10 md:py-14 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Case Studies
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Systems & Deployments
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            A review of real client workflow integrations demonstrating structured system architecture 
            and automated data pipelines.
          </p>
        </div>

        {/* 3 Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Visual Header Representation */}
                <div className={`aspect-[16/9] bg-gradient-to-br ${study.gradient} p-5 flex flex-col justify-between text-white relative`}>
                  <div className="flex justify-between items-center z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-md">
                      {study.category}
                    </span>
                    <div className="w-7 h-7 rounded-md bg-white/15 flex items-center justify-center">
                      {study.icon}
                    </div>
                  </div>
                  
                  <div className="z-10 mt-auto">
                    <h3 className="text-base font-bold leading-snug">{study.title}</h3>
                  </div>
                </div>

                {/* Case Study Content Body */}
                <div className="p-6 space-y-4 text-left">
                  {/* Problem */}
                  <div>
                    <h4 className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-1">Problem</h4>
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-300 leading-relaxed font-normal">
                      {study.problem}
                    </p>
                  </div>

                  {/* What Was Built */}
                  <div>
                    <h4 className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-1.5">What Was Built</h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-650 dark:text-slate-300 list-none pl-0">
                      {study.solutionBullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-500 mt-1 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <h4 className="text-[11px] uppercase font-bold text-slate-400 tracking-wider mb-1">Verified Result</h4>
                    <p className="text-xs sm:text-sm text-slate-900 dark:text-white leading-relaxed font-semibold">
                      {study.result}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] bg-slate-100 dark:bg-slate-850 text-slate-700 dark:text-slate-300 px-2.5 py-0.5 rounded-md font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-6 pb-6 pt-0 text-left">
                <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="link"
                  className="cursor-pointer inline-flex items-center gap-1.5 p-0 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <span>{study.actionText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
