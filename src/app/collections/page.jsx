"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { collectionsData } from "../data.js"; // Adjust path to where data.js is

export default function Collections() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden pt-32 pb-20">
      {/* Background Noise */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="w-12 h-[1px] bg-red-600"></span>
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">
            Recent Works
          </span>
        </motion.div>
        {/* Page Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-24 md:mb-32"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          COLLECTIONS
        </motion.h1>

        {/* --- Loop Through Collections --- */}
        {collectionsData.map((collection) => (
          <section
            key={collection.id}
            className="mb-40 border-t border-neutral-900 pt-16"
          >
            {/* Collection Header */}
            <div className="grid md:grid-cols-12 gap-12 mb-16">
              <div className="md:col-span-5">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-red-600 font-mono text-sm">
                    /// {collection.year}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                    {collection.title}
                  </h2>
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-2xl">
                  {collection.description}
                </p>
              </div>
            </div>

            {/* Outfits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collection.outfits.map((outfit) => (
                <Link
                  key={outfit.id}
                  href={`/collections/${outfit.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
                    <div className="absolute inset-0 bg-red-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>

                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={outfit.coverImage}
                        alt={outfit.title}
                        fill
                        className="object-cover group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>

                    {/* Hover Overlay Button */}
                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-black/50 backdrop-blur-md p-2 rounded-full border border-neutral-700">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="flex justify-between items-baseline border-b border-neutral-900 pb-2 group-hover:border-red-900/50 transition-colors">
                    <h3 className="text-xl text-white font-medium tracking-wide group-hover:text-red-600 transition-colors">
                      {outfit.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-neutral-600">
                      View Look
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
