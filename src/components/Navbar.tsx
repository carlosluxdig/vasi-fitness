"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const sections = [
  { id: "hero", key: "navHero" as const },
  { id: "pillars", key: "navPillars" as const },
  { id: "services", key: "navServices" as const },
  { id: "results", key: "navResults" as const },
  { id: "experience", key: "navExperience" as const },
  { id: "education", key: "navEducation" as const },
  { id: "languages", key: "navLanguages" as const },
  { id: "instagram", key: "navInstagram" as const },
  { id: "contact", key: "navContact" as const },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const offsets = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { id: s.id, top: el.offsetTop - 100 };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const y = window.scrollY;
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (y >= offsets[i].top) {
          setActive(offsets[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#f5f0eb]/90 backdrop-blur-md shadow-sm border-b border-[#c4728f]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-14">
            <button
              onClick={() => scrollTo("hero")}
              className="text-sm font-bold text-[#c4728f] cursor-pointer"
            >
              VG
            </button>

            <div className="hidden md:flex items-center gap-1">
              {sections.slice(1).map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-3 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    active === s.id
                      ? "bg-[#c4728f]/10 text-[#c4728f] font-medium"
                      : "text-[#7a7a7a] hover:text-[#2d2d2d] hover:bg-[#f3e8ee]/50"
                  }`}
                >
                  {t[s.key]}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-[#7a7a7a] cursor-pointer"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[35] bg-[#f5f0eb]/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-4">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`px-6 py-2 rounded-full text-sm transition-all cursor-pointer ${
                    active === s.id
                      ? "bg-[#c4728f]/10 text-[#c4728f] font-medium"
                      : "text-[#7a7a7a]"
                  }`}
                >
                  {t[s.key]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
