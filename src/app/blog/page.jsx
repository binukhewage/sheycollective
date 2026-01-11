"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, User, Heart, MessageCircle } from "lucide-react";
import { blogPosts } from "../blogdata"; // Adjust path to where you saved blogdata.js


export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden pt-32 pb-20">
      
      {/* --- GLOBAL NOISE --- */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-0"></div>

      {/* --- HEADER --- */}
      <section className="max-w-[1400px] mx-auto px-6 mb-24 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-6"
            >
                <span className="w-12 h-[1px] bg-red-600"></span>
                <span className="text-xs tracking-[0.3em] uppercase text-neutral-500">THE JOURNAL</span>
            </motion.div>
            <h1 
                className="text-[12vw] md:text-[8vw] leading-[0.8] font-black text-white tracking-tighter mix-blend-exclusion"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
                EDITORIAL
            </h1>
        </motion.div>
      </section>

      {/* --- BLOG LIST --- */}
      <section className="max-w-[1400px] mx-auto px-6 relative z-10 space-y-32">
        {blogPosts.map((post) => (
          <article key={post.id} className="group border-t border-neutral-900 pt-12 md:pt-20">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* LEFT: IMAGE COLLAGE */}
                <div className="lg:col-span-7">
                    {post.images && post.images.length > 1 ? (
                        // Collage Layout (3 Images)
                        <div className="grid grid-cols-2 gap-2 aspect-[4/3] w-full">
                            {/* Main large image (Left half - spans 2 rows) */}
                            <div className="relative w-full h-full row-span-2 overflow-hidden bg-neutral-900">
                                <Image 
                                    src={post.images[0]} 
                                    alt="Process detail" 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                                />
                            </div>
                            {/* Top right */}
                            <div className="relative w-full h-full overflow-hidden bg-neutral-900">
                                 <Image 
                                    src={post.images[1]} 
                                    alt="Process detail" 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                                />
                            </div>
                            {/* Bottom right */}
                            <div className="relative w-full h-full overflow-hidden bg-neutral-900">
                                 <Image 
                                    src={post.images[2]} 
                                    alt="Process detail" 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                                />
                            </div>
                        </div>
                    ) : (
                        // Single Image Fallback
                        <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                             <Image 
                                src={post.images ? post.images[0] : ""} 
                                alt="Blog cover" 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale group-hover:grayscale-0"
                            />
                        </div>
                    )}
                </div>

                {/* RIGHT: CONTENT */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full py-4">
                    <div>
                        {/* Meta Data */}
                        <div className="flex items-center gap-4 mb-6 text-xs font-mono uppercase tracking-widest text-neutral-500">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-3 h-3 text-red-600" />
                                {post.date}
                            </div>
                            <div className="h-3 w-[1px] bg-neutral-800"></div>
                            <div className="flex items-center gap-2">
                                <User className="w-3 h-3 text-red-600" />
                                {post.author}
                            </div>
                        </div>

                        {/* Title */}
                        <Link href={`/blog/${post.id}`}>
                            <h2 
                                className="text-2xl md:text-3xl font-bold text-white leading-[1.1] mb-8 hover:text-red-600 transition-colors duration-300 cursor-pointer"
                                style={{ fontFamily: 'var(--font-playfair), serif' }}
                            >
                                {post.title}
                            </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-neutral-400 text-lg leading-relaxed font-light mb-10 border-l border-neutral-800 pl-6 group-hover:border-red-600 transition-colors duration-500">
                            {post.excerpt}
                        </p>
                    </div>

                    {/* Footer / Interaction */}
                    <div className="flex items-center justify-between border-t border-neutral-900 pt-6 mt-auto">
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-neutral-500 hover:text-red-500 transition-colors text-xs uppercase tracking-widest group/btn">
                                <Heart className="w-4 h-4 group-hover/btn:fill-red-500 transition-all" />
                                {post.likes} Likes
                            </button>
                            <button className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest">
                                <MessageCircle className="w-4 h-4" />
                                {post.comments} Comments
                            </button>
                        </div>

                        <Link 
                            href={`/blog/${post.id}`}
                            className="flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em] hover:text-red-500 transition-colors"
                        >
                            Read Article <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

            </div>
          </article>
        ))}
      </section>

    </main>
  );
}