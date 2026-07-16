"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Project {
  title: string;
  category: "crm" | "ai" | "ads";
  desc: string;
  impact: string;
  tags: string[];
  features: string[];
  gradient: string;
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<"all" | "crm" | "ai" | "ads">("all");

  const categories = [
    { id: "all", label: "All Cases" },
    { id: "crm", label: "CRM Systems" },
    { id: "ai", label: "AI Automations" },
    { id: "ads", label: "Paid Ads" },
  ] as const;

  const projects: Project[] = [
    {
      title: "Real Estate GHL CRM Overhaul",
      category: "crm",
      desc: "Architected a custom GoHighLevel CRM environment for a multi-agent brokerage. Replaced manual spreadsheets with automated intake forms, lead routing, and immediate callback sequences.",
      impact: "Reduced response time from 3 hours to 45 seconds; 34% increase in appointment bookings.",
      tags: ["GoHighLevel", "SMS Automations", "Zapier", "Pipeline Design"],
      features: ["Round-Robin Lead Assignment", "Automated Voicemail Drops", "Direct Dial Sync"],
      gradient: "from-blue-600 to-indigo-700",
    },
    {
      title: "Conversational AI Intake Agent",
      category: "ai",
      desc: "Configured and deployed an OpenAI GPT-4 powered conversational voice and chat agent. Intercepts incoming social media and website leads, answers FAQs, qualifies potential clients, and logs booking details.",
      impact: "Saved 22 hours/week in receptionist labor; achieved 92% accurate lead categorization.",
      tags: ["OpenAI API", "Voice Agents", "Make.com", "Vector Databases"],
      features: ["Multi-turn Context Memory", "Live Database Lead Scoring", "Calendar Booking Trigger"],
      gradient: "from-violet-600 to-fuchsia-700",
    },
    {
      title: "SaaS Solar Lead Generation Funnel",
      category: "ads",
      desc: "Designed and scaled a multi-channel digital marketing pipeline across Meta (FB/IG) and Google Search. Leveraged custom conversion APIs to train ad algorithms on qualified booking data.",
      impact: "Generated 1,200+ qualified leads in 90 days; achieved an average 4.1x ROAS (Return on Ad Spend).",
      tags: ["Meta Ads", "Google Ads", "Conversions API", "High-Converting Funnels"],
      features: ["Custom Webhook Feedback Loops", "Lookalike Audience Scaling", "Dynamic Ad Testing"],
      gradient: "from-emerald-500 to-teal-700",
    },
    {
      title: "E-Commerce Customer Win-back Automations",
      category: "crm",
      desc: "Built a customized retention engine for a D2C brand. Utilized predictive purchase cycles to trigger personalized SMS and email follow-ups with tailored product recommendations.",
      impact: "Recovered $140,000+ in abandoned checkout revenue; 18% improvement in customer lifetime value.",
      tags: ["Klaviyo", "Shopify API", "Make.com", "Advanced Segmentation"],
      features: ["Abandoned Cart Sequences", "Predictive Restock Triggers", "Dynamic Coupon Injection"],
      gradient: "from-rose-500 to-orange-600",
    },
    {
      title: "AI Voice Lead Qualification Assistant",
      category: "ai",
      desc: "Implemented an automated outbound dialer that calls raw cold leads within 2 minutes of form submission. Qualifies prospects based on budget and timing constraints, then live-transfers to reps.",
      impact: "Boosted live transfer rate by 45%; lowered cost-per-acquisition by 22%.",
      tags: ["Vapi AI", "Retell AI", "GoHighLevel", "Node.js"],
      features: ["Real-time STT/TTS Pipeline", "Custom Prompt Injection", "Agent Sentiment Analysis"],
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  const filteredProjects = activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Case Studies
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Client Success & System Deployments
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            Explore operational architectures and marketing pipelines deployed for clients in e-commerce, 
            professional services, and B2B SaaS.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-slate-200/60 dark:bg-slate-800 p-1.5 rounded-full border border-slate-200 dark:border-slate-700/60">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeTab === category.id
                    ? "text-slate-950 dark:text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {activeTab === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-white dark:bg-slate-900 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between text-white relative`}>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none" />
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full w-fit">
                    {project.category === "crm"
                      ? "CRM System"
                      : project.category === "ai"
                      ? "AI Automation"
                      : "Paid Ads"}
                  </span>
                  
                  <div>
                    <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-350 leading-relaxed mb-4">
                      {project.desc}
                    </p>
                    
                    {/* Features list */}
                    <div className="space-y-2 mb-4">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <CheckCircle className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact & Tags */}
                  <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                    <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100/60 dark:border-blue-900/30 rounded-xl p-3 mb-4">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                        Proven Result
                      </div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
                        {project.impact}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-2 py-0.5 rounded font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
