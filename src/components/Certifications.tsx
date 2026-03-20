"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, BookOpen, FlaskConical } from "lucide-react";

const certs = [
  {
    icon: FlaskConical,
    title: "IUSCA Level 4",
    subtitle: "Strength & Conditioning Practitioner",
    org: "International Universities Strength & Conditioning Association",
    year: "2025-2026",
    highlight: true,
    details:
      "29 professional development modules covering anatomy, exercise physiology, program design, nutrition, injury prevention, testing protocols, and coaching ethics.",
  },
  {
    icon: GraduationCap,
    title: "Bachelor's Degree",
    subtitle: "Italian Language & Literature",
    org: "Masaryk University, Brno",
    year: "2025",
    highlight: false,
    details:
      "With additional studies in English, Spanish, and Greek. Developed strong communication, research, and cross-cultural skills.",
  },
  {
    icon: BookOpen,
    title: "29 CPD Modules",
    subtitle: "Continuing Professional Development",
    org: "IUSCA Programme",
    year: "2025-2026",
    highlight: false,
    details:
      "Anatomy, physiology, program design, periodization, nutrition, injury management, testing & monitoring protocols.",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="section-line mb-24" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#d4a843] text-sm font-medium tracking-widest uppercase mb-3">
            Qualifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-6 rounded-2xl border transition-all duration-300 group ${
                cert.highlight
                  ? "bg-gradient-to-b from-[#d4a843]/10 to-[#0f1729] border-[#d4a843]/20 glow-gold"
                  : "bg-[#0f1729] border-white/5 hover:border-[#2563eb]/20"
              }`}
            >
              {cert.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-0.5 text-[10px] uppercase tracking-widest bg-[#d4a843] text-[#0a0e17] font-bold rounded-full">
                  Featured
                </div>
              )}
              <cert.icon
                size={24}
                className={`mb-4 ${
                  cert.highlight ? "text-[#d4a843]" : "text-[#2563eb]"
                }`}
              />
              <h3 className="text-lg font-semibold text-white mb-0.5">
                {cert.title}
              </h3>
              <p className="text-sm text-[#d4a843]/80 mb-2">{cert.subtitle}</p>
              <p className="text-xs text-white/30 mb-4">
                {cert.org} &middot; {cert.year}
              </p>
              <p className="text-sm text-white/45 leading-relaxed">
                {cert.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
