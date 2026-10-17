"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Award,
  Package,
  Smile,
  Network,
  Tv,
  Video,
  Heart,
  Gift,
  Coins,
  Globe,
  Briefcase,
  Layers,
  Headphones,
  Star,
  Smartphone,
  Laptop,
  TrendingUp,
  LayoutTemplate,
  Check,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TiltCard from "@/app/components/ui/TiltCard";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// 4 Mini Badges from Figma Hero
const miniBadges = [
  {
    value: "7+",
    label: "Years of Excellence",
    icon: <Award className="w-4 h-4 text-[#ff2a85]" />,
    boxBorder: "border-[#4a1236]",
    boxBg: "bg-[#1c0719]/80",
  },
  {
    value: "100+",
    label: "Projects Delivered",
    icon: <Package className="w-4 h-4 text-[#a855f7]" />,
    boxBorder: "border-[#34124c]",
    boxBg: "bg-[#160624]/80",
  },
  {
    value: "50+",
    label: "Happy Clients",
    icon: <Smile className="w-4 h-4 text-[#06b6d4]" />,
    boxBorder: "border-[#0e3340]",
    boxBg: "bg-[#061820]/80",
  },
  {
    value: "5",
    label: "Focused Industries",
    icon: <Network className="w-4 h-4 text-[#ec4899]" />,
    boxBorder: "border-[#4a1236]",
    boxBg: "bg-[#1c0719]/80",
  },
];

// 6 Floating Vertical Tags on Right of Mobile Device
const floatingTags = [
  { icon: <Tv className="w-3.5 h-3.5 text-[#ff2a85]" />, text: "Live Streaming" },
  { icon: <Video className="w-3.5 h-3.5 text-[#a855f7]" />, text: "Video Calling" },
  { icon: <Heart className="w-3.5 h-3.5 text-[#f43f5e]" />, text: "Dating & Matching" },
  { icon: <Gift className="w-3.5 h-3.5 text-[#eab308]" />, text: "Virtual Gifts" },
  { icon: <Coins className="w-3.5 h-3.5 text-[#10b981]" />, text: "Monetization" },
  { icon: <Globe className="w-3.5 h-3.5 text-[#06b6d4]" />, text: "Global Reach" },
];

// 6 Key Technical Pills from Screenshot
const featurePills = [
  "AI Moderation",
  "Live Streaming",
  "Scalable & Secure",
  "1-to-1 Video Calls",
  "Dating & Social Discovery",
  "100% Code Ownership & Git Handover",
];

// 4 Bottom Stats matching screenshot
const bottomStats = [
  {
    value: "120+",
    label: "Streaming Platforms Delivered",
    icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
    gradient: "from-cyan-500 via-teal-500 to-amber-500",
  },
  {
    value: "12,000+",
    label: "Broadcasters & Creators",
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
    label: "Countries Connected",
    icon: <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
    gradient: "from-cyan-500 via-emerald-500 to-amber-400",
  },
];

// 6 Core Solutions matching Figma screenshot
const liveStreamingSolutions = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#f43f5e]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="5" width="14" height="14" rx="3" />
        <path d="m16 9 6-3v12l-6-3" />
        <circle cx="8" cy="12" r="2" />
      </svg>
    ),
    badgeBg: "bg-[#260e1d]",
    badgeBorder: "border-[#4a1835]",
    title: "Live Streaming Platform",
    description:
      "Go live, interact, receive gifts and build a creator economy with ultra-low latency broadcasting.",
    actionType: "plus" as const,
    href: "/industries/live-streaming/live-streaming-platform",
  },
  {
    icon: <Heart className="w-5 h-5 text-[#ec4899]" />,
    badgeBg: "bg-[#260f20]",
    badgeBorder: "border-[#4d1839]",
    title: "Dating Application",
    description:
      "Match, chat and build meaningful connections using smart matchmaking algorithms and verification.",
    actionType: "plus" as const,
    href: "/industries/live-streaming/dating-application",
  },
  {
    icon: <Video className="w-5 h-5 text-[#38bdf8]" />,
    badgeBg: "bg-[#0c1e30]",
    badgeBorder: "border-[#14395a]",
    title: "Random Video Calling",
    description:
      "1-to-1 and group video chat with interest filters, instant pairing and WebRTC peer-to-peer speeds.",
    actionType: "arrow" as const,
    href: "/industries/live-streaming/random-video-calling",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#a855f7]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
    badgeBg: "bg-[#1a1232]",
    badgeBorder: "border-[#391e60]",
    title: "Social Discovery",
    description:
      "Meet new people, follow, chat and grow your network through feeds, stories and geo-radius discovery.",
    actionType: "plus" as const,
    href: "/industries/live-streaming/social-discovery",
  },
  {
    icon: (
      <div className="w-5 h-5 rounded-full border-[1.5px] border-[#eab308] flex items-center justify-center">
        <Star className="w-3 h-3 text-[#eab308] fill-[#eab308]" />
      </div>
    ),
    badgeBg: "bg-[#271d08]",
    badgeBorder: "border-[#523910]",
    title: "Creator Platform",
    description:
      "Monetization tools for creators and hosts, including exclusive VIP content, tipping, and agency splits.",
    actionType: "plus" as const,
    href: "/industries/live-streaming/creator-platform",
  },
  {
    icon: <Headphones className="w-5 h-5 text-[#c084fc]" />,
    badgeBg: "bg-[#1d1033]",
    badgeBorder: "border-[#3e1d60]",
    title: "Audio Rooms",
    description:
      "Live audio rooms for discussions, stages, multi-seat stages and interactive voice lounge communities.",
    actionType: "arrow" as const,
    href: "/industries/live-streaming/audio-rooms",
  },
];

// Complete Platform Ecosystem Checklist Items
const ecosystemIncludes = [
  "User experience (UX) research",
  "Custom UI (User Interface) design",
  "Wireframing & prototyping",
  "High-fidelity mockups",
];

// 6 Core Platform Ecosystem Component Cards
const platformEcosystem = [
  {
    icon: <Smartphone className="w-5 h-5 text-[#f43f5e]" />,
    badgeBg: "bg-[#25101d]",
    badgeBorder: "border-[#4a1835]",
    title: "User App",
    subtitle: "Chat, Call, Live, Discover",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#a855f7]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 17a5 5 0 0 1 10 0" />
      </svg>
    ),
    badgeBg: "bg-[#1d1033]",
    badgeBorder: "border-[#3e1d60]",
    title: "Host / Creator App",
    subtitle: "Go Live, Earn, Manage Profile",
  },
  {
    icon: <Laptop className="w-5 h-5 text-[#ec4899]" />,
    badgeBg: "bg-[#260f20]",
    badgeBorder: "border-[#4d1839]",
    title: "Web Platform",
    subtitle: "Access on Web, More Reach",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#a855f7]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="2" />
        <path d="M12 13v2" />
      </svg>
    ),
    badgeBg: "bg-[#1d1033]",
    badgeBorder: "border-[#3e1d60]",
    title: "Admin Panel",
    subtitle: "Manage Users, Content, Payments",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-[#f43f5e]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    badgeBg: "bg-[#25101d]",
    badgeBorder: "border-[#4a1835]",
    title: "Agency Panel",
    subtitle: "Manage Hosts, Commission, Growth",
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-[#c084fc]" />,
    badgeBg: "bg-[#1e1035]",
    badgeBorder: "border-[#411e64]",
    title: "AI & Analytics",
    subtitle: "Smart Insights, Safe & Scalable",
  },
];

// 7 Development Process Steps matching Figma screenshot
const processSteps = [
  { number: "1", label: "Discover" },
  { number: "2", label: "Strategy" },
  { number: "3", label: "UI/UX" },
  { number: "4", label: "Development" },
  { number: "5", label: "Testing" },
  { number: "6", label: "Deployment" },
  { number: "7", label: "Support" },
];

// 6 Security & Trust Checklist Items
const securityChecklist = [
  "AI Content Moderation",
  "User Reporting",
  "Fraud Detection",
  "Secure Payments",
  "Real-Time Monitoring",
  "Data Privacy & Compliance",
];

export default function LiveStreamingIndustryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const caseStudyRef = useRef<HTMLDivElement>(null);
  const [activeIncludeIdx, setActiveIncludeIdx] = useState(0);

  useGSAP(
    () => {
      if (heroRef.current) {
        gsap.fromTo(
          ".live-hero-elem",
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
          ".live-hero-visual",
          { opacity: 0, scale: 0.94, y: 30 },
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

      if (solutionsRef.current) {
        gsap.fromTo(
          ".live-solutions-header",
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: solutionsRef.current,
              start: "top 85%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".live-solution-card",
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: solutionsRef.current,
              start: "top 80%",
            },
            clearProps: "all",
          }
        );
      }

      if (featuredRef.current) {
        gsap.fromTo(
          ".live-featured-elem",
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.09,
            ease: "power2.out",
            scrollTrigger: {
              trigger: featuredRef.current,
              start: "top 80%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".live-ecosystem-card",
          { opacity: 0, scale: 0.96, y: 22 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".live-ecosystem-container",
              start: "top 85%",
            },
            clearProps: "all",
          }
        );
      }

      if (caseStudyRef.current) {
        gsap.fromTo(
          ".live-casestudy-elem",
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: caseStudyRef.current,
              start: "top 80%",
            },
            clearProps: "all",
          }
        );

        gsap.fromTo(
          ".live-process-step",
          { opacity: 0, scale: 0.9, y: 20 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".live-process-container",
              start: "top 85%",
            },
            clearProps: "all",
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full bg-[#08030b] text-white select-none overflow-x-clip">
      
      {/* =========================================================================
          HERO SECTION (Matching user reference Figma screenshot exactly)
      ========================================================================== */}
      <section
        ref={heroRef}
        className="relative pt-8 sm:pt-12 md:pt-16 pb-0 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-between"
        style={{
          background:
            "radial-gradient(ellipse at 75% 35%, rgba(225, 29, 120, 0.22) 0%, rgba(120, 15, 65, 0.12) 40%, #08030b 75%)",
        }}
      >
        {/* Soft Background Neon Crimson / Magenta Radial Glow */}
        <div
          className="pointer-events-none absolute right-[10%] top-[25%] w-[600px] sm:w-[850px] h-[450px] sm:h-[550px] rounded-full opacity-35 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 42, 133, 0.45) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2 sm:pt-4">
            
            {/* Left Column: Breadcrumb, Main Title, Subtitle, Buttons, 4 Mini Badges */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              {/* Breadcrumb: HOME > LIVE STREAMING & DATING */}
              <div className="live-hero-elem flex items-center gap-2 mb-6 sm:mb-7">
                <Link
                  href="/"
                  className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#9a899c] uppercase hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <span className="text-[11px] sm:text-[12px] font-mono text-[#ff2a85]">›</span>
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#ff3d94] font-bold uppercase">
                  LIVE STREAMING & DATING
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="live-hero-elem text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[66px] font-bold tracking-[-0.035em] leading-[1.06] font-sans">
                <span className="text-white block">Real Connections.</span>
                <span className="bg-gradient-to-r from-[#ff2a85] via-[#ff3b8f] to-[#f43f5e] bg-clip-text text-transparent block mt-1">
                  Real-Time Experiences.
                </span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="live-hero-elem text-[14px] sm:text-[15px] md:text-[16px] text-[#b8a6ba] leading-[1.65] font-normal mt-5 sm:mt-6 max-w-[580px]">
                We build next-generation live streaming, video calling and dating platforms that bring people closer — powered by AI, real-time technology and secure infrastructure.
              </p>

              {/* CTA Buttons Row */}
              <div className="live-hero-elem mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* Build Your Platform (Vibrant Pink Pill) */}
                <Link
                  href="/#contact-cta"
                  className="bg-[#ff1a75] hover:bg-[#e60067] active:scale-95 transition-all text-white font-semibold text-[13.5px] sm:text-[14px] px-7 py-3.5 rounded-full shadow-lg shadow-pink-950/60 inline-flex items-center gap-2 group cursor-pointer"
                >
                  <span>Build Your Platform</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Discuss Your Project (Dark Violet Glassy Button) */}
                <Link
                  href="/#contact-cta"
                  className="bg-[#16081e]/90 hover:bg-[#200c2a] active:scale-95 transition-all text-slate-200 font-medium text-[13.5px] sm:text-[14px] px-6 py-3.5 rounded-full border border-[#3e144a] hover:border-[#ff2a85]/50 inline-flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#ff2a85]" />
                  <span>Discuss Your Project</span>
                </Link>
              </div>

              {/* 4 Mini Stat Badges (Row under Buttons) */}
              <div className="live-hero-elem mt-9 sm:mt-11 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-[650px]">
                {miniBadges.map((badge, idx) => (
                  <TiltCard
                    key={idx}
                    maxTilt={7}
                    scale={1.02}
                    glare={true}
                    glareOpacity={0.12}
                    className="rounded-xl"
                  >
                    <div className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl border border-[#2e0e33]/70 bg-[#120417]/80 hover:border-[#ff2a85]/40 transition-colors h-full">
                      {/* Icon Box */}
                      <div
                        className={`w-9 h-9 rounded-xl ${badge.boxBg} border ${badge.boxBorder} flex items-center justify-center shrink-0 shadow-inner`}
                      >
                        {badge.icon}
                      </div>

                      {/* Number & Label */}
                      <div className="flex flex-col text-left min-w-0">
                        <span className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-none font-sans">
                          {badge.value}
                        </span>
                        <span className="text-[10.5px] sm:text-[11px] text-[#9a899c] font-medium leading-tight mt-1 whitespace-normal">
                          {badge.label}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>

            </div>

            {/* Right Column: Hero Visual Showcase (Dual Phones Artwork floating freely + Floating Vertical Tags) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="live-hero-visual relative w-full max-w-[480px] lg:max-w-[540px]">
                
                {/* 3D Tilt Wrapper around Phone Artwork (Floating directly on background matching Figma) */}
                <TiltCard maxTilt={5} scale={1.015} glare={false} className="relative w-full">
                  {/* Subtle Background Glow Heart */}
                  <div
                    className="pointer-events-none absolute -top-10 -right-8 w-64 h-64 rounded-full opacity-30 blur-3xl z-0"
                    style={{ background: "#ff2a85" }}
                    aria-hidden="true"
                  />

                  <div className="relative w-full aspect-[1.12/1] z-10">
                    <Image
                      src="/images/live-streaming-hero-phones.png"
                      alt="Live Streaming & Dating App Mockup"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-contain object-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                </TiltCard>

                {/* Floating Vertical Feature Tags on the Right */}
                <div className="hidden sm:flex flex-col gap-2 absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 pointer-events-auto">
                  {floatingTags.map((tag, tIdx) => (
                    <TiltCard
                      key={tIdx}
                      maxTilt={8}
                      scale={1.04}
                      glare={true}
                      glareOpacity={0.2}
                      className="rounded-full shadow-lg"
                    >
                      <div className="flex items-center gap-2 bg-[#14061a]/95 hover:bg-[#1d0926] backdrop-blur-md border border-[#3e144a] hover:border-[#ff2a85]/60 text-white px-3.5 py-1.5 rounded-full text-[11px] sm:text-[11.5px] font-medium shadow-md transition-colors whitespace-nowrap cursor-pointer">
                        <span className="shrink-0">{tag.icon}</span>
                        <span>{tag.text}</span>
                      </div>
                    </TiltCard>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* Key Feature Pills Bar with bright pink pulsing dots */}
          <div className="live-hero-elem mt-10 sm:mt-12 mb-7 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-[1200px] mx-auto">
            {featurePills.map((pill, idx) => (
              <div
                key={idx}
                className="bg-[#130517]/90 border border-[#34113b]/60 text-[#d8c7db] text-[10.5px] sm:text-[11.5px] font-mono tracking-wide px-3 sm:px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-sm hover:border-[#ff2a85]/50 hover:bg-[#1c0822] transition-all cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a85] shadow-[0_0_8px_#ff2a85] flex-shrink-0" />
                <span>{pill}</span>
              </div>
            ))}
          </div>

        </div>

        {/* 4 Bottom Key Metrics Stats Bar (Matching screenshot exactly) */}
        <div className="w-full border-t border-[#2a0e30]/80 bg-[#060208]/95 py-6 sm:py-7 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
              {bottomStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 sm:gap-4 group cursor-default"
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
                    <span className="text-[12px] sm:text-[12.5px] text-[#9a899c] font-medium leading-tight mt-1.5">
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
          OUR LIVE STREAMING & DATING SOLUTIONS (Matching Figma screenshot exactly)
      ========================================================================== */}
      <section
        ref={solutionsRef}
        id="solutions"
        className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#1d0b23]/70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255, 42, 133, 0.07) 0%, rgba(168, 85, 247, 0.04) 30%, #08030b 70%)",
        }}
      >
        {/* Soft background ambient glow */}
        <div
          className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(255, 42, 133, 0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-1/3 w-[550px] h-[550px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Title + Subtitle on Left, View All Solutions on Right */}
          <div className="live-solutions-header flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white tracking-[-0.025em] font-sans">
                Our Live Streaming & Dating Solutions
              </h2>
              <p className="text-[#9e8f9f] text-[14px] sm:text-[15px] font-normal mt-2.5 max-w-[640px]">
                Complete real-time communication platforms designed for engagement, safety and growth.
              </p>
            </div>

            <Link
              href="/#contact-cta"
              className="text-[#ff2a85] hover:text-[#ff4d9d] font-medium text-[13.5px] sm:text-[14px] inline-flex items-center gap-1.5 transition-colors group self-start md:self-end shrink-0"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* 6 Solution Cards (2 Rows x 3 Columns Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {liveStreamingSolutions.map((sol, idx) => (
              <TiltCard
                key={idx}
                maxTilt={6}
                scale={1.018}
                glare={true}
                glareOpacity={0.12}
                className="h-full rounded-[22px]"
              >
                <Link
                  href={sol.href}
                  className="live-solution-card h-full bg-[#0d1020] hover:bg-[#101529] border border-[#1b233a] hover:border-[#ff2a85]/50 rounded-[22px] p-6 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 group shadow-lg shadow-black/40 block"
                >
                  {/* Top: Icon, Title, Description */}
                  <div>
                    {/* Icon Box */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] ${sol.badgeBg} border ${sol.badgeBorder} flex items-center justify-center mb-5 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner`}
                    >
                      {sol.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-[19px] sm:text-[20px] font-bold text-white tracking-tight leading-snug mb-2.5 group-hover:text-white transition-colors">
                      {sol.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#96899b] text-[13px] sm:text-[13.5px] leading-[1.65] font-normal">
                      {sol.description}
                    </p>
                  </div>

                  {/* Bottom: Learn More Link */}
                  <div className="mt-6 pt-2 flex items-center gap-1.5 text-[#ff2a85] text-[13px] sm:text-[13.5px] font-medium group/btn">
                    <span>Learn More</span>
                    {sol.actionType === "plus" ? (
                      <span className="text-[15px] font-bold leading-none group-hover:rotate-90 transition-transform duration-300 inline-block">
                        +
                      </span>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                    )}
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCT & COMPLETE PLATFORM ECOSYSTEM (Matching Figma screenshot)
      ========================================================================== */}
      <section
        ref={featuredRef}
        id="featured-product"
        className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#1d0b23]/70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 15%, rgba(56, 189, 248, 0.05) 0%, rgba(255, 42, 133, 0.04) 40%, #08030b 75%)",
        }}
      >
        {/* Soft background ambient glow */}
        <div
          className="pointer-events-none absolute -left-40 top-1/4 w-[500px] h-[500px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(56, 189, 248, 0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-1/2 w-[550px] h-[550px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(255, 42, 133, 0.25) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* -------------------------------------------------------------------
              TOP HALF: FEATURED PRODUCT SHOWCASE
          -------------------------------------------------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
            
            {/* Left Column: 2 Device Mockup Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              
              {/* Card 1: Start your project from your pocket */}
              <TiltCard
                maxTilt={6}
                scale={1.018}
                glare={true}
                glareOpacity={0.12}
                className="h-full rounded-[24px]"
              >
                <div className="live-featured-elem h-full bg-[#0d1020] hover:bg-[#101529] border border-[#1b233a] hover:border-[#ff2a85]/50 rounded-[24px] p-6 pb-3 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 group overflow-hidden">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-snug mb-4">
                    Start your project from your pocket.
                  </h3>
                  
                  <div className="relative w-full aspect-[4/3.2] rounded-xl overflow-hidden mt-auto bg-[#070b16]">
                    <Image
                      src="/images/live-pocket-phones.jpg"
                      alt="Start your project from your pocket"
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </TiltCard>

              {/* Card 2: Available on all responsive devices */}
              <TiltCard
                maxTilt={6}
                scale={1.018}
                glare={true}
                glareOpacity={0.12}
                className="h-full rounded-[24px]"
              >
                <div className="live-featured-elem h-full bg-[#0d1020] hover:bg-[#101529] border border-[#1b233a] hover:border-[#ff2a85]/50 rounded-[24px] p-6 pb-3 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 group overflow-hidden">
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight leading-snug mb-4">
                    Available on all responsive devices.
                  </h3>
                  
                  <div className="relative w-full aspect-[4/3.2] rounded-xl overflow-hidden mt-auto bg-[#070b16]">
                    <Image
                      src="/images/live-dating-devices.jpg"
                      alt="Available on all responsive devices"
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </TiltCard>

            </div>

            {/* Right Column: Eyebrow, Main Headline, Subtitle, Bullets, App Store Buttons */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              
              {/* Eyebrow */}
              <span className="live-featured-elem text-[#38bdf8] text-[11px] sm:text-[12px] font-mono tracking-[0.22em] font-semibold uppercase block mb-3">
                FEATURED PRODUCT
              </span>

              {/* Headline */}
              <h2 className="live-featured-elem text-[32px] sm:text-[38px] lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-[1.12] font-sans">
                Seamless productivity with our new app
              </h2>

              {/* Subtitle */}
              <p className="live-featured-elem text-[#95889a] text-[14px] sm:text-[15px] leading-[1.65] font-normal mt-4 max-w-[460px]">
                Download Synck and experience a new era of organization and accomplishment.
              </p>

              {/* 2 Feature Bullets with blue/cyan glowing dot */}
              <div className="live-featured-elem flex flex-col gap-2.5 mt-6">
                <div className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_#38bdf8]" />
                  <span>PPO Development</span>
                </div>
                <div className="flex items-center gap-2.5 text-[13.5px] sm:text-[14px] font-medium text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-[#0284c7] shadow-[0_0_8px_#38bdf8]" />
                  <span>Easy to Use</span>
                </div>
              </div>

              {/* App Store & Play Store Action Buttons */}
              <div className="live-featured-elem flex flex-wrap items-center gap-3 sm:gap-3.5 mt-8">
                {/* Apple App Store */}
                <a
                  href="#contact-cta"
                  className="bg-[#0e1220] hover:bg-[#151c33] border border-[#222b44] hover:border-[#ff2a85]/50 px-4 sm:px-5 py-3 rounded-xl inline-flex items-center gap-2.5 text-[13px] sm:text-[13.5px] font-medium text-white transition-all shadow-md group cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.66-.99 1.72-.85 2.74 1.01.08 2.03-.5 2.55-1.24" />
                  </svg>
                  <span>Get it on App Store</span>
                </a>

                {/* Google Play Store */}
                <a
                  href="#contact-cta"
                  className="bg-[#0e1220] hover:bg-[#151c33] border border-[#222b44] hover:border-[#ff2a85]/50 px-4 sm:px-5 py-3 rounded-xl inline-flex items-center gap-2.5 text-[13px] sm:text-[13.5px] font-medium text-white transition-all shadow-md group cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.45 1.45 0 0 1-.61-.996V2.81c0-.4.22-.76.61-.996zM15.207 13.414l2.585-1.492c.704-.407.704-1.073 0-1.48l-2.585-1.492-2.83 2.832 2.83 2.832zM4.654.898l10.354 5.978-2.607 2.608L4.654.898zm0 22.204l7.747-8.586 2.607 2.608-10.354 5.978z" />
                  </svg>
                  <span>Get it on Play Store</span>
                </a>
              </div>

            </div>

          </div>

          {/* -------------------------------------------------------------------
              BOTTOM HALF: COMPLETE PLATFORM ECOSYSTEM
          -------------------------------------------------------------------- */}
          <div className="live-ecosystem-container bg-[#09030d]/90 border border-[#2e0f31]/80 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-12 shadow-2xl shadow-black/60 relative overflow-hidden">
            
            {/* Background subtle radial glow */}
            <div
              className="pointer-events-none absolute -right-20 -bottom-20 w-[450px] h-[450px] rounded-full opacity-15 blur-[120px]"
              style={{
                background: "radial-gradient(circle, rgba(255, 42, 133, 0.4) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Left Column: Icon, Title, Subtitle, Includes list */}
              <div className="lg:col-span-5 text-left">
                
                {/* Wireframe layout icon */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[14px] bg-[#24101e] border border-[#4a1835] flex items-center justify-center mb-4 shadow-inner">
                  <LayoutTemplate className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff2a85]" />
                </div>

                {/* Title */}
                <h3 className="text-[24px] sm:text-[28px] font-bold text-white tracking-tight leading-snug">
                  Complete Platform Ecosystem
                </h3>

                {/* Subtitle */}
                <p className="text-[#95889a] text-[13.5px] sm:text-[14px] leading-[1.6] mt-2 max-w-[380px]">
                  We build end-to-end solutions across web, mobile and admin panels.
                </p>

                {/* Includes Section Header */}
                <h4 className="text-white font-semibold text-[13.5px] sm:text-[14px] mt-6 sm:mt-7 mb-2">
                  Includes:
                </h4>

                {/* 4 Interactive Checklist Items */}
                <div className="flex flex-col">
                  {ecosystemIncludes.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      onClick={() => setActiveIncludeIdx(iIdx)}
                      className={`border-b border-[#240e28]/70 py-3 sm:py-3.5 flex items-center justify-between text-[13px] sm:text-[13.5px] cursor-pointer transition-colors ${
                        activeIncludeIdx === iIdx
                          ? "text-white font-medium"
                          : "text-[#95889a] hover:text-white"
                      }`}
                    >
                      <span>{item}</span>
                      {activeIncludeIdx === iIdx ? (
                        <span className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shrink-0 shadow-md">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 text-[#5e4b63] shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: 6 Ecosystem Role Cards in 3x2 Grid */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                  {platformEcosystem.map((eco, eIdx) => (
                    <TiltCard
                      key={eIdx}
                      maxTilt={6}
                      scale={1.02}
                      glare={true}
                      glareOpacity={0.1}
                      className="h-full rounded-[20px]"
                    >
                      <div className="live-ecosystem-card h-full bg-[#0d1020] hover:bg-[#11172a] border border-[#1b233a] hover:border-[#ff2a85]/50 rounded-[20px] p-5 sm:p-5.5 flex flex-col items-center text-center justify-center transition-all duration-300 group shadow-md shadow-black/40">
                        {/* Centered Icon Box */}
                        <div
                          className={`w-11 h-11 rounded-[13px] ${eco.badgeBg} border ${eco.badgeBorder} flex items-center justify-center mb-3.5 shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-inner`}
                        >
                          {eco.icon}
                        </div>

                        {/* Title */}
                        <h4 className="text-[15.5px] sm:text-[16.5px] font-bold text-white tracking-tight leading-snug mb-1 group-hover:text-white transition-colors">
                          {eco.title}
                        </h4>

                        {/* Subtitle */}
                        <p className="text-[#8e8194] text-[11px] sm:text-[11.5px] leading-snug font-normal">
                          {eco.subtitle}
                        </p>
                      </div>
                    </TiltCard>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          CASE STUDY & DEVELOPMENT PROCESS SECTION (Matching Figma screenshot)
      ========================================================================== */}
      <section
        ref={caseStudyRef}
        id="case-study"
        className="relative w-full py-20 sm:py-24 lg:py-28 overflow-hidden border-t border-[#1d0b23]/70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 10%, rgba(255, 42, 133, 0.06) 0%, rgba(168, 85, 247, 0.04) 35%, #08030b 75%)",
        }}
      >
        {/* Soft background ambient glow */}
        <div
          className="pointer-events-none absolute -left-40 top-1/3 w-[550px] h-[550px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(255, 42, 133, 0.3) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-40 top-2/3 w-[550px] h-[550px] rounded-full opacity-20 blur-[140px]"
          style={{
            background: "radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* -------------------------------------------------------------------
              TOP HEADER: Eyebrow, Main Headline & Subtitle
          -------------------------------------------------------------------- */}
          <div className="live-casestudy-elem flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              {/* Eyebrow with pink indicator dot */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a85] shadow-[0_0_8px_#ff2a85]" />
                <span className="text-[#ff2a85] text-[11px] sm:text-[12px] font-mono tracking-wider font-semibold uppercase">
                  20+ Pre-Engineered Platforms Ready to Deploy
                </span>
              </div>

              {/* Headline (Dual Line: Bold Sans + Elegant Italic Serif) */}
              <h2 className="text-[30px] sm:text-[38px] lg:text-[44px] font-bold text-white tracking-[-0.03em] leading-[1.12] font-sans">
                We Build Digital Experiences That Matter
                <span className="block font-serif italic font-normal text-white/95 mt-1">
                  Launch in 7 days.
                </span>
              </h2>
            </div>

            {/* Right side explanation */}
            <p className="text-[#95889a] text-[13.5px] sm:text-[14px] leading-[1.65] font-normal max-w-[380px] lg:text-right self-start lg:self-end">
              Don&apos;t spend 6 months building standard logistics or healthcare software from scratch. Launch faster with zero monthly royalties.
            </p>
          </div>

          {/* -------------------------------------------------------------------
              MAIN CASE STUDY CARD CONTAINER
          -------------------------------------------------------------------- */}
          <div className="live-casestudy-elem bg-[#0a030d]/90 border border-[#2e0f31]/80 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/70 mb-16 sm:mb-20 lg:mb-24 relative overflow-hidden">
            
            {/* 1. Large Top Showcase Banner with Coral Gradient & 3D Phones Artwork */}
            <div className="relative w-full aspect-[2/1] sm:aspect-[2.4/1] md:aspect-[2.8/1] rounded-[22px] overflow-hidden shadow-xl mb-7 sm:mb-8 border border-white/10 group">
              <Image
                src="/images/live-case-study-banner.jpg"
                alt="Case Study — KisanConnect Agri Marketplace"
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Floating Pill Tag at Top-Left */}
              <div className="absolute top-3 sm:top-5 left-3 sm:left-6 z-10 flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/15 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a85] shadow-[0_0_8px_#ff2a85]" />
                <span className="text-[9.5px] sm:text-[11px] font-mono tracking-wider text-white uppercase font-semibold">
                  CASE STUDY — KISANCONNECT AGRI MARKETPLACE
                </span>
              </div>
            </div>

            {/* 2. 3 Cards: The Problem, The Solution, The Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-10">
              
              {/* Problem Card */}
              <TiltCard
                maxTilt={5}
                scale={1.015}
                glare={true}
                glareOpacity={0.1}
                className="h-full rounded-[18px]"
              >
                <div className="h-full bg-[#0f0614]/90 hover:bg-[#15091c] border border-[#2b0f2e]/80 hover:border-[#ff2a85]/40 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between transition-colors shadow-md">
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-medium text-[#b09eb3] bg-[#220d28] border border-[#3e1748] px-2.5 py-1 rounded-md">
                      The Problem
                    </span>
                  </div>
                  <p className="text-[#9e8f9f] text-[13px] sm:text-[13.5px] leading-[1.65] font-normal">
                    A fragmented farmer-to-buyer supply chain with no price transparency, forcing farmers to sell through multiple middlemen at unpredictable rates.
                  </p>
                </div>
              </TiltCard>

              {/* Solution Card */}
              <TiltCard
                maxTilt={5}
                scale={1.015}
                glare={true}
                glareOpacity={0.1}
                className="h-full rounded-[18px]"
              >
                <div className="h-full bg-[#0f0614]/90 hover:bg-[#15091c] border border-[#2b0f2e]/80 hover:border-[#ff2a85]/40 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between transition-colors shadow-md">
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-medium text-[#b09eb3] bg-[#220d28] border border-[#3e1748] px-2.5 py-1 rounded-md">
                      The Solution
                    </span>
                    <span className="text-[11px] font-semibold text-[#22c55e] bg-[#092414] border border-[#144d2b] px-2.5 py-1 rounded-md">
                      7-Day Launch
                    </span>
                  </div>
                  <p className="text-[#9e8f9f] text-[13px] sm:text-[13.5px] leading-[1.65] font-normal">
                    A multi-vendor agriculture marketplace with a dedicated farmer app, dealer network management, and a live logistics dashboard for supply chain visibility.
                  </p>
                </div>
              </TiltCard>

              {/* Impact Card */}
              <TiltCard
                maxTilt={5}
                scale={1.015}
                glare={true}
                glareOpacity={0.1}
                className="h-full rounded-[18px]"
              >
                <div className="h-full bg-[#0f0614]/90 hover:bg-[#15091c] border border-[#2b0f2e]/80 hover:border-[#ff2a85]/40 rounded-[18px] p-5 sm:p-6 flex flex-col justify-between transition-colors shadow-md">
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-medium text-[#b09eb3] bg-[#220d28] border border-[#3e1748] px-2.5 py-1 rounded-md">
                      The Impact
                    </span>
                    <span className="text-[11px] font-semibold text-[#22c55e] bg-[#092414] border border-[#144d2b] px-2.5 py-1 rounded-md">
                      7-Day Launch
                    </span>
                  </div>
                  <p className="text-[#9e8f9f] text-[13px] sm:text-[13.5px] leading-[1.65] font-normal">
                    Direct farmer-to-buyer transactions replaced 3 layers of middlemen across 40+ districts within the first year of launch.
                  </p>
                </div>
              </TiltCard>

            </div>

            {/* 3. Bottom 3 Metric Counter Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-7 border-t border-[#260e29]/70">
              
              {/* Stat 1 */}
              <div className="flex flex-col text-left">
                <AnimatedMetric
                  value="12,000+"
                  className="text-[30px] sm:text-[36px] font-bold text-[#ff2a85] font-sans tracking-tight leading-none"
                />
                <span className="text-[13px] sm:text-[13.5px] text-[#95889a] font-medium mt-1.5">
                  Farmers Onboarded
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col text-left">
                <AnimatedMetric
                  value="40+"
                  className="text-[30px] sm:text-[36px] font-bold text-[#ff2a85] font-sans tracking-tight leading-none"
                />
                <span className="text-[13px] sm:text-[13.5px] text-[#95889a] font-medium mt-1.5">
                  Reduction in Produce Wastage
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col text-left">
                <AnimatedMetric
                  value="₹8Cr+"
                  className="text-[30px] sm:text-[36px] font-bold text-[#ff2a85] font-sans tracking-tight leading-none"
                />
                <span className="text-[13px] sm:text-[13.5px] text-[#95889a] font-medium mt-1.5">
                  GMV Processed
                </span>
              </div>

            </div>

          </div>

          {/* -------------------------------------------------------------------
              BOTTOM: OUR DEVELOPMENT PROCESS & SAFE. SMART. SOCIAL.
          -------------------------------------------------------------------- */}
          <div className="live-process-container grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Our Development Process Flow */}
            <div className="lg:col-span-8 text-left">
              <h3 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight leading-snug mb-7 sm:mb-8">
                Our Development Process
              </h3>

              <div className="flex items-start justify-between gap-1 sm:gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none">
                {processSteps.map((step, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <div className="live-process-step flex flex-col items-center text-center shrink-0 min-w-[54px] sm:min-w-[66px]">
                      {/* Step Number Square */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-[12px] bg-[#0c1020] border border-[#222b44] hover:border-[#ff2a85]/60 flex items-center justify-center text-white font-bold text-[14px] sm:text-[15px] shadow-md transition-all">
                        {step.number}
                      </div>
                      {/* Step Label */}
                      <span className="text-[11px] sm:text-[12px] text-[#95889a] font-medium mt-3 whitespace-nowrap">
                        {step.label}
                      </span>
                    </div>

                    {/* Pink connector line (not after final step) */}
                    {sIdx < processSteps.length - 1 && (
                      <div className="h-[2px] flex-1 min-w-[12px] max-w-[42px] bg-gradient-to-r from-[#ff2a85] to-[#f43f5e] mt-5 sm:mt-5.5 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: Safe. Smart. Social. Glassmorphic Badge */}
            <div className="lg:col-span-4">
              <TiltCard
                maxTilt={6}
                scale={1.02}
                glare={true}
                glareOpacity={0.12}
                className="h-full rounded-[22px]"
              >
                <div className="bg-[#0c0817]/95 hover:bg-[#120c22] border border-[#2e1644] hover:border-[#a855f7]/50 rounded-[22px] p-6 sm:p-7 shadow-xl shadow-black/50 transition-all">
                  
                  {/* Top Shield Header */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#241138] border border-[#48206d] flex items-center justify-center text-[#c084fc] shrink-0 shadow-inner">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[18px] sm:text-[19px] font-bold text-white tracking-tight leading-tight">
                        Safe. Smart. Social.
                      </h4>
                      <p className="text-[11px] sm:text-[12px] text-[#95889a] leading-tight mt-0.5">
                        Enterprise-grade security for your members
                      </p>
                    </div>
                  </div>

                  {/* 2-Column Checklist */}
                  <div className="grid grid-cols-2 gap-x-3 sm:gap-x-4 gap-y-2.5 pt-4 border-t border-[#231235]/70">
                    {securityChecklist.map((sec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-[11px] sm:text-[11.5px] text-[#c2b5c7]">
                        <span className="w-3.5 h-3.5 rounded-[4px] border border-[#ff2a85]/60 bg-[#250d1e] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 text-[#ff2a85]" />
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

    </div>
  );
}



