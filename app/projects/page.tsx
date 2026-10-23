import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  ArrowRight,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Featured Projects | Satya Kabir Technologies — Breakthrough Software Products",
  description:
    "Discover active digital products, developer tools, and cutting-edge software applications engineered by Satya Kabir Technologies.",
};

export default function ProjectsPage() {
  const projects = [
    {
      title: "FlowMatrix AI",
      category: "Autonomous Agents",
      status: "Enterprise Live",
      statusColor: "emerald",
      tagline: "Autonomous multi-agent orchestration for enterprise workflows",
      description:
        "An enterprise runtime that orchestrates autonomous LLM agents to execute complex, multi-step customer support, contract analysis, and database migrations.",
      stack: ["Next.js", "Python", "FastAPI", "VectorDB", "LangChain"],
      version: "v2.4.0",
    },
    {
      title: "KisanSetu Telemetry Suite",
      category: "Agritech IoT",
      status: "In Production",
      statusColor: "blue",
      tagline: "Drone mapping & IoT crop analytics edge engine",
      description:
        "High-performance telemetry pipeline collecting multispectral drone imagery, IoT soil moisture metrics, and generating localized micro-climate advisories.",
      stack: ["React", "Go", "AWS IoT Core", "Timestream", "MQTT"],
      version: "v3.1.2",
    },
    {
      title: "UltraStream SFU Media Gateway",
      category: "Live Media",
      status: "Enterprise Live",
      statusColor: "emerald",
      tagline: "Sub-second WebRTC video distribution for live audiences",
      description:
        "A decentralized media server clustering framework enabling broadcasters to stream 4K video to hundreds of thousands of concurrent viewers with sub-second latency.",
      stack: ["Rust", "WebRTC", "WebSockets", "Redis", "C++"],
      version: "v1.8.0",
    },
    {
      title: "Nexus Core HRM Platform",
      category: "Enterprise Cloud",
      status: "Enterprise Live",
      statusColor: "emerald",
      tagline: "Automated payroll & workforce compliance hub",
      description:
        "SaaS human resource management platform featuring real-time attendance biometric sync, dynamic international tax compliance, and automated payouts.",
      stack: ["NestJS", "TypeScript", "PostgreSQL", "TailwindCSS"],
      version: "v4.0.1",
    },
    {
      title: "SentinelEye Surveillance AI",
      category: "Computer Vision",
      status: "In Production",
      statusColor: "blue",
      tagline: "Perimeter intrusion & biometric access control",
      description:
        "Edge computing vision model integrated into existing IP CCTV hardware to detect perimeter breaches, unrecognized personnel, and vehicle license plates.",
      stack: ["Python", "TensorFlow Lite", "OpenCV", "FastAPI"],
      version: "v2.0.4",
    },
    {
      title: "OmniRoute Logistics Engine",
      category: "Supply Chain",
      status: "Public Beta",
      statusColor: "amber",
      tagline: "AI multi-stop route optimization & fleet dispatch",
      description:
        "Real-time graph algorithm calculating optimal delivery routes while accounting for live traffic delays, vehicle cargo capacities, and fuel costs.",
      stack: ["Node.js", "GraphQL", "Redis", "Leaflet Maps"],
      version: "v0.9.5",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#060913] text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <Rocket className="w-3.5 h-3.5" />
            <span>SATYA KABIR TECHNOLOGIES / PROJECTS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
            Cutting-Edge Products &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Breakthrough Software
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our internal R&D platforms, open ecosystems, and enterprise
            products engineered to set new performance benchmarks.
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
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-medium bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
            >
              Case Studies
            </Link>
            <Link
              href="/projects"
              className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold bg-blue-600 text-white shadow-lg shadow-blue-600/20"
            >
              Featured Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#091124] border border-[#182645] hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    {proj.category}
                  </span>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      proj.statusColor === "emerald"
                        ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
                        : proj.statusColor === "amber"
                          ? "text-amber-400 bg-amber-500/10 border-amber-500/30"
                          : "text-sky-400 bg-sky-500/10 border-sky-500/30"
                    }`}
                  >
                    ● {proj.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1.5">
                  {proj.title}
                </h3>

                <p className="text-xs font-medium text-slate-400 mb-3">
                  {proj.tagline}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mb-4">
                  {proj.stack.map((stk, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-[#0c1630] border border-[#1c2b50] text-slate-300 font-mono"
                    >
                      {stk}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500 font-mono">
                    {proj.version}
                  </span>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors"
                  >
                    <span>Request Live Demo</span>
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
            Need a Custom Digital Product Built for Scale?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Collaborate with our product engineering team to take your idea from
            discovery and system architecture to production launch.
          </p>
          <Link
            href="#contact"
            className="inline-block px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
          >
            Start Your Product Build
          </Link>
        </div>
      </section>
    </main>
  );
}
