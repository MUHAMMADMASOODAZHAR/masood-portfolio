"use client";

import { motion, Variants } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, CalendarCheck2, DollarSign, Bot } from "lucide-react";
import { Button } from "./button";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const glowVariants: Variants = {
    initial: { scale: 0.9, opacity: 0.4 },
    animate: {
      scale: 1.15,
      opacity: 0.7,
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-32 pb-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Decorative Grid Overlay (Blueprint/Tech look) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] pointer-events-none" />

      {/* Ambient background lights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl pointer-events-none z-0" />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
        
        {/* Left Side: Copy */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-8"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-wide uppercase shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 animate-pulse" />
            <span>GoHighLevel • AI Automation • CRM Systems</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white leading-[1.1] tracking-tight"
          >
            GoHighLevel, AI Agents &
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent"> Ad Systems </span>
            That Turn Leads Into Booked Appointments
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-650 dark:text-slate-350 max-w-2xl leading-relaxed"
          >
            I engineer high-precision operational systems: automating lead routing, custom 
            conversational AI follow-ups, instantaneous SMS sequences, and multi-channel Google/Meta 
            ad funnels with closed-loop tracking APIs.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="default"
              size="lg"
              className="bg-blue-600 text-white rounded-2xl font-bold px-7 py-4 text-xs uppercase tracking-wider hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all cursor-pointer flex items-center gap-2.5"
            >
              <span>Book Free Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              onClick={() => {
                const element = document.getElementById("portfolio");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              variant="outline"
              size="lg"
              className="border-slate-350 dark:border-slate-700/80 text-slate-750 dark:text-slate-300 bg-white/50 dark:bg-slate-900/30 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl font-bold px-7 py-4 text-xs uppercase tracking-wider transition-all cursor-pointer"
            >
              View Case Studies
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-200/60 dark:border-slate-800/80"
          >
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Full Ownership Transfer</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Data Privacy Compliant</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
              <span>Official Developer Partner</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated CRM Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="lg:col-span-5 relative w-full h-[500px] flex items-center justify-center"
        >
          {/* Decorative backdrop light glow */}
          <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/2 rounded-full blur-3xl pointer-events-none" />

          {/* Main Dashboard Panel UI Shell */}
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[380px] md:max-w-[400px] bg-white dark:bg-slate-900 border border-slate-250/60 dark:border-slate-800 rounded-3xl shadow-[0_20px_50px_rgba(148,163,184,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden p-5 relative z-10"
          >
            {/* OSX Top Bar controls */}
            <div className="flex gap-1.5 mb-5 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 block" />
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-extrabold ml-auto uppercase tracking-wider">
                GHL Pipeline Engine
              </span>
            </div>

            {/* Active Logs Header */}
            <div className="mb-4">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Live Automation Activity
              </h4>
            </div>

            {/* Log List */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800/60 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-ping" />
                <div className="flex-grow min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">Lead Ingested</div>
                  <div className="text-[9px] text-slate-500 truncate">Meta Lead Form • Solar campaign</div>
                </div>
                <span className="text-[9px] text-slate-400 shrink-0 font-medium">Just now</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800/60 shadow-sm opacity-90">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <div className="flex-grow min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">AI Agent Initial Outreach</div>
                  <div className="text-[9px] text-slate-500 truncate">SMS qualification sequence fired</div>
                </div>
                <span className="text-[9px] text-slate-400 shrink-0 font-medium">32s ago</span>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800/60 shadow-sm opacity-80">
                <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                <div className="flex-grow min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-white truncate">Lead Qualified by AI</div>
                  <div className="text-[9px] text-slate-500 truncate">Budget, need, timeline verified</div>
                </div>
                <span className="text-[9px] text-slate-400 shrink-0 font-medium">2m ago</span>
              </div>
            </div>

            {/* Simulated Live Connection Lines */}
            <div className="mt-5 border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold text-emerald-500 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Operational
              </span>
              <span className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase">
                Uptime: 99.98%
              </span>
            </div>
          </motion.div>

          {/* Floating Element 1: Lead Card (AI Qualification) */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-2 -left-6 md:-left-12 z-20 w-[180px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-4 rounded-2xl shadow-lg flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full border border-blue-100 dark:border-blue-900/30">
                AI Agent Active
              </span>
              <Bot className="w-3.5 h-3.5 text-blue-500" />
            </div>
            <div>
              <h5 className="text-[11px] font-bold text-slate-950 dark:text-white leading-tight">Sarah Jenkins</h5>
              <p className="text-[9px] text-slate-500 mt-0.5 leading-snug">Qualifying prospect for Solar System install...</p>
            </div>
          </motion.div>

          {/* Floating Element 2: Appointment Stats progress ring */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-10 -right-4 md:-right-6 z-25 w-[160px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-4 rounded-2xl shadow-lg flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <CalendarCheck2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Bookings</div>
              <div className="text-sm font-extrabold text-slate-950 dark:text-white mt-0.5">18 Today</div>
              <div className="text-[8px] text-emerald-500 font-bold mt-0.5">+24% vs yesterday</div>
            </div>
          </motion.div>

          {/* Floating Element 3: Pipeline Metric card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-8 -right-6 md:-right-10 z-20 w-[180px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 p-4 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <DollarSign className="w-4 h-4" />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-slate-450 dark:text-slate-400">Closed Sales</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-base font-extrabold text-slate-950 dark:text-white">$14,820</span>
              <span className="text-[8px] text-emerald-500 font-bold flex items-center gap-0.5">
                <TrendingUp className="w-2.5 h-2.5" />
                +18.4%
              </span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}