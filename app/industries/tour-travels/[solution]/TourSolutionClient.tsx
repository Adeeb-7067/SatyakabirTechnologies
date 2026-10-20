"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Car,
  Timer,
  TrendingUp,
  Shield,
  Wallet,
  Zap,
  Check,
  Globe,
  Database,
  Cpu,
} from "lucide-react";
import { TourSolutionData } from "../solutionsData";
import TiltCard from "@/app/components/ui/TiltCard";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper for rendering benefit icons
function getBenefitIcon(iconType: string) {
  switch (iconType) {
    case "timer":
      return <Timer className="w-4 h-4 text-slate-300" />;
    case "surge":
      return <TrendingUp className="w-4 h-4 text-slate-300" />;
    case "safety":
      return <Shield className="w-4 h-4 text-slate-300" />;
    case "wallet":
      return <Wallet className="w-4 h-4 text-slate-300" />;
    default:
      return <Zap className="w-4 h-4 text-slate-300" />;
  }
}

// Helper for rendering technology stack icons
function renderTechIcon(iconType: string) {
  switch (iconType) {
    case "react":
      return (
        <svg className="w-4 h-4 text-[#00d8ff]" viewBox="0 0 115.3 100" fill="currentColor">
          <ellipse cx="57.7" cy="50" rx="10.8" ry="10.8" />
          <ellipse cx="57.7" cy="50" rx="55" ry="21" fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(30 57.7 50)" />
          <ellipse cx="57.7" cy="50" rx="55" ry="21" fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(90 57.7 50)" />
          <ellipse cx="57.7" cy="50" rx="55" ry="21" fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(150 57.7 50)" />
        </svg>
      );
    case "node":
      return (
        <svg className="w-4 h-4 text-[#22c55e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <text x="12" y="15" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="bold">JS</text>
        </svg>
      );
    case "next":
      return (
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="#000" stroke="#444" strokeWidth="1" />
          <path d="M15 8v8l-6-8v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case "flutter":
      return (
        <svg className="w-4 h-4 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.7 0h-7.386zm0 10.748L7.6 17.462l3.7 3.7 3.7-3.7 6.7 6.538h7.4l-10.4-10.252-4.386-3z" />
        </svg>
      );
    case "aws":
      return (
        <svg className="w-4 h-4 text-[#f59e0b]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.7 14.5c-.2-.4-.8-.6-1.5-.6-1.1 0-2.2.4-3.1 1.1-.3.2-.3.6-.1.8.2.3.6.3.8.1.7-.5 1.5-.8 2.4-.8.4 0 .7.1.8.3.1.2 0 .5-.2.6l-1.3.6c-1.3.6-2 1.6-2 2.7 0 1.6 1.3 2.8 3.1 2.8 1.3 0 2.3-.5 2.9-1.3v1c0 .3.2.5.5.5s.5-.2.5-.5v-6.3c0-.4-.3-.7-.7-.7-.3 0-.6.3-.6.6v.5c-.5-.6-1.4-1-2.2-1.3zm.2 5.1c-.5.8-1.4 1.2-2.3 1.2-1.2 0-2-.8-2-1.9 0-.8.5-1.5 1.4-1.9l1.4-.7c.9-.4 1.5-1 1.5-1.8v5.1zM8.3 19.8c-.8.6-1.8.9-2.8.9-1.7 0-2.8-1-2.8-2.6 0-1.2.7-2.1 1.9-2.5l2.4-.7v-.6c0-.9-.6-1.4-1.6-1.4-.8 0-1.6.3-2.1.8-.2.2-.6.2-.8-.1-.2-.2-.2-.6.1-.8.7-.7 1.7-1.1 2.8-1.1 1.7 0 2.7.9 2.7 2.4v4.5c0 .3.2.5.5.5s.5-.2.5-.5v-4.5c0-2-1.4-3.3-3.7-3.3-1.4 0-2.7.5-3.6 1.4-.2.2-.2.5-.1.8.2.2.5.3.8.1.7-.7 1.7-1.1 2.9-1.1 1.7 0 2.7 1 2.7 2.4v.3l-2.6.8c-1.7.5-2.7 1.8-2.7 3.4 0 2.2 1.6 3.6 3.8 3.6 1.3 0 2.5-.5 3.3-1.4v.9c0 .3.2.5.5.5s.5-.2.5-.5v-5.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v1.2z" />
          <path d="M21.9 17.5c-2.4 2.8-5.9 4.5-9.9 4.5-4.5 0-8.5-2.1-11-5.4-.3-.4-.2-.9.2-1.1.4-.3.9-.2 1.1.2 2.2 2.9 5.7 4.8 9.7 4.8 3.5 0 6.6-1.5 8.7-3.9.3-.3.8-.4 1.1-.1.4.3.4.7.1 1z" />
        </svg>
      );
    case "websockets":
      return (
        <span className="relative flex items-center justify-center">
          <Globe className="w-4 h-4 text-[#3b82f6]" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
        </span>
      );
    case "postgres":
      return <Database className="w-4 h-4 text-[#38bdf8]" />;
    case "redis":
      return <Cpu className="w-4 h-4 text-[#ef4444]" />;
    case "docker":
      return (
        <svg className="w-4 h-4 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.9 11.2h2.2v2.2h-2.2zm-2.7 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H8.4zm5.5-2.7h2.2v2.2h-2.2zm-2.7 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H8.4zm5.5-2.8h2.2v2.2h-2.2zm-2.7 0h2.2v2.2h-2.2zm-2.8 0h2.2v2.2H8.4zM22 13.5c-.3 0-.6.1-.8.2-.5-.4-1.2-.6-2-.6-1.5 0-2.7.9-3.2 2.1H2.4c-.4 0-.8.3-.9.7-.5 2.1.2 4.4 2 5.9 1.6 1.4 3.8 2.2 6.5 2.2 7.7 0 12-5.4 12-10.2 0-.1 0-.2 0-.3z" />
        </svg>
      );
    case "maps":
      return (
        <svg className="w-4 h-4 text-[#ea4335]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      );
    default:
      return <Zap className="w-4 h-4 text-cyan-400" />;
  }
}

export default function TourSolutionClient({ data }: { data: TourSolutionData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const techStackRef = useRef<HTMLDivElement>(null);
  const modulesRef = useRef<HTMLDivElement>(null);

  const [activeTabId, setActiveTabId] = useState<string>(
    data.corePlatformModulesSection?.tabs[0]?.id || "rider"
  );

  // Synchronize active tab when navigating between solutions
  React.useEffect(() => {
    if (data.corePlatformModulesSection?.tabs?.[0]) {
      setActiveTabId(data.corePlatformModulesSection.tabs[0].id);
    }
  }, [data.slug, data.corePlatformModulesSection]);

  const activeTab =
    data.corePlatformModulesSection?.tabs.find((t) => t.id === activeTabId) ||
    data.corePlatformModulesSection?.tabs[0];

  useGSAP(
    () => {
      // 1. Hero Entrance Animations (safe with clearProps)
      if (heroRef.current) {
        gsap.from(
          ".tour-sol-hero-elem",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            clearProps: "all",
          }
        );

        gsap.from(
          ".tour-sol-hero-visual",
          {
            opacity: 0,
            scale: 0.96,
            y: 20,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.1,
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
      className="w-full min-h-screen bg-[#060c14] text-white select-none overflow-x-hidden font-sans"
    >
      {/* SECTION 1: HERO SECTION */}
      <section
        ref={heroRef}
        className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#060c14] via-[#091322] to-[#060c14]"
      >
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[400px] sm:h-[500px] bg-gradient-to-br from-blue-600/15 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="tour-sol-hero-elem flex items-center gap-2 text-[11px] sm:text-[12px] font-mono tracking-wider text-[#7e92a8] uppercase mb-6">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              HOME
            </Link>
            <span className="text-[#3b5066]">›</span>
            <Link href="/industries/tour-travels" className="hover:text-cyan-400 transition-colors">
              TOUR & TRAVELS
            </Link>
            <span className="text-[#3b5066]">›</span>
            <span className="text-white font-semibold">
              {data.breadcrumbLabel}
            </span>
          </div>

          {/* Main 2-Col Hero Grid: Left Content, Right 3-iPhones Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content (approx 6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              
              {/* Badge Pill: [ 🚗 SOLUTION MODULE 01 ] */}
              <div className="tour-sol-hero-elem inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1c2e] border border-cyan-500/30 text-cyan-300 text-[11.5px] sm:text-[12px] font-mono tracking-wider mb-5 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                <Car className="w-3.5 h-3.5 text-cyan-400" />
                <span>[ {data.badgeText} ]</span>
              </div>

              {/* Main Headline (Exact dual-tone matching screenshot) */}
              <h1 className="tour-sol-hero-elem text-[36px] sm:text-[46px] lg:text-[52px] font-extrabold tracking-tight leading-[1.12] mb-6 font-sans">
                <span className="text-white block">{data.heroTitle.line1}</span>
                <span className="text-[#2563eb] block">{data.heroTitle.line2Blue}</span>
              </h1>

              {/* About The Ecosystem Card with Glowing Left Accent Stripe */}
              <div className="tour-sol-hero-elem w-full rounded-2xl bg-[#0c1626]/85 border border-[#1b2b40] p-5 sm:p-6 mb-7 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
                {/* Left Cyan Accent Stripe */}
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-indigo-600 rounded-l-2xl shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                <div className="pl-3">
                  <h3 className="text-[14px] sm:text-[15px] font-bold text-white mb-2 flex items-center gap-2 font-sans tracking-wide">
                    <span>ABOUT THE ECOSYSTEM</span>
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#8fa2b8] leading-[1.65] font-sans font-normal">
                    {data.aboutEcosystem}
                  </p>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="tour-sol-hero-elem flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/#contact-cta"
                  className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(29,78,216,0.5)] transition-all cursor-pointer active:scale-95 group font-sans"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/industries/tour-travels"
                  className="bg-transparent hover:bg-white/5 border border-[#23354d] hover:border-cyan-500/50 text-[#8fa2b8] hover:text-white font-medium text-[13.5px] sm:text-[14px] px-6 py-3 rounded-full transition-all cursor-pointer font-sans"
                >
                  View Industries
                </Link>
              </div>

            </div>

            {/* Right Visual: Triple iPhones Mockup with Floating Trip Estimate Card */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="tour-sol-hero-visual relative w-full max-w-[540px]">
                <TiltCard maxTilt={6} scale={1.02} glare={true} glareOpacity={0.08} className="rounded-3xl">
                  <div className="relative w-full rounded-3xl p-2 sm:p-4">
                    <Image
                      src={data.heroPhonesImage}
                      alt="Taxi Booking Platform - 3 Tilted Phones Mockup"
                      width={1000}
                      height={680}
                      className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
                      priority
                    />
                  </div>
                </TiltCard>
              </div>
            </div>

          </div>

          {/* Bottom 4 Key Metrics Card (Matching User Screenshot Layout) */}
          <div className="tour-sol-hero-elem mt-12 sm:mt-16 w-full rounded-2xl bg-[#091220]/90 border border-[#18283c] p-6 sm:p-7 shadow-2xl backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#162538]">
              {data.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-start ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-6 lg:pl-8" : ""}`}
                >
                  <div className="flex items-baseline gap-1 text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-white tracking-tight leading-none font-sans">
                    <AnimatedMetric value={metric.value} />
                    <span className="text-[#38bdf8] font-bold">{metric.suffix}</span>
                  </div>
                  <span className="text-[11px] sm:text-[11.5px] font-mono tracking-wider text-[#7e92a8] uppercase mt-2">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: PLATFORM BENEFITS BENTO GRID */}
      <section
        ref={benefitsRef}
        className="w-full bg-[#060c14] py-20 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1c2e] border border-cyan-500/30 text-cyan-300 text-[11px] sm:text-[11.5px] font-mono tracking-wider uppercase mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              <span>[ KEY ADVANTAGES ]</span>
            </div>
            
            <h2 className="text-[32px] sm:text-[42px] font-extrabold text-white tracking-tight font-sans">
              <span>{data.benefitsSection.heading.white} </span>
              <span className="text-[#2563eb]">{data.benefitsSection.heading.blue}</span>
            </h2>

            <p className="text-[13.5px] sm:text-[14.5px] text-[#8fa2b8] mt-2.5 max-w-xl font-sans font-normal">
              {data.benefitsSection.subtitle}
            </p>
          </div>

          {/* 4 Cards Bento Grid Layout matching user screenshot */}
          <div className="space-y-5 sm:space-y-6">
            
            {/* ROW 1: Wide Card (Left 8 cols) + Narrow Card (Right 4 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              
              {/* Card 1: Wide (8 Cols on LG) - Zero Dispatch Delays with Taxi Car & Phone Image */}
              <div className="tour-sol-benefit-card lg:col-span-8">
                <TiltCard maxTilt={3} scale={1.01} glare={true} glareOpacity={0.06} className="h-full rounded-[24px] sm:rounded-[28px]">
                  <div className="rounded-[24px] sm:rounded-[28px] bg-[#0c1422]/90 hover:bg-[#0f1b2c] border border-[#1b2b40] hover:border-cyan-500/40 p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl transition-all duration-300 group h-full">
                    
                    {/* Left Text */}
                    <div className="max-w-[380px]">
                      {/* Icon */}
                      <div className="w-9 h-9 rounded-xl bg-[#142336] border border-[#1e3450] flex items-center justify-center text-slate-300 mb-5 shadow-inner">
                        {getBenefitIcon(data.benefitsSection.card1.iconType)}
                      </div>

                      {/* Title */}
                      <h3 className="text-[20px] sm:text-[22px] font-bold text-white font-sans tracking-tight mb-2.5">
                        {data.benefitsSection.card1.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] sm:text-[13.5px] text-[#8fa2b8] leading-[1.65] font-sans font-normal">
                        {data.benefitsSection.card1.description}
                      </p>
                    </div>

                    {/* Right Visual (Yellow Taxi & Ride Phone Mockup) */}
                    {data.benefitsSection.card1.image && (
                      <div className="relative w-full max-w-[280px] sm:max-w-[320px] shrink-0 self-center">
                        <Image
                          src={data.benefitsSection.card1.image}
                          alt={data.benefitsSection.card1.title}
                          width={480}
                          height={280}
                          className="w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}

                  </div>
                </TiltCard>
              </div>

              {/* Card 2: Narrow (4 Cols on LG) - Dynamic Surge Pricing */}
              <div className="tour-sol-benefit-card lg:col-span-4">
                <TiltCard maxTilt={4} scale={1.01} glare={true} glareOpacity={0.06} className="h-full rounded-[24px] sm:rounded-[28px]">
                  <div className="rounded-[24px] sm:rounded-[28px] bg-[#0c1422]/90 hover:bg-[#0f1b2c] border border-[#1b2b40] hover:border-cyan-500/40 p-7 sm:p-9 flex flex-col justify-start shadow-xl transition-all duration-300 group h-full">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl bg-[#142336] border border-[#1e3450] flex items-center justify-center text-slate-300 mb-5 shadow-inner">
                      {getBenefitIcon(data.benefitsSection.card2.iconType)}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-white font-sans tracking-tight mb-2.5">
                      {data.benefitsSection.card2.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#8fa2b8] leading-[1.65] font-sans font-normal">
                      {data.benefitsSection.card2.description}
                    </p>
                  </div>
                </TiltCard>
              </div>

            </div>

            {/* ROW 2: Narrow Card (Left 4 cols) + Wide Card (Right 8 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
              
              {/* Card 3: Narrow (4 Cols on LG) - Military-Grade Safety */}
              <div className="tour-sol-benefit-card lg:col-span-4">
                <TiltCard maxTilt={4} scale={1.01} glare={true} glareOpacity={0.06} className="h-full rounded-[24px] sm:rounded-[28px]">
                  <div className="rounded-[24px] sm:rounded-[28px] bg-[#0c1422]/90 hover:bg-[#0f1b2c] border border-[#1b2b40] hover:border-cyan-500/40 p-7 sm:p-9 flex flex-col justify-start shadow-xl transition-all duration-300 group h-full">
                    {/* Icon */}
                    <div className="w-9 h-9 rounded-xl bg-[#142336] border border-[#1e3450] flex items-center justify-center text-slate-300 mb-5 shadow-inner">
                      {getBenefitIcon(data.benefitsSection.card3.iconType)}
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-white font-sans tracking-tight mb-2.5">
                      {data.benefitsSection.card3.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#8fa2b8] leading-[1.65] font-sans font-normal">
                      {data.benefitsSection.card3.description}
                    </p>
                  </div>
                </TiltCard>
              </div>

              {/* Card 4: Wide (8 Cols on LG) - Automated Ledger & Settlements with Driver Wallet Card */}
              <div className="tour-sol-benefit-card lg:col-span-8">
                <TiltCard maxTilt={3} scale={1.01} glare={true} glareOpacity={0.06} className="h-full rounded-[24px] sm:rounded-[28px]">
                  <div className="rounded-[24px] sm:rounded-[28px] bg-[#0c1422]/90 hover:bg-[#0f1b2c] border border-[#1b2b40] hover:border-cyan-500/40 p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl transition-all duration-300 group h-full">
                    
                    {/* Left Content */}
                    <div className="max-w-[420px]">
                      {/* Icon */}
                      <div className="w-9 h-9 rounded-xl bg-[#142336] border border-[#1e3450] flex items-center justify-center text-slate-300 mb-5 shadow-inner">
                        {getBenefitIcon(data.benefitsSection.card4.iconType)}
                      </div>

                      {/* Title */}
                      <h3 className="text-[20px] sm:text-[22px] font-bold text-white font-sans tracking-tight mb-2.5">
                        {data.benefitsSection.card4.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] sm:text-[13.5px] text-[#8fa2b8] leading-[1.65] font-sans font-normal">
                        {data.benefitsSection.card4.description}
                      </p>
                    </div>

                    {/* Right Wallet Balance Widget */}
                    {data.benefitsSection.card4.widget && (
                      <div className="rounded-[18px] bg-[#080e18] border border-[#162438] p-5 sm:p-6 flex flex-col justify-between min-w-[220px] sm:min-w-[240px] shadow-lg shrink-0">
                        <span className="text-[11px] font-mono tracking-wider text-[#7e92a8] uppercase mb-1.5 block">
                          {data.benefitsSection.card4.widget.label}
                        </span>
                        <span className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight leading-none mb-4 font-sans block">
                          {data.benefitsSection.card4.widget.value}
                        </span>
                        <Link
                          href="/#contact-cta"
                          className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-semibold text-[13px] py-2.5 px-4 rounded-lg text-center shadow-[0_0_15px_rgba(29,78,216,0.4)] transition-all cursor-pointer active:scale-95 block font-sans"
                        >
                          {data.benefitsSection.card4.widget.buttonText}
                        </Link>
                      </div>
                    )}

                  </div>
                </TiltCard>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: ENTERPRISE-GRADE TECHNOLOGY STACK */}
      {data.techStackSection && (
        <section
          ref={techStackRef}
          className="w-full bg-[#060c14] py-14 sm:py-18 px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-[24px] sm:text-[30px] font-bold text-white tracking-tight text-center font-sans">
              {data.techStackSection.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#8fa2b8] text-center mt-2.5 max-w-xl mx-auto font-sans font-normal">
              {data.techStackSection.subtitle}
            </p>

            {/* Moving Infinite Tech Pills Marquee */}
            <div className="relative w-full max-w-7xl mx-auto overflow-hidden mt-8 sm:mt-10 py-3">
              <style>{`
                @keyframes techMarqueeScroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                .tech-marquee-track {
                  display: flex !important;
                  width: max-content !important;
                  animation: techMarqueeScroll 24s linear infinite !important;
                  will-change: transform;
                }
                .tech-marquee-track:hover {
                  animation-play-state: paused !important;
                }
              `}</style>

              {/* Left & Right Smooth Fade Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#060c14] to-transparent pointer-events-none z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#060c14] to-transparent pointer-events-none z-10" />

              {/* Infinite Moving Marquee Track */}
              <div className="tech-marquee-track flex items-center gap-3 sm:gap-4 select-none cursor-pointer">
                {[
                  ...data.techStackSection.technologies,
                  ...data.techStackSection.technologies,
                ].map((tech, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 rounded-full bg-[#0a1322] border border-[#1b2b40] hover:border-cyan-500/50 hover:bg-[#0f1d30] px-4 sm:px-5 py-2.5 flex items-center gap-2.5 sm:gap-3 transition-all duration-300 shadow-md group hover:scale-105 active:scale-95"
                  >
                    <div className="shrink-0 flex items-center justify-center">
                      {renderTechIcon(tech.iconType)}
                    </div>
                    <span className="text-[12.5px] sm:text-[13.5px] font-medium text-slate-200 group-hover:text-white font-sans whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: CORE PLATFORM MODULES */}
      {data.corePlatformModulesSection && activeTab && (
        <section
          ref={modulesRef}
          className="w-full bg-[#060c14] py-16 sm:py-22 px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8 sm:mb-10">
              <h2 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold text-white tracking-tight font-sans">
                {data.corePlatformModulesSection.heading.white}{" "}
                <span className="text-[#2563eb]">
                  {data.corePlatformModulesSection.heading.blue}
                </span>
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#8fa2b8] mt-2 font-sans font-normal max-w-xl">
                {data.corePlatformModulesSection.subtitle}
              </p>

              {/* Tabs Switcher - Exactly matching screenshot without outer container */}
              <div className="flex items-center justify-center gap-4 sm:gap-8 mt-7 sm:mt-8 flex-wrap">
                {data.corePlatformModulesSection.tabs.map((tab) => {
                  const isActive = tab.id === activeTab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`text-[13.5px] sm:text-[14px] transition-all duration-300 font-sans cursor-pointer ${
                        isActive
                          ? "bg-[#2563eb] text-white font-semibold px-6 py-2 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.45)]"
                          : "text-slate-300 hover:text-white font-medium px-2 py-1.5"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Outer Showcase Bento Card */}
            <div className="tour-sol-module-card rounded-[28px] sm:rounded-[36px] bg-[#0c1422]/95 border border-[#1b2b40] p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left: Yellow App Mockup Showcase (7 Cols on LG) */}
                <div className="lg:col-span-7">
                  <TiltCard maxTilt={4} scale={1.01} glare={true} glareOpacity={0.05} className="rounded-2xl">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 bg-[#080e18] border border-[#1b2c42]">
                      <Image
                        key={activeTab.id}
                        src={activeTab.mockupImage}
                        alt={activeTab.label}
                        width={858}
                        height={387}
                        className="w-full h-auto object-cover rounded-2xl transition-opacity duration-300 animate-fadeIn"
                        priority
                      />
                    </div>
                  </TiltCard>
                </div>

                {/* Right: Checklist & Story (5 Cols on LG) */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h3 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight mb-6 font-sans">
                    {activeTab.storyTitle}
                  </h3>

                  <ul className="space-y-4 sm:space-y-5">
                    {activeTab.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#2563eb] shrink-0 mt-1 stroke-[2.5]" />
                        <span className="text-[13.5px] sm:text-[14.5px] text-[#cbd5e1] leading-[1.6] font-sans font-normal">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </section>
      )}

      {/* SECTION 5: CTA BANNER (Launch Your Own Fleet Today) */}
      {data.ctaSection && (
        <section className="w-full bg-[#060c14] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <TiltCard maxTilt={3} scale={1.01} glare={true} glareOpacity={0.06} className="rounded-[24px] sm:rounded-[32px]">
              <div className="rounded-[24px] sm:rounded-[32px] bg-[#0c1422] border border-[#1b2b40] shadow-[0_20px_60px_rgba(0,0,0,0.7)] relative overflow-hidden py-16 sm:py-20 px-6 sm:px-12 flex flex-col items-center text-center group">
                
                {/* Central Soft Indigo/Blue Radial Glow matching screenshot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[680px] h-[320px] sm:h-[420px] bg-gradient-to-r from-blue-600/25 via-indigo-600/30 to-blue-600/25 blur-[120px] pointer-events-none rounded-full" />

                {/* Headline */}
                <h2 className="text-[32px] sm:text-[42px] font-bold text-white tracking-tight leading-tight font-sans relative z-10">
                  {data.ctaSection.title ||
                    (data.ctaSection.heading
                      ? `${data.ctaSection.heading.line1} ${data.ctaSection.heading.line2}`
                      : "Launch Your Own Fleet Today")}
                </h2>

                {/* Subtitle with exact 3-line balanced wrap */}
                <p className="text-[14px] sm:text-[14.5px] text-[#94a3b8] max-w-[560px] mx-auto mt-3.5 mb-8 sm:mb-9 leading-[1.6] font-sans font-normal relative z-10">
                  {data.ctaSection.subtitle}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 relative z-10">
                  <Link
                    href={data.ctaSection.primaryButtonLink || "/#contact-cta"}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-[13.5px] sm:text-[14px] px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.65)] transition-all cursor-pointer active:scale-95 font-sans"
                  >
                    {data.ctaSection.primaryButtonText}
                  </Link>
                  <Link
                    href={data.ctaSection.secondaryButtonLink || "/#contact-cta"}
                    className="bg-[#0e1726]/90 hover:bg-[#14233a] border border-[#1e2f47] text-white font-medium text-[13.5px] sm:text-[14px] px-6 py-2.5 sm:px-7 sm:py-3 rounded-lg transition-all cursor-pointer active:scale-95 font-sans"
                  >
                    {data.ctaSection.secondaryButtonText}
                  </Link>
                </div>

              </div>
            </TiltCard>
          </div>
        </section>
      )}
    </div>
  );
}
