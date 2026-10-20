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
  MessageSquare,
  Users,
  Settings,
  Check,
  Zap,
  BarChart3,
  MapPin,
  FileCheck,
  Clock,
  ShieldCheck,
  Activity,
  Target,
} from "lucide-react";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";
import TiltCard from "@/app/components/ui/TiltCard";
import MobilityEcosystemHighway from "@/app/components/ui/MobilityEcosystemHighway";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Section 2: Our CRM, HRM & Business Automation Solutions Data
const hrmCoreSolutions = [
  {
    id: "crm",
    iconBg: "bg-[#4338ca] text-[#818cf8]",
    icon: <MessageSquare className="w-5 h-5 text-white" />,
    title: "CRM",
    subtitleBadge: "(Customer Relationship Management)",
    description: "Turn leads into loyal customers with a powerful sales CRM.",
    featuresLeft: [
      "Lead Management",
      "Customer Management",
      "Quotation & Proposal",
      "Team Performance",
    ],
    featuresRight: [
      "Sales Pipeline",
      "Task & Follow-Up",
      "Email & WhatsApp",
      "AI Lead Qualification",
    ],
    actionText: "Explore CRM Solutions",
    actionLink: "/industries/hrm-crm/crm",
  },
  {
    id: "hrm",
    iconBg: "bg-[#0284c7] text-[#38bdf8]",
    icon: <Users className="w-5 h-5 text-white" />,
    title: "HRM",
    subtitleBadge: "(Human Resource Management)",
    description: "Simplify employee management and build a stronger team.",
    featuresLeft: [
      "Employee Database",
      "Payroll Management",
      "Performance & Appraisal",
      "Employee Self-Service",
    ],
    featuresRight: [
      "Attendance & Leaves",
      "Recruitment & Onboarding",
      "Document Management",
      "Exit Management",
    ],
    actionText: "Explore HRM Solutions",
    actionLink: "/industries/hrm-crm/hrm",
  },
  {
    id: "business-automation",
    iconBg: "bg-[#0d9488] text-[#2dd4bf]",
    icon: <Settings className="w-5 h-5 text-white" />,
    title: "Business Automation",
    subtitleBadge: "",
    description: "Automate processes and focus on what really matters.",
    featuresLeft: [
      "Workflow Automation",
      "Email Automation",
      "Invoice Reminders",
      "Document Generation",
    ],
    featuresRight: [
      "WhatsApp Automation",
      "Approval Workflows",
      "Project Management",
      "AI Business Insights",
    ],
    actionText: "Explore Automation Solutions",
    actionLink: "/industries/hrm-crm/business-automation",
  },
];

// 6 Ascending Enterprise Stakeholders for HRM & CRM Ecosystem
const hrmEcosystemStakeholders = [
  {
    primaryLabel: "Lead Capture & CRM",
    categoryLabel: "Prospects & Clients",
  },
  {
    primaryLabel: "Deals & Pipelines",
    categoryLabel: "Sales Teams",
  },
  {
    primaryLabel: "Talent & Onboarding",
    categoryLabel: "HR Managers",
  },
  {
    primaryLabel: "Payroll & Self-Service",
    categoryLabel: "Workforce Staff",
  },
  {
    primaryLabel: "Workflow & Auto-Bots",
    categoryLabel: "Operations & AI",
  },
  {
    primaryLabel: "Executive Intelligence",
    categoryLabel: "Leadership & CXO",
  },
];

// 10 Key Features tailored for HRM, CRM & Business Automation
const hrmKeyFeatures = [
  { number: "01", title: "Lead Scoring AI", icon: <Zap className="w-4 h-4 text-cyan-400" /> },
  { number: "02", title: "Sales Pipeline", icon: <BarChart3 className="w-4 h-4 text-cyan-400" /> },
  { number: "03", title: "Geo Attendance", icon: <MapPin className="w-4 h-4 text-cyan-400" /> },
  { number: "04", title: "Auto Payroll", icon: <FileCheck className="w-4 h-4 text-cyan-400" /> },
  { number: "05", title: "Shift & Rosters", icon: <Clock className="w-4 h-4 text-cyan-400" /> },
  { number: "06", title: "Recruit & Onboard", icon: <Users className="w-4 h-4 text-cyan-400" /> },
  { number: "07", title: "WhatsApp Bots", icon: <MessageSquare className="w-4 h-4 text-cyan-400" /> },
  { number: "08", title: "Approval Flows", icon: <ShieldCheck className="w-4 h-4 text-cyan-400" /> },
  { number: "09", title: "Self-Service App", icon: <Layers className="w-4 h-4 text-cyan-400" /> },
  { number: "10", title: "BI & Forecasting", icon: <Activity className="w-4 h-4 text-cyan-400" /> },
];

// Verified Enterprise Case Study Stats
const caseStudyStats = [
  { value: "4,500+", title: "Active Personnel" },
  { value: "99.8%", title: "Shift Fill Rate" },
  { value: "100%", title: "Digital Audits" },
];

// 7-Step Development Process matching reference design
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

// 4 Bottom Outcome Benefits
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

// 4 Bottom Key Metrics matching user reference screenshot exactly
const hrmStatsData = [
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
const hrmFeaturePills = [
  "AI Moderation",
  "Live Streaming",
  "Scalable & Secure",
  "1-to-1 Video Calls",
  "Dating & Social Discovery",
  "100% Code Ownership & Git Handover",
  "Automated Payroll & Tax",
  "Multi-Pipeline CRM",
  "AI Workflow Automation",
  "Employee Lifecycle Hub",
];

export default function HrmCrmPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (heroRef.current) {
        gsap.fromTo(
          ".hrm-hero-elem",
          { opacity: 0, y: 22 },
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
          ".hrm-hero-visual",
          { opacity: 0, scale: 0.95, y: 25 },
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

        // Animate Section 2 Solution Cards on Scroll
        gsap.fromTo(
          ".hrm-sol-card",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".hrm-solutions-grid",
              start: "top 85%",
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
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".ecosystem-section",
              start: "top 75%",
            },
            clearProps: "all",
          }
        );

        // Animate Key Features Card on Scroll
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
              start: "top 85%",
            },
            clearProps: "all",
          }
        );

        // Animate Case Study Card
        gsap.fromTo(
          ".case-study-card-inner",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".case-study-sec",
              start: "top 85%",
            },
            clearProps: "all",
          }
        );

        // Animate Process Steps
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

        // Animate Safe Smart Card
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

        // Animate Bottom CTA
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
      className="w-full bg-black text-white select-none overflow-x-hidden min-h-screen font-sans"
    >
      {/* Inline styles for continuous seamless marquee ticker */}
      <style>{`
        @keyframes hrmPillScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .hrm-pill-marquee {
          display: flex;
          width: max-content;
          animation: hrmPillScroll 32s linear infinite;
          will-change: transform;
        }
        .hrm-pill-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* =========================================================================
          SECTION 1: HERO SECTION (Matching user reference screenshot exactly)
      ========================================================================== */}
      <section
        ref={heroRef}
        className="relative pt-6 sm:pt-10 md:pt-12 pb-0 overflow-hidden flex flex-col justify-between bg-black"
      >
        {/* Soft Ambient Left Teal Radial Glow */}
        <div
          className="pointer-events-none absolute -left-20 bottom-28 w-[420px] sm:w-[550px] h-[380px] sm:h-[480px] rounded-full opacity-25 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(13, 148, 136, 0.45) 0%, rgba(15, 118, 110, 0.2) 50%, transparent 75%)",
          }}
          aria-hidden="true"
        />

        {/* Soft Ambient Cyan/Blue Radial Glow behind right hologram */}
        <div
          className="pointer-events-none absolute right-4 top-16 w-[450px] sm:w-[650px] h-[400px] sm:h-[550px] rounded-full opacity-30 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(6, 182, 212, 0.25) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pt-1 sm:pt-2">
            
            {/* Left Column: Breadcrumb, Main Title, Subtitle, CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col text-left">
              {/* Breadcrumb: HOME > HRM CRM AI AUTOMATION */}
              <div className="hrm-hero-elem flex items-center gap-2.5 mb-5 sm:mb-6">
                <Link
                  href="/"
                  className="text-[11px] sm:text-[12px] font-mono tracking-[0.18em] text-[#8fa2b8] uppercase hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <span className="text-[11px] sm:text-[12px] font-mono text-[#4a5f78]">&gt;</span>
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.18em] text-[#cbd5e1] font-semibold uppercase">
                  HRM CRM AI AUTOMATION
                </span>
              </div>

              {/* Main Headline - Exactly 2 lines matching reference screenshot */}
              <h1 className="hrm-hero-elem text-[32px] sm:text-[44px] md:text-[52px] lg:text-[54px] xl:text-[58px] font-bold text-white tracking-[-0.03em] leading-[1.08] font-sans">
                <span className="block whitespace-nowrap">One Platform. Complete</span>
                <span className="block text-white whitespace-nowrap">Business Management..</span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="hrm-hero-elem text-[13.5px] sm:text-[14.5px] md:text-[15px] text-[#93a4b9] leading-[1.6] max-w-[540px] font-normal mt-4 sm:mt-5 font-sans">
                From guard deployment and geo-fenced attendance to live incident response and client billing portals, Satyakabir builds reliable platforms that eliminate ghost guards.
              </p>

              {/* Action Buttons Row */}
              <div className="hrm-hero-elem mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* Build Your Platform -> */}
                <Link
                  href="/#contact-cta"
                  className="bg-gradient-to-r from-[#0052d4] via-[#0066ff] to-[#00b4d8] hover:from-[#0047ba] hover:to-[#0096c7] text-white font-medium text-[13.5px] sm:text-[14px] px-6 sm:px-7 py-3 rounded-full shadow-[0_0_24px_rgba(0,102,255,0.55)] hover:shadow-[0_0_32px_rgba(0,102,255,0.8)] inline-flex items-center gap-2 transition-all cursor-pointer group active:scale-95 font-sans"
                >
                  <span>Build Your Platform</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Discuss Your Project */}
                <Link
                  href="/#contact-cta"
                  className="bg-[#0b1422]/90 hover:bg-[#122036] text-white border border-[#1e2f46] hover:border-cyan-500/50 text-[13.5px] sm:text-[14px] font-medium px-6 sm:px-7 py-3 rounded-full transition-all shadow-md cursor-pointer group active:scale-95 inline-flex items-center gap-2.5 font-sans"
                >
                  <Calendar className="w-4 h-4 text-[#f43f5e] group-hover:scale-105 transition-transform" />
                  <span>Discuss Your Project</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Hologram Showcase */}
            <div className="lg:col-span-5 flex justify-center items-center relative">
              <div className="hrm-hero-visual relative w-full max-w-[540px]">
                {/* Soft Ambient Radial Glow directly behind the hologram */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[480px] h-[420px] sm:h-[480px] rounded-full opacity-35 blur-[100px] z-0"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(6, 182, 212, 0.3) 45%, transparent 75%)",
                  }}
                  aria-hidden="true"
                />

                <TiltCard
                  maxTilt={5}
                  scale={1.02}
                  glare={false}
                  className="relative z-10 w-full"
                >
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center group drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
                    <Image
                      src="/images/hrm-hero-hologram.jpg"
                      alt="One Platform. Complete Business Management - Satyakabir Technologies"
                      width={1024}
                      height={768}
                      priority
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{
                        maskImage:
                          "radial-gradient(ellipse 96% 94% at 50% 50%, black 78%, transparent 100%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse 96% 94% at 50% 50%, black 78%, transparent 100%)",
                      }}
                    />
                  </div>
                </TiltCard>
              </div>
            </div>

          </div>

          {/* Marquee Ticker of Feature Pills (Matching screenshot exactly) */}
          <div className="hrm-hero-elem mt-8 sm:mt-10 w-full overflow-hidden py-1">
            <div className="relative w-full overflow-hidden">
              {/* Left & Right Edge Fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-black to-transparent z-10" />

              <div className="hrm-pill-marquee flex items-center gap-2.5 sm:gap-3">
                {[...hrmFeaturePills, ...hrmFeaturePills].map((pill, pIdx) => (
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
        <div className="w-full border-t border-[#132032] bg-[#040810]/95 py-5 sm:py-6 px-4 sm:px-6 lg:px-8 mt-7 sm:mt-9">
          <div className="max-w-[1340px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
              {hrmStatsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="hrm-hero-elem flex items-center gap-3.5 sm:gap-4 group cursor-default"
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
                      className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-white tracking-tight leading-none font-sans"
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
          SECTION 2: OUR CRM, HRM & BUSINESS AUTOMATION SOLUTIONS
      ========================================================================== */}
      <section className="w-full bg-black py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soft Ambient Radial Background Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-15 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 116, 144, 0.4) 0%, rgba(37, 99, 235, 0.25) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto relative z-10">
          
          {/* Section Header: Title & Subtitle Left + View All Link Right */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
            <div>
              <h2 className="text-[32px] sm:text-[40px] lg:text-[46px] font-bold text-white tracking-tight leading-[1.12] font-sans">
                <span className="block">Our CRM, HRM &amp; Business</span>
                <span className="block text-white">Automation Solutions</span>
              </h2>
              <p className="text-[13.5px] sm:text-[14.5px] text-[#8fa2b8] mt-3 font-sans font-normal max-w-xl leading-relaxed">
                End-to-end digital solutions to manage your customers, employees, operations and growth.
              </p>
            </div>

            <Link
              href="/#contact-cta"
              className="text-cyan-400 hover:text-cyan-300 text-[13.5px] sm:text-[14px] font-medium inline-flex items-center gap-1.5 transition-colors group shrink-0 pb-1"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 3 Core Solutions Cards Grid */}
          <div className="hrm-solutions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mt-12 sm:mt-16">
            {hrmCoreSolutions.map((sol) => (
              <div key={sol.id} className="hrm-sol-card h-full">
                <TiltCard
                  maxTilt={4}
                  scale={1.01}
                  glare={true}
                  glareOpacity={0.06}
                  className="h-full rounded-[24px]"
                >
                  <div className="rounded-[24px] bg-[#0c1424] hover:bg-[#0e182c] border border-[#17253d] hover:border-cyan-500/40 p-7 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 group h-full">
                    
                    <div>
                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-6 shadow-md ${sol.iconBg}`}
                      >
                        {sol.icon}
                      </div>

                      {/* Title & Badge */}
                      <h3 className="text-[20px] sm:text-[21px] font-bold text-white tracking-tight font-sans">
                        {sol.title}{" "}
                        {sol.subtitleBadge && (
                          <span className="text-[12.5px] font-normal text-[#8fa2b8] tracking-normal block sm:inline mt-0.5 sm:mt-0">
                            {sol.subtitleBadge}
                          </span>
                        )}
                      </h3>

                      {/* Description */}
                      <p className="text-[13px] sm:text-[13.5px] text-[#8fa2b8] leading-[1.6] mt-2 mb-7 font-sans font-normal">
                        {sol.description}
                      </p>

                      {/* 2-Column Features Checklist */}
                      <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-3.5 my-auto">
                        <div className="flex flex-col space-y-3.5">
                          {sol.featuresLeft.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 stroke-[2.5]" />
                              <span className="text-[12px] sm:text-[12.5px] text-[#cbd5e1] leading-tight font-sans">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col space-y-3.5">
                          {sol.featuresRight.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5 stroke-[2.5]" />
                              <span className="text-[12px] sm:text-[12.5px] text-[#cbd5e1] leading-tight font-sans">
                                {feat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <div className="pt-8 mt-auto">
                      <Link
                        href={sol.actionLink}
                        className="bg-[#080f1c] hover:bg-[#111e34] border border-[#1b2b42] hover:border-cyan-500/50 text-[#cbd5e1] hover:text-white font-medium text-[12.5px] sm:text-[13px] px-5 py-2.5 rounded-lg inline-flex items-center gap-2 transition-all group/btn self-start"
                      >
                        <span>{sol.actionText}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#8fa2b8] group-hover/btn:text-white" />
                      </Link>
                    </div>

                  </div>
                </TiltCard>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 3: COMPLETE ENTERPRISE ECOSYSTEM (Tailored for HRM & CRM)
      ========================================================================== */}
      <section className="ecosystem-section w-full bg-black py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        {/* Soft radial ambient background glow */}
        <div
          className="pointer-events-none absolute right-10 top-20 w-[600px] h-[350px] rounded-full opacity-20 blur-[130px]"
          style={{
            background:
              "radial-gradient(circle, rgba(14, 116, 144, 0.4) 0%, rgba(29, 78, 216, 0.25) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto relative z-10">
          {/* Top Header: Title, Subtitle & Neon Cyan Bar */}
          <div className="ecosystem-header flex flex-col text-left max-w-[650px] mb-6 sm:mb-8">
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold text-white tracking-[-0.03em] leading-[1.08] font-sans">
              <span className="block">Complete Business</span>
              <span className="block text-white">Ecosystem</span>
            </h2>

            <p className="text-[14px] sm:text-[15px] md:text-[16px] text-[#8fa2b8] mt-3 font-normal font-sans">
              All stakeholders, workflows, and departments connected in one intelligent platform.
            </p>

            {/* Glowing cyan/blue underline accent bar matching Figma */}
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.85)] mt-3.5" />
          </div>

          {/* 3D Diagonal Highway - Tailored for HRM & CRM */}
          <div className="ecosystem-highway relative w-full my-4 sm:my-6">
            <MobilityEcosystemHighway customStakeholders={hrmEcosystemStakeholders} />
          </div>

          {/* =========================================================================
              KEY FEATURES CONTAINER CARD (Tailored for HRM, CRM & Automation)
          ========================================================================== */}
          <div className="ecosystem-features-card relative rounded-3xl bg-[#09121f]/90 border border-[#16273d] p-6 sm:p-8 md:p-10 overflow-hidden shadow-2xl mt-8 sm:mt-12">
            {/* Subtle Blue Backlight inside Container */}
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

                <h3 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white tracking-tight leading-[1.14] font-sans mb-6 sm:mb-7">
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
                  {hrmKeyFeatures.map((feat, fIdx) => (
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
          SECTION 4: VERIFIED ENTERPRISE CASE STUDY
      ========================================================================== */}
      <section className="case-study-sec relative w-full py-16 sm:py-24 bg-black overflow-hidden text-left">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Large Dark Floating Case Study Card */}
          <div className="case-study-card-inner relative w-full rounded-[28px] sm:rounded-[36px] bg-[#0c1422]/90 border border-[#1a293e] p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl">
            
            {/* Ambient Emerald/Teal Radial Glow in bottom-left */}
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 rounded-full opacity-25 blur-[120px] z-0"
              style={{ background: "#059669" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Narrative, Quote, Author */}
              <div className="lg:col-span-7 flex flex-col">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-emerald-400 uppercase block mb-3">
                  VERIFIED ENTERPRISE CASE STUDY
                </span>

                <h3 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-[1.12] font-sans mb-4">
                  Command &amp; Guard Orchestration for 4,500 Security Personnel
                </h3>

                <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans mb-8 max-w-[540px]">
                  Unified 180 corporate client sites, reducing guard absenteeism from 18% to 1.2%.
                </p>

                {/* Quote Box matching reference screenshot */}
                <div className="pt-2">
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#cbd5e1] font-sans mb-2 leading-relaxed">
                    &ldquo;Satyakabir built our flagship security platform that won us <span className="italic">three</span> Fortune 500 industrial facility contracts.&rdquo;
                  </p>
                  <p className="text-[12px] sm:text-[12.5px] text-[#8fa0b5] font-normal font-sans">
                    <strong className="text-white font-semibold">Col. Sanjeev Mehra (Retd.)</strong> &bull; Chief of Operations, Apex Shield
                  </p>
                </div>
              </div>

              {/* Right Column: 3 Stat Cards Stacked Vertically */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-4.5">
                {caseStudyStats.map((stat, idx) => (
                  <TiltCard key={idx} maxTilt={4} scale={1.02} glare={true} glareOpacity={0.08} className="rounded-2xl">
                    <div className="rounded-2xl bg-[#0a1322]/95 hover:bg-[#0f1b2e] border border-[#18283e] hover:border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-center items-center text-center shadow-lg transition-all group cursor-default">
                      <span className="text-[24px] sm:text-[28px] font-bold text-[#38bdf8] font-sans tracking-tight mb-1 group-hover:scale-105 transition-transform">
                        {`${stat.value} ${stat.title}`}
                      </span>
                      <span className="text-[10px] sm:text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#64748b] font-medium">
                        VERIFIED OUTCOME
                      </span>
                    </div>
                  </TiltCard>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR DEVELOPMENT PROCESS & SECURITY CHECKLIST (Matching tour-travels)
      ========================================================================== */}
      <section className="process-section relative w-full pt-16 sm:pt-20 pb-12 sm:pb-16 bg-black overflow-hidden text-left">
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
          SECTION 6: BOTTOM CTA: LET'S BUILD A SMARTER, SAFER OPERATION TOGETHER
      ========================================================================== */}
      <section className="bottom-cta-section relative w-full pt-10 sm:pt-14 pb-20 sm:pb-28 bg-black overflow-hidden text-left">
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
