"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Target, Users, Shield } from "lucide-react";

const traits = [
  {
    icon: Target,
    title: "Evidence-Based",
    text: "Every program is built on science. Periodization, load management, and progress tracking are non-negotiable.",
  },
  {
    icon: Heart,
    title: "Client-First",
    text: "Training should be adapted to the person, not the other way around. I modify sessions in real time based on readiness.",
  },
  {
    icon: Users,
    title: "Inclusive Coaching",
    text: "From complete beginners to competitive athletes. I meet you where you are and build you up from there.",
  },
  {
    icon: Shield,
    title: "Injury-Aware",
    text: "Successfully managed training around injuries, designing modified programs that allow continued progress safely.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-line mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: narrative */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#d4a843] text-sm font-medium tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Built on Science.
              <br />
              Driven by People.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                I am a certified strength and conditioning coach with hands-on
                experience coaching clients one-on-one in a gym environment. My
                approach is structured, individualised, and always grounded in
                the evidence.
              </p>
              <p>
                Over a 12-week training block, I delivered 36+ coached sessions
                with full programming, monitoring, and measurable outcomes. My
                client improved VO2max by 21%, wall ball performance by 118%,
                and reduced body fat by 2.7 percentage points.
              </p>
              <p>
                With a Bachelor&apos;s degree in languages and experience
                working front desk at a fitness studio, I combine technical
                coaching ability with strong communication skills and a genuine
                passion for helping people feel confident in the gym.
              </p>
            </div>
          </motion.div>

          {/* Right: trait cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {traits.map((trait, i) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-xl bg-[#0f1729] border border-white/5 hover:border-[#2563eb]/20 transition-all duration-300 group"
              >
                <trait.icon
                  size={20}
                  className="text-[#2563eb] mb-3 group-hover:text-[#d4a843] transition-colors"
                />
                <h3 className="text-sm font-semibold text-white mb-1.5">
                  {trait.title}
                </h3>
                <p className="text-xs text-white/40 leading-relaxed">
                  {trait.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
