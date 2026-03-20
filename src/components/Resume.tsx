"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Globe,
  Dumbbell,
  Heart,
  ChevronRight,
  Sparkles,
  Users,
  Shield,
  Target,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const languages = [
  { name: "Russian", level: "Native", pct: 100, flag: "\u{1f1f7}\u{1f1fa}" },
  { name: "Czech", level: "C1", pct: 90, flag: "\u{1f1e8}\u{1f1ff}" },
  { name: "English", level: "C1", pct: 90, flag: "\u{1f1ec}\u{1f1e7}" },
  { name: "Italian", level: "C1", pct: 90, flag: "\u{1f1ee}\u{1f1f9}" },
  { name: "Ukrainian", level: "B2", pct: 75, flag: "\u{1f1fa}\u{1f1e6}" },
  { name: "Spanish", level: "A2", pct: 35, flag: "\u{1f1ea}\u{1f1f8}" },
  { name: "Greek", level: "A2", pct: 35, flag: "\u{1f1ec}\u{1f1f7}" },
];

export default function Resume() {
  const { t } = useLanguage();

  const services = [
    { icon: Dumbbell, label: t.service1 },
    { icon: Target, label: t.service2 },
    { icon: Sparkles, label: t.service3 },
    { icon: Users, label: t.service4 },
  ];

  const stats = [
    { value: "36+", label: t.stat1Label },
    { value: "+21%", label: t.stat2Label },
    { value: "+118%", label: t.stat3Label },
    { value: "-2.7pp", label: t.stat4Label },
  ];

  const pillars = [
    { icon: Target, label: t.pillar1 },
    { icon: Heart, label: t.pillar2 },
    { icon: Users, label: t.pillar3 },
    { icon: Shield, label: t.pillar4 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-16">
      {/* HERO */}
      <motion.section {...fade(0)} className="mb-14">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#f3e8ee] via-[#faf5f7] to-[#f5f0eb] border border-[#c4728f]/10">
          <div className="grid md:grid-cols-5 items-center">
            <div className="md:col-span-2 relative">
              <div className="aspect-[3/4] relative overflow-hidden md:rounded-l-3xl">
                <Image
                  src="/vasi-000.png"
                  alt="Vasilina Gultai - Personal Trainer & S&C Coach"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            <div className="md:col-span-3 p-8 sm:p-10">
              <motion.div {...fade(0.15)}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c4728f]/10 text-[#c4728f] text-xs font-medium mb-4">
                  <Award size={12} />
                  {t.badge}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#2d2d2d] mb-1">
                  Vasilina
                </h1>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#c4728f] mb-3">
                  Gultai
                </h1>
                <p className="text-lg text-[#7a7a7a] font-light mb-6">
                  {t.subtitle}
                </p>

                <blockquote className="pl-4 border-l-3 border-[#c4728f] text-[#5a5a5a] italic leading-relaxed mb-6">
                  &ldquo;{t.heroQuote}&rdquo;
                </blockquote>

                <div className="flex flex-wrap gap-3 text-xs text-[#7a7a7a]">
                  <a
                    href="mailto:vgultay8@gmail.com"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-[#c4728f]/10 hover:text-[#c4728f] transition-all"
                  >
                    <Mail size={12} /> vgultay8@gmail.com
                  </a>
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
            </div>
          </div>
        </div>
      </motion.section>

      {/* ABOUT ME */}
      <motion.section {...fade(0.15)} className="mb-12">
        <SectionTitle icon={Heart} text={t.aboutMeTitle} />
        <div className="mt-4 text-[#4a4a4a] leading-relaxed space-y-3">
          <p>{t.aboutMeP1}</p>
          <p>{t.aboutMeP2}</p>
        </div>
      </motion.section>

      {/* WHAT I DO */}
      <motion.section {...fade(0.2)} className="mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              className="text-center p-4 rounded-2xl bg-white border border-[#c4728f]/8 hover:border-[#c4728f]/25 transition-all group"
            >
              <item.icon
                size={22}
                className="mx-auto mb-2 text-[#c4728f] group-hover:scale-110 transition-transform"
              />
              <p className="text-xs text-[#4a4a4a] font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* RESULTS */}
      <motion.section {...fade(0.25)} className="mb-12">
        <SectionTitle icon={Sparkles} text={t.resultsTitle} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="text-center p-5 rounded-2xl bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border border-[#c4728f]/10"
            >
              <div className="text-2xl sm:text-3xl font-bold text-[#c4728f]">
                {s.value}
              </div>
              <div className="text-[11px] text-[#7a7a7a] mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="section-line my-10" />

      {/* EXPERIENCE */}
      <motion.section {...fade(0.3)} className="mb-12">
        <SectionTitle icon={Briefcase} text={t.experienceTitle} />
        <div className="mt-4 space-y-5">
          <RoleCard
            title={t.role1Title}
            company={t.role1Company}
            period={t.role1Period}
            currentLabel={t.role1Current}
            current
            bullets={t.role1Bullets}
          />
          <RoleCard
            title={t.role2Title}
            company={t.role2Company}
            period={t.role2Period}
            bullets={t.role2Bullets}
          />
        </div>
      </motion.section>

      <div className="section-line my-10" />

      {/* EDUCATION */}
      <motion.section {...fade(0.35)} className="mb-12">
        <SectionTitle icon={GraduationCap} text={t.educationTitle} />
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <div className="rounded-2xl bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border border-[#c4728f]/15 p-5">
            <Award size={18} className="text-[#c4728f] mb-2" />
            <h3 className="font-semibold text-[#2d2d2d]">{t.edu1Title}</h3>
            <p className="text-sm text-[#c4728f]">{t.edu1Subtitle}</p>
            <p className="text-xs text-[#7a7a7a] mt-1 mb-2">{t.edu1Period}</p>
            <p className="text-xs text-[#7a7a7a] leading-relaxed">{t.edu1Desc}</p>
          </div>
          <div className="rounded-2xl bg-white border border-[#c4728f]/8 p-5">
            <GraduationCap size={18} className="text-[#c4728f] mb-2" />
            <h3 className="font-semibold text-[#2d2d2d]">{t.edu2Title}</h3>
            <p className="text-sm text-[#c4728f]">{t.edu2Subtitle}</p>
            <p className="text-xs text-[#7a7a7a] mt-1 mb-2">{t.edu2Period}</p>
            <p className="text-xs text-[#7a7a7a] leading-relaxed">{t.edu2Desc}</p>
          </div>
        </div>
      </motion.section>

      <div className="section-line my-10" />

      {/* LANGUAGES */}
      <motion.section {...fade(0.4)} className="mb-12">
        <SectionTitle icon={Globe} text={t.languagesTitle} />
        <p className="text-sm text-[#7a7a7a] mt-1 mb-4">{t.languagesSubtitle}</p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.45 + i * 0.05 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="flex items-center gap-2 text-sm text-[#2d2d2d]">
                  <span>{lang.flag}</span>
                  {lang.name}
                </span>
                <span className="text-xs text-[#7a7a7a] font-mono">
                  {lang.level}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-[#f3e8ee] overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${lang.pct}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + i * 0.07,
                    ease: "easeOut",
                  }}
                  className="h-full rounded-full bg-gradient-to-r from-[#c4728f] to-[#d48da6]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <div className="section-line my-10" />

      {/* COACHING PHILOSOPHY */}
      <motion.section {...fade(0.45)} className="mb-12">
        <SectionTitle icon={Heart} text={t.philosophyTitle} />
        <div className="mt-4 rounded-2xl bg-gradient-to-br from-[#f3e8ee] to-[#faf5f7] border border-[#c4728f]/10 p-6">
          <blockquote className="pl-4 border-l-3 border-[#c4728f] text-[#4a4a4a] italic leading-relaxed">
            &ldquo;{t.philosophyQuote}&rdquo;
          </blockquote>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            {pillars.map((v, i) => (
              <div
                key={i}
                className="text-center p-3 rounded-xl bg-white/60"
              >
                <v.icon size={16} className="mx-auto mb-1 text-[#c4728f]" />
                <p className="text-[11px] text-[#4a4a4a] font-medium">
                  {v.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FOOTER / CTA */}
      <motion.footer {...fade(0.5)} className="text-center py-8">
        <p className="text-sm text-[#7a7a7a] mb-5">{t.referencesNote}</p>
        <a
          href="mailto:vgultay8@gmail.com?subject=Training%20Inquiry"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#c4728f] text-white text-sm font-medium hover:bg-[#a85c78] transition-colors shadow-sm shadow-[#c4728f]/20"
        >
          <Mail size={14} />
          {t.getInTouch}
        </a>
        <p className="text-xs text-[#b0a8a8] mt-8">
          &copy; {new Date().getFullYear()} Vasilina Gultai
        </p>
      </motion.footer>
    </div>
  );
}

function SectionTitle({
  icon: Icon,
  text,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  text: string;
}) {
  return (
    <h2 className="flex items-center gap-2 text-xl font-bold text-[#c4728f]">
      <Icon size={18} />
      {text}
    </h2>
  );
}

function RoleCard({
  title,
  company,
  period,
  current,
  currentLabel,
  bullets,
}: {
  title: string;
  company: string;
  period: string;
  current?: boolean;
  currentLabel?: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl bg-white border border-[#c4728f]/8 p-6">
      <div className="flex flex-wrap items-center gap-2 mb-1">
        <h3 className="font-semibold text-[#2d2d2d]">{title}</h3>
        {current && currentLabel && (
          <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f3e8ee] text-[#c4728f] font-medium">
            {currentLabel}
          </span>
        )}
      </div>
      <p className="text-sm text-[#7a7a7a] mb-3">
        {company} &middot; {period}
      </p>
      <ul className="space-y-2">
        {bullets.map((b, j) => (
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
    </div>
  );
}
