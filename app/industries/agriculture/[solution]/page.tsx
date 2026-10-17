import React, { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sprout,
} from "lucide-react";
import {
  agricultureSolutionsData,
  defaultSolutionSlug,
  SolutionData,
} from "../solutionsData";
import TiltCard from "@/app/components/ui/TiltCard";
import AnimatedMetric from "@/app/components/ui/AnimatedMetric";
// Generate static params for all solution pages
export async function generateStaticParams() {
  return Object.keys(agricultureSolutionsData).map((slug) => ({
    solution: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution: slug } = await params;
  const data = agricultureSolutionsData[slug] || agricultureSolutionsData[defaultSolutionSlug];
  const pageTitle = `${data.heroTitle.line1} ${data.heroTitle.line2White || ""}${data.heroTitle.line2Green} | Satya Kabir Technologies`;
  return {
    title: pageTitle,
    description: data.subtitle,
  };
}

export default function AgricultureSolutionPage({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  return (
    <Suspense fallback={<div className="w-full min-h-screen bg-[#0a1610]" />}>
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
  const data: SolutionData =
    agricultureSolutionsData[slug] || agricultureSolutionsData[defaultSolutionSlug];

  return (
    <div className="w-full min-h-screen bg-[#0a1610] text-white select-none overflow-x-hidden font-sans">
      
      {/* =====================================================================
          1. HERO SECTION (Breadcrumb + Eyebrow + Split-Color Title + CTA)
      ====================================================================== */}
      <section className="relative w-full pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-22 border-b border-[#1b2b22] overflow-hidden text-center bg-[#0a1610]">
        {/* Figma Glow: 600px x 300px solid #30D158 with 28% opacity and 160px layer blur */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]"
          style={{
            backgroundColor: "#30D158",
            opacity: 0.28,
            filter: "blur(160px)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-[#8c9e93] font-medium mb-6">
            <Link href="/" className="hover:text-[#79db8d] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3a5445]" />
            <Link href="/#industries" className="hover:text-[#79db8d] transition-colors">
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3a5445]" />
            <Link href="/industries/agriculture" className="hover:text-[#79db8d] transition-colors">
              Agriculture
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#3a5445]" />
            <span className="text-[#79db8d] font-semibold">
              {data.heroTitle.line1} {data.heroTitle.line2White || ""}{data.heroTitle.line2Green}
            </span>
          </nav>

          {/* Eyebrow Pill */}
          <div className="w-fit bg-[#132219] border border-[#2e4738] text-[#79db8d] text-[11.5px] sm:text-[12px] font-sans tracking-wide px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-5">
            <Sprout className="w-3.5 h-3.5 text-[#79db8d]" />
            <span>{data.eyebrow}</span>
          </div>

          {/* Main Headline (Split Color: White + Crisp Emerald Green) */}
          <h1 className="text-[38px] sm:text-[54px] md:text-[62px] lg:text-[70px] font-extrabold tracking-[-0.035em] leading-[1.06] font-sans max-w-[920px]">
            <span className="text-white block">{data.heroTitle.line1}</span>
            <span className="block mt-1">
              {data.heroTitle.line2White && (
                <span className="text-white">{data.heroTitle.line2White}</span>
              )}
              <span className="text-[#79db8d]">
                {data.heroTitle.line2Green}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[14px] sm:text-[15.5px] text-[#9db2a5] leading-[1.65] font-normal mt-5 sm:mt-6 max-w-[620px]">
            {data.subtitle}
          </p>

          {/* Two Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 mt-8 sm:mt-10">
            <Link
              href="#solution-spec"
              className="w-full sm:w-auto bg-[#79db8d] hover:bg-[#68cb7c] active:bg-[#5bb86e] text-[#06150d] font-bold text-[13.5px] px-7 py-3 rounded-full inline-flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer text-center"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-[#06150d]" />
            </Link>

            <Link
              href="#solution-layers"
              className="w-full sm:w-auto bg-[#121f18] hover:bg-[#182920] text-white border border-[#3b5445] hover:border-[#79db8d]/50 px-7 py-3 rounded-full font-medium text-[13.5px] inline-flex items-center justify-center transition-all active:scale-95 cursor-pointer text-center"
            >
              View Architecture
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. SOLUTION OVERVIEW SECTION (01 — OVERVIEW & CAPABILITIES)
      ====================================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#1b2b22] overflow-hidden bg-[#0a1610]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Eyebrow matching Figma exact format: 01 — OVERVIEW & CAPABILITIES */}
          <div className="mb-6 sm:mb-8 text-left">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.2em] text-[#529e66] font-medium uppercase">
              01 — OVERVIEW & CAPABILITIES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Solution Photo with Floating Badge Overlays */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-[#4a514d] shadow-[0_15px_40px_rgba(0,0,0,0.5)] group bg-[#19241e]">
                <Image
                  src={data.overview.image}
                  alt={`${data.heroTitle.line1} Overview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1610]/85 via-transparent to-transparent pointer-events-none" />

                {/* Floating Pills Overlay on Bottom of Image */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 pointer-events-none">
                  {data.overview.floatingPills.map((pill, i) => (
                    <span
                      key={i}
                      className="bg-[#121f18]/90 backdrop-blur-md border border-[#3b5445] text-[#b3cec0] text-[10.5px] sm:text-[11.5px] font-medium px-3 py-1 rounded-full shadow-sm"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Narrative Paragraphs */}
            <div className="lg:col-span-6 text-left flex flex-col justify-center space-y-4 text-[14px] sm:text-[14.5px] text-[#9db2a5] leading-[1.75] font-normal">
              {data.overview.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. PROVEN BENCHMARKS (02 — PROVEN BENCHMARKS matching Figma exact border and colors)
      ====================================================================== */}
      <section className="relative w-full py-16 sm:py-20 border-b border-[#1b2b22] overflow-hidden text-left bg-[#0a1610]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Eyebrow matching Figma exactly: 02 — PROVEN BENCHMARKS */}
          <div className="mb-2 sm:mb-2.5">
            <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.2em] text-[#529e66] font-medium uppercase">
              02 — PROVEN BENCHMARKS
            </span>
          </div>

          {/* Section Heading: Solid white + Solid Mint Green (NO BLURRY DROP SHADOWS) */}
          <div className="mb-8 sm:mb-10 max-w-[600px]">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-[-0.03em] leading-[1.14] font-sans">
              <span className="text-white block">{data.metricsHeading.white}</span>
              <span className="text-[#79db8d] block mt-1">{data.metricsHeading.green}</span>
            </h2>
          </div>

          {/* 4 Metric Cards matching Figma exactly with 3D Tilt & AnimatedMetric */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-5">
            {data.metrics.map((metric, idx) => (
              <TiltCard key={idx} maxTilt={6} scale={1.02} glare={true} className="h-full rounded-[16px]">
                <div className="rounded-[16px] py-6 sm:py-7 px-5 sm:px-6 border border-[#4a514d] bg-[#19241e] shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex flex-col justify-center transition-colors duration-200 hover:border-[#79db8d] group min-h-[110px] sm:min-h-[120px] h-full">
                  <div className="text-[30px] sm:text-[34px] lg:text-[38px] font-bold text-[#79db8d] tracking-tight leading-none font-sans">
                    <AnimatedMetric value={metric.value} className="text-[#79db8d] font-sans" />
                  </div>
                  <div className="text-[11.5px] sm:text-[12.5px] text-[#8c948e] font-medium leading-snug mt-2.5 sm:mt-3">
                    {metric.label}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. SYSTEM ARCHITECTURE (03 — SYSTEM ARCHITECTURE)
      ====================================================================== */}
      <section id="solution-spec" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#1b2b22] overflow-hidden text-left bg-[#0a1610]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Eyebrow: 03 — SYSTEM ARCHITECTURE */}
          <div className="mb-2 sm:mb-2.5">
            <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.2em] text-[#529e66] font-medium uppercase">
              03 — SYSTEM ARCHITECTURE
            </span>
          </div>

          {/* Section Heading */}
          <div className="mb-8 sm:mb-10 max-w-[650px]">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-[-0.03em] leading-[1.14] font-sans">
              <span className="text-white block">{data.specHeading.white}</span>
              <span className="text-[#79db8d] block mt-1">{data.specHeading.green}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Specification Table Card */}
            <div className="lg:col-span-7">
              <div className="rounded-[16px] border border-[#4a514d] bg-[#19241e] p-5 sm:p-7 shadow-[0_12px_30px_rgba(0,0,0,0.4)]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 sm:gap-y-4">
                  {data.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="border-b border-[#28382e] pb-3 sm:pb-3.5 flex flex-col justify-center"
                    >
                      <span className="text-[10.5px] sm:text-[11px] font-mono text-[#7a8f82] font-medium uppercase tracking-wider">
                        {spec.label}
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] text-white font-semibold mt-1">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Spec Visual Showcase */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] rounded-[16px] overflow-hidden border border-[#4a514d] shadow-[0_15px_35px_rgba(0,0,0,0.5)] bg-[#19241e]">
                <Image
                  src={data.specImage}
                  alt={`${data.heroTitle.line1} Spec Visual`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1610]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CORE CAPABILITIES (04 — CORE CAPABILITIES)
      ====================================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#1b2b22] overflow-hidden text-left bg-[#0a1610]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Eyebrow: 04 — CORE CAPABILITIES */}
          <div className="mb-2 sm:mb-2.5">
            <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.2em] text-[#529e66] font-medium uppercase">
              04 — CORE CAPABILITIES
            </span>
          </div>

          {/* Section Heading */}
          <div className="mb-10 sm:mb-12 max-w-[700px]">
            <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-bold tracking-[-0.03em] leading-[1.14] font-sans">
              <span className="text-white block">{data.featuresHeading.white}</span>
              <span className="text-[#79db8d] block mt-1">{data.featuresHeading.green}</span>
            </h2>
          </div>

          {/* 6 Feature Cards Grid with 3D Tilt Perspective */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {data.features.map((feat, idx) => (
              <TiltCard key={idx} maxTilt={6} scale={1.018} glare={true} className="h-full rounded-[16px]">
                <div className="rounded-[16px] p-5 sm:p-6 border border-[#4a514d] bg-[#19241e] shadow-[0_8px_24px_rgba(0,0,0,0.35)] flex flex-col justify-between hover:border-[#79db8d] transition-colors duration-200 group h-full">
                  <div>
                    {/* Clean Circular Glowing Icon Badge */}
                    <div className="w-6 h-6 rounded-full bg-[#79db8d]/10 border border-[#79db8d]/30 flex items-center justify-center text-[#79db8d] mb-3.5 group-hover:bg-[#79db8d]/20 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#79db8d]" />
                    </div>
                    <h3 className="text-[16px] font-bold text-white tracking-tight group-hover:text-[#79db8d] transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13px] text-[#8c9e93] leading-[1.65] font-normal mt-2">
                      {feat.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. ARCHITECTURE LAYERS (04 — SYSTEM ARCHITECTURE)
      ====================================================================== */}
      <section id="solution-layers" className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#1b2b22] overflow-hidden text-left bg-[#0a1610]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Eyebrow: 04 — SYSTEM ARCHITECTURE */}
          <div className="mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-[11.5px] font-mono tracking-[0.2em] text-[#529e66] font-medium uppercase">
              04 — SYSTEM ARCHITECTURE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            
            {/* Left: App Showcase Visual taking full height matching Figma */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col h-full">
              <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] lg:min-h-full rounded-[20px] overflow-hidden border border-[#233529] shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#101a14]">
                <Image
                  src={data.layersImage || "/images/agri-architecture-mockup.png"}
                  alt={`${data.heroTitle.line1} Architecture Screens`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>

            {/* Right: 4 Layer Cards with 3D Tilt Perspective */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold tracking-[-0.03em] leading-[1.12] font-sans">
                  <span className="text-white">{data.layersHeading.white} </span>
                  <span className="text-[#6de784] whitespace-pre-line">{data.layersHeading.green}</span>
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-3.5">
                {data.layers.map((layer, idx) => (
                  <TiltCard key={idx} maxTilt={5} scale={1.012} glare={true} className="w-full rounded-[18px]">
                    <div className="rounded-[18px] px-5 sm:px-6 py-4 sm:py-4.5 border border-[#1f2b23] bg-[#131c17] shadow-[0_4px_16px_rgba(0,0,0,0.25)] flex items-start gap-4 sm:gap-5 hover:border-[#6de784]/40 transition-colors w-full">
                      <span className="text-[#6de784] font-mono text-[13px] sm:text-[14px] font-semibold tracking-wider pt-0.5 select-none shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight">
                          {layer.title}
                        </h3>
                        <p className="text-[12.5px] sm:text-[13px] text-[#69a17a] leading-relaxed">
                          {layer.description}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================================
          7. READY TO LAUNCH CALL-TO-ACTION BANNER
      ====================================================================== */}
      <section className="relative w-full py-20 sm:py-28 overflow-hidden text-center bg-[#0a1610]">
        {/* Figma Background Glow only: 600px x 300px solid #30D158 with 28% opacity and 160px layer blur */}
        <div
          className="pointer-events-none absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] z-0"
          style={{
            backgroundColor: "#30D158",
            opacity: 0.28,
            filter: "blur(160px)",
          }}
          aria-hidden="true"
        />

        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
          <h2 className="text-[34px] sm:text-[46px] md:text-[54px] font-extrabold tracking-[-0.035em] leading-[1.08] font-sans">
            <span className="text-white block">{data.ctaHeading.white}</span>
            <span className="text-[#6de784] block mt-1">
              {data.ctaHeading.green}
            </span>
          </h2>

          <p className="text-[13px] sm:text-[14.5px] text-[#9db2a5] leading-[1.65] font-normal mt-4 max-w-[560px]">
            {data.ctaSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 mt-8 sm:mt-9">
            <Link
              href="/#contact-cta"
              className="w-full sm:w-auto bg-[#6de784] hover:bg-[#5cd473] active:bg-[#4fc065] text-[#07150d] font-semibold text-[13.5px] px-7 py-3 rounded-full inline-flex items-center justify-center transition-all active:scale-95 cursor-pointer text-center"
            >
              Book a Free Consultation
            </Link>

            <Link
              href="/industries/agriculture"
              className="w-full sm:w-auto bg-[#141e18] hover:bg-[#1a2820] text-[#cdd8d1] hover:text-white border border-[#2b3e32] hover:border-[#6de784]/40 px-7 py-3 rounded-full font-medium text-[13.5px] inline-flex items-center justify-center transition-all active:scale-95 cursor-pointer text-center"
            >
              Back to Agriculture
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
