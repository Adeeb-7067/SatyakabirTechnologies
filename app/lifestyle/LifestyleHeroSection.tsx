"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LifestyleHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Animate Breadcrumb
      gsap.fromTo(
        ".lifestyle-breadcrumb",
        { opacity: 0, y: -15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }
      );

      // Animate Left Column
      gsap.fromTo(
        ".lifestyle-col-left",
        { opacity: 0, x: -35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.15,
        }
      );

      // Animate Center Card
      gsap.fromTo(
        ".lifestyle-center-card",
        { opacity: 0, y: 25, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.1,
        }
      );

      // Animate Right Column
      gsap.fromTo(
        ".lifestyle-col-right",
        { opacity: 0, x: 35 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full bg-[#060913] text-white pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 md:pb-24 overflow-hidden font-sans selection:bg-blue-600 selection:text-white"
    >
      {/* Ambient Radial Glow centered behind the section */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(30,70,160,0.18)_0%,transparent_75%)] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation: HOME > LIFESTYLE */}
        <div className="lifestyle-breadcrumb flex items-center gap-2 mb-5 sm:mb-6">
          <Link
            href="/"
            className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#94a3b8] hover:text-white uppercase transition-colors"
          >
            HOME
          </Link>
          <span className="text-[#64748b] text-[12px] font-mono select-none">
            &gt;
          </span>
          <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-white uppercase">
            LIFESTYLE
          </span>
        </div>

        {/* 3-Column Symmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {/* Column 1: Left 2 Stacked Photo Cards */}
          <div className="lifestyle-col-left flex flex-col gap-3.5 sm:gap-4 order-2 lg:order-1 justify-between">
            {/* Top Left Photo: Team Outdoors Golden Sunset Camaraderie */}
            <div className="group relative w-full aspect-[16/9.2] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#0c101c] border border-white/[0.08] shadow-2xl transition-all duration-300 hover:border-blue-500/30">
              <Image
                src="/images/lifestyle-hero-outdoor.jpg"
                alt="Satyakabir team enjoying peaceful outdoor camaraderie during golden hour"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Left Photo: Studio Engineering & Design Team Huddle */}
            <div className="group relative w-full aspect-[16/9.2] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#0c101c] border border-white/[0.08] shadow-2xl transition-all duration-300 hover:border-blue-500/30">
              <Image
                src="/images/hd-lifestyle-ref-photo2.png"
                alt="Diverse team of creative engineers and designers collaborating around a laptop"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Column 2: Center "Who we are" Narrative Card */}
          <div className="lifestyle-center-card order-1 lg:order-2 h-full flex flex-col">
            <div className="relative rounded-[24px] sm:rounded-[28px] border border-white/[0.09] bg-[#080d19]/95 backdrop-blur-xl py-6 sm:py-7 px-5 sm:px-6 md:px-7 flex flex-col items-center text-center justify-between shadow-2xl shadow-black/80 h-full">
              {/* Top: Gradient Lines flanking "Who we are" */}
              <div className="w-full flex items-center justify-center gap-2.5 sm:gap-3 mb-1">
                {/* Left Spectrum Gradient Line */}
                <div className="flex-1 max-w-[55px] sm:max-w-[65px] h-[2.5px] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#f97316]" />

                {/* Title: Who we are */}
                <h2 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-white tracking-tight whitespace-nowrap font-sans">
                  Who we are
                </h2>

                {/* Right Spectrum Gradient Line */}
                <div className="flex-1 max-w-[55px] sm:max-w-[65px] h-[2.5px] rounded-full bg-gradient-to-r from-[#3b82f6] via-[#10b981] to-[#f97316]" />
              </div>

              {/* Center: Circular Team Icon */}
              <div className="w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-full bg-[#12192b] border border-white/[0.12] flex items-center justify-center my-3 sm:my-4 shadow-inner shadow-black/50">
                <svg
                  className="w-5.5 h-5.5 sm:w-6 sm:h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Central Figure */}
                  <circle
                    cx="12"
                    cy="8"
                    r="3.2"
                    stroke="white"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M6 19.5c0-3.3 2.7-6 6-6s6 2.7 6 6"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  {/* Left Figure */}
                  <circle
                    cx="5.5"
                    cy="10"
                    r="2.4"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeOpacity="0.85"
                  />
                  <path
                    d="M1.5 19c0-2.4 1.8-4.3 4.2-4.5"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                  {/* Right Figure */}
                  <circle
                    cx="18.5"
                    cy="10"
                    r="2.4"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeOpacity="0.85"
                  />
                  <path
                    d="M18.3 14.5c2.4.2 4.2 2.1 4.2 4.5"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeOpacity="0.85"
                  />
                </svg>
              </div>

              {/* Narrative Text matching screenshot */}
              <p className="text-[12px] sm:text-[12.5px] md:text-[13px] text-[#94a3b8] font-normal leading-[1.68] tracking-normal">
                Founded with a vision to eliminate operational bottlenecks,
                Satyakabir Technologies has grown into a trusted technology
                partner for global enterprises. Headquartered in Bhopal, our team
                of dedicated engineers, cloud architects, and UI/UX designers
                consistently deliver mission-critical applications. We don&apos;t
                just write code; we digitize entire business operations to drive
                measurable growth and efficiency.
              </p>
            </div>
          </div>

          {/* Column 3: Right 2 Stacked Photo Cards */}
          <div className="lifestyle-col-right flex flex-col gap-3.5 sm:gap-4 order-3 justify-between">
            {/* Top Right Photo */}
            <div className="group relative w-full aspect-[16/9.2] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#0c101c] border border-white/[0.08] shadow-2xl transition-all duration-300 hover:border-blue-500/30">
              <Image
                src="/images/hd-lifestyle-ref-photo1.png"
                alt="Teammates celebrating joyful company culture"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Right Photo */}
            <div className="group relative w-full aspect-[16/9.2] rounded-[22px] sm:rounded-[26px] overflow-hidden bg-[#0c101c] border border-white/[0.08] shadow-2xl transition-all duration-300 hover:border-blue-500/30">
              <Image
                src="/images/hd-lifestyle-ref-photo2.png"
                alt="Tech innovators brainstorming creative solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
