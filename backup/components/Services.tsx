"use client";

import { motion } from "framer-motion";
import { MessageSquareCode, Database, BarChart3, Puzzle } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "CRM & GoHighLevel Setup",
      desc: "Complete system architecture: customized sales pipelines, multi-channel messaging (SMS/Email/WhatsApp), automations, and sub-account setups optimized for your sales force.",
    },
    {
      icon: <MessageSquareCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "AI Agents & Automation",
      desc: "Deploy custom conversational AI agents powered by OpenAI. Handle instant lead follow-up, qualify contacts, book calendar appointments, and sync data 24/7 without manual intervention.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "High-ROI Paid Ads & Systems",
      desc: "End-to-end design and management of Google and Meta Ads campaigns. Built-in custom conversion tracking API, target landing pages, and lead hook strategies to maximize pipeline volume.",
    },
    {
      icon: <Puzzle className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      title: "API & Custom Integrations",
      desc: "Seamlessly connect disjointed systems using custom webhooks, APIs, Zapier, and Make. Integrate databases, billing systems, and external marketing platforms into a single source of truth.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Services & Expertise
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Tailored Automation Engines Built For Scale
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            From direct customer acquisition to behind-the-scenes workflow automation, 
            I implement high-precision software stacks that turn leads into booked calls.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="group relative bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 dark:hover:border-blue-500/40 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 dark:bg-blue-400/5 rounded-bl-full rounded-tr-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <span className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-950 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {service.title}
              </h3>
              
              <p className="mt-3 text-slate-600 dark:text-slate-350 text-sm leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
