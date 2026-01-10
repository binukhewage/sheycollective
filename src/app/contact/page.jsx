"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Instagram } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  // Simple state for form focus effects
  const [focusedField, setFocusedField] = useState(null);

  return (
    <main className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden relative">
      
      {/* --- GLOBAL NOISE OVERLAY --- */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-50"></div>

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vw] bg-neutral-900/20 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 pt-32 pb-20 px-6 md:px-20 max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="mb-24 md:mb-32">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-6"
            >
                <span className="w-12 h-[1px] bg-red-600"></span>
                <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">Get In Touch</span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-9xl font-black text-white tracking-tighter"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
                INQUIRIES
            </motion.h1>
        </div>

        <div className="grid md:grid-cols-12 gap-16 lg:gap-24">
            
            {/* --- LEFT COL: CONTACT FORM --- */}
            <div className="md:col-span-7 lg:col-span-8">
                <form className="space-y-12">
                    
                    {/* Name Field */}
                    <FormField 
                        label="Full Name" 
                        placeholder="Who are we addressing?" 
                        id="name"
                        focusedField={focusedField}
                        setFocusedField={setFocusedField}
                        delay={0.4}
                    />

                    {/* Email Field */}
                    <FormField 
                        label="Email Address" 
                        placeholder="contact@example.com" 
                        id="email"
                        type="email"
                        focusedField={focusedField}
                        setFocusedField={setFocusedField}
                        delay={0.5}
                    />

                    {/* Subject Field */}
                    <FormField 
                        label="Subject" 
                        placeholder="Custom Couture, Press, General Inquiry" 
                        id="subject"
                        focusedField={focusedField}
                        setFocusedField={setFocusedField}
                        delay={0.6}
                    />

                    {/* Message Field */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.7 }}
                         className="group relative"
                    >
                        <label 
                            htmlFor="message" 
                            className={`block text-xs uppercase tracking-widest mb-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-red-500' : 'text-neutral-500'}`}
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl md:text-2xl text-white placeholder-neutral-800 focus:outline-none focus:border-red-600 transition-colors duration-500 resize-none"
                            placeholder="Tell us about your vision..."
                        />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        className="group relative mt-12 bg-neutral-900 text-white px-12 py-6 overflow-hidden w-full md:w-auto"
                    >
                        <div className="absolute inset-0 bg-red-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        <div className="relative z-10 flex items-center justify-between gap-8">
                            <span className="text-sm uppercase tracking-[0.2em] font-bold">Send Request</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                    </motion.button>
                </form>
            </div>

            {/* --- RIGHT COL: INFO & ATELIER --- */}
            <div className="md:col-span-5 lg:col-span-4 space-y-16 mt-12 md:mt-0">
                
                {/* Atelier Location */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <div className="flex items-center gap-3 mb-6 text-red-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest">The Atelier</span>
                    </div>
                    <address className="not-italic text-lg text-neutral-400 leading-relaxed font-light">
                        No. 45, Ward Place,<br />
                        Cinnamon Gardens,<br />
                        Colombo 07, Sri Lanka.
                    </address>
                    <div className="mt-4 text-xs text-neutral-600 uppercase tracking-widest">
                        By Appointment Only
                    </div>
                </motion.div>

                {/* Contact Direct */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                >
                     <div className="flex items-center gap-3 mb-6 text-red-600">
                        <Mail className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest">Direct Contact</span>
                    </div>
                    <div className="space-y-4">
                        <a href="mailto:info@sheycollective.com" className="block text-xl text-white hover:text-red-500 transition-colors">
                            info@sheycollective.com
                        </a>
                        <a href="tel:+94771234567" className="block text-xl text-white hover:text-red-500 transition-colors">
                            +94 77 123 4567
                        </a>
                    </div>
                </motion.div>

                {/* Socials */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                >
                     <div className="flex items-center gap-3 mb-6 text-red-600">
                        <Instagram className="w-4 h-4" />
                        <span className="text-xs uppercase tracking-widest">Follow Us</span>
                    </div>
                    <div className="flex flex-col gap-2">
                         <SocialLink label="Instagram" href="#" />
                         <SocialLink label="TikTok" href="#" />
                         <SocialLink label="Pinterest" href="#" />
                    </div>
                </motion.div>
                
                {/* Brand Logo Watermark */}
                <div className="pt-20 opacity-20 pointer-events-none select-none">
                    <span className="text-8xl text-neutral-800 font-serif">SHEY</span>
                </div>

            </div>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function FormField({ label, placeholder, id, type = "text", focusedField, setFocusedField, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="group relative"
        >
            <label 
                htmlFor={id} 
                className={`block text-xs uppercase tracking-widest mb-4 transition-colors duration-300 ${focusedField === id ? 'text-red-500' : 'text-neutral-500'}`}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                onFocus={() => setFocusedField(id)}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-transparent border-b border-neutral-800 py-4 text-xl md:text-2xl text-white placeholder-neutral-800 focus:outline-none focus:border-red-600 transition-colors duration-500"
                placeholder={placeholder}
            />
        </motion.div>
    );
}

function SocialLink({ label, href }) {
    return (
        <a 
            href={href} 
            className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors py-2"
        >
            <span className="h-[1px] w-8 bg-neutral-800 group-hover:bg-red-600 transition-colors"></span>
            <span className="text-sm uppercase tracking-wider">{label}</span>
        </a>
    )
}