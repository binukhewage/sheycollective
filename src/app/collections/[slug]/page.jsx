"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowLeft, X, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/client";
import { urlFor } from "@/sanity/image";

export default function OutfitPage() {
  const { slug } = useParams();

  const [outfit, setOutfit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `
        *[_type=="outfit" && slug.current==$slug][0]{
          title,
          location,
          projectType,
          products,
          materials,
          technique,
          gallery,
          videos[]{
  caption,
  poster,
  video{
    asset->{
      url
    }
  }
}

        }
        `,
        { slug }
      )
      .then((data) => {
        setOutfit(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-mono tracking-widest">
        Rendering Look…
      </div>
    );
  }

  if (!outfit) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Outfit not found
      </div>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-black text-neutral-200">
        {/* Noise */}
        <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-0"></div>

        <div className="max-w-[1600px] mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            {/* LEFT */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-16">
              <Link
                href="/collections"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-widest text-white hover:text-red-500"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </Link>

              <h1 className="text-6xl md:text-7xl font-black leading-[0.9]">
                {outfit.title}
              </h1>

              <p className="text-neutral-400 font-mono text-xs uppercase tracking-widest">
                {outfit.location}
              </p>

              <div className="border-t border-neutral-800 pt-8 space-y-6">
                <SpecItem label="Project Type" value={outfit.projectType} />
                <SpecItem label="Products" value={outfit.products} />
                <SpecItem label="Materials" value={outfit.materials} />
                <SpecItem label="Technique" value={outfit.technique} />
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {outfit.gallery?.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="relative cursor-zoom-in"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                    <Image
                      src={urlFor(img).width(1000).url()}
                      alt={outfit.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 flex items-center justify-center">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {outfit.videos?.map((vid, i) => (
                <div key={i}>
                  <video
                    src={vid.video?.asset?.url}
                    poster={vid.poster && urlFor(vid.poster).url()}
                    muted
                    playsInline
                    loop
                    controls
                    preload="auto"
                    className="w-full aspect-[9/16] object-cover"
                  />
                  <p className="text-xs text-neutral-500 mt-2 font-mono uppercase">
                    {vid.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X className="w-8 h-8" />
            </button>
            <Image
              src={urlFor(selectedImage).width(2000).url()}
              alt="Full view"
              fill
              className="object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SpecItem({ label, value }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
        {label}
      </h3>
      <p className="text-neutral-300">{value}</p>
    </div>
  );
}
