"use client";

import LanguageToggle from "@/components/LanguageToggle";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import CorePillars from "@/components/CorePillars";
import Services from "@/components/Services";
import ResultsShowcase from "@/components/ResultsShowcase";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import LanguagesSection from "@/components/Languages";
import InstagramFeed from "@/components/InstagramFeed";
import Contact from "@/components/Contact";

export default function PortfolioShell() {
  return (
    <main className="min-h-screen bg-[#f5f0eb]">
      <ScrollProgress />
      <Navbar />
      <LanguageToggle />

      <Hero />

      <div className="section-line" />
      <CorePillars />

      <div className="section-line" />
      <Services />

      <div className="section-line" />
      <ResultsShowcase />

      <div className="section-line" />
      <Experience />

      <div className="section-line" />
      <Education />

      <div className="section-line" />
      <LanguagesSection />

      <div className="section-line" />
      <InstagramFeed />

      <div className="section-line" />
      <Contact />
    </main>
  );
}
