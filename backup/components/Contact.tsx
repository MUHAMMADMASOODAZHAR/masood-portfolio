"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, MapPin, Send, Check } from "lucide-react";
import { Button } from "./button";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call to GHL Webhook
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Contact
          </h2>
          <p className="mt-3 text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            Schedule a Strategy Call
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-350">
            Let&apos;s discuss how we can automate your customer acquisition pipeline and 
            configure your GoHighLevel + AI CRM systems.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-sm">
            <div>
              <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-6">
                Let&apos;s Build Your System
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-350 leading-relaxed mb-8">
                Ready to optimize your speed-to-lead, run Google/Meta campaigns, 
                or build conversational AI booking agents? Complete the inquiry form or book 
                a discovery call directly.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Direct</div>
                    <a href="mailto:masood@example.com" className="text-sm font-bold text-slate-900 dark:text-white hover:underline">
                      masood@example.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Direct Booking</div>
                    <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 dark:text-white hover:underline">
                      calendly.com/masood-azhar
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Location</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">
                      Remote • Global Integrations
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick trust note */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
              <p className="text-[10px] text-slate-400 dark:text-slate-500 leading-relaxed uppercase tracking-wider font-bold">
                🔒 GDPR & Data Safety Compliant System Architecture.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 rounded-3xl shadow-sm flex flex-col justify-center">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6 border border-emerald-100 dark:border-emerald-900/30">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Inquiry Received!</h3>
                <p className="text-sm text-slate-600 dark:text-slate-350 max-w-sm mx-auto mt-3 leading-relaxed">
                  Thank you for reaching out. Your lead data has been logged into our CRM pipeline. 
                  An AI follow-up trigger will reach out shortly to coordinate a booking time.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Masood Azhar"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-950 dark:text-white transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="masood@example.com"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-950 dark:text-white transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-950 dark:text-white transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Automate Corp"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-950 dark:text-white transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                    Project Requirements / Bottlenecks
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="We need to integrate our Meta lead forms with GHL pipelines, and set up an AI agent to handle immediate SMS outreach..."
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-950 dark:text-white transition-colors duration-200 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 text-xs uppercase tracking-wider font-extrabold bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Connecting to CRM..."
                  ) : (
                    <>
                      <span>Submit Project Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
