"use client";

import React, { useRef } from "react";
import { Users, RotateCw, Heart, Server, DollarSign, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FeatureItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    id: "expert-team",
    icon: Users,
    title: "Expert Team",
    description: "Senior cloud architects and creative digital designers.",
  },
  {
    id: "agile-process",
    icon: RotateCw,
    title: "Agile Process",
    description: "Rigorous weekly sprint reviews and constant deployments.",
  },
  {
    id: "24-7-support",
    icon: Heart,
    title: "24/7 Support",
    description: "Live Slack/Discord channel access directly to engineers.",
  },
  {
    id: "scalable-solutions",
    icon: Server,
    title: "Scalable Solutions",
    description: "Infrastructure constructed to safely handle massive spikes.",
  },
  {
    id: "transparent-pricing",
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear itemized billing tables. No hidden surprises.",
  },
  {
    id: "proven-results",
    icon: Award,
    title: "Proven Results",
    description: "Empirical success data backed by global software metrics.",
  },
];

interface AboutWhyChooseUsSectionProps {
  kicker?: string;
  title?: string;
}

export default function AboutWhyChooseUsSection({
  kicker = "AGRICULTURE",
  title = "Why Choose Us",
}: AboutWhyChooseUsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.fromTo(
        ".why-header-el",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".why-card-item",
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 78%",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050810] text-white pt-16 sm:pt-20 md:pt-24 pb-20 sm:pb-24 md:pb-28 overflow-hidden font-sans selection:bg-blue-600 selection:text-white"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching reference image */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* Kicker with exact rainbow gradient */}
          <span className="why-header-el inline-block font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.26em] uppercase mb-3 bg-gradient-to-r from-[#3b82f6] via-[#a855f7] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent">
            {kicker}
          </span>

          {/* Heading */}
          <h2 className="why-header-el text-[32px] sm:text-[40px] md:text-[46px] lg:text-[50px] font-bold text-white tracking-[-0.03em] leading-[1.12]">
            {title}
          </h2>
        </div>

        {/* 6 Cards Grid: 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="why-card-item group relative rounded-[20px] bg-[#14171e] border border-[#1e2330]/80 p-6 sm:p-7 md:p-8 flex flex-col justify-start transition-all duration-300 hover:border-[#3b82f6]/40 hover:bg-[#181c26] hover:-translate-y-1 shadow-lg shadow-black/40 hover:shadow-2xl hover:shadow-blue-950/20"
              >
                {/* Icon Container Badge */}
                <div className="w-10 h-10 rounded-[11px] bg-[#1e222a] border border-[#272d38] flex items-center justify-center text-[#3b82f6] mb-5 group-hover:scale-105 group-hover:bg-[#252a36] group-hover:text-blue-400 transition-all duration-300">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>

                {/* Card Title */}
                <h3 className="text-[17.5px] sm:text-[18.5px] md:text-[19px] font-bold text-white tracking-tight leading-snug mb-2 font-sans">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-[13px] sm:text-[13.5px] text-[#8fa0b5] leading-[1.6] font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
