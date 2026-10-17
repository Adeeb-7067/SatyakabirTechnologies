"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Eye,
  Briefcase,
  Layers,
  Heart,
  Globe,
  CheckCircle2,
  Store,
  ShoppingCart,
  MapPin,
  Package,
  Mountain,
  BadgeCheck,
  Network,
  Building2,
  Sprout,
  LayoutGrid,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AgriCaseStudySection from "@/app/components/AgriCaseStudySection";
import AgriDevelopmentProcessSection from "@/app/components/AgriDevelopmentProcessSection";
import AgriCtaSection from "@/app/components/AgriCtaSection";
import AgriAppointmentSection from "@/app/components/AgriAppointmentSection";
import TiltCard from "@/app/components/ui/TiltCard";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 4 Stats matching the screenshot exactly
const statsData = [
  {
    value: "120+",
    label: "Agri Platforms Delivered",
    icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
    gradient: "from-cyan-500 via-teal-500 to-amber-500",
  },
  {
    value: "12,000+",
    label: "Farmers Onboarded",
    icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
    gradient: "from-teal-500 via-emerald-500 to-orange-500",
  },
  {
    value: "98%",
    label: "Client Retention",
    icon: <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
    gradient: "from-blue-500 via-cyan-500 to-rose-400",
  },
  {
    value: "40+",
    label: "Districts Covered",
    icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
    gradient: "from-cyan-500 via-emerald-500 to-amber-400",
  },
];

// 5 Key Technical Pills from Screenshot
const featurePills = [
  "Farmer Mobile App",
  "High-Concurrency Mobile Apps",
  "Cloud Native & Kubernetes",
  "Enterprise Multi-Branch ERP",
  "100% Code Ownership & Git Handover",
];

// 4 Product Showcase Features (2x2 Grid)
const showcaseFeatures = [
  "Offline-first catalogue sync",
  "Regional language support",
  "Government scheme integration",
  "Weather & advisory alerts",
];

// 9 Modular Product Catalog Solutions matching screenshot exactly
const agricultureSolutions = [
  {
    icon: <Store className="w-5 h-5 text-emerald-400" />,
    title: "Agriculture Marketplace",
    description:
      "Next-gen multi-vendor hub connecting input suppliers, farmers, certified seeds/fertilizer dealers, and bulk commodity procurement firms.",
    href: "/industries/agriculture/agriculture-marketplace",
  },
  {
    icon: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
    title: "Single-Vendor Agri Commerce",
    description:
      "Turnkey enterprise eCommerce application built for agricultural seed, pesticide, and hardware brands aiming for direct-to-farm channels.",
    href: "/industries/agriculture/single-vendor-agri-commerce",
  },
  {
    icon: <MapPin className="w-5 h-5 text-emerald-400" />,
    title: "Farmer Mobile Application",
    description:
      "Voice-enabled mobile console giving growers hyper-local weather alerts, mandi crop spot prices, diagnostics, and subsidized govt schemes.",
    href: "/industries/agriculture/farmer-mobile-application",
  },
  {
    icon: <Package className="w-5 h-5 text-emerald-400" />,
    title: "Seller / Vendor Application",
    description:
      "Streamlined vendor portal to update inventory SKU levels, handle regional dispatch slots, process farmer credit, and automate invoice settlements.",
    href: "/industries/agriculture/seller-vendor-application",
  },
  {
    icon: <Mountain className="w-5 h-5 text-emerald-400" />,
    title: "Farm Land CRM",
    description:
      "Specialized agro-realty and managed farmland CRM for spatial plot allocations, GIS telemetry, channel partners, and lease monetization.",
    href: "/industries/agriculture/farm-land-crm",
  },
  {
    icon: <BadgeCheck className="w-5 h-5 text-emerald-400" />,
    title: "Agri Workforce Management",
    description:
      "Automated seasonal harvester booking, field agent GPS geofencing, daily biometric attendance, and direct Aadhaar/UPI wage distribution.",
    href: "/industries/agriculture/agri-workforce-management",
  },
  {
    icon: <Network className="w-5 h-5 text-emerald-400" />,
    title: "Dealer & Distributor Network",
    description:
      "Multi-tiered distribution command managing stock replenishment quotas, territorial limits, credit guarantees, and incentive payouts.",
    href: "/industries/agriculture/dealer-distributor-network",
  },
  {
    icon: <Building2 className="w-5 h-5 text-emerald-400" />,
    title: "Franchise Management",
    description:
      "Rapid rural Kendra and franchise onboarding, hardware kit provisioning, revenue sharing matrices, and real-time revenue audits.",
    href: "/industries/agriculture/franchise-management",
  },
  {
    icon: <Sprout className="w-5 h-5 text-emerald-400" />,
    title: "Farm Management (FMS)",
    description:
      "End-to-end farm life cycle tracking: sowing dates, fertilizer dosage schedules, input expenditures, drone telemetry, and harvest ledgers.",
    href: "/industries/agriculture/farm-management-fms",
  },
];

// Showcase of Recognized Work in Agriculture Projects (Supports adding unlimited projects)
const recognizedProjects = [
  {
    image: "/images/agri-proj-1.png",
    title: "Agriculture Marketplace",
    description:
      "Next-gen multi-vendor hub connecting input suppliers, farmers, certified seeds/fertilizer dealers, and bulk commodity procurement firms.",
    href: "/#contact-cta",
  },
  {
    image: "/images/agri-proj-2.png",
    title: "Agriculture Marketplace",
    description:
      "Next-gen multi-vendor hub connecting input suppliers, farmers, certified seeds/fertilizer dealers, and bulk commodity procurement firms.",
    href: "/#contact-cta",
  },
  {
    image: "/images/agri-proj-3.png",
    title: "Agriculture Marketplace",
    description:
      "Next-gen multi-vendor hub connecting input suppliers, farmers, certified seeds/fertilizer dealers, and bulk commodity procurement firms.",
    href: "/#contact-cta",
  },
  {
    image: "/images/agri-proj-4.png",
    title: "Agriculture Marketplace",
    description:
      "Next-gen multi-vendor hub connecting input suppliers, farmers, certified seeds/fertilizer dealers, and bulk commodity procurement firms.",
    href: "/#contact-cta",
  },
  {
    image: "/images/agri-product-showcase.png",
    title: "Agriculture Marketplace",
    description:
      "Next-gen multi-vendor hub connecting input suppliers, farmers, certified seeds/fertilizer dealers, and bulk commodity procurement firms.",
    href: "/#contact-cta",
  },
];

export default function AgriculturePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const catalogRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  // Mouse Drag-to-Scroll state
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const hasMoved = useRef(false);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    hasMoved.current = false;
    dragStartX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    dragStartScrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.6;
    if (Math.abs(walk) > 4) {
      hasMoved.current = true;
    }
    scrollContainerRef.current.scrollLeft = dragStartScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (hasMoved.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const scrollToIndex = (idx: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320;
      scrollContainerRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: "smooth",
      });
      setActiveProjectIdx(idx);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPos = scrollContainerRef.current.scrollLeft;
      const cardWidth = 320;
      const newIdx = Math.round(scrollPos / cardWidth);
      if (newIdx !== activeProjectIdx && newIdx >= 0 && newIdx < recognizedProjects.length) {
        setActiveProjectIdx(newIdx);
      }
    }
  };

  useGSAP(
    () => {
      if (heroRef.current) {
        gsap.fromTo(
          ".agri-hero-elem",
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".agri-stat-item",
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            delay: 0.25,
            clearProps: "all",
          }
        );
      }

      if (showcaseRef.current) {
        gsap.fromTo(
          ".agri-showcase-img",
          { opacity: 0, x: -30, scale: 0.96 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: "top 85%",
              once: true,
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".agri-showcase-elem",
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: "top 85%",
              once: true,
            },
            clearProps: "all",
          }
        );
      }

      if (catalogRef.current) {
        gsap.fromTo(
          ".agri-catalog-header",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: catalogRef.current,
              start: "top 85%",
              once: true,
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".agri-catalog-card",
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: catalogRef.current,
              start: "top 80%",
              once: true,
            },
            clearProps: "all",
          }
        );
      }

      if (projectsRef.current) {
        gsap.fromTo(
          ".agri-projects-elem",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 85%",
              once: true,
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".agri-project-card",
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectsRef.current,
              start: "top 80%",
              once: true,
            },
            clearProps: "all",
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full bg-[#030d07] text-white select-none overflow-hidden">
      {/* =========================================================================
          HERO SECTION (Matching user reference screenshot exactly)
      ========================================================================== */}
      <section
        ref={heroRef}
        className="relative pt-8 sm:pt-12 md:pt-16 pb-0 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between"
        style={{
          background:
            "radial-gradient(ellipse at 50% 18%, rgba(20, 83, 45, 0.45) 0%, rgba(5, 26, 14, 0.6) 40%, #030d07 75%)",
        }}
      >
        {/* Soft Background Emerald Radial Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[600px] sm:w-[850px] h-[380px] sm:h-[480px] rounded-full opacity-35 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.5) 0%, rgba(20, 83, 45, 0.2) 60%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex-1 flex flex-col justify-center">
          {/* Breadcrumb Navigation: HOME > AGRICULTURE */}
          <div className="agri-hero-elem flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Link
              href="/"
              className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#8fa89b] uppercase hover:text-white transition-colors"
            >
              HOME
            </Link>
            <span className="text-[11px] sm:text-[12px] font-mono text-emerald-600">›</span>
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-emerald-400 font-bold uppercase">
              AGRICULTURE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="agri-hero-elem text-[34px] sm:text-[46px] md:text-[54px] lg:text-[62px] xl:text-[66px] font-bold text-white tracking-[-0.03em] leading-[1.08] max-w-[940px] mx-auto font-sans">
            Digital ecosystems for a stronger agriculture supply chain
          </h1>

          {/* Subtitle Paragraph */}
          <p className="agri-hero-elem text-[14px] sm:text-[15.5px] md:text-[16.5px] text-[#a1b8ac] leading-[1.65] max-w-[780px] mx-auto font-normal mt-5 sm:mt-6">
            From farm to marketplace — end-to-end platforms connecting farmers,
            dealers, distributors, franchises and field teams, powered by AI,
            automation and cloud.
          </p>

          {/* CTA Buttons Row */}
          <div className="agri-hero-elem mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* Start a Project (Emerald Green Button) */}
            <Link
              href="/#contact-cta"
              className="bg-[#16a34a] hover:bg-[#15803d] active:scale-95 transition-all text-white font-semibold text-[13.5px] sm:text-[14px] px-6 sm:px-7 py-3 rounded-lg sm:rounded-xl shadow-lg shadow-emerald-950/60 inline-flex items-center gap-2 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* See Case Studies (Dark Glassy Button) */}
            <Link
              href="/#portfolio"
              className="bg-[#0c1a12]/90 hover:bg-[#122419] active:scale-95 transition-all text-slate-200 font-medium text-[13.5px] sm:text-[14px] px-5 sm:px-6 py-3 rounded-lg sm:rounded-xl border border-emerald-800/40 hover:border-emerald-700/60 inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>See Case Studies</span>
            </Link>
          </div>

          {/* Key Feature Pills Bar with bright green pulsing dots */}
          <div className="agri-hero-elem mt-12 sm:mt-14 lg:mt-16 mb-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-[1100px] mx-auto">
            {featurePills.map((pill, idx) => (
              <div
                key={idx}
                className="bg-[#09170f]/90 border border-emerald-900/40 text-[#c2dfce] text-[11px] sm:text-[12px] font-mono tracking-wide px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm hover:border-emerald-600/50 hover:bg-[#0c1f15] transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] shadow-[0_0_8px_#22c55e] flex-shrink-0" />
                <span>{pill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Key Metrics Stats Bar (Matching screenshot bottom bar exactly) */}
        <div className="w-full border-t border-emerald-900/35 bg-[#020b05]/95 py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="agri-stat-item flex items-center gap-3.5 sm:gap-4 group"
                >
                  {/* Multicolored Gradient Circle Icon */}
                  <div
                    className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-gradient-to-br ${stat.gradient} shadow-md shadow-black/40 flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}
                  >
                    {stat.icon}
                  </div>

                  {/* Value & Label */}
                  <div className="flex flex-col text-left">
                    <AnimatedMetric
                      value={stat.value}
                      className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-white tracking-tight leading-none font-sans"
                    />
                    <span className="text-[12px] sm:text-[12.5px] text-[#8fa89b] font-medium leading-tight mt-1.5">
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
          PRODUCT SHOWCASE SECTION (Matching user reference screenshot exactly)
      ========================================================================== */}
      <section
        ref={showcaseRef}
        className="relative w-full bg-[#030d07] py-16 sm:py-20 lg:py-24 overflow-hidden border-t border-emerald-950/40"
        style={{
          background:
            "radial-gradient(circle at 18% 40%, rgba(20, 83, 45, 0.3) 0%, rgba(5, 20, 12, 0.45) 45%, #030d07 80%)",
        }}
      >
        {/* Soft background ambient glow */}
        <div
          className="pointer-events-none absolute left-0 top-1/3 -translate-y-1/2 w-[500px] h-[400px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(34, 197, 94, 0.35) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual: 3 Mobile App Mockup Devices & Pedestal */}
            <div className="lg:col-span-6 flex justify-center lg:justify-start">
              <div className="agri-showcase-img relative w-full max-w-[500px] lg:max-w-[540px] group">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
                <Image
                  src="/images/agri-product-showcase.png"
                  alt="A farmer app mockup showcase"
                  width={630}
                  height={644}
                  priority
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02] drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                />
              </div>
            </div>

            {/* Right Column: Eyebrow, Title, Description, Checkmarks */}
            <div className="lg:col-span-6 text-left">
              {/* Eyebrow Label */}
              <div className="agri-showcase-elem">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.24em] text-slate-300 font-semibold uppercase">
                  PRODUCT SHOWCASE
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="agri-showcase-elem text-[30px] sm:text-[38px] md:text-[44px] lg:text-[46px] font-bold text-white tracking-[-0.025em] leading-[1.14] font-sans mt-3 sm:mt-4">
                A farmer app that actually gets used in the field
              </h2>

              {/* Description Paragraph */}
              <p className="agri-showcase-elem text-[14.5px] sm:text-[15.5px] text-[#8fa89b] leading-[1.68] font-normal mt-5 sm:mt-6 max-w-[540px]">
                Built for low-bandwidth rural connectivity, with offline-first product
                catalogues, voice-assisted search in regional languages, and one-tap
                access to government scheme information.
              </p>

              {/* 2x2 Feature Checkmark Grid */}
              <div className="agri-showcase-elem mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-4.5 max-w-[560px]">
                {showcaseFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-[13.5px] sm:text-[14.5px] font-medium text-slate-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MODULAR PRODUCT CATALOG / OUR AGRICULTURE SOLUTIONS
          (Matching user reference screenshot exactly)
      ========================================================================== */}
      <section
        id="catalog"
        ref={catalogRef}
        className="relative w-full bg-[#030d07] py-16 sm:py-20 lg:py-28 overflow-hidden border-t border-emerald-950/40"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(20, 83, 45, 0.22) 0%, rgba(5, 18, 11, 0.45) 50%, #030d07 85%)",
        }}
      >
        {/* Soft background ambient accent */}
        <div
          className="pointer-events-none absolute right-10 top-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header: Eyebrow, Title, Subtitle & Blueprints Link */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
            <div className="max-w-[760px]">
              {/* Eyebrow with Grid Symbol */}
              <div className="agri-catalog-header flex items-center gap-2 mb-2 sm:mb-2.5">
                <LayoutGrid className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.2em] text-emerald-400 font-semibold uppercase">
                  MODULAR PRODUCT CATALOG
                </span>
              </div>

              {/* Title */}
              <h2 className="agri-catalog-header text-[30px] sm:text-[38px] md:text-[42px] lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-tight font-sans">
                Our Agriculture Solutions
              </h2>

              {/* Subtitle */}
              <p className="agri-catalog-header text-[14px] sm:text-[15px] text-[#8fa89b] leading-[1.65] font-normal mt-2.5 max-w-[660px]">
                Architected for high throughput, rural low-latency connectivity, and multi-lingual accessibility across every touchpoint.
              </p>
            </div>

            {/* Top-Right Link: Explore Architecture Blueprints */}
            <div className="agri-catalog-header lg:pb-1">
              <Link
                href="/#contact-cta"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium text-[13.5px] sm:text-[14px] transition-colors group cursor-pointer"
              >
                <span>Explore Architecture Blueprints</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 3x3 Solutions Card Grid with 3D Tilt Perspective */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12 lg:mt-14">
            {agricultureSolutions.map((solution, idx) => (
              <TiltCard key={idx} maxTilt={8} scale={1.018} glare={true} glareOpacity={0.15} className="h-full rounded-2xl">
                <Link
                  href={solution.href}
                  className="agri-catalog-card group bg-[#09150e]/95 hover:bg-[#0d1e15] border border-emerald-900/30 hover:border-emerald-600/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 shadow-[0_12px_30px_rgba(4,24,14,0.7)] cursor-pointer h-full"
                >
                  {/* Top Section: Icon, Title, Description */}
                  <div>
                    {/* Icon Box */}
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#040e08] border border-emerald-900/40 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 group-hover:border-emerald-500/50 transition-all">
                      {solution.icon}
                    </div>

                    {/* Card Title */}
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-snug mb-2.5 group-hover:text-emerald-300 transition-colors">
                      {solution.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#8fa89b] leading-[1.65] font-normal">
                      {solution.description}
                    </p>
                  </div>

                  {/* Bottom Row: Explore platform & Arrow */}
                  <div className="mt-6 pt-4 flex items-center justify-between text-emerald-400 border-t border-emerald-950/40">
                    <span className="text-[13px] sm:text-[13.5px] font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors">
                      Explore platform
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SHOWCASE OF RECOGNIZED WORK IN AGRICULTURE (Horizontal Scroll Carousel)
      ========================================================================== */}
      <section
        ref={projectsRef}
        className="relative w-full bg-[#030d07] py-16 sm:py-20 lg:py-28 overflow-hidden border-t border-emerald-950/40"
        style={{
          background:
            "radial-gradient(circle at 10% 35%, rgba(20, 83, 45, 0.28) 0%, rgba(5, 18, 11, 0.45) 45%, #030d07 80%)",
        }}
      >
        {/* Soft background ambient accent */}
        <div
          className="pointer-events-none absolute left-0 top-1/3 -translate-y-1/2 w-[500px] h-[450px] rounded-full opacity-20 blur-[130px]"
          style={{
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.35) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-w-0 w-full">
            {/* Left Column: Heading, Subtitle, Bullet points & Scroll controls */}
            <div className="lg:col-span-5 text-left">
              {/* Eyebrow Label */}
              <div className="agri-projects-elem mb-2.5 sm:mb-3">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.24em] text-slate-300 font-semibold uppercase">
                  PROJECTS
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="agri-projects-elem text-[30px] sm:text-[38px] md:text-[42px] lg:text-[46px] font-bold text-white tracking-[-0.03em] leading-[1.12] font-sans">
                Showcase of our Recognized Work In Agriculture
              </h2>

              {/* Description Paragraph */}
              <p className="agri-projects-elem text-[14px] sm:text-[15px] text-[#8fa89b] leading-[1.68] font-normal mt-4 sm:mt-5 max-w-[440px]">
                Our collaborative approach ensures that we truly understand our clients unique requirements and challenges.
              </p>

              {/* Thin Divider Line */}
              <div className="agri-projects-elem w-full max-w-[340px] h-px bg-emerald-900/40 my-6 sm:my-7" />

              {/* 3 Key Bullets with Green Arrows */}
              <div className="space-y-3.5 mb-8 sm:mb-10">
                {[
                  "Managed Services and Products",
                  "Flexibility and Adaptability",
                  "Competitive Advantage",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="agri-projects-elem flex items-center gap-2.5 text-slate-200 text-[13.5px] sm:text-[14px] font-medium"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Pagination Dots and Nav Buttons */}
              <div className="agri-projects-elem flex items-center gap-4">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {recognizedProjects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => scrollToIndex(idx)}
                      aria-label={`Scroll to project ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeProjectIdx === idx
                          ? "w-7 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]"
                          : "w-2.5 bg-emerald-900/80 hover:bg-emerald-500"
                      }`}
                    />
                  ))}
                </div>

                {/* Left / Right Scroll Buttons */}
                <div className="flex items-center gap-2 ml-2">
                  <button
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    className="w-8 h-8 rounded-full bg-[#0a1b12] border border-emerald-900/50 hover:border-emerald-400 flex items-center justify-center text-emerald-400 hover:text-white transition-all cursor-pointer active:scale-95"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={scrollRight}
                    aria-label="Scroll right"
                    className="w-8 h-8 rounded-full bg-[#0a1b12] border border-emerald-900/50 hover:border-emerald-400 flex items-center justify-center text-emerald-400 hover:text-white transition-all cursor-pointer active:scale-95"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Horizontally Scrollable Cards Track with Mouse Drag-to-Scroll */}
            <div className="lg:col-span-7 w-full min-w-0 max-w-full overflow-hidden relative">
              <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                onMouseLeave={handleMouseUpOrLeave}
                className={`flex gap-5 sm:gap-6 overflow-x-auto py-4 px-1 no-scrollbar select-none ${
                  isDragging
                    ? "cursor-grabbing scroll-auto"
                    : "cursor-grab scroll-smooth snap-x snap-mandatory"
                }`}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {recognizedProjects.map((project, idx) => (
                  <Link
                    key={idx}
                    href={project.href}
                    onClick={handleCardClick}
                    draggable={false}
                    className="agri-project-card snap-start flex-shrink-0 w-[270px] sm:w-[310px] rounded-2xl overflow-hidden bg-[#075727] flex flex-col justify-between border border-emerald-800/40 hover:border-emerald-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/40 group cursor-grab active:cursor-grabbing select-none"
                  >
                    {/* Top Image + Organic Wave */}
                    <div className="relative h-[190px] sm:h-[220px] w-full overflow-hidden bg-[#041209] pointer-events-none select-none">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        draggable={false}
                        sizes="(max-width: 768px) 270px, 310px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none select-none"
                      />
                      {/* Organic SVG Wave pinned to bottom of image */}
                      <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden leading-none pointer-events-none">
                        <svg
                          viewBox="0 0 400 50"
                          preserveAspectRatio="none"
                          className="w-full h-8 sm:h-9 text-[#075727] fill-current block"
                        >
                          <path d="M0,25 C70,25 110,45 170,45 C230,45 270,10 340,10 C375,10 390,18 400,25 L400,50 L0,50 Z" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom Green Content Area */}
                    <div className="p-5 sm:p-6 bg-[#075727] flex-1 flex flex-col justify-between text-left select-none">
                      <div>
                        <h3 className="text-white font-bold text-[17px] sm:text-[18px] tracking-tight leading-snug group-hover:text-emerald-100 transition-colors select-none">
                          {project.title}
                        </h3>
                        <p className="text-[#c2dfce] text-[13px] sm:text-[13.5px] leading-relaxed mt-2.5 line-clamp-3 font-normal select-none">
                          {project.description}
                        </p>
                      </div>

                      {/* Explore Projects Link */}
                      <div className="mt-5 pt-3.5 flex items-center justify-between text-emerald-200 border-t border-emerald-800/50">
                        <span className="text-[12.5px] sm:text-[13px] font-medium group-hover:text-white transition-colors">
                          Explore Projects
                        </span>
                        <ArrowRight className="w-4 h-4 text-emerald-300 group-hover:translate-x-1.5 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PINNED SCROLL-TRIGGERED CASE STUDY SECTION (KisanConnect Agri Marketplace)
      ========================================================================== */}
      <AgriCaseStudySection />

      {/* =========================================================================
          OUR DEVELOPMENT PROCESS & SECURITY SECTION (Safe. Smart. Social.)
      ========================================================================== */}
      <AgriDevelopmentProcessSection />

      {/* =========================================================================
          AGRI TECH IDEA CALL TO ACTION BANNER
      ========================================================================== */}
      <AgriCtaSection />

      {/* =========================================================================
          GET STARTED & APPOINTMENT CTA SECTION (Sync / Satya Kabir)
      ========================================================================== */}
      <AgriAppointmentSection />
    </div>
  );
}
