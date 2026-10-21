"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HubCard {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  isPrimary?: boolean;
  offsetClass: string; // Subtle wave offset seen in reference image
}

const hubCards: HubCard[] = [
  {
    id: "americas",
    badge: "AMERICAS",
    title: "North America",
    subtitle: "New York Desk",
    image: "/images/hub_photo_1.png",
    offsetClass: "lg:translate-y-0",
  },
  {
    id: "emea",
    badge: "EMEA",
    title: "Europe",
    subtitle: "London Corridor",
    image: "/images/hub_photo_2.png",
    offsetClass: "lg:translate-y-5 xl:translate-y-6",
  },
  {
    id: "bhopal",
    badge: "PRIMARY HQ",
    title: "Bhopal IT Park",
    subtitle: "Principal Craft Center",
    image: "/images/hub_photo_3.png",
    isPrimary: true,
    offsetClass: "lg:translate-y-0",
  },
  {
    id: "mena",
    badge: "MENA",
    title: "Middle East",
    subtitle: "Dubai Client Desk",
    image: "/images/hub_photo_4.png",
    offsetClass: "lg:translate-y-5 xl:translate-y-6",
  },
  {
    id: "apac",
    badge: "APAC EDGE",
    title: "Singapore",
    subtitle: "High-Speed Edge Node",
    image: "/images/hub_photo_5.png",
    offsetClass: "lg:translate-y-0",
  },
];

export default function AboutLocationsGallerySection() {
  const [selectedId, setSelectedId] = useState<string>("bhopal");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCardId = hoveredId || selectedId;

  useGSAP(
    () => {
      gsap.fromTo(
        ".hub-card-item",
        { y: 25, opacity: 0 },
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
      id="locations-gallery"
      ref={containerRef}
      className="relative w-full bg-[#0b0f17] text-white pt-4 sm:pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden select-none"
    >
      {/* Background Depth Split Line matching the screenshot */}
      <div className="absolute top-[48%] left-0 right-0 h-[1px] bg-[#1a2336]/60 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[48%] bg-[#10141d]/40 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        {/* ========================================================= */}
        {/* 5 CARDS ROW: Responsive Grid on Desktop, Smooth on Mobile  */}
        {/* ========================================================= */}
        <div
          className="flex lg:grid lg:grid-cols-5 items-center justify-start gap-3 sm:gap-4 lg:gap-3.5 xl:gap-4.5 overflow-x-auto lg:overflow-visible pb-4 pt-2 px-1 no-scrollbar scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {hubCards.map((card) => {
            const isActive = activeCardId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setSelectedId(card.id)}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`hub-card-item relative flex-shrink-0 w-[220px] sm:w-[235px] lg:w-auto rounded-[18px] overflow-hidden cursor-pointer transition-all duration-300 ease-out group snap-center ${
                  card.offsetClass
                } ${
                  isActive
                    ? "border-2 border-white shadow-[0_16px_36px_rgba(0,0,0,0.8),0_0_24px_rgba(37,99,235,0.25)] -translate-y-1.5 z-20"
                    : "border border-[#1b2334] bg-[#111622] hover:border-slate-500 opacity-90 hover:opacity-100 z-10"
                }`}
              >
                {/* ---------------- CARD IMAGE AREA ---------------- */}
                <div className="relative h-[165px] sm:h-[175px] w-full overflow-hidden bg-[#0d121c]">
                  <Image
                    src={card.image}
                    alt={`${card.title} - ${card.subtitle}`}
                    fill
                    sizes="(max-width: 1024px) 240px, 20vw"
                    className="object-cover transition-transform duration-600 ease-out group-hover:scale-106"
                    priority
                  />

                  {/* Bottom Vignette Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#111622] via-[#111622]/30 to-transparent pointer-events-none" />

                  {/* Pulsing Target Overlay on Hover/Active */}
                  {isActive && (
                    <div className="absolute inset-0 bg-blue-500/[0.04] pointer-events-none animate-pulse" />
                  )}
                </div>

                {/* ---------------- CARD TEXT FOOTER ---------------- */}
                <div className="p-3.5 sm:p-4 pt-2.5 bg-[#111622] flex flex-col justify-end">
                  <h3
                    className={`text-[14px] sm:text-[14.5px] font-bold tracking-tight transition-colors duration-200 ${
                      isActive ? "text-[#3b82f6]" : "text-white"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#717b8c] mt-0.5 font-normal leading-tight">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
