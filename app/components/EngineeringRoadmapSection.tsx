"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Clock } from "lucide-react";

interface RoadmapStep {
  id: number;
  number: string;
  week: string;
  title: string;
  description: string;
  cardLine1: string;
  cardLine2: string;
  // Offset from center (cx=550, cy=290 in 1100x580 canvas)
  dx: number;
  dy: number;
  panelLeft: number;
  panelTop: number;
  glyphSide: "left" | "right";
  glyphTop?: string;
}

const steps: RoadmapStep[] = [
  {
    id: 1,
    number: "01",
    week: "WEEK 1",
    title: "Discover & Scope",
    description:
      "We analyze your business workflow, identify pain points, define technical requirements.",
    cardLine1: "Discover",
    cardLine2: "Scope",
    dx: 0,
    dy: -134, // Top Center (12 o'clock)
    panelLeft: 616,
    panelTop: 60,
    glyphSide: "left",
    glyphTop: "32px",
  },
  {
    id: 2,
    number: "02",
    week: "WEEK 2-3",
    title: "Architecture & Design",
    description:
      "System architecture blueprint, database schema modeling, and interactive clickable prototypes.",
    cardLine1: "Architecture",
    cardLine2: "Design",
    dx: 158,
    dy: -26, // Right (~2 o'clock)
    panelLeft: 774,
    panelTop: 190,
    glyphSide: "left",
    glyphTop: "50%",
  },
  {
    id: 3,
    number: "03",
    week: "WEEK 4-7",
    title: "Agile Development",
    description:
      "Sprint-based rapid development, production-grade microservices, and continuous integration.",
    cardLine1: "Agile",
    cardLine2: "Development",
    dx: 98,
    dy: 126, // Bottom Right (~4:30)
    panelLeft: 720,
    panelTop: 342,
    glyphSide: "left",
    glyphTop: "50%",
  },
  {
    id: 4,
    number: "04",
    week: "WEEK 8",
    title: "QA & Hardening",
    description:
      "Automated test coverage, vulnerability pentesting, performance load tests, and security audits.",
    cardLine1: "QA &",
    cardLine2: "Hardening",
    dx: -98,
    dy: 128, // Bottom Left (~7:30)
    panelLeft: 60,
    panelTop: 344,
    glyphSide: "right",
    glyphTop: "50%",
  },
  {
    id: 5,
    number: "05",
    week: "WEEK 9+",
    title: "Deployment & Scale",
    description:
      "Zero-downtime cloud migration, multi-region container orchestration, and 24/7 SLA telemetry.",
    cardLine1: "Deploy &",
    cardLine2: "Scale",
    dx: -158,
    dy: -26, // Left (~10 o'clock)
    panelLeft: 6,
    panelTop: 190,
    glyphSide: "right",
    glyphTop: "50%",
  },
];

// Strategic coordinates of scattered dual-tone glyphs across the background grid
const scatteredGlyphs = [
  { left: "6%", top: "34%" },
  { left: "8%", top: "78%" },
  { left: "16%", top: "54%" },
  { left: "28%", top: "34%" },
  { left: "36%", top: "68%" },
  { left: "62%", top: "7%" },
  { left: "60%", top: "88%" },
  { left: "78%", top: "58%" },
  { left: "94%", top: "42%" },
  { left: "94%", top: "86%" },
];

export default function EngineeringRoadmapSection() {
  // Hidden by default; appears when user hovers any step
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [activeStepId, setActiveStepId] = useState<number>(1);

  const currentStep = steps.find((s) => s.id === activeStepId) || steps[0];
  const isPanelVisible = hoveredStep !== null;

  return (
    <section
      id="engineering-roadmap"
      className="w-full bg-[#050810] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-white select-none overflow-hidden"
    >
      {/* Background Architectural Blueprint Grid (37px by 37px) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "37px 37px",
          backgroundPosition: "center center",
        }}
        aria-hidden="true"
      />

      {/* Scattered Glowing Pixel/Logo Glyphs */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {scatteredGlyphs.map((g, idx) => (
          <div
            key={idx}
            style={{ top: g.top, left: g.left }}
            className="absolute w-3 h-3 rounded-[2.5px] p-[2px] bg-gradient-to-tr from-green-500 via-blue-600 to-orange-500 shadow-[0_0_8px_rgba(37,99,235,0.4)] opacity-90"
          >
            <div className="w-full h-full bg-[#050810] rounded-[1px]" />
          </div>
        ))}
      </div>

      {/* Main Container matching project standard max-w-[1240px] */}
      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-[620px]">
            <p className="font-[family-name:var(--font-space-grotesk)] text-[11.5px] sm:text-[12.5px] font-bold tracking-[0.24em] text-[#8e98aa] uppercase mb-2.5 sm:mb-3 block">
              HOW WE WORK
            </p>
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] lg:text-[52px] font-bold text-white tracking-[-0.03em] leading-[1.05] font-[family-name:var(--font-space-grotesk)]">
              5-step engineering roadmap.
            </h2>
          </div>

          <div className="max-w-[360px] md:pb-1">
            <p className="text-[12.5px] sm:text-[13.5px] text-[#8e97a9] leading-[1.62] font-normal">
              Accelerate your market entry with our highly modular, production-hardened cloud software suites.
            </p>
          </div>
        </div>

        {/* Circular Workflow Diagram Stage Wrapper */}
        <div
          className="relative w-full flex items-center justify-center overflow-hidden min-h-[380px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[600px] py-4"
          onMouseLeave={() => setHoveredStep(null)}
        >
          {/* Generously sized 1100px x 580px Stage with responsive scaling */}
          <div className="relative w-[1100px] h-[580px] shrink-0 scale-[0.34] min-[420px]:scale-[0.42] xs:scale-[0.54] sm:scale-[0.68] md:scale-[0.84] lg:scale-100 origin-center transition-transform duration-300">
            
            {/* Connecting Circle Wireframe SVG (cx=550, cy=290, r=138) */}
            <svg
              className="absolute inset-0 w-[1100px] h-[580px] pointer-events-none z-10"
              viewBox="0 0 1100 580"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="550"
                cy="290"
                r="138"
                stroke="rgba(255, 255, 255, 0.25)"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            {/* Central SK Emblem (diameter 104px) */}
            <div
              className="absolute z-20 flex items-center justify-center"
              style={{
                left: "550px",
                top: "290px",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="w-[104px] h-[104px] rounded-full bg-[#050812] border-2 border-blue-500/80 shadow-[0_0_36px_rgba(37,99,235,0.5)] flex items-center justify-center select-none transition-transform duration-300 hover:scale-105 p-3.5">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/images/sk-logo.png"
                    alt="Satya Kabir Technologies Logo"
                    fill
                    sizes="104px"
                    className="object-contain p-1 drop-shadow-[0_0_14px_rgba(59,130,246,0.5)]"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Dynamic Interactive Information Panel */}
            <div
              className={`absolute z-30 transition-all duration-300 ease-out ${
                isPanelVisible
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{
                left: `${currentStep.panelLeft}px`,
                top: `${currentStep.panelTop}px`,
                width: "320px",
                height: "148px",
              }}
              onMouseEnter={() => setHoveredStep(currentStep.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <div className="relative w-full h-full rounded-2xl bg-[#0c0d1a]/95 backdrop-blur-md border border-[#1e2338] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex flex-col justify-between">
                {/* Embedded Border Glyph connecting to active card */}
                {currentStep.glyphSide === "left" ? (
                  <div
                    className="absolute -left-[7px] w-3.5 h-3.5 rounded-[3px] p-[2px] bg-gradient-to-tr from-green-500 via-blue-600 to-orange-500 shadow-[0_0_8px_rgba(37,99,235,0.5)] z-20 pointer-events-none"
                    style={{
                      top: currentStep.glyphTop || "50%",
                      transform: currentStep.glyphTop === "50%" ? "translateY(-50%)" : "none",
                    }}
                  >
                    <div className="w-full h-full bg-[#050810] rounded-[1px]" />
                  </div>
                ) : (
                  <div
                    className="absolute -right-[7px] w-3.5 h-3.5 rounded-[3px] p-[2px] bg-gradient-to-tr from-green-500 via-blue-600 to-orange-500 shadow-[0_0_8px_rgba(37,99,235,0.5)] z-20 pointer-events-none"
                    style={{
                      top: currentStep.glyphTop || "50%",
                      transform: currentStep.glyphTop === "50%" ? "translateY(-50%)" : "none",
                    }}
                  >
                    <div className="w-full h-full bg-[#050810] rounded-[1px]" />
                  </div>
                )}

                {/* Header: Step Number + Week & Title */}
                <div className="flex items-start gap-3.5">
                  <span className="text-[44px] font-bold text-[#8ba0ea] leading-none tracking-tight font-[family-name:var(--font-space-grotesk)]">
                    {currentStep.number}
                  </span>

                  <div className="pt-0.5">
                    <span className="text-[11px] font-bold tracking-[0.2em] font-mono text-[#6b7280] uppercase block leading-none mb-1.5">
                      {currentStep.week}
                    </span>
                    <h4 className="text-[16px] font-bold text-white tracking-tight leading-tight font-sans">
                      {currentStep.title}
                    </h4>
                  </div>
                </div>

                {/* Description Body */}
                <p className="text-[12.5px] text-[#8e97a8] font-normal leading-[1.5] mt-1 line-clamp-3">
                  {currentStep.description}
                </p>
              </div>
            </div>

            {/* 5 Step Cards (120px x 90px dimensions with distinct hover states) */}
            {steps.map((step) => {
              const posX = 550 + step.dx;
              const posY = 290 + step.dy;
              const isHovered = hoveredStep === step.id;

              return (
                <div
                  key={step.id}
                  style={{
                    left: `${posX}px`,
                    top: `${posY}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                  className={`absolute z-20 cursor-pointer transition-all duration-300 ${
                    isHovered ? "z-35 scale-105" : "hover:scale-102"
                  }`}
                  onMouseEnter={() => {
                    setHoveredStep(step.id);
                    setActiveStepId(step.id);
                  }}
                  onClick={() => {
                    setHoveredStep(step.id);
                    setActiveStepId(step.id);
                  }}
                >
                  {/* Card Container */}
                  <div
                    className={`w-[120px] h-[90px] rounded-2xl p-2.5 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                      isHovered
                        ? "bg-[#131a2e] border border-[#2a385c] border-b-2 border-b-[#8ea8ff] shadow-[0_12px_32px_rgba(124,155,245,0.75),_0_0_18px_rgba(99,124,246,0.5)]"
                        : "bg-[#0c101c] border border-[#171f33] border-b-2 border-b-[#637cf6] shadow-[0_8px_22px_rgba(99,124,246,0.5)] hover:border-b-[#8ea8ff]"
                    }`}
                  >
                    {/* Rounded-square Clock Icon Badge */}
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center mb-1.5 transition-colors duration-300 ${
                        isHovered
                          ? "bg-[#18233d] border border-[#3b4c75] text-blue-300"
                          : "bg-[#131929] border border-[#1e2740] text-[#8299eb]"
                      }`}
                    >
                      <Clock className="w-4 h-4 stroke-[1.8]" />
                    </div>

                    {/* Step Label Line 1 */}
                    <span className="text-[13px] font-semibold text-white tracking-tight leading-none mb-1 block">
                      {step.cardLine1}
                    </span>

                    {/* Step Label Line 2 */}
                    <span className="text-[12px] font-medium text-[#7c9bf5] tracking-tight leading-none block">
                      {step.cardLine2}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
