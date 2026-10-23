"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface TelemetryMetric {
  value: string;
  badge: string;
  title: string;
  description: string;
}

const telemetryMetrics: TelemetryMetric[] = [
  {
    value: "99.99%",
    badge: "SLA TARGET",
    title: "UPTIME SLA GUARANTEED",
    description:
      "Multi-region active-active clusters with automated health check failover.",
  },
  {
    value: "<50ms",
    badge: "P99 LATENCY",
    title: "DETERMINISTIC LATENCY",
    description:
      "Edge computing CDNs caching critical transactional payloads globally.",
  },
  {
    value: "Zero",
    badge: "CONTINUOUS",
    title: "DOWNTIME DEPLOYMENTS",
    description:
      "Blue/green container pipelines with instant automated rollback telemetry.",
  },
];

export default function LifestyleEngineeringSection() {
  return (
    <section className="relative w-full bg-[#070b14] py-20 sm:py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[650px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-10 w-[500px] h-[300px] bg-indigo-600/5 blur-[130px] rounded-full"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* LEFT COLUMN: Telemetry Card */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Main Dark Telemetry Panel */}
            <div className="relative rounded-2xl sm:rounded-3xl bg-[#0f1422]/90 border border-zinc-800/80 p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/70 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 group mt-4">
              {/* Overlapping Top Badge */}
              <div className="absolute -top-3.5 left-8 z-20">
                <span className="inline-flex items-center bg-[#070b14] text-zinc-300 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-4 py-1 rounded-full border border-zinc-700/80 shadow-md">
                  RUNTIME TELEMETRY
                </span>
              </div>

              {/* Subtle top inner gradient */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.03] to-transparent rounded-t-2xl sm:rounded-t-3xl"
                aria-hidden="true"
              />

              <div className="space-y-6 sm:space-y-7 relative z-10">
                {telemetryMetrics.map((metric, index) => (
                  <div key={metric.title}>
                    {/* Header Row: Stat Value + Badge */}
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-4xl sm:text-[44px] md:text-5xl font-bold tracking-tight text-white font-sans">
                        {metric.value}
                      </span>
                      <span className="bg-[#182032] text-zinc-400 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 sm:px-3 py-1 rounded-md border border-zinc-700/40 select-none">
                        {metric.badge}
                      </span>
                    </div>

                    {/* Metric Title */}
                    <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-zinc-200 mt-2.5 mb-1.5">
                      {metric.title}
                    </h3>

                    {/* Metric Description */}
                    <p className="text-xs sm:text-[13.5px] text-zinc-400 leading-relaxed font-sans">
                      {metric.description}
                    </p>

                    {/* Divider for all except last item */}
                    {index < telemetryMetrics.length - 1 && (
                      <div className="w-full h-px bg-zinc-800/90 mt-6 sm:mt-7" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Engineering Core Narrative */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center lg:pl-4 xl:pl-8">
            {/* Section Tag Badge */}
            <div className="inline-flex items-center w-fit mb-5 sm:mb-6">
              <span className="inline-flex items-center bg-[#0d162d] text-[#60a5fa] border border-[#1e3a8a]/50 text-[11px] sm:text-xs font-semibold tracking-wider uppercase px-3.5 sm:px-4 py-1.5 rounded-full shadow-sm">
                SECTION 02 // ENGINEERING CORE
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.18] mb-6 font-sans">
              How we build and run platforms.
            </h2>

            {/* Paragraph 1 */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5 font-sans">
              We deploy robust microservices architectures and fully automated DevOps pipelines. Every
              platform we engineer is designed to scale elastically, handle massive data throughput,
              and maintain secure, uninterrupted operations across all enterprise workflows.
            </p>

            {/* Paragraph 2 */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 font-sans">
              From event-driven Kafka messaging buses and partitioned PostgreSQL datastores to resilient
              WebRTC video pipelines, our Bhopal craft pods ensure you gain 100% intellectual property
              ownership with production-hardened stability from Day 1.
            </p>

            {/* Action Button & Tech Stack Tags */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-[13px] font-bold tracking-wider uppercase px-6 sm:px-7 py-3.5 rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
              >
                <span>EXPLORE ARCHITECTURE</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Stack List */}
              <div className="flex items-center gap-2 text-zinc-400 text-[11px] sm:text-xs tracking-wider uppercase select-none">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse flex-shrink-0" />
                <span className="font-semibold text-zinc-400 tracking-widest">
                  TERRAFORM • KUBERNETES • GO • PYTHON
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
