"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TiltCard from "./ui/TiltCard";
import AnimatedMetric from "./ui/AnimatedMetric";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 3 Case Studies matching the reference cards
const caseStudies = [
  {
    id: "kisan-connect",
    title: "KisanConnect Marketplace",
    shortLabel: "01 • KisanConnect Marketplace",
    category: "CASE STUDY — KISANCONNECT AGRI MARKETPLACE",
    heroImage: "/images/case-study-hero-2x.png",
    alt: "KisanConnect Agri Marketplace Case Study",
    cards: [
      {
        badge: "The Problem",
        tag: null,
        text: "A fragmented farmer-to-buyer supply chain with no price transparency, forcing farmers to sell through multiple middlemen at unpredictable rates.",
      },
      {
        badge: "The Solution",
        tag: "7-Day Launch",
        text: "A multi-vendor agriculture marketplace with a dedicated farmer app, dealer network management, and a live logistics dashboard for supply chain visibility.",
      },
      {
        badge: "The Impact",
        tag: "7-Day Launch",
        text: "Direct farmer-to-buyer transactions replaced 3 layers of middlemen across 40+ districts within the first year of launch.",
      },
    ],
    metrics: [
      { number: "12,000", plus: "+", label: "Farmers Onboarded" },
      { number: "40", plus: "+", label: "Reduction in Produce Wastage" },
      { number: "₹8Cr", plus: "+", label: "GMV Processed" },
    ],
  },
  {
    id: "smart-irrigation",
    title: "Smart Drone & Irrigation",
    shortLabel: "02 • Smart Drone & Irrigation",
    category: "CASE STUDY — SMART DRONE FLEET & IRRIGATION",
    heroImage: "/images/case-study-card-1.png",
    alt: "Smart Drone Fleet & Autonomous Irrigation Case Study",
    cards: [
      {
        badge: "The Problem",
        tag: null,
        text: "Inefficient flood irrigation caused up to 45% water wastage and soil salinity across arid farming belts.",
      },
      {
        badge: "The Solution",
        tag: "7-Day Launch",
        text: "IoT soil moisture telemetry with autonomous drone scouting and automated solar pump scheduling via mobile.",
      },
      {
        badge: "The Impact",
        tag: "7-Day Launch",
        text: "Saved 2.4B liters of water and reduced electricity expenses by 38% across 65,000+ acres.",
      },
    ],
    metrics: [
      { number: "65,000", plus: "+", label: "Acres Monitored" },
      { number: "38", plus: "%", label: "Energy Cost Reduction" },
      { number: "2.4B", plus: "L", label: "Water Saved" },
    ],
  },
  {
    id: "crop-diagnostics",
    title: "AI Crop Health & Diagnostics",
    shortLabel: "03 • AI Crop Health",
    category: "CASE STUDY — AI CROP HEALTH & DIAGNOSTICS",
    heroImage: "/images/case-study-card-2.png",
    alt: "AI Crop Health & Foliar Diagnostics Case Study",
    cards: [
      {
        badge: "The Problem",
        tag: null,
        text: "Late-stage pest detection caused catastrophic crop damage before corrective treatments could be applied.",
      },
      {
        badge: "The Solution",
        tag: "7-Day Launch",
        text: "Smartphone camera AI that analyzes foliar disease patterns instantly and generates targeted spray remedies.",
      },
      {
        badge: "The Impact",
        tag: "7-Day Launch",
        text: "Average crop yield improved by 28% and chemical pesticide costs dropped by 34% in the first season.",
      },
    ],
    metrics: [
      { number: "350k", plus: "+", label: "Scans Completed" },
      { number: "28", plus: "%", label: "Average Yield Increase" },
      { number: "96.4", plus: "%", label: "Diagnostic Accuracy" },
    ],
  },
];

export default function AgriCaseStudySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth entrance on scroll into view (NO PINNING, NO SCROLL TRAPPING)
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.fromTo(
        ".agri-case-study-fade",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
          clearProps: "all",
        }
      );
    },
    { scope: sectionRef }
  );

  // Transition animation when active index changes
  const switchCaseStudy = (newIdx: number) => {
    if (newIdx === activeIdx) return;
    const cardEl = cardContainerRef.current;
    if (!cardEl) {
      setActiveIdx(newIdx);
      return;
    }

    // Quick cinematic fade out & fade in
    gsap.to(cardEl, {
      opacity: 0.35,
      scale: 0.985,
      y: 8,
      duration: 0.22,
      ease: "power2.in",
      onComplete: () => {
        setActiveIdx(newIdx);
        gsap.to(cardEl, {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        });
      },
    });
  };

  const handlePrev = () => {
    const prev = (activeIdx - 1 + caseStudies.length) % caseStudies.length;
    switchCaseStudy(prev);
  };

  const handleNext = () => {
    const next = (activeIdx + 1) % caseStudies.length;
    switchCaseStudy(next);
  };

  // Gentle auto-rotation every 7 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((curr) => (curr + 1) % caseStudies.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentStudy = caseStudies[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="case-study-showcase"
      className="relative w-full bg-[#031008] text-white pt-14 sm:pt-18 lg:pt-20 pb-16 sm:pb-20 border-t border-emerald-950/40 select-none overflow-x-clip"
    >
      {/* Soft atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[500px] rounded-full opacity-15 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.45) 0%, rgba(20, 83, 45, 0.15) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =====================================================================
            1. SECTION HEADER
        ====================================================================== */}
        <div className="agri-case-study-fade mb-5 sm:mb-6">
          <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.24em] text-emerald-400 font-semibold uppercase">
              20+ PRE-ENGINEERED PLATFORMS READY TO DEPLOY
            </span>
          </div>
        </div>

        {/* Headline + Subtext Row */}
        <div className="agri-case-study-fade flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <h2 className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[54px] font-bold text-white tracking-[-0.03em] leading-[1.08] font-sans">
              We Build Digital Experiences That Matter
            </h2>
            <p className="text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-serif italic font-normal text-white tracking-tight mt-0.5">
              Launch in 7 days.
            </p>
          </div>

          {/* Right Subtext */}
          <div className="lg:text-right max-w-[380px]">
            <p className="text-[12px] sm:text-[12.5px] text-[#8fa89b] leading-[1.55] font-normal">
              Don&apos;t spend 6 months building standard logistics or healthcare software from scratch.
            </p>
            <p className="text-[12px] sm:text-[12.5px] text-[#8fa89b] leading-[1.55] font-normal mt-0.5">
              Launch faster with zero monthly royalties.
            </p>
          </div>
        </div>

        {/* =====================================================================
            2. INTERACTIVE CASE STUDY SELECTOR TABS & CONTROLS
        ====================================================================== */}
        <div className="agri-case-study-fade flex flex-wrap items-center justify-between gap-3 mb-4 sm:mb-5">
          {/* Navigation Selector Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {caseStudies.map((study, idx) => {
              const isCurrent = idx === activeIdx;
              return (
                <button
                  key={study.id}
                  onClick={() => switchCaseStudy(idx)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11.5px] sm:text-[12px] font-medium transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isCurrent
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_15px_rgba(34,197,94,0.25)]"
                      : "bg-[#07190f]/80 text-[#8fa89b] border border-emerald-950/60 hover:text-white hover:border-emerald-800/60 hover:bg-[#0a2215]"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isCurrent ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-emerald-900"
                    }`}
                  />
                  <span>{study.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Prev / Next Buttons & Counter */}
          <div className="flex items-center gap-2 ml-auto">
            <span className="font-mono text-[11.5px] text-[#8fa89b] mr-2">
              <span className="text-emerald-400 font-bold">{String(activeIdx + 1).padStart(2, "0")}</span>
              <span className="opacity-40 mx-1">/</span>
              <span>{String(caseStudies.length).padStart(2, "0")}</span>
            </span>

            <button
              onClick={handlePrev}
              aria-label="Previous Case Study"
              className="w-8 h-8 rounded-full bg-[#07190f] hover:bg-[#0d2a1a] text-slate-300 hover:text-white border border-emerald-900/50 hover:border-emerald-600/50 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Case Study"
              className="w-8 h-8 rounded-full bg-[#07190f] hover:bg-[#0d2a1a] text-slate-300 hover:text-white border border-emerald-900/50 hover:border-emerald-600/50 flex items-center justify-center transition-all cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* =====================================================================
            3. MAIN SHOWCASE CARD (NO PIN JAILING, 100% VISIBLE & NATURAL SCROLL)
        ====================================================================== */}
        <div
          ref={cardContainerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="agri-case-study-fade relative w-full transition-transform duration-300"
        >
          {/* Emerald Container Frame: OPAQUE, ENCLOSES BANNER + 3 INFO CARDS + 3 METRICS */}
          <div
            className="rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-3.5 sm:p-5 lg:p-6 border border-emerald-800/60 shadow-[0_-12px_35px_rgba(0,0,0,0.7),0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #012811 0%, #011b0c 100%)",
            }}
          >
            {/* Hero Banner Image */}
            <Link
              href="/#contact-cta"
              className="block relative w-full aspect-[3.26/1] min-h-[170px] sm:min-h-[210px] md:min-h-[250px] lg:min-h-[285px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-emerald-500/25 group/hero cursor-pointer"
              aria-label={`${currentStudy.alt} - Contact Us`}
            >
              <Image
                src={currentStudy.heroImage}
                alt={currentStudy.alt}
                fill
                sizes="(max-width: 1240px) 100vw, 1240px"
                className="object-cover object-center group-hover/hero:scale-[1.012] transition-transform duration-500"
                priority
              />

              {/* Dynamic Case Study Badge Overlay */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-black/65 backdrop-blur-md border border-emerald-400/35 px-3 sm:px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider text-emerald-300 flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{currentStudy.category}</span>
              </div>

              {/* Top-Right Contact Us Floating Pill */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 hidden sm:flex items-center gap-1 bg-[#16a34a] hover:bg-[#15803d] text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md transition-colors">
                <span>Explore Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </Link>

            {/* Three Information Cards with 3D Tilt Perspective */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
              {currentStudy.cards.map((card, cIdx) => (
                <TiltCard
                  key={cIdx}
                  maxTilt={6}
                  scale={1.018}
                  glare={true}
                  glareOpacity={0.12}
                  className="h-full rounded-xl sm:rounded-2xl"
                >
                  <div className="rounded-xl sm:rounded-2xl p-3.5 sm:p-4 bg-[#032310]/80 border border-emerald-900/50 hover:border-emerald-600/60 transition-colors flex flex-col justify-between h-full">
                    {/* Top Badge & Tag Row */}
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="bg-[#02180b] border border-emerald-800/50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10.5px] sm:text-[11px] font-medium text-slate-200">
                        {card.badge}
                      </span>
                      {card.tag && (
                        <span className="text-emerald-400 font-medium text-[10.5px] sm:text-[11px]">
                          {card.tag}
                        </span>
                      )}
                    </div>

                    {/* Card Description */}
                    <p className="text-[#a0c5b0] text-[11.5px] sm:text-[12px] leading-[1.55] font-normal">
                      {card.text}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Three Impact Metrics INSIDE the Emerald Container with AnimatedMetric */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-5 pt-3 sm:pt-4 px-2 sm:px-3 border-t border-emerald-900/35">
              {currentStudy.metrics.map((metric, mIdx) => (
                <div key={`${currentStudy.id}-${mIdx}`} className="flex flex-col text-left">
                  {/* Metric Value with Cyan-Blue to Orange gradient matching Figma screenshot */}
                  <div className="text-[24px] sm:text-[28px] lg:text-[34px] font-bold tracking-tight leading-none font-sans flex items-baseline">
                    <AnimatedMetric
                      number={metric.number}
                      suffix={metric.plus}
                      className="bg-gradient-to-r from-[#2563eb] via-[#00c596] to-[#e07538] bg-clip-text text-transparent font-sans"
                    />
                  </div>

                  {/* Metric Label */}
                  <span className="text-[11.5px] sm:text-[12px] text-slate-300 font-medium leading-tight mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
