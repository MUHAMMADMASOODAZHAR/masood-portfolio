"use client";

import { Bot, Layers, Megaphone, Workflow, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

export default function About() {
  const stats = [
    { label: "GHL Deployments", value: "80+" },
    { label: "Voice & Chat Agents", value: "35+" },
    { label: "Automation Hours", value: "400+" },
  ];

  const credentials = [
    {
      icon: <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "GoHighLevel Systems",
      desc: "CRM, pipelines, workflows, calendars, and funnels",
    },
    {
      icon: <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "AI Voice & Chat Agents",
      desc: "Lead qualification, follow-up, and appointment booking",
    },
    {
      icon: <Workflow className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "Workflow Integrations",
      desc: "N8N, Zapier, APIs, webhooks, and connected tools",
    },
    {
      icon: <Megaphone className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      title: "Lead Generation Systems",
      desc: "Meta Ads, Google Ads, tracking, and automated nurturing",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-[72px] bg-slate-50/50 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-900/60 transition-colors duration-300 overflow-hidden"
    >
      {/* Subtle Blurred Background Gradient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Responsive CSS Grid Placement */}
        {/* On desktop: Columns 1-2 = Portrait (Row 1-4). Columns 3-5 = Texts, Cards, Stats, CTAs (Row 1-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-10 lg:gap-x-16 items-center">
          
          {/* 1. MEET YOUR AUTOMATION PARTNER Label & Headings */}
          {/* Order 1 on mobile, Col 3 on desktop */}
          <div className="lg:col-start-3 lg:col-span-3 lg:row-start-1 order-1 text-left space-y-4">
            <span className="text-xs font-semibold tracking-wider text-blue-650 dark:text-blue-400 uppercase">
              MEET YOUR AUTOMATION PARTNER
            </span>
            <h2 className="text-3xl md:text-[40px] font-bold text-slate-950 dark:text-white leading-tight max-w-[700px]">
              The GoHighLevel and Automation Specialist Behind Your Growth System
            </h2>
            <div className="space-y-4 text-slate-650 dark:text-slate-350 font-normal text-base lg:text-[17px] leading-[1.7] mt-6">
              <p>
                I design connected CRM, AI, advertising, and workflow systems that help service businesses capture leads, respond faster, and turn more opportunities into booked appointments.
              </p>
              <p>
                Every system is built around the client’s actual sales process—combining GoHighLevel, AI voice and chat agents, integrations, and automated follow-up into one reliable operating system.
              </p>
            </div>
          </div>

          {/* 2. LEFT COLUMN - PROFESSIONAL PORTRAIT */}
          {/* Order 3 on mobile, Col 1-2 on desktop spanning rows 1 to 2 */}
          <div className="lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 order-3 w-full flex items-center justify-center lg:pr-4">
            {/* Portrait Card Container */}
            <div className="relative w-full max-w-[320px] xs:max-w-[380px] aspect-[4/5] rounded-[20px] overflow-hidden shadow-md border border-slate-200 dark:border-slate-850 group bg-slate-100 dark:bg-slate-900 mx-auto">
              
              {/* Main Portrait Image */}
              <Image
                src="/masood-azhar.jpg"
                alt="Professional Portrait of Masood Azhar"
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Floating Credential Badge Upper-Right */}
              <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-100 dark:border-slate-800 px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 z-20">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="text-[10px] font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                  GHL & AI Specialist
                </span>
              </div>

              {/* Translucent bottom overlay panel */}
              <div className="absolute bottom-4 inset-x-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-white/20 dark:border-slate-800 p-4 rounded-[14px] shadow-sm z-10 text-left">
                <div className="font-bold text-slate-950 dark:text-white text-base">
                  Masood Azhar
                </div>
                <div className="text-[11px] text-blue-650 dark:text-blue-400 font-extrabold uppercase tracking-wide mt-0.5">
                  GoHighLevel & AI Automation Architect
                </div>
              </div>

            </div>
          </div>

          {/* 3. CREDENTIAL CARDS (2x2 Grid) */}
          {/* Order 4 on mobile, Col 3 on desktop */}
          <div className="lg:col-start-3 lg:col-span-3 lg:row-start-2 order-4 w-full">
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-4 rounded-[14px] shadow-xs flex flex-col justify-between hover:-translate-y-0.5 hover:border-blue-100 dark:hover:border-blue-900/30 transition-all duration-200 min-h-[110px] text-left"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/20 flex items-center justify-center shrink-0">
                      {cred.icon}
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-950 dark:text-white leading-snug">
                      {cred.title}
                    </h4>
                  </div>
                  <p className="text-[12px] sm:text-[13px] text-slate-505 dark:text-slate-400 leading-relaxed flex-grow font-medium">
                    {cred.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. UNIFIED AUTHORITY BAR CARD (METRICS + CTA + PROFILE LINKS) */}
          {/* Order 5 on mobile, spans all 5 columns on desktop (Row 3) */}
          <div className="lg:col-span-5 lg:col-start-1 lg:row-start-3 order-5 w-full bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-5 lg:py-5 lg:px-6 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 mt-6">
            
            {/* Left Portion: Metrics (approx 58%) */}
            <div className="w-full lg:w-[58%] grid grid-cols-3 gap-3 md:gap-4 items-center">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center lg:items-start text-center lg:text-left ${
                    i < 2 ? "border-r border-slate-200/60 dark:border-slate-800/60 pr-3 lg:pr-4" : ""
                  }`}
                >
                  <span className="text-[26px] sm:text-[30px] lg:text-[28px] xl:text-[32px] font-bold text-slate-950 dark:text-white leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[13px] sm:text-[14px] lg:text-[13px] text-slate-600 dark:text-slate-400 font-medium mt-0.5 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Portion: CTA & Social Profile Links (approx 42%) */}
            <div className="w-full lg:w-[42%] flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6">
              
              {/* Primary Call Action Button */}
              <Button
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                variant="default"
                size="default"
                className="w-full sm:w-auto h-[46px] sm:h-[48px] rounded-[10px] px-5 font-semibold cursor-pointer shadow-sm text-sm"
              >
                Book a Free Strategy Call
              </Button>

              {/* Elegant profile links */}
              <div className="flex items-center gap-5 shrink-0 text-sm font-semibold">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-950 dark:text-slate-200 hover:text-blue-650 dark:hover:text-blue-400 hover:underline transition-colors duration-200 inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-0.5"
                >
                  <span>LinkedIn</span>
                  <span className="text-[11px] font-extrabold select-none">↗</span>
                </a>
                <a
                  href="https://upwork.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-950 dark:text-slate-200 hover:text-blue-650 dark:hover:text-blue-400 hover:underline transition-colors duration-200 inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-0.5"
                >
                  <span>Upwork</span>
                  <span className="text-[11px] font-extrabold select-none">↗</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
