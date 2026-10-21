"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TabContent {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
}

const tabsData: TabContent[] = [
  {
    id: "our-story",
    label: "Our Story",
    title: "Our Story",
    paragraphs: [
      "Satya Kabir Technologies was founded with a singular conviction: enterprises need elite software craft without agency overhead or outsourced junior benches.",
      "Starting from our principal craft center in Bhopal, we built an engineering-first culture focused on high-concurrency systems, air-gapped security, and sovereign code delivery.",
      "Over the years, our pods have grown to serve forward-thinking brands across North America, Europe, MENA, and APAC, shipping battle-tested platforms that power millions of daily transactions.",
      "Today, we operate with globally distributed engineering hubs, retaining 100% in-house talent and guaranteeing unconditional IP transfer to every client we partner with.",
    ],
  },
  {
    id: "mission",
    label: "Mission",
    title: "Our Mission",
    paragraphs: [
      "Our mission is to bridge the divide between ambitious enterprise vision and uncompromising technical execution through dedicated in-house engineering pods.",
      "We believe that client codebases must belong 100% to the client. We eliminate vendor lock-in, enforce strict zero-monetization policies, and deliver clean, audited architectures.",
      "Every project is engineered with milestone-bound deliverables, deterministic safeguards, and comprehensive bug warranties that stand up to regulatory scrutiny.",
      "We empower businesses to own their technology assets fully from day one, backed by bilateral escrow and transparent Git branch custody.",
    ],
  },
  {
    id: "vision",
    label: "Vision",
    title: "Our Vision",
    paragraphs: [
      "To be the world’s most trusted in-house engineering partner for mission-critical software, enterprise cloud, and sovereign AI platforms.",
      "We envision an industry free from opaque broker agencies, shadow contractor benches, and proprietary vendor retention traps.",
      "By championing principal-led engineering and air-gapped development pods, we set the global benchmark for code sovereignty, data privacy, and architectural resilience.",
      "Our goal is to continually push the boundaries of what is possible in distributed computing, edge networking, and autonomous business workflows.",
    ],
  },
  {
    id: "our-value",
    label: "Our Value",
    title: "Our Core Values",
    paragraphs: [
      "Architectural Integrity: We write clean, verifiable, and scalable code that survives executive audits and high-concurrency stress without degradation.",
      "Zero Intermediaries: Clients collaborate directly with senior staff engineers and hands-on architects via Slack and GitHub — never through layers of non-technical account managers.",
      "Unconditional IP Sovereignty: Every patent right, Git commit, configuration file, and cloud secret is unconditionally transferred to your organization upon milestone release.",
      "Ethical Technology: Absolute ban on training external LLMs with client data, synthetic payloads, or behavioral analytics under legally binding indemnities.",
    ],
  },
  {
    id: "our-support",
    label: "Our Support",
    title: "Our Support & SLA",
    paragraphs: [
      "We provide round-the-clock incident escalation with rapid response protocols across overlapping US, EMEA, and APAC time zones.",
      "Every production release is protected by our standard 90-day defect warranty, ensuring any deviations from acceptance criteria are resolved swiftly at zero cost.",
      "Our continuous support models include proactive vulnerability scanning, automated CI/CD pipeline maintenance, and cloud infrastructure optimization.",
      "With dedicated bilateral escrow support and active disaster-recovery failover, your mission-critical operations remain resilient 24/7/365.",
    ],
  },
];

const marqueeItems = [
  "AI & Autonomous Systems",
  "High-Concurrency Mobile Apps",
  "Cloud Native & Kubernetes",
  "Enterprise Multi-Branch ERP",
  "100% Code Ownership & Git Hardening",
];

export default function AboutKeepReadingSection() {
  const [activeTab, setActiveTab] = useState<string>("our-story");
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentTab = tabsData.find((t) => t.id === activeTab) || tabsData[0];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );
    }
    setActiveTab(tabId);
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".kr-fade-in",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
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
      className="relative w-full bg-[#0b0f17] text-white pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden selection:bg-blue-600 selection:text-white border-t border-[#161d2b]/60"
    >
      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER (CENTERED)                                 */}
        {/* ========================================================= */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="kr-fade-in text-[10.5px] font-bold tracking-[0.2em] uppercase text-[#3b82f6] block mb-2">
            MORE ABOUT US
          </span>
          <h2 className="kr-fade-in text-[26px] sm:text-[32px] md:text-[36px] font-bold text-white tracking-tight">
            Keep Reading
          </h2>
        </div>

        {/* ========================================================= */}
        {/* PILL NAVIGATION TABS (CENTERED)                           */}
        {/* ========================================================= */}
        <div className="kr-fade-in flex items-center justify-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 p-1 rounded-full bg-[#111624] border border-[#1d273a] shadow-inner overflow-x-auto max-w-full no-scrollbar">
            {tabsData.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[12px] font-medium tracking-wide transition-all duration-300 cursor-pointer whitespace-nowrap focus:outline-none ${
                    isActive
                      ? "bg-[#2563eb] text-white font-semibold shadow-[0_4px_14px_rgba(37,99,235,0.4)]"
                      : "text-[#8a96a8] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* MAIN FEATURE CARD (GLOBE ON LEFT, TEXT ON RIGHT)          */}
        {/* ========================================================= */}
        <div className="kr-fade-in bg-[#121520] border border-[#1e2638] rounded-[24px] sm:rounded-[30px] p-6 sm:p-9 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 3D Globe Asset */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-[210px] sm:w-[260px] lg:w-[290px] aspect-[555/495] transition-transform duration-500 hover:scale-105">
                <Image
                  src="/images/about-globe-3d.png"
                  alt="Global Engineering Pods"
                  fill
                  sizes="(max-width: 768px) 240px, 300px"
                  className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]"
                  priority
                />
              </div>
            </div>

            {/* Right Column: Tab Content */}
            <div
              ref={contentRef}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h3 className="text-[20px] sm:text-[23px] font-bold text-white tracking-tight mb-4">
                {currentTab.title}
              </h3>

              <div className="space-y-3 sm:space-y-3.5 text-[#8a95a6] text-[12.5px] sm:text-[13px] leading-[1.65]">
                {currentTab.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM TICKER / PILL BAR (MATCHING SCREENSHOT)            */}
        {/* ========================================================= */}
        <div className="kr-fade-in mt-8 sm:mt-10 pt-4 border-t border-[#182133] flex items-center justify-center gap-5 sm:gap-7 flex-wrap">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-[#717b8c] font-medium tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6] flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
