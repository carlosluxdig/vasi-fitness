"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "36+", label: "Coached Sessions", suffix: "" },
  { value: "+21%", label: "Client VO2max Gain", suffix: "" },
  { value: "+118%", label: "Wall Ball Performance", suffix: "" },
  { value: "-2.7", label: "Body Fat % (12 weeks)", suffix: "pp" },
  { value: "7", label: "Languages Spoken", suffix: "" },
  { value: "29", label: "CPD Modules Completed", suffix: "" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-24 relative">
      <div className="section-line mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a843] text-sm font-medium tracking-widest uppercase mb-3">
            Measurable Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Results That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group"
            >
              <div className="p-6 sm:p-8 rounded-2xl bg-[#0f1729] border border-white/5 hover:border-[#d4a843]/20 transition-all duration-300 text-center">
                <div className="stat-number text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-lg text-white/40 ml-0.5">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
                <div className="absolute inset-0 rounded-2xl bg-[#d4a843]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
