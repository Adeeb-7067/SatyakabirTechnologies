import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe,
  Briefcase,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work | Satya Kabir Technologies — Enterprise Digital Deliverables",
  description:
    "Explore the production applications, high-scale platforms, and enterprise software systems designed, developed, and deployed by Satya Kabir Technologies.",
};

export default function WorkPage() {
  const workItems = [
    {
      title: "Fintech Core & Digital Banking Gateway",
      client: "TransactHub Global",
      sector: "Fintech",
      impact: "14M+ Daily Transactions",
      overview:
        "Engineered an omni-channel core banking middleware connecting legacy banking systems to modern mobile apps and POS systems with zero downtime migrations.",
      features: [
        "PCI-DSS Level 1 compliant tokenization vault",
        "Sub-15ms transaction routing engine",
        "Automated reconciliation with multi-currency settlement",
      ],
      stack: ["Go", "Next.js", "PostgreSQL", "Apache Kafka"],
    },
    {
      title: "KisanSetu Precision Farming & Market Network",
      client: "AgriLogix Tech",
      sector: "Smart Agriculture",
      impact: "180,000+ Active Farmers",
      overview:
        "Developed a hyper-localized agricultural telemetry platform connecting satellite imagery, IoT soil probes, and mandi commodity pricing to smallholder farmers.",
      features: [
        "Offline-first mobile PWA with multilingual voice input",
        "AI crop health diagnostic via phone camera",
        "Direct-to-buyer escrow trading contracts",
      ],
      stack: ["React Native", "FastAPI", "Python", "AWS Timestream"],
    },
    {
      title: "StreamWave Interactive Streaming & Monetization",
      client: "VibePulse Entertainment",
      sector: "Streaming & Media",
      impact: "500K+ Peak Concurrent Viewers",
      overview:
        "Architected an ultra-low latency WebRTC streaming infrastructure with dynamic bitrate adaptation and real-time virtual gifting micro-transactions.",
      features: [
        "Sub-180ms glass-to-glass video distribution",
        "Distributed WebSocket cluster handling 2M+ events/sec",
        "Real-time AI automated content moderation",
      ],
      stack: ["WebRTC", "Node.js", "Redis Cluster", "Kubernetes"],
    },
    {
      title: "Enterprise HRM & Global Workforce Cloud",
      client: "OmniCorp International",
      sector: "HRM & CRM Automation",
      impact: "24,000+ Enterprise Employees",
      overview:
        "Unified employee self-service, multinational payroll compliance, performance OKRs, and automated hardware provisioning across 18 countries.",
      features: [
        "Automated statutory compliance across APAC, EMEA & Americas",
        "Granular role-based access control with SOC-2 compliance",
        "Instant visual org charts with live hierarchy sync",
      ],
      stack: ["TypeScript", "NestJS", "React", "PostgreSQL"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#060913] text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Layers className="w-3.5 h-3.5" />
            <span>SATYA KABIR TECHNOLOGIES / OUR WORK</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Production Software That Solves{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Real Enterprise Problems
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A showcase of client deliverables, large-scale systems, and
            custom software solutions engineered for market leaders across
            industries.
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
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white shadow-lg shadow-blue-600/20"
            >
              Our Work
            </Link>
            <Link
              href="/case-study"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
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

      {/* Production Deliveries List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto w-full">
        <div className="space-y-8">
          {workItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[#091124] border border-[#182645] hover:border-blue-500/40 transition-all duration-300 flex flex-col lg:flex-row gap-8 items-start justify-between"
            >
              <div className="lg:w-[65%]">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md border border-blue-500/20">
                    {item.sector}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    Client: {item.client}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.overview}
                </p>

                <div className="space-y-2 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2.5 py-1 rounded bg-[#0c1630] border border-[#1c2b50] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Impact Box */}
              <div className="lg:w-[32%] w-full p-6 rounded-xl bg-[#0c1630] border border-[#1c2b50] flex flex-col justify-between self-stretch">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748b] mb-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>VERIFIED IMPACT</span>
                  </div>
                  <p className="text-2xl font-extrabold text-white mb-2">
                    {item.impact}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Measured across active production environments with 24/7
                    operational monitoring.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Link
                    href="/case-study"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-[#080d1c]">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Build Your Next Milestone?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Tell us about your technical roadmap and discovery requirements. We
            deliver on-budget, production-grade solutions.
          </p>
          <Link
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
          >
            Request a Dedicated Proposal
          </Link>
        </div>
      </section>
    </main>
  );
}
