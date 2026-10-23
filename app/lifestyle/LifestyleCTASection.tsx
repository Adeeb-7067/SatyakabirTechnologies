"use client";

import React from "react";
import Link from "next/link";

export default function LifestyleCTASection() {
  return (
    <section className="relative z-10 w-full bg-[#050810] text-white pt-10 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-32 overflow-hidden font-sans border-t border-white/5">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Card Container with Cybernetic Grid Texture */}
        <div className="relative rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border border-white/[0.09] bg-[#0c0e14] overflow-hidden py-14 sm:py-18 md:py-20 px-6 sm:px-12 text-center shadow-2xl shadow-black/90">
          {/* Subtle Grid Texture Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.045) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.045) 1px, transparent 1px)
              `,
              backgroundSize: "36px 36px",
            }}
          />

          {/* Scattered subtle highlighted grid tiles matching screenshot */}
          <div className="absolute top-[22%] left-[12%] w-[36px] h-[36px] bg-white/[0.035] pointer-events-none" />
          <div className="absolute top-[38%] left-[20%] w-[36px] h-[36px] bg-white/[0.025] pointer-events-none" />
          <div className="absolute bottom-[22%] left-[24%] w-[36px] h-[36px] bg-white/[0.035] pointer-events-none" />
          <div className="absolute top-[30%] right-[18%] w-[36px] h-[36px] bg-white/[0.03] pointer-events-none" />
          <div className="absolute bottom-[26%] right-[24%] w-[36px] h-[36px] bg-white/[0.025] pointer-events-none" />

          {/* Soft ambient center glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,128,255,0.06)_0%,transparent_70%)] pointer-events-none" />

          {/* Content Elements */}
          <div className="relative z-10 max-w-[760px] mx-auto flex flex-col items-center">
            {/* Main Headline: READY TO DISCUSS */}
            <h2 className="text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] font-extrabold text-white tracking-[0.06em] uppercase leading-tight mb-3 sm:mb-3.5 font-sans">
              READY TO DISCUSS
            </h2>

            {/* Subtitle with highlighted blue text */}
            <p className="text-[14px] sm:text-[15.5px] md:text-[17px] text-[#cbd5e1] font-normal leading-relaxed mb-6 sm:mb-8 font-sans">
              Your Product Needs With{" "}
              <span className="text-[#0080ff] font-semibold">Catalyst Analytic</span>{" "}
              Experts?
            </p>

            {/* Blue CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 sm:px-8 py-2.5 sm:py-3 rounded-[10px] bg-[#0080ff] hover:bg-[#0070e6] text-white font-medium text-[14px] sm:text-[14.5px] tracking-normal transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
