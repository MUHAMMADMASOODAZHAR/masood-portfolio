"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, CalendarCheck2, Bot, Layers, MessageSquare, Megaphone, Link } from "lucide-react";
import { Button } from "./button";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const trustItems = [
    { label: "GoHighLevel Systems", icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "AI Voice Agents", icon: <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "AI Chat Agents", icon: <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "CRM Integrations", icon: <Link className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "Meta and Google Ads", icon: <Megaphone className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 bg-slate-50/50 dark:bg-slate-950/40 overflow-hidden text-slate-900 dark:text-white transition-colors duration-300 border-b border-slate-100 dark:border-slate-900/60"
    >
      {/* Background Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10 flex flex-col gap-12 lg:gap-16">
        
        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          
          {/* Left Side: Headline & Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Hero Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 text-blue-650 dark:text-blue-400 text-xs font-semibold tracking-wide max-w-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>GOHIGHLEVEL • AI AGENTS • CRM AUTOMATION</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[clamp(32px,7vw,42px)] md:text-[46px] lg:text-[50px] font-bold text-slate-950 dark:text-white leading-[1.12] tracking-[-0.02em] max-w-[800px] w-full"
            >
              GoHighLevel, AI Agents & Ad Systems That Turn Leads Into Booked Appointments
            </motion.h1>

            {/* Supporting Paragraph (17px–18px desktop, 16px mobile, weight 400, line-height 1.65, max 620px) */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-[17px] lg:text-[18px] text-slate-650 dark:text-slate-350 max-w-[620px] w-full leading-[1.65] font-normal"
            >
              I build connected GoHighLevel, AI-agent and advertising systems that capture leads, automate follow-up and turn more opportunities into booked appointments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 mt-8 w-full">
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="default"
                size="default"
                className="w-full sm:w-auto h-[48px] rounded-[10px] px-6 font-semibold cursor-pointer shadow-sm text-sm"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>

              <Button
                onClick={() => {
                  const element = document.getElementById("portfolio");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                size="default"
                className="w-full sm:w-auto h-[48px] rounded-[10px] px-6 font-semibold cursor-pointer text-sm"
              >
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual Mockup Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end py-4 lg:py-6"
          >
            <div className="relative w-full max-w-[400px]">
              {/* Main CRM Card */}
              <div className="w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl shadow-md p-5 sm:p-6 relative z-10 text-left">
                {/* Top Controls & Sample Dashboard Label */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/30">
                    Sample CRM Dashboard
                  </span>
                </div>

                {/* Status Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">New Lead</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">Inbound Contact</div>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-950/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="text-slate-500 dark:text-slate-400 text-[10px] uppercase font-bold tracking-wider">Follow-Up Sent</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">Automated SMS</div>
                  </div>
                </div>

                {/* Conversion Activity Logs */}
                <div className="space-y-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                    Pipeline Activity
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <div className="flex-grow min-w-0">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">Appointment Booked</span>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Calendar scheduling completed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <div className="flex-grow min-w-0">
                      <span className="font-bold text-xs text-slate-900 dark:text-white">Opportunity Updated</span>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Moved to strategy call stage</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: AI Active */}
              <div className="hidden sm:flex absolute -top-4 -left-6 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-md items-center gap-2 text-left">
                <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-slate-900 dark:text-white block leading-tight">AI Agent Screening</span>
                  <span className="text-[9px] text-slate-500 font-medium">Conversational qualifier</span>
                </div>
              </div>

              {/* Floating Badge 2: Calls Booked */}
              <div className="hidden sm:flex absolute -bottom-4 -right-4 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 p-3 rounded-xl shadow-md items-center gap-2 text-left">
                <CalendarCheck2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-slate-900 dark:text-white block leading-tight">Direct Scheduling</span>
                  <span className="text-[9px] text-slate-500 font-medium">Real-time calendar sync</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Compact Trust Indicators Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-200/60 dark:border-slate-800/60 pt-8"
        >
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-4 gap-x-6 text-slate-650 dark:text-slate-350">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-650 dark:text-blue-400 w-full md:w-auto text-center md:text-left">
              Core Competencies:
            </span>
            <div className="flex flex-wrap justify-center items-center gap-y-3 gap-x-6 w-full md:w-auto">
              {trustItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold">
                  <span className="w-6 h-6 rounded-md bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center border border-blue-100 dark:border-blue-900/20">
                    {item.icon}
                  </span>
                  <span className="text-slate-900 dark:text-slate-200">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}