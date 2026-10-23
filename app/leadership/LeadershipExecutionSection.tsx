"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ExecutionStep {
  id: string;
  number: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  icon: React.ReactNode;
}

export default function LeadershipExecutionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".execute-header",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".execute-step-box",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".execute-arrow",
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full bg-[#07090f] text-white pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 overflow-hidden font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading: How We Execute */}
        <div className="execute-header text-center mb-16 sm:mb-20 md:mb-24">
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-[-0.03em] leading-tight">
            How We Execute
          </h2>
        </div>

        {/* 3-Step Process Flow with Connecting Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-14 md:gap-10 lg:gap-14 relative max-w-[1140px] mx-auto justify-items-start">
          {/* STEP 1: Discovery & Architecture */}
          <div className="execute-step-box relative flex flex-col items-start group w-full max-w-[270px]">
            {/* Blue Icon Container */}
            <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-[18px] sm:rounded-[20px] bg-[#1652f0] flex items-center justify-center shadow-lg shadow-blue-600/30 mb-6 sm:mb-7 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">
              {/* Document Icon with Folded Corner & Horizontal Lines */}
              <svg
                className="w-8 h-8 sm:w-9 sm:h-9"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Back sheet */}
                <path
                  d="M17 6h11a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2h-12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Front sheet with top-left folded corner */}
                <path
                  d="M14 6h10a2 2 0 0 1 2 2v25a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V13l6-7z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Fold */}
                <path
                  d="M8 13h6V7"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Content Lines */}
                <line
                  x1="18"
                  y1="10"
                  x2="22"
                  y2="10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="12"
                  y1="17"
                  x2="22"
                  y2="17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="12"
                  y1="21"
                  x2="22"
                  y2="21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="12"
                  y1="25"
                  x2="18"
                  y2="25"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="12"
                  y1="29"
                  x2="15"
                  y2="29"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white tracking-tight leading-[1.25] mb-3.5 font-sans group-hover:text-blue-400 transition-colors duration-200">
              Discovery &amp;
              <br />
              Architecture
            </h3>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14px] text-[#94a3b8] leading-[1.65] font-normal">
              Deep-diving into your workflows to define database structures and
              technical blueprints.
            </p>

            {/* Curved Dashed Arrow 1 to Step 2 (Desktop / Tablet only) */}
            <div className="execute-arrow hidden md:block absolute left-[210px] lg:left-[230px] xl:left-[245px] top-[102px] lg:top-[106px] w-[95px] lg:w-[115px] xl:w-[125px] pointer-events-none z-10 text-white">
              <svg
                viewBox="0 0 120 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
              >
                {/* Upward Arching Dashed Curve matching reference screenshot */}
                <path
                  d="M 5 42 Q 62 4, 114 18"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeDasharray="4.5 4.5"
                  strokeLinecap="round"
                />
                {/* Arrowhead pointing towards Step 2 */}
                <path
                  d="M 104 11 L 115 18 L 109 28"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* STEP 2: Agile Development */}
          <div className="execute-step-box relative flex flex-col items-start group w-full max-w-[270px]">
            {/* Blue Icon Container */}
            <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-[18px] sm:rounded-[20px] bg-[#1652f0] flex items-center justify-center shadow-lg shadow-blue-600/30 mb-6 sm:mb-7 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">
              {/* Contract Sheet + Seal + Pen Icon */}
              <svg
                className="w-8 h-8 sm:w-9 sm:h-9"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Document Sheet */}
                <rect
                  x="7"
                  y="6"
                  width="22"
                  height="28"
                  rx="2"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Top Title Line */}
                <line
                  x1="11"
                  y1="11"
                  x2="21"
                  y2="11"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                {/* Text Lines */}
                <line
                  x1="11"
                  y1="15"
                  x2="22"
                  y2="15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="11"
                  y1="19"
                  x2="18"
                  y2="19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Circular Stamp / Seal with Checkmark */}
                <circle
                  cx="13.5"
                  cy="26.5"
                  r="3.5"
                  stroke="white"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 26.5l1.2 1.2 2.2-2.2"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Signature Squiggle */}
                <path
                  d="M19 27.5c1.2-1 2 1 3.2-0.5"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                {/* Diagonal Pen on Right pointing down-left */}
                <g transform="translate(25, 12) rotate(45)">
                  <rect
                    x="-2"
                    y="-10"
                    width="4"
                    height="12"
                    rx="1"
                    fill="white"
                  />
                  <path d="M-2 2 L2 2 L0 6 Z" fill="white" />
                  <line
                    x1="-2"
                    y1="-7"
                    x2="-4"
                    y2="-7"
                    stroke="white"
                    strokeWidth="1.4"
                  />
                </g>
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white tracking-tight leading-[1.25] mb-3.5 font-sans group-hover:text-blue-400 transition-colors duration-200">
              Agile
              <br />
              Development
            </h3>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14px] text-[#94a3b8] leading-[1.65] font-normal">
              Engineering secure, modular components with continuous testing and
              client feedback loops.
            </p>

            {/* Curved Dashed Arrow 2 to Step 3 (Desktop / Tablet only) */}
            <div className="execute-arrow hidden md:block absolute left-[210px] lg:left-[230px] xl:left-[245px] top-[112px] lg:top-[116px] w-[95px] lg:w-[115px] xl:w-[125px] pointer-events-none z-10 text-white">
              <svg
                viewBox="0 0 120 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
              >
                {/* Dipping Down and Swooping Up Dashed Curve */}
                <path
                  d="M 5 18 Q 60 48, 114 8"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeDasharray="4.5 4.5"
                  strokeLinecap="round"
                />
                {/* Arrowhead pointing up-right towards Step 3 */}
                <path
                  d="M 102 8 L 114 8 L 114 20"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* STEP 3: Deployment & Scale */}
          <div className="execute-step-box relative flex flex-col items-start group w-full max-w-[270px]">
            {/* Blue Icon Container */}
            <div className="w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-[18px] sm:rounded-[20px] bg-[#1652f0] flex items-center justify-center shadow-lg shadow-blue-600/30 mb-6 sm:mb-7 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/40">
              {/* Binder / Booklet + Bold Checkmark Icon */}
              <svg
                className="w-8 h-8 sm:w-9 sm:h-9"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left Spine double lines */}
                <path
                  d="M9 8h2v24H9a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                {/* Front Document Page */}
                <rect
                  x="11"
                  y="6"
                  width="20"
                  height="28"
                  rx="2"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Header & Code Lines */}
                <line
                  x1="15"
                  y1="11"
                  x2="24"
                  y2="11"
                  stroke="white"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="15"
                  x2="26"
                  y2="15"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="19"
                  x2="26"
                  y2="19"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="23"
                  x2="20"
                  y2="23"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Prominent Checkmark Badge extending slightly bottom-right */}
                <path
                  d="M23 23.5l4 4 8-9.5"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white tracking-tight leading-[1.25] mb-3.5 font-sans group-hover:text-blue-400 transition-colors duration-200">
              Deployment
              <br />
              &amp; Scale
            </h3>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14px] text-[#94a3b8] leading-[1.65] font-normal max-w-[280px]">
              Launching on robust cloud infrastructure backed by 24/7 monitoring
              and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
