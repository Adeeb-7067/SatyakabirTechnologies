"use client";

import React from "react";
import Image from "next/image";

export default function ResponsiveShowcaseSection() {
  return (
    <section
      id="responsive-showcase"
      className="w-full bg-white relative overflow-hidden select-none py-6 sm:py-8 md:py-10 lg:py-12"
    >
      {/* Subtle angled watermark typography spanning across wide screens matching reference */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none flex items-center justify-center opacity-[0.035]"
        aria-hidden="true"
      >
        <div className="w-[180vw] flex flex-col gap-8 sm:gap-12 md:gap-14 rotate-[-28deg] transform-gpu">
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

      {/* Main Centered Showcase Graphic with perfected padding & balanced margins */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center">
        <div className="relative w-full max-w-[880px] sm:max-w-[960px] md:max-w-[1020px] lg:max-w-[1100px] aspect-[1024/890]">
          <Image
            src="/images/responsive-showcase-perfect.jpg"
            alt="Businesses with responsive websites see a 20% higher conversion rate."
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1100px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
