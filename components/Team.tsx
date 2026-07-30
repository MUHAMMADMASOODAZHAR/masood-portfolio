"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  leadershipBadge?: string;
  image: string;
  bio: string;
  expertise: string[];
  linkedin?: string;
  portfolio?: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      id: "masood-azhar",
      name: "Masood Azhar",
      role: "GoHighLevel & AI Automation Specialist",
      leadershipBadge: "Founder & Automation Lead",
      image: "/masood-azhar.jpg",
      bio: "Specializes in GoHighLevel CRM architecture, AI voice and chat agents, N8N middleware integrations, and sales pipeline automation for service businesses.",
      expertise: [
        "GoHighLevel CRM",
        "AI Voice & Chat",
        "N8N & Zapier",
        "Sales Automation"
      ],
      linkedin: "https://linkedin.com",
      portfolio: "https://upwork.com"
    },
    {
      id: "systems-engineer",
      name: "Automation Systems Specialist",
      role: "Integration & Webhook Engineer",
      leadershipBadge: "Technical Systems Lead",
      image: "/masood-azhar.jpg",
      bio: "Focuses on custom API webhook endpoints, database synchronization, complex N8N workflow logic, and automated team notification channels.",
      expertise: [
        "API Webhooks",
        "Database Sync",
        "Node.js / Python",
        "Asana & Slack Sync"
      ],
      linkedin: "https://linkedin.com"
    }
  ];

  return (
    <section id="team" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <span className="text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase block mb-2">
            MEET THE TEAM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight font-heading">
            Experts Behind Your Automation Systems
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-650 dark:text-slate-300 leading-relaxed font-normal max-w-[680px] mx-auto">
            Our team combines GoHighLevel, AI automation, CRM development, workflow integrations, funnels, and digital marketing expertise to build reliable systems around each client’s business process.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch max-w-4xl mx-auto">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              className="bg-slate-50/80 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 md:p-7 rounded-2xl shadow-xs flex flex-col justify-between hover:shadow-md transition-all duration-300 text-left"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Top Image & Leadership Badge */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-5 border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-950">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  {member.leadershipBadge && (
                    <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-slate-800 shadow-xs">
                      <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        {member.leadershipBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Member Name & Role */}
                <div>
                  <h3 className="text-[21px] md:text-[23px] font-bold text-slate-950 dark:text-white leading-tight font-heading">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Short Biography */}
                <p className="text-[15px] text-slate-650 dark:text-slate-300 leading-relaxed font-normal mt-3.5 mb-5">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.expertise.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200/60 dark:border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social / Profile Links */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center gap-4 text-sm font-semibold">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline transition-colors inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-0.5"
                  >
                    <span>LinkedIn</span>
                    <span className="text-[11px] font-bold select-none">↗</span>
                  </a>
                )}
                {member.portfolio && (
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-950 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md p-0.5"
                  >
                    <span>View Profile</span>
                    <span className="text-[11px] font-bold select-none">↗</span>
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Compact Team CTA */}
        <div className="mt-12 lg:mt-16 bg-slate-50/80 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs text-left">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-slate-950 dark:text-white font-heading">
              Need a Team to Build and Manage Your System?
            </h3>
            <p className="text-sm text-slate-650 dark:text-slate-300 mt-1 font-normal">
              Discuss your CRM, automation, AI-agent, funnel, or integration requirements with our team.
            </p>
          </div>

          <Button
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            variant="default"
            size="default"
            className="w-full md:w-auto h-[46px] rounded-[10px] px-5 font-semibold cursor-pointer shadow-sm text-sm shrink-0 inline-flex items-center gap-1.5"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}
