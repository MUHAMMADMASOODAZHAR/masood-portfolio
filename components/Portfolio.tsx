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
  screenshotLabel: string;
  screenshotFile: string;
}

export default function Portfolio() {
  const caseStudies: CaseStudy[] = [
    {
      title: "GoHighLevel CRM and Lead Follow-Up Automation",
      category: "CRM & Workflow Optimization",
      icon: <Layers className="w-5 h-5 text-white" />,
      problem: "Scattered incoming lead sources across multiple platforms resulting in delayed callbacks and lost opportunities.",
      solutionBullets: [
        "Consolidated form, chat, and email leads into a unified GoHighLevel dashboard.",
        "Programmed conditional branching follow-up SMS and email speed-to-lead responders.",
        "Integrated sales pipeline stages with automated team notification alerts."
      ],
      tools: ["GoHighLevel CRM", "Twilio SMS", "Mailgun Gateway"],
      result: "All inbound leads centralized, with initial response times reduced to under 60 seconds via automated triggers.",
      gradient: "from-blue-600 to-indigo-700",
      screenshotLabel: "GHL Pipeline Dashboard UI Preview",
      screenshotFile: "ghl-pipeline-preview.png",
    },
    {
      title: "AI Voice and Chat Appointment-Booking System",
      category: "Conversational AI Integration",
      icon: <Bot className="w-5 h-5 text-white" />,
      problem: "Operational capacity capped by staff receptionists unable to qualify leads and answer FAQs after business hours.",
      solutionBullets: [
        "Connected OpenAI API conversational endpoints to incoming Web Chat and SMS lines.",
        "Programmed system rules to query real-time calendar availability.",
        "Configured safe guardrails preventing agents from discussing off-topic inquiries."
      ],
      tools: ["OpenAI API", "Vapi AI Voice", "Make.com Flows", "Calendly"],
      result: "Achieved 24/7 lead screening coverage, scheduling consultation appointments directly into client calendars.",
      gradient: "from-violet-600 to-fuchsia-700",
      screenshotLabel: "Conversational AI Logs UI Preview",
      screenshotFile: "ai-logs-preview.png",
    },
    {
      title: "GoHighLevel and Asana Integration Using N8N",
      category: "Enterprise Middleware Sync",
      icon: <GitMerge className="w-5 h-5 text-white" />,
      problem: "Sales representatives manually copying and pasting closed customer contact details from CRM into project tools.",
      solutionBullets: [
        "Constructed a secure webhook receiver on self-hosted N8N middleware.",
        "Configured automatic workspace creations and template task boards on Asana.",
        "Synced client custom fields between CRM contacts and operational boards."
      ],
      tools: ["N8N Automation", "GoHighLevel API", "Asana Developer API"],
      result: "Seamless handoff between sales and operations, with client workspace generation automated in real-time.",
      gradient: "from-emerald-600 to-teal-700",
      screenshotLabel: "N8N Webhook Node Route Preview",
      screenshotFile: "n8n-nodes-preview.png",
    },
  ];

  return (
    <section id="portfolio" className="py-10 md:py-14 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Case Studies
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proven Operations Deployed For Partners
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-750 dark:text-slate-200">
            A review of real client workflow integrations demonstrating structured system architecture 
            and automated data pipelines.
          </p>
        </div>

        {/* Responsive Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Visual Header / Screenshot Placeholder */}
                {/* Visual Representation Graphic:
                    To replace this template with a real image asset, place the screenshot file under public/
                    (e.g., public/screenshots/{study.screenshotFile}) and uncomment the <Image> component below.
                    
                    import Image from 'next/image';
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image src={`/screenshots/${study.screenshotFile}`} alt={study.screenshotLabel} fill className="object-cover" />
                    </div>
                */}
                <div className={`aspect-[16/10] bg-gradient-to-br ${study.gradient} p-6 flex flex-col justify-between text-white relative`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      {study.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-base font-extrabold leading-snug">{study.title}</h3>
                  </div>

                  <div className="absolute bottom-3 right-3 text-[9px] bg-slate-950/40 text-slate-200 px-2 py-0.5 rounded font-mono">
                    Visual Representation
                  </div>
                </div>

                {/* Case Study Content Body */}
                <div className="p-6 space-y-4 text-left">
                  {/* Problem */}
                  <div className="space-y-1">
                    <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Problem</h4>
                    <p className="text-xs sm:text-[13px] text-slate-650 dark:text-slate-350 leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* What Was Built */}
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">What Was Built</h4>
                    <ul className="space-y-1 text-xs text-slate-650 dark:text-slate-350 list-none pl-0">
                      {study.solutionBullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-500 mt-1 shrink-0">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tools */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Tools</h4>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] bg-slate-150 dark:bg-slate-850 text-slate-700 dark:text-slate-350 px-2.5 py-0.5 rounded-md font-bold"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className="space-y-1 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <h4 className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Result</h4>
                    <p className="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed font-black">
                      {study.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-0 text-left">
                <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  variant="link"
                  className="cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>View Full Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/button:translate-x-0.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
