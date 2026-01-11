"use client";

import { useParams } from "next/navigation";
import { getBlogPost } from "../../blogdata"; // Adjust path to where you saved blogdata.js
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPost() {
  const params = useParams();
  const post = getBlogPost(params.id);

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white font-serif">
        <div className="text-center">
          <h1 className="text-4xl mb-4 italic">Article not found.</h1>
          <Link href="/blog" className="text-red-600 text-sm tracking-widest uppercase hover:underline">
            Return to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden">
      
      {/* --- GLOBAL NOISE --- */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-0"></div>

     

      {/* --- ARTICLE HEADER --- */}
      <header className="max-w-[1200px] mx-auto px-6 pt-40 pb-20 relative z-10 text-center">
        
        {/* Meta Data */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-6 mb-12 text-xs font-mono uppercase tracking-widest text-neutral-500"
        >
            <span className="flex items-center gap-2"><Calendar className="w-3 h-3 text-red-600" /> {post.date}</span>
            <span className="h-3 w-[1px] bg-neutral-800"></span>
            <span className="flex items-center gap-2"><Clock className="w-3 h-3 text-red-600" /> {post.readTime}</span>
        </motion.div>

        {/* Title */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
            {post.title}
        </motion.h1>

        {/* Author */}
        <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="flex items-center justify-center gap-3"
        >
            <div className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 overflow-hidden relative">
                {/* Optional Author Avatar */}
                <div className="absolute inset-0 flex items-center justify-center text-neutral-500">
                    <User className="w-4 h-4" />
                </div>
            </div>
            <div className="text-left">
                <p className="text-xs text-neutral-400 uppercase tracking-widest">Written By</p>
                <p className="text-sm text-white font-bold">{post.author}</p>
            </div>
        </motion.div>
        <Link 
            href="/blog" 
            className="group flex items-center gap-3 text-white uppercase tracking-[0.2em] text-xs hover:text-red-500 transition-colors pointer-events-auto"
         >
            <div className="p-2 border border-white/20 rounded-full group-hover:border-red-500 transition-colors">
                <ArrowLeft className="w-3 h-3" />
            </div>
            
         </Link>
      </header>

      {/* --- HERO IMAGE --- */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ delay: 0.5, duration: 1 }}
         className="relative w-full h-[50vh] md:h-[80vh] mb-24 overflow-hidden"
      >
         <div className="absolute inset-0 bg-black/20 z-10" />
         <Image 
            src={post.images && post.images.length > 0 ? post.images[0] : ""} 
            alt={post.title}
            fill 
            className="object-cover"
            priority
         />
      </motion.div>

      {/* --- ARTICLE CONTENT --- */}
      <article className="max-w-3xl mx-auto px-6 relative z-10 pb-32">
        
        {/* Intro / Excerpt (Styled as Lead Paragraph) */}
        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-neutral-200 leading-relaxed font-light mb-16 first-letter:text-7xl first-letter:font-serif first-letter:text-red-600 first-letter:float-left first-letter:mr-4 first-letter:mt-[-10px]"
        >
            {post.excerpt}
        </motion.p>

        {/* Placeholder Body Content */}
        <div className="space-y-8 text-lg text-neutral-400 leading-loose font-light font-sans">
            <p>
                Fashion is often described as a reflection of the times, but for Shey Collective, it is a rebellion against them. The process begins not with a sketch, but with a feeling—a raw, often dark emotion that demands physical form. 
            </p>
            <p>
                "I wanted to create something that felt like armor," Shehara explains from her Colombo atelier. "Women are constantly told to be soft, to be palatable. My designs are for the women who refuse that narrative. They are sharp, structural, and unapologetic."
            </p>

            {/* Inline Quote */}
            <blockquote className="border-l-2 border-red-600 pl-8 py-4 my-12">
                <p className="text-3xl text-white italic font-serif">
                    "We don't just sew fabric. We engineer confidence. Every stitch is a deliberate act of defiance."
                </p>
            </blockquote>

            <p>
                The collection utilizes bio-mechanical aesthetics, merging organic textures with industrial rigidity. Utilizing materials like dyed cotton greige fabric, silicon, and oxygen wires, the garments transcend traditional clothing to become wearable art installations.
            </p>
        </div>

        {/* --- IMAGE GRID (Remaining Images) --- */}
        {post.images && post.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
                {post.images.slice(1).map((img, index) => (
                    <div key={index} className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 group">
                        <Image 
                            src={img} 
                            alt="Detail shot" 
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                        />
                         <div className="absolute bottom-4 left-4 text-[10px] text-red-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                            Fig. 0{index + 2}
                        </div>
                    </div>
                ))}
            </div>
        )}

        {/* --- SHARE / FOOTER --- */}
        <div className="mt-32 pt-12 border-t border-neutral-900 flex justify-between items-center">
            <span className="text-xs text-neutral-500 uppercase tracking-widest">
                Share this article
            </span>
            <div className="flex gap-4">
                 <button className="p-3 border border-neutral-800 rounded-full hover:border-red-600 hover:text-red-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                 </button>
            </div>
        </div>

      </article>

    </main>
  );
}