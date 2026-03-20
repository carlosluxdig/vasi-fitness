"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-20 sm:py-28" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-[#c4728f] mb-4">
            <Heart size={18} />
            {t.philosophyTitle}
          </h2>
          <div className="rounded-2xl bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border border-[#c4728f]/10 p-6 sm:p-8">
            <blockquote className="pl-4 border-l-3 border-[#c4728f] text-[#4a4a4a] italic leading-relaxed text-base sm:text-lg">
              &ldquo;{t.philosophyQuote}&rdquo;
            </blockquote>
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-[#7a7a7a] mb-2">{t.referencesNote}</p>
          <p className="text-[#5a5a5a] mb-6 max-w-md mx-auto">{t.contactSubtitle}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="mailto:vgultay8@gmail.com"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#c4728f]/10 text-sm text-[#5a5a5a] hover:bg-[#c4728f]/10 hover:text-[#c4728f] hover:border-[#c4728f]/25 transition-all"
            >
              <Mail size={14} /> vgultay8@gmail.com
            </a>
            <a
              href="tel:+420608483142"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#c4728f]/10 text-sm text-[#5a5a5a] hover:bg-[#c4728f]/10 hover:text-[#c4728f] hover:border-[#c4728f]/25 transition-all"
            >
              <Phone size={14} /> +420 608 483 142
            </a>
            <span className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#c4728f]/10 text-sm text-[#5a5a5a]">
              <MapPin size={14} /> {t.location}
            </span>
          </div>

          <a
            href="mailto:vgultay8@gmail.com?subject=Training%20Inquiry"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#c4728f] text-white text-sm font-medium hover:bg-[#a85c78] transition-colors shadow-sm shadow-[#c4728f]/20 hover:shadow-lg hover:shadow-[#c4728f]/30"
          >
            <Mail size={14} />
            {t.getInTouch}
          </a>

          <p className="text-xs text-[#b0a8a8] mt-10">
            &copy; {new Date().getFullYear()} Vasilina Gultai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
