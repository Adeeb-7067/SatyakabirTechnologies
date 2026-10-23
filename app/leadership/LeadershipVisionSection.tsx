"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function LeadershipVisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".vision-text-content",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".vision-photo-card",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full bg-[#0a0d14] text-white pt-10 sm:pt-14 md:pt-18 pb-16 sm:pb-20 md:pb-24 overflow-hidden font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Leadership Vision Copy */}
          <div className="vision-text-content lg:col-span-6 flex flex-col justify-center order-2 lg:order-1">
            {/* Kicker: LEADERSHIP */}
            <span className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-[#94a3b8] uppercase mb-3.5 sm:mb-4 block">
              LEADERSHIP
            </span>

            {/* Headline */}
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-[1.15] mb-6 sm:mb-8 font-sans">
              Guiding the vision for the industry&apos;s standard digital solutions.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#94a3b8] font-normal leading-[1.7] mb-5 sm:mb-6">
              Our leadership team is composed of veteran cloud architects and
              operational strategists. We believe in empowering our engineers
              with full ownership of their modules, ensuring that every product
              we deploy is built with passion and precision.
            </p>

            {/* Paragraph 2 */}
            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#94a3b8] font-normal leading-[1.7]">
              From fostering a remote-friendly workspace to investing in
              continuous learning, our founders are dedicated to building a
              culture where top-tier talent can thrive and build
              mission-critical enterprise systems.
            </p>
          </div>

          {/* Right Column: Executive Leadership Photo with Overlapping Executive Impact Card */}
          <div className="vision-photo-card lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative w-full aspect-[4/4.3] max-w-[520px] mx-auto rounded-[26px] sm:rounded-[30px] overflow-hidden bg-[#11141c] border border-white/[0.08] shadow-2xl">
              {/* Photo */}
              <Image
                src="/images/leadership-executives-photo-hq.png"
                alt="Executive leadership team steering technology and strategic growth"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Subtle vignette gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14]/40 via-transparent to-transparent pointer-events-none" />

              {/* Overlapping Blue Executive Impact Card */}
              <div className="absolute right-0 bottom-0 left-[38%] top-[47%] rounded-tl-[24px] sm:rounded-tl-[26px] bg-[#1652f0] p-4 sm:p-5 md:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-t border-l border-blue-400/30">
                {/* Vertical White Notch Accent on the right edge */}
                <div className="absolute right-0 top-[28%] w-[5px] h-[52px] bg-white rounded-l-full pointer-events-none" />

                {/* Top: Icon + Title + Description */}
                <div>
                  {/* Custom Vector Icon */}
                  <div className="mb-3">
                    <svg
                      className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="5" y="5" width="34" height="38" rx="2" fill="white" />
                      <path
                        d="M10.5 13l3.5 3.5M14 13L10.5 16.5"
                        stroke="#1652f0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <path
                        d="M10.5 24.5l2.2 2.2 4.3-4.3"
                        stroke="#1652f0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.5 32.5l3.5 3.5M14 32.5L10.5 36"
                        stroke="#1652f0"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                      <circle cx="28" cy="15" r="7.5" fill="#1652f0" />
                      <path
                        d="M35 15.5h4.5"
                        stroke="#1652f0"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                      <line
                        x1="22"
                        y1="27"
                        x2="33"
                        y2="27"
                        stroke="#1652f0"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                      <line
                        x1="22"
                        y1="33"
                        x2="33"
                        y2="33"
                        stroke="#1652f0"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                      <line
                        x1="22"
                        y1="39"
                        x2="33"
                        y2="39"
                        stroke="#1652f0"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[17.5px] md:text-[18.5px] font-bold text-white tracking-tight leading-snug mb-1 font-sans">
                    Executive Impact
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-[11.5px] md:text-[12px] text-white/90 leading-[1.5] font-normal">
                    Driving strategic growth and technical innovation across all our global enterprise deployments.
                  </p>
                </div>

                {/* Bottom: Carousel indicator dashes */}
                <div className="flex items-center gap-1.5 pt-2">
                  <div className="w-7 h-1 bg-white rounded-full" />
                  <div className="w-3.5 h-1 bg-white/70 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
