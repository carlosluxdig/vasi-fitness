"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Play } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const placeholderPosts = [
  { caption: "Cable kickbacks. Add these variations for round glutes" },
  { caption: "want to keep it here" },
  { caption: "Consistency beats perfection" },
  { caption: "grateful" },
  { caption: "+1000% to my confidence" },
  { caption: "Some days you feel powerful. Some days you train anyway. Both count." },
  { caption: "Why not romanticise training?" },
  { caption: "No revenge. Just love, commitment, and glow-ups" },
  { caption: "The real flex is finding someone who understands your lifestyle" },
  { caption: "Building chin-ups. Not perfect. Not rushed. Just showing up." },
  { caption: "1% better every day" },
  { caption: "progress doesn't happen overnight. keep showing up" },
];

const tileStyles = [
  { bg: "linear-gradient(135deg, #f3e8ee 0%, #faf5f7 100%)" },
  { bg: "linear-gradient(160deg, #faf5f7 0%, #f9f5f1 100%)" },
  { bg: "linear-gradient(115deg, #f3e8ee 0%, #f5eff5 100%)" },
  { bg: "linear-gradient(145deg, #fce8f0 0%, #faf5f7 100%)" },
  { bg: "linear-gradient(125deg, #f9f5f1 0%, #f3e8ee 100%)" },
  { bg: "linear-gradient(170deg, #faf5f7 0%, #fce8f0 100%)" },
  { bg: "linear-gradient(135deg, #f5eff5 0%, #f9f5f1 100%)" },
  { bg: "linear-gradient(150deg, #f3e8ee 0%, #faf5f7 100%)" },
  { bg: "linear-gradient(120deg, #faf5f7 0%, #f3e8ee 100%)" },
  { bg: "linear-gradient(140deg, #fce8f0 0%, #f9f5f1 100%)" },
  { bg: "linear-gradient(165deg, #f3e8ee 0%, #f5eff5 100%)" },
  { bg: "linear-gradient(130deg, #f9f5f1 0%, #fce8f0 100%)" },
];

export default function InstagramFeed() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        if (data.posts && data.posts.length > 0) {
          setPosts(data.posts);
          setIsLive(true);
        }
      })
      .catch(() => {
        // Silently fall back to placeholders
      });
  }, []);

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
          {isLive
            ? posts.slice(0, 12).map((post, i) => (
                <motion.a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={post.media_type === "VIDEO" ? (post.thumbnail_url || post.media_url) : post.media_url}
                    alt={post.caption?.slice(0, 100) || "Instagram post"}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 33vw, 25vw"
                  />

                  {/* Video indicator */}
                  {post.media_type === "VIDEO" && (
                    <div className="absolute top-2.5 right-2.5 z-10 bg-black/40 rounded-full p-1">
                      <Play size={12} className="text-white" fill="white" />
                    </div>
                  )}

                  {/* Hover overlay with caption */}
                  <div className="absolute inset-0 bg-[#c4728f]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 z-20">
                    <p className="text-white text-xs sm:text-sm text-center leading-relaxed line-clamp-4">
                      {post.caption || ""}
                    </p>
                  </div>
                </motion.a>
              ))
            : placeholderPosts.map((post, i) => (
                <motion.a
                  key={i}
                  href="https://www.instagram.com/fit_with_vasi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  style={{ background: tileStyles[i % tileStyles.length].bg }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: "radial-gradient(#c4728f 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <Instagram
                      size={13}
                      className="text-[#c4728f]/40 group-hover:text-white/90 transition-colors duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 z-10">
                    <p className="text-[10px] sm:text-xs text-[#5a5a5a]/80 group-hover:opacity-0 leading-snug line-clamp-2 transition-opacity duration-200">
                      {post.caption}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-[#c4728f]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 z-20">
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
