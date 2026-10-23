"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LeadershipCTASection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".cta-card-box",
        { y: 35, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full bg-[#07090f] text-white pt-8 sm:pt-10 md:pt-12 pb-20 sm:pb-24 md:pb-28 overflow-hidden font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card Container with Cybernetic Grid Texture matching reference image */}
        <div className="cta-card-box relative rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#0c0e14] overflow-hidden py-12 sm:py-15 md:py-16 px-6 sm:px-12 text-center shadow-2xl shadow-black/80">
          {/* Subtle Grid Texture Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-45"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px)
              `,
              backgroundSize: "38px 38px",
            }}
          />

          {/* Scattered subtle highlighted grid tiles matching screenshot */}
          <div className="absolute top-[22%] left-[12%] w-[38px] h-[38px] bg-white/[0.035] pointer-events-none" />
          <div className="absolute top-[35%] left-[20%] w-[38px] h-[38px] bg-white/[0.025] pointer-events-none" />
          <div className="absolute bottom-[20%] left-[24%] w-[38px] h-[38px] bg-white/[0.035] pointer-events-none" />
          <div className="absolute top-[32%] right-[18%] w-[38px] h-[38px] bg-white/[0.03] pointer-events-none" />
          <div className="absolute bottom-[28%] right-[26%] w-[38px] h-[38px] bg-white/[0.025] pointer-events-none" />

          {/* Soft ambient center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,128,255,0.05)_0%,transparent_70%)] pointer-events-none" />

          {/* Content Elements */}
          <div className="relative z-10 max-w-[760px] mx-auto flex flex-col items-center">
            {/* Main Headline: READY TO DISCUSS */}
            <h2 className="text-[26px] sm:text-[32px] md:text-[36px] lg:text-[38px] font-bold text-white tracking-[0.04em] uppercase leading-tight mb-3 sm:mb-3.5">
              READY TO DISCUSS
            </h2>

            {/* Subtitle with highlighted blue text */}
            <p className="text-[14px] sm:text-[15.5px] md:text-[16.5px] text-[#cbd5e1] font-normal leading-relaxed mb-6 sm:mb-7">
              Your Product Needs With{" "}
              <span className="text-[#0080ff] font-semibold">
                Catalyst Analytic
              </span>{" "}
              Experts?
            </p>

            {/* Blue Pill CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-[10px] bg-[#0080ff] hover:bg-[#0070e6] text-white font-medium text-[14px] sm:text-[14.5px] tracking-normal transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
