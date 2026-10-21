"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function AboutHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".fade-in-el",
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.07,
          ease: "power2.out",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0b0f17] text-white pt-6 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Main Grid: Left Content & Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Breadcrumbs, Badge, Heading, Copy, Actions   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
            
            {/* Breadcrumb: HOME > ABOUT US */}
            <div className="fade-in-el flex items-center gap-2 text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#717a8a] mb-4">
              <Link
                href="/"
                className="hover:text-slate-300 transition-colors focus:outline-none"
              >
                HOME
              </Link>
              <span className="text-[#4b5563] text-[9px]">&gt;</span>
              <span className="text-white font-bold tracking-[0.22em]">
                ABOUT US
              </span>
            </div>

            {/* Pill Badge: ● SECTION 01 // GLOBAL OPERATIONS */}
            <div className="fade-in-el inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563eb] text-white mb-4 shadow-sm shadow-blue-900/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]" />
              <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.08em] uppercase">
                SECTION 01 // GLOBAL OPERATIONS
              </span>
            </div>

            {/* Main Headline (Tighter, proportional font size) */}
            <h1 className="fade-in-el text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold text-white tracking-[-0.025em] leading-[1.1] mb-3.5 font-sans">
              Architecting enterprise <span className="block">success.</span>
            </h1>

            {/* Paragraph / Description */}
            <p className="fade-in-el text-[13.5px] sm:text-[14.5px] text-[#868f9e] font-normal leading-[1.6] max-w-[450px] mb-6">
              Bridging the gap between ambitious business goals and technical
              execution with globally distributed engineering hubs and localized
              support.
            </p>

            {/* Action Buttons & Metrics Row */}
            <div className="fade-in-el flex flex-wrap items-center gap-3 sm:gap-3.5 w-full">
              {/* Button 1: VIEW LOCATIONS v */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("locations-gallery");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-[11px] sm:text-[11.5px] tracking-wider uppercase transition-colors duration-200 shadow-md shadow-blue-900/30 cursor-pointer focus:outline-none"
              >
                <span>VIEW LOCATIONS</span>
                <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              {/* Button 2: EXPLORE INFRASTRUCTURE */}
              <button
                type="button"
                className="inline-flex items-center px-4.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#131722] hover:bg-[#191f2e] text-[#ccd3df] hover:text-white border border-[#212838] font-bold text-[11px] sm:text-[11.5px] tracking-wider uppercase transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                <span>EXPLORE INFRASTRUCTURE</span>
              </button>

              {/* Divider | */}
              <div className="hidden sm:block h-4 w-[1px] bg-[#293244] mx-1" />

              {/* Stat Metric */}
              <div className="text-[11px] sm:text-[11.5px] font-semibold text-[#868f9e] tracking-[0.12em] uppercase py-1">
                5 GLOBAL HUBS • 100+ CRAFTSMEN
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: The 2 Core Pillar Cards side by side        */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 justify-start lg:justify-end w-full">
            
            {/* ---------------- CARD 1: CORE PILLAR 01 ---------------- */}
            <div className="fade-in-el w-full sm:w-[270px] lg:w-[275px] rounded-2xl bg-[#11151e] border border-[#1d2535] p-5 sm:p-5.5 flex flex-col justify-between shadow-lg">
              <div>
                {/* Top Icon Box: Terminal prompt >_ */}
                <div className="w-7 h-7 rounded-lg bg-[#161c27] border border-[#232c3d] flex items-center justify-center text-slate-300 mb-3.5">
                  <svg
                    className="w-3.5 h-3.5 text-slate-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </div>

                {/* Kicker: CORE PILLAR 01 */}
                <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-[#717b8c] mb-1.5">
                  CORE PILLAR 01
                </span>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug mb-2">
                  100% IP & Code Sovereignty
                </h3>

                {/* Description */}
                <p className="text-[12px] sm:text-[12.5px] text-[#788294] leading-[1.6]">
                  Unconditional Git branch transfer upon milestone delivery. Full
                  patent, repository, and asset ownership with zero proprietary
                  retention or vendor lock-in.
                </p>
              </div>

              {/* Bottom Badge: Checkmark + Bilateral Escrow Ready */}
              <div className="mt-5 pt-3 border-t border-[#182133] flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-slate-400 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="text-[11.5px] font-medium text-slate-300">
                  Bilateral Escrow Ready
                </span>
              </div>
            </div>

            {/* ---------------- CARD 2: CORE PILLAR 03 ---------------- */}
            <div className="fade-in-el w-full sm:w-[270px] lg:w-[275px] rounded-2xl bg-[#11151e] border border-[#1d2535] p-5 sm:p-5.5 flex flex-col justify-between shadow-lg">
              <div>
                {/* Top Icon Box: circle with slash (red/salmon) */}
                <div className="w-7 h-7 rounded-lg bg-[#201518] border border-[#381c22] flex items-center justify-center text-[#f87171] mb-3.5">
                  <svg
                    className="w-3.5 h-3.5 text-[#f87171]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                </div>

                {/* Kicker: CORE PILLAR 03 (coral/salmon red text) */}
                <span className="block text-[10px] font-bold tracking-[0.14em] uppercase text-[#f87171] mb-1.5">
                  CORE PILLAR 03
                </span>

                {/* Title */}
                <h3 className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug mb-2">
                  Zero Monetization
                </h3>

                {/* Description */}
                <p className="text-[12px] sm:text-[12.5px] text-[#788294] leading-[1.6]">
                  Absolute ban on LLM model training with client codebase,
                  database dumps, synthetic payloads, or behavioral analytics
                  under legal indemnity.
                </p>
              </div>

              {/* Bottom Badge: Strict Anti-Scraping (salmon red) */}
              <div className="mt-5 pt-3 border-t border-[#182133] flex items-center gap-2">
                <svg
                  className="w-3.5 h-3.5 text-[#f87171] flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
                <span className="text-[11.5px] font-medium text-[#f87171]">
                  Strict Anti-Scraping
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
