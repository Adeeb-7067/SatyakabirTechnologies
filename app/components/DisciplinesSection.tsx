"use client";

import React from "react";
import Image from "next/image";

interface DisciplineCard {
  id: string;
  number: string;
  title: string;
  image: string;
}

const disciplines: DisciplineCard[] = [
  {
    id: "01",
    number: "01",
    title: "Custom Software",
    image: "/images/discipline-01.png",
  },
  {
    id: "02",
    number: "02",
    title: "Mobile Application",
    image: "/images/discipline-02.png",
  },
  {
    id: "03",
    number: "03",
    title: "AI Automation",
    image: "/images/discipline-03.png",
  },
  {
    id: "04",
    number: "04",
    title: "Digital Marketing",
    image: "/images/discipline-04.png",
  },
  {
    id: "05",
    number: "05",
    title: "Cloud & Dev-ops",
    image: "/images/discipline-05.png",
  },
  {
    id: "06",
    number: "06",
    title: "QA Security Audit",
    image: "/images/discipline-06.png",
  },
];

export default function DisciplinesSection() {
  const renderCard = (card: DisciplineCard) => (
    <div className="group relative w-full aspect-[391/465] rounded-[16px] p-6 border border-[#c6d7ff]/80 shadow-[0_0_7px_0_#91a7ff] backdrop-blur-[4px] transition-all duration-300 hover:shadow-[0_0_16px_2px_#91a7ff] hover:-translate-y-1.5 hover:border-blue-400/90 flex flex-col justify-between overflow-hidden bg-white select-none">
      {/* High-Definition Fluted Glass Background with Rose/Cyan Sheen */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fluted-card-bg-2x.png')",
        }}
        aria-hidden="true"
      />

      {/* Top-Left Number */}
      <div className="relative z-10 text-left">
        <span className="text-[28px] sm:text-[30px] font-bold text-[#0038e0] font-[family-name:var(--font-space-grotesk)] tracking-tight leading-none">
          {card.number}
        </span>
      </div>

      {/* Center 3D Illustration Graphic (Matching scale & tactile presence) */}
      <div className="relative z-10 w-full flex-1 flex items-center justify-center my-auto py-2">
        <div className="relative w-[230px] h-[230px] sm:w-[250px] sm:h-[250px] md:w-[270px] md:h-[270px]">
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-contain drop-shadow-[0_16px_28px_rgba(20,50,150,0.16)] transition-transform duration-500 ease-out group-hover:scale-106 group-hover:-translate-y-1 select-none pointer-events-none"
            priority={card.id === "01" || card.id === "02"}
          />
        </div>
      </div>

      {/* Bottom-Left Title */}
      <div className="relative z-10 text-left">
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0038e0] font-[family-name:var(--font-space-grotesk)] tracking-tight leading-snug transition-colors group-hover:text-blue-700">
          {card.title}
        </h3>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#efefff] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-900 overflow-hidden">
      <div className="max-w-[880px] mx-auto">
        
        {/* Section Header: Positioned with desktop offset matching reference image */}
        <div className="ml-0 md:ml-[26%] lg:ml-[28%] max-w-[580px] mb-12 sm:mb-16">
          {/* Category Tag */}
          <p className="font-[family-name:var(--font-space-grotesk)] text-[12px] sm:text-[13px] font-bold tracking-[0.22em] text-[#333338] uppercase block mb-3 sm:mb-4">
            OUR SERVICES
          </p>

          {/* Headline: Space Grotesk, Bold, Line Height 0.98, Tight Tracking */}
          <h2 className="text-[44px] sm:text-[56px] md:text-[66px] lg:text-[74px] xl:text-[80px] font-bold text-[#0038e0] tracking-[-0.03em] leading-[0.98] font-[family-name:var(--font-space-grotesk)] mb-5">
            Six engineering <br />
            disciplines, one <br />
            accountable <br />
            team.
          </h2>

          {/* Subtitle */}
          <p className="text-[12.5px] sm:text-[13px] md:text-[13.5px] text-[#555560] font-normal leading-[1.62] max-w-[620px]">
            From initial discovery and wireframe fidelity through high-availability Kubernetes deployments, <br className="hidden sm:inline" />
            our squads engineer enterprise software that stands up to global load.
          </p>
        </div>

        {/* Alternating Step-Ladder Zig-Zag Flow */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* Card 01: Left */}
          <div className="w-full sm:max-w-[360px] md:max-w-[390px] mr-auto">
            {renderCard(disciplines[0])}
          </div>

          {/* Card 02: Right, Stepped Down */}
          <div className="w-full sm:max-w-[360px] md:max-w-[390px] ml-auto sm:-mt-16 md:-mt-24 lg:-mt-28">
            {renderCard(disciplines[1])}
          </div>

          {/* Card 03: Left, Stepped Down */}
          <div className="w-full sm:max-w-[360px] md:max-w-[390px] mr-auto sm:-mt-16 md:-mt-24 lg:-mt-28">
            {renderCard(disciplines[2])}
          </div>

          {/* Card 04: Right, Stepped Down */}
          <div className="w-full sm:max-w-[360px] md:max-w-[390px] ml-auto sm:-mt-16 md:-mt-24 lg:-mt-28">
            {renderCard(disciplines[3])}
          </div>

          {/* Card 05: Left, Stepped Down */}
          <div className="w-full sm:max-w-[360px] md:max-w-[390px] mr-auto sm:-mt-16 md:-mt-24 lg:-mt-28">
            {renderCard(disciplines[4])}
          </div>

          {/* Card 06: Right, Stepped Down */}
          <div className="w-full sm:max-w-[360px] md:max-w-[390px] ml-auto sm:-mt-16 md:-mt-24 lg:-mt-28">
            {renderCard(disciplines[5])}
          </div>

        </div>

      </div>
    </section>
  );
}
