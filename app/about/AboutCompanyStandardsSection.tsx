"use client";

import React, { useRef } from "react";
import { BadgeCheck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StandardItem {
  id: string;
  title: string;
  description: React.ReactNode;
}

const standards: StandardItem[] = [
  {
    id: "innovation",
    title: "Innovation",
    description: (
      <>
        Pushing boundaries in <span className="italic">AI</span>, blockchain,
        and quantitative trading to deliver cutting-edge solutions.
      </>
    ),
  },
  {
    id: "collaboration",
    title: "Collaboration",
    description:
      "Working closely with clients to develop tailored solutions that drive measurable success.",
  },
  {
    id: "excellence",
    title: "Excellence",
    description:
      "Maintaining the highest standards in code quality, system performance, and client outcomes.",
  },
  {
    id: "integrity",
    title: "Integrity",
    description:
      "Operating with transparency and ethical considerations at the forefront of all decisions.",
  },
];

export default function AboutCompanyStandardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".standards-title",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".standard-circle-item",
        { scale: 0.85, opacity: 0, y: 30 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full bg-[#050810] text-white pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-18 md:pb-20 overflow-hidden font-sans selection:bg-emerald-600 selection:text-white scroll-mt-24"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="standards-title text-[32px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-[-0.02em] leading-tight text-center mb-12 sm:mb-16 md:mb-20">
          Company Standards
        </h2>

        {/* 4 Overlapping Circles Row */}
        <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar scroll-smooth py-6 px-3 sm:px-4">
          <div className="flex items-center justify-center flex-nowrap py-2 mx-auto">
            {standards.map((item, index) => {
              // Z-Index sequence: 10, 20, 30, 40 from left to right as in reference image
              const zIndex = (index + 1) * 10;
              // Negative overlap margin matching reference (approx 9-10% of circle diameter)
              const marginClass =
                index === 0
                  ? "ml-0"
                  : "-ml-5 sm:-ml-6 md:-ml-7 lg:-ml-8";

              return (
                <div
                  key={item.id}
                  style={{ zIndex }}
                  className={`standard-circle-item group flex-shrink-0 cursor-default select-none rounded-full ${marginClass} w-[240px] sm:w-[255px] md:w-[270px] lg:w-[285px] aspect-square bg-[#131417] border-[5px] border-[#050810] shadow-[0_20px_45px_rgba(0,0,0,0.85)] p-5 sm:p-6 md:p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:scale-105 hover:z-50 hover:border-[#10b981]/50 hover:shadow-emerald-950/30`}
                >
                  {/* Green Rosette Badge Icon matching reference */}
                  <div className="mb-3 sm:mb-3.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-7 h-7 sm:w-8 sm:h-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                        fill="#10b981"
                      />
                      <path
                        d="m8.8 12.2 2.2 2.3 4.4-4.5"
                        stroke="#050810"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-white tracking-tight leading-snug mb-2 font-sans">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11.5px] sm:text-[12px] md:text-[12.5px] text-[#9ca3af] leading-[1.55] max-w-[180px] sm:max-w-[190px] font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
