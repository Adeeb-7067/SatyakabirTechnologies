"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 3 Case Study Image Slides for the Image Section
const showcaseSlides = [
  {
    id: 1,
    title: "CASE STUDY — KISANCONNECT AGRI MARKETPLACE",
    tagline: "Revolutionizing Farming, One Field at a Time",
    image: "/images/case-study-hero-2x.png",
    alt: "KisanConnect Agri Marketplace Case Study",
    isMasterHero: true,
  },
  {
    id: 2,
    title: "CASE STUDY — SMART DRONE FLEET & IRRIGATION",
    tagline: "Autonomous Telemetry & Precision Soil Moisture",
    image: "/images/case-study-card-1.png",
    alt: "Smart Drone Fleet & Irrigation Management",
    isMasterHero: false,
  },
  {
    id: 3,
    title: "CASE STUDY — AI CROP HEALTH & DIAGNOSTICS",
    tagline: "Instant Leaf Disease Detection & Yield Prediction",
    image: "/images/case-study-card-2.png",
    alt: "AI Crop Health and Plant Disease Diagnostics",
    isMasterHero: false,
  },
];

// 3 Information Cards matching reference screenshot exactly
const caseStudyCards = [
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
];

// 3 Impact Metrics matching reference screenshot exactly
const impactMetrics = [
  {
    number: "12,000",
    plus: "+",
    label: "Farmers Onboarded",
  },
  {
    number: "40",
    plus: "+",
    label: "Reduction in Produce Wastage",
  },
  {
    number: "₹8Cr",
    plus: "+",
    label: "GMV Processed",
  },
];

export default function AgriCaseStudySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageSectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const imageSection = imageSectionRef.current;
      if (!section || !imageSection) return;

      // =========================================================================
      // 1. SECTION ENTRANCE TRIGGER (Smooth, natural reveal of header & card)
      // =========================================================================
      gsap.fromTo(
        ".case-study-header",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".case-emerald-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".case-emerald-card",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".case-metric-box",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".case-metrics-grid",
            start: "top 90%",
            once: true,
          },
        }
      );

      // =========================================================================
      // 2. DEDICATED SCROLL TRIGGERS ON THE IMAGE SECTION
      // Parallax depth scrub + scale response + image transitions as you scroll
      // =========================================================================
      
      // A. Parallax Depth Scrub on the Image Stage
      gsap.fromTo(
        ".case-parallax-img",
        { yPercent: -5, scale: 1.05 },
        {
          yPercent: 5,
          scale: 1.0,
          ease: "none",
          scrollTrigger: {
            trigger: imageSection,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      // B. Ambient Glow Bloom as the Image Section reaches the center of the screen
      gsap.fromTo(
        ".case-image-glow",
        { opacity: 0.2, scale: 0.9 },
        {
          opacity: 0.75,
          scale: 1.05,
          ease: "none",
          scrollTrigger: {
            trigger: imageSection,
            start: "top 75%",
            end: "bottom 30%",
            scrub: true,
          },
        }
      );

      // C. Sequential image crossfade scrub across the 3 images as you scroll
      const images = gsap.utils.toArray<HTMLElement>(".case-slide-layer");
      if (images.length > 1) {
        // Step through images based on scroll progress through the card
        ScrollTrigger.create({
          trigger: imageSection,
          start: "top 60%",
          end: "bottom 20%",
          scrub: 0.8,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.35) {
              setActiveSlide(0);
            } else if (p < 0.7) {
              setActiveSlide(1);
            } else {
              setActiveSlide(2);
            }
          },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="case-study-showcase"
      className="relative w-full bg-[#031008] text-white py-14 sm:py-18 lg:py-24 border-t border-emerald-950/40 select-none overflow-hidden"
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
            1. SECTION HEADER (Exact match with Figma reference)
        ====================================================================== */}
        <div className="case-study-header flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 sm:pb-6">
          <div>
            {/* Eyebrow Label with Green Indicator */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] flex-shrink-0" />
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.16em] text-emerald-400 font-semibold uppercase">
                20+ Pre-Engineered Platforms Ready to Deploy
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-[1.12] font-sans">
              We Build Digital Experiences That Matter
            </h2>

            {/* Italic Serif Subtitle */}
            <p className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[38px] font-serif italic font-normal text-white tracking-tight mt-1">
              Launch in 7 days.
            </p>
          </div>

          {/* Right Subtext */}
          <div className="lg:text-right max-w-[380px]">
            <p className="text-[12.5px] sm:text-[13px] text-[#8fa89b] leading-[1.6] font-normal">
              Don&apos;t spend 6 months building standard logistics or healthcare software from scratch.
            </p>
            <p className="text-[12.5px] sm:text-[13px] text-[#8fa89b] leading-[1.6] font-normal mt-0.5">
              Launch faster with zero monthly royalties.
            </p>
          </div>
        </div>

        {/* =====================================================================
            2. THE EMERALD SHOWCASE CONTAINER (Exact Figma Sizing & Hierarchy)
        ====================================================================== */}
        <div
          className="case-emerald-card mt-4 sm:mt-6 rounded-[22px] sm:rounded-[28px] lg:rounded-[32px] p-3.5 sm:p-5 lg:p-6 border border-emerald-800/40 shadow-2xl relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #012811 0%, #011b0c 100%)",
          }}
        >
          {/* Ambient Glow behind Image Section */}
          <div className="case-image-glow pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[320px] rounded-full bg-emerald-500/20 blur-[90px] opacity-20 transition-all duration-700" />

          {/* -----------------------------------------------------------------
              A. HERO IMAGE SECTION (WITH SCROLL TRIGGERS & PROPORTIONAL SIZING)
          ------------------------------------------------------------------ */}
          <div
            ref={imageSectionRef}
            className="relative w-full aspect-[3.26/1] min-h-[180px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[350px] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/25 group/hero cursor-pointer"
          >
            {/* SLIDE 1: Master KisanConnect Agri Marketplace */}
            <div
              className={`case-slide-layer absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                activeSlide === 0 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="case-parallax-img absolute inset-[-8%] w-[116%] h-[116%]">
                <Image
                  src="/images/case-study-hero-2x.png"
                  alt="KisanConnect Agri Marketplace Case Study"
                  fill
                  priority
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  className="object-cover object-center group-hover/hero:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Clickable Overlay Link to Contact */}
              <Link
                href="/#contact-cta"
                className="absolute inset-0 z-20"
                aria-label="KisanConnect Agri Marketplace - Contact Us"
              />
            </div>

            {/* SLIDE 2: Smart Drone Fleet & Irrigation */}
            <div
              className={`case-slide-layer absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                activeSlide === 1 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="case-parallax-img absolute inset-[-8%] w-[116%] h-[116%]">
                <Image
                  src="/images/case-study-card-1.png"
                  alt="Smart Drone Fleet & Irrigation Management"
                  fill
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  className="object-cover object-center group-hover/hero:scale-[1.01] transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-black/60 backdrop-blur-md border border-emerald-400/30 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider text-emerald-300">
                • CASE STUDY — SMART DRONE FLEET & IRRIGATION
              </div>
            </div>

            {/* SLIDE 3: AI Crop Health & Diagnostics */}
            <div
              className={`case-slide-layer absolute inset-0 w-full h-full transition-opacity duration-700 ease-out ${
                activeSlide === 2 ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <div className="case-parallax-img absolute inset-[-8%] w-[116%] h-[116%]">
                <Image
                  src="/images/case-study-card-2.png"
                  alt="AI Crop Health and Plant Disease Diagnostics"
                  fill
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  className="object-cover object-center group-hover/hero:scale-[1.01] transition-transform duration-500"
                />
              </div>
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 bg-black/60 backdrop-blur-md border border-emerald-400/30 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono tracking-wider text-emerald-300">
                • CASE STUDY — AI CROP HEALTH & DIAGNOSTICS
              </div>
            </div>

            {/* Subtle Interactive Slide Indicator Pills (Bottom Right) */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-30 flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-emerald-500/30 px-2.5 py-1 rounded-full">
              {showcaseSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveSlide(idx);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    activeSlide === idx
                      ? "w-5 h-1.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"
                      : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Show slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* -----------------------------------------------------------------
              B. THREE INFORMATION CARDS (The Problem, The Solution, The Impact)
          ------------------------------------------------------------------ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-3.5 sm:mt-5">
            {caseStudyCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl sm:rounded-2xl p-4 sm:p-5 bg-[#032310]/80 border border-emerald-900/50 hover:border-emerald-700/60 transition-colors flex flex-col justify-between"
              >
                {/* Top Badge & Tag Row */}
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-[#02180b] border border-emerald-800/50 px-3 py-1 rounded-full text-[11px] sm:text-[11.5px] font-medium text-slate-200">
                    {card.badge}
                  </span>
                  {card.tag && (
                    <span className="text-emerald-400 font-medium text-[11px] sm:text-[11.5px]">
                      {card.tag}
                    </span>
                  )}
                </div>

                {/* Card Description */}
                <p className="text-[#a0c5b0] text-[12.5px] sm:text-[13px] leading-[1.6] font-normal">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            3. THREE IMPACT METRICS ROW (Outside frame, matching Figma screenshot)
        ====================================================================== */}
        <div className="case-metrics-grid grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8 pt-2 px-2 sm:px-4">
          {impactMetrics.map((metric, idx) => (
            <div key={idx} className="case-metric-box flex flex-col text-left">
              {/* Metric Value with Cyan Number & Warm Orange Plus */}
              <div className="text-[28px] sm:text-[34px] lg:text-[40px] font-bold tracking-tight leading-none font-sans text-[#00c596]">
                <span>{metric.number}</span>
                <span className="text-[#e07538] font-bold ml-0.5">
                  {metric.plus}
                </span>
              </div>

              {/* Metric Label */}
              <span className="text-[13px] sm:text-[14px] text-slate-300 font-medium leading-tight mt-1.5">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
