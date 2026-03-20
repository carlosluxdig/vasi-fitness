"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { languageOptions } from "@/lib/translations";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languageOptions.find((o) => o.code === lang)!;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="fixed top-[4.5rem] right-4 sm:right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#c4728f]/15 shadow-sm hover:shadow-md hover:border-[#c4728f]/30 transition-all text-sm cursor-pointer"
      >
        <span>{current.flag}</span>
        <span className="text-[#2d2d2d] font-medium text-xs">{current.label}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={`text-[#7a7a7a] transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-1.5 bg-white/90 backdrop-blur-md rounded-xl border border-[#c4728f]/15 shadow-lg overflow-hidden"
          >
            {languageOptions.map((option) => (
              <button
                key={option.code}
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
                className={`flex items-center gap-2 w-full px-4 py-2 text-sm transition-colors cursor-pointer ${
                  option.code === lang
                    ? "bg-[#f3e8ee] text-[#c4728f] font-medium"
                    : "text-[#2d2d2d] hover:bg-[#f3e8ee]/50"
                }`}
              >
                <span>{option.flag}</span>
                <span className="text-xs">{option.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
