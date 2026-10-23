"use client";

import React from "react";
import { Trophy, Award, Star } from "lucide-react";

interface AwardItem {
  id: number;
  badgeType: "trophy" | "medal" | "star";
  quote: string;
  title: string;
  subtext: string;
  highlightSubtext?: boolean;
}

const awardsData: AwardItem[] = [
  {
    id: 1,
    badgeType: "trophy",
    quote:
      "“Exceptional delivery in enterprise CRM systems, low-latency microservices, and end-to-end data pipeline stability.”",
    title: "B2B SaaS Excellence",
    subtext: "Clutch & Enterprise Forum 2025",
  },
  {
    id: 2,
    badgeType: "medal",
    quote:
      "“Breakthrough architectures in low-latency WebRTC and distributed streaming across pan-India cellular networks.”",
    title: "Innovation in Real-Time Tech",
    subtext: "Global SaaS Architecture Summit",
    highlightSubtext: true,
  },
  {
    id: 3,
    badgeType: "star",
    quote:
      "“Consistent track record in scaling multi-continent projects with zero code compromise and full IP code transfer.”",
    title: "Top Global Developers",
    subtext: "National Tech Excellence Review",
  },
];

export default function LifestyleAwardsSection() {
  return (
    <section className="relative w-full bg-[#050810] py-20 sm:py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-14 sm:mb-16">
          {/* Top Pill Badge */}
          <div className="inline-block mb-3.5 sm:mb-4">
            <span className="inline-flex items-center bg-white text-zinc-950 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md select-none">
              SECTION 05 // RECOGNITION
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 font-sans">
            Awards
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Proof of craft and delivery across Indian and International enterprises.
          </p>
        </div>

        {/* 3 Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch pt-3">
          {awardsData.map((award) => (
            <div
              key={award.title}
              className="relative rounded-2xl sm:rounded-3xl bg-[#0b101c]/90 border border-zinc-700/60 p-6 sm:p-7 pt-10 sm:pt-12 flex flex-col justify-between text-center shadow-xl shadow-black/50 hover:border-zinc-500/70 hover:bg-[#0e1424] transition-all duration-300 group"
            >
              {/* Floating Top Medallion Badge */}
              <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 z-20">
                {award.badgeType === "trophy" && (
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/30 border border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <Trophy className="w-5 h-5 text-amber-500 fill-amber-400/20 stroke-[2.2]" />
                  </div>
                )}

                {award.badgeType === "medal" && (
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#fefce8] flex items-center justify-center shadow-lg shadow-black/30 border border-yellow-200/70 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-5 h-5 text-yellow-500 fill-yellow-400/20 stroke-[2.2]" />
                  </div>
                )}

                {award.badgeType === "star" && (
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/30 border border-white/60 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-5 h-5 text-blue-500 stroke-[2.2]" />
                  </div>
                )}
              </div>

              {/* Quote Body */}
              <div className="flex-1 flex items-center justify-center px-1 sm:px-2 py-4">
                <p className="text-xs sm:text-[13px] md:text-[13.5px] italic text-zinc-300 leading-relaxed font-sans">
                  {award.quote}
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-zinc-800/90 my-3 sm:my-4" />

              {/* Footer Title & Subtext */}
              <div className="flex flex-col items-center">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-1 font-sans">
                  {award.title}
                </h3>
                <span
                  className={`text-[11px] sm:text-xs font-sans ${
                    award.highlightSubtext
                      ? "text-[#3b82f6] font-medium"
                      : "text-zinc-500"
                  }`}
                >
                  {award.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
