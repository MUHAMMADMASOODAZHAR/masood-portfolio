"use client";

import { motion } from "framer-motion";
import { MessageSquare, CalendarRange, Workflow, ShieldCheck, HeartHandshake, Eye } from "lucide-react";

export default function Features() {
  const featuresList = [
    {
      icon: <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Conversational Speed-to-Lead",
      desc: "Instantly trigger personalized, multi-channel responses (SMS/Email/WhatsApp) when an inquiry lands. Never lose a lead to delay.",
    },
    {
      icon: <CalendarRange className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Interactive AI Calendar Booking",
      desc: "AI agents query GoHighLevel or Google Calendar to suggest, coordinate, and finalize consultation slots directly within chat conversations.",
    },
    {
      icon: <Workflow className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Smart Workflow Automation",
      desc: "Advanced conditional routing logic: assign leads by performance, send push alerts to sales staff, and trigger re-engagement sequences.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "CRM Integrity & Database Hygiene",
      desc: "Automated deduplication, format verification, and lead scoring matrices to keep lists clean, accurate, and highly segmentable.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Conversion Feedback API",
      desc: "Send deep conversion details (e.g. Qualified Lead, Deal Closed) directly to ad trackers, lowering acquisition cost by training ad algorithms.",
    },
    {
      icon: <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Comprehensive Performance Dashboards",
      desc: "Keep a transparent pulse on total ad spend, lead source metrics, and pipeline efficiency via unified client analytics panels.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Platform Features
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            High-Performance Operational Capabilities
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            A look at the specific technical features engineered into every automation ecosystem 
            I build for client partners.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-3xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-900/30">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-snug">
                  {feat.title}
                </h3>
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
