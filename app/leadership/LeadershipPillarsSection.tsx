"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PillarItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const pillars: PillarItem[] = [
  {
    id: "enterprise-architecture",
    title: "Enterprise Architecture",
    description:
      "Designing modular, microservices-based CRM and ERP systems engineered for heavy-duty data processing and real-time sync.",
    image: "/images/leadership-enterprise-architecture.jpg",
    alt: "Enterprise engineering team celebrating successful system architecture deployment",
  },
  {
    id: "advanced-integrations",
    title: "Advanced Integrations",
    description:
      "Seamlessly integrating IoT devices, AI matching algorithms, and WebRTC protocols to keep your business ahead of the curve.",
    image: "/images/cta-handshake-hq.jpg",
    alt: "Executive leaders shaking hands over advanced technology integration",
  },
];

export default function LeadershipPillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".pillars-header-el",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".pillar-card-box",
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
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full bg-[#07090f] text-white pt-14 sm:pt-18 md:pt-22 pb-24 sm:pb-28 md:pb-32 overflow-hidden font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="pillars-header-el inline-block font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-[#8fa0b5] uppercase mb-2.5 sm:mb-3">
            Lorem ipsum has been
          </span>
          <h2 className="pillars-header-el text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-[-0.03em] leading-tight">
            Our Engineering Pillars
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1180px] mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="pillar-card-box group rounded-[22px] sm:rounded-[26px] bg-[#0e111a] border border-white/[0.08] p-4 sm:p-5 hover:border-blue-500/40 transition-all duration-300 shadow-2xl hover:shadow-blue-950/20 flex flex-col justify-between"
            >
              {/* High Quality Artwork Box */}
              <div className="relative w-full aspect-[16/9.5] rounded-[16px] sm:rounded-[18px] overflow-hidden mb-5 sm:mb-6 bg-black">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle top/bottom gradient overlay for rich contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e111a]/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Content */}
              <div className="px-1 sm:px-2 pb-1">
                <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight leading-snug mb-2 font-sans group-hover:text-blue-400 transition-colors duration-200">
                  {pillar.title}
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#94a3b8] leading-[1.65] font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
