"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      initials: "M.S.",
      industry: "Legal Services",
      source: "Verified Upwork Review",
      service: "GoHighLevel CRM Setup & AI Bot Integration",
      content: "Masood constructed our intake environment from scratch, integrating an AI chat assistant with our pipeline triggers. We no longer leak prospects over the weekend, and data entry is entirely automated.",
      rating: 5,
    },
    {
      initials: "S.L.",
      industry: "Renewable Energy",
      source: "Verified Upwork Review",
      service: "Meta Lead Gen Funnel & Conversions API",
      content: "The ad tracking loops Masood implemented are extremely precise. He configured the Conversions API to feed qualified GHL pipeline actions directly back to Meta Ads. Outbound booking rates improved immediately.",
      rating: 5,
    },
    {
      initials: "D.V.",
      industry: "E-Commerce Retail",
      source: "Verified Client Review",
      service: "Automated Lead Recovery & Trigger Sequences",
      content: "The abandoned cart automation setups are built with high precision. We went from basic static emails to personalized, dynamic behavior-triggered SMS. Highly professional automation developer.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-10 md:py-14 lg:py-16 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Client Reviews
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Feedback & Operational Outcomes
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Reviews from business operators verifying completed CRM automation 
            and AI qualification integrations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              className="bg-slate-50/80 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[320px]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                {/* Verified Source Badge & Star Ratings */}
                <div className="flex justify-between items-center mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-md border border-emerald-100 dark:border-emerald-900/30">
                    {review.source}
                  </span>
                  
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Review Text: 16px font size */}
                <div className="relative">
                  <MessageSquare className="w-8 h-8 text-blue-500/10 absolute -top-3 -left-3 pointer-events-none" />
                  <p className="text-base text-slate-700 dark:text-slate-200 leading-relaxed relative z-10 font-normal italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
              </div>

              {/* Client Profile Info Card */}
              <div className="border-t border-slate-200/60 dark:border-slate-800/80 pt-5 mt-6">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Integration Completed
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200 font-bold mb-3 leading-snug">
                  {review.service}
                </div>
                
                <div>
                  <h4 className="text-sm md:text-[15px] font-bold text-slate-900 dark:text-white">
                    Client: {review.initials}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {review.industry}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
