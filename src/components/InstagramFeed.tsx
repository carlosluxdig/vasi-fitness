"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Play } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const posts = [
  { src: "/instagram/10-kickbacks.jpg", caption: "Cable kickbacks. Add these variations for round glutes", url: "https://www.instagram.com/p/DV_uQ09DC2L/", type: "video" as const },
  { src: "/instagram/07-keep-it.jpg", caption: "want to keep it here", url: "https://www.instagram.com/p/DV_gjO-DIMu/", type: "image" as const },
  { src: "/instagram/03-true.jpg", caption: "true?..😁", url: "https://www.instagram.com/p/DWE4BMEjN2A/", type: "video" as const },
  { src: "/instagram/08-consistency.jpg", caption: "Consistency beats perfection", url: "https://www.instagram.com/p/DVOujUdjLQP/", type: "video" as const },
  { src: "/instagram/04-grateful.jpg", caption: "grateful 🤍", url: "https://www.instagram.com/p/DUaYGNrjMth/", type: "video" as const },
  { src: "/instagram/06-powerful.jpg", caption: "Some days you feel powerful. Some days you train anyway. Both count.", url: "https://www.instagram.com/p/DTz2ohrjJjs/", type: "image" as const },
  { src: "/instagram/02-confidence.jpg", caption: "+1000% to my confidence 👸🏼", url: "https://www.instagram.com/p/DT0TBKXjAXE/", type: "video" as const },
  { src: "/instagram/12-romanticise.jpg", caption: "Why not romanticise training? 💅🏽", url: "https://www.instagram.com/p/DTc0LaJDNsj/", type: "video" as const },
  { src: "/instagram/01-no-revenge.jpg", caption: "No revenge. Just love, commitment, and glow-ups ⚡️", url: "https://www.instagram.com/p/DTJke2aDFc9/", type: "video" as const },
  { src: "/instagram/09-partner.jpg", caption: "The real flex is finding someone who understands your lifestyle", url: "https://www.instagram.com/p/DSh-bguDCeZ/", type: "video" as const },
  { src: "/instagram/05-chinups.jpg", caption: "Building chin-ups. Not perfect. Not rushed. Just showing up.", url: "https://www.instagram.com/p/DSXuA5dDFtq/", type: "video" as const },
  { src: "/instagram/11-onepercent.jpg", caption: "1% better every day ⚡️", url: "https://www.instagram.com/p/DSSwJ7yDPNF/", type: "video" as const },
];

export default function InstagramFeed() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="instagram"
      className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-[#f3e8ee]/20 to-transparent"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram size={20} className="text-[#c4728f]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d]">
              {t.instagramTitle}
            </h2>
          </div>
          <a
            href="https://www.instagram.com/fit_with_vasi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c4728f] hover:text-[#a85c78] font-medium transition-colors"
          >
            @fit_with_vasi
          </a>
          <p className="text-[#7a7a7a] max-w-lg mx-auto mt-2">{t.instagramSubtitle}</p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.src}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 33vw, 25vw"
              />

              {post.type === "video" && (
                <div className="absolute top-2.5 right-2.5 z-10 bg-black/40 rounded-full p-1">
                  <Play size={12} className="text-white" fill="white" />
                </div>
              )}

              <div className="absolute inset-0 bg-[#c4728f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 z-20">
                <p className="text-white text-xs sm:text-sm text-center leading-relaxed line-clamp-4">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-8"
        >
          <a
            href="https://www.instagram.com/fit_with_vasi/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#c4728f] to-[#d48da6] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#c4728f]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Instagram size={16} />
            @fit_with_vasi
          </a>
        </motion.div>
      </div>
    </section>
  );
}
