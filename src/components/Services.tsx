"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Dumbbell, Target, Sparkles, Laptop, Users, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const serviceIcons = [Dumbbell, Target, Sparkles, Laptop];

export default function Services() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);

  const services = [
    { icon: serviceIcons[0], title: t.service1, desc: t.service1Desc, forWho: t.service1For },
    { icon: serviceIcons[1], title: t.service2, desc: t.service2Desc, forWho: t.service2For },
    { icon: serviceIcons[2], title: t.service3, desc: t.service3Desc, forWho: t.service3For },
    { icon: serviceIcons[3], title: t.service4, desc: t.service4Desc, forWho: t.service4For },
  ];

  return (
    <section
      id="services"
      className="py-12 sm:py-16 bg-gradient-to-b from-transparent via-[#f3e8ee]/30 to-transparent"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] mb-3">
            {t.servicesTitle}
          </h2>
          <p className="text-[#7a7a7a] max-w-lg mx-auto">{t.servicesSubtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isOpen = expanded === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className={`w-full text-left p-7 rounded-2xl border transition-all duration-300 cursor-pointer group ${
                    isOpen
                      ? "bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border-[#c4728f]/25 shadow-lg shadow-[#c4728f]/6"
                      : "bg-white border-[#c4728f]/10 hover:border-[#c4728f]/22 hover:shadow-md hover:shadow-[#c4728f]/5"
                  }`}
                >
                  {/* Header row */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#c4728f]/15"
                          : "bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] group-hover:bg-[#c4728f]/10"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={`transition-colors duration-300 ${
                          isOpen ? "text-[#c4728f]" : "text-[#c4728f]/70 group-hover:text-[#c4728f]"
                        }`}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#2d2d2d] text-base mb-1.5 leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#5a5a5a] leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Chevron */}
                    <ChevronDown
                      size={16}
                      className={`shrink-0 mt-0.5 text-[#c4728f]/50 transition-all duration-300 ${
                        isOpen ? "rotate-180 text-[#c4728f]" : "group-hover:text-[#c4728f]/70"
                      }`}
                    />
                  </div>

                  {/* Expandable "for who" section */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-[#c4728f]/15">
                          <div className="flex items-center gap-1.5 mb-2">
                            <Users size={12} className="text-[#c4728f]" />
                            <span className="text-xs font-medium text-[#c4728f] uppercase tracking-wide">
                              {t.serviceForLabel}
                            </span>
                          </div>
                          <p className="text-sm text-[#4a4a4a] leading-relaxed">
                            {service.forWho}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
