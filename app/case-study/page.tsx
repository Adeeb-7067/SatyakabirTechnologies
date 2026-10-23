import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | Satya Kabir Technologies — Engineering Deep Dives",
  description:
    "Read in-depth case studies on technical architecture, scaling challenges, and measurable ROI delivered by Satya Kabir Technologies.",
};

export default function CaseStudyPage() {
  const caseStudies = [
    {
      title: "Nexus Global ERP: Scaling Multi-Tenant HR Across 18 Countries",
      client: "OmniCorp International",
      industry: "Enterprise SaaS & HR",
      challenge:
        "Legacy HR spreadsheets caused fragmented payroll calculation delays, compliance fines in EMEA, and high turnover due to slow onboarding.",
      solution:
        "Architected a micro-frontend NestJS and PostgreSQL cluster with dynamic country-specific payroll rule engines and real-time biometric time tracking.",
      results: [
        "65% reduction in payroll processing cycle time",
        "Zero regulatory fines across 18 operational jurisdictions",
        "99.99% system availability during peak monthly close",
      ],
      stack: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "TailwindCSS"],
    },
    {
      title: "KisanSetu: Real-Time IoT Telemetry for 180,000+ Farmers",
      client: "AgriLogix Tech",
      industry: "Smart Agriculture",
      challenge:
        "Rural farmers had poor 2G connectivity, resulting in delayed pest warnings and exploitation by middlemen due to lack of market transparency.",
      solution:
        "Built an offline-first PWA with localized caching, satellite crop indices, and direct-to-buyer escrow bids over encrypted SMS/MQTT fallbacks.",
      results: [
        "180,000+ active farmers onboarded within 6 months",
        "40% average increase in realized harvest selling prices",
        "Sub-second offline response times in zero-reception fields",
      ],
      stack: ["React Native", "FastAPI", "Python", "AWS IoT", "Timestream"],
    },
    {
      title: "StreamWave: Ultra-Low Latency Video Streaming at 500K Concurrency",
      client: "VibePulse Media",
      industry: "Live Streaming & Entertainment",
      challenge:
        "Existing HLS pipelines suffered 6-12 second broadcast delays, ruining real-time audience auctioning and live chat interactions.",
      solution:
        "Engineered an edge-routed WebRTC ingest and SFU relay network with decentralized WebSocket nodes and real-time virtual gift animations.",
      results: [
        "Sub-180ms glass-to-glass latency globally",
        "3.2x increase in live monetization gift revenue",
        "Handled 500,000 peak concurrent users with zero frame drops",
      ],
      stack: ["WebRTC", "Go", "Redis", "Kafka", "WebSockets"],
    },
    {
      title: "VigilGuard: AI Perimeter Vigilance & Smart Guard Patrol",
      client: "Apex Security Group",
      industry: "Security & Manpower",
      challenge:
        "Manual security patrolling left blind spots in multi-acre industrial campuses, leading to high false alarm rates and delayed dispatch.",
      solution:
        "Deployed edge AI CCTV analytics for anomaly detection with GPS-geofenced smartphone guard patrol checkpoints and automated incident escalation.",
      results: [
        "92% reduction in false intrusion alarms",
        "Under 12 seconds average emergency dispatch response",
        "Complete automated ISO 27001 physical security audit trails",
      ],
      stack: ["OpenCV", "TensorFlow", "React Native", "Python", "FastAPI"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#060913] text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <FileText className="w-3.5 h-3.5" />
            <span>SATYA KABIR TECHNOLOGIES / CASE STUDIES</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Technical Architecture &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Real-World ROI Deep Dives
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Unpack how our software architects overcome complex concurrency,
            security, and distributed computing challenges for clients.
          </p>

          {/* Quick Sub-navigation Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 max-w-xl mx-auto">
            <Link
              href="/portfolio"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              Portfolio Overview
            </Link>
            <Link
              href="/work"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              Our Work
            </Link>
            <Link
              href="/case-study"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white shadow-lg shadow-blue-600/20"
            >
              Case Studies
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              Featured Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#091124] border border-[#182645] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-400">
                    {study.client}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-4 leading-snug">
                  {study.title}
                </h3>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1">
                    The Challenge
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                    The Engineered Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {study.solution}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0c1630] border border-[#1c2b50] mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Quantified Results</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {study.results.map((res, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mb-4">
                  {study.stack.map((item, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5 font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                >
                  <span>Request Full Technical Architecture Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#080d1c]">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Need an Architecture Breakdown for Your Project?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Our principal engineers can evaluate your current tech stack,
            identify performance bottlenecks, and design a scalable blueprint.
          </p>
          <Link
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
          >
            Consult With Our Principal Architect
          </Link>
        </div>
      </section>
    </main>
  );
}
