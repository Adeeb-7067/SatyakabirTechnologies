"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LeadershipHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".leadership-breadcrumb",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          ".leadership-badge",
          { opacity: 0, scale: 0.9, y: 15 },
          { opacity: 1, scale: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          ".leadership-hero-title",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".leadership-hero-desc",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".leadership-hero-btns",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0a0d14] text-white pt-6 sm:pt-8 md:pt-10 pb-16 sm:pb-20 md:pb-24 overflow-hidden font-sans selection:bg-blue-600 selection:text-white"
    >
      {/* Ambient background glow matching design */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb: HOME > LEADERSHIP */}
        <div className="leadership-breadcrumb flex items-center gap-2 mb-8 sm:mb-12 text-[11px] sm:text-[12px] font-mono tracking-[0.18em] uppercase font-semibold text-[#8fa0b5]">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200"
          >
            HOME
          </Link>
          <span className="text-[#4b5563]">›</span>
          <span className="text-white">LEADERSHIP</span>
        </div>

        {/* Hero Content Center Stack */}
        <div className="flex flex-col items-center text-center max-w-[960px] mx-auto">
          {/* Pill Badge: NEXT-GEN MOBILE ECOSYSTEM V3.0 */}
          <div className="leadership-badge inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full bg-[#1d4ed8] text-white text-[10.5px] sm:text-[11.5px] font-bold tracking-[0.14em] uppercase mb-6 sm:mb-7 shadow-lg shadow-blue-700/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93c5fd]" />
            <span>NEXT-GEN MOBILE ECOSYSTEM V3.0</span>
          </div>

          {/* Headline */}
          <h1 className="leadership-hero-title text-[32px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold text-white tracking-[-0.03em] leading-[1.12] mb-6 sm:mb-7">
            The Minds Behind Engineering Digital Excellence
          </h1>

          {/* Subtitle */}
          <p className="leadership-hero-desc text-[14px] sm:text-[15.5px] md:text-[16.5px] text-[#94a3b8] font-normal leading-[1.65] max-w-[720px] mx-auto mb-8 sm:mb-10">
            Our diverse engineering teams, product designers, and strategic
            thinkers are the driving force behind the industry&apos;s most
            robust digital platforms.
          </p>

          {/* Action Buttons Row matching reference screenshot */}
          <div className="leadership-hero-btns flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* Primary Gradient Pill Button: Get in Join the Team */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-[#1f54dc] via-[#10b981] to-[#ea580c] hover:opacity-95 text-white font-medium text-[13.5px] sm:text-[14px] tracking-normal shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get in Join the Team</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </Link>

            {/* Secondary Outlined Pill Button: Our Solutions */}
            <Link
              href="/industries"
              className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-white/20 bg-white/[0.04] hover:bg-white/10 hover:border-white/35 text-white font-medium text-[13.5px] sm:text-[14px] tracking-normal transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4 text-white stroke-[2]" />
              <span>Our Solutions</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
