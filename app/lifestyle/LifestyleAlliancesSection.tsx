"use client";

import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LifestyleAlliancesSection() {
  const [activeIndex, setActiveIndex] = useState(1); // AI Ecosystem is active flagship

  return (
    <section className="relative w-full bg-[#050810] py-16 sm:py-20 md:py-28 overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row with Pill, Title, Subtitle and Navigation Arrows */}
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            {/* Section Tag */}
            <div className="inline-block mb-3">
              <span className="inline-flex items-center bg-white text-zinc-950 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md select-none">
                SECTION 04 // ALLIANCES
              </span>
            </div>

            {/* Main Heading in distinctive dark slate blue matching Figma */}
            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold tracking-tight text-[#1e2a44] mb-2 font-sans">
              Partners
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-md">
              Cloud, AI, and ecosystem alliances powering enterprise execution.
            </p>
          </div>

          {/* Top Right Navigation Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 mb-1">
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === 0 ? 2 : prev - 1))}
              aria-label="Previous partner"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-zinc-950 stroke-[2.5]" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === 2 ? 0 : prev + 1))}
              aria-label="Next partner"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white flex items-center justify-center shadow-md shadow-blue-600/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 3-Card Carousel Container with Overlapping Center Flagship Card */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 my-4">
          {/* Card 1: Cloud Infrastructure (Left Card) */}
          <div
            onClick={() => setActiveIndex(0)}
            className={`w-full lg:w-[36%] rounded-2xl sm:rounded-3xl bg-[#0c101c] border border-zinc-700/60 p-6 sm:p-7 flex flex-col justify-between min-h-[290px] sm:min-h-[310px] transition-all duration-500 cursor-pointer ${
              activeIndex === 0
                ? "z-30 lg:scale-[1.03] border-blue-500/70 shadow-2xl shadow-blue-950/60 bg-[#111827]"
                : "z-10 lg:-mr-5 opacity-90 hover:opacity-100"
            }`}
          >
            {/* Top Icon: Crisp White/Cream Box with Orange AWS Text */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#fff8f2] flex items-center justify-center font-extrabold text-[#ea580c] text-xs sm:text-[13px] tracking-wider select-none shadow-sm mb-4">
              AWS
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 font-sans">
                Cloud Infrastructure
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans mb-4">
                AWS, GCP, and Azure partnerships for elastic enterprise scaling, multi-region ECS/EKS
                orchestration, and 99.99% uptime guarantees.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-800/90 my-3.5" />

            {/* Footer */}
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase select-none">
              <span className="text-zinc-500">ADVANCED TIER</span>
              <span className="text-[#10b981] font-bold">CERTIFIED</span>
            </div>
          </div>

          {/* Card 2: AI Ecosystem (Center Flagship Elevated Card) */}
          <div
            onClick={() => setActiveIndex(1)}
            className={`w-full lg:w-[38%] rounded-2xl sm:rounded-3xl bg-[#111827] border border-zinc-700/70 p-6 sm:p-8 flex flex-col justify-between min-h-[325px] sm:min-h-[350px] shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-all duration-500 cursor-pointer ${
              activeIndex === 1
                ? "z-30 lg:scale-[1.04] border-zinc-600 shadow-[0_25px_60px_rgba(0,0,0,0.98)]"
                : "z-20 opacity-95 hover:opacity-100"
            }`}
          >
            {/* Top Row: AI Navy Box + FLAGSHIP TIER Pill */}
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#182338] border border-[#233550] flex items-center justify-center font-extrabold text-[#38bdf8] text-xs sm:text-sm select-none shadow-sm">
                AI
              </div>
              <span className="bg-[#2563eb] text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md shadow-blue-600/30 select-none">
                FLAGSHIP TIER
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 font-sans">
                AI Ecosystem
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans mb-4">
                OpenAI, LangChain, and PyTorch ML frameworks integrated for intelligent automation,
                custom agentic workflows, and domain RAG pipelines.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-800/90 my-3.5" />

            {/* Footer */}
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase select-none">
              <span className="text-zinc-400">OPENAI • ANTHROPIC • vLLM</span>
              <span className="text-[#3b82f6] font-bold">IN PRODUCTION</span>
            </div>
          </div>

          {/* Card 3: Database & Comms (Right Card) */}
          <div
            onClick={() => setActiveIndex(2)}
            className={`w-full lg:w-[36%] rounded-2xl sm:rounded-3xl bg-[#0c101c] border border-zinc-700/60 p-6 sm:p-7 flex flex-col justify-between min-h-[290px] sm:min-h-[310px] transition-all duration-500 cursor-pointer ${
              activeIndex === 2
                ? "z-30 lg:scale-[1.03] border-blue-500/70 shadow-2xl shadow-blue-950/60 bg-[#111827]"
                : "z-10 lg:-ml-5 opacity-90 hover:opacity-100"
            }`}
          >
            {/* Top Icon: Crisp White Box with Blue DB Text */}
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#eff6ff] flex items-center justify-center font-extrabold text-[#2563eb] text-xs sm:text-[13px] tracking-wider select-none shadow-sm mb-4">
              DB
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 font-sans">
                Database & Comms
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans mb-4">
                Twilio, PostgreSQL, Redis, Kafka, and MongoDB strategic alliances ensuring
                sub-millisecond query caching and reliable communications.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-800/90 my-3.5" />

            {/* Footer */}
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase select-none">
              <span className="text-zinc-500">HIGH THROUGHPUT</span>
              <span className="text-[#10b981] font-bold">VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Bottom Pagination Dots Matching Figma (Blue Pill + Two Pure White Dots) */}
        <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8">
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            aria-label="Slide 1"
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === 0
                ? "w-7 h-1.5 bg-[#2563eb]"
                : "w-1.5 h-1.5 bg-white hover:bg-zinc-300"
            }`}
          />
          <button
            type="button"
            onClick={() => setActiveIndex(1)}
            aria-label="Slide 2"
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === 1
                ? "w-7 h-1.5 bg-[#2563eb]"
                : "w-1.5 h-1.5 bg-white hover:bg-zinc-300"
            }`}
          />
          <button
            type="button"
            onClick={() => setActiveIndex(2)}
            aria-label="Slide 3"
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === 2
                ? "w-7 h-1.5 bg-[#2563eb]"
                : "w-1.5 h-1.5 bg-white hover:bg-zinc-300"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
