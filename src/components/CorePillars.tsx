"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FlaskConical, Heart, Brain, TrendingUp, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [FlaskConical, Heart, Brain, TrendingUp];

export default function CorePillars() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  const pillars = [
    { icon: pillarIcons[0], title: t.pillar1, desc: t.pillar1Desc },
    { icon: pillarIcons[1], title: t.pillar2, desc: t.pillar2Desc },
    { icon: pillarIcons[2], title: t.pillar3, desc: t.pillar3Desc },
    { icon: pillarIcons[3], title: t.pillar4, desc: t.pillar4Desc },
  ];

  return (
    <section id="pillars" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] mb-3">
            {t.pillarsTitle}
          </h2>
          <p className="text-[#7a7a7a] max-w-lg mx-auto">{t.pillarsSubtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isOpen = expanded === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                onClick={() => setExpanded(isOpen ? null : i)}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 group ${
                  isOpen
                    ? "bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border-[#c4728f]/25 shadow-lg shadow-[#c4728f]/5"
                    : "bg-white border-[#c4728f]/8 hover:border-[#c4728f]/20 hover:shadow-md hover:shadow-[#c4728f]/5"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    isOpen ? "bg-[#c4728f]/15" : "bg-[#f3e8ee] group-hover:bg-[#c4728f]/10"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`transition-colors duration-300 ${
                      isOpen ? "text-[#c4728f]" : "text-[#c4728f]/70 group-hover:text-[#c4728f]"
                    }`}
                  />
                </div>
                <h3 className="font-semibold text-[#2d2d2d] mb-2">{pillar.title}</h3>
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-sm text-[#5a5a5a] leading-relaxed overflow-hidden"
                    >
                      {pillar.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
                <ChevronDown
                  size={15}
                  className={`mt-2 text-[#c4728f]/50 transition-all duration-300 ${
                    isOpen ? "rotate-180 text-[#c4728f]" : "group-hover:text-[#c4728f]/70"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
