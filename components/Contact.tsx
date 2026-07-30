"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, MapPin, Send, Check } from "lucide-react";
import { Button, buttonVariants } from "./button";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "ghl-setup",
    budget: "2k-5k",
    message: "",
    contactMethod: "email",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    if (!validateEmail(formState.email)) {
      setEmailError("Please enter a valid business email address.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API form intake submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormState({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "ghl-setup",
      budget: "2k-5k",
      message: "",
      contactMethod: "email",
    });
  };

  return (
    <section id="contact" className="py-10 md:py-14 lg:py-16 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase">
            Get In Touch
          </h2>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule a Strategy Call
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Let&apos;s discuss how we can automate your customer acquisition pipeline and 
            configure your GoHighLevel + AI CRM systems.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 rounded-2xl shadow-xs">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Let&apos;s Build Your System
              </h3>
              <p className="text-sm md:text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                Ready to optimize your speed-to-lead, run Google/Meta campaigns, 
                or build conversational AI booking agents? Complete the inquiry form or book 
                a discovery call directly using the calendar link below.
              </p>

              <div className="space-y-5">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Direct</div>
                    <a href="mailto:masood.786tmp@gmail.com" className="text-sm font-bold text-slate-900 dark:text-white hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md">
                      masood.786tmp@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Direct Booking Calendar</div>
                    <a href="https://calendly.com/masood-786tmp/30min" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-slate-900 dark:text-white hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md">
                      calendly.com/masood-786tmp/30min
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/30 text-blue-600 dark:text-blue-400">
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

            {/* Privacy trust note */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-5">
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Your information will only be used to respond to your project inquiry.
              </p>
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 md:p-8 rounded-2xl shadow-xs flex flex-col justify-center">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-100 dark:border-emerald-900/30">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Request Received</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-3 leading-relaxed font-normal">
                  Thanks! Your request has been received. I’ll contact you within one business day to discuss your project.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Masood Azhar"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Business Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="you@company.com"
                      className={`w-full bg-slate-50 dark:bg-slate-850 border ${
                        emailError ? "border-rose-500 focus:border-rose-500" : "border-slate-200 dark:border-slate-700/80 focus:border-blue-500"
                      } px-3.5 py-2.5 rounded-xl text-sm focus:outline-none text-slate-900 dark:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600`}
                    />
                    {emailError && (
                      <span className="text-xs text-rose-500 mt-1 block font-medium">{emailError}</span>
                    )}
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Phone Number <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Company Name <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      placeholder="Acme Business"
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                    />
                  </div>
                </div>

                {/* Service Needed and Estimated Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Service Needed <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <option value="ghl-setup">GoHighLevel CRM Setup</option>
                      <option value="ai-agents">AI Voice and Chat Agents</option>
                      <option value="paid-ads">Meta and Google Ads</option>
                      <option value="custom-api">Integrations & Workflow Automation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                      Estimated Budget <span className="text-slate-400 font-normal lowercase">(optional)</span>
                    </label>
                    <select
                      id="budget"
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <option value="1.5k-2.5k">$1,500 - $2,500</option>
                      <option value="2.5k-5k">$2,500 - $5,000</option>
                      <option value="above-5k">$5,000 +</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label htmlFor="contactMethod" className="block text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Preferred Contact Method <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <select
                    id="contactMethod"
                    value={formState.contactMethod}
                    onChange={(e) => setFormState({ ...formState, contactMethod: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <option value="email">Business Email</option>
                    <option value="phone">Phone / WhatsApp</option>
                    <option value="calendly">Direct Calendar Call</option>
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Project Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe what automated workflows, GHL setups, or AI agents your business needs..."
                    className="w-full bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700/80 px-3.5 py-2.5 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white transition-colors duration-200 resize-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="default"
                  size="lg"
                  className="w-full justify-center cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    "Sending Request..."
                  ) : (
                    <>
                      <span>Book My Free Strategy Call</span>
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </Button>

                {/* Direct Booking Link */}
                <div className="text-center pt-2 flex justify-center">
                  <a 
                    href="https://calendly.com/masood-786tmp/30min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Prefer to choose a time directly? View my calendar</span>
                    <span>→</span>
                  </a>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
