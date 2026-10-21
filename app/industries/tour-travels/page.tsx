"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Calendar,
  Briefcase,
  Layers,
  Heart,
  Globe,
  Plane,
  Car,
  Compass,
  MapPin,
  ShieldCheck,
  Zap,
  Navigation,
  AlertTriangle,
  Clock,
  Video,
  FileCheck,
  Search,
  BarChart3,
  Check,
  Eye,
  Activity,
  Users,
  Target,
} from "lucide-react";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";
import TiltCard from "@/app/components/ui/TiltCard";
import MobilityEcosystemHighway from "@/app/components/ui/MobilityEcosystemHighway";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 4 Bottom Key Metrics matching user reference screenshot
const tourStatsData = [
  {
    value: "120+",
    label: "Agri Platforms Delivered",
    icon: <Briefcase className="w-5 h-5 text-white" />,
    gradient: "from-teal-400 via-cyan-500 to-amber-400",
  },
  {
    value: "12,000+",
    label: "Farmers Onboarded",
    icon: <Layers className="w-5 h-5 text-white" />,
    gradient: "from-teal-400 via-cyan-500 to-orange-400",
  },
  {
    value: "98%",
    label: "Client Retention",
    icon: <Heart className="w-5 h-5 text-white" />,
    gradient: "from-teal-400 via-cyan-500 to-rose-400",
  },
  {
    value: "40+",
    label: "Districts Covered",
    icon: <Globe className="w-5 h-5 text-white" />,
    gradient: "from-cyan-400 via-teal-400 to-emerald-400",
  },
];

// Horizontal Feature Pills matching user reference screenshot exactly
const tourFeaturePills = [
  "AI Moderation",
  "Live Streaming",
  "Scalable & Secure",
  "1-to-1 Video Calls",
  "Dating & Social Discovery",
  "100% Code Ownership & Git Handover",
  "AI Dispatch & Routing",
  "Live GPS Fleet Tracking",
  "Multi-Currency & GDS",
  "Customer & Driver Apps",
];

// 6 Core Platforms matching "OUR POWERFUL PLATFORMS" section screenshot
const powerfulPlatforms = [
  {
    id: "taxi-booking",
    title: "Taxi Booking Platform",
    description:
      "Customer app, driver app, admin panel, live tracking, payments and more.",
    href: "/industries/tour-travels/taxi-booking",
  },
  {
    id: "travel-agency",
    title: "Travel Agency Platform",
    description:
      "Flight, hotel, holiday packages, visa support and travel management.",
    href: "/industries/tour-travels/travel-agency",
  },
  {
    id: "outstation-taxi",
    title: "Outstation Taxi Platform",
    description:
      "One-way, round-trip, intercity and outstation bookings..",
    href: "/industries/tour-travels/outstation-taxi",
  },
  {
    id: "car-rental",
    title: "Car Rental Platform",
    description:
      "Self-drive and chauffeur-driven rentals for short and long duration..",
    href: "/industries/tour-travels/car-rental",
  },
  {
    id: "corporate-mobility",
    title: "Corporate Mobility Solutions",
    description:
      "Employee travel, corporate billing, multi-city management and reporting.",
    href: "/industries/tour-travels/corporate-mobility",
  },
  {
    id: "tour-holiday-packages",
    title: "Tour & Holiday Packages",
    description:
      "Domestic and international tour packages with booking and itinerary management.",
    href: "/industries/tour-travels/tour-holiday-packages",
  },
];

// Case Study Data matching reference screenshot exactly
const caseStudyData = {
  narrative: [
    {
      title: "The Problem",
      description:
        "A regional cab operator relied on manual phone dispatch with no live tracking, causing long wait times and zero visibility into driver locations.",
    },
    {
      title: "The Solution",
      description:
        "A full-stack platform with customer & driver apps, a dynamic pricing engine, live GPS tracking, and an admin dashboard for fleet operations.",
    },
    {
      title: "The Impact",
      description:
        "Dispatch went from manual phone calls to automated nearest-driver assignment within seconds of booking.",
    },
  ],
  metrics: [
    {
      label: "Active Drivers",
      value: "850+",
    },
    {
      label: "Faster Dispatch Time",
      value: "60%",
    },
    {
      label: "App Store Rating",
      value: "4.7★",
    },
  ],
};

// 10 Key Features matching reference design
const keyFeatures = [
  { number: "01", title: "Geo Attendance", icon: <MapPin className="w-4 h-4 text-cyan-400" /> },
  { number: "01", title: "Live Tracking", icon: <Navigation className="w-4 h-4 text-cyan-400" /> },
  { number: "01", title: "Incident Reporting", icon: <AlertTriangle className="w-4 h-4 text-cyan-400" /> },
  { number: "06", title: "Patrolling Mgmt", icon: <Clock className="w-4 h-4 text-cyan-400" /> },
  { number: "05", title: "CCTV Integration", icon: <Video className="w-4 h-4 text-cyan-400" /> },
  { number: "02", title: "Shift & Roster", icon: <Layers className="w-4 h-4 text-cyan-400" /> },
  { number: "03", title: "Payroll & Legal", icon: <FileCheck className="w-4 h-4 text-cyan-400" /> },
  { number: "04", title: "Client Portal", icon: <Search className="w-4 h-4 text-cyan-400" /> },
  { number: "04", title: "AMC Management", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
  { number: "04", title: "Report & Analytic", icon: <BarChart3 className="w-4 h-4 text-cyan-400" /> },
];

// 3 Popular Platform Screens matching reference screenshot
const popularScreens = [
  {
    id: "tour-travels",
    title: "Tour & Travels app",
    image: "/images/tour-popular-screen-1.png",
    alt: "Tour & Travels Mobile App Screen - Satyakabir Technologies",
  },
  {
    id: "ride-booking",
    title: "Ride Booking App",
    image: "/images/tour-popular-screen-2.png",
    alt: "Ride Booking Mobile App Interface - Satyakabir Technologies",
  },
  {
    id: "cab-booking",
    title: "Cab Booking App",
    image: "/images/tour-popular-screen-3.png",
    alt: "Cab Booking Mobile App with Real-Time Tracking - Satyakabir Technologies",
  },
];

// 7-Step Development Process matching reference screenshot
const processSteps = [
  { number: "1", label: "Discover" },
  { number: "2", label: "Strategy" },
  { number: "3", label: "UI/UX" },
  { number: "4", label: "Development" },
  { number: "5", label: "Testing" },
  { number: "6", label: "Deployment" },
  { number: "7", label: "Support" },
];

// Security Checklist for Safe. Smart. Social. card
const securityChecklist = [
  "AI Content Moderation",
  "User Reporting",
  "Fraud Detection",
  "Secure Payments",
  "Real-Time Monitoring",
  "Data Privacy & Compliance",
];

// 4 Bottom Outcome Benefits matching reference screenshot
const ctaBenefits = [
  {
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
    title: "Reduce Manual Work",
  },
  {
    icon: <Target className="w-5 h-5 text-cyan-400" />,
    title: "Improve Accountability",
  },
  {
    icon: <Activity className="w-5 h-5 text-cyan-400" />,
    title: "Increase Efficiency",
  },
  {
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    title: "Build Client Trust",
  },
];

export default function TourTravelsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (heroRef.current) {
        gsap.fromTo(
          ".tour-hero-elem",
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
          ".tour-hero-visual",
          { opacity: 0, scale: 0.95, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.15,
            clearProps: "all",
          }
        );

        // Animate Platforms section cards on scroll
        gsap.fromTo(
          ".platform-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".platforms-grid",
              start: "top 85%",
            },
            clearProps: "all",
          }
        );

        // Animate Case Study Narrative & Nodes on Scroll
        gsap.fromTo(
          ".case-study-narrative",
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".case-study-section",
              start: "top 80%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".case-study-node",
          { opacity: 0, scale: 0.9, x: 20 },
          {
            opacity: 1,
            scale: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".case-study-section",
              start: "top 75%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".case-study-card",
          { opacity: 0, scale: 0.94, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".case-study-section",
              start: "top 75%",
            },
            clearProps: "all",
          }
        );

        // Animate Complete Mobility Ecosystem on Scroll
        gsap.fromTo(
          ".ecosystem-header",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".ecosystem-section",
              start: "top 80%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".ecosystem-highway",
          { opacity: 0, scale: 0.96 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".ecosystem-highway",
              start: "top 85%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".ecosystem-features-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".ecosystem-features-card",
              start: "top 95%",
            },
            clearProps: "all",
          }
        );

        // Animate Popular Platform Screens Section on Scroll
        gsap.fromTo(
          ".screens-text-elem",
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".popular-screens-section",
              start: "top 85%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".popular-screen-card",
          { opacity: 0, y: 35, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".popular-screens-section",
              start: "top 85%",
            },
            clearProps: "all",
          }
        );

        // Animate Development Process & Security Section
        gsap.from(
          ".process-step-item",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".process-section",
              start: "top 90%",
            },
          }
        );

        gsap.from(
          ".safe-smart-card",
          {
            opacity: 0,
            scale: 0.96,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".process-section",
              start: "top 90%",
            },
          }
        );

        // Animate Bottom CTA Section
        gsap.from(
          ".bottom-cta-text",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".bottom-cta-section",
              start: "top 90%",
            },
          }
        );

        gsap.from(
          ".cta-outcome-card",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".bottom-cta-section",
              start: "top 90%",
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
      className="w-full bg-[#060c14] text-white select-none overflow-x-hidden min-h-screen font-sans"
    >
      {/* Inline styles for continuous seamless marquee ticker */}
      <style>{`
        @keyframes tourPillScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .tour-pill-marquee {
          display: flex;
          width: max-content;
          animation: tourPillScroll 35s linear infinite;
          will-change: transform;
        }
        .tour-pill-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* =========================================================================
          HERO SECTION (Matching user reference screenshot exactly)
      ========================================================================== */}
      <section
        ref={heroRef}
        className="relative pt-8 sm:pt-12 md:pt-16 pb-0 overflow-hidden flex flex-col justify-between"
        style={{
          background:
            "radial-gradient(ellipse at 75% 35%, rgba(14, 116, 144, 0.22) 0%, rgba(8, 47, 73, 0.15) 30%, #060c14 70%)",
        }}
      >
        {/* Soft Background Cyan Radial Glow behind right visual */}
        <div
          className="pointer-events-none absolute right-10 top-16 w-[500px] sm:w-[750px] h-[400px] sm:h-[550px] rounded-full opacity-25 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.5) 0%, rgba(14, 116, 144, 0.25) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2 sm:pt-4">
            {/* Left Column: Breadcrumb, Eyebrow, Main Title, Subtitle, CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col text-left">
              {/* Breadcrumb: HOME › TOUR & TRAVELS */}
              <div className="tour-hero-elem flex items-center gap-2 mb-5 sm:mb-6">
                <Link
                  href="/"
                  className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#8fa2b8] uppercase hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <span className="text-[11px] sm:text-[12px] font-mono text-[#4a5f78]">›</span>
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#cbd5e1] font-semibold uppercase">
                  TOUR &amp; TRAVELS
                </span>
              </div>

              {/* Eyebrow: EXPLORE • EXPERIENCE • ENJOY */}
              <div className="tour-hero-elem mb-4 sm:mb-5">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] font-semibold text-[#cbd5e1] uppercase">
                  EXPLORE &bull; EXPERIENCE &bull; ENJOY
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="tour-hero-elem text-[38px] sm:text-[50px] md:text-[58px] lg:text-[64px] xl:text-[70px] font-bold text-white tracking-[-0.035em] leading-[1.06] font-[family-name:var(--font-space-grotesk)]">
                <span className="block">Mobility Solutions</span>
                <span className="block text-white">for a Connected World</span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="tour-hero-elem text-[14px] sm:text-[15.5px] md:text-[16px] text-[#93a4b9] leading-[1.65] max-w-[580px] font-normal mt-5 sm:mt-6 font-sans">
                From local rides to global travel, Satyakabir Technologies builds
                end-to-end taxi booking and travel platforms with customer apps,
                driver apps, web portals and powerful admin systems — powered by
                AI, automation and cloud.
              </p>

              {/* Action Buttons Row */}
              <div className="tour-hero-elem mt-8 sm:mt-10 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* Build Your Platform -> */}
                <Link
                  href="/#contact-cta"
                  className="bg-gradient-to-r from-[#0052d4] via-[#0062ff] to-[#00b4d8] hover:from-[#0047ba] hover:to-[#0096c7] text-white font-medium text-[13.5px] sm:text-[14px] px-6 sm:px-7 py-3 rounded-full shadow-[0_0_24px_rgba(0,98,255,0.55)] hover:shadow-[0_0_32px_rgba(0,98,255,0.8)] inline-flex items-center gap-2 transition-all cursor-pointer group active:scale-95 font-sans"
                >
                  <span>Build Your Platform</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Discuss Your Project */}
                <Link
                  href="/#contact-cta"
                  className="bg-[#0b1422]/90 hover:bg-[#122036] text-white border border-[#1e2f46] hover:border-cyan-500/50 text-[13.5px] sm:text-[14px] font-medium px-6 sm:px-7 py-3 rounded-full transition-all shadow-md cursor-pointer group active:scale-95 inline-flex items-center gap-2.5 font-sans"
                >
                  <Calendar className="w-4 h-4 text-cyan-400 group-hover:scale-105 transition-transform" />
                  <span>Discuss Your Project</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase (Exact 3D Artwork floating seamlessly) */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="tour-hero-visual relative w-full max-w-[560px]">
                {/* Soft Ambient Cyan/Teal Radial Glow directly behind the artwork */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] sm:w-[500px] h-[440px] sm:h-[500px] rounded-full opacity-40 blur-[100px] z-0"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(2, 132, 199, 0.3) 45%, transparent 75%)",
                  }}
                  aria-hidden="true"
                />

                <TiltCard
                  maxTilt={5}
                  scale={1.02}
                  glare={false}
                  className="relative z-10 w-full"
                >
                  <div className="relative w-full aspect-[1060/960] flex items-center justify-center group drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                    <Image
                      src="/images/tour-hero-artwork-exact.png"
                      alt="Mobility Solutions for a Connected World - Satyakabir Technologies"
                      width={1060}
                      height={960}
                      priority
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{
                        maskImage:
                          "radial-gradient(ellipse 90% 86% at 50% 50%, black 72%, transparent 100%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse 90% 86% at 50% 50%, black 72%, transparent 100%)",
                      }}
                    />
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>

          {/* Marquee Ticker of Feature Pills (Matching screenshot exactly) */}
          <div className="tour-hero-elem mt-12 sm:mt-16 w-full overflow-hidden py-1">
            <div className="relative w-full overflow-hidden">
              {/* Left & Right Edge Fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#060c14] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#060c14] to-transparent z-10" />

              <div className="tour-pill-marquee flex items-center gap-2.5 sm:gap-3">
                {[...tourFeaturePills, ...tourFeaturePills].map((pill, pIdx) => (
                  <div
                    key={pIdx}
                    className="bg-[#091322]/90 border border-[#17273d] text-[#8fa2b8] text-[11.5px] sm:text-[12px] font-mono tracking-wide px-4 py-1.5 rounded-full flex items-center gap-2 shrink-0 select-none hover:border-cyan-500/50 hover:text-white transition-all shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-[#0088ff] shadow-[0_0_8px_#0088ff]" />
                    <span>{pill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Bottom Key Metrics Stats Bar (Matching user screenshot exactly) */}
        <div className="w-full border-t border-[#132032] bg-[#040810]/95 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12">
          <div className="max-w-[1340px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
              {tourStatsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="tour-hero-elem flex items-center gap-3.5 sm:gap-4 group cursor-default"
                >
                  {/* Gradient Circle Icon matching Figma colors */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.gradient} shadow-md shadow-black/60 shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Number & Label */}
                  <div className="flex flex-col text-left">
                    <AnimatedMetric
                      value={stat.value}
                      className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-white tracking-tight leading-none font-[family-name:var(--font-space-grotesk)]"
                    />
                    <span className="text-[12px] sm:text-[12.5px] text-[#8fa2b8] font-medium leading-tight mt-1.5 font-sans">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR POWERFUL PLATFORMS (Matching reference screenshot exactly)
      ========================================================================== */}
      <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#060c14] overflow-hidden">
        {/* Soft radial ambient glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[650px] h-[300px] rounded-full opacity-15 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 116, 144, 0.4) 0%, rgba(29, 78, 216, 0.25) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          {/* Section Heading with flanking horizontal lines: —— OUR POWERFUL PLATFORMS —— */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            <div className="h-[1px] flex-1 max-w-[200px] sm:max-w-[280px] bg-gradient-to-r from-transparent via-[#1e324a] to-[#334b6e]" />
            <h2 className="text-[18px] sm:text-[22px] md:text-[25px] font-bold text-white tracking-[0.22em] uppercase font-[family-name:var(--font-space-grotesk)] text-center select-none whitespace-nowrap">
              OUR POWERFUL PLATFORMS
            </h2>
            <div className="h-[1px] flex-1 max-w-[200px] sm:max-w-[280px] bg-gradient-to-l from-transparent via-[#1e324a] to-[#334b6e]" />
          </div>

          {/* 6-Card Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
          <div className="platforms-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {powerfulPlatforms.map((platform) => (
              <div
                key={platform.id}
                className="platform-card group relative bg-[#070e1a]/95 hover:bg-[#0a1424] border border-[#142337] hover:border-[#2563eb]/70 rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(29,78,216,0.18)]"
              >
                {/* Subtle top-right corner glow on hover */}
                <div className="pointer-events-none absolute -right-8 -top-8 w-24 h-24 rounded-full bg-blue-500/0 group-hover:bg-blue-500/10 blur-xl transition-all duration-500" />

                <div>
                  {/* Circular Blue Badge with Airplane Icon */}
                  <div className="w-10 h-10 rounded-full bg-[#1d4ed8] border-2 border-white/50 flex items-center justify-center mb-5 shadow-[0_0_14px_rgba(29,78,216,0.55)] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Plane className="w-4 h-4 text-white fill-white/20" />
                  </div>

                  {/* Platform Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight mb-2.5 font-[family-name:var(--font-space-grotesk)] leading-snug">
                    {platform.title}
                  </h3>

                  {/* Platform Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#7d90a4] leading-[1.65] font-normal font-sans">
                    {platform.description}
                  </p>
                </div>

                {/* Learn More Link with Hover Arrow Shift */}
                <div className="pt-6 mt-auto">
                  <Link
                    href={platform.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2563eb] group-hover:text-[#38bdf8] transition-colors font-sans group/link cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CASE STUDY (Matching user reference screenshot exactly)
      ========================================================================== */}
      <section className="case-study-section relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#060c14] overflow-hidden">
        <div className="max-w-[1080px] mx-auto relative z-10">
          {/* Section Heading with flanking horizontal lines: —— CASE STUDY —— */}
          <div className="flex items-center justify-center gap-5 sm:gap-6 mb-16 sm:mb-20">
            <div className="w-16 sm:w-28 md:w-36 h-[1px] bg-[#1a283c]" />
            <h2 className="text-[17px] sm:text-[19px] md:text-[21px] font-bold text-white tracking-[0.25em] uppercase font-[family-name:var(--font-space-grotesk)] text-center select-none whitespace-nowrap">
              CASE STUDY
            </h2>
            <div className="w-16 sm:w-28 md:w-36 h-[1px] bg-[#1a283c]" />
          </div>

          {/* Synchronized 3-Row Layout: Left Narrative, Center Timeline, Right Card */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-10 lg:gap-8">
            {/* Left Column: Narrative (3 blocks flexed to align with the 3 nodes) */}
            <div className="flex-1 flex flex-col justify-between max-w-[440px] space-y-8 lg:space-y-0 text-left">
              {/* Block 1: The Problem */}
              <div className="case-study-narrative flex flex-col">
                <h3 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-white tracking-tight mb-2 font-[family-name:var(--font-space-grotesk)]">
                  The Problem
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#8495a7] leading-[1.65] font-normal font-sans">
                  A regional cab operator relied on manual phone dispatch with no live tracking, causing long wait times and zero visibility into driver locations.
                </p>
              </div>

              {/* Block 2: The Solution */}
              <div className="case-study-narrative flex flex-col">
                <h3 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-white tracking-tight mb-2 font-[family-name:var(--font-space-grotesk)]">
                  The Solution
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#8495a7] leading-[1.65] font-normal font-sans">
                  A full-stack platform with customer &amp; driver apps, a dynamic pricing engine, live GPS tracking, and an admin dashboard for fleet operations.
                </p>
              </div>

              {/* Block 3: The Impact */}
              <div className="case-study-narrative flex flex-col">
                <h3 className="text-[17px] sm:text-[18px] md:text-[19px] font-bold text-white tracking-tight mb-2 font-[family-name:var(--font-space-grotesk)]">
                  The Impact
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-[#8495a7] leading-[1.65] font-normal font-sans">
                  Dispatch went from manual phone calls to automated nearest-driver assignment within seconds of booking.
                </p>
              </div>
            </div>

            {/* Middle & Right: Timeline & Card synced */}
            <div className="flex items-center gap-6 sm:gap-8 shrink-0">
              {/* Vertical Timeline with 3 Metrics */}
              <div className="relative flex flex-col justify-between h-[380px] sm:h-[420px] md:h-[450px] shrink-0 py-2">
                {/* Continuous Vertical Connecting Line */}
                <div className="absolute right-[5px] top-3 bottom-3 w-[1px] bg-[#1a293d]" />

                {/* Node 1: Active Drivers */}
                <div className="case-study-node relative flex items-center justify-end gap-3.5 sm:gap-4">
                  <div className="flex flex-col text-right">
                    <span className="text-[11.5px] sm:text-[12px] text-[#718295] font-medium leading-none mb-1.5 font-sans whitespace-nowrap">
                      Active Drivers
                    </span>
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-white leading-none font-[family-name:var(--font-space-grotesk)]">
                      850+
                    </span>
                  </div>
                  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.95)] shrink-0 ring-4 ring-[#060c14]" />
                </div>

                {/* Node 2: Faster Dispatch Time */}
                <div className="case-study-node relative flex items-center justify-end gap-3.5 sm:gap-4">
                  <div className="flex flex-col text-right">
                    <span className="text-[11.5px] sm:text-[12px] text-[#718295] font-medium leading-none mb-1.5 font-sans whitespace-nowrap">
                      Faster Dispatch Time
                    </span>
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-white leading-none font-[family-name:var(--font-space-grotesk)]">
                      60%
                    </span>
                  </div>
                  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.95)] shrink-0 ring-4 ring-[#060c14]" />
                </div>

                {/* Node 3: App Store Rating */}
                <div className="case-study-node relative flex items-center justify-end gap-3.5 sm:gap-4">
                  <div className="flex flex-col text-right">
                    <span className="text-[11.5px] sm:text-[12px] text-[#718295] font-medium leading-none mb-1.5 font-sans whitespace-nowrap">
                      App Store Rating
                    </span>
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold text-white leading-none font-[family-name:var(--font-space-grotesk)]">
                      4.7★
                    </span>
                  </div>
                  <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.95)] shrink-0 ring-4 ring-[#060c14]" />
                </div>
              </div>

              {/* Right Card: Exact Card Mockup */}
              <div className="case-study-card relative w-[230px] sm:w-[260px] md:w-[280px] shrink-0">
                <TiltCard maxTilt={4} scale={1.01} glare={false} className="w-full">
                  <div className="relative rounded-[24px] sm:rounded-[26px] overflow-hidden border border-[#1a283c] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
                    <Image
                      src="/images/tour-case-study-card.png"
                      alt="Taxi & Mobility Platform Case Study - Satyakabir Technologies"
                      width={748}
                      height={1000}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: COMPLETE MOBILITY ECOSYSTEM & KEY FEATURES (Matching screenshot)
      ========================================================================== */}
      <section className="ecosystem-section relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#060c14] overflow-hidden">
        {/* Soft radial ambient background glow */}
        <div
          className="pointer-events-none absolute right-10 top-20 w-[600px] h-[350px] rounded-full opacity-20 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 116, 144, 0.4) 0%, rgba(29, 78, 216, 0.25) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto relative z-10">
          {/* Top Header: Title, Subtitle & Neon Cyan Bar */}
          <div className="ecosystem-header flex flex-col text-left max-w-[650px] mb-4 sm:mb-6">
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold text-white tracking-[-0.03em] leading-[1.08] font-[family-name:var(--font-space-grotesk)]">
              <span className="block">Complete Mobility</span>
              <span className="block text-white">Ecosystem</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#8fa2b8] mt-3 font-normal font-sans">
              All stakeholders connected in one powerful platform.
            </p>

            {/* Glowing cyan/blue underline accent bar matching Figma */}
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.85)] mt-3.5" />
          </div>

          {/* 3D Diagonal Highway - Built Purely in Code (SVG & CSS, No Image) */}
          <div className="ecosystem-highway relative w-full my-2 sm:my-4">
            <MobilityEcosystemHighway />
          </div>

          {/* =========================================================================
              KEY FEATURES CONTAINER CARD (Matching security-manpower & screenshot)
          ========================================================================== */}
          <div className="ecosystem-features-card relative rounded-3xl bg-[#09121f]/90 border border-[#16273d] p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl mt-8 sm:mt-12">
            {/* Subtle Cyan/Blue Backlight inside Container */}
            <div
              className="pointer-events-none absolute -left-20 -top-20 w-72 h-72 rounded-full opacity-15 blur-[90px] z-0"
              style={{ background: "#2563eb" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              {/* Left Column: Eyebrow, Heading, Button */}
              <div className="lg:col-span-3 xl:col-span-3 flex flex-col justify-center text-left">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
                  OUR MODEL
                </span>

                <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-6 sm:mb-7">
                  Key Features
                </h3>

                <Link
                  href="/#contact-cta"
                  className="w-fit bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7] hover:from-[#1e40af] hover:to-[#0369a1] text-white font-semibold text-[12px] sm:text-[12.5px] tracking-wide uppercase px-5 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-[0_0_22px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_rgba(37,99,235,0.85)] inline-flex items-center gap-2 group transition-all cursor-pointer font-sans active:scale-95"
                >
                  <span>START PROJECT NOW</span>
                  <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </Link>
              </div>

              {/* Right Column: 10 Feature Pill Cards (5 columns x 2 rows on desktop) */}
              <div className="lg:col-span-9 xl:col-span-9">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                  {keyFeatures.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2.5 bg-[#0a121e]/90 hover:bg-[#101c2d] border border-[#1b2b40] hover:border-cyan-500/50 p-2 sm:p-2.5 rounded-xl transition-all group cursor-pointer shadow-sm min-w-0"
                    >
                      {/* Icon Container */}
                      <div className="w-7 h-7 rounded-lg bg-[#142338] border border-[#1e3450] flex items-center justify-center shrink-0 text-cyan-400 group-hover:scale-105 transition-transform">
                        {feat.icon}
                      </div>

                      {/* Number & Title */}
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-[9px] sm:text-[9.5px] font-mono text-slate-400 leading-none mb-1">
                          {feat.number}
                        </span>
                        <span className="text-[11px] sm:text-[11.5px] font-semibold text-white leading-tight group-hover:text-cyan-300 transition-colors font-sans whitespace-normal">
                          {feat.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR POPULAR PLATFORM WITH AMAZING SCREENS (Matching screenshot)
      ========================================================================== */}
      <section className="popular-screens-section relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#060c14] overflow-hidden">
        {/* Soft Ambient Glows in background */}
        <div
          className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-[550px] h-[350px] rounded-full opacity-15 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Eyebrow, Main Headline, Subtitle, Gradient CTA Button */}
            <div className="lg:col-span-5 flex flex-col text-left">
              {/* Eyebrow: FEATURED DESTINATIONS */}
              <div className="screens-text-elem mb-3 sm:mb-4">
                <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.18em] text-[#2563eb] uppercase">
                  FEATURED DESTINATIONS
                </span>
              </div>

              {/* Main Headline - Matching Reference Font Family (Geist/Inter clean sans) & Sizes */}
              <h2 className="screens-text-elem text-[30px] sm:text-[36px] md:text-[42px] lg:text-[46px] font-bold text-white tracking-[-0.025em] leading-[1.12] font-sans mb-4 sm:mb-5">
                <span className="block">Our Popular Platform</span>
                <span className="block text-white">With Amazing Screens</span>
              </h2>

              {/* Subtitle Paragraph - Exact 3-line balanced wrap */}
              <p className="screens-text-elem text-[13px] sm:text-[14px] text-[#8292a4] leading-[1.6] max-w-[380px] font-normal font-sans mb-7 sm:mb-9">
                Explore our handpicked Screens and take advantage of exclusive deals on flights, hotels and tour packages.
              </p>

              {/* Multi-Gradient CTA Button: Blue -> Emerald -> Orange */}
              <div className="screens-text-elem">
                <Link
                  href="/#contact-cta"
                  className="w-fit bg-gradient-to-r from-[#2563eb] via-[#10b981] to-[#ea580c] hover:from-[#1d4ed8] hover:via-[#059669] hover:to-[#c2410c] text-white font-medium text-[12.5px] sm:text-[13px] px-6 sm:px-7 py-3 rounded-full shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(234,88,12,0.65)] hover:scale-105 inline-flex items-center gap-2.5 transition-all cursor-pointer font-sans active:scale-95 group"
                >
                  <span>View All Destinations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: 3 Screen Cards Side-by-Side */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
                {popularScreens.map((screen) => (
                  <div key={screen.id} className="popular-screen-card">
                    <TiltCard maxTilt={5} scale={1.02} glare={false} className="w-full h-full">
                      <div className="relative rounded-[22px] sm:rounded-[26px] overflow-hidden border border-[#1e2f46] hover:border-cyan-500/50 transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.85)] group cursor-pointer bg-[#0a1424]">
                        <Image
                          src={screen.image}
                          alt={screen.alt}
                          width={393}
                          height={477}
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: OUR DEVELOPMENT PROCESS & SAFE. SMART. SOCIAL.
      ========================================================================== */}
      <section className="process-section relative w-full pt-16 sm:pt-20 pb-12 sm:pb-16 bg-[#060c14] overflow-hidden text-left">
        {/* Soft Ambient Radial Glow */}
        <div
          className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[450px] h-[300px] rounded-full opacity-10 blur-[120px] bg-cyan-500"
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Our Development Process Flow */}
            <div className="lg:col-span-7 xl:col-span-8 text-left">
              <h3 className="text-[26px] sm:text-[30px] md:text-[34px] font-bold text-white tracking-tight leading-[1.15] font-sans mb-7 sm:mb-8">
                Our Development Process
              </h3>

              <div className="flex items-start justify-between gap-1 sm:gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none">
                {processSteps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className="process-step-item flex flex-col items-center text-center shrink-0 min-w-[50px] sm:min-w-[62px]">
                      {/* Step Number Square */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] bg-[#0c1424] border border-[#1e2f46] hover:border-cyan-400 flex items-center justify-center text-white font-bold text-[14px] sm:text-[15px] shadow-md transition-all font-sans">
                        {step.number}
                      </div>
                      {/* Step Label */}
                      <span className="text-[11.5px] sm:text-[12.5px] text-[#93a4b9] font-medium mt-3 whitespace-nowrap font-sans">
                        {step.label}
                      </span>
                    </div>

                    {/* Blue connector line (not after final step) */}
                    {sIdx < processSteps.length - 1 && (
                      <div className="h-[2px] flex-1 min-w-[10px] max-w-[36px] bg-[#1d4ed8] sm:bg-gradient-to-r sm:from-blue-600 sm:to-cyan-500 mt-5 sm:mt-5.5 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: Safe. Smart. Social. Glassmorphic Card */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="safe-smart-card">
                <TiltCard
                  maxTilt={6}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.08}
                  className="h-full rounded-[22px]"
                >
                  <div className="bg-[#081320]/95 hover:bg-[#0a1728] border border-cyan-500/40 hover:border-cyan-400/70 rounded-[22px] p-6 sm:p-7 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-all">
                    
                    {/* Top Shield Header */}
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-[18px] sm:text-[19px] font-bold text-white tracking-tight leading-tight font-sans">
                          Safe. Smart. Social.
                        </h4>
                        <p className="text-[11.5px] sm:text-[12px] text-[#8fa2b8] leading-tight mt-0.5 font-sans">
                          Enterprise grade security for your members
                        </p>
                      </div>
                    </div>

                    {/* 2-Column Checklist */}
                    <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2.5 pt-4 border-t border-[#142337]">
                      {securityChecklist.map((sec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-[#cbd5e1] font-sans">
                          <span className="w-3.5 h-3.5 rounded-[4px] border border-cyan-500/70 bg-cyan-950/50 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 text-cyan-400" />
                          </span>
                          <span className="whitespace-normal leading-tight font-sans">{sec}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </TiltCard>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: BOTTOM CTA: LET'S BUILD A SMARTER, SAFER OPERATION TOGETHER
      ========================================================================== */}
      <section className="bottom-cta-section relative w-full pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#060c14] overflow-hidden text-left">
        {/* Soft Ambient Radial Glow behind the right cards */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 w-[550px] h-[500px] rounded-full opacity-15 blur-[140px] bg-[#0d9488]"
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle, Buttons */}
            <div className="bottom-cta-text lg:col-span-6 flex flex-col justify-center text-left">
              <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-white tracking-[-0.02em] leading-[1.12] font-sans mb-4">
                Let&apos;s Build a Smarter, Safer Operation{" "}
                <span className="text-[#38bdf8]">Together.</span>
              </h2>

              <p className="text-[13.5px] sm:text-[14.5px] text-[#8fa2b8] font-normal leading-[1.65] font-sans max-w-[460px] mb-8">
                Get a customized solution for your security, manpower or CCTV business with our expert team.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/#contact-cta"
                  className="bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7] hover:from-[#1e40af] hover:to-[#0369a1] text-white font-medium text-[13px] sm:text-[13.5px] px-6 py-3.5 rounded-[10px] shadow-[0_0_22px_rgba(37,99,235,0.45)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] inline-flex items-center gap-2 transition-all cursor-pointer active:scale-95 font-sans"
                >
                  <span>Book a Free Consultation</span>
                </Link>

                <Link
                  href="/#contact-cta"
                  className="bg-[#0b1422] hover:bg-[#111f33] text-white border border-[#1e2f46] hover:border-cyan-500/50 text-[13px] sm:text-[13.5px] font-medium px-6 py-3.5 rounded-[10px] transition-all shadow-md cursor-pointer active:scale-95 font-sans"
                >
                  <span>Request a Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Cursive Tagline + 2x2 Outcome Cards */}
            <div className="lg:col-span-6 flex flex-col">
              
              {/* Handwritten Script Tagline matching reference screenshot */}
              <div className="flex justify-start sm:justify-end mb-4">
                <span
                  className="text-[21px] sm:text-[24px] text-cyan-400 font-bold tracking-wide italic select-none"
                  style={{
                    fontFamily: "'Caveat', cursive, sans-serif",
                  }}
                >
                  Security Empowered by Technology
                </span>
              </div>

              {/* 2x2 Cards Grid */}
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4.5">
                {ctaBenefits.map((item, idx) => (
                  <div key={idx} className="cta-outcome-card">
                    <TiltCard
                      maxTilt={5}
                      scale={1.02}
                      glare={true}
                      glareOpacity={0.08}
                      className="rounded-2xl h-full"
                    >
                      <div className="rounded-2xl bg-[#0a1322]/90 hover:bg-[#0f1d30] border border-[#1a2b40] hover:border-cyan-500/50 p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all group cursor-default min-h-[125px] sm:min-h-[135px]">
                        {/* Icon Container with subtle radial glow */}
                        <div className="w-10 h-10 rounded-xl bg-[#0f2034] border border-[#1d3958] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-cyan-400/60 transition-all text-cyan-400">
                          {item.icon}
                        </div>
                        
                        {/* Title */}
                        <span className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight leading-tight font-sans group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </span>
                      </div>
                    </TiltCard>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
