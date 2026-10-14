"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ContactCtaSection() {
  return (
    <section
      id="contact-cta"
      className="w-full bg-[#050810] py-14 sm:py-18 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-white select-none overflow-hidden"
    >
      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* 2x2 Checkerboard Grid matching reference exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          
          {/* Top-Left: Blue Action Card (Start a Project) */}
          <div className="rounded-2xl sm:rounded-[22px] bg-[#1d52e8] p-7 sm:p-9 md:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[290px] shadow-[0_20px_48px_rgba(29,82,232,0.35)] border border-blue-400/30 transition-transform duration-300 hover:-translate-y-0.5">
            <div>
              <p className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-blue-100/90 uppercase block mb-2 sm:mb-2.5">
                DIRECT ENGINEERING INTAKE
              </p>
              <h3 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-white tracking-[-0.02em] font-[family-name:var(--font-space-grotesk)] mb-3 leading-tight">
                Start a Project
              </h3>
              <p className="text-blue-100/85 text-[12.5px] sm:text-[13.5px] leading-[1.62] max-w-[390px] font-normal">
                Bring your enterprise vision to life with our 100+ full-time in-house software architects in Bhopal IT Park.
              </p>
            </div>

            <div className="pt-6 sm:pt-8">
              <Link
                href="#contact"
                className="rounded-full bg-white text-slate-900 font-bold text-[12.5px] sm:text-[13px] px-7 py-3 shadow-md hover:bg-slate-100 transition-all duration-200 active:scale-95 inline-flex items-center justify-center focus:outline-none"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          {/* Top-Right: Photo Card (Team Strategy Boardroom) */}
          <div className="relative rounded-2xl sm:rounded-[22px] overflow-hidden min-h-[260px] sm:min-h-[290px] border border-slate-800/60 shadow-lg group">
            <Image
              src="/images/cta-boardroom-hq.jpg"
              alt="Engineering team strategy session at Satya Kabir Technologies"
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom-Left: Photo Card (Executive Handshake Partnership) */}
          <div className="relative rounded-2xl sm:rounded-[22px] overflow-hidden min-h-[260px] sm:min-h-[290px] border border-slate-800/60 shadow-lg group">
            <Image
              src="/images/cta-handshake-hq.jpg"
              alt="Executive partnership and strategic collaboration"
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom-Right: Dark Slate Action Card (Let's Connect) */}
          <div className="rounded-2xl sm:rounded-[22px] bg-[#131b2e] p-7 sm:p-9 md:p-10 flex flex-col justify-between min-h-[260px] sm:min-h-[290px] shadow-[0_20px_48px_rgba(0,0,0,0.5)] border border-[#212d4a]/85 transition-transform duration-300 hover:-translate-y-0.5">
            <div>
              <p className="font-mono text-[10.5px] sm:text-[11px] font-bold tracking-[0.24em] text-sky-400/90 uppercase block mb-2 sm:mb-2.5">
                INTERACTIVE DESIGN ARCHIVES
              </p>
              <h3 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-white tracking-[-0.02em] font-[family-name:var(--font-space-grotesk)] mb-3 leading-tight">
                Let&apos;s Connect
              </h3>
              <p className="text-[#8e9bb0] text-[12.5px] sm:text-[13.5px] leading-[1.62] max-w-[390px] font-normal">
                View our visual archive of shipped craft, design tokens, and dark-mode enterprise operational dashboards.
              </p>
            </div>

            <div className="pt-6 sm:pt-8">
              <Link
                href="#contact"
                className="rounded-full border border-slate-600/70 hover:border-slate-400 bg-slate-800/40 hover:bg-slate-800 text-white font-medium text-[12.5px] sm:text-[13px] px-7 py-3 transition-all duration-200 active:scale-95 inline-flex items-center justify-center focus:outline-none"
              >
                Book Strategic call
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
