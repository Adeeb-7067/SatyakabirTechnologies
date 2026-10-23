"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  ArrowUpRight,
  RefreshCw,
} from "lucide-react";

interface CaseStudyCard {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  bulletsLeft: string[];
  bulletsRight: string[];
  link: string;
}

const allCaseStudies: CaseStudyCard[] = [
  {
    id: "ml-project-1",
    title: "MachineLearningProject",
    category: "Machine Learning",
    image: "/images/cs-robot-ai.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bulletsLeft: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    bulletsRight: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    link: "/case-study",
  },
  {
    id: "blockchain-project-2",
    title: "ProjectLoremIpsum",
    category: "Data Engineering",
    image: "/images/cs-blockchain.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bulletsLeft: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    bulletsRight: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    link: "/case-study",
  },
  {
    id: "trading-project-3",
    title: "ProjectLoremIpsum",
    category: "Machine Learning",
    image: "/images/crm-laptop-hero.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bulletsLeft: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    bulletsRight: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    link: "/case-study",
  },
  {
    id: "data-project-4",
    title: "ProjectLoremIpsum",
    category: "Data Engineering",
    image: "/images/hrm-hero-hologram.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bulletsLeft: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    bulletsRight: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    link: "/case-study",
  },
  {
    id: "multiscreen-project-5",
    title: "ProjectLoremIpsum",
    category: "Machine Learning",
    image: "/images/security-ops-hero.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bulletsLeft: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    bulletsRight: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    link: "/case-study",
  },
  {
    id: "architecture-project-6",
    title: "ProjectLoremIpsum",
    category: "Data Engineering",
    image: "/images/nav/locations-building.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
    bulletsLeft: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    bulletsRight: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
    link: "/case-study",
  },
];

export default function PortfolioPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const filteredStudies = allCaseStudies.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <main className="min-h-screen bg-[#07090e] text-white selection:bg-blue-600 selection:text-white pb-28">
      {/* ========================================================= */}
      {/* SECTION 1: HERO BANNER ("Our Work, Your Future")           */}
      {/* ========================================================= */}
      <section className="pt-8 sm:pt-12 pb-10 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-[#101217] border border-[#212531] overflow-hidden shadow-2xl shadow-black/60 p-6 sm:p-10 lg:p-14">
          {/* Subtle Grid Points Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Curved Circuit / Flowlines SVG Background */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-25"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M-50,220 C100,220 120,80 260,80 L420,80 C480,80 500,240 580,240 L700,240"
              fill="none"
              stroke="#4a5568"
              strokeWidth="1.5"
            />
            <path
              d="M80,380 L180,380 C240,380 260,160 380,160 L500,160 C560,160 580,340 680,340 L820,340"
              fill="none"
              stroke="#3b4252"
              strokeWidth="1.2"
            />
            <path
              d="M300,-10 L300,100 C300,160 440,180 520,180 L760,180"
              fill="none"
              stroke="#4a5568"
              strokeWidth="1.2"
            />
            <rect
              x="260"
              y="180"
              width="180"
              height="160"
              rx="24"
              fill="none"
              stroke="#374151"
              strokeWidth="1"
              opacity="0.5"
            />
            <rect
              x="420"
              y="140"
              width="200"
              height="200"
              rx="28"
              fill="none"
              stroke="#374151"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>

          {/* Banner Inner Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Left Column: Heading & Description */}
            <div className="lg:w-[48%] flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-[1.15]">
                Our Work, Your Future
              </h1>
              <p className="mt-5 text-[14px] sm:text-[15px] text-[#939fab] leading-relaxed max-w-lg">
                From machine learning platforms to blockchain protocols and
                predictive analytics tools, here&apos;s a selection of real-world
                solutions we&apos;ve delivered for forward-thinking companies.
              </p>
            </div>

            {/* Right Column: 3D Isometric Dashboard UI Graphic */}
            <div className="lg:w-[52%] w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] h-[280px] sm:h-[340px] flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/images/portfolio-dashboard-3d.jpg"
                  alt="Our Work, Your Future Dashboard"
                  className="w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: OUR CASE STUDIES & FILTERABLE GRID              */}
      {/* ========================================================= */}
      <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-[1240px] mx-auto">
        {/* Dot Matrix Decoration on Top-Left */}
        <div className="absolute top-2 left-6 pointer-events-none hidden sm:block opacity-35 z-0">
          <div className="grid grid-cols-7 gap-3">
            {Array.from({ length: 42 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-slate-500 inline-block"
              />
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center relative z-10 mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Our Case Studies
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#8792a0] max-w-2xl mx-auto leading-relaxed px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since
          </p>
        </div>

        {/* Filter / Search Bar */}
        <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 mb-10 max-w-[1100px] mx-auto">
          {/* Left: Search Input with Blue Pill Search Button */}
          <div className="relative w-full sm:w-[320px]">
            <input
              type="text"
              placeholder="Searching Keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-4 pr-12 rounded-full bg-[#12141c] border border-[#232838] text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
            />
            <button
              type="button"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0070f3] hover:bg-blue-600 text-white flex items-center justify-center transition-colors cursor-pointer shadow-md shadow-blue-500/30"
              aria-label="Search case studies"
            >
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Right Controls: Dropdown Filter Buttons + 'View all' */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-start sm:justify-end">
            {/* Dropdown 1: Machine Learning */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "ml" ? null : "ml",
                  )
                }
                className={`h-10 px-4 rounded-full border text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  selectedCategory === "Machine Learning"
                    ? "bg-[#182136] border-blue-500/60 text-white"
                    : "bg-[#12141c] border-[#232838] text-[#939fab] hover:text-white hover:border-slate-600"
                }`}
              >
                <span>Machine Learning</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                    activeDropdown === "ml" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "ml" && (
                <div className="absolute top-12 left-0 z-30 w-44 rounded-xl bg-[#12141c] border border-[#232838] p-1.5 shadow-2xl animate-in fade-in zoom-in-95">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("Machine Learning");
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-blue-600/20 transition-colors cursor-pointer"
                  >
                    Filter: Machine Learning
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All");
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

            {/* Dropdown 2: Data Engineering */}
            <div className="relative">
              <button
                type="button"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "de" ? null : "de",
                  )
                }
                className={`h-10 px-4 rounded-full border text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer ${
                  selectedCategory === "Data Engineering"
                    ? "bg-[#182136] border-blue-500/60 text-white"
                    : "bg-[#12141c] border-[#232838] text-[#939fab] hover:text-white hover:border-slate-600"
                }`}
              >
                <span>Data Engineering</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
                    activeDropdown === "de" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeDropdown === "de" && (
                <div className="absolute top-12 left-0 z-30 w-44 rounded-xl bg-[#12141c] border border-[#232838] p-1.5 shadow-2xl animate-in fade-in zoom-in-95">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("Data Engineering");
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-300 hover:text-white hover:bg-blue-600/20 transition-colors cursor-pointer"
                  >
                    Filter: Data Engineering
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory("All");
                      setActiveDropdown(null);
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

            {/* Right: "View all" Pill Button */}
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchTerm("");
              }}
              className="h-10 px-5 rounded-full bg-[#0070f3] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-500/25 active:scale-95 cursor-pointer"
            >
              View all
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CASE STUDY CARDS GRID (2 Columns Layout, 6 Cards)        */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-[1100px] mx-auto">
          {filteredStudies.map((card) => (
            <div
              key={card.id}
              className="group rounded-[24px] sm:rounded-[28px] bg-[#10131b] border border-[#1e2332] p-5 sm:p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Top Rounded Image */}
                <div className="relative w-full h-[200px] sm:h-[230px] rounded-[18px] sm:rounded-[20px] overflow-hidden mb-5 bg-[#090b10] border border-white/5">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Title & Blue Circle Action Button Row */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-[20px] font-bold text-white tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <Link
                    href={card.link}
                    aria-label={`Open ${card.title}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0070f3] hover:bg-blue-600 text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110 shadow-md shadow-blue-500/30 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.3]" />
                  </Link>
                </div>

                {/* Description Paragraph */}
                <p className="text-xs sm:text-[13px] text-[#8692a2] leading-relaxed mb-5">
                  {card.description}
                </p>
              </div>

              {/* 2-Column Bullet List */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-[11px] sm:text-[12px] text-[#8e9cae]">
                {/* Left Column (3 items) */}
                <div className="flex flex-col gap-2">
                  {card.bulletsLeft.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                      <span className="truncate">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Right Column (2 items) */}
                <div className="flex flex-col gap-2">
                  {card.bulletsRight.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                      <span className="truncate">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Loading Indicator */}
        {/* <div className="mt-12 sm:mt-14 flex items-center justify-center gap-2.5 text-xs sm:text-[13px] text-[#e2e8f0]">
          <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin text-white stroke-[2.2]" />
          <span className="font-normal tracking-wide text-white/90">Loading...</span>
        </div> */}
      </section>
    </main>
  );
}
