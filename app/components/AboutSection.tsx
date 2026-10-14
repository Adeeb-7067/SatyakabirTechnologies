import React from "react";
import Image from "next/image";

interface ComplianceCard {
  id: number;
  title: string;
  badge: string;
  description: string;
}

const complianceCards: ComplianceCard[] = [
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

interface PanelItem {
  id: string;
  title: string;
  image: string;
}

const panels: PanelItem[] = [
  {
    id: "01",
    title: "01. SECURITY",
    image: "/images/hq-about-panel-1.png",
  },
  {
    id: "02",
    title: "02. COMPLIANCE",
    image: "/images/hq-about-panel-2.png",
  },
  {
    id: "03",
    title: "03. DATA CENTER",
    image: "/images/hq-about-panel-3.png",
  },
];

export default function AboutSection() {
  return (
    <section className="w-full bg-[#efefff] py-14 sm:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-900">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          {/* Top Tag */}
          <span className="text-[12px] sm:text-[13px] font-bold tracking-widest text-[#1d4ed8] uppercase inline-block mb-3">
            ABOUT US
          </span>

          {/* Main Heading */}
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold text-slate-900 tracking-tight leading-[1.18] max-w-[700px] mb-3 font-sans">
            We’re an in-house engineering team- not a broker, not an outsourcing
            shop.
          </h2>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-500 font-normal tracking-normal">
            ISO, assurance, and trust signals for regulated workloads.
          </p>
        </div>

        {/* Content Grid: Cards on Left, Triptych on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: 3 Compliance / Trust Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4 sm:gap-5">
            {complianceCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-100 border-l-[4px] border-l-[#2563eb] transition-all duration-200 hover:shadow-md"
              >
                {/* Card Top Row: Number + Title + Category Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {/* Number Box with fine blue border */}
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-blue-400/70 bg-blue-50/40 text-[#1d4ed8] font-bold text-xs sm:text-sm flex items-center justify-center flex-shrink-0">
                      {card.id}
                    </span>

                    {/* Card Title */}
                    <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1d4ed8] leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Right Solid Blue Badge */}
                  <span className="bg-[#1d4ed8] text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 sm:px-3 py-1 rounded-sm sm:rounded-md flex-shrink-0 whitespace-nowrap">
                    {card.badge}
                  </span>
                </div>

                {/* Card Description */}
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-normal leading-[1.65] mt-3 pl-10 sm:pl-11">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: 3 Tall Rounded Panels (Triptych) */}
          <div className="lg:col-span-5 flex items-center">
            <div className="w-full grid grid-cols-3 gap-2.5 sm:gap-3.5 h-[380px] sm:h-[430px] lg:h-[470px]">
              {panels.map((panel) => (
                <div
                  key={panel.id}
                  className="relative h-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md group bg-slate-900"
                >
                  {/* Panel Image */}
                  <Image
                    src={panel.image}
                    alt={panel.title}
                    fill
                    sizes="(max-width: 768px) 33vw, 20vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Bottom Dark Gradient & Title */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent flex items-end justify-center p-2.5 sm:p-3.5">
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-white uppercase text-center leading-tight">
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
