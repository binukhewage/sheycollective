"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Twitter,
  Facebook,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-neutral-400 overflow-hidden pt-24 pb-12 px-6 border-t border-neutral-900">
      {/* Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-200 z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          {/* BRAND */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link href="/" className="group inline-block mb-8 select-none">
              <div className="flex flex-col items-start">
                <span
                  className="text-6xl font-black text-white tracking-tighter leading-[0.8]"
                  style={{ fontFamily: "var(--font-playfair), serif" }}
                >
                  Shey
                </span>
                <span
                  className="text-4xl text-red-600 font-light ml-4"
                  style={{
                    fontFamily: "var(--font-pinyon), cursive",
                    textShadow: "0 4px 12px rgba(0,0,0,0.8)",
                  }}
                >
                  collective
                </span>
              </div>
            </Link>

            <p className="text-sm text-neutral-500 uppercase tracking-wide max-w-xs leading-relaxed">
              Redefining modern luxury 
            </p>
          </div>

          {/* EXPLORE */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">
              Explore
            </h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium">
              <FooterLink href="/collections" label="Collections" />
              <FooterLink href="/blog" label="Blog" />
              <FooterLink href="/about" label="About" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>

          {/* LEGAL */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium">
              <FooterLink href="/privacy" label="Privacy Policy" />
              
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="md:col-span-3">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">
              The List
            </h4>
            <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
              Join the collective. First access to new drops and private events.
            </p>

            <form className="relative">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-neutral-800 py-3 text-xs text-white placeholder-neutral-700 focus:outline-none focus:border-red-600 transition uppercase tracking-widest"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white transition"
              >
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-neutral-900/50 gap-6">
          {/* SOCIALS */}
          <div className="flex gap-4">
            <SocialIcon
              icon={Instagram}
              href="https://instagram.com/shey.collective"
            />
            <SocialIcon
              icon={Twitter}
              href="#"
            />
            <SocialIcon
              icon={Facebook}
              href="#"
            />
          </div>

          {/* COPYRIGHT */}
          <div className="text-[10px] uppercase tracking-widest text-neutral-600">
            © 2024 SHEY COLLECTIVE.
          </div>

          {/* CREDITS */}
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="hidden md:flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition"
            >
              Top
              <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="h-4 w-px bg-neutral-800 hidden md:block" />

            <a
              href="https://rubiondev.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-red-600 transition"
            >
              Website by{" "}
              <span className="font-bold text-neutral-300 hover:text-red-600">
                Rubion
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- SUB COMPONENTS ---------- */

function FooterLink({ href, label }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-2 hover:text-white hover:pl-2 transition-all duration-300 group"
      >
        <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition text-red-600">
          —
        </span>
        {label}
      </Link>
    </li>
  );
}

function SocialIcon({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 border border-neutral-800 rounded-full text-neutral-500 hover:border-red-600 hover:text-red-600 hover:bg-red-900/10 transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
