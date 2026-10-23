"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CSRCardItem {
  id: number;
  tag: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}

const csrCards: CSRCardItem[] = [
  {
    id: 1,
    tag: "COMMUNITY",
    title: "Code for Cause",
    description:
      "Dedicated engineering sprints and digital inventory platforms built pro-bono for healthcare & education NGOs.",
    src: "/images/csr-card-1.png",
    alt: "Satya Kabir Community Code for Cause Team",
  },
  {
    id: 2,
    tag: "ENVIRONMENT",
    title: "Green Cloud Initiatives",
    description:
      "Carbon-neutral hosting partnerships and compute optimization lowering kilowatt footprints across server regions.",
    src: "/images/csr-card-2.png",
    alt: "Satya Kabir Green Cloud Optimization Planning",
  },
  {
    id: 3,
    tag: "EDUCATION",
    title: "Tech Education",
    description:
      "Upskilling Tier-2/3 collegiate engineering talent in Bhopal with real-world Rust, Go, Python, and cloud apprenticeships.",
    src: "/images/csr-card-3.png",
    alt: "Satya Kabir Tech Education and Collegiate Mentorship",
  },
];

export default function LifestyleCSRSection() {
  return (
    <section className="relative w-full bg-[#050810] py-20 sm:py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-14">
          {/* Top Pill Badge */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="inline-flex items-center bg-white text-zinc-950 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md select-none">
              SECTION 06 // CIVIC IMPACT
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 font-sans">
            Corporate Social Responsibility
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-400 text-xs sm:text-sm font-sans max-w-xl mx-auto leading-relaxed">
            Technology with civic responsibility, regional education, and green computing.
          </p>
        </div>

        {/* 3 CSR Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12 sm:mb-14">
          {csrCards.map((card) => (
            <div
              key={card.title}
              className="relative h-[380px] sm:h-[400px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/60 group cursor-pointer transition-all duration-300 hover:border-zinc-500/80 bg-[#0c101c]"
            >
              {/* Background Photo */}
              <Image
                src={card.src}
                alt={card.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
              />

              {/* Dark Gradient Overlay for Crisp Text Contrast */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#060913] from-35% via-[#060913]/95 via-55% to-transparent"
                aria-hidden="true"
              />

              {/* Bottom Text Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end h-full text-left">
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-zinc-400 mb-1 select-none">
                  {card.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 font-sans">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-[#0c1424] hover:bg-[#131f38] text-white text-xs sm:text-[13px] font-semibold tracking-wider uppercase px-7 sm:px-8 py-3.5 rounded-full border border-zinc-700/60 shadow-lg shadow-black/40 transition-all duration-300 hover:scale-105 hover:border-zinc-500"
          >
            <span>CONNECT WITH OUR Experts</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
