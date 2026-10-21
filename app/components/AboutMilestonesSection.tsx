"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const milestoneCards = [
  {
    numFirst: "0",
    numSecond: "1",
    tag: "Origins",
    title: "Built on shipping",
    description:
      "Formed around engineers who wanted accountability for outcomes — not anonymous capacity. We stripped out middle managers in favor of hands-on architects.",
    bottomIcon: (
      <svg
        className="w-3.5 h-3.5 text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    bottomLabel: "Outcome-driven architecture",
  },
  {
    numFirst: "0",
    numSecond: "2",
    tag: "Shift",
    title: "AI became a product surface",
    description:
      "Evaluation, governance, and observability so intelligence could ship like any other service — calibrated on enterprise datasets with deterministic safeguards.",
    bottomIcon: (
      <svg
        className="w-3.5 h-3.5 text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    bottomLabel: "LLM & agentic runtimes",
  },
  {
    numFirst: "0",
    numSecond: "3",
    tag: "Today",
    title: "HQ craft, global delivery",
    description:
      "Bhopal gravity with remote-capable pods and engineering standards that travel with every engagement across India, EU, and North American clients.",
    bottomIcon: (
      <svg
        className="w-3.5 h-3.5 text-slate-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    bottomLabel: "Global reach & standards",
  },
];

export default function AboutMilestonesSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".milestone-fade-in",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".milestone-card",
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".milestone-cards-container",
            start: "top 88%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".milestone-stat",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".milestone-stats-row",
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0b0f17] text-white pt-6 sm:pt-8 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-blue-600 selection:text-white border-t border-[#161d2b]/60"
    >
      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* ========================================================= */}
        {/* TOP ROW: OVERVIEW KICKER + EDITORIAL SERIF HEADING & BIO  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start mb-10 sm:mb-12">
          {/* Left Column: OVERVIEW + Editorial Serif Heading */}
          <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
            <span className="milestone-fade-in text-[10.5px] font-bold tracking-[0.2em] uppercase text-[#717b8c] mb-3 block">
              OVERVIEW
            </span>
            <h2 className="milestone-fade-in font-editorial text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] font-medium text-white tracking-[-0.015em] leading-[1.12] font-serif">
              An engineering company, <span className="block">not a staffing bench</span>
            </h2>
          </div>

          {/* Right Column: Mission Statement Paragraph */}
          <div className="lg:col-span-6 pt-1 lg:pt-6 flex justify-start lg:justify-end">
            <p className="milestone-fade-in text-[13.5px] sm:text-[14px] text-[#8691a3] font-normal leading-[1.65] max-w-[520px]">
              Satyakabir Technologies builds AI, cloud, and product platforms
              from Bhopal — principal-led pods that transfer ownership, not
              dependency. We believe software should move businesses forward
              without proprietary lock-ins or opaque agency layers.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* SUBHEADER BAR: MILESTONES + 2019 — Present                */}
        {/* ========================================================= */}
        <div className="milestone-fade-in flex items-center justify-between border-t border-[#182133] pt-4 pb-4 mb-1">
          <div className="flex items-center gap-2">
            <span className="text-[10.5px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-[#697486]">
              MILESTONES · HOW THE COMPANY TOOK SHAPE
            </span>
          </div>
          <span className="text-[11.5px] font-medium text-[#697486] tracking-wider">
            2019 — Present
          </span>
        </div>

        {/* ========================================================= */}
        {/* 3 MILESTONE CARDS                                         */}
        {/* ========================================================= */}
        <div className="milestone-cards-container grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {milestoneCards.map((card, idx) => (
            <div
              key={idx}
              className="milestone-card bg-[#0f1420] border border-[#1b2539] hover:border-blue-500/40 rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between transition-all duration-300 group shadow-md"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="font-editorial text-[22px] sm:text-[24px] font-bold tracking-tight">
                    <span className="text-[#38bdf8]">{card.numFirst}</span>
                    <span className="text-[#fb923c]">{card.numSecond}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#1f283a] border border-[#2d3850]/50 text-[#94a3b8] text-[10.5px] font-medium tracking-wide">
                    {card.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight leading-snug mb-2">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[12px] sm:text-[12.5px] text-[#828e9f] leading-[1.6] mb-4">
                  {card.description}
                </p>
              </div>

              {/* Bottom Badge / Tag */}
              <div className="pt-3 border-t border-[#192233]/70 flex items-center gap-2">
                {card.bottomIcon}
                <span className="text-[11.5px] font-medium text-[#cbd5e1]">
                  {card.bottomLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM METRICS BANNER (20K+ | 132+ | STATEMENT)           */}
        {/* ========================================================= */}
        <div className="milestone-stats-row border-t border-[#182133] pt-8 sm:pt-10 grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Metric 1: 20K+ */}
          <div className="milestone-stat md:col-span-4 flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-[32px] sm:text-[38px] font-bold text-white tracking-tight leading-none mb-1.5 font-sans">
                20K+
              </span>
              <p className="text-[11.5px] sm:text-[12px] text-[#8691a3] max-w-[240px] leading-[1.45]">
                Customer records that have benefited from and utilized our
                services.
              </p>
            </div>
            {/* Vertical Divider */}
            <div className="hidden md:block h-12 w-[1px] bg-[#1a2336] self-center ml-4" />
          </div>

          {/* Metric 2: 132+ */}
          <div className="milestone-stat md:col-span-4 flex items-start justify-between">
            <div className="flex flex-col">
              <span className="text-[32px] sm:text-[38px] font-bold text-white tracking-tight leading-none mb-1.5 font-sans">
                132+
              </span>
              <p className="text-[11.5px] sm:text-[12px] text-[#8691a3] max-w-[240px] leading-[1.45]">
                Companies from various countries have used the feature we
                designed
              </p>
            </div>
            {/* Vertical Divider */}
            <div className="hidden md:block h-12 w-[1px] bg-[#1a2336] self-center ml-4" />
          </div>

          {/* Statement on the right */}
          <div className="milestone-stat md:col-span-4">
            <h4 className="text-[16px] sm:text-[18px] font-bold text-white leading-[1.35] max-w-[320px]">
              We design workflows, deploy AI,{" "}
              <span className="block">integrate data, and make reports</span>
            </h4>
          </div>

        </div>

      </div>
    </section>
  );
}
