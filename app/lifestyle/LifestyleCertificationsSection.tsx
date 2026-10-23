"use client";

import React from "react";
import Image from "next/image";

interface CertificationCard {
  id: number;
  title: string;
  badge: string;
  description: string;
}

const certifications: CertificationCard[] = [
  {
    id: 1,
    title: "ISO 27001 Certified",
    badge: "DATA SECURITY",
    description:
      "Information Security Management standard, ensuring strict access controls, hardware-enforced FIDO2 authentication, and bank-grade TLS 1.3 encryption for data in transit and AES-256 at rest.",
  },
  {
    id: 2,
    title: "ISO 9001 Compliant",
    badge: "QUALITY DELIVERY",
    description:
      "Structured 6-phase engineering lifecycle with weekly staging deployments and 90-day bug warranty.",
  },
  {
    id: 3,
    title: "GDPR & DPDP Act Privacy Framework",
    badge: "DATA SOVEREIGNTY",
    description:
      "Strict adherence to Indian Digital Personal Data Protection Act 2023, EU GDPR, and zero data monetization.",
  },
];

interface BoardroomPanel {
  id: string;
  title: string;
  src: string;
  alt: string;
}

const panels: BoardroomPanel[] = [
  {
    id: "01",
    title: "01. SECURITY",
    src: "/images/cert-panel-1-clean.png",
    alt: "Satya Kabir Security Team",
  },
  {
    id: "02",
    title: "02. COMPLIANCE",
    src: "/images/cert-panel-2-clean.png",
    alt: "Executive Compliance Review",
  },
  {
    id: "03",
    title: "03. DATA CENTER",
    src: "/images/cert-panel-3-clean.png",
    alt: "Data Center & Architecture Team",
  },
];

export default function LifestyleCertificationsSection() {
  return (
    <section className="relative w-full bg-[#060913] py-20 sm:py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div
        className="pointer-events-none absolute -top-32 left-1/3 w-[600px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-[500px] h-[320px] bg-indigo-600/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT COLUMN: Header & 3 Certification Cards */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center w-fit mb-5 sm:mb-6">
              <span className="inline-flex items-center bg-white text-zinc-950 text-[11px] sm:text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full shadow-md select-none">
                SECTION 03 // TRUST & GOVERNANCE
              </span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-3 font-sans">
              Certifications
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-400 text-sm sm:text-base mb-8 sm:mb-10 font-sans leading-relaxed">
              ISO, assurance, and trust signals for regulated workloads.
            </p>

            {/* 3 Certification Cards */}
            <div className="flex flex-col gap-4 sm:gap-5 w-full">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="relative rounded-xl sm:rounded-2xl bg-[#090e1b]/80 border border-blue-600/40 hover:border-blue-500 p-5 sm:p-6 shadow-xl shadow-black/50 backdrop-blur-sm transition-all duration-300 hover:bg-[#0c1426] group"
                >
                  {/* Top Row: Number Icon + Title + Category Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-zinc-700/80 bg-zinc-900/60 flex items-center justify-center text-xs font-bold text-white flex-shrink-0 group-hover:border-blue-500/60 transition-colors">
                        {cert.id}
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                        {cert.title}
                      </h3>
                    </div>

                    <span className="bg-[#151c2c] text-zinc-300 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 sm:px-3 py-1 rounded border border-zinc-700/50 select-none flex-shrink-0">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Description Aligned With Title */}
                  <div className="pl-10 sm:pl-11.5 mt-2.5 sm:mt-3">
                    <p className="text-xs sm:text-[13.5px] text-zinc-400 leading-relaxed font-sans">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: 3-Panel Split Triptych */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 h-[440px] sm:h-[500px] md:h-[540px] lg:h-[560px] w-full">
              {panels.map((panel) => (
                <div
                  key={panel.id}
                  className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-black/70 group bg-neutral-900"
                >
                  <Image
                    src={panel.src}
                    alt={panel.alt}
                    fill
                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 18vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none"
                  />

                  {/* Dark bottom gradient shadow for crisp text contrast */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10"
                    aria-hidden="true"
                  />

                  {/* Monospace Bottom Label */}
                  <div className="absolute bottom-4 sm:bottom-5 left-3 sm:left-4 z-20">
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-widest text-zinc-300 uppercase drop-shadow-md">
                      {panel.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
