"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SectorCard {
  id: string;
  title: string;
  image: string;
  href: string;
  defaultRotation: number;
  defaultY: number;
  defaultZ: number;
  alt: string;
}

const sectors: SectorCard[] = [
  {
    id: "tour-travels",
    title: "Tour & Travels",
    image: "/images/tour-popular-screen-1.png",
    href: "/industries/tour-travels",
    defaultRotation: -8, // tilts up to the right (counter-clockwise)
    defaultY: 18,
    defaultZ: 10,
    alt: "Tour & Travels Mobility App Platform",
  },
  {
    id: "hrm-crm",
    title: "CRM HRM & Automation",
    image: "/images/spec-laptop-showcase.png",
    href: "/industries/hrm-crm",
    defaultRotation: -6, // tilts up to the right (counter-clockwise)
    defaultY: 6,
    defaultZ: 20,
    alt: "Enterprise CRM HRM Automation & Analytics",
  },
  {
    id: "security-manpower",
    title: "Security & man power",
    image: "/images/security-guard-hero.jpg",
    href: "/industries/security-manpower",
    defaultRotation: 6, // tilts down to the right (clockwise)
    defaultY: 0,
    defaultZ: 30, // overlaps card 2 and card 4
    alt: "Security & Workforce Operations Command",
  },
  {
    id: "live-streaming",
    title: "Live streaming",
    image: "/images/live-stream-phone-hero.jpg",
    href: "/industries/live-streaming",
    defaultRotation: 7, // tilts down to the right (clockwise)
    defaultY: 14,
    defaultZ: 15, // sits behind card 3 and behind card 5
    alt: "Live Video Streaming & Social Discovery",
  },
  {
    id: "agriculture",
    title: "Agriculture tech",
    image: "/images/hq-industry-agri.png",
    href: "/industries/agriculture",
    defaultRotation: 0, // completely upright
    defaultY: -6,
    defaultZ: 40, // active by default
    alt: "Smart Agriculture Tech & Precision Farming",
  },
];

export default function AboutIndustriesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Card 5 (index 4 - Agriculture tech) is active by default as shown in the Figma reference
  const [activeIndex, setActiveIndex] = useState<number>(4);

  const selectCard = (index: number) => {
    setActiveIndex(index);
    if (window.innerWidth < 768 && cardRefs.current[index]) {
      cardRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".sector-header-el",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".sector-card-item",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.08,
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
      className="relative z-10 w-full bg-[#050810] text-white pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-28 overflow-hidden font-sans selection:bg-purple-600 selection:text-white"
    >
      {/* Top Header matching reference image */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-10 md:mb-12">
        {/* Kicker: SECTORS */}
        <span className="sector-header-el inline-block font-mono text-[11px] sm:text-[12px] font-semibold tracking-[0.25em] text-[#8fa0b5] uppercase mb-2.5 sm:mb-3">
          SECTORS
        </span>

        {/* Heading: Industries We Serve */}
        <h2 className="sector-header-el text-[24px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-bold text-white tracking-[-0.03em] leading-[1.15]">
          Industries We Serve
        </h2>
      </div>

      {/* Cards Fan Deck Container */}
      <div className="relative max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start md:justify-center overflow-x-auto md:overflow-visible no-scrollbar scroll-smooth py-10 sm:py-14 md:py-16 px-4">
          <div className="flex items-center justify-center flex-nowrap">
            {sectors.map((sector, index) => {
              const isActive = index === activeIndex;

              // Calculate rotation, Y offset, and z-index
              const rotation = isActive ? 0 : sector.defaultRotation;
              const yOffset = isActive ? -12 : sector.defaultY;
              const zIndex = isActive ? 45 : sector.defaultZ;

              // Overlap negative margin: first card has 0 margin, subsequent cards overlap
              const marginClass =
                index === 0
                  ? "ml-0"
                  : "-ml-6 sm:-ml-8 md:-ml-9 lg:-ml-10";

              return (
                <div
                  key={sector.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  onClick={() => selectCard(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                  style={{
                    transform: `rotate(${rotation}deg) translateY(${yOffset}px) scale(${
                      isActive ? 1.05 : 1
                    })`,
                    zIndex: zIndex,
                    transition:
                      "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease",
                  }}
                  className={`sector-card-item flex-shrink-0 cursor-pointer select-none rounded-[22px] ${marginClass} ${
                    isActive
                      ? "border-[2px] border-white bg-[#131620] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.95)]"
                      : "border border-[#222736]/70 bg-[#131620] hover:border-[#3b4356] shadow-xl shadow-black/70 opacity-95 hover:opacity-100"
                  } w-[205px] sm:w-[225px] md:w-[240px] lg:w-[250px] p-2.5 sm:p-3 flex flex-col justify-between`}
                >
                  {/* Card Artwork / Inner Image */}
                  <div className="relative w-full h-[225px] sm:h-[245px] md:h-[265px] lg:h-[275px] rounded-[16px] overflow-hidden bg-[#0a0d14]">
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      sizes="(max-width: 640px) 205px, (max-width: 768px) 225px, 250px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority={isActive}
                    />
                    {/* Subtle inner top glow for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131620]/60 via-transparent to-black/15 pointer-events-none" />
                  </div>

                  {/* Card Bottom: Title & Purple Arrow matching Figma */}
                  <div className="pt-3.5 pb-1 px-1.5 flex items-center justify-between gap-1.5 min-h-[40px]">
                    <h3 className="font-sans text-[13px] sm:text-[13.5px] md:text-[14px] font-bold text-white tracking-tight leading-snug">
                      {sector.title}
                    </h3>

                    {isActive && (
                      <Link
                        href={sector.href}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center justify-center text-[#c084fc] hover:text-white transition-colors flex-shrink-0 ml-1"
                        aria-label={`Explore ${sector.title}`}
                      >
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Indicator dots for tablet & mobile navigation */}
        <div className="flex items-center justify-center gap-2 mt-2 sm:mt-4">
          {sectors.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => selectCard(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex
                  ? "w-7 bg-white"
                  : "w-2 bg-[#2d3748] hover:bg-slate-400"
              }`}
              aria-label={`View ${s.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
