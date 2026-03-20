"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Dumbbell, MessageCircle, Settings } from "lucide-react";

const skillGroups = [
  {
    icon: Dumbbell,
    title: "Training & Coaching",
    color: "#d4a843",
    skills: [
      "Program design & periodization",
      "Exercise technique coaching",
      "Warm-up & cool-down design",
      "Real-time session modification",
      "Beginner to advanced clients",
      "Barbell, functional & bodyweight",
    ],
  },
  {
    icon: MessageCircle,
    title: "Customer Service & Sales",
    color: "#2563eb",
    skills: [
      "Building rapport quickly",
      "Presenting services & products",
      "Multilingual client communication",
      "Membership sales support",
      "Welcoming & inclusive environment",
      "Conflict resolution",
    ],
  },
  {
    icon: Settings,
    title: "Studio Operations",
    color: "#06b6d4",
    skills: [
      "Session scheduling & planning",
      "Client progress documentation",
      "Facility maintenance",
      "Enforcing house rules",
      "Excel-based data tracking",
      "Administrative tasks",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative">
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
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What I Bring
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-[#0f1729] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${group.color}15` }}
              >
                <group.icon size={20} style={{ color: group.color }} />
              </div>
              <h3 className="text-base font-semibold text-white mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-white/45 flex items-center gap-2"
                  >
                    <div
                      className="w-1 h-1 rounded-full"
                      style={{ backgroundColor: group.color }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
