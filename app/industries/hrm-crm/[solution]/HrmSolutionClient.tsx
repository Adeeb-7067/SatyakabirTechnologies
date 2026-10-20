"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Inbox,
  User,
  Download,
  DollarSign,
  Zap,
} from "lucide-react";
import { HrmSolutionData } from "../solutionsData";
import TiltCard from "@/app/components/ui/TiltCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icon helper for Section 7: High-Velocity Operations
function renderVelocityIcon(iconType: string) {
  switch (iconType) {
    case "lead":
    case "inbox":
      return <Inbox className="w-5 h-5 text-[#38bdf8]" strokeWidth={2.2} />;
    case "conversion":
    case "user":
      return <User className="w-5 h-5 text-[#38bdf8]" strokeWidth={2.2} />;
    case "mobile":
    case "download":
      return <Download className="w-5 h-5 text-[#38bdf8]" strokeWidth={2.2} />;
    case "data":
    case "dollar":
      return <DollarSign className="w-5 h-5 text-[#38bdf8]" strokeWidth={2.2} />;
    default:
      return <Zap className="w-5 h-5 text-[#38bdf8]" strokeWidth={2.2} />;
  }
}

export default function HrmSolutionClient({ data }: { data: HrmSolutionData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const archRef = useRef<HTMLDivElement>(null);
  const benchRef = useRef<HTMLDivElement>(null);
  const velocityRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (heroRef.current) {
        gsap.fromTo(
          ".crm-hero-elem",
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".crm-hero-laptop",
          { opacity: 0, scale: 0.95, y: 25 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.9,
            delay: 0.15,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (aboutRef.current) {
        gsap.fromTo(
          ".crm-about-step",
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: aboutRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (specRef.current) {
        gsap.fromTo(
          ".crm-spec-elem",
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: specRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (scopeRef.current) {
        gsap.fromTo(
          ".crm-scope-card",
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: scopeRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (archRef.current) {
        gsap.fromTo(
          ".crm-arch-elem",
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: archRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (benchRef.current) {
        gsap.fromTo(
          ".crm-bench-card",
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: benchRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (velocityRef.current) {
        gsap.fromTo(
          ".crm-velocity-card",
          { opacity: 0, y: 20 },
          {
            scrollTrigger: {
              trigger: velocityRef.current,
              start: "top 80%",
            },
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ".crm-cta-elem",
          { opacity: 0, y: 25 },
          {
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
            },
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }
    },
    { scope: containerRef, dependencies: [data.slug] }
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-black text-white select-none overflow-x-hidden font-sans"
    >
      {/* =========================================================================
          SECTION 1: HERO SECTION
      ========================================================================== */}
      <section
        ref={heroRef}
        className="relative w-full pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-left"
      >
        {/* Soft Ambient Radial Glow Behind Laptop */}
        <div
          className="pointer-events-none absolute right-0 lg:right-10 top-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[360px] lg:h-[440px] rounded-full opacity-20 blur-[130px] z-0"
          style={{ background: "#0284c7" }}
          aria-hidden="true"
        />

        <div className="max-w-[1360px] mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="crm-hero-elem flex items-center gap-2 text-[10.5px] sm:text-[11px] font-mono tracking-widest text-[#7e92a8] uppercase mb-3 sm:mb-3.5">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              HOME
            </Link>
            <span className="text-[#475569] font-mono">&gt;</span>
            <Link
              href="/industries/hrm-crm"
              className="hover:text-cyan-400 transition-colors"
            >
              {data.breadcrumbIndustry}
            </Link>
            <span className="text-[#475569] font-mono">&gt;</span>
            <span className="text-white font-semibold">
              {data.breadcrumbLabel}
            </span>
          </div>

          {/* 2-Column Hero Grid: Left Content, Right Angled Laptop Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Column: Solution Module, Headline, Description, Dual CTA */}
            <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start text-left">
              
              {/* Kicker Badge: SOLUTION MODULE • XX OF 06 */}
              <span className="crm-hero-elem text-[10.5px] sm:text-[11px] font-mono tracking-[0.2em] font-semibold text-cyan-400 uppercase block mb-2 sm:mb-2.5">
                {data.badgeText}
              </span>

              {/* Main Headline */}
              <h1 className="crm-hero-elem text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-3 sm:mb-3.5 max-w-[580px]">
                <span className="block">{data.heroTitle.line1}</span>
                <span className="block text-white">
                  {data.heroTitle.line2}{" "}
                  <span className="text-[#2563eb]">{data.heroTitle.line2Blue}</span>
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="crm-hero-elem text-[13px] sm:text-[14px] text-[#93a4b9] font-normal leading-[1.58] font-sans max-w-[480px] mb-5 sm:mb-6">
                {data.subtitle}
              </p>

              {/* Dual Action Buttons */}
              <div className="crm-hero-elem flex flex-wrap items-center gap-3 sm:gap-3.5">
                <Link
                  href={data.primaryButtonLink}
                  className="bg-[#0284c7] hover:bg-[#0369a1] text-white font-medium text-[13px] sm:text-[13.5px] px-5 sm:px-6 py-2.5 rounded-xl shadow-[0_0_24px_rgba(2,132,199,0.45)] hover:shadow-[0_0_32px_rgba(2,132,199,0.7)] inline-flex items-center justify-center transition-all cursor-pointer active:scale-95 font-sans"
                >
                  <span>{data.primaryButtonText}</span>
                </Link>

                <Link
                  href={data.secondaryButtonLink}
                  className="bg-black/70 hover:bg-[#0b1320] text-white border border-[#222c3d] hover:border-cyan-500/50 text-[13px] sm:text-[13.5px] font-medium px-5 sm:px-6 py-2.5 rounded-xl transition-all shadow-md cursor-pointer active:scale-95 font-sans inline-flex items-center justify-center"
                >
                  <span>{data.secondaryButtonText}</span>
                </Link>
              </div>

            </div>

            {/* Right Column: 3D Angled Laptop Showcase */}
            <div className="lg:col-span-6 xl:col-span-6 flex justify-center lg:justify-end relative">
              <div className="crm-hero-laptop relative w-full max-w-[480px] lg:max-w-[520px] xl:max-w-[560px]">
                <TiltCard maxTilt={5} scale={1.01} glare={false} className="relative w-full block">
                  <div className="relative w-full">
                    <Image
                      src={data.laptopImage}
                      alt={`${data.heroTitle.line1} ${data.heroTitle.line2} ${data.heroTitle.line2Blue} Mockup`}
                      width={1400}
                      height={850}
                      priority
                      className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(2,132,199,0.35)] transform hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </TiltCard>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 2: 01 — ABOUT THIS MODULE (How We Build Your Operations)
      ========================================================================== */}
      <section
        ref={aboutRef}
        id="architecture"
        className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-left border-t border-[#121c2a]"
      >
        <div className="max-w-[1360px] mx-auto relative z-10">
          
          {/* Section Kicker */}
          <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.22em] text-[#7e92a8] uppercase block mb-3.5 font-medium">
            {data.aboutModule.kicker}
          </span>

          {/* Section Heading */}
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-12 sm:mb-16 max-w-2xl">
            <span className="block">{data.aboutModule.heading.white}</span>
            <span className="block text-[#2563eb]">{data.aboutModule.heading.blue}</span>
          </h2>

          {/* 4 Process Steps Flow with Connecting Dashed Lines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {data.aboutModule.steps.map((step, idx) => (
              <div key={idx} className="crm-about-step flex flex-col items-start group text-left">
                
                {/* Step Circle Indicator & Connecting Line */}
                <div className="flex items-center gap-3 w-full mb-5">
                  <div className="w-4 h-4 rounded-full border-2 border-[#2563eb] bg-black shrink-0 relative flex items-center justify-center shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                  </div>
                  {/* Subtle connecting dashed rule extending to next step */}
                  <div className="flex-1 border-t border-dashed border-[#23354d]" />
                </div>

                {/* Step Title */}
                <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight mb-2 font-sans group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[12.5px] sm:text-[13px] text-[#8fa2b8] leading-[1.65] font-sans font-normal max-w-[280px]">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 02 — SPECIFICATION (Itemized Module Specification)
      ========================================================================== */}
      <section
        ref={specRef}
        className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-left border-t border-[#121c2a]"
      >
        {/* Soft Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 w-[550px] lg:w-[650px] h-[400px] lg:h-[480px] rounded-full opacity-15 blur-[140px] z-0"
          style={{ background: "#1d4ed8" }}
          aria-hidden="true"
        />

        <div className="max-w-[1360px] mx-auto relative z-10">
          
          {/* Section Kicker */}
          <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.22em] text-[#7e92a8] uppercase block mb-3.5 font-medium">
            {data.specifications.kicker}
          </span>

          {/* Section Heading */}
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-10 sm:mb-12 max-w-2xl">
            <span className="block">{data.specifications.heading.white}</span>
            <span className="block text-[#2563eb]">{data.specifications.heading.blue}</span>
          </h2>

          {/* 2-Column Grid: Left Spec Card, Right Angled Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Dark Technical Specification Card */}
            <div className="crm-spec-elem lg:col-span-5 xl:col-span-5">
              <div className="rounded-[24px] sm:rounded-[28px] bg-[#0c121d]/90 border border-[#1b2b40] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
                <div className="divide-y divide-[#16253a]/70">
                  {data.specifications.items.map((item, idx) => {
                    if (item.isTimeline) {
                      return (
                        <div
                          key={idx}
                          className="pt-4 sm:pt-5 flex items-center justify-between font-sans"
                        >
                          <span className="text-[13.5px] sm:text-[14px] font-bold text-white tracking-tight">
                            {item.label}
                          </span>
                          <span className="text-[14px] sm:text-[15px] font-bold text-[#2563eb] tracking-tight">
                            {item.value}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={idx}
                        className="py-3 sm:py-3.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 font-mono text-[12.5px] sm:text-[13px]"
                      >
                        <span className="text-[#7e92a8] shrink-0 font-normal">
                          {item.label}
                        </span>
                        <span className="text-white text-left sm:text-right font-medium truncate sm:max-w-[280px]">
                          {item.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: 3D Laptop Showcase with Diagonal Light Beam */}
            <div className="crm-spec-elem lg:col-span-7 xl:col-span-7 flex justify-center lg:justify-end relative">
              <div className="crm-spec-laptop relative w-full max-w-[620px] lg:max-w-[680px]">
                <TiltCard maxTilt={4} scale={1.01} glare={false} className="relative w-full block">
                  <div className="relative w-full">
                    <Image
                      src={data.specifications.laptopImage}
                      alt={`${data.specifications.heading.white} Specification Showcase`}
                      width={1200}
                      height={856}
                      className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                </TiltCard>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 4: 03 — SCOPE (Tailored For Every Scale)
      ========================================================================== */}
      <section
        ref={scopeRef}
        className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-left border-t border-[#121c2a]"
      >
        <div className="max-w-[1360px] mx-auto relative z-10">
          
          {/* Section Kicker */}
          <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.22em] text-[#7e92a8] uppercase block mb-3.5 font-medium">
            {data.scopeSection.kicker}
          </span>

          {/* Section Heading */}
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-3 max-w-3xl">
            <span>{data.scopeSection.heading.white} </span>
            <span className="text-[#2563eb]">{data.scopeSection.heading.blue}</span>
          </h2>

          {/* Subtitle */}
          <p className="text-[13px] sm:text-[14px] text-[#8fa2b8] font-normal leading-[1.6] font-sans max-w-xl mb-10 sm:mb-12">
            {data.scopeSection.subtitle}
          </p>

          {/* 3 Scope Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.scopeSection.cards.map((card, idx) => (
              <div
                key={idx}
                className="crm-scope-card rounded-[20px] bg-[#0c121d]/90 hover:bg-[#0f1725] border border-[#1b2b40] hover:border-cyan-500/40 p-7 sm:p-8 text-center transition-all duration-300 group shadow-lg flex flex-col items-center justify-center"
              >
                <h3 className="text-[15px] sm:text-[16px] font-bold text-white mb-2 font-sans tracking-tight group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h3>
                <p className="text-[12.5px] sm:text-[13px] text-[#8fa2b8] leading-[1.65] font-sans font-normal max-w-[280px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: 04 — SYSTEM ARCHITECTURE (Engineered for Enterprise Reliability)
      ========================================================================== */}
      <section
        ref={archRef}
        className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-left border-t border-[#121c2a]"
      >
        <div className="max-w-[1360px] mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Image of professional on laptop with holographic cards */}
            <div className="crm-arch-elem lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[480px]">
                <TiltCard maxTilt={4} scale={1.01} glare={false} className="rounded-[24px] sm:rounded-[28px] overflow-hidden">
                  <div className="rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#1b2b40] bg-[#0c121d] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                    <Image
                      src={data.architectureSection.image}
                      alt="Enterprise Architecture Workflow"
                      width={960}
                      height={640}
                      className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                </TiltCard>
              </div>
            </div>

            {/* Right Column: Title + Vertical 4 Steps */}
            <div className="crm-arch-elem lg:col-span-7 xl:col-span-7 flex flex-col text-left">
              
              {/* Section Kicker */}
              <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.22em] text-[#7e92a8] uppercase block mb-3.5 font-medium">
                {data.architectureSection.kicker}
              </span>

              {/* Section Title */}
              <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-10 sm:mb-12">
                <span>{data.architectureSection.heading.white} </span>
                <span className="text-[#2563eb]">{data.architectureSection.heading.blue}</span>
              </h2>

              {/* Vertical Connected Steps */}
              <div className="relative flex flex-col space-y-7 sm:space-y-8 pl-1">
                {/* Continuous vertical dashed line */}
                <div className="absolute left-[9px] top-3 bottom-3 w-[1px] border-l border-dashed border-[#23354d] pointer-events-none" />

                {data.architectureSection.points.map((point, idx) => (
                  <div key={idx} className="relative flex items-start gap-4 sm:gap-5 group">
                    {/* Circle Icon with Center Dot */}
                    <div className="w-4 h-4 rounded-full border-2 border-[#2563eb] bg-black shrink-0 relative flex items-center justify-center mt-1 z-10 shadow-[0_0_10px_rgba(37,99,235,0.4)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col text-left">
                      <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight mb-1.5 font-sans group-hover:text-cyan-400 transition-colors">
                        {point.title}
                      </h3>
                      <p className="text-[12.5px] sm:text-[13px] text-[#8fa2b8] leading-[1.65] font-sans font-normal max-w-[480px]">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 6: 06 — PROVEN BENCHMARKS (Verified Metrics From Live Deployments)
      ========================================================================== */}
      <section
        ref={benchRef}
        className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-left border-t border-[#121c2a]"
      >
        <div className="max-w-[1360px] mx-auto relative z-10">
          
          {/* Section Kicker */}
          <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.22em] text-[#7e92a8] uppercase block mb-3.5 font-medium">
            {data.benchmarksSection.kicker}
          </span>

          {/* Section Title */}
          <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-10 sm:mb-12 max-w-2xl">
            <span>{data.benchmarksSection.heading.white} </span>
            <span className="text-[#2563eb]">{data.benchmarksSection.heading.blue}</span>
          </h2>

          {/* 4 Radial Semi-Circle Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benchmarksSection.metrics.map((metric, idx) => {
              // Arc calculation for 180 deg semi-circle:
              // Total circumference of radius 45 is PI * 45 = ~141.4
              const totalLength = 141.4;
              const strokeOffset = totalLength * (1 - metric.percent / 100);

              return (
                <div
                  key={idx}
                  className="crm-bench-card rounded-[20px] bg-[#0c121d]/90 hover:bg-[#0f1725] border border-[#1b2b40] hover:border-cyan-500/40 py-7 px-6 flex flex-col items-center justify-center text-center shadow-lg transition-all duration-300 group"
                >
                  {/* Semi-circular Gauge Arc with Glowing Progress */}
                  <div className="relative w-36 h-20 flex items-end justify-center mb-1">
                    <svg className="w-36 h-20 overflow-visible" viewBox="0 0 120 62">
                      <defs>
                        <linearGradient id={`gaugeGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#2563eb" />
                          <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>
                      {/* Background Track Arc */}
                      <path
                        d="M 15 58 A 45 45 0 0 1 105 58"
                        fill="none"
                        stroke="#162338"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                      {/* Glowing Active Arc */}
                      <path
                        d="M 15 58 A 45 45 0 0 1 105 58"
                        fill="none"
                        stroke={`url(#gaugeGrad-${idx})`}
                        strokeWidth="5.5"
                        strokeDasharray={totalLength}
                        strokeDashoffset={strokeOffset}
                        strokeLinecap="round"
                        className="drop-shadow-[0_0_10px_rgba(37,99,235,0.7)]"
                      />
                    </svg>

                    {/* Metric Value inside Arc */}
                    <span className="absolute bottom-1 text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-none font-sans">
                      {metric.value}
                    </span>
                  </div>

                  {/* Metric Label */}
                  <span className="text-[12px] sm:text-[12.5px] text-[#8fa2b8] font-medium font-sans mt-3">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 7: BUILT FOR HIGH-VELOCITY OPERATIONS
      ========================================================================== */}
      {data.highVelocitySection && (
        <section
          ref={velocityRef}
          className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-left border-t border-[#121c2a]"
        >
          <div className="max-w-[1360px] mx-auto relative z-10">
            
            {/* Section Heading */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-10 sm:mb-12">
              <span>{data.highVelocitySection.heading.white} </span>
              <span className="text-[#5c8eff]">{data.highVelocitySection.heading.blue}</span>
            </h2>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.highVelocitySection.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="crm-velocity-card rounded-[22px] bg-[#0c121d]/90 hover:bg-[#0f1725] border border-[#1b2b40] hover:border-cyan-500/40 p-6 sm:p-7 flex flex-col items-start text-left transition-all duration-300 group shadow-lg min-h-[220px]"
                >
                  {/* Icon Box */}
                  <div className="w-11 h-11 rounded-[14px] bg-[#0b1f36] border border-[#1d3f66] flex items-center justify-center mb-6 text-[#38bdf8] group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    {renderVelocityIcon(card.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-[16px] sm:text-[17px] font-bold text-white tracking-tight mb-2.5 font-sans group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[12.5px] sm:text-[13px] text-[#8fa2b8] leading-[1.65] font-sans font-normal">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* =========================================================================
          SECTION 8: FINAL CALL TO ACTION (Ready to launch your marketplace?)
      ========================================================================== */}
      {data.finalCtaSection && (
        <section
          ref={ctaRef}
          className="relative w-full py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-center border-t border-[#121c2a]"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(ellipse at center, #0284c7 0%, transparent 70%)" }}
            aria-hidden="true"
          />

          <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
            
            {/* CTA Headline */}
            <h2 className="crm-cta-elem text-[36px] sm:text-[48px] md:text-[58px] font-bold tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-8 sm:mb-10 text-white">
              <span className="block">{data.finalCtaSection.heading.white}</span>
              <span className="block text-[#00a2ea] sm:text-[#0ea5e9] drop-shadow-[0_0_25px_rgba(2,132,199,0.35)]">
                {data.finalCtaSection.heading.blue}
              </span>
            </h2>

            {/* Action Buttons */}
            <div className="crm-cta-elem flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <Link
                href={data.finalCtaSection.primaryButtonLink || "/#contact-cta"}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-[14px] bg-[#009de0] hover:bg-[#0284c7] text-white font-semibold text-[14px] sm:text-[15px] font-sans shadow-[0_0_30px_rgba(0,157,224,0.45)] hover:shadow-[0_0_40px_rgba(0,157,224,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                {data.finalCtaSection.primaryButtonText}
              </Link>

              <Link
                href={data.finalCtaSection.secondaryButtonLink || "/industries/tour-travels"}
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-[14px] bg-[#060b12] hover:bg-[#0e1624] border border-[#1b2b40] hover:border-cyan-500/50 text-white font-medium text-[14px] sm:text-[15px] font-sans hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer shadow-md"
              >
                {data.finalCtaSection.secondaryButtonText}
              </Link>
            </div>

          </div>
        </section>
      )}

    </div>
  );
}
