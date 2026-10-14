"use client";

import React from "react";
import Image from "next/image";

export default function ResponsiveShowcaseSection() {
  return (
    <section
      id="responsive-showcase"
      className="w-full bg-white relative overflow-hidden select-none py-8 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Subtle angled watermark typography spanning across wide screens matching reference */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none flex items-center justify-center opacity-[0.032]"
        aria-hidden="true"
      >
        <div className="w-[200vw] flex flex-col gap-10 sm:gap-14 md:gap-16 rotate-[-28deg] transform-gpu">
          <div className="flex gap-12 whitespace-nowrap text-[60px] sm:text-[84px] md:text-[110px] font-black tracking-tighter text-black uppercase">
            <span>Businesses with responsive websites</span>
            <span>20% higher</span>
            <span>conversion rate</span>
          </div>
          <div className="flex gap-12 whitespace-nowrap text-[60px] sm:text-[84px] md:text-[110px] font-black tracking-tighter text-black uppercase -ml-40">
            <span>20% HIGHER</span>
            <span>CONVERSION RATE</span>
            <span>RESPONSIVE ARCHITECTURE</span>
          </div>
          <div className="flex gap-12 whitespace-nowrap text-[60px] sm:text-[84px] md:text-[110px] font-black tracking-tighter text-black uppercase -ml-16">
            <span>Businesses with responsive websites see a 20% higher</span>
            <span>conversion rate</span>
          </div>
        </div>
      </div>

      {/* Main Centered Showcase Graphic matching reference UI exactly (No external components) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
        <div className="relative w-full max-w-[820px] sm:max-w-[880px] md:max-w-[940px] lg:max-w-[1000px] aspect-[1024/920]">
          <Image
            src="/images/responsive-showcase.jpg"
            alt="Businesses with responsive websites see a 20% higher conversion rate."
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1000px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
