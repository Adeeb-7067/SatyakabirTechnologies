"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Activity } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PlatformCard {
  id: string;
  image: string;
  title: string;
  description: string;
  linkText: string;
  aspectClass: string;
  flexClass: string;
}

const platforms: PlatformCard[] = [
  {
    id: "01",
    image: "/images/platform-asset-1.jpg",
    title: "Live Streaming",
    description:
      "Empowering media creators, social entertainment companies, and dating brands .",
    linkText: "Explore Industries",
    aspectClass: "aspect-[507/540]",
    flexClass: "md:flex-[1.34]",
  },
  {
    id: "02",
    image: "/images/platform-asset-2.jpg",
    title: "Live Streaming",
    description:
      "Empowering media creators, social entertainment companies, and dating brands .",
    linkText: "Explore Industries",
    aspectClass: "aspect-[380/540]",
    flexClass: "md:flex-1",
  },
  {
    id: "03",
    image: "/images/platform-asset-3.jpg",
    title: "Live Streaming",
    description:
      "Empowering media creators, social entertainment companies, and dating brands .",
    linkText: "Explore Industries",
    aspectClass: "aspect-[380/540]",
    flexClass: "md:flex-1",
  },
];

export default function PlatformsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);
  const [, setActiveSlide] = useState(0);

  useGSAP(
    () => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 92%",
              once: true,
            },
          }
        );
      }

      gsap.fromTo(
        ".platform-card-wrap",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.12,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 92%",
            once: true,
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleNext = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        setActiveSlide(0);
      } else {
        scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
        setActiveSlide((prev) => (prev + 1) % platforms.length);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#050810] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 relative z-10 text-white overflow-hidden selection:bg-blue-600 selection:text-white"
    >
      {/* Background Architectural Dashed Wave Curve */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-full min-h-[300px]"
          viewBox="0 0 1200 360"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0 35 C 160 70, 320 115, 480 105 C 640 95, 760 65, 920 80 C 1040 95, 1140 125, 1200 135"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Left: Category Tag & Main Headline */}
          <div className="max-w-[620px]">
            <p className="font-[family-name:var(--font-space-grotesk)] text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.24em] text-[#8e98aa] uppercase mb-2.5 sm:mb-3">
              SAAS PRODUCTS
            </p>
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold text-white tracking-[-0.03em] leading-[1.05] font-[family-name:var(--font-space-grotesk)]">
              Ready-Made Platforms
            </h2>
          </div>

          {/* Right: Subtitle Description */}
          <div className="max-w-[340px] md:pb-1">
            <p className="text-[12.5px] sm:text-[13.5px] text-[#8e97a9] leading-[1.62] font-normal">
              Accelerate your market entry with our highly modular, production-hardened cloud software suites.
            </p>
          </div>
        </div>

        {/* Carousel / Cards Track Container */}
        <div className="relative">
          
          {/* Overlapping Left Blue Diamond Navigation Button */}
          <button
            onClick={handleNext}
            aria-label="Next platform"
            className="absolute -left-3 sm:-left-4 md:-left-5 top-[52%] -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#1554ee] hover:bg-[#2563eb] active:scale-95 text-white rotate-45 rounded-[10px] sm:rounded-[12px] flex items-center justify-center shadow-xl shadow-blue-600/50 transition-all duration-300 hover:scale-110 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#050810]"
          >
            <ArrowRight className="-rotate-45 w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          {/* Cards Flex Container (Scrollable on mobile/tablet, proportional row on desktop) */}
          <div
            ref={(el) => {
              (scrollRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
              (cardsTrackRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
            }}
            className="flex flex-row gap-4 sm:gap-5 lg:gap-6 overflow-x-auto md:overflow-visible scrollbar-none snap-x snap-mandatory pt-2 pb-6 px-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {platforms.map((card, idx) => (
              <div
                key={card.id}
                className={`platform-card-wrap group relative min-w-[290px] sm:min-w-[340px] md:min-w-0 ${card.flexClass} ${card.aspectClass} rounded-[22px] sm:rounded-[26px] overflow-hidden border border-white/10 hover:border-blue-500/50 shadow-[0_16px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_24px_50px_rgba(20,60,180,0.25)] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-end snap-center cursor-pointer select-none bg-[#07060b]`}
              >
                {/* Full Fidelity Background Image with Top Mockup */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 520px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                    priority={idx === 0}
                  />

                  {/* Dark Gradient Overlay for text contrast: fades from transparent to deep obsidian black */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#06050a] from-22% via-[#06050a]/92 via-48% to-transparent to-75% pointer-events-none"
                    aria-hidden="true"
                  />
                </div>

                {/* Interactive Top-Right Diagonal Arrow Glass Button */}
                <div className="absolute top-4 right-4 z-20">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md border border-white/25 flex items-center justify-center text-white shadow-md transition-all duration-300 hover:scale-110 active:scale-95 group-hover:bg-white/30"
                    aria-label={`Open ${card.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Content Area: Live Vector Text & Icons */}
                <div className="relative z-20 p-5 sm:p-6 lg:p-7 flex flex-col justify-end text-left mt-auto">
                  {/* Frosted Glass Activity / Pulse Icon */}
                  <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/95 mb-3.5 shadow-sm transition-transform duration-300 group-hover:scale-108">
                    <Activity className="w-4 h-4 text-white" />
                  </div>

                  {/* Title: Space Grotesk */}
                  <h3 className="font-[family-name:var(--font-space-grotesk)] text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white tracking-tight leading-snug mb-2 transition-colors group-hover:text-blue-300">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12px] sm:text-[13px] md:text-[13.5px] text-[#9b9aa6] leading-[1.55] font-normal mb-5 line-clamp-2">
                    {card.description}
                  </p>

                  {/* Footer Link: Explore Industries */}
                  <div className="flex items-center justify-between pt-3.5 border-t border-white/10 group/link">
                    <span className="text-[12px] sm:text-[13px] text-white/90 font-medium tracking-tight group-hover/link:text-white transition-colors">
                      {card.linkText}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
