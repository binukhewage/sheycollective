"use client";

import { useParams } from "next/navigation";
import { getOutfit } from "../../data.js"; // Adjust path to where data.js is
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function OutfitPage() {
  const params = useParams();
  
  // Use the ID from the URL (which corresponds to your folder name [id])
  // We pass params.id to getOutfit, which handles the string-to-number conversion
  const outfit = getOutfit(params.id);

  if (!outfit) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <h1 className="text-2xl">Outfit not found</h1>
        <Link href="/collections" className="ml-4 text-red-600 hover:underline">Return to Collections</Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-neutral-200 font-sans pt-32 pb-20 overflow-x-hidden">
      
      {/* Background Noise */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-0"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/collections" 
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white uppercase tracking-widest text-xs mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collections
        </Link>

        {/* --- INFO SECTION (Matches Screenshot Layout) --- */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-32 mb-24 items-start">
          
          {/* Left Column: Title & Meta */}
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-9xl font-medium text-white tracking-tight mb-16"
            >
              {outfit.title}
            </motion.h1>

            <div className="space-y-10">
              <div className="group">
                <h3 className="text-2xl font-bold text-neutral-500 mb-2 group-hover:text-white transition-colors">Project type</h3>
                <p className="text-xl text-white font-light">{outfit.projectType}</p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold text-neutral-500 mb-2 group-hover:text-white transition-colors">Date</h3>
                <p className="text-xl text-white font-light">{outfit.date}</p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold text-neutral-500 mb-2 group-hover:text-white transition-colors">Location</h3>
                <p className="text-xl text-white font-light">{outfit.location}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Technical Details */}
          <div className="space-y-12 pt-4 md:pt-24">
             <DetailBlock label="Products" content={outfit.products} />
             <DetailBlock label="Materials" content={outfit.materials} />
             <DetailBlock label="Technique" content={outfit.technique} />
          </div>

        </section>

        {/* --- IMAGE GALLERY --- */}
        <section className="space-y-8">
          {outfit.gallery.map((imgSrc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative w-full h-[60vh] md:h-[85vh] bg-neutral-900 overflow-hidden"
            >
              <Image 
                src={imgSrc}
                alt={`${outfit.title} view ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </section>

      </div>
    </main>
  );
}

// Sub-component for clean details
function DetailBlock({ label, content }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="block text-xl text-white mb-3">{label} :</span>
      <p className="text-neutral-300 font-light leading-relaxed text-lg">
        {content}
      </p>
    </motion.div>
  );
}