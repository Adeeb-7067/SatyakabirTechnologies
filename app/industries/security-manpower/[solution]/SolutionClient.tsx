"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  FileText,
  Radio,
  Calendar,
  AlertTriangle,
  Video,
  UserCheck,
  CheckSquare,
  ShieldCheck,
  CreditCard,
  MapPin,
  Smartphone,
  Code2,
  QrCode,
  Cpu,
} from "lucide-react";
import { SecuritySolutionData } from "../solutionsData";
import TiltCard from "@/app/components/ui/TiltCard";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Helper for rendering module icons
function getModuleIcon(iconType: string) {
  switch (iconType) {
    case "patrol":
      return <Radio className="w-5 h-5 text-cyan-400" />;
    case "roster":
      return <Calendar className="w-5 h-5 text-cyan-400" />;
    case "sos":
      return <AlertTriangle className="w-5 h-5 text-cyan-400" />;
    case "camera":
      return <Video className="w-5 h-5 text-cyan-400" />;
    case "visitor":
      return <UserCheck className="w-5 h-5 text-cyan-400" />;
    case "checklist":
      return <CheckSquare className="w-5 h-5 text-cyan-400" />;
    case "compliance":
      return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    case "payroll":
      return <CreditCard className="w-5 h-5 text-cyan-400" />;
    default:
      return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
  }
}

// Helper for rendering hardware integration icons
function getIntegrationIcon(iconType: string) {
  switch (iconType) {
    case "maps":
      return <MapPin className="w-5 h-5 text-cyan-400" />;
    case "nfc":
      return <Smartphone className="w-5 h-5 text-cyan-400" />;
    case "code":
      return <Code2 className="w-5 h-5 text-cyan-400" />;
    case "camera":
      return <Video className="w-5 h-5 text-cyan-400" />;
    case "qr":
      return <QrCode className="w-5 h-5 text-cyan-400" />;
    case "sensor":
      return <Cpu className="w-5 h-5 text-cyan-400" />;
    default:
      return <Code2 className="w-5 h-5 text-cyan-400" />;
  }
}

export default function SolutionClient({ data }: { data: SecuritySolutionData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const modulesRef = useRef<HTMLDivElement>(null);
  const hardwareRef = useRef<HTMLDivElement>(null);
  const viewsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Hero Entrance Animations
      if (heroRef.current) {
        gsap.fromTo(
          ".sec-sol-hero-elem",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".sec-sol-kpi-card",
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            delay: 0.2,
            ease: "power2.out",
            clearProps: "all",
          }
        );
      }

      // 2. Core Modules Section ScrollTrigger
      if (modulesRef.current) {
        gsap.fromTo(
          ".sec-sol-module-card",
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: modulesRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 3. Hardware & IoT Section ScrollTrigger
      if (hardwareRef.current) {
        gsap.fromTo(
          ".sec-sol-hw-item",
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: hardwareRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".sec-sol-hw-card",
          { opacity: 0, scale: 0.95, y: 24 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: hardwareRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 4. Platform Views Section ScrollTrigger
      if (viewsRef.current) {
        gsap.fromTo(
          ".sec-sol-platform-card",
          { opacity: 0, y: 36, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.15,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: viewsRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // 5. CTA Section ScrollTrigger
      if (ctaRef.current) {
        gsap.fromTo(
          ".sec-sol-cta-card",
          { opacity: 0, y: 30, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full min-h-screen bg-[#060c14] text-white select-none overflow-x-hidden font-sans"
    >
      {/* =====================================================================
          1. HERO SECTION (Matching User Reference Image Exactly)
      ====================================================================== */}
      <section
        ref={heroRef}
        className="relative pt-8 sm:pt-12 md:pt-14 pb-16 sm:pb-24 overflow-hidden flex flex-col justify-between bg-[#060c14]"
      >
        {/* Soft Background Blue Radial Glow behind Center Title */}
        <div
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[700px] sm:w-[950px] h-[450px] sm:h-[550px] rounded-full opacity-20 blur-[140px] z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(6, 182, 212, 0.25) 45%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col">
          {/* Breadcrumb Navigation: HOME › SECURITY & MEN POWER › CURRENT SOLUTION */}
          <div className="sec-sol-hero-elem flex items-center gap-2 mb-8 sm:mb-10 text-left flex-wrap">
            <Link
              href="/"
              className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#8fa2b8] uppercase hover:text-white transition-colors"
            >
              HOME
            </Link>
            <span className="text-[11px] sm:text-[12px] font-mono text-cyan-500">›</span>
            <Link
              href="/industries/security-manpower"
              className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#8fa2b8] uppercase hover:text-white transition-colors"
            >
              SECURITY & MEN POWER
            </Link>
            <span className="text-[11px] sm:text-[12px] font-mono text-cyan-500">›</span>
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-cyan-400 font-bold uppercase">
              {data.breadcrumbLabel}
            </span>
          </div>

          {/* Centered Top Eyebrow / Version Pill */}
          <div className="sec-sol-hero-elem flex justify-center mb-6 sm:mb-7">
            <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0a1829]/90 border border-[#1e3a63] shadow-[0_0_20px_rgba(30,58,99,0.35)] backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6] shrink-0 animate-pulse" />
              <span className="text-[12px] sm:text-[13px] font-mono tracking-wide text-[#60a5fa] font-medium">
                {data.badgeText}
              </span>
            </div>
          </div>

          {/* Centered Main Headline */}
          <h1 className="sec-sol-hero-elem text-[32px] sm:text-[46px] md:text-[56px] lg:text-[66px] xl:text-[72px] font-bold tracking-tight leading-[1.08] text-center font-[family-name:var(--font-space-grotesk)] max-w-[1050px] mx-auto break-words">
            <span className="block text-white">{data.heroTitle.line1}</span>
            <span className="block text-[#38bdf8] mt-1">{data.heroTitle.line2Blue}</span>
          </h1>

          {/* Centered Subtitle Paragraph */}
          <p className="sec-sol-hero-elem text-center text-[14.5px] sm:text-[16px] md:text-[17px] text-[#94a3b8] leading-[1.7] max-w-[860px] mx-auto font-sans font-normal mt-5 sm:mt-6">
            {data.subtitle}
          </p>

          {/* Action Buttons Row */}
          <div className="sec-sol-hero-elem flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 sm:mt-9">
            {/* View Live Demo -> */}
            <Link
              href={data.demoLink}
              className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white font-semibold text-[14px] sm:text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-[0_0_24px_rgba(37,99,235,0.6)] hover:shadow-[0_0_32px_rgba(37,99,235,0.85)] inline-flex items-center gap-2 transition-all cursor-pointer group active:scale-95 font-sans"
            >
              <span>View Live Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* API Docs */}
            <Link
              href={data.docsLink}
              className="bg-[#0a121e]/90 hover:bg-[#111e30] text-white border border-[#1e2f46] hover:border-cyan-500/50 font-medium text-[14px] sm:text-[14.5px] px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-md inline-flex items-center gap-2.5 transition-all cursor-pointer group active:scale-95 font-sans"
            >
              <FileText className="w-4 h-4 text-[#94a3b8] group-hover:text-cyan-400 transition-colors" />
              <span>API Docs</span>
            </Link>
          </div>

          {/* 3 Bottom Metric / KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-[1240px] mx-auto mt-12 sm:mt-16 w-full">
            {data.metrics.map((metric, idx) => {
              const colorClass =
                metric.color === "blue"
                  ? "text-[#38bdf8]"
                  : metric.color === "green"
                  ? "text-[#34d399]"
                  : "text-white";

              return (
                <div key={idx} className="sec-sol-kpi-card h-full">
                  <TiltCard
                    maxTilt={4}
                    scale={1.015}
                    glare={true}
                    glareOpacity={0.08}
                    className="rounded-2xl h-full"
                  >
                    <div className="rounded-2xl bg-[#0a121e]/85 hover:bg-[#0f1b2c] border border-[#16253b] hover:border-cyan-500/40 p-5 sm:p-7 text-center shadow-lg transition-all group backdrop-blur-sm h-full flex flex-col justify-center items-center">
                      {/\d/.test(metric.value) ? (
                        <AnimatedMetric
                          value={metric.value}
                          className={`text-[30px] sm:text-[36px] md:text-[38px] font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] leading-none mb-2 ${colorClass}`}
                        />
                      ) : (
                        <span
                          className={`text-[30px] sm:text-[36px] md:text-[38px] font-bold tracking-tight font-[family-name:var(--font-space-grotesk)] leading-none mb-2 ${colorClass}`}
                        >
                          {metric.value}
                        </span>
                      )}
                      <span className="text-[12px] sm:text-[13px] text-[#8fa2b8] font-sans font-medium tracking-wide">
                        {metric.label}
                      </span>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. CORE MODULES WE BUILD SECTION (Matching User Reference Image)
      ====================================================================== */}
      <section
        ref={modulesRef}
        className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left"
      >
        {/* Soft Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full opacity-15 blur-[140px] z-0"
          style={{ background: "#0e7490" }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header: Left (Eyebrow + Heading) & Right (Description) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div className="flex flex-col max-w-[680px]">
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
                {data.coreModulesSection.eyebrow}
              </span>
              <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)]">
                {data.coreModulesSection.heading}
              </h2>
            </div>

            <p className="text-[13.5px] sm:text-[14.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans max-w-[440px] text-left md:text-right">
              {data.coreModulesSection.description}
            </p>
          </div>

          {/* 3 Core Modules Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {data.coreModulesSection.modules.map((mod, idx) => (
              <div key={idx} className="sec-sol-module-card h-full">
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glare={true}
                  glareOpacity={0.08}
                  className="rounded-[24px] h-full"
                >
                  <div className="rounded-[24px] bg-[#0c1422]/90 hover:bg-[#0f1a2c] border border-[#1b2b40] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl group h-full">
                    {/* Top Image Preview with Module Pill Overlay */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#070d18]">
                      <Image
                        src={mod.image}
                        alt={mod.title}
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Module Pill Badge on top-left of image */}
                      <div className="absolute top-3.5 left-3.5 bg-[#091524]/85 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded-md text-[10.5px] font-mono tracking-wider font-semibold text-cyan-400 z-10 select-none shadow-md">
                        {mod.moduleNumber}
                      </div>

                      {/* Gradient shade at bottom of image */}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0c1422] to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom Content Area */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                      <div>
                        {/* Icon Container */}
                        <div className="w-10 h-10 rounded-xl bg-[#122236] border border-[#1e3958] flex items-center justify-center mb-4 group-hover:border-cyan-400/50 group-hover:scale-105 transition-all shadow-inner">
                          {getModuleIcon(mod.iconType)}
                        </div>

                        {/* Module Title */}
                        <h3 className="text-[19px] sm:text-[21px] font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-space-grotesk)] mb-2.5">
                          {mod.title}
                        </h3>

                        {/* Module Description */}
                        <p className="text-[13px] sm:text-[13.5px] text-[#93a4b9] leading-[1.65] font-sans font-normal mb-6">
                          {mod.description}
                        </p>
                      </div>

                      {/* Footer Specifications / Highlights Row */}
                      <div className="flex items-center justify-between pt-4 border-t border-[#182a42]/80 text-[11px] sm:text-[11.5px] font-mono text-[#7e92a8]">
                        <span>{mod.specLeft}</span>
                        <span>{mod.specRight}</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. HARDWARE & TECH INTEGRATIONS SECTION (Matching User Reference Image)
      ====================================================================== */}
      <section
        ref={hardwareRef}
        className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left"
      >
        {/* Soft Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-15 blur-[140px] z-0"
          style={{ background: "#0284c7" }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Large Floating Dark Container */}
          <div className="relative w-full rounded-[28px] sm:rounded-[34px] bg-[#0c1422]/90 border border-[#1b2b40] p-6 sm:p-10 md:p-12 overflow-hidden shadow-2xl">
            {/* Inner corner ambient lighting */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-20 blur-[100px] z-0"
              style={{ background: "#06b6d4" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Eyebrow, Heading, Subtitle, 3 Integration Cards */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
                  {data.hardwareIntegrationsSection.eyebrow}
                </span>

                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-3.5">
                  {data.hardwareIntegrationsSection.heading}
                </h2>

                <p className="text-[13.5px] sm:text-[14.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans max-w-[540px] mb-7 sm:mb-8">
                  {data.hardwareIntegrationsSection.subtitle}
                </p>

                {/* 3 Integration Cards Stacked */}
                <div className="flex flex-col gap-3.5 sm:gap-4">
                  {data.hardwareIntegrationsSection.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="sec-sol-hw-item rounded-[18px] sm:rounded-[20px] bg-[#09121f]/90 hover:bg-[#0f1b2c] border border-[#182a40] hover:border-cyan-500/40 p-4 sm:p-5 flex items-start gap-4 transition-all duration-300 group cursor-default shadow-md"
                    >
                      {/* Icon Tile */}
                      <div className="w-11 h-11 rounded-xl bg-[#111e30] border border-[#1d334e] flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400/50 transition-all shadow-inner">
                        {getIntegrationIcon(item.iconType)}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col">
                        <h4 className="text-[15.5px] sm:text-[16.5px] font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-space-grotesk)] mb-1 group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[12px] sm:text-[12.5px] text-[#8fa0b5] leading-[1.6] font-sans font-normal">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Holographic Biometric / IoT Visual Card */}
              <div className="lg:col-span-5 sec-sol-hw-card">
                <TiltCard
                  maxTilt={5}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.08}
                  className="rounded-[24px] sm:rounded-[28px] h-full"
                >
                  <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gradient-to-b from-[#081322] via-[#050f1c] to-[#040a14] border border-[#192b42] shadow-2xl p-5 sm:p-6 flex flex-col justify-between group">
                    {/* Glowing Art Screen */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4 sm:mb-5 border border-cyan-500/20 shadow-inner bg-[#040810]">
                      <Image
                        src={data.hardwareIntegrationsSection.image}
                        alt={data.hardwareIntegrationsSection.heading}
                        width={700}
                        height={525}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Inner glowing edge highlight */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050f1c] via-transparent to-transparent opacity-40 pointer-events-none" />
                    </div>

                    {/* Bottom Protocols Bar matching reference screenshot */}
                    <div className="rounded-xl bg-[#060c16]/95 backdrop-blur-md border border-[#16273d] p-3.5 sm:p-4 text-left shadow-lg">
                      <span className="text-[10px] sm:text-[10.5px] font-mono tracking-[0.2em] font-semibold text-cyan-400 uppercase block mb-1.5">
                        {data.hardwareIntegrationsSection.protocolsLabel}
                      </span>
                      <span className="text-[11.5px] sm:text-[12.5px] font-mono text-[#cbd5e1] font-medium tracking-wide">
                        {data.hardwareIntegrationsSection.protocols}
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. PLATFORM VIEWS SECTION (Matching User Reference Image)
      ====================================================================== */}
      <section
        ref={viewsRef}
        className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left"
      >
        {/* Soft Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-15 blur-[140px] z-0"
          style={{ background: "#0e7490" }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header: Centered Eyebrow, Heading, Subtitle */}
          <div className="max-w-[760px] mx-auto text-center mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
              {data.platformViewsSection.eyebrow}
            </span>

            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-3.5">
              {data.platformViewsSection.heading}
            </h2>

            <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans">
              {data.platformViewsSection.subtitle}
            </p>
          </div>

          {/* 2 Platform Views Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8">
            {data.platformViewsSection.views.map((view, vIdx) => (
              <div key={vIdx} className="sec-sol-platform-card h-full">
                <TiltCard
                  maxTilt={4}
                  scale={1.015}
                  glare={true}
                  glareOpacity={0.06}
                  className="rounded-[28px] sm:rounded-[32px] h-full"
                >
                  <div className="rounded-[28px] sm:rounded-[32px] bg-[#0c1422]/90 hover:bg-[#0f1a2c] border border-[#1b2b40] hover:border-cyan-500/40 p-6 sm:p-8 md:p-9 flex flex-col justify-between shadow-2xl transition-all duration-300 group h-full">
                    {/* Top Header: Eyebrow Pill, Title, Subtitle */}
                    <div className="mb-6">
                      <span className="text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold text-cyan-400 bg-[#091524]/90 border border-cyan-500/30 px-3 py-1 rounded-md mb-3.5 inline-block backdrop-blur-md shadow-sm">
                        {view.pill}
                      </span>

                      <h3 className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-space-grotesk)] mb-2">
                        {view.title}
                      </h3>

                      <p className="text-[13px] sm:text-[14px] text-[#93a4b9] leading-[1.6] font-sans max-w-[460px]">
                        {view.description}
                      </p>
                    </div>

                    {/* Center Visual Mockup Showcase */}
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#070d18] border border-[#18293e] shadow-xl my-4 flex items-center justify-center p-2 group-hover:border-cyan-500/40 transition-colors">
                      <Image
                        src={view.image}
                        alt={view.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover rounded-xl group-hover:scale-102 transition-transform duration-700"
                      />

                      {/* Gradient highlight edge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060c14]/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom Footer Bar */}
                    <div className="pt-5 border-t border-[#182a40]/80 flex flex-wrap items-center justify-between gap-3 text-[11.5px] sm:text-[12px] font-mono text-[#7e92a8]">
                      <span>{view.techStack}</span>

                      <Link
                        href={view.actionLink}
                        className="font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 group/link transition-colors cursor-pointer"
                      >
                        <span>{view.actionText}</span>
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CTA BANNER SECTION (Matching User Reference Image Exactly)
      ====================================================================== */}
      <section
        ref={ctaRef}
        className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-center"
      >
        {/* Soft Ambient Radial Glow behind Center Card */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full opacity-15 blur-[140px] z-0"
          style={{ background: "#0284c7" }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Large Floating Dark CTA Card */}
          <div className="sec-sol-cta-card relative w-full rounded-[28px] sm:rounded-[36px] bg-[#0c1422]/90 border border-[#1b2b40] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center">
            {/* Subtle Cyan Inner Ambient Glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-25 blur-[110px] z-0"
              style={{ background: "#06b6d4" }}
              aria-hidden="true"
            />

            <div className="relative z-10 max-w-[880px] mx-auto flex flex-col items-center">
              {/* Centered Eyebrow Pill */}
              <div className="mb-5 sm:mb-6">
                <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.22em] font-semibold text-[#38bdf8] uppercase px-4 sm:px-5 py-1.5 rounded-full bg-[#0a1829]/90 border border-[#1e3a63] shadow-md inline-block">
                  {data.ctaSection.pill}
                </span>
              </div>

              {/* Centered Headline */}
              <h2 className="text-[30px] sm:text-[42px] md:text-[50px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-4 sm:mb-5">
                <span className="block">{data.ctaSection.heading.line1}</span>
                <span className="block text-white">{data.ctaSection.heading.line2}</span>
              </h2>

              {/* Subtitle Paragraph */}
              <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans max-w-[700px] mb-8 sm:mb-10">
                {data.ctaSection.subtitle}
              </p>

              {/* 2 Centered Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full">
                {/* Primary Button */}
                <Link
                  href={data.ctaSection.primaryButtonLink}
                  className="bg-gradient-to-r from-[#2563eb] to-[#3b82f6] hover:from-[#1d4ed8] hover:to-[#2563eb] text-white font-semibold text-[14px] sm:text-[14.5px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-[0_0_28px_rgba(37,99,235,0.6)] hover:shadow-[0_0_36px_rgba(37,99,235,0.85)] inline-flex items-center justify-center transition-all cursor-pointer active:scale-95 font-sans"
                >
                  <span>{data.ctaSection.primaryButtonText}</span>
                </Link>

                {/* Secondary Button */}
                <Link
                  href={data.ctaSection.secondaryButtonLink}
                  className="bg-[#0a121e]/90 hover:bg-[#111e30] text-white border border-[#1e2f46] hover:border-cyan-500/50 font-medium text-[14px] sm:text-[14.5px] px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-md inline-flex items-center justify-center transition-all cursor-pointer active:scale-95 font-sans"
                >
                  <span>{data.ctaSection.secondaryButtonText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
