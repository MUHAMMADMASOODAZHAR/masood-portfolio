"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Marcus Sterling",
      role: "CEO, Sterling Legal Group",
      metrics: "34% more consults, 20 hrs/wk saved",
      content: "Masood integrated our front-office system with a custom AI receptionist and GoHighLevel CRM. The results were immediate. We stopped leaking leads over the weekends and our intake processes are entirely hands-off now.",
      rating: 5,
    },
    {
      name: "Sarah Lin",
      role: "Director of Ops, SolarScale US",
      metrics: "4.1x average ROAS, 1,200 leads",
      content: "Working with Masood was a game changer for our ad campaigns. He didn't just configure the Meta Ads, he built the conversion API tracking loop directly into our CRM. The algorithm optimized instantly.",
      rating: 5,
    },
    {
      name: "David Vance",
      role: "Founder, HealthCart D2C",
      metrics: "$140K recovered abandoned carts",
      content: "The cart win-back automations Masood engineered were incredibly precise. We went from basic templates to custom behavior-triggered flows. Highly professional, strategy-first developer.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Testimonials
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Loved By Business Owners & Operators
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            Read how businesses have leveraged custom CRM architectures, lead funnels, 
            and AI integrations to scale up efficiency and revenue.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-8 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <div className="relative">
                  <MessageSquare className="w-8 h-8 text-blue-500/10 absolute -top-4 -left-4 pointer-events-none" />
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed relative z-10 italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
              </div>

              {/* Client Profile & Highlight Metric */}
              <div className="border-t border-slate-200/60 dark:border-slate-800 pt-6 mt-8">
                <div className="bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100/50 dark:border-blue-900/20 rounded-xl px-4 py-2 mb-4">
                  <div className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    Key Result
                  </div>
                  <div className="text-xs font-bold text-slate-950 dark:text-white mt-0.5">
                    {review.metrics}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
