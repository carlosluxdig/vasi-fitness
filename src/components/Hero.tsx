"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin, Award, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useRef } from "react";

export default function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <motion.div style={{ opacity }} className="w-full max-w-6xl mx-auto px-4 sm:px-8 pt-16">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#f3e8ee] via-[#faf5f7] to-[#f5f0eb] border border-[#c4728f]/10">
          <div className="grid md:grid-cols-5 items-center">
            <motion.div style={{ y: imageY }} className="md:col-span-2 relative">
              <div className="aspect-[3/4] relative overflow-hidden md:rounded-l-3xl">
                <Image
                  src="/vasi-000.png"
                  alt="Vasilina Gultai - Personal Trainer & S&C Coach"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </motion.div>

            <motion.div style={{ y: textY }} className="md:col-span-3 p-8 sm:p-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c4728f]/10 text-[#c4728f] text-xs font-medium mb-4">
                  <Award size={12} />
                  {t.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2d2d2d] mb-1">
                  Vasilina
                </h1>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#c4728f] mb-3">
                  Gultai
                </h1>
                <p className="text-lg sm:text-xl text-[#7a7a7a] font-light mb-6">
                  {t.subtitle}
                </p>

                <blockquote className="pl-4 border-l-3 border-[#c4728f] text-[#5a5a5a] italic leading-relaxed mb-6 text-base sm:text-lg">
                  &ldquo;{t.heroQuote}&rdquo;
                </blockquote>

                {/* Primary CTA */}
                <a
                  href="mailto:vgultay8@gmail.com?subject=Training%20Inquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c4728f] text-white text-sm font-medium hover:bg-[#a85c78] transition-all duration-300 shadow-md shadow-[#c4728f]/20 hover:shadow-lg hover:shadow-[#c4728f]/30 hover:-translate-y-0.5 mb-5"
                >
                  <Mail size={14} />
                  {t.getInTouch}
                </a>

                {/* Contact details */}
                <div className="flex flex-wrap gap-2 text-xs text-[#7a7a7a]">
                  <a
                    href="tel:+420608483142"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-[#c4728f]/10 hover:text-[#c4728f] transition-all"
                  >
                    <Phone size={12} /> +420 608 483 142
                  </a>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70">
                    <MapPin size={12} /> {t.location}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#7a7a7a]">{t.heroScrollCta}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#c4728f]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
