"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sprout,
  ArrowRight,
  FileText,
  BadgeCheck,
  Code2,
  ScrollText,
  LifeBuoy,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

export default function AgriCtaSection() {
  return (
    <section
      id="contact-cta"
      className="relative w-full bg-[#020d06] text-white py-14 sm:py-18 lg:py-22 border-t border-emerald-950/40 select-none overflow-hidden"
    >
      {/* Soft atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] rounded-full opacity-20 blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(6, 78, 59, 0.2) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* =====================================================================
            MAIN CALL-TO-ACTION CARD CONTAINER (Exact match with user Figma reference)
        ====================================================================== */}
        <div className="relative w-full rounded-[26px] sm:rounded-[32px] lg:rounded-[36px] border border-emerald-500/25 overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
          {/* Background Image: Sunset Agricultural Field with Tractor & Drone */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/agri-cta-bg.jpg"
              alt="Agricultural Farm Field at Sunset with Tractor and Drone"
              fill
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover object-right sm:object-center"
              priority
            />
            {/* Deep Emerald Gradient Overlay: Solid on left for high-contrast reading, translucent on right */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2, 45, 18, 0.96) 0%, rgba(2, 45, 18, 0.92) 42%, rgba(2, 45, 18, 0.72) 70%, rgba(2, 45, 18, 0.35) 100%)",
              }}
            />
            {/* Additional bottom darkening gradient for badges readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#021c0b]/90 via-transparent to-transparent opacity-80" />
          </div>

          {/* Card Content Grid */}
          <div className="relative z-10 p-5 sm:p-9 md:p-11 lg:p-14 flex flex-col justify-between min-h-[440px] sm:min-h-[480px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* -------------------------------------------------------------
                  LEFT COLUMN: Eyebrow + Headlines + Description + Buttons
              -------------------------------------------------------------- */}
              <div className="lg:col-span-8 flex flex-col text-left">
                {/* Eyebrow Pill */}
                <div className="w-fit bg-[#0c381c]/80 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-[11px] sm:text-[11.5px] font-sans tracking-wide px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 sm:mb-6 shadow-sm">
                  <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Smart Farming, Brighter Tomorrow</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-[30px] sm:text-[40px] md:text-[46px] lg:text-[52px] font-extrabold text-white tracking-[-0.03em] leading-[1.08] font-sans">
                  Have an Agriculture Tech<br className="hidden sm:inline" /> Idea?<br />
                  <span
                    className="font-serif italic font-normal tracking-tight text-white block mt-1"
                    style={{ fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif' }}
                  >
                    Let&apos;s Build It Together.
                  </span>
                </h2>

                {/* Subtitle Description */}
                <p className="text-[13px] sm:text-[14.5px] text-[#b0d4be] leading-[1.62] max-w-[540px] font-normal mt-3.5 sm:mt-4">
                  Get a tailored architecture consultation, scope assessment, and budget blueprint for your agritech venture.
                </p>

                {/* Action Buttons Row */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6 sm:mt-7">
                  {/* Primary CTA Button */}
                  <Link
                    href="/#contact-cta"
                    className="w-full sm:w-auto justify-center bg-[#051f0f] hover:bg-[#093319] text-white border border-emerald-500/35 hover:border-emerald-400 px-6 py-3.5 rounded-full font-medium text-[13px] sm:text-[13.5px] inline-flex items-center gap-2 shadow-lg shadow-black/40 group/btn transition-all duration-300 active:scale-95 cursor-pointer text-center"
                  >
                    <span>Book a Free Consultation</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Secondary Outlined CTA Button */}
                  <Link
                    href="/#contact-cta"
                    className="w-full sm:w-auto justify-center bg-transparent hover:bg-emerald-950/40 text-white border border-[#487158] hover:border-emerald-400 px-6 py-3.5 rounded-full font-medium text-[13px] sm:text-[13.5px] inline-flex items-center gap-2 transition-all duration-300 active:scale-95 cursor-pointer text-center"
                  >
                    <FileText className="w-4 h-4 text-white" />
                    <span>Request a Proposal</span>
                  </Link>
                </div>
              </div>

              {/* -------------------------------------------------------------
                  RIGHT COLUMN: Bhopal IT Park Center Rapid Response Desk Card
              -------------------------------------------------------------- */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end mt-2 lg:mt-0">
                <div className="bg-[#07190f]/95 backdrop-blur-xl border border-emerald-600/30 rounded-[22px] p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-full sm:max-w-[340px] text-left">
                  {/* Header: Headphones Icon + Office Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#09351c] border border-emerald-500/35 flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-inner">
                      <Headphones className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[14.5px] sm:text-[15.5px] font-bold text-white tracking-tight leading-snug">
                        Bhopal IT Park Center
                      </h3>
                      <span className="text-[11px] sm:text-[11.5px] text-[#8fa89b] font-normal leading-tight mt-0.5">
                        Rapid Response Desk
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[12px] sm:text-[12.5px] text-[#9cbca8] leading-[1.55] font-normal mt-4">
                    Speak with our lead Agritech Architect within 24 business hours.
                  </p>

                  {/* Email Link */}
                  <div className="mt-3.5 pt-2">
                    <a
                      href="mailto:agritech@satyakabir.com"
                      className="text-emerald-400 hover:text-emerald-300 font-medium text-[12.5px] sm:text-[13px] inline-flex items-center gap-1 transition-colors group/link"
                    >
                      <span>agritech@satyakabir.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* -----------------------------------------------------------------
                BOTTOM ROW: 4 Trust Badges matching reference screenshot
            ------------------------------------------------------------------ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 pt-4 border-t border-emerald-800/30">
              {/* 1. Agri Domain Experts */}
              <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#8fa89b] font-medium">
                <BadgeCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">Agri Domain Experts</span>
              </div>

              {/* 2. Dedicated Tech Pod */}
              <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#8fa89b] font-medium">
                <div className="text-emerald-400 font-mono text-[13px] font-bold tracking-tighter leading-none flex-shrink-0">&lt; &gt;</div>
                <span className="truncate">Dedicated Tech Pod</span>
              </div>

              {/* 3. Custom IP Ownership */}
              <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#8fa89b] font-medium">
                <ScrollText className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">Custom IP Ownership</span>
              </div>

              {/* 4. Long-Term SLA Support */}
              <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#8fa89b] font-medium">
                <LifeBuoy className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">Long-Term SLA Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
