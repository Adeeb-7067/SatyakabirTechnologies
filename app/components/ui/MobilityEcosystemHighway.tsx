"use client";

import React, { useState } from "react";

interface EcosystemStakeholder {
  id: number;
  x: number;
  baseY: number;
  orbitCenterY: number;
  primaryLabel: string;
  categoryLabel: string;
  textPrimaryY: number;
  textCategoryY: number;
}

// 6 Ascending Pillars matching reference screenshot with sub-pixel precision (1024x372 coordinate system)
const stakeholders: EcosystemStakeholder[] = [
  {
    id: 1,
    x: 130.6,
    baseY: 317.8,
    orbitCenterY: 270,
    textPrimaryY: 201,
    textCategoryY: 216,
    primaryLabel: "Book Rides & Travel",
    categoryLabel: "Customers",
  },
  {
    id: 2,
    x: 286.4,
    baseY: 286.7,
    orbitCenterY: 239,
    textPrimaryY: 170,
    textCategoryY: 185,
    primaryLabel: "Book Rides & Travel",
    categoryLabel: "Customers",
  },
  {
    id: 3,
    x: 442.2,
    baseY: 253.0,
    orbitCenterY: 205,
    textPrimaryY: 136,
    textCategoryY: 151,
    primaryLabel: "Book Rides & Travel",
    categoryLabel: "Customers",
  },
  {
    id: 4,
    x: 597.5,
    baseY: 219.3,
    orbitCenterY: 171,
    textPrimaryY: 102,
    textCategoryY: 117,
    primaryLabel: "Book Rides & Travel",
    categoryLabel: "Customers",
  },
  {
    id: 5,
    x: 753.4,
    baseY: 182.9,
    orbitCenterY: 135,
    textPrimaryY: 66,
    textCategoryY: 81,
    primaryLabel: "Book Rides & Travel",
    categoryLabel: "Customers",
  },
  {
    id: 6,
    x: 908.7,
    baseY: 148.0,
    orbitCenterY: 100,
    textPrimaryY: 31,
    textCategoryY: 46,
    primaryLabel: "Book Rides & Travel",
    categoryLabel: "Customers",
  },
];

export interface EcosystemCustomStakeholder {
  primaryLabel: string;
  categoryLabel: string;
}

interface MobilityEcosystemHighwayProps {
  customStakeholders?: EcosystemCustomStakeholder[];
}

export default function MobilityEcosystemHighway({
  customStakeholders,
}: MobilityEcosystemHighwayProps = {}) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const activeStakeholders = stakeholders.map((item, idx) => {
    if (customStakeholders && customStakeholders[idx]) {
      return {
        ...item,
        primaryLabel: customStakeholders[idx].primaryLabel,
        categoryLabel: customStakeholders[idx].categoryLabel,
      };
    }
    return item;
  });

  return (
    <div className="relative w-full overflow-x-auto lg:overflow-visible py-2 select-none">
      {/* High-tech CSS animations for highway laser flow and pulsing nodes */}
      <style>{`
        @keyframes highwayLaserPulse {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -112; }
        }
        @keyframes orbitIdlePulse {
          0%, 100% { opacity: 0.45; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.04); }
        }
        .highway-laser-anim {
          animation: highwayLaserPulse 3.5s linear infinite;
        }
        .pillar-orbit-ring {
          transform-box: fill-box;
          transform-origin: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .pillar-group:hover .pillar-orbit-ring {
          stroke: #38bdf8 !important;
          stroke-width: 1.8 !important;
          filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.9)) !important;
          transform: scale(1.08);
        }
        .pillar-group:hover .pillar-volumetric-beam {
          opacity: 1 !important;
          filter: drop-shadow(0 0 16px rgba(0, 229, 255, 0.85)) !important;
        }
        .pillar-group:hover .pillar-core-ray {
          stroke-width: 4.5 !important;
        }
        .pillar-group:hover .pillar-category-text {
          fill: #38bdf8 !important;
          filter: drop-shadow(0 0 10px rgba(56, 189, 248, 0.85)) !important;
        }
        .pillar-group:hover .pillar-base-halo {
          transform: scale(1.3);
          opacity: 0.9 !important;
        }
      `}</style>

      <div className="min-w-[760px] w-full max-w-[1240px] mx-auto">
        <svg
          viewBox="0 0 1024 372"
          className="w-full h-auto overflow-visible drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
        >
          <defs>
            {/* Beam Volumetric Cylindrical Glow Gradient */}
            <linearGradient id="beamVolumetricGrad" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#00e5ff" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>

            {/* Beam Core White Laser Ray Gradient */}
            <linearGradient id="beamCoreRayGrad" x1="0" y1="100%" x2="0" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#bae6fd" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>

            {/* Orange Ribbon Gradient (Tapering from left towards center) */}
            <linearGradient id="orangeTaperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ea580c" stopOpacity="1" />
              <stop offset="45%" stopColor="#f97316" stopOpacity="0.95" />
              <stop offset="80%" stopColor="#ea580c" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
            </linearGradient>

            {/* Upper Blue Road Surface Gradient */}
            <linearGradient id="blueUpperSurface" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#092770" />
              <stop offset="35%" stopColor="#1d4ed8" />
              <stop offset="70%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#0066ff" />
            </linearGradient>

            {/* Lower Blue Road Underbody Gradient */}
            <linearGradient id="blueLowerUnderbody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#081026" />
              <stop offset="35%" stopColor="#172554" />
              <stop offset="70%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>

            {/* Green Sweeping Ribbon Gradient (Sweeping upward to top right corner) */}
            <linearGradient id="greenSweepGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0" />
              <stop offset="25%" stopColor="#10b981" stopOpacity="0.75" />
              <stop offset="65%" stopColor="#16a34a" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="1" />
            </linearGradient>

            {/* Volumetric Beam Blur Filter */}
            <filter id="softVolumetricGlow" x="-60%" y="-20%" width="220%" height="140%">
              <feGaussianBlur stdDeviation="4.2" result="blur1" />
              <feGaussianBlur stdDeviation="1.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Centerline Highway Laser Glow */}
            <filter id="laserLineFilter" x="-10%" y="-100%" width="120%" height="300%">
              <feGaussianBlur stdDeviation="3" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Node Halo Radial Glow */}
            <filter id="nodeHaloFilter" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="3.5" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* =========================================================================
              LAYER 1: Orange Tapered Ribbon on Left (Tapers to a sharp point at x=410)
          ========================================================================== */}
          <polygon
            points="-10,349 410,257 410,261 -10,373"
            fill="url(#orangeTaperGrad)"
          />
          {/* Glowing orange/amber bottom edge highlight line */}
          <line
            x1="-10"
            y1="373"
            x2="410"
            y2="261"
            stroke="#fdba74"
            strokeWidth="1.8"
            opacity="0.9"
          />

          {/* =========================================================================
              LAYER 2: Lower Blue Track (Dark cobalt underbody below centerline)
          ========================================================================== */}
          <polygon
            points="-10,344 1034,121 1034,136 -10,359"
            fill="url(#blueLowerUnderbody)"
          />

          {/* =========================================================================
              LAYER 3: Upper Blue Track (Road surface above centerline)
          ========================================================================== */}
          <polygon
            points="-10,326 1034,103 1034,121 -10,344"
            fill="url(#blueUpperSurface)"
          />

          {/* =========================================================================
              LAYER 4: Green Sweeping Ribbon on Right (Arcs up to top-right corner)
          ========================================================================== */}
          <path
            d="M 690,149 Q 860,116 1034,74 L 1034,103 L 690,149 Z"
            fill="url(#greenSweepGrad)"
          />
          {/* Electric lime top boundary line */}
          <path
            d="M 690,149 Q 860,116 1034,74"
            stroke="#4ade80"
            strokeWidth="2.4"
            fill="none"
          />

          {/* =========================================================================
              LAYER 5: Glowing Continuous White/Cyan Laser Highway Centerline
          ========================================================================== */}
          {/* Cyan laser bloom glow */}
          <line
            x1="-10"
            y1="344.5"
            x2="1034"
            y2="121.2"
            stroke="#00e5ff"
            strokeWidth="6"
            opacity="0.75"
            filter="url(#laserLineFilter)"
          />
          {/* Crisp solid white highway laser centerline */}
          <line
            x1="-10"
            y1="344.5"
            x2="1034"
            y2="121.2"
            stroke="#ffffff"
            strokeWidth="2.2"
            filter="url(#laserLineFilter)"
          />
          {/* Animated photon pulse traveling up the highway */}
          <line
            x1="-10"
            y1="344.5"
            x2="1034"
            y2="121.2"
            stroke="#cffafe"
            strokeWidth="3"
            strokeDasharray="16 40"
            className="highway-laser-anim"
            opacity="0.85"
            filter="url(#laserLineFilter)"
          />

          {/* =========================================================================
              LAYER 6: The 6 Ascending Vertical Light Pillars (Matching Reference Screenshot)
          ========================================================================== */}
          {activeStakeholders.map((item) => {
            const isHovered = hoveredId === item.id;
            const topY = item.baseY - 79;

            return (
              <g
                key={item.id}
                className="pillar-group cursor-pointer"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* 1. Thin 3D Wireframe Circular Orbit Ring */}
                <circle
                  cx={item.x}
                  cy={item.orbitCenterY}
                  r="26.5"
                  fill="none"
                  stroke={isHovered ? "#38bdf8" : "rgba(56, 189, 248, 0.45)"}
                  strokeWidth={isHovered ? "1.8" : "1.2"}
                  className="pillar-orbit-ring"
                />

                {/* 2. Soft Volumetric Neon Cyan Beam (14px wide cylinder) */}
                <rect
                  x={item.x - 7}
                  y={topY}
                  width="14"
                  height="79"
                  rx="7"
                  fill="url(#beamVolumetricGrad)"
                  filter="url(#softVolumetricGlow)"
                  className="pillar-volumetric-beam transition-all duration-300"
                  opacity={isHovered ? 1 : 0.9}
                />

                {/* 3. Solid Bright White/Cyan Laser Core Ray */}
                <line
                  x1={item.x}
                  y1={item.baseY}
                  x2={item.x}
                  y2={topY}
                  stroke="url(#beamCoreRayGrad)"
                  strokeWidth={isHovered ? "4.5" : "3.5"}
                  strokeLinecap="round"
                  className="pillar-core-ray transition-all duration-300"
                />

                {/* 4. Base Node - Outer Cyan Glowing Halo */}
                <circle
                  cx={item.x}
                  cy={item.baseY}
                  r="8"
                  fill="rgba(0, 229, 255, 0.25)"
                  stroke="#00e5ff"
                  strokeWidth="1.2"
                  filter="url(#nodeHaloFilter)"
                  className="pillar-base-halo transition-all duration-300"
                />

                {/* 5. Base Node - Pure White Core Node */}
                <circle
                  cx={item.x}
                  cy={item.baseY}
                  r="3.5"
                  fill="#ffffff"
                />

                {/* 6. Floating Labels Centered Directly Above the Pillar */}
                {/* Line 1: Primary Action ("Book Rides & Travel") */}
                <text
                  x={item.x}
                  y={item.textPrimaryY}
                  textAnchor="middle"
                  fill={isHovered ? "#f1f5f9" : "#94a3b8"}
                  fontSize="10.5"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="500"
                  letterSpacing="0.01em"
                  className="transition-colors duration-200 pointer-events-none"
                >
                  {item.primaryLabel}
                </text>

                {/* Line 2: Category / Stakeholder ("Customers") */}
                <text
                  x={item.x}
                  y={item.textCategoryY}
                  textAnchor="middle"
                  fill={isHovered ? "#38bdf8" : "#00e5ff"}
                  fontSize="13"
                  fontFamily="var(--font-space-grotesk), system-ui, sans-serif"
                  fontWeight="700"
                  letterSpacing="0.02em"
                  className="pillar-category-text transition-all duration-200 pointer-events-none drop-shadow-[0_0_8px_rgba(0,229,255,0.7)]"
                >
                  {item.categoryLabel}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
