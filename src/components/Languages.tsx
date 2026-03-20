"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const languages = [
  { name: "Russian", level: "Native", pct: 100, flag: "\u{1f1f7}\u{1f1fa}" },
  { name: "Czech", level: "C1", pct: 90, flag: "\u{1f1e8}\u{1f1ff}" },
  { name: "English", level: "C1", pct: 90, flag: "\u{1f1ec}\u{1f1e7}" },
  { name: "Italian", level: "C1", pct: 90, flag: "\u{1f1ee}\u{1f1f9}" },
  { name: "Ukrainian", level: "B2", pct: 75, flag: "\u{1f1fa}\u{1f1e6}" },
  { name: "Spanish", level: "A2", pct: 35, flag: "\u{1f1ea}\u{1f1f8}" },
  { name: "Greek", level: "A2", pct: 35, flag: "\u{1f1ec}\u{1f1f7}" },
];

export default function LanguagesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="languages" className="py-12 sm:py-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-[#c4728f]">
            <Globe size={18} />
            {t.languagesTitle}
          </h2>
          <p className="text-sm text-[#7a7a7a] mt-1">{t.languagesSubtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="flex items-center gap-2 text-sm text-[#2d2d2d] font-medium">
                  <span className="text-base">{lang.flag}</span>
                  {lang.name}
                </span>
                <span className="text-xs text-[#7a7a7a] font-mono">{lang.level}</span>
              </div>
              <div className="h-2 rounded-full bg-[#f3e8ee] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${lang.pct}%` } : { width: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4 + i * 0.1,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#c4728f] to-[#d48da6]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
