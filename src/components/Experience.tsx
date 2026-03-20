"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const roles = [
    {
      title: t.role1Title,
      company: t.role1Company,
      period: t.role1Period,
      currentLabel: t.role1Current,
      current: true,
      bullets: t.role1Bullets,
    },
    {
      title: t.role2Title,
      company: t.role2Company,
      period: t.role2Period,
      current: false,
      bullets: t.role2Bullets,
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-[#c4728f]">
            <Briefcase size={18} />
            {t.experienceTitle}
          </h2>
        </motion.div>

        <div className="space-y-5">
          {roles.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl bg-white border border-[#c4728f]/8 p-6 hover:border-[#c4728f]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-[#2d2d2d]">{role.title}</h3>
                {role.current && role.currentLabel && (
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f3e8ee] text-[#c4728f] font-medium">
                    {role.currentLabel}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#7a7a7a] mb-3">
                {role.company} &middot; {role.period}
              </p>
              <ul className="space-y-2">
                {role.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-[#4a4a4a] leading-relaxed"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#c4728f] mt-0.5 shrink-0"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
