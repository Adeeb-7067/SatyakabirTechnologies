"use client";

import React from "react";
import Image from "next/image";

type MarqueeItem =
  | { type: "text"; label: string }
  | { type: "image"; src: string; alt: string; widthClass?: string };

// Row 1 items matching the reference:
// Branding, Brand Strategy, Backend Development, Frontend Development, [Photo Pill] ...
const row1Items: MarqueeItem[] = [
  { type: "text", label: "Branding" },
  { type: "text", label: "Brand Strategy" },
  { type: "text", label: "Backend Development" },
  { type: "text", label: "Frontend Development" },
  {
    type: "image",
    src: "/images/marquee-designer-crop.jpg",
    alt: "Satya Kabir Tech Specialist",
    widthClass: "w-[125px] sm:w-[145px] md:w-[160px]",
  },
  { type: "text", label: "Cloud Architecture" },
  { type: "text", label: "Mobile Apps" },
  { type: "text", label: "DevOps & CI/CD" },
];

// Row 2 items matching the reference:
// UI/UX, Website, [Eye Crop Pill: Man], Product Design, SaaS, UX Research ...
const row2Items: MarqueeItem[] = [
  { type: "text", label: "UI/UX" },
  { type: "text", label: "Website" },
  {
    type: "image",
    src: "/images/marquee-man-crop.jpg",
    alt: "Design Leadership Gaze",
    widthClass: "w-[130px] sm:w-[150px] md:w-[165px]",
  },
  { type: "text", label: "Product Design" },
  { type: "text", label: "SaaS" },
  { type: "text", label: "UX Research" },
  { type: "text", label: "Design Systems" },
  { type: "text", label: "Rapid Prototyping" },
];

// Row 3 items matching the reference:
// [Eye Crop Pill: Woman], Web Application, E-Commerce, Interaction Design, Animation ...
const row3Items: MarqueeItem[] = [
  {
    type: "image",
    src: "/images/marquee-woman-crop.jpg",
    alt: "Creative Visual Specialist",
    widthClass: "w-[130px] sm:w-[150px] md:w-[165px]",
  },
  { type: "text", label: "Web Application" },
  { type: "text", label: "E-Commerce" },
  { type: "text", label: "Interaction Design" },
  { type: "text", label: "Animation" },
  { type: "text", label: "Motion Graphics" },
  { type: "text", label: "Digital Experience" },
  { type: "text", label: "Micro-Interactions" },
];

function PillItem({ item }: { item: MarqueeItem }) {
  if (item.type === "image") {
    return (
      <div
        className={`relative ${
          item.widthClass || "w-[130px] sm:w-[150px] md:w-[165px]"
        } h-[46px] sm:h-[50px] md:h-[54px] rounded-full overflow-hidden border border-white/40 shadow-lg shadow-black/40 hover:scale-105 transition-all duration-300 cursor-pointer flex-shrink-0 bg-neutral-900 ring-1 ring-white/20`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 150px, 180px"
          className="object-cover object-center select-none pointer-events-none"
        />
      </div>
    );
  }

  return (
    <span className="inline-flex items-center justify-center bg-white text-zinc-950 font-medium text-[15px] sm:text-[16px] md:text-[17px] tracking-tight px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full shadow-lg shadow-black/30 hover:scale-105 hover:bg-zinc-100 hover:shadow-xl transition-all duration-300 cursor-pointer select-none whitespace-nowrap flex-shrink-0 border border-white/60">
      {item.label}
    </span>
  );
}

interface MarqueeRowProps {
  items: MarqueeItem[];
  animationClass: string;
}

function MarqueeRow({ items, animationClass }: MarqueeRowProps) {
  return (
    <div className="overflow-hidden relative w-full py-1 sm:py-1.5">
      <div className={`${animationClass} flex items-center`}>
        {/* Track 1 */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5 flex-shrink-0">
          {items.map((item, idx) => (
            <PillItem key={`t1-${idx}`} item={item} />
          ))}
        </div>
        {/* Track 2 (seamless infinite duplicate) */}
        <div
          className="flex items-center gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5 flex-shrink-0"
          aria-hidden="true"
        >
          {items.map((item, idx) => (
            <PillItem key={`t2-${idx}`} item={item} />
          ))}
        </div>
        {/* Track 3 (safeguard for ultra-wide 4k screens) */}
        <div
          className="flex items-center gap-3 sm:gap-4 md:gap-5 pr-3 sm:pr-4 md:pr-5 flex-shrink-0 hidden 2xl:flex"
          aria-hidden="true"
        >
          {items.map((item, idx) => (
            <PillItem key={`t3-${idx}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LifestyleBrandingMarqueeSection() {
  return (
    <section className="relative w-full bg-[#060913] py-20 sm:py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      {/* Side gradient fade masks for smooth seamless entrance & exit */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#060913] via-[#060913]/90 to-transparent z-20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#060913] via-[#060913]/90 to-transparent z-20"
        aria-hidden="true"
      />

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center mb-10 sm:mb-14 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal tracking-tight text-white font-sans">
          Our Branding
        </h2>
      </div>

      {/* Marquee Rows Container */}
      <div className="relative z-10 flex flex-col gap-3.5 sm:gap-4 md:gap-5 w-full">
        {/* Row 1: Leftward scroll */}
        <MarqueeRow items={row1Items} animationClass="animate-marquee-left" />

        {/* Row 2: Rightward scroll (opposite direction) */}
        <MarqueeRow items={row2Items} animationClass="animate-marquee-right" />

        {/* Row 3: Leftward scroll (slightly adjusted speed) */}
        <MarqueeRow items={row3Items} animationClass="animate-marquee-left-fast" />
      </div>
    </section>
  );
}
