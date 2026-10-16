"use client";

import React from "react";
import { ShieldCheck, CheckSquare } from "lucide-react";

// 7 Steps of Development Process
const processSteps = [
  { step: "1", label: "Discover" },
  { step: "2", label: "Strategy" },
  { step: "3", label: "UI/UX" },
  { step: "4", label: "Development" },
  { step: "5", label: "Testing" },
  { step: "6", label: "Deployment" },
  { step: "7", label: "Support" },
];

// Security Features for the right card
const securityFeatures = [
  { label: "AI Content Moderation" },
  { label: "User Reporting" },
  { label: "Fraud Detection" },
  { label: "Secure Payments" },
  { label: "Real-Time Monitoring" },
  { label: "Data Privacy & Compliance" },
];

// Custom gradient line connectors between steps matching reference
const connectorGradients = [
  "from-cyan-400 via-teal-400 to-amber-500",
  "from-blue-400 via-emerald-400 to-orange-500",
  "from-teal-400 via-cyan-400 to-amber-500",
  "from-cyan-400 via-teal-400 to-orange-500",
  "from-emerald-400 via-teal-400 to-amber-500",
  "from-blue-400 via-teal-400 to-orange-500",
];

export default function AgriDevelopmentProcessSection() {
  return (
    <section className="relative w-full bg-[#020d06] text-white py-14 sm:py-18 lg:py-20 border-t border-emerald-950/40 select-none overflow-hidden">
      {/* Soft atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full opacity-15 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(6, 78, 59, 0.15) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* =================================================================
              LEFT: OUR DEVELOPMENT PROCESS (7-Step Stepper Timeline)
          ================================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Section Headline */}
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-white tracking-tight font-sans mb-8 sm:mb-10">
              Our Development Process
            </h2>

            {/* Stepper Timeline Row (Horizontal on desktop/tablet, scrollable on mobile) */}
            <div className="w-full overflow-x-auto pb-3 pt-1 sm:overflow-visible no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
              <div className="flex items-center min-w-[560px] sm:min-w-0 w-full justify-between">
                {processSteps.map((item, idx) => (
                  <React.Fragment key={item.step}>
                    {/* Step Node (Box + Label) */}
                    <div className="flex flex-col items-center group cursor-default flex-shrink-0">
                      {/* Step Number Box */}
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-[14px] border border-emerald-700/60 bg-[#02180b] flex items-center justify-center text-white font-medium text-[15px] sm:text-[16px] shadow-lg shadow-black/40 group-hover:border-emerald-500 group-hover:scale-105 transition-all duration-300">
                        {item.step}
                      </div>

                      {/* Step Label */}
                      <span className="text-[11.5px] sm:text-[12px] font-medium text-slate-200 tracking-tight text-center mt-3 group-hover:text-emerald-300 transition-colors">
                        {item.label}
                      </span>
                    </div>

                    {/* Gradient Connector Line between steps */}
                    {idx < processSteps.length - 1 && (
                      <div className="flex-1 mx-1.5 sm:mx-2 -mt-7 flex items-center">
                        <div
                          className={`w-full h-[2px] bg-gradient-to-r ${connectorGradients[idx % connectorGradients.length]} rounded-full opacity-90`}
                        />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Mobile swipe hint */}
            <div className="sm:hidden flex items-center gap-1.5 text-[10.5px] text-[#719881] mt-1 mb-2 font-mono">
              <span>Scroll steps (1 - 7)</span>
              <span className="text-emerald-400">→</span>
            </div>
          </div>

          {/* =================================================================
              RIGHT: SAFE. SMART. SOCIAL. SECURITY CARD
          ================================================================== */}
          <div className="lg:col-span-5">
            <div
              className="rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 border border-emerald-600/40 shadow-[0_20px_50px_rgba(0,0,0,0.65)] relative overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #022310 0%, #01180c 100%)",
              }}
            >
              {/* Header: Shield Icon + Safe. Smart. Social. Title */}
              <div className="flex items-center gap-3.5 sm:gap-4">
                {/* Shield Icon in rounded container */}
                <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl border border-emerald-500/40 bg-[#042813] flex items-center justify-center text-emerald-400 flex-shrink-0 shadow-inner">
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </div>

                <div className="flex flex-col text-left">
                  <h3 className="text-[20px] sm:text-[22px] font-bold text-white tracking-tight leading-snug font-sans">
                    Safe. Smart. Social.
                  </h3>
                  <p className="text-[11.5px] sm:text-[12px] text-[#8fa89b] font-normal leading-tight mt-0.5">
                    Enterprise grade security for your members
                  </p>
                </div>
              </div>

              {/* Security Feature Checklist (2 Columns x 3 Rows) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mt-6 pt-3 border-t border-emerald-800/30">
                {securityFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-left">
                    {/* Checkbox Icon */}
                    <div className="w-3.5 h-3.5 rounded-[3px] border border-emerald-400/80 bg-[#02180b] flex items-center justify-center flex-shrink-0 text-emerald-400">
                      <svg
                        className="w-2.5 h-2.5"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2.5 6 4.5 8.5 9.5 3.5" />
                      </svg>
                    </div>

                    {/* Feature Label */}
                    <span className="text-[11.5px] sm:text-[12px] text-[#a0c5b0] font-normal leading-tight">
                      {feat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
