"use client";

import { useParams } from "next/navigation";
import { getOutfit } from "../../data.js";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react"; // Added useRef, useEffect
import { ArrowLeft, X, Maximize2, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function OutfitPage() {
  const params = useParams();
  const outfit = getOutfit(params.id);

  // State for the Fullscreen Lightbox
  const [selectedImage, setSelectedImage] = useState(null);

  // Reference for the video element to force autoplay
  const videoRef = useRef(null);

  // Force Video Autoplay on Mount
  useEffect(() => {
    if (outfit?.video && videoRef.current) {
      // Browsers require mute for autoplay
      videoRef.current.muted = true; 
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay prevented:", error);
          // Auto-play was prevented. This usually happens if the user 
          // hasn't interacted with the document yet. 
        });
      }
    }
  }, [outfit]);

  if (!outfit) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-serif">
        <div className="text-center">
          <h1 className="text-4xl mb-4 italic">Outfit not found.</h1>
          <Link
            href="/collections"
            className="text-red-600 text-sm tracking-widest uppercase hover:underline"
          >
            Return to Archive
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-red-900 selection:text-white">
        {/* --- GLOBAL NOISE --- */}
        <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-0"></div>

        <div className="max-w-[1600px] mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* --- LEFT COLUMN: STICKY INFO --- */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-16 z-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <Link
                    href="/collections"
                    className="group flex items-center gap-3 text-white uppercase tracking-[0.2em] text-xs hover:text-red-500 transition-colors pointer-events-auto"
                  >
                    <div className="p-2 border border-white/20 rounded-full group-hover:border-red-500 transition-colors">
                      <ArrowLeft className="w-3 h-3" />
                    </div>
                  </Link>
                </div>

                <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-4">
                  {outfit.title}
                </h1>
                <p className="text-neutral-400 font-mono text-xs uppercase tracking-widest">
                  {outfit.location}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="border-t border-neutral-800 pt-8 space-y-8"
              >
                <SpecItem label="Project Type" value={outfit.projectType} />
                <SpecItem label="Products" value={outfit.products} />
                <SpecItem label="Materials" value={outfit.materials} />
                <SpecItem label="Technique" value={outfit.technique} />
              </motion.div>
            </div>

            {/* --- RIGHT COLUMN: GALLERY + VIDEO --- */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 pt-12 md:pt-0">
              
              {/* Image Loop */}
              {outfit.gallery.map((imgSrc, index) => {
                const isFirstImage = index === 0;
                const gridSpanClass = isFirstImage ? "md:col-span-2" : "md:col-span-1";
                const aspectRatioClass = isFirstImage ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[2/3] md:aspect-[3/4]";
                const topMargin = index === 1 || index === 2 ? "mt-8 md:mt-16" : "";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5%" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                    className={`relative w-full cursor-zoom-in group ${gridSpanClass} ${topMargin}`}
                    onClick={() => setSelectedImage(imgSrc)}
                  >
                    <div className={`relative ${aspectRatioClass} w-full overflow-hidden bg-neutral-900 shadow-2xl`}>
                      <Image
                        src={imgSrc}
                        alt={`${outfit.title} detail ${index + 1}`}
                        fill
                        className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                        priority={isFirstImage}
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2 text-white text-xs uppercase tracking-widest">
                          <Maximize2 className="w-3 h-3" /> Expand
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* --- CONDITIONAL VIDEO SECTION (FIXED AUTOPLAY) --- */}
              {outfit.video && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="md:col-span-2 mt-12 md:mt-24"
                >
                    <div className="relative aspect-[9/16] w-full max-w-[420px] mx-auto overflow-hidden bg-neutral-900 shadow-2xl">

                        
                        <video
                            ref={videoRef} // Attach ref here
                            src={outfit.video.src}
                            poster={outfit.video.poster}
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls={true}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className="flex justify-between items-end mt-3 border-b border-neutral-900 pb-2">
                        <span className="text-[10px] text-neutral-500 font-mono uppercase">
                            Fig. Motion — Look 1
                        </span>
                        <span className="text-[10px] text-red-900 font-mono uppercase flex items-center gap-2">
                            <Play className="w-3 h-3 fill-current" /> Watch
                        </span>
                    </div>
                </motion.div>
              )}

              
            </div>
          </div>
        </div>
      </main>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full h-full max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full Screen View"
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
            <div className="absolute bottom-6 left-6 text-white/50 text-xs uppercase tracking-widest font-mono">
              Viewing High Resolution • Click anywhere to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- SUB-COMPONENT ---
function SpecItem({ label, value }) {
  return (
    <div className="group">
      <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-[0.2em] mb-2 group-hover:text-white transition-colors">
        {label}
      </h3>
      <p className="text-lg md:text-md text-neutral-300 font-light leading-relaxed">
        {value}
      </p>
    </div>
  );
}