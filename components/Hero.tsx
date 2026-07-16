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

  const glowVariants: Variants = {
    initial: { scale: 0.9, opacity: 0.3 },
    animate: {
      scale: 1.1,
      opacity: 0.5,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  const trustItems = [
    { label: "GoHighLevel Systems", icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "AI Voice Agents", icon: <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "AI Chat Agents", icon: <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "CRM Integrations", icon: <Link className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
    { label: "Meta & Google Ads", icon: <Megaphone className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center pt-24 pb-16 md:pt-28 md:pb-16 lg:pt-28 lg:pb-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] pointer-events-none" />

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/8 dark:bg-blue-500/3 blur-3xl pointer-events-none z-0" />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/8 dark:bg-indigo-500/3 blur-3xl pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col gap-12 lg:gap-16">
        
        {/* Main 2-Column Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          
          {/* Left Side: Copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants} 
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100/60 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 animate-pulse" />
              <span>GHL Setup • AI Agents • CRM Systems</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-[36px] md:text-[44px] lg:text-[48px] xl:text-[54px] font-bold text-slate-900 dark:text-white leading-[1.08] tracking-[-0.025em] max-w-[780px] xl:max-w-[840px]"
            >
              GoHighLevel, AI Agents &
              <br className="hidden xl:block" />{" "}
              <span className="text-blue-600 dark:text-blue-400 whitespace-nowrap">Ad Systems</span> That Turn Leads
              <br className="hidden xl:block" />{" "}
              Into <span className="text-blue-600 dark:text-blue-400 whitespace-nowrap">Booked Appointments</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base lg:text-[17px] text-slate-650 dark:text-slate-350 max-w-[620px] leading-[1.65] font-normal"
            >
              I build custom systems for service businesses: automating lead capturing pipelines, 
              qualifying prospects with conversational AI text/voice agents, and running closed-loop Meta 
              and Google Ads to scale booked sales meetings.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 mt-[28px] w-full">
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="default"
                size="lg"
                className="w-full sm:w-auto cursor-pointer"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => {
                  const element = document.getElementById("portfolio");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto cursor-pointer"
              >
                View Case Studies
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side: CRM Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative w-full h-[450px] flex items-center justify-center lg:justify-end"
          >
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-[400px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-[0_15px_40px_rgba(148,163,184,0.12)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.35)] p-6 relative z-10"
            >
              {/* OSX-style Top Bar controls */}
              <div className="flex gap-1.5 mb-5 items-center">
                <span className="w-2 h-2 rounded-full bg-rose-400 block" />
                <span className="w-2 h-2 rounded-full bg-amber-400 block" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 block" />
                <span className="text-[10px] text-slate-400 dark:text-slate-500 font-extrabold ml-auto uppercase tracking-wider">
                  CRM PIPELINE ENGINE
                </span>
              </div>

              {/* Stats overview */}
              <div className="grid grid-cols-2 gap-3.5 mb-5">
                <div className="bg-slate-50 dark:bg-slate-850 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <div className="text-slate-400 text-[10px] uppercase font-extrabold tracking-wider">
                    New Leads
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-white mt-1">482</div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-850 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800/80">
                  <div className="text-slate-400 text-[10px] uppercase font-extrabold tracking-wider">
                    Active Opportunities
                  </div>
                  <div className="text-xl font-black text-slate-900 dark:text-white mt-1">114</div>
                </div>
              </div>

              {/* Active conversion logs preview */}
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 block">
                  Conversion Activity
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-850 border border-slate-100/50 dark:border-slate-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                  <div className="flex-grow min-w-0">
                    <span className="font-bold text-xs text-slate-900 dark:text-white">Appointments Booked</span>
                    <p className="text-[10px] text-slate-505">AI scheduling flow success</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">10m ago</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-850 border border-slate-100/50 dark:border-slate-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <div className="flex-grow min-w-0">
                    <span className="font-bold text-xs text-slate-900 dark:text-white">Follow-Ups Queue</span>
                    <p className="text-[10px] text-slate-505">SMS trigger sent automatically</p>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">35m ago</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Element 1: Active Lead Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-6 -left-6 md:-left-10 z-20 w-[190px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-lg flex flex-col gap-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/30">
                  AI Active
                </span>
                <Bot className="w-3.5 h-3.5 text-blue-500" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900 dark:text-white leading-tight">James Carter</h5>
                <p className="text-[9px] text-slate-505 mt-0.5 leading-snug">AI voice pipeline qualifying...</p>
              </div>
            </motion.div>

            {/* Floating Element 2: Appointment Status Progress */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -bottom-6 -right-6 z-20 w-[180px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl shadow-lg flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                <CalendarCheck2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Calls Booked</div>
                <div className="text-sm font-black text-slate-900 dark:text-white mt-0.5">14 Today</div>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* Compact Trust Indicators Row underneath the Hero */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-200/60 dark:border-slate-850 pt-8"
        >
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-8 text-slate-500 dark:text-slate-400">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
              Specialized Stack & Services:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 md:flex md:flex-wrap md:justify-center items-center w-full md:w-auto">
              {trustItems.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2.5 text-xs font-semibold justify-center md:justify-start"
                >
                  <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200/40 dark:border-slate-800/40">
                    {item.icon}
                  </span>
                  <span className="text-slate-700 dark:text-slate-350">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}