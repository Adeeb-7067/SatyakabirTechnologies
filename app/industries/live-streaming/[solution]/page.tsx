import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Zap,
  Lock,
  Check,
  Smile,
  Sparkles,
  Star,
  ShieldCheck,
  Cloud,
  Globe,
  Database,
  Radio,
  Box,
  Cpu,
  Terminal,
  Layers,
  Smartphone,
  Code2,
} from "lucide-react";
import {
  liveStreamingSolutionsData,
  resolveLiveSolutionSlug,
  LiveStreamingSolutionData,
} from "../solutionsData";
import TiltCard from "@/app/components/ui/TiltCard";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";

// Helper for rendering technology brand icons in the tech stack marquee
function getTechIcon(iconType: string, color: string) {
  const iconProps = { className: "w-4 h-4 shrink-0", style: { color } };
  switch (iconType) {
    case "react":
      return (
        <svg viewBox="0 0 115.3 100" className="w-4 h-4 shrink-0 fill-none stroke-current" style={{ color }}>
          <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="matrix(0.866 -0.5 0.5 0.866 -17.27 35.88)" strokeWidth="4" />
          <ellipse cx="57.65" cy="50" rx="16.5" ry="46" transform="matrix(0.866 0.5 -0.5 0.866 32.73 -20.65)" strokeWidth="4" />
          <ellipse cx="57.65" cy="50" rx="16.5" ry="46" strokeWidth="4" />
          <circle cx="57.65" cy="50" r="7.5" fill={color} />
        </svg>
      );
    case "node":
      return (
        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 fill-current" style={{ color }}>
          <path d="M12 2l8.8 5.1v10.2L12 22.3l-8.8-5V7.1L12 2zm0 2.3L4.8 8v8.6L12 20.3l7.2-3.7V8L12 4.3z" />
        </svg>
      );
    case "flutter":
      return <Smartphone {...iconProps} />;
    case "aws":
      return <Cloud {...iconProps} />;
    case "websocket":
      return <Globe {...iconProps} />;
    case "postgres":
      return <Database {...iconProps} />;
    case "webrtc":
      return <Radio {...iconProps} />;
    case "redis":
      return <Zap {...iconProps} />;
    case "docker":
      return <Box {...iconProps} />;
    case "kubernetes":
      return <Cpu {...iconProps} />;
    case "python":
      return <Terminal {...iconProps} />;
    case "kafka":
      return <Layers {...iconProps} />;
    default:
      return <Code2 {...iconProps} />;
  }
}

// Generate static params for all solution pages
export async function generateStaticParams() {
  return Object.keys(liveStreamingSolutionsData).map((slug) => ({
    solution: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution: slug } = await params;
  const resolvedSlug = resolveLiveSolutionSlug(slug);
  const data = liveStreamingSolutionsData[resolvedSlug];
  const pageTitle = `${data.heroTitle.line1} ${data.heroTitle.line2Pink} | Satya Kabir Technologies`;
  return {
    title: pageTitle,
    description: data.subtitle,
  };
}

export default function LiveStreamingSolutionPage({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#08030b]" />}>
      <SolutionContent params={params} />
    </Suspense>
  );
}

async function SolutionContent({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution: slug } = await params;
  const resolvedSlug = resolveLiveSolutionSlug(slug);
  const data: LiveStreamingSolutionData = liveStreamingSolutionsData[resolvedSlug];

  return (
    <div className="w-full min-h-screen bg-[#08030b] text-white select-none overflow-x-hidden font-sans">
      
      {/* =====================================================================
          1. HERO SECTION (Matching Figma screenshot exactly)
      ====================================================================== */}
      <section
        className="relative pt-6 sm:pt-10 md:pt-12 pb-0 overflow-hidden flex flex-col justify-between bg-[#09080d]"
      >
        {/* Soft Background Neon Glow behind Phone */}
        <div
          className="pointer-events-none absolute right-[5%] top-[15%] w-[500px] h-[500px] rounded-full opacity-20 blur-[140px]"
          style={{
            background:
              "radial-gradient(circle, rgba(255, 42, 133, 0.5) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 80%)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2 sm:pt-4">
            
            {/* Left Column: Breadcrumb, Eyebrow, Main Headline, Subtitle, CTA Buttons */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              {/* Breadcrumb Navigation: HOME › LIVE STREAMING & DATING › SOLUTION */}
              <div className="flex items-center gap-2 mb-6 sm:mb-7">
                <Link
                  href="/"
                  className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#a190a3] uppercase hover:text-white transition-colors"
                >
                  HOME
                </Link>
                <span className="text-[11px] sm:text-[12px] font-mono text-[#7a647d]">›</span>
                <Link
                  href="/industries/live-streaming"
                  className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-[#a190a3] uppercase hover:text-white transition-colors"
                >
                  LIVE STREAMING & DATING
                </Link>
                <span className="text-[11px] sm:text-[12px] font-mono text-[#7a647d]">›</span>
                <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.22em] text-white font-bold uppercase">
                  {data.breadcrumbLabel}
                </span>
              </div>

              {/* Eyebrow Pill */}
              <div className="w-fit bg-[#240e1e]/85 border border-[#4d1637] text-[#ff3d94] text-[11px] sm:text-[11.5px] font-mono tracking-wider font-semibold uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a85] shadow-[0_0_8px_#ff2a85] shrink-0" />
                <span>{data.eyebrow}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-bold tracking-[-0.035em] leading-[1.08] font-sans">
                <span className="text-white block">{data.heroTitle.line1}</span>
                <span className="text-[#ff1a75] block mt-1">
                  {data.heroTitle.line2Pink}
                </span>
              </h1>

              {/* Subtitle Paragraph */}
              <p className="text-[14px] sm:text-[15.5px] text-[#b3a4b6] leading-[1.65] font-normal mt-5 sm:mt-6 max-w-[560px]">
                {data.subtitle}
              </p>

              {/* CTA Buttons Row */}
              <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
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

            </div>

            {/* Right Column: Hero Visual Phone Showcase with 2 Glass Floating Badges */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px]">
                
                {/* 3D Tilt Wrapper around Phone Artwork */}
                <TiltCard maxTilt={4} scale={1.01} glare={false} className="relative w-full block">
                  {/* Subtle Background Glow Heart */}
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-30 blur-3xl z-0"
                    style={{ background: "#ff2a85" }}
                    aria-hidden="true"
                  />

                  <div className="relative z-10 flex justify-center items-center">
                    <Image
                      src={data.heroImage}
                      alt={data.heroTitle.line1}
                      width={440}
                      height={620}
                      priority
                      className="w-full h-auto object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
                    />
                  </div>
                </TiltCard>

                {/* Floating Glass Badge 1 (Top-Right: End-to-End Encrypted) */}
                <div className="absolute -right-2 sm:-right-6 top-8 sm:top-12 z-30 pointer-events-auto">
                  <TiltCard maxTilt={8} scale={1.04} glare={true} glareOpacity={0.25} className="rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-3 bg-[#160d22]/90 hover:bg-[#1f1230] backdrop-blur-xl border border-[#441b59]/80 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-purple-900/50 border border-purple-500/50 flex items-center justify-center text-[#d8b4fe] shrink-0 shadow-inner">
                        <Lock className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[12.5px] sm:text-[13px] font-bold text-white leading-tight">
                          {data.floatingBadge1.title}
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] text-[#b3a1b8] leading-tight mt-1">
                          {data.floatingBadge1.subtitle}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </div>

                {/* Floating Glass Badge 2 (Bottom-Left: Ultra-Low Latency) */}
                <div className="absolute -left-4 sm:-left-8 bottom-24 sm:bottom-28 z-30 pointer-events-auto">
                  <TiltCard maxTilt={8} scale={1.04} glare={true} glareOpacity={0.25} className="rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-3 bg-[#0a1622]/90 hover:bg-[#0f1f30] backdrop-blur-xl border border-[#163852]/80 rounded-2xl px-4 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all cursor-pointer">
                      <div className="w-10 h-10 rounded-xl bg-teal-950/60 border border-cyan-500/50 flex items-center justify-center text-[#38bdf8] shrink-0 shadow-inner">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[12.5px] sm:text-[13px] font-bold text-white leading-tight">
                          {data.floatingBadge2.title}
                        </span>
                        <span className="text-[10px] sm:text-[10.5px] text-[#93a7b8] leading-tight mt-1">
                          {data.floatingBadge2.subtitle}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 4 Bottom Key Metrics Stats Bar (Matching screenshot exactly) */}
        <div className="w-full border-t border-[#1c0820]/80 bg-[#060208]/95 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center text-center">
              {data.heroMetrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center group cursor-default">
                  <AnimatedMetric
                    value={metric.value}
                    className="text-[34px] sm:text-[44px] lg:text-[50px] font-bold text-white tracking-tight leading-none font-sans"
                  />
                  <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.2em] text-[#95889a] font-medium uppercase mt-2.5">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* =====================================================================
          2. THE ULTIMATE BROADCASTING ECOSYSTEM SECTION
      ====================================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#08030b] overflow-hidden text-left">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Row: Left Narrative & Checklist, Right Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col">
              
              {/* Eyebrow */}
              <div className="w-fit bg-[#220c1c]/90 border border-[#4d1637] text-[#ff3d94] text-[10.5px] sm:text-[11px] font-mono tracking-wider font-semibold uppercase px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-6 shadow-sm">
                <span>{data.ecosystemSection.eyebrow}</span>
              </div>

              {/* Heading */}
              <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[46px] font-bold tracking-[-0.03em] leading-[1.12] text-white font-sans mb-5">
                <span className="block">{data.ecosystemSection.heading.line1}</span>
                <span className="block text-white">{data.ecosystemSection.heading.line2}</span>
              </h2>

              {/* Description */}
              <p className="text-[14px] sm:text-[15px] text-[#a999ad] leading-[1.7] font-normal mb-8 max-w-[540px]">
                {data.ecosystemSection.description}
              </p>

              {/* Checklist */}
              <div className="space-y-3.5 sm:space-y-4">
                {data.ecosystemSection.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[#ff2a85]">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <span className="text-[13.5px] sm:text-[14px] text-[#cbbecd] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[560px]">
                <TiltCard maxTilt={4} scale={1.015} glare={false} className="rounded-[24px]">
                  <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden border border-[#2b1233] bg-[#0e0714] shadow-2xl">
                    <Image
                      src={data.ecosystemSection.image}
                      alt={`${data.ecosystemSection.heading.line1} ${data.ecosystemSection.heading.line2}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </TiltCard>
              </div>
            </div>

          </div>

          {/* Bottom 4 Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 sm:mt-16">
            {data.ecosystemSection.pillars.map((pillar, pIdx) => {
              // Color styles for the circular indicator matching the Figma design
              const colorStyles: Record<string, { bg: string; border: string; glow: string; dot: string }> = {
                purple: {
                  bg: "bg-[#3e1463]/90",
                  border: "border-[#7e22ce]/50",
                  glow: "shadow-[0_0_15px_rgba(126,34,206,0.4)]",
                  dot: "bg-[#a855f7]",
                },
                cyan: {
                  bg: "bg-[#083344]/90",
                  border: "border-[#06b6d4]/50",
                  glow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]",
                  dot: "bg-[#22d3ee]",
                },
                pink: {
                  bg: "bg-[#4c0d28]/90",
                  border: "border-[#e11d48]/50",
                  glow: "shadow-[0_0_15px_rgba(225,29,72,0.4)]",
                  dot: "bg-[#fb7185]",
                },
                green: {
                  bg: "bg-[#063826]/90",
                  border: "border-[#059669]/50",
                  glow: "shadow-[0_0_15px_rgba(5,150,105,0.4)]",
                  dot: "bg-[#34d399]",
                },
              };

              const style = colorStyles[pillar.color] || colorStyles.purple;

              return (
                <TiltCard key={pIdx} maxTilt={6} scale={1.02} glare={true} className="rounded-[20px] h-full">
                  <div className="rounded-[20px] bg-[#0f0916]/80 hover:bg-[#150d1e] border border-[#23122b] hover:border-[#ff2a85]/40 p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all shadow-xl group h-full min-h-[140px]">
                    {/* Glowing Circular Dot */}
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${style.bg} ${style.border} border ${style.glow}`}
                    >
                      <span className={`w-3 h-3 rounded-full ${style.dot}`} />
                    </div>

                    <h3 className="text-[17px] sm:text-[18px] font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <span className="text-[12px] sm:text-[12.5px] text-[#938297] font-normal mt-1">
                      {pillar.subtitle}
                    </span>
                  </div>
                </TiltCard>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================================================
          3. CORE ARCHITECTURE / CREATOR ENGAGEMENT SECTION
      ====================================================================== */}
      <section className="relative w-full py-16 sm:py-24 bg-[#08030b] overflow-hidden text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center max-w-[760px] mx-auto mb-12 sm:mb-16">
            
            {/* Eyebrow */}
            <div className="w-fit bg-[#201033]/90 text-[#c084fc] border border-[#581c87]/60 px-4 py-1.5 rounded-full text-[10.5px] sm:text-[11px] font-mono tracking-wider font-semibold uppercase mb-4 shadow-sm">
              <span>{data.coreArchitectureSection.eyebrow}</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-[32px] sm:text-[40px] md:text-[44px] font-bold tracking-tight text-white font-sans mb-3.5">
              {data.coreArchitectureSection.heading}
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15.5px] text-[#a999ad] leading-[1.65] font-normal">
              {data.coreArchitectureSection.subtitle}
            </p>

          </div>

          {/* 4 Cards Grid (2x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
            {data.coreArchitectureSection.cards.map((card, cIdx) => (
              <TiltCard key={cIdx} maxTilt={5} scale={1.015} glare={true} className="rounded-[22px] h-full">
                <div className="rounded-[22px] bg-[#110917]/75 hover:bg-[#170e20] border border-[#23122c] hover:border-[#ff2a85]/40 p-7 sm:p-8 flex flex-col justify-start transition-all shadow-xl group h-full">
                  
                  {/* Icon Container */}
                  <div className="w-11 h-11 rounded-[13px] bg-[#1e1327] border border-[#3b1d4e] flex items-center justify-center text-[#d8b4fe] group-hover:text-white group-hover:border-[#ff2a85]/60 transition-all mb-5 shadow-inner">
                    {card.iconType === "smile" && <Smile className="w-5 h-5 text-[#d8b4fe]" />}
                    {card.iconType === "sparkle" && <Sparkles className="w-5 h-5 text-[#d8b4fe]" />}
                    {card.iconType === "star" && <Star className="w-5 h-5 text-[#d8b4fe]" />}
                    {card.iconType === "shield" && <ShieldCheck className="w-5 h-5 text-[#d8b4fe]" />}
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[18px] sm:text-[19.5px] font-bold text-white tracking-tight mb-2.5 font-sans">
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[13.5px] sm:text-[14px] text-[#9b8c9f] leading-[1.65] font-normal">
                    {card.description}
                  </p>

                </div>
              </TiltCard>
            ))}
          </div>

        </div>
      </section>

      {/* =====================================================================
          4. MODERN INTERFACE / APP SCREENSHOTS & ENTERPRISE TECH STACK SECTION
      ====================================================================== */}
      <section className="relative w-full pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#08030b] overflow-hidden text-center">
        
        {/* Style block for continuous smooth infinite tech stack marquee */}
        <style>{`
          @keyframes techMarqueeScroll {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .tech-marquee-track {
            display: flex;
            width: max-content;
            animation: techMarqueeScroll 28s linear infinite;
            will-change: transform;
          }
          .tech-marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Ambient Radial Glow Behind 3 iPhones */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full opacity-20 blur-[130px] z-0"
          style={{ background: "radial-gradient(circle, #ff2a85 0%, #7e22ce 50%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Part A: Modern Interface & App Screenshots Header */}
          <div className="flex flex-col items-center max-w-[760px] mx-auto mb-10 sm:mb-14">
            
            {/* Eyebrow */}
            <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.24em] text-[#d8b4fe] font-semibold uppercase mb-3">
              {data.screenshotsSection.eyebrow}
            </span>

            {/* Main Heading */}
            <h2 className="text-[34px] sm:text-[42px] md:text-[48px] font-bold tracking-tight text-white font-sans mb-3.5">
              {data.screenshotsSection.heading}
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] sm:text-[15.5px] text-[#a999ad] leading-[1.65] font-normal max-w-[620px]">
              {data.screenshotsSection.subtitle}
            </p>

          </div>

          {/* 3 iPhones Showcase Visual */}
          <div className="relative w-full max-w-[960px] mx-auto mb-8 sm:mb-10 flex justify-center items-center">
            <div className="relative w-full">
              <Image
                src={data.screenshotsSection.image}
                alt={data.screenshotsSection.heading}
                width={1376}
                height={768}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>

          {/* Dots Indicator: ● ● ━━━ ● */}
          <div className="flex items-center justify-center gap-2.5 mb-24 sm:mb-32">
            <button
              aria-label="Slide 1"
              className="w-2 h-2 rounded-full bg-[#372346] hover:bg-[#ff2a85]/70 transition-all cursor-pointer"
            />
            <button
              aria-label="Slide 2"
              className="w-2 h-2 rounded-full bg-[#372346] hover:bg-[#ff2a85]/70 transition-all cursor-pointer"
            />
            <button
              aria-label="Slide 3 (Active)"
              className="w-8 h-2 rounded-full bg-[#ff2a85] shadow-[0_0_14px_rgba(255,42,133,0.85)] cursor-pointer"
            />
            <button
              aria-label="Slide 4"
              className="w-2 h-2 rounded-full bg-[#372346] hover:bg-[#ff2a85]/70 transition-all cursor-pointer"
            />
          </div>

          {/* Part B: Enterprise-Grade Technology Stack Header */}
          <div className="flex flex-col items-center max-w-[760px] mx-auto mb-8 sm:mb-12">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-tight text-white font-sans mb-3">
              {data.techStackSection.heading}
            </h2>
            <p className="text-[13.5px] sm:text-[15px] text-[#a999ad] font-normal">
              {data.techStackSection.subtitle}
            </p>
          </div>

        </div>

        {/* Continuous Moving Marquee Row */}
        <div className="relative w-full overflow-hidden py-4">
          
          {/* Gradient Masks for Seamless Edge Fading */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#08030b] via-[#08030b]/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#08030b] via-[#08030b]/80 to-transparent z-20" />

          {/* Infinite Marquee Track */}
          <div className="tech-marquee-track flex items-center gap-4 sm:gap-5 px-4">
            {[...data.techStackSection.technologies, ...data.techStackSection.technologies].map(
              (tech, tIdx) => (
                <div
                  key={tIdx}
                  className="flex items-center gap-2.5 sm:gap-3 bg-[#0e0716]/90 hover:bg-[#180d24] border border-[#2b1435] hover:border-[#ff2a85]/50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-white text-[13px] sm:text-[14px] font-semibold transition-all shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-pointer shrink-0 group select-none"
                >
                  <span className="transition-transform group-hover:scale-110">
                    {getTechIcon(tech.iconType, tech.color)}
                  </span>
                  <span className="text-[#e2d9f3] group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>

      </section>

      {/* =====================================================================
          5. CALL TO ACTION (CTA) SECTION
      ====================================================================== */}
      <section className="relative w-full py-16 sm:py-24 bg-[#08030b] overflow-hidden text-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Outer Rounded Container matching design */}
          <div className="relative w-full max-w-[1080px] mx-auto rounded-[28px] sm:rounded-[36px] bg-[#110716]/85 border border-[#26122d] py-14 sm:py-16 md:py-20 px-6 sm:px-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)]">
            
            {/* Ambient Radial Top Glow */}
            <div
              className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 w-[550px] h-[260px] rounded-full opacity-20 blur-[100px] z-0"
              style={{ background: "radial-gradient(circle, #ff2a85 0%, #7e22ce 60%, transparent 80%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center">
              
              {/* Eyebrow Pill */}
              <div className="w-fit bg-[#2b0d23] text-[#ff3d94] border border-[#5a1b41] text-[10.5px] sm:text-[11px] font-mono tracking-[0.2em] font-semibold uppercase px-4 py-1.5 rounded-full mb-6 sm:mb-7 shadow-sm">
                <span>{data.ctaSection.eyebrow}</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-[30px] sm:text-[40px] md:text-[46px] lg:text-[48px] font-bold tracking-tight text-white font-sans max-w-[720px] leading-[1.18] mb-4">
                {data.ctaSection.heading}
              </h2>

              {/* Subtitle */}
              <p className="text-[13.5px] sm:text-[15px] text-[#a999ad] font-normal max-w-[560px] leading-[1.65] mb-8 sm:mb-9">
                {data.ctaSection.subtitle}
              </p>

              {/* Action Buttons Group */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-[420px]">
                
                {/* Primary Button: Book a Demo */}
                <Link
                  href={data.ctaSection.primaryButtonLink}
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-[#ff2a85] hover:bg-[#ff1475] text-white text-[14px] sm:text-[14.5px] font-semibold transition-all shadow-[0_0_24px_rgba(255,42,133,0.5)] hover:shadow-[0_0_32px_rgba(255,42,133,0.75)] hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center"
                >
                  <span>{data.ctaSection.primaryButtonText}</span>
                </Link>

                {/* Secondary Button: Talk to Experts */}
                <Link
                  href={data.ctaSection.secondaryButtonLink}
                  className="w-full sm:w-auto px-7 sm:px-8 py-3.5 rounded-full bg-[#1b0d24]/90 hover:bg-[#251230] text-[#e2d9f3] hover:text-white border border-[#3b1c4b] hover:border-[#ff2a85]/40 text-[14px] sm:text-[14.5px] font-medium transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center"
                >
                  <span>{data.ctaSection.secondaryButtonText}</span>
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
