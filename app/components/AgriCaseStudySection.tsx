"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  (window as any).ScrollTrigger = ScrollTrigger;
}

// 3 Case Studies matching the reference cards
const caseStudies = [
  {
    id: "kisan-connect",
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
  const stackWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const stackWrapper = stackWrapperRef.current;
      if (!section || !stackWrapper) return;

      const mm = gsap.matchMedia();

      // =========================================================================
      // DESKTOP & TABLET: Pinned Scroll-Driven Card Stacking Animation
      // Card 0 active -> Card 1 rises & overlaps -> Card 2 rises & overlaps
      // =========================================================================
      mm.add("(min-width: 768px)", () => {
        // Check for reduced motion preference
        const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (isReducedMotion) return;

        const tl = gsap.timeline({
          scrollTrigger: {     
            trigger: stackWrapper,     
            start: "top 80px", // Pin screen right on the picture below navbar
            end: "+=2200", // Smooth scroll distance for 2 card transitions
            pin: true,
            pinSpacing: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Phase 1: Card 1 rises from translateY(120%) to translateY(0%) over Card 0 (0.05 -> 0.45)
        tl.fromTo(
          ".stack-card-1",
          { yPercent: 120, scale: 1 },
          {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.05
        );
        // Card 0 recedes subtly behind Card 1 with top edge remaining visible
        tl.to(
          ".stack-card-0",
          {
            scale: 0.96,
            y: -18,
            opacity: 0.9,
            filter: "brightness(0.85)",
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.05
        );

        // Pause / Dwell with Card 1 dominant (0.45 -> 0.55)
        tl.to({}, { duration: 0.1 }, 0.45);

        // Phase 2: Card 2 rises from translateY(120%) to translateY(0%) over Card 1 (0.55 -> 0.95)
        tl.fromTo(
          ".stack-card-2",
          { yPercent: 120, scale: 1 },
          {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.55
        );
        // Card 1 recedes subtly behind Card 2
        tl.to(
          ".stack-card-1",
          {
            scale: 0.96,
            y: -18,
            opacity: 0.9,
            filter: "brightness(0.85)",
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.55
        );
        // Card 0 recedes further
        tl.to(
          ".stack-card-0",
          {
            scale: 0.92,
            y: -36,
            opacity: 0.75,
            filter: "brightness(0.7)",
            duration: 0.4,
            ease: "power2.inOut",
          },
          0.55
        );

        // Final hold window (0.95 -> 1.00)
        tl.to({}, { duration: 0.05 }, 0.95);
      });

      // =========================================================================
      // MOBILE (< 768px): Accessible natural vertical flow without forced pin
      // =========================================================================
      mm.add("(max-width: 767px)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="case-study-showcase"
      className="relative w-full bg-[#031008] text-white pt-16 sm:pt-20 lg:pt-22 pb-12 sm:pb-16 border-t border-emerald-950/40 select-none overflow-hidden"
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
            1. SECTION HEADER (100% Match with Figma Reference)
        ====================================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-5">
          <div>
            {/* Eyebrow Label with Green Indicator */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] flex-shrink-0" />
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.16em] text-emerald-400 font-semibold uppercase">
                20+ Pre-Engineered Platforms Ready to Deploy
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-bold text-white tracking-[-0.03em] leading-[1.12] font-sans">
              We Build Digital Experiences That Matter
            </h2>

            {/* Italic Serif Subtitle */}
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
            2. STACKING CARDS STAGE
            In desktop/tablet: Card 0 is relative (defines height), Cards 1 & 2
            are layered absolutes that smoothly rise and overlap on scroll!
        ====================================================================== */}
        <div
          ref={stackWrapperRef}
          className="relative w-full mt-3 sm:mt-5 flex flex-col md:block"
        >
          {caseStudies.map((item, index) => (
            <div
              key={item.id}
              className={`stack-card stack-card-${index} w-full will-change-transform ${
                index === 0
                  ? "relative md:relative"
                  : "relative md:absolute md:inset-x-0 md:top-0 mt-8 md:mt-0"
              }`}
              style={{
                zIndex: (index + 1) * 10,
              }}
            >
              {/* Emerald Container Frame: OPAQUE, ENCLOSES BANNER + 3 INFO CARDS + 3 METRICS */}
              <div
                className="rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-3.5 sm:p-5 lg:p-6 border border-emerald-800/60 shadow-[0_-12px_35px_rgba(0,0,0,0.7),0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, #012811 0%, #011b0c 100%)",
                }}
              >
                {/* Hero Banner Image (Exact Figma aspect ratio & artwork) */}
                <Link
                  href="/#contact-cta"
                  className="block relative w-full aspect-[3.26/1] min-h-[160px] sm:min-h-[200px] md:min-h-[240px] lg:min-h-[275px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-emerald-500/25 group/hero cursor-pointer"
                  aria-label={`${item.alt} - Contact Us`}
                >
                  <Image
                    src={item.heroImage}
                    alt={item.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1240px) 100vw, 1240px"
                    className="object-cover object-center group-hover/hero:scale-[1.008] transition-transform duration-500"
                  />
                  {index > 0 && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-black/60 backdrop-blur-md border border-emerald-400/30 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider text-emerald-300">
                      {index === 1
                        ? "• CASE STUDY — SMART DRONE FLEET & IRRIGATION"
                        : "• CASE STUDY — AI CROP HEALTH & DIAGNOSTICS"}
                    </div>
                  )}
                </Link>

                {/* Three Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3 sm:mt-4">
                  {item.cards.map((card, cIdx) => (
                    <div
                      key={cIdx}
                      className="rounded-xl sm:rounded-2xl p-3.5 sm:p-4 bg-[#032310]/80 border border-emerald-900/50 hover:border-emerald-700/60 transition-colors flex flex-col justify-between"
                    >
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
                  ))}
                </div>

                {/* Three Impact Metrics INSIDE the Emerald Container */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-5 pt-3 sm:pt-4 px-2 sm:px-3">
                  {item.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="flex flex-col text-left">
                      {/* Metric Value with Cyan-Blue to Orange gradient matching Figma screenshot */}
                      <div className="text-[24px] sm:text-[28px] lg:text-[34px] font-bold tracking-tight leading-none font-sans flex items-baseline">
                        <span className="bg-gradient-to-r from-[#2563eb] via-[#00c596] to-[#e07538] bg-clip-text text-transparent">
                          {metric.number}
                        </span>
                        <span className="text-[#e07538] font-bold ml-0.5">
                          {metric.plus}
                        </span>
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
          ))}
        </div>

      </div>
    </section>
  );
}
