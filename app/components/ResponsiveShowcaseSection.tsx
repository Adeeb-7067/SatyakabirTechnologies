"use client";

import React from "react";
import Image from "next/image";
import { Smartphone, Monitor, Tablet, TrendingUp, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function ResponsiveShowcaseSection() {
  return (
    <section
      id="responsive-showcase"
      className="w-full bg-[#fbfcfd] text-[#0f172a] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-slate-200/80"
    >
      {/* Dynamic Angled Watermark Typography Background matching the reference */}
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
            <span>OMNICHANNEL</span>
          </div>
          <div className="flex gap-12 whitespace-nowrap text-[60px] sm:text-[84px] md:text-[110px] font-black tracking-tighter text-black uppercase -ml-16">
            <span>Businesses with responsive websites see a 20% higher</span>
            <span>conversion rate</span>
          </div>
          <div className="flex gap-12 whitespace-nowrap text-[60px] sm:text-[84px] md:text-[110px] font-black tracking-tighter text-black uppercase -ml-56">
            <span>MOBILE FIRST</span>
            <span>FLUID VIEWPORTS</span>
            <span>HIGH PERFORMANCE</span>
          </div>
        </div>
      </div>

      {/* Main Content Container matching project standard max-w-[1240px] */}
      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Main High-Impact Responsive Showcase Visual Card */}
        <div className="relative w-full max-w-[1080px] mx-auto rounded-2xl sm:rounded-3xl bg-white border border-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.06),_0_1px_3px_rgba(15,23,42,0.03)] overflow-hidden transition-all duration-300 hover:shadow-[0_28px_75px_rgba(15,23,42,0.09)]">
          <div className="relative w-full aspect-[1400/882]">
            <Image
              src="/images/responsive-devices-showcase-hq.png"
              alt="Businesses with responsive websites see a 20% higher conversion rate"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1080px"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Supporting Metric Value Cards below the visual */}
        <div className="mt-8 sm:mt-12 max-w-[1080px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/70 shadow-sm flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-[17px] sm:text-[19px] font-bold text-slate-900 tracking-tight leading-none mb-1 font-[family-name:var(--font-space-grotesk)]">
                +20%
              </p>
              <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 font-medium leading-none">
                Conversion Lift
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/70 shadow-sm flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Smartphone className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-[17px] sm:text-[19px] font-bold text-slate-900 tracking-tight leading-none mb-1 font-[family-name:var(--font-space-grotesk)]">
                100%
              </p>
              <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 font-medium leading-none">
                Fluid Responsive
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/70 shadow-sm flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-[17px] sm:text-[19px] font-bold text-slate-900 tracking-tight leading-none mb-1 font-[family-name:var(--font-space-grotesk)]">
                &lt; 0.8s
              </p>
              <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 font-medium leading-none">
                Load Time
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-sm border border-slate-200/70 shadow-sm flex items-center gap-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-[17px] sm:text-[19px] font-bold text-slate-900 tracking-tight leading-none mb-1 font-[family-name:var(--font-space-grotesk)]">
                Cross-OS
              </p>
              <p className="text-[11.5px] sm:text-[12.5px] text-slate-500 font-medium leading-none">
                Device Parity
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
