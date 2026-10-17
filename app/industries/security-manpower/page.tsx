"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {

  Briefcase,
  Layers,
  Heart,
  Globe,
  Bell,
  ArrowRight,
  Shield,
  Radio,
  Lock,
  Check,
  User,
  Video,
  CreditCard,
  Building2,
  Clock,
  MapPin,
  Navigation,
  AlertTriangle,
  FileCheck,
  Search,
  ShieldCheck,
  BarChart3,
  UserCheck,
  Cpu,
  Zap,
  Target,
  Activity,
} from "lucide-react";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";
import TiltCard from "@/app/components/ui/TiltCard";

// 4 Bottom Key Metrics matching user reference screenshot
const statsData = [
  {
    value: "120+",
    label: "Agri Platforms Delivered",
    icon: <Briefcase className="w-5 h-5 text-white" />,
    gradient: "from-teal-400 via-cyan-500 to-blue-600",
  },
  {
    value: "12,000+",
    label: "Farmers Onboarded",
    icon: <Layers className="w-5 h-5 text-white" />,
    gradient: "from-amber-400 via-orange-500 to-rose-500",
  },
  {
    value: "98%",
    label: "Client Retention",
    icon: <Heart className="w-5 h-5 text-white" />,
    gradient: "from-rose-400 via-pink-500 to-amber-400",
  },
  {
    value: "40+",
    label: "Districts Covered",
    icon: <Globe className="w-5 h-5 text-white" />,
    gradient: "from-cyan-400 via-teal-500 to-emerald-400",
  },
];

// Horizontal Feature Pills matching user reference screenshot
const featurePills = [
  { text: "AI Moderation Platform", isPrimary: true },
  { text: "Live Streaming", isPrimary: false },
  { text: "Scalable & Secure", isPrimary: false },
  { text: "1-to-1 Video Calls", isPrimary: false },
  { text: "Dating & Social Discovery", isPrimary: false },
  { text: "100% Code Ownership & Git Handover", isPrimary: false },
  { text: "AI Guard Deployment", isPrimary: false },
  { text: "Geo-Fenced Attendance", isPrimary: false },
  { text: "Live Incident Response", isPrimary: false },
  { text: "Client Billing Portals", isPrimary: false },
];

// 6 Core Security & Manpower Solutions matching reference design
const securitySolutions = [
  {
    id: "security-guard-management",
    title: "Security Guard Management",
    icon: <Shield className="w-4 h-4 text-cyan-400" />,
    checklist: [
      "Guard Deployment",
      "Shift Management",
      "Attendance Tracking",
      "Patrolling & Incident Reports",
    ],
    image: "/images/sec-art-1.png",
    imageAlt: "Security Guard Management holographic shield",
    imageClass: "w-[130px] h-[130px] object-contain opacity-95",
    href: "/industries/security-manpower/security-guard-management",
  },
  {
    id: "manpower-supply-management",
    title: "Manpower Supply Management",
    icon: <User className="w-4 h-4 text-cyan-400" />,
    checklist: [
      "Employee Database",
      "Recruitment & Onboarding",
      "Client Allocation",
      "Payroll & Compliance",
    ],
    image: "/images/sec-art-2.png",
    imageAlt: "Manpower Supply Management team",
    imageClass: "w-[145px] h-[130px] object-contain object-bottom opacity-90",
    href: "/industries/security-manpower/manpower-supply-management",
  },
  {
    id: "cctv-monitoring-management",
    title: "CCTV Monitoring & Management",
    icon: <Video className="w-4 h-4 text-cyan-400" />,
    checklist: [
      "Live Camera Monitoring",
      "Device Management",
      "AMC & Service Tracking",
      "Service Tickets & Support",
    ],
    image: "/images/sec-art-3.png",
    imageAlt: "CCTV wireframe camera",
    imageClass: "w-[125px] h-[125px] object-contain opacity-95",
    href: "/industries/security-manpower/cctv-monitoring-management",
  },
  {
    id: "visitor-management",
    title: "Visitor Management",
    icon: <CreditCard className="w-4 h-4 text-cyan-400" />,
    checklist: [
      "Digital Visitor Entry",
      "QR Code Verification",
      "Gate Pass Management",
      "Host Notifications",
    ],
    image: "/images/sec-art-4.png",
    imageAlt: "Visitor Management guests",
    imageClass: "w-[145px] h-[125px] object-contain object-bottom opacity-90",
    href: "/industries/security-manpower/visitor-management",
  },
  {
    id: "facility-site-management",
    title: "Facility & Site Management",
    icon: <Building2 className="w-4 h-4 text-cyan-400" />,
    checklist: [
      "Multiple Site Management",
      "Checklists & Inspections",
      "Asset Management",
      "Client Reporting",
    ],
    image: "/images/sec-art-5.png",
    imageAlt: "Facility Site Management dashboards",
    imageClass: "w-[130px] h-[115px] object-contain object-bottom opacity-95",
    href: "/industries/security-manpower/facility-site-management",
  },
  {
    id: "field-workforce-management",
    title: "Field Workforce Management",
    icon: <Clock className="w-4 h-4 text-cyan-400" />,
    checklist: [
      "Geo-Fenced Attendance",
      "Task Allocation",
      "Real-Time Tracking",
      "Productivity Reports",
    ],
    image: "/images/sec-art-6.png",
    imageAlt: "Field Workforce Management workers",
    imageClass: "w-[130px] h-[120px] object-contain object-bottom opacity-95",
    href: "/industries/security-manpower/field-workforce-management",
  },
];

// 6 Connected Ecosystem Stakeholders matching reference design
const ecosystemStakeholders = [
  {
    role: "Guards",
    subtitle: "On-Ground",
    icon: <Shield className="w-5 h-5 text-cyan-400" />,
  },
  {
    role: "Supervisors",
    subtitle: "Field Monitoring",
    icon: <Radio className="w-5 h-5 text-cyan-400" />,
  },
  {
    role: "Clients",
    subtitle: "Real-Time Updates",
    icon: <UserCheck className="w-5 h-5 text-cyan-400" />,
  },
  {
    role: "CCTV Systems",
    subtitle: "Live Surveillance",
    icon: <Video className="w-5 h-5 text-cyan-400" />,
  },
  {
    role: "Operations Team",
    subtitle: "Command Centre",
    icon: <Cpu className="w-5 h-5 text-cyan-400" />,
  },
  {
    role: "Management",
    subtitle: "Analytics & Reports",
    icon: <BarChart3 className="w-5 h-5 text-cyan-400" />,
  },
];

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

// 4 Platform Screens matching user reference screenshot
const platformScreens = [
  {
    title: "Guard App",
    image: "/images/sec-platform-1.png",
  },
  {
    title: "Supervisor App",
    image: "/images/sec-platform-2.png",
  },
  {
    title: "Client Portal",
    image: "/images/sec-platform-3.png",
  },
  {
    title: "Admin Dashboard",
    image: "/images/sec-platform-4.png",
  },
];

// 7 Process Steps matching reference screenshot
const processSteps = [
  { number: 1, label: "Discover" },
  { number: 2, label: "Strategy" },
  { number: 3, label: "UI/UX" },
  { number: 4, label: "Development" },
  { number: 5, label: "Testing" },
  { number: 6, label: "Deployment" },
  { number: 7, label: "Support" },
];

// 6 Security Checklist items matching reference screenshot
const securityChecklist = [
  "AI Content Moderation",
  "User Reporting",
  "Fraud Detection",
  "Secure Payments",
  "Real-Time Monitoring",
  "Data Privacy & Compliance",
];

// 4 Bottom Outcome Cards matching reference screenshot
const ctaBenefits = [
  {
    title: "Reduce Manual Work",
    icon: <Zap className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Improve Accountability",
    icon: <Target className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Increase Efficiency",
    icon: <Activity className="w-5 h-5 text-cyan-400" />,
  },
  {
    title: "Build Client Trust",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
  },
];

export default function SecurityManpowerIndustryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (heroRef.current) {
        gsap.fromTo(
          ".sec-hero-elem",
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
          ".sec-hero-visual",
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
      }
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#060c14] text-white select-none overflow-hidden min-h-screen"
    >
      {/* Inline styles for continuous seamless marquee ticker & Caveat script font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&display=swap');
        @keyframes secPillScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .sec-pill-marquee {
          display: flex;
          width: max-content;
          animation: secPillScroll 35s linear infinite;
          will-change: transform;
        }
        .sec-pill-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* =========================================================================
          HERO SECTION (Matching user reference screenshot exactly)
      ========================================================================== */}
      <section
        ref={heroRef}
        className="relative pt-8 sm:pt-12 md:pt-16 pb-0 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between"
        style={{
          background:
            "radial-gradient(ellipse at 75% 35%, rgba(14, 116, 144, 0.22) 0%, rgba(8, 47, 73, 0.15) 30%, #060c14 70%)",
        }}
      >
        {/* Soft Background Cyan Radial Glow */}
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
            
            {/* Left Column: Breadcrumb, Main Title, Subtitle, Pills Row */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              {/* Breadcrumb: HOME > SECURITY & MEN POWER */}
              <div className="sec-hero-elem flex items-center gap-2 mb-6 sm:mb-8">
                <Link
                  href="/"
                  className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#8fa2b8] uppercase hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <span className="text-[11px] sm:text-[12px] font-mono text-cyan-500">›</span>
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-cyan-400 font-bold uppercase">
                  SECURITY & MEN POWER
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="sec-hero-elem text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[66px] font-bold text-white tracking-[-0.035em] leading-[1.06] font-[family-name:var(--font-space-grotesk)]">
                <span className="block">Digitally Manage Your</span>
                <span className="block">Security Operations &</span>
                <span className="block text-white">Guard Force.</span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="sec-hero-elem text-[14px] sm:text-[15.5px] md:text-[16px] text-[#93a4b9] leading-[1.65] max-w-[580px] font-normal mt-5 sm:mt-6 font-sans">
                From guard deployment and geo-fenced attendance to live incident
                response and client billing portals, Satyakabir builds reliable
                platforms that eliminate ghost guards.
              </p>

              {/* CTA Button + Horizontal Pills Bar (Matching screenshot exactly) */}
              <div className="sec-hero-elem mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                
                {/* Discuss Your Project CTA Button */}
                <Link
                  href="/#contact-cta"
                  className="bg-[#101b2c]/95 hover:bg-[#16273f] active:scale-95 text-white font-medium text-[13.5px] sm:text-[14px] px-5 sm:px-6 py-2.5 rounded-full border border-[#253956] hover:border-cyan-400/50 inline-flex items-center gap-2 shrink-0 transition-all shadow-md group cursor-pointer font-sans"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Marquee Ticker of Feature Pills */}
                <div className="relative w-full max-w-[520px] overflow-hidden py-1">
                  
                  {/* Left & Right Edge Fades */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#060c14] to-transparent z-10" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#060c14] to-transparent z-10" />

                  <div className="sec-pill-marquee flex items-center gap-2.5">
                    {[...featurePills, ...featurePills].map((pill, pIdx) => (
                      <div
                        key={pIdx}
                        className={`text-[11.5px] sm:text-[12px] font-mono tracking-wide px-3.5 py-1.5 rounded-full flex items-center gap-2 shrink-0 select-none transition-all ${
                          pill.isPrimary
                            ? "bg-gradient-to-r from-[#1d4ed8] to-[#0284c7] text-white font-semibold shadow-[0_0_18px_rgba(29,78,216,0.6)] border border-[#38bdf8]/50"
                            : "bg-[#0c1626]/85 border border-[#1b2b42] text-[#8fa2b8] hover:border-cyan-500/40 hover:text-white"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            pill.isPrimary
                              ? "bg-white shadow-[0_0_6px_#fff]"
                              : "bg-cyan-400 shadow-[0_0_6px_#22d3ee]"
                          }`}
                        />
                        <span>{pill.text}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

            </div>

            {/* Right Column: Hero Visual Showcase (Guard + High-Tech Tablet Dashboard) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="sec-hero-visual relative w-full max-w-[540px] lg:max-w-[580px]">
                
                {/* 3D Tilt Card Wrapper */}
                <TiltCard maxTilt={5} scale={1.01} glare={false} className="relative w-full block">
                  
                  {/* Subtle Background Glow Ring */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-35 blur-3xl z-0"
                    style={{ background: "#06b6d4" }}
                    aria-hidden="true"
                  />

                  {/* Main Artwork Container with Soft Vignette Mask */}
                  <div className="relative z-10 rounded-[28px] overflow-hidden border border-[#16273d]/70 bg-[#091321]/60 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
                    <Image
                      src="/images/security-guard-hero.jpg"
                      alt="Digitally Manage Your Security Operations & Guard Force"
                      width={1200}
                      height={896}
                      priority
                      className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
                    />

                    {/* Gradient overlay to blend bottom into dark backdrop */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060c14] via-[#060c14]/60 to-transparent pointer-events-none" />
                  </div>

                </TiltCard>

                {/* Floating Notification Badge matching screenshot Bell (7) */}
                <div className="absolute -right-2 sm:-right-4 top-6 sm:top-10 z-20 pointer-events-auto">
                  <TiltCard maxTilt={8} scale={1.05} glare={true} className="rounded-2xl">
                    <div className="flex items-center gap-3 bg-[#0a1526]/90 backdrop-blur-xl border border-cyan-500/40 rounded-2xl px-4 py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-pointer hover:border-cyan-400 transition-all">
                      <div className="relative w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                        <Bell className="w-4 h-4 text-amber-400" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9.5px] font-bold rounded-full flex items-center justify-center shadow-sm">
                          7
                        </span>
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[12px] font-bold text-white leading-tight font-sans">
                          Active Dispatch Alerts
                        </span>
                        <span className="text-[10px] text-cyan-300 leading-tight mt-0.5 font-sans">
                          Perimeter Geofence Verified
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {/* Floating Tag 2: End-to-End Encrypted Guard Log */}
                <div className="absolute -left-3 sm:-left-6 bottom-10 sm:bottom-14 z-20 pointer-events-auto hidden sm:block">
                  <TiltCard maxTilt={8} scale={1.05} glare={true} className="rounded-2xl">
                    <div className="flex items-center gap-2.5 bg-[#091522]/90 backdrop-blur-xl border border-[#1b344e] rounded-xl px-3.5 py-2 shadow-[0_15px_35px_rgba(0,0,0,0.8)] cursor-pointer hover:border-cyan-500/50 transition-all">
                      <div className="w-7 h-7 rounded-lg bg-cyan-950/70 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shrink-0">
                        <Lock className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[11.5px] font-bold text-white leading-tight font-sans">
                          100% Tamper-Proof Logs
                        </span>
                        <span className="text-[9.5px] text-[#8fa2b8] leading-tight font-sans">
                          GPS & Biometric Verification
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 4 Bottom Key Metrics Stats Bar (Matching user screenshot exactly) */}
        <div className="w-full border-t border-[#132032] bg-[#040810]/95 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="max-w-[1340px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
              {statsData.map((stat, idx) => (
                <div
                  key={idx}
                  className="sec-hero-elem flex items-center gap-3.5 sm:gap-4 group cursor-default"
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
          2. OUR SECURITY & MANPOWER SOLUTIONS SECTION
      ========================================================================== */}
      <section
        id="solutions"
        className="relative w-full py-20 sm:py-28 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left"
      >
        {/* Soft Ambient Corner Glows */}
        <div
          className="pointer-events-none absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[140px] z-0"
          style={{ background: "#0e7490" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 bottom-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[140px] z-0"
          style={{ background: "#0284c7" }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Title & Subtitle on Left, "View All Solutions →" on Right */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="flex flex-col max-w-[700px]">
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-3">
                OUR SOLUTIONS
              </span>
              <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold tracking-tight text-white font-[family-name:var(--font-space-grotesk)] leading-[1.12] mb-3">
                Our Security &amp; Manpower Solutions
              </h2>
              <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans">
                Comprehensive digital solutions for security companies, facility management firms and large enterprises.
              </p>
            </div>

            {/* Right link: View All Solutions → */}
            <Link
              href="#solutions"
              className="text-[13.5px] sm:text-[14px] font-semibold text-[#ff2a85] hover:text-[#ff4d9d] inline-flex items-center gap-1.5 transition-colors shrink-0 group cursor-pointer font-sans"
            >
              <span>View All Solutions</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* 6 Cards Grid (3 Columns on Large, 2 on Tablet, 1 on Mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {securitySolutions.map((sol) => (
              <TiltCard
                key={sol.id}
                maxTilt={4}
                scale={1.015}
                glare={true}
                glareOpacity={0.08}
                className="rounded-[22px] h-full"
              >
                <div className="relative rounded-[22px] bg-[#0c1524]/85 hover:bg-[#0f1b2e] border border-[#1b2b42] hover:border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 shadow-xl group h-full min-h-[255px]">
                  
                  {/* Subtle inner corner cyan light */}
                  <div className="pointer-events-none absolute -right-12 -top-12 w-28 h-28 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500" />

                  {/* Top Content: Icon & Title */}
                  <div className="relative z-10 mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#091f33] border border-[#143e5c] flex items-center justify-center shrink-0 mb-3 shadow-inner">
                      {sol.icon}
                    </div>
                    <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-space-grotesk)]">
                      {sol.title}
                    </h3>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-2 mb-5 relative z-10 max-w-[190px] sm:max-w-[210px]">
                    {sol.checklist.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 stroke-[2.5]" />
                        <span className="text-[12px] sm:text-[12.5px] text-[#9fb1c7] leading-tight font-normal font-sans">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="relative z-10 pt-1">
                    <Link
                      href={sol.href}
                      className="text-[12.5px] sm:text-[13px] font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors group/link cursor-pointer font-sans"
                    >
                      <span>Learn More</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                  {/* Bottom Right Card Illustration Artwork */}
                  <div className="absolute right-0 bottom-0 pointer-events-none select-none z-0">
                    <div className="relative">
                      <Image
                        src={sol.image}
                        alt={sol.imageAlt}
                        width={180}
                        height={160}
                        className={sol.imageClass}
                      />
                    </div>
                  </div>

                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          3. COMPLETE SECURITY ECOSYSTEM SECTION
      ========================================================================== */}
      <section
        className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left"
      >
        {/* Soft Ambient Glow */}
        <div
          className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-10 blur-[130px] z-0"
          style={{ background: "#0e7490" }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="max-w-[700px] mb-10 sm:mb-14">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-3">
              CONNECTED ARCHITECTURE
            </span>
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold tracking-tight text-white font-[family-name:var(--font-space-grotesk)] leading-[1.12] mb-2.5">
              <span className="block">Complete Security</span>
              <span className="block text-white">Ecosystem</span>
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans">
              All stakeholders connected in one integrated platform.
            </p>
          </div>

          {/* Horizontal Process / Stakeholder Flow */}
          <div className="w-full overflow-x-auto no-scrollbar pb-3 pt-1">
            <div className="flex items-center justify-between min-w-[780px] lg:min-w-0 gap-2.5 sm:gap-3">
              {ecosystemStakeholders.map((stakeholder, sIdx) => (
                <React.Fragment key={stakeholder.role}>
                  
                  {/* Stakeholder Item */}
                  <div className="flex flex-col items-center text-center group cursor-default">
                    {/* Role Title */}
                    <span className="text-[13px] sm:text-[14px] font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                      {stakeholder.role}
                    </span>

                    {/* Card Container */}
                    <TiltCard maxTilt={5} scale={1.03} glare={true} glareOpacity={0.1} className="rounded-2xl">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0c1524]/90 hover:bg-[#111e33] border border-[#1b2b42] hover:border-cyan-500/50 flex flex-col items-center justify-center transition-all duration-300 shadow-lg group-hover:shadow-cyan-950/40">
                        {/* Inner glowing screen/icon */}
                        <div className="w-8 h-8 rounded-xl bg-[#142338] border border-[#1e3450] flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
                          {stakeholder.icon}
                        </div>
                      </div>
                    </TiltCard>

                    {/* Subtitle / Function */}
                    <span className="text-[10.5px] sm:text-[11.5px] text-[#8fa0b5] mt-2 font-normal whitespace-nowrap font-sans">
                      {stakeholder.subtitle}
                    </span>
                  </div>

                  {/* Connecting Arrow between stakeholders */}
                  {sIdx < ecosystemStakeholders.length - 1 && (
                    <div className="text-slate-600 text-[15px] sm:text-[17px] font-mono shrink-0 mb-5 select-none">
                      →
                    </div>
                  )}

                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Signature Cursive Tagline on bottom right */}
          <div className="text-right mt-6 sm:mt-8 pr-2">
            <span
              className="text-[20px] sm:text-[23px] text-cyan-400 font-bold italic tracking-wide select-none"
              style={{ fontFamily: "'Caveat', cursive, sans-serif" }}
            >
              More Than Security — Peace of Mind
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. KEY FEATURES SECTION (Floating Dark Card Container)
      ========================================================================== */}
      <section className="relative w-full py-14 sm:py-20 bg-[#060c14] overflow-hidden text-left">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Floating Dark Container Card */}
          <div className="relative w-full rounded-[26px] sm:rounded-[32px] bg-[#0c1320]/90 border border-[#1a293e] p-6 sm:p-9 md:p-10 overflow-hidden shadow-2xl">
            
            {/* Subtle Cyan/Blue Backlight inside Container */}
            <div
              className="pointer-events-none absolute -left-20 -top-20 w-72 h-72 rounded-full opacity-15 blur-[90px] z-0"
              style={{ background: "#2563eb" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              
              {/* Left Column: Eyebrow, Heading, Button */}
              <div className="lg:col-span-4 flex flex-col justify-center">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
                  OUR MODEL
                </span>

                <h3 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-6 sm:mb-7">
                  Key Features
                </h3>

                <Link
                  href="/#contact-cta"
                  className="w-fit bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7] hover:from-[#1e40af] hover:to-[#0369a1] text-white font-semibold text-[12.5px] sm:text-[13px] tracking-wide uppercase px-6 py-3 rounded-full shadow-[0_0_22px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_rgba(37,99,235,0.85)] inline-flex items-center gap-2 group transition-all cursor-pointer font-sans"
                >
                  <span>START PROJECT NOW</span>
                  <span className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </Link>
              </div>

              {/* Right Column: 10 Feature Pill Cards (5 columns x 2 rows on desktop) */}
              <div className="lg:col-span-8">
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
                        <span className="text-[9.5px] font-mono text-slate-400 leading-none mb-1">
                          {feat.number}
                        </span>
                        <span className="text-[11.5px] sm:text-[12px] font-semibold text-white truncate leading-tight group-hover:text-cyan-300 transition-colors font-sans">
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
          5. FEATURED PRODUCT / SEAMLESS PRODUCTIVITY SECTION
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Card 1: Start your project from your pocket. */}
            <div className="md:col-span-6 lg:col-span-4 rounded-[28px] bg-gradient-to-b from-[#0c1524] to-[#070d18] border border-[#1b2b40] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[420px] group hover:border-cyan-500/50 transition-all relative">
              {/* Top Title */}
              <div className="relative z-20">
                <h4 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-space-grotesk)] max-w-[220px]">
                  Start your project from your pocket.
                </h4>
              </div>

              {/* Ambient Blue Radial Glow behind phones */}
              <div
                className="pointer-events-none absolute left-1/2 bottom-8 -translate-x-1/2 w-52 h-52 rounded-full opacity-30 blur-3xl z-0"
                style={{ background: "#0284c7" }}
                aria-hidden="true"
              />

              {/* 3 Fanned Phones Showcase */}
              <div className="relative z-10 w-full h-[220px] sm:h-[240px] flex items-end justify-center pt-2">
                {/* Left Phone: tilted left */}
                <div className="absolute left-1/2 -translate-x-[110%] sm:-translate-x-[116%] bottom-[-18px] sm:bottom-[-22px] w-[130px] sm:w-[145px] -rotate-[16deg] origin-bottom-right z-10 transition-transform duration-500 group-hover:-rotate-[19deg] group-hover:-translate-x-[122%] opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/sec-phone-clean.png"
                    alt="Security Mobile App Left View"
                    width={424}
                    height={589}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Right Phone: tilted right */}
                <div className="absolute left-1/2 translate-x-[10%] sm:translate-x-[16%] bottom-[-18px] sm:bottom-[-22px] w-[130px] sm:w-[145px] rotate-[16deg] origin-bottom-left z-10 transition-transform duration-500 group-hover:rotate-[19deg] group-hover:translate-x-[22%] opacity-90 drop-shadow-[0_15px_30px_rgba(0,0,0,0.85)]">
                  <Image
                    src="/images/sec-phone-clean.png"
                    alt="Security Mobile App Right View"
                    width={424}
                    height={589}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Center Phone: elevated and in front */}
                <div className="relative z-20 w-[145px] sm:w-[160px] -mb-3 sm:-mb-4 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)]">
                  <Image
                    src="/images/sec-phone-clean.png"
                    alt="Start your project from your pocket - Security Mobile App"
                    width={424}
                    height={589}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Card 2: Available on all responsive devices. */}
            <div className="md:col-span-6 lg:col-span-4 rounded-[28px] bg-gradient-to-b from-[#0c1524] to-[#070d18] border border-[#1b2b40] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[380px] sm:min-h-[420px] group hover:border-cyan-500/50 transition-all relative">
              {/* Top Title */}
              <div className="relative z-20 max-w-[210px]">
                <h4 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-space-grotesk)]">
                  Available on all responsive devices.
                </h4>
              </div>

              {/* Ambient Warm Amber/Teal Radial Glow behind tablet */}
              <div
                className="pointer-events-none absolute right-4 bottom-12 w-56 h-56 rounded-full opacity-25 blur-3xl z-0"
                style={{ background: "#f97316" }}
                aria-hidden="true"
              />

              {/* Clean Transparent Tablet Visual filling right half and bleeding bottom-right */}
              <div className="absolute right-[-15px] sm:right-[-25px] bottom-[-25px] sm:bottom-[-35px] w-[260px] sm:w-[290px] md:w-[315px] z-10 pointer-events-none transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <Image
                  src="/images/sec-tablet-clean.png"
                  alt="Available on all responsive devices - Tablet Dashboard"
                  width={375}
                  height={666}
                  className="w-full h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)]"
                />
              </div>
            </div>

            {/* Right Column: Featured Product Narrative & Store Buttons */}
            <div className="md:col-span-12 lg:col-span-4 flex flex-col justify-center text-left lg:pl-2 pt-4 lg:pt-0">
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
                FEATURED PRODUCT
              </span>

              <h3 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-3.5">
                Seamless productivity with our new app
              </h3>

              <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans mb-5 max-w-[440px]">
                Download Synck and experience a new era of organization and accomplishment.
              </p>

              {/* Bullet points */}
              <div className="space-y-2 mb-7">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_#38bdf8] shrink-0" />
                  <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-200 font-sans">
                    PPO Development
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_#38bdf8] shrink-0" />
                  <span className="text-[13.5px] sm:text-[14px] font-medium text-slate-200 font-sans">
                    Easy to Use
                  </span>
                </div>
              </div>

              {/* Store download buttons */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
                <Link
                  href="#app-store"
                  className="bg-[#101b2c]/95 hover:bg-[#16273f] text-white border border-[#22354e] hover:border-cyan-500/50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[12.5px] sm:text-[13px] font-medium inline-flex items-center gap-2.5 transition-all shadow-md group cursor-pointer font-sans"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white shrink-0" aria-hidden="true">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.89c.66-.82 1.1-1.96.98-3.1-.95.04-2.1.64-2.78 1.43-.6.69-1.13 1.83-.99 2.94 1.06.08 2.13-.45 2.79-1.27z" />
                  </svg>
                  <span>Get it on App Store</span>
                </Link>

                <Link
                  href="#play-store"
                  className="bg-[#101b2c]/95 hover:bg-[#16273f] text-white border border-[#22354e] hover:border-cyan-500/50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-[12.5px] sm:text-[13px] font-medium inline-flex items-center gap-2.5 transition-all shadow-md group cursor-pointer font-sans"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white shrink-0" aria-hidden="true">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.986 1.986 0 0 1-.61-.954V2.768c0-.363.227-.698.609-.954zm11.235 11.236l2.186 2.186-11.838 6.83 9.652-9.016zm0-2.1L5.192 1.938l11.838 6.83-2.186 2.182zm1.488 1.488l3.656 2.108a1.996 1.996 0 0 0 0-3.464l-3.656 2.108a.965.965 0 0 1 0-.752z" />
                  </svg>
                  <span>Get it on Play Store</span>
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. VERIFIED ENTERPRISE CASE STUDY SECTION
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-24 bg-[#060c14] overflow-hidden text-left">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Large Dark Floating Case Study Card */}
          <div className="relative w-full rounded-[28px] sm:rounded-[36px] bg-[#0c1422]/90 border border-[#1a293e] p-8 sm:p-12 md:p-14 overflow-hidden shadow-2xl">
            
            {/* Ambient Emerald/Teal Radial Glow in bottom-left */}
            <div
              className="pointer-events-none absolute -left-20 -bottom-20 w-80 h-80 rounded-full opacity-25 blur-[120px] z-0"
              style={{ background: "#059669" }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Narrative, Quote, Author */}
              <div className="lg:col-span-7 flex flex-col">
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-3">
                  VERIFIED ENTERPRISE CASE STUDY
                </span>

                <h3 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-4">
                  Command &amp; Guard Orchestration for 4,500 Security Personnel
                </h3>

                <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans mb-8 max-w-[540px]">
                  Unified 180 corporate client sites, reducing guard absenteeism from 18% to 1.2%.
                </p>

                {/* Quote Box */}
                <div className="border-l-2 border-cyan-500/70 pl-4 py-1">
                  <p className="text-[13.5px] sm:text-[14.5px] text-[#cbd5e1] font-sans italic mb-2">
                    “Satyakabir built our flagship security platform that won us three Fortune 500 industrial facility contracts.”
                  </p>
                  <p className="text-[12px] sm:text-[12.5px] text-[#8fa0b5] font-normal font-sans">
                    <strong className="text-white font-semibold">Col. Sanjeev Mehra (Retd.)</strong> • Chief of Operations, Apex Shield
                  </p>
                </div>
              </div>

              {/* Right Column: 3 Stat Cards Stacked Vertically */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-4.5">
                {[
                  { value: "4,500+", title: "Active Personnel" },
                  { value: "99.8%", title: "Shift Fill Rate" },
                  { value: "100%", title: "Digital Audits" },
                ].map((stat, idx) => (
                  <TiltCard key={idx} maxTilt={4} scale={1.02} glare={true} glareOpacity={0.08} className="rounded-2xl">
                    <div className="rounded-2xl bg-[#0a1322]/95 hover:bg-[#0f1b2e] border border-[#18283e] hover:border-cyan-500/40 p-5 sm:p-6 flex flex-col justify-center items-center text-center shadow-lg transition-all group cursor-default">
                      <span className="text-[24px] sm:text-[28px] font-bold text-[#38bdf8] font-[family-name:var(--font-space-grotesk)] tracking-tight mb-1 group-hover:scale-105 transition-transform">
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
          7. PLATFORM SCREENS SHOWCASE SECTION
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Heading matching reference screenshot */}
          <div className="mb-8 sm:mb-10">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
              INTERFACE PREVIEWS
            </span>
            <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-3">
              Platform Screens
            </h2>
            <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans max-w-[620px]">
              Intuitive mobile and desktop experiences designed for guards, supervisors, clients and command teams.
            </p>
          </div>

          {/* 4 Platform Screen Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
            {platformScreens.map((screen, sIdx) => (
              <TiltCard
                key={sIdx}
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.08}
                className="rounded-[22px] h-full"
              >
                <div className="relative rounded-[22px] overflow-hidden bg-[#0c1422] border border-[#1d2d42] hover:border-cyan-500/60 shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  
                  {/* Screen Artwork */}
                  <div className="relative w-full aspect-[144/104] overflow-hidden bg-[#070d18]">
                    <Image
                      src={screen.image}
                      alt={`${screen.title} interface preview`}
                      width={576}
                      height={416}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Gradient highlight on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>

                  {/* Frosted Glass Bottom Overlay Bar with crisp typography */}
                  <div className="absolute inset-x-0 bottom-0 bg-[#08101a]/85 backdrop-blur-md border-t border-white/10 px-4 sm:px-5 py-3 flex items-center justify-between z-20">
                    <span className="text-[13.5px] sm:text-[14.5px] font-bold text-white tracking-tight font-[family-name:var(--font-space-grotesk)]">
                      {screen.title}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_8px_#22d3ee]" />
                  </div>

                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. OUR DEVELOPMENT PROCESS & SAFE. SMART. SOCIAL. SECTION
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-22 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Our Development Process Flow */}
            <div className="lg:col-span-7 xl:col-span-8 text-left">
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-2.5">
                WORKFLOW & DEPLOYMENT
              </span>
              <h3 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold text-white tracking-tight leading-[1.14] font-[family-name:var(--font-space-grotesk)] mb-8 sm:mb-9">
                Our Development Process
              </h3>

              <div className="flex items-start justify-between gap-1 sm:gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none">
                {processSteps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className="flex flex-col items-center text-center shrink-0 min-w-[50px] sm:min-w-[62px]">
                      {/* Step Number Square */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] bg-[#0c1424] border border-[#1e2f46] hover:border-cyan-400 flex items-center justify-center text-white font-bold text-[14px] sm:text-[15px] shadow-md transition-all group-hover:scale-105 font-[family-name:var(--font-space-grotesk)]">
                        {step.number}
                      </div>
                      {/* Step Label */}
                      <span className="text-[11.5px] sm:text-[12.5px] text-[#93a4b9] font-medium mt-3 whitespace-nowrap font-sans">
                        {step.label}
                      </span>
                    </div>

                    {/* Blue connector line (not after final step) */}
                    {sIdx < processSteps.length - 1 && (
                      <div className="h-[2px] flex-1 min-w-[10px] max-w-[36px] bg-gradient-to-r from-blue-600 to-cyan-500 mt-5 sm:mt-5.5 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: Safe. Smart. Social. Glassmorphic Card */}
            <div className="lg:col-span-5 xl:col-span-4">
              <TiltCard
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.1}
                className="h-full rounded-[22px]"
              >
                <div className="bg-[#091322]/95 hover:bg-[#0c182a] border border-cyan-500/40 hover:border-cyan-400/70 rounded-[22px] p-6 sm:p-7 shadow-xl shadow-black/50 transition-all">
                  
                  {/* Top Shield Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[18px] sm:text-[19px] font-bold text-white tracking-tight leading-tight font-[family-name:var(--font-space-grotesk)]">
                        Safe. Smart. Social.
                      </h4>
                      <p className="text-[11.5px] sm:text-[12px] text-[#8fa2b8] leading-tight mt-0.5 font-sans">
                        Enterprise grade security for your members
                      </p>
                    </div>
                  </div>

                  {/* 2-Column Checklist */}
                  <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2.5 pt-4 border-t border-[#16273e]/70">
                    {securityChecklist.map((sec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-[#cbd5e1] font-sans">
                        <span className="w-3.5 h-3.5 rounded-[4px] border border-cyan-500/60 bg-cyan-950/50 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-cyan-400" />
                        </span>
                        <span className="whitespace-normal leading-tight">{sec}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </TiltCard>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          9. BOTTOM CTA: LET'S BUILD A SMARTER, SAFER OPERATION TOGETHER
      ========================================================================== */}
      <section className="relative w-full py-16 sm:py-24 bg-[#060c14] border-t border-[#121e30] overflow-hidden text-left">
        {/* Soft Ambient Radial Glow behind the right cards */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-15 blur-[130px] z-0"
          style={{ background: "#0d9488" }}
          aria-hidden="true"
        />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle, Buttons */}
            <div className="lg:col-span-6 flex flex-col justify-center text-left">
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold text-cyan-400 uppercase block mb-3">
                LET&apos;S CONNECT
              </span>

              <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-white tracking-tight leading-[1.12] font-[family-name:var(--font-space-grotesk)] mb-4">
                Let&apos;s Build a Smarter, Safer Operation{" "}
                <span className="text-[#38bdf8]">Together.</span>
              </h2>

              <p className="text-[14px] sm:text-[15.5px] text-[#93a4b9] font-normal leading-[1.65] font-sans max-w-[480px] mb-8">
                Get a customized solution for your security, manpower or CCTV business with our expert team.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="/#contact-cta"
                  className="bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#0284c7] hover:from-[#1e40af] hover:to-[#0369a1] text-white font-medium text-[13px] sm:text-[13.5px] px-6 py-3 rounded-full shadow-[0_0_24px_rgba(37,99,235,0.5)] hover:shadow-[0_0_32px_rgba(37,99,235,0.75)] inline-flex items-center gap-2 transition-all cursor-pointer active:scale-95 font-sans"
                >
                  <span>Book a Free Consultation</span>
                </Link>

                <Link
                  href="/#contact-cta"
                  className="bg-[#0b1422] hover:bg-[#111f33] text-white border border-[#1e2f46] hover:border-cyan-500/50 text-[13px] sm:text-[13.5px] font-medium px-6 py-3 rounded-full transition-all shadow-md cursor-pointer active:scale-95 font-sans"
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
                  className="text-[20px] sm:text-[23px] text-cyan-400 font-bold tracking-wide italic select-none"
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
                  <TiltCard
                    key={idx}
                    maxTilt={5}
                    scale={1.02}
                    glare={true}
                    glareOpacity={0.08}
                    className="rounded-2xl"
                  >
                    <div className="rounded-2xl bg-[#0a1322]/90 hover:bg-[#0f1d30] border border-[#1a2b40] hover:border-cyan-500/50 p-5 sm:p-6 flex flex-col items-center justify-center text-center shadow-lg transition-all group cursor-default min-h-[125px] sm:min-h-[135px]">
                      {/* Icon Container with subtle radial glow */}
                      <div className="w-10 h-10 rounded-xl bg-[#0f2034] border border-[#1d3958] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-cyan-400/60 transition-all">
                        {item.icon}
                      </div>
                      
                      {/* Title */}
                      <span className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight leading-tight font-[family-name:var(--font-space-grotesk)] group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </span>
                    </div>
                  </TiltCard>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
