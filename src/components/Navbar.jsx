"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO --- */}
          <Link href="/" className="group relative z-50">
            <div className="flex flex-col items-center leading-none">
              <span 
                className="text-2xl md:text-3xl font-black text-white tracking-tighter transition-colors"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                Shey
              </span>
              <span 
                className="text-lg md:text-xl text-red-500 font-light -mt-2 ml-4 transition-transform group-hover:translate-x-1"
                style={{ fontFamily: 'var(--font-pinyon), cursive' }}
              >
                collective
              </span>
            </div>
          </Link>

          

          {/* --- MOBILE/MENU TOGGLE --- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-3 group relative z-50 text-white"
          >
            <span className="hidden md:block text-[10px] uppercase tracking-[0.3em] group-hover:text-red-600 transition-colors">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
            <div className="p-2 border border-neutral-800 rounded-full group-hover:border-red-600 transition-colors bg-black/50 backdrop-blur">
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </div>
          </button>
        </div>
      </header>

      {/* --- FULLSCREEN OVERLAY MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-neutral-950 text-white flex flex-col justify-between pt-32 pb-12 px-6"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-200"></div>
            
            {/* Red Glow */}
            <div className="absolute bottom-0 right-0 w-[80vw] h-[80vw] bg-red-900/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto w-full grid md:grid-cols-2 h-full items-center">
                
                {/* Links Section */}
                <div className="flex flex-col gap-6 relative z-10">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.label}
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -50, opacity: 0 }}
                            transition={{ delay: 0.3 + (index * 0.1) }}
                        >
                            <Link 
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="group flex items-center gap-4 text-5xl md:text-7xl font-bold tracking-tighter text-neutral-500 hover:text-white transition-colors"
                            >
                                <span className="group-hover:text-red-600 transition-colors duration-300">
                                    0{index + 1}
                                </span>
                                <span style={{ fontFamily: 'var(--font-playfair), serif' }}>
                                    {link.label}
                                </span>
                                <ArrowUpRight className="w-8 h-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-red-600" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Info / Decor Section */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="hidden md:flex flex-col justify-end items-end text-right h-full pb-20 space-y-8"
                >
                    <div className="max-w-sm">
                        <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                            "Fashion is not just fabric; it is the armor you wear to face the world."
                        </p>
                        <div className="h-[1px] w-full bg-neutral-800 mb-6"></div>
                        <p className="text-xs uppercase tracking-widest text-red-600 mb-2">Contact</p>
                        <p className="text-xl text-white">info@sheycollective.com</p>
                    </div>
                </motion.div>
            </div>

            {/* Mobile Footer Info */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="md:hidden flex justify-between items-end border-t border-neutral-800 pt-6"
            >
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">Instagram</span>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">TikTok</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-red-600">
                    Est. 2024
                </span>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}