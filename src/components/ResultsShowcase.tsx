"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function ResultsShowcase() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { target: 36, prefix: "", suffix: "+", label: t.stat1Label },
    { target: 21, prefix: "+", suffix: "%", label: t.stat2Label },
    { target: 118, prefix: "+", suffix: "%", label: t.stat3Label },
    { target: 2.7, prefix: "-", suffix: "pp", label: t.stat4Label, isDecimal: true },
  ];

  const timeline = [
    { week: t.timelineWeek1, desc: t.timelineWeek1Desc, pct: 25 },
    { week: t.timelineWeek4, desc: t.timelineWeek4Desc, pct: 50 },
    { week: t.timelineWeek8, desc: t.timelineWeek8Desc, pct: 75 },
    { week: t.timelineWeek12, desc: t.timelineWeek12Desc, pct: 100 },
  ];

  return (
    <section id="results" className="py-12 sm:py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={18} className="text-[#c4728f]" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d]">
              {t.resultsTitle}
            </h2>
          </div>
          <p className="text-[#7a7a7a] max-w-lg mx-auto">{t.resultsSubtitle}</p>
        </motion.div>

        {/* Animated stat counters */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border border-[#c4728f]/10 hover:border-[#c4728f]/25 hover:shadow-lg hover:shadow-[#c4728f]/5 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#c4728f] mb-1">
                {s.isDecimal ? (
                  <span>{inView ? "-2.7" : "0"}pp</span>
                ) : (
                  <AnimatedCounter
                    target={typeof s.target === "number" ? s.target : 0}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    inView={inView}
                  />
                )}
              </div>
              <div className="text-xs text-[#7a7a7a] mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl bg-white border border-[#c4728f]/10 p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={18} className="text-[#c4728f]" />
            <h3 className="font-semibold text-[#2d2d2d]">{t.timelineTitle}</h3>
          </div>

          {/* Progress bar */}
          <div className="relative mb-8">
            <div className="h-2 rounded-full bg-[#f3e8ee] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[#c4728f]/50 via-[#c4728f] to-[#c4728f]"
              />
            </div>

            {/* Dots on the progress bar */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-0">
              {timeline.map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.5 }}
                  className="w-4 h-4 rounded-full bg-[#c4728f] border-3 border-white shadow-sm"
                />
              ))}
            </div>
          </div>

          {/* Timeline labels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1 + i * 0.2 }}
                className="text-center"
              >
                <div className="text-sm font-semibold text-[#c4728f] mb-1">{step.week}</div>
                <div className="text-xs text-[#7a7a7a] leading-relaxed">{step.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
