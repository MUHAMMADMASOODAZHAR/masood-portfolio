"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      initials: "M.S.",
      industry: "Legal Services",
      source: "Upwork Client",
      service: "GoHighLevel CRM Setup & AI Bot Integration",
      content: "Masood constructed our intake environment from scratch, integrating an AI chat assistant with our pipeline triggers. We no longer leak prospects over the weekend, and data entry is entirely automated.",
      rating: 5,
    },
    {
      initials: "S.L.",
      industry: "Renewable Energy",
      source: "Contract Project",
      service: "Meta Lead Gen Funnel & Conversions API",
      content: "The ad tracking loops Masood implemented are extremely precise. He configured the Conversions API to feed qualified GHL pipeline actions directly back to Meta Ads. Outbound booking rates improved immediately.",
      rating: 5,
    },
    {
      initials: "D.V.",
      industry: "E-Commerce Retail",
      source: "Consulting Client",
      service: "Cart Recovery Automated Trigger Sequences",
      content: "The abandoned cart automation setups are built with high precision. We went from basic static emails to personalized, dynamic behavior-triggered SMS. Highly professional automation developer.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Testimonials
          </h2>
          <p className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Feedback & Operational Outcomes
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-200">
            Reviews from business owners and operators verifying completed CRM automation 
            and AI qualification integrations.
          </p>
        </div>

        {/* Testimonials Grid (Stacked on Mobile, Grid on Desktop) */}
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 p-8 md:p-10 rounded-3xl flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[340px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Verified Source Badge & Star Ratings */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-md border border-emerald-100 dark:border-emerald-900/30">
                    Verified {review.source}
                  </span>
                  
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <MessageSquare className="w-10 h-10 text-blue-500/10 absolute -top-5 -left-5 pointer-events-none" />
                  <p className="text-base sm:text-[17px] text-slate-700 dark:text-slate-200 leading-relaxed relative z-10 italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
              </div>

              {/* Client Profile Info Card */}
              <div className="border-t border-slate-200 dark:border-slate-800/80 pt-6 mt-8">
                <div className="text-[10px] font-extrabold uppercase tracking-wide text-slate-500">
                  Integration Completed
                </div>
                <div className="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 font-extrabold mt-1 mb-4 leading-snug">
                  {review.service}
                </div>
                
                <div>
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white">Client: {review.initials}</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-bold uppercase tracking-wider">{review.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
