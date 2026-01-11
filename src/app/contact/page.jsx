"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Linkedin, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [focusedField, setFocusedField] = useState(null);

  return (
    <main className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden relative flex flex-col">
      {/* --- GLOBAL NOISE OVERLAY --- */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-50"></div>

      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="fixed top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-red-900/10 rounded-full blur-[150px] pointer-events-none" />

      <section className="flex-grow grid lg:grid-cols-2 relative z-10 pt-32 min-h-screen">
        {/* --- LEFT: INFO & STATEMENT --- */}
        <div className="relative p-8 md:p-20 flex flex-col justify-between border-r border-neutral-900 bg-black/50 backdrop-blur-sm">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-[1px] bg-red-600"></span>

              <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
                Get In Touch
              </span>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-8xl leading-[0.8] font-black text-white tracking-tighter mix-blend-exclusion mb-12"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              CONTACT
            </h1>

            <p className="max-w-md text-lg md:text-xl font-light text-neutral-400 leading-relaxed">
              For custom couture commissions, press features, or private
              appointments at our Colombo atelier.
            </p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 lg:mt-0"
          >
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <MapPin className="w-3 h-3 text-red-600" /> The Atelier
              </h3>
              <address className="not-italic text-neutral-500 font-light text-sm leading-loose">
                No: 7A,
                <br />
                Thalwaththa, Gonawala
                <br />
                Kelaniya,
                <br />
                Sri Lanka
                <span className="text-red-900/80 uppercase text-[10px] tracking-widest mt-2 block">
                  By Appointment Only
                </span>
              </address>
            </div>

            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Mail className="w-3 h-3 text-red-600" /> Digital
              </h3>
              <ul className="space-y-4 text-sm text-neutral-500 font-light">
                <li>
                  <a
                    href="mailto:shehara.madurawala@icloud.com"
                    className="hover:text-white transition-colors"
                  >
                    shehara.madurawala@icloud.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+94718350877"
                    className="hover:text-white transition-colors"
                  >
                    +94 71 835 0877
                  </a>
                </li>

                {/* Social Links with Logos */}
                <li className="pt-2 flex flex-col gap-3">
                  <SocialLink
                    href="https://instagram.com/shey.collective"
                    icon={Instagram}
                    label="Instagram"
                  />
                  
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: THE FORM --- */}
        <div className="p-8 md:p-20 flex flex-col justify-center bg-neutral-950/30">
          <form className="max-w-xl w-full mx-auto space-y-12">
            {/* Intro Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <p className="text-md text-neutral-400 uppercase tracking-widest text-neutral-600 mb-2">
                Get IN TOUCH
              </p>
              
            </motion.div>

            <div className="space-y-8">
              <FormField
                id="name"
                label="01. Identification"
                placeholder="Your full name"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                delay={0.4}
              />

              <FormField
                id="email"
                type="email"
                label="02. Correspondence"
                placeholder="Your email address"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                delay={0.5}
              />

              <div className="grid grid-cols-2 gap-8">
                <FormField
                  id="phone"
                  label="03. Contact No."
                  placeholder="+94 ..."
                  focusedField={focusedField}
                  setFocusedField={setFocusedField}
                  delay={0.6}
                />
                <FormField
                  id="type"
                  label="04. Inquiry Type"
                  placeholder="Couture / Press"
                  focusedField={focusedField}
                  setFocusedField={setFocusedField}
                  delay={0.65}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="group"
              >
                <label
                  className={`block text-xs uppercase tracking-widest mb-2 transition-colors duration-300 ${
                    focusedField === "message"
                      ? "text-red-500"
                      : "text-neutral-500"
                  }`}
                >
                  05. The Vision
                </label>
                <textarea
                  id="message"
                  rows={1}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b border-neutral-800 py-2 text-xl text-white placeholder-neutral-800 focus:outline-none focus:border-red-600 transition-colors duration-500 resize-none h-auto min-h-[50px]"
                  placeholder="Tell us about your project..."
                />
              </motion.div>
            </div>

            {/* --- BUTTON: SEND REQUEST --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="pt-8"
            >
              <button
                type="button"
                className="group relative w-full md:w-auto bg-white text-black px-10 py-4 overflow-hidden"
              >
                {/* Hover Fill Effect */}
                <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

                <div className="relative z-10 flex items-center justify-center gap-4">
                  <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold group-hover:text-white transition-colors">
                    Send Request
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300" />
                </div>
              </button>
            </motion.div>
          </form>
        </div>
      </section>
    </main>
  );
}

// --- SUB-COMPONENTS ---

function FormField({
  id,
  label,
  placeholder,
  type = "text",
  focusedField,
  setFocusedField,
  delay,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="group"
    >
      <label
        htmlFor={id}
        className={`block text-xs uppercase tracking-widest mb-2 transition-colors duration-300 ${
          focusedField === id ? "text-red-500" : "text-neutral-500"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        onFocus={() => setFocusedField(id)}
        onBlur={() => setFocusedField(null)}
        className="w-full bg-transparent border-b border-neutral-800 py-2 text-lg md:text-xl text-white placeholder-neutral-800 focus:outline-none focus:border-red-600 transition-colors duration-500"
        placeholder={placeholder}
      />
    </motion.div>
  );
}

function SocialLink({ href, icon: Icon, label }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-3 text-neutral-400 hover:text-white group transition-colors"
    >
      <div className="p-2 border border-neutral-800 rounded-full group-hover:border-red-600 group-hover:bg-red-900/10 transition-colors">
        <Icon className="w-4 h-4 group-hover:text-red-500 transition-colors" />
      </div>
      <span className="text-xs uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
        {label}
      </span>
    </Link>
  );
}
