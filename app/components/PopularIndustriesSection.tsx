"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface NodeTooltip {
  id: string;
  title: string;
  xPercent: number; // relative position for hotspot
  yPercent: number;
}

const hotspots: NodeTooltip[] = [
  { id: "drone", title: "Autonomous Drone Field Telemetry", xPercent: 16, yPercent: 17 },
  { id: "soil", title: "Hand Soil & Seed Sampling", xPercent: 44, yPercent: 23 },
  { id: "inputs", title: "Agri-Input & Bio-Fertilizer Grids", xPercent: 48, yPercent: 58 },
  { id: "weather", title: "Hyperlocal Microclimate Radar", xPercent: 71, yPercent: 63 },
  { id: "health", title: "AI Optical Disease Diagnostics", xPercent: 81, yPercent: 63 },
  { id: "yield", title: "Harvest Yield & Furrow Analytics", xPercent: 91, yPercent: 63 },
];

export default function PopularIndustriesSection() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const topLabelRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const col3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Top Label
      if (topLabelRef.current) {
        gsap.fromTo(
          topLabelRef.current,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 92%",
              once: true,
            },
          }
        );
      }

      // Column 1 Stats Stagger from Left
      gsap.fromTo(
        ".pop-stat-card",
        { x: -25, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 92%",
            once: true,
          },
        }
      );

      // Column 2 Card Rise
      if (col2Ref.current) {
        gsap.fromTo(
          col2Ref.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            delay: 0.1,
            clearProps: "all",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 92%",
              once: true,
            },
          }
        );
      }

      // Column 3 Image Card Reveal
      if (col3Ref.current) {
        gsap.fromTo(
          col3Ref.current,
          { scale: 0.96, y: 25, opacity: 0 },
          {
            scale: 1,
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.15,
            clearProps: "all",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 92%",
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#050810] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-white select-none overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Top Label */}
        <div ref={topLabelRef} className="mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#7884a4] uppercase font-mono inline-block">
            MOST POPULAR INDUSTRIES
          </span>
        </div>

        {/* 3-Column Unified Flex/Grid Stage */}
        <div className="flex flex-col lg:flex-row gap-3.5 sm:gap-4 items-stretch">
          
          {/* Column 1: Stacked Stat Cards */}
          <div
            ref={col1Ref}
            className="w-full lg:w-[175px] xl:w-[190px] shrink-0 flex flex-col justify-between gap-3 sm:gap-3.5"
          >
            {/* Stat 1 */}
            <div className="pop-stat-card flex-1 min-h-[110px] bg-[#14171e] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-white/[0.05] hover:border-white/10 hover:bg-[#181c26] transition-all duration-300 group shadow-lg">
              <span className="text-[34px] sm:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-none font-sans group-hover:scale-105 transition-transform duration-300">
                20
              </span>
              <span className="text-[12px] sm:text-[13px] text-slate-400 font-medium leading-tight mt-2 sm:mt-2.5">
                Districts Covered
              </span>
            </div>

            {/* Stat 2 */}
            <div className="pop-stat-card flex-1 min-h-[110px] bg-[#14171e] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-white/[0.05] hover:border-white/10 hover:bg-[#181c26] transition-all duration-300 group shadow-lg">
              <span className="text-[34px] sm:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-none font-sans group-hover:scale-105 transition-transform duration-300">
                120+
              </span>
              <span className="text-[12px] sm:text-[13px] text-slate-400 font-medium leading-tight mt-2 sm:mt-2.5">
                Agri Platforms Delivered
              </span>
            </div>

            {/* Stat 3 */}
            <div className="pop-stat-card flex-1 min-h-[110px] bg-[#14171e] rounded-xl sm:rounded-2xl p-4 sm:p-5 flex flex-col items-center justify-center text-center border border-white/[0.05] hover:border-white/10 hover:bg-[#181c26] transition-all duration-300 group shadow-lg">
              <span className="text-[34px] sm:text-[38px] lg:text-[42px] font-bold text-white tracking-tight leading-none font-sans group-hover:scale-105 transition-transform duration-300">
                50%
              </span>
              <span className="text-[12px] sm:text-[13px] text-slate-400 font-medium leading-tight mt-2 sm:mt-2.5">
                Farmers Onboarded
              </span>
            </div>
          </div>

          {/* Column 2: Product Showcase Feature Card */}
          <div
            ref={col2Ref}
            className="w-full lg:w-[360px] xl:w-[390px] shrink-0 bg-[#14171e] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 flex flex-col justify-between border border-white/[0.05] shadow-xl hover:border-white/10 transition-colors duration-300"
          >
            <div>
              {/* Product Showcase Eyebrow */}
              <div className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-slate-400 uppercase font-mono leading-tight mb-4 sm:mb-6">
                PRODUCT
                <br />
                SHOWCASE
              </div>

              {/* Main Feature Title */}
              <h3 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold text-white tracking-tight leading-[1.18] font-sans mb-4 sm:mb-5">
                A farmer app that actually gets used in the field
              </h3>

              {/* Detailed Description */}
              <p className="text-[13px] sm:text-[14px] text-slate-400 font-normal leading-relaxed mb-6 sm:mb-8">
                Built for low-bandwidth rural connectivity, with offline-first product catalogues, voice-assisted search in regional languages, and one-tap access to government scheme information.
              </p>
            </div>

            {/* Call to Action Button */}
            <div>
              <Link
                href="#contact"
                className="bg-white text-[#2563eb] hover:bg-slate-100 active:scale-95 transition-all font-semibold text-[13px] sm:text-[14px] px-5 py-2.5 rounded-lg inline-flex items-center gap-2 shadow-sm w-fit group/btn cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 text-[#2563eb] group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 3: Agricultural In-Field Showcase Photo Card */}
          <div
            ref={col3Ref}
            className="w-full flex-1 min-h-[350px] sm:min-h-[380px] lg:min-h-[400px] relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.05] shadow-2xl group bg-[#14171e]"
          >
            {/* Full High-Resolution In-Field Photo with Drones, Nodes & Farmers */}
            <Image
              src="/images/agri-showcase-photo.jpg"
              alt="A farmer app that actually gets used in the field"
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover object-[62%_center] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              priority
            />

            {/* Interactive Feature Node Hotspots with Subtle Micro-Tooltips */}
            {hotspots.map((node) => (
              <div
                key={node.id}
                style={{
                  position: "absolute",
                  left: `${node.xPercent}%`,
                  top: `${node.yPercent}%`,
                }}
                className="z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                onMouseEnter={() => setActiveHotspot(node.id)}
                onMouseLeave={() => setActiveHotspot(null)}
              >
                {/* Invisible hover hotspot target */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white/80 transition-all group-hover:scale-125" />
                </div>

                {/* Micro-Tooltip on hover */}
                {activeHotspot === node.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-black/90 text-white text-[11px] font-medium whitespace-nowrap shadow-xl border border-white/20 backdrop-blur-md pointer-events-none animate-in fade-in duration-200">
                    {node.title}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
