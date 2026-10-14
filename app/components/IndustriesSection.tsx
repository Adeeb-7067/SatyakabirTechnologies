"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface IndustryItem {
  id: string;
  title: string;
  reg: string;
  description: string;
  linkText: string;
  linkHref: string;
  image: string;
  topGradient: string;
}

const industries: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare & MedTech",
    reg: "REG: HIPAA / NABH",
    description:
      "Encrypted doctor-patient teleconsultation, integrated EHR repositories, real-time vitals monitoring, and diagnostic laboratory dispatch grids.",
    linkText: "Explore Telehealth Grid",
    linkHref: "#healthcare",
    image: "/images/hq-industry-healthcare.png",
    topGradient: "from-blue-600 via-indigo-500 to-purple-500",
  },
  {
    id: "fintech",
    title: "FinTech & Banking",
    reg: "REG: RBI / PCI-DSS",
    description:
      "Core banking integration, fraud detection neural pipelines, high-frequency transaction settlement, and regulatory ledger compliance.",
    linkText: "Explore FinTech Engine",
    linkHref: "#fintech",
    image: "/images/hq-industry-datacenter.png",
    topGradient: "from-emerald-500 via-teal-500 to-blue-500",
  },
  {
    id: "agriculture",
    title: "Agriculture",
    reg: "REG: HIPAA / NABH",
    description:
      "Encrypted doctor-patient teleconsultation, integrated EHR repositories, real-time vitals monitoring, and diagnostic laboratory dispatch grids.",
    linkText: "Explore Telehealth Grid",
    linkHref: "#agriculture",
    image: "/images/hq-industry-agri.png",
    topGradient: "from-blue-600 via-indigo-500 to-orange-500",
  },
  {
    id: "datacenter",
    title: "Healthcare & MedTech",
    reg: "REG: HIPAA / NABH",
    description:
      "Encrypted doctor-patient teleconsultation, integrated EHR repositories, real-time vitals monitoring, and diagnostic laboratory dispatch grids.",
    linkText: "Explore Telehealth Grid",
    linkHref: "#datacenter",
    image: "/images/hq-industry-datacenter.png",
    topGradient: "from-blue-600 via-indigo-500 to-amber-500",
  },
  {
    id: "logistics",
    title: "Supply Chain & Logistics",
    reg: "REG: ISO 28000 / WMS",
    description:
      "Real-time fleet tracking, automated warehouse robotics interfaces, route optimization, and cross-border customs telemetry.",
    linkText: "Explore Logistics Suite",
    linkHref: "#logistics",
    image: "/images/hq-industry-healthcare.png",
    topGradient: "from-amber-500 via-orange-500 to-rose-500",
  },
];

export default function IndustriesSection() {
  // Start on index 2 (Agriculture) to match the reference mockup exactly
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  // Touch drag state for mobile swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
  }, []);

  const handleSelect = (idx: number) => {
    setActiveIndex(idx);
  };

  // Optional subtle auto-play (pauses on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, handleNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Helper to compute circular offset for each card relative to activeIndex
  const getOffset = (index: number) => {
    const total = industries.length;
    let diff = (index - activeIndex + total) % total;
    if (diff > 2) diff -= total; // Gives -2, -1, 0, 1, 2
    return diff;
  };

  return (
    <section
      className="w-full bg-[#050c14] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-20 text-white overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] rounded-full opacity-25 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(15, 23, 42, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Category Tag */}
          <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] text-[#f472b6] uppercase inline-block mb-3.5">
            DOMAIN EXPERTISE
          </span>

          {/* Main Title */}
          <h2 className="text-[32px] sm:text-[42px] lg:text-[48px] font-bold text-white tracking-tight leading-[1.12] mb-4 font-sans">
            Five focused industries. <br />
            Zero guesswork.
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-400 font-normal leading-relaxed max-w-xl mx-auto">
            Engineered with deep regulatory compliance, protocol certifications, and enterprise workflows ready out-of-the-box.
          </p>
        </div>

        {/* 3D Animated Showcase Stage */}
        <div
          className="relative w-full h-[480px] sm:h-[510px] md:h-[530px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {industries.map((industry, index) => {
            const offset = getOffset(index);
            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;
            const isVisible = Math.abs(offset) <= 1;

            // Pure valid CSS transforms for 60fps GPU acceleration
            let transform = "";
            let opacity = 0;
            let filter = "blur(4px)";
            let zIndex = 5;
            let pointerEvents: "auto" | "none" = "none";

            if (isActive) {
              transform = "translate(-50%, -50%) translateX(0px) scale(1)";
              opacity = 1;
              filter = "blur(0px)";
              zIndex = 30;
              pointerEvents = "auto";
            } else if (isLeft) {
              transform = "translate(-50%, -50%) translateX(calc(-100% - 24px)) scale(0.92)";
              opacity = 0.38;
              filter = "blur(1.6px)";
              zIndex = 15;
              pointerEvents = "auto";
            } else if (isRight) {
              transform = "translate(-50%, -50%) translateX(calc(100% + 24px)) scale(0.92)";
              opacity = 0.38;
              filter = "blur(1.6px)";
              zIndex = 15;
              pointerEvents = "auto";
            } else if (offset <= -2) {
              transform = "translate(-50%, -50%) translateX(calc(-200% - 48px)) scale(0.82)";
              opacity = 0;
              zIndex = 5;
            } else {
              transform = "translate(-50%, -50%) translateX(calc(200% + 48px)) scale(0.82)";
              opacity = 0;
              zIndex = 5;
            }

            return (
              <div
                key={industry.id}
                onClick={() => isVisible && !isActive && handleSelect(index)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform,
                  opacity,
                  filter,
                  zIndex,
                  pointerEvents,
                  transition:
                    "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), filter 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                className={`w-[320px] sm:w-[370px] md:w-[395px] lg:w-[415px] will-change-transform ${
                  isActive ? "cursor-default" : "cursor-pointer hover:opacity-60"
                }`}
                aria-hidden={!isActive}
              >
                <div
                  className={`relative rounded-2xl bg-[#121922] p-4 sm:p-5 overflow-hidden transition-all duration-500 ${
                    isActive
                      ? "border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.85),_0_0_25px_rgba(37,99,235,0.15)]"
                      : "border border-slate-700/40 shadow-xl"
                  }`}
                >
                  {/* Top Glowing Gradient Border Accent */}
                  <div
                    className={`absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r ${industry.topGradient} transition-opacity duration-500 ${
                      isActive
                        ? "opacity-100 shadow-[0_0_12px_rgba(37,99,235,0.6)]"
                        : "opacity-60"
                    }`}
                  />

                  {/* Card Image */}
                  <div className="relative w-full aspect-[16/10.5] rounded-xl overflow-hidden mb-4 bg-slate-900 shadow-inner group">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 420px"
                      className={`object-cover transition-transform duration-700 ease-out ${
                        isActive ? "hover:scale-105" : ""
                      }`}
                      priority={isActive}
                    />
                  </div>

                  {/* Meta Header: Activity Pulse Icon + Regulation Code */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-slate-300">
                      <Activity className="w-4 h-4 stroke-[2]" />
                    </span>
                    <span className="text-[10.5px] font-mono text-slate-400 tracking-wider">
                      {industry.reg}
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight mb-2 font-sans">
                    {industry.title}
                  </h3>

                  {/* Description Text */}
                  <p className="text-[12.5px] sm:text-[13px] text-slate-300 font-normal leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Action Link with Arrow */}
                  <Link
                    href={industry.linkHref}
                    className="group flex items-center justify-between text-[12.5px] sm:text-[13px] font-medium text-slate-200 hover:text-white transition-colors cursor-pointer pt-1"
                  >
                    <span className="group-hover:text-blue-300 transition-colors">
                      {industry.linkText}
                    </span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-all duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination & Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10 relative z-30">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous industry"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141d28] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all duration-200 active:scale-90 cursor-pointer focus:outline-none hover:shadow-lg hover:shadow-blue-900/20"
          >
            <ChevronLeft className="w-4 h-4 stroke-[2.2]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 px-2">
            {industries.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelect(idx)}
                aria-label={`Go to industry ${idx + 1}`}
                className={`transition-all duration-500 ease-out cursor-pointer focus:outline-none ${
                  idx === activeIndex
                    ? "w-6 h-1.5 rounded-full bg-[#91a7ff] shadow-[0_0_8px_rgba(145,167,255,0.6)]"
                    : "w-1.5 h-1.5 rounded-full bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next industry"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#141d28] border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all duration-200 active:scale-90 cursor-pointer focus:outline-none hover:shadow-lg hover:shadow-blue-900/20"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </section>
  );
}
