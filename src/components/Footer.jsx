"use client";

import Link from "next/link";
import { ArrowUpRight, Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-neutral-400 overflow-hidden pt-24 pb-12 px-6 border-t border-neutral-900">
      
      {/* --- BACKGROUND NOISE & GLOW --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-200 z-0"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-red-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* --- TOP GRID --- */}
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          
          {/* COL 1: BRAND LOGO (Exact Match) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link href="/" className="group inline-block select-none mb-8">
                <div className="flex flex-col items-start relative">
                    {/* SHEY */}
                    <span 
                        className="text-6xl font-black text-white tracking-tighter leading-[0.8]"
                        style={{ fontFamily: 'var(--font-playfair), serif' }}
                    >
                        SHEY
                    </span>
                    {/* collective */}
                    <span 
                        className="text-4xl text-red-600 font-light ml-4"
                        style={{ 
                            fontFamily: 'var(--font-pinyon), cursive',
                            textShadow: '0 4px 12px rgba(0, 0, 0, 0.8)'
                        }}
                    >
                        collective
                    </span>
                </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-neutral-500 uppercase tracking-wide">
                Redefining modern luxury through the lens of darkness. <br />
                <span className="text-red-800">Wear your blood.</span>
            </p>
          </div>

          {/* COL 2: EXPLORE */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">Explore</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium">
                <FooterLink href="/collections" label="Collections" />
                <FooterLink href="/atelier" label="The Atelier" />
                <FooterLink href="/about" label="About" />
                <FooterLink href="/journal" label="Journal" />
            </ul>
          </div>

          {/* COL 3: LEGAL */}
          <div className="md:col-span-2">
            <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">Legal</h4>
            <ul className="space-y-4 text-xs uppercase tracking-widest font-medium">
                <FooterLink href="/privacy" label="Privacy Policy" />
                <FooterLink href="/terms" label="Terms of Use" />
                <FooterLink href="/shipping" label="Shipping" />
                <FooterLink href="/returns" label="Returns" />
            </ul>
          </div>

          {/* COL 4: NEWSLETTER */}
          <div className="md:col-span-3">
             <h4 className="text-white text-xs uppercase tracking-[0.2em] mb-6">The List</h4>
             <p className="text-xs text-neutral-500 mb-6 leading-relaxed">
                Join the collective. First access to new drops and private events.
             </p>
             <form className="relative group">
                <input 
                    type="email" 
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-neutral-800 py-3 text-xs text-white placeholder-neutral-700 focus:outline-none focus:border-red-600 transition-colors uppercase tracking-widest"
                />
                <button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                </button>
             </form>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-neutral-900/50 gap-6 md:gap-0">
            
            {/* Socials */}
            <div className="flex gap-4">
                <SocialIcon icon={Instagram} />
                <SocialIcon icon={Twitter} />
                <SocialIcon icon={Facebook} />
            </div>

            {/* Copyright */}
            <div className="text-[10px] uppercase tracking-widest text-neutral-600 text-center md:text-left">
                © 2024 SHEY COLLECTIVE.
            </div>

            {/* RUBION CREDIT (Interactive) */}
            <div className="flex items-center gap-6">
                <button 
                    onClick={scrollToTop}
                    className="hidden md:flex items-center gap-2 group text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors"
                >
                    Top
                    <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
                </button>

                <div className="h-4 w-[1px] bg-neutral-800 hidden md:block"></div>

                <a 
                    href="https://rubiondev.vercel.app/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500 hover:text-red-600 transition-colors duration-300"
                >
                    Website by <span className="font-bold text-neutral-300 group-hover:text-red-600">Rubion</span>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}

// --- SUB-COMPONENTS ---

function FooterLink({ href, label }) {
    return (
        <li>
            <Link href={href} className="hover:text-white hover:pl-2 transition-all duration-300 flex items-center gap-2 group">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-red-600 text-xs">
                    —
                </span>
                {label}
            </Link>
        </li>
    );
}

function SocialIcon({ icon: Icon }) {
    return (
        <a href="#" className="p-2 border border-neutral-800 rounded-full hover:border-red-600 hover:text-red-600 hover:bg-red-900/10 transition-all duration-300 group text-neutral-500">
            <Icon className="w-4 h-4" />
        </a>
    )
}