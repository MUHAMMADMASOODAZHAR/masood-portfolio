"use client";

import { motion } from "framer-motion";
import { Cpu, Terminal, Layers, Globe } from "lucide-react";

export default function Tools() {
  const toolCategories = [
    {
      title: "Core CRM Platforms",
      icon: <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      items: [
        { name: "GoHighLevel", desc: "CRM, pipelines, and trigger workflows" },
        { name: "HubSpot", desc: "Enterprise operations and contact syncing" },
        { name: "ActiveCampaign", desc: "Advanced behavior-driven email marketing" },
      ],
    },
    {
      title: "Artificial Intelligence",
      icon: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      items: [
        { name: "OpenAI GPT-4", desc: "Conversational prompt systems" },
        { name: "Vapi / Retell AI", desc: "Outbound/inbound conversational voice lines" },
        { name: "Pinecone", desc: "Vector store for company knowledge bases" },
      ],
    },
    {
      title: "Integration & Code",
      icon: <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      items: [
        { name: "Make.com (Integromat)", desc: "Complex conditional route middleware" },
        { name: "Zapier", desc: "Fast system hook connectors" },
        { name: "Node.js / Python", desc: "Custom scripts and database endpoints" },
      ],
    },
    {
      title: "Ad Tech & Traffic",
      icon: <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      items: [
        { name: "Meta Ads Manager", desc: "Paid lead capture (FB & IG)" },
        { name: "Google Ads", desc: "Search intent and video lead funnels" },
        { name: "CAPI / Pixel", desc: "Offline feedback loops to ad managers" },
      ],
    },
  ];

  return (
    <section id="tools" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            My Tool Stack
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Integrated Softwares Deployed For Performance
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            A cohesive suite of industry-standard SaaS platforms, middleware, 
            and developer utilities combined to run your business automations.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-3xl hover:shadow-sm transition-shadow duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center border border-blue-100 dark:border-blue-900/30">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-950 dark:text-white uppercase tracking-wider">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-l-2 border-slate-100 dark:border-slate-800 pl-3">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
