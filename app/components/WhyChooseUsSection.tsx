"use client";

import React from "react";
import Image from "next/image";
import { Users, Archive, RotateCcw, Heart, Award, DollarSign } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-[#efefff] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-900 select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-[#64748b] uppercase font-mono block mb-2 sm:mb-2.5">
            ADVANTAGES
          </span>
          <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-[#1d4ed8] tracking-tight leading-[1.12] font-sans">
            Why Choose Us
          </h2>
        </div>

        {/* 3-Column Isometric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-6 items-stretch relative">
          
          {/* Left Column: 3 Feature Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3.5 sm:gap-4 z-10 order-1">
            
            {/* Card 1 (Blue) - Expert Team */}
            <div className="flex-1 bg-[#1d4ed8] text-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_20px_rgba(29,78,216,0.18)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.25)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                <Users className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-white font-sans tracking-tight mb-1">
                Expert Team
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-relaxed font-normal">
                Senior cloud architects and creative digital designers.
              </p>
            </div>

            {/* Card 2 (White) - Scalable Solutions */}
            <div className="flex-1 bg-white text-slate-900 border border-[#c6d3f5] rounded-2xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(29,78,216,0.04)] hover:shadow-[0_8px_24px_rgba(29,78,216,0.08)] hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#eef2ff] text-[#1d4ed8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <Archive className="w-4.5 h-4.5 text-[#1d4ed8]" />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 font-sans tracking-tight mb-1">
                Scalable Solutions
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                Infrastructure constructed to safely handle massive spikes.
              </p>
            </div>

            {/* Card 3 (Blue) - Agile Process */}
            <div className="flex-1 bg-[#1d4ed8] text-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_20px_rgba(29,78,216,0.18)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.25)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                <RotateCcw className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-white font-sans tracking-tight mb-1">
                Agile Process
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-relaxed font-normal">
                Rigorous weekly sprint reviews and constant deployments.
              </p>
            </div>

          </div>

          {/* Center Column: 3D Pillar Sculpture with exact Figma alignment */}
          <div className="md:col-span-2 lg:col-span-4 flex items-end justify-center relative self-stretch min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] order-3 lg:order-2 overflow-visible">
            <Image
              src="/images/why-choose-us-pillars.png"
              alt="Architectural Foundation 3D Pillars"
              width={632}
              height={789}
              className="w-full max-w-[280px] sm:max-w-[330px] lg:max-w-[370px] xl:max-w-[390px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_24px_48px_rgba(29,78,216,0.12)] hover:scale-[1.02] transition-transform duration-500"
              priority
            />
          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3.5 sm:gap-4 z-10 order-2 lg:order-3">
            
            {/* Card 4 (White) - 24/7 Support */}
            <div className="flex-1 bg-white text-slate-900 border border-[#c6d3f5] rounded-2xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(29,78,216,0.04)] hover:shadow-[0_8px_24px_rgba(29,78,216,0.08)] hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#eef2ff] text-[#1d4ed8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <Heart className="w-4.5 h-4.5 text-[#1d4ed8]" />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 font-sans tracking-tight mb-1">
                24/7 Support
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                Live Slack/Discord channel access directly to engineers.
              </p>
            </div>

            {/* Card 5 (Blue) - Proven Results */}
            <div className="flex-1 bg-[#1d4ed8] text-white rounded-2xl p-5 sm:p-6 shadow-[0_8px_20px_rgba(29,78,216,0.18)] hover:shadow-[0_12px_28px_rgba(29,78,216,0.25)] hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 flex items-center justify-center mb-3 backdrop-blur-sm group-hover:scale-105 transition-transform duration-300">
                <Award className="w-4.5 h-4.5 text-white" />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-white font-sans tracking-tight mb-1">
                Proven Results
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-white/80 leading-relaxed font-normal">
                Empirical success data backed by global software metrics.
              </p>
            </div>

            {/* Card 6 (White) - Transparent Pricing */}
            <div className="flex-1 bg-white text-slate-900 border border-[#c6d3f5] rounded-2xl p-5 sm:p-6 shadow-[0_2px_12px_rgba(29,78,216,0.04)] hover:shadow-[0_8px_24px_rgba(29,78,216,0.08)] hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-300 group flex flex-col justify-center">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#eef2ff] text-[#1d4ed8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <DollarSign className="w-4.5 h-4.5 text-[#1d4ed8]" />
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-slate-900 font-sans tracking-tight mb-1">
                Transparent Pricing
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                Clear itemized billing tables. No hidden surprises.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
