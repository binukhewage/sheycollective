"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Star, Quote } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax effects
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main 
      ref={containerRef}
      className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden relative"
    >
      {/* --- GLOBAL NOISE OVERLAY --- */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-50"></div>

      {/* --- SECTION 1: HERO / LOGO MARK --- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div 
            style={{ y: yTitle, opacity: opacityFade }}
            className="relative z-10 flex flex-col items-center justify-center p-12 border border-red-800/50 rounded-full aspect-square w-[300px] md:w-[450px] bg-black/40 backdrop-blur-sm"
        >
            {/* LOGO COMPOSITION */}
            <div className="flex flex-col items-center relative top-4">
                <motion.h1 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="font-bold text-6xl md:text-8xl font-serif tracking-tight text-white text-center"
                    style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
                    Shey
                </motion.h1>
                
                <motion.span 
                    initial={{ opacity: 0, y: 10, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: -6 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-5xl md:text-7xl text-red-500 font-light mt-[-10px] md:mt-[-20px] z-10"
                    style={{ fontFamily: 'var(--font-pinyon), cursive' }}
                >
                    collective
                </motion.span>
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 flex flex-col items-center gap-2"
        >
            <div className="h-16 w-[1px] bg-gradient-to-b from-red-600 to-transparent"></div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">The Story</span>
        </motion.div>
      </section>

      {/* --- SECTION 2: THE MANIFESTO (Brand Text) --- */}
      <section className="relative py-24 md:py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Title */}
            <div className="md:col-span-4 sticky top-32">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-8"
                >
                    <span className="w-12 h-[1px] bg-red-600"></span>
                    <span className="text-xs tracking-widest uppercase text-red-500">About The Brand</span>
                </motion.div>
                <h2 className="uppercase text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Redefining <br />
                    <span className="text-neutral-500">Modern Luxury.</span>
                </h2>
            </div>

            {/* Right Column: The Copy */}
            <div className="md:col-span-8 space-y-12">
                
                {/* Paragraph 1 - Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-xl md:text-3xl font-light leading-relaxed text-neutral-200">
                        <span className="text-white font-serif italic pr-2">Shey Collective</span> 
                        is a luxury fashion brand that redefines elegance for the modern, 
                        sophisticated woman. We specialize in crafting custom-made garments that 
                        combine high-end artistry with bold, out-of-the-box thinking.
                    </p>
                </motion.div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-neutral-800"></div>

                {/* Paragraph 2 - The Craft */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-8 text-neutral-400 text-sm md:text-base leading-loose"
                >
                    <div>
                        <p className="mb-6">
                            Each piece is designed to make a statement, pushing the boundaries of 
                            traditional craftsmanship while celebrating individuality and avant-garde aesthetics. 
                            At Shey Collective, we are deeply committed to unparalleled quality, using only 
                            the finest materials and showcasing meticulous attention to detail in every design.
                        </p>
                    </div>
                    <div>
                        <p>
                            Our passion for creating bold, innovative fashion goes beyond mere trends—it 
                            embodies a timeless elegance that is both captivating and distinctive. 
                            With a focus on innovation and sophistication, our brand is dedicated to 
                            elevating luxury fashion to new heights, offering women a unique and 
                            empowering experience with every piece.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
      </section>

      {/* --- SECTION 3: THE DESIGNER (Shehara Madurawala) --- */}
      <section className="relative py-20 px-4 md:px-0 mt-20">
        {/* Background visual split */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full bg-neutral-900/30 -z-10"></div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            
            {/* IMAGE SIDE */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative h-[600px] md:h-[800px] w-full overflow-hidden bg-neutral-800 group"
            >
                {/* PLACEHOLDER FOR DESIGNER IMAGE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                
                {/* Replace src with actual image of Shehara */}
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
                    <img 
                        src="/images/shehara.JPG" // Put your image here
                        alt="Shehara Madurawala"
                        className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    {/* Fallback text if no image */}
                    <span className="absolute text-xs uppercase tracking-widest opacity-20">Shehara Madurawala Portrait</span>
                </div>

                <div className="absolute bottom-8 left-8 z-20">
                     <Quote className="text-red-600 mb-4 w-8 h-8 opacity-80" />
                     <p className="text-lg md:text-xl font-serif italic text-white max-w-sm">
                        "Fashion is not just fabric; it is the armor you wear to face the world."
                     </p>
                </div>
            </motion.div>

            {/* TEXT SIDE */}
            <div className="p-8 md:p-20 flex flex-col justify-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Star className="w-4 h-4 text-red-600 fill-red-600" />
                        <span className="text-xs uppercase tracking-widest text-neutral-400">The Visionary</span>
                    </div>

                    <h3 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter">
                        SHEHARA <br />
                        <span className="text-red-900/80">MADURAWALA</span>
                    </h3>
                    
                    <p className="text-red-500 font-serif italic text-2xl mb-10">
                        Founder & Creative Director
                    </p>

                    <div className="space-y-6 text-neutral-400 leading-relaxed max-w-md">
                        <p>
                            The creative force behind the SHEY Collective. Shehara’s vision was born from a desire to 
                            dismantle the ordinary. With a background rooted in artistic expression and 
                            a rebellion against fast fashion, she sculpts garments that are as much 
                            art pieces as they are attire.
                        </p>
                        <p>
                            Her approach creates a dialogue between the wearer and the garment—obsessed 
                            with structure, silhouette, and the dark romance of the avant-garde.
                        </p>
                    </div>

                    {/* Signature Area */}
                    <div className="mt-16 opacity-60">
                        <span className="text-4xl" style={{ fontFamily: 'var(--font-pinyon), cursive' }}>Shehara Madurawala.</span>
                    </div>
                </motion.div>
            </div>

        </div>
      </section>

      

    </main>
  );
}