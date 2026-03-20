"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-20 sm:py-28 bg-gradient-to-b from-transparent via-[#f3e8ee]/20 to-transparent" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-[#c4728f]">
            <GraduationCap size={18} />
            {t.educationTitle}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border border-[#c4728f]/15 p-6 hover:shadow-lg hover:shadow-[#c4728f]/5 transition-all duration-300"
          >
            <Award size={20} className="text-[#c4728f] mb-3" />
            <h3 className="font-semibold text-[#2d2d2d] text-lg">{t.edu1Title}</h3>
            <p className="text-sm text-[#c4728f] mb-1">{t.edu1Subtitle}</p>
            <p className="text-xs text-[#7a7a7a] mb-3">{t.edu1Period}</p>
            <p className="text-sm text-[#5a5a5a] leading-relaxed">{t.edu1Desc}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="rounded-2xl bg-white border border-[#c4728f]/8 p-6 hover:border-[#c4728f]/20 hover:shadow-md transition-all duration-300"
          >
            <GraduationCap size={20} className="text-[#c4728f] mb-3" />
            <h3 className="font-semibold text-[#2d2d2d] text-lg">{t.edu2Title}</h3>
            <p className="text-sm text-[#c4728f] mb-1">{t.edu2Subtitle}</p>
            <p className="text-xs text-[#7a7a7a] mb-3">{t.edu2Period}</p>
            <p className="text-sm text-[#5a5a5a] leading-relaxed">{t.edu2Desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
