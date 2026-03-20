"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const pillarImages = [
  "/pillars/evidence-based.jpg",
  "/pillars/client-first.jpg",
  "/pillars/holistic.jpg",
  "/pillars/results.jpg",
];

export default function CorePillars() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    { image: pillarImages[0], title: t.pillar1, desc: t.pillar1Desc },
    { image: pillarImages[1], title: t.pillar2, desc: t.pillar2Desc },
    { image: pillarImages[2], title: t.pillar3, desc: t.pillar3Desc },
    { image: pillarImages[3], title: t.pillar4, desc: t.pillar4Desc },
  ];

  return (
    <section id="pillars" className="py-12 sm:py-16" ref={ref}>
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
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="rounded-2xl border border-[#c4728f]/8 bg-white overflow-hidden group hover:border-[#c4728f]/20 hover:shadow-lg hover:shadow-[#c4728f]/5 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-[#2d2d2d] mb-2">{pillar.title}</h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
