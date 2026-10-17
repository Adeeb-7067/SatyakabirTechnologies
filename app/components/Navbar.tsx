"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getPageTheme } from "../lib/pageThemes";
import {
  Phone,
  ChevronDown,
  ChevronUp,
  MapPin,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Briefcase,
  Building2,
  Users,
  Award,
  Sparkles,
} from "lucide-react";

// Custom SVG Icons matching the reference screenshot design
function AgricultureIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-9" />
      <path d="M12 13a5 5 0 0 0 5-5c0-3.5-3.5-5-5-5-1.5 0-5 1.5-5 5a5 5 0 0 0 5 5z" />
      <path d="M7 17a9 9 0 0 0 10 0" />
      <path d="M4 12a8 8 0 0 1 3-6.2" />
      <path d="M20 12a8 8 0 0 0-3-6.2" />
    </svg>
  );
}

function TravelIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
    </svg>
  );
}

function CrmIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 16v-4" />
      <path d="M12 16v-8" />
      <path d="M17 16v-6" />
      <path d="M7 10l5-3 5 3" />
    </svg>
  );
}

function LiveStreamingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 10 4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14v-4z" />
      <rect width="13" height="12" x="2" y="6" rx="2" />
      <circle cx="8.5" cy="12" r="1.5" />
    </svg>
  );
}

function SecurityIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  image: string;
  previewTitle: string;
  previewHeadline: string;
  previewBullets: string[];
  previewLinkText: string;
  icon: React.ReactNode;
}

const industryItems: IndustryItem[] = [
  {
    id: "agriculture",
    title: "Agriculture",
    subtitle: "From farm to marketplace",
    href: "/industries/agriculture",
    image: "/images/nav/agriculture.jpg",
    previewTitle: "SMART AGRICULTURE SOLUTIONS",
    previewHeadline: "Serving farms & agribusiness across the globe",
    previewBullets: [
      "Precision Crop & Soil Analytics",
      "Farm-to-Market Supply Chains",
      "IoT Drone Telemetry & Mapping",
    ],
    previewLinkText: "Explore Agriculture",
    icon: <AgricultureIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#60a5fa]" />,
  },
  {
    id: "tour-travels",
    title: "Tour & Travels",
    subtitle: "From farm to marketplace",
    href: "#industries",
    image: "/images/nav/tour-travels.jpg",
    previewTitle: "TOUR & TRAVEL PLATFORMS",
    previewHeadline: "Seamless global booking & luxury travel engines",
    previewBullets: [
      "Flight & Hotel Booking Aggregators",
      "AI Dynamic Itinerary Optimization",
      "Multi-Currency Payment Engine",
    ],
    previewLinkText: "Explore Travel Solutions",
    icon: <TravelIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#60a5fa]" />,
  },
  {
    id: "hrm-crm",
    title: "HRM,CRM & Automation",
    subtitle: "From Dashboards to marketplace",
    href: "#industries",
    image: "/images/nav/hrm-crm.jpg",
    previewTitle: "ENTERPRISE HRM & CRM SUITES",
    previewHeadline: "Automating workflows from dashboards to scale",
    previewBullets: [
      "Unified Sales & Deal Pipelines",
      "Automated Payroll & Compliance",
      "Real-Time Executive Dashboards",
    ],
    previewLinkText: "Explore Enterprise CRM",
    icon: <CrmIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#60a5fa]" />,
  },
  {
    id: "live-streaming",
    title: "Live Streaming & Dating",
    subtitle: "From cameras to global audience",
    href: "/industries/live-streaming",
    image: "/images/nav/live-streaming.jpg",
    previewTitle: "INTERACTIVE STREAMING & DATING",
    previewHeadline: "Sub-second live video & next-gen matchmaking",
    previewBullets: [
      "WebRTC Ultra-Low Latency Video",
      "Real-time AI Moderation & Filters",
      "Virtual Gifting & Monetization",
    ],
    previewLinkText: "Explore Streaming Platforms",
    icon: <LiveStreamingIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#60a5fa]" />,
  },
  {
    id: "security-manpower",
    title: "Security & Manpower",
    subtitle: "From perimeter to dispatch command",
    href: "/industries/security-manpower",
    image: "/images/nav/security-manpower.jpg",
    previewTitle: "SECURITY & WORKFORCE MANAGEMENT",
    previewHeadline: "Next-gen vigilance, access control & dispatch",
    previewBullets: [
      "Biometric Access & Attendance",
      "AI CCTV Surveillance Analytics",
      "Automated Guard Patrol Scheduling",
    ],
    previewLinkText: "Explore Security Systems",
    icon: <SecurityIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#60a5fa]" />,
  },
];

const defaultServingLocations = {
  id: "locations",
  previewTitle: "OUR SERVING LOCATIONS",
  image: "/images/nav/locations-building.jpg",
  previewHeadline: "Serving customers from across the globe",
  locations: ["Bhopal", "indore", "uttar pradesh"],
  previewLinkText: "See all",
  href: "#contact",
};

export default function Navbar() {
  const pathname = usePathname();
  const theme = getPageTheme(pathname);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<IndustryItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const navContainerRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Automatically select matching industry preview if current route / pathname matches
  useEffect(() => {
    if (!pathname) return;
    const pathLower = pathname.toLowerCase();
    const match = industryItems.find((item) =>
      pathLower.includes(item.id) || pathLower.includes(item.title.toLowerCase())
    );
    if (match) {
      setHoveredIndustry(match);
    }
  }, [pathname]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
        setHoveredIndustry(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveDropdown(null);
        setHoveredIndustry(null);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMouseEnterNav = (key: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(key);
  };

  const handleMouseLeaveNav = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredIndustry(null);
    }, 200);
  };

  const toggleDropdown = (key: string) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
      setHoveredIndustry(null);
    } else {
      setActiveDropdown(key);
    }
  };

  // Preview content currently active on the right side of the mega menu
  const isCustomIndustry = !!hoveredIndustry;
  const currentImage = hoveredIndustry
    ? hoveredIndustry.image
    : defaultServingLocations.image;
  const currentTitle = hoveredIndustry
    ? hoveredIndustry.previewTitle
    : defaultServingLocations.previewTitle;
  const currentHeadline = hoveredIndustry
    ? hoveredIndustry.previewHeadline
    : defaultServingLocations.previewHeadline;
  const currentLinkText = hoveredIndustry
    ? hoveredIndustry.previewLinkText
    : defaultServingLocations.previewLinkText;

  return (
    <header className={`sticky top-0 z-50 w-full pt-3 sm:pt-4 pb-2.5 px-4 sm:px-6 lg:px-8 transition-all duration-300 backdrop-blur-md ${theme.headerBg}`}>
      <div
        ref={navContainerRef}
        className="max-w-[1240px] mx-auto relative"
        onMouseLeave={handleMouseLeaveNav}
      >
        {/* Main Navbar Bar */}
        <nav
          className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border transition-all duration-300 ${
            activeDropdown
              ? `${theme.navActiveBorder} ${theme.navActiveBg} ${theme.navActiveShadow}`
              : `${theme.navBorder} ${theme.navBg} backdrop-blur-md ${theme.navShadow}`
          }`}
          aria-label="Global"
        >
          {/* Logo & Brand Name */}
          <Link
            href="/"
            onClick={() => setActiveDropdown(null)}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none select-none flex-shrink-0"
            aria-label="Satya Kabir Technologies"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/sk-logo.png"
                alt="Satya Kabir Technologies Logo"
                fill
                sizes="36px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[14px] sm:text-[15px] font-bold text-white tracking-tight leading-none">
                Satya Kabir
              </span>
              <span className="text-[10px] sm:text-[11px] font-normal text-slate-300 tracking-wider leading-none mt-1">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setActiveDropdown(null)}
              className="text-[14px] lg:text-[15px] text-white font-semibold hover:text-white transition-colors"
            >
              Home
            </Link>

            {/* Industries (Mega Menu Trigger) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterNav("industries")}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("industries")}
                className={`text-[14px] lg:text-[15px] transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer py-1 ${
                  activeDropdown === "industries"
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white font-normal"
                }`}
                aria-expanded={activeDropdown === "industries"}
              >
                <span>Industries</span>
                {activeDropdown === "industries" ? (
                  <ChevronUp className={`w-3.5 h-3.5 ${theme.accentChevron} stroke-[2.2] transition-transform duration-200`} />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2] transition-transform duration-200" />
                )}
              </button>
            </div>

            {/* Portfolio Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterNav("portfolio")}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("portfolio")}
                className={`text-[14px] lg:text-[15px] transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer py-1 ${
                  activeDropdown === "portfolio"
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white font-normal"
                }`}
                aria-expanded={activeDropdown === "portfolio"}
              >
                <span>Portfolio</span>
                {activeDropdown === "portfolio" ? (
                  <ChevronUp className={`w-3.5 h-3.5 ${theme.accentChevron} stroke-[2.2] transition-transform duration-200`} />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2] transition-transform duration-200" />
                )}
              </button>
            </div>

            {/* Company Trigger */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnterNav("company")}
            >
              <button
                type="button"
                onClick={() => toggleDropdown("company")}
                className={`text-[14px] lg:text-[15px] transition-colors flex items-center gap-1.5 focus:outline-none cursor-pointer py-1 ${
                  activeDropdown === "company"
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white font-normal"
                }`}
                aria-expanded={activeDropdown === "company"}
              >
                <span>Company</span>
                {activeDropdown === "company" ? (
                  <ChevronUp className={`w-3.5 h-3.5 ${theme.accentChevron} stroke-[2.2] transition-transform duration-200`} />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2] transition-transform duration-200" />
                )}
              </button>
            </div>

            {/* Contact */}
            <Link
              href="#contact"
              onClick={() => setActiveDropdown(null)}
              className="text-[14px] lg:text-[15px] text-slate-300 hover:text-white font-normal transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right Action: Phone & Request a Demo CTA */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-6">
            {/* Phone Number with Phone Icon - only on xl+ to prevent tablet squishing */}
            <a
              href="tel:+91234567890"
              className="hidden xl:flex items-center gap-2 text-slate-200 hover:text-white text-[13px] lg:text-[14px] font-medium transition-colors group focus:outline-none"
            >
              <Phone className="w-3.5 h-3.5 text-slate-200 group-hover:text-blue-400 transition-colors" />
              <span>+91 234 567890</span>
            </a>

            {/* Request a Demo Button */}
            <Link
              href="#contact"
              onClick={() => setActiveDropdown(null)}
              className="bg-white hover:bg-slate-100 text-[#070f24] font-semibold text-[13px] lg:text-[14px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Request a Demo
            </Link>
          </div>

          {/* Mobile Menu Button - shows on < lg */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-white/5 border border-white/10 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* ========================================================= */}
        {/* DESKTOP MEGA MENU DROPDOWN: INDUSTRIES                     */}
        {/* ========================================================= */}
        {activeDropdown === "industries" && (
          <div
            onMouseEnter={() => handleMouseEnterNav("industries")}
            className={`absolute top-[calc(100%+6px)] left-0 right-0 z-50 rounded-2xl border ${theme.dropdownBorder} ${theme.dropdownBg} backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Section: Industries Grid (approx 58-60% width) */}
              <div className="p-6 sm:p-7 lg:p-8 lg:w-[60%] flex flex-col justify-between">
                <div>
                  <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#64748b] uppercase mb-6">
                    INDUSTRIES
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Left Column: Agriculture, HRM/CRM, Security */}
                    <div className="flex flex-col gap-6">
                      {/* 1. Agriculture */}
                      {(() => {
                        const item = industryItems[0];
                        const isHovered = hoveredIndustry?.id === item.id;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            onMouseEnter={() => setHoveredIndustry(item)}
                            className="flex items-start gap-3.5 group cursor-pointer focus:outline-none"
                          >
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isHovered
                                  ? "bg-blue-600/20 border border-blue-500/50 scale-105"
                                  : "bg-[#0c1630] border border-[#1c2b50] group-hover:border-blue-500/40"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="flex flex-col text-left">
                              <span
                                className={`text-[14px] sm:text-[15px] font-semibold transition-colors leading-tight ${
                                  isHovered
                                    ? "text-blue-400"
                                    : "text-white group-hover:text-blue-400"
                                }`}
                              >
                                {item.title}
                              </span>
                              <span className="text-[12px] sm:text-[12.5px] text-[#7d8b9f] leading-snug mt-1">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })()}

                      {/* 2. HRM,CRM & Automation */}
                      {(() => {
                        const item = industryItems[2];
                        const isHovered = hoveredIndustry?.id === item.id;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndustry(item)}
                            className="flex items-start gap-3.5 group cursor-pointer focus:outline-none"
                          >
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isHovered
                                  ? "bg-blue-600/20 border border-blue-500/50 scale-105"
                                  : "bg-[#0c1630] border border-[#1c2b50] group-hover:border-blue-500/40"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="flex flex-col text-left">
                              <span
                                className={`text-[14px] sm:text-[15px] font-semibold transition-colors leading-tight ${
                                  isHovered
                                    ? "text-blue-400"
                                    : "text-white group-hover:text-blue-400"
                                }`}
                              >
                                {item.title}
                              </span>
                              <span className="text-[12px] sm:text-[12.5px] text-[#7d8b9f] leading-snug mt-1">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })()}

                      {/* 3. Security & Manpower */}
                      {(() => {
                        const item = industryItems[4];
                        const isHovered = hoveredIndustry?.id === item.id;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndustry(item)}
                            className="flex items-start gap-3.5 group cursor-pointer focus:outline-none"
                          >
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isHovered
                                  ? "bg-blue-600/20 border border-blue-500/50 scale-105"
                                  : "bg-[#0c1630] border border-[#1c2b50] group-hover:border-blue-500/40"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="flex flex-col text-left">
                              <span
                                className={`text-[14px] sm:text-[15px] font-semibold transition-colors leading-tight ${
                                  isHovered
                                    ? "text-blue-400"
                                    : "text-white group-hover:text-blue-400"
                                }`}
                              >
                                {item.title}
                              </span>
                              <span className="text-[12px] sm:text-[12.5px] text-[#7d8b9f] leading-snug mt-1">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })()}
                    </div>

                    {/* Right Column: Tour & Travels, Live Streaming & Dating */}
                    <div className="flex flex-col gap-6">
                      {/* 4. Tour & Travels */}
                      {(() => {
                        const item = industryItems[1];
                        const isHovered = hoveredIndustry?.id === item.id;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndustry(item)}
                            className="flex items-start gap-3.5 group cursor-pointer focus:outline-none"
                          >
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isHovered
                                  ? "bg-blue-600/20 border border-blue-500/50 scale-105"
                                  : "bg-[#0c1630] border border-[#1c2b50] group-hover:border-blue-500/40"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="flex flex-col text-left">
                              <span
                                className={`text-[14px] sm:text-[15px] font-semibold transition-colors leading-tight ${
                                  isHovered
                                    ? "text-blue-400"
                                    : "text-white group-hover:text-blue-400"
                                }`}
                              >
                                {item.title}
                              </span>
                              <span className="text-[12px] sm:text-[12.5px] text-[#7d8b9f] leading-snug mt-1">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })()}

                      {/* 5. Live Streaming & Dating */}
                      {(() => {
                        const item = industryItems[3];
                        const isHovered = hoveredIndustry?.id === item.id;
                        return (
                          <Link
                            key={item.id}
                            href={item.href}
                            onMouseEnter={() => setHoveredIndustry(item)}
                            className="flex items-start gap-3.5 group cursor-pointer focus:outline-none"
                          >
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                                isHovered
                                  ? "bg-blue-600/20 border border-blue-500/50 scale-105"
                                  : "bg-[#0c1630] border border-[#1c2b50] group-hover:border-blue-500/40"
                              }`}
                            >
                              {item.icon}
                            </div>
                            <div className="flex flex-col text-left">
                              <span
                                className={`text-[14px] sm:text-[15px] font-semibold transition-colors leading-tight ${
                                  isHovered
                                    ? "text-blue-400"
                                    : "text-white group-hover:text-blue-400"
                                }`}
                              >
                                {item.title}
                              </span>
                              <span className="text-[12px] sm:text-[12.5px] text-[#7d8b9f] leading-snug mt-1">
                                {item.subtitle}
                              </span>
                            </div>
                          </Link>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section: Dynamic Preview Card (approx 40% width) */}
              <div
                className={`${theme.dropdownRightPanelBg} border-t lg:border-t-0 lg:border-l ${theme.dropdownDivider} p-6 sm:p-7 lg:p-8 lg:w-[40%] flex flex-col justify-between transition-colors duration-300`}
                onMouseEnter={() => {
                  /* Keep current preview or fallback */
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#64748b] uppercase">
                      {currentTitle}
                    </h4>
                    {isCustomIndustry && (
                      <button
                        type="button"
                        onClick={() => setHoveredIndustry(null)}
                        className="text-[10.5px] text-slate-400 hover:text-white transition-colors"
                      >
                        Reset to locations
                      </button>
                    )}
                  </div>

                  {/* Horizontal Card Layout matching Screenshot */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    {/* Image with smooth fade on route/item change */}
                    <div className="relative w-full sm:w-[220px] h-[135px] sm:h-[145px] rounded-xl overflow-hidden flex-shrink-0 border border-white/10 shadow-lg bg-[#091126]">
                      <Image
                        key={currentImage}
                        src={currentImage}
                        alt={currentHeadline}
                        fill
                        sizes="(max-width: 640px) 100vw, 220px"
                        className="object-cover transition-all duration-300 animate-in fade-in zoom-in-95"
                        priority
                      />
                    </div>

                    {/* Content beside the image */}
                    <div className="flex-1 flex flex-col justify-between min-h-[135px]">
                      <div>
                        <p className="text-[13.5px] sm:text-[14px] text-white font-medium leading-snug mb-3">
                          {currentHeadline}
                        </p>

                        {/* List: Locations (default) or Key Features (on hover) */}
                        {!isCustomIndustry ? (
                          <div className="flex flex-col gap-2">
                            {defaultServingLocations.locations.map((loc) => (
                              <div
                                key={loc}
                                className="flex items-center gap-2 text-[12px] sm:text-[12.5px] text-[#94a3b8]"
                              >
                                <MapPin className="w-3.5 h-3.5 text-[#38bdf8] flex-shrink-0" />
                                <span className="capitalize">{loc}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="flex flex-col gap-1.5">
                            {hoveredIndustry.previewBullets.map((bullet) => (
                              <div
                                key={bullet}
                                className="flex items-center gap-2 text-[11.5px] sm:text-[12px] text-[#94a3b8]"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                                <span className="line-clamp-1">{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* See All or Explore CTA Link */}
                      <div className="mt-4 pt-2">
                        <Link
                          href={hoveredIndustry ? hoveredIndustry.href : defaultServingLocations.href}
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-semibold text-white hover:text-blue-400 transition-colors group cursor-pointer"
                        >
                          <span>{currentLinkText}</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* DESKTOP MEGA MENU DROPDOWN: PORTFOLIO                     */}
        {/* ========================================================= */}
        {activeDropdown === "portfolio" && (
          <div
            onMouseEnter={() => handleMouseEnterNav("portfolio")}
            className={`absolute top-[calc(100%+6px)] left-0 right-0 z-50 rounded-2xl border ${theme.dropdownBorder} ${theme.dropdownBg} backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="p-6 sm:p-7 lg:p-8 lg:w-[60%]">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#64748b] uppercase mb-6">
                  PORTFOLIO SHOWCASE
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Link
                    href="#portfolio"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        Fintech & Banking Suites
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        Ultra-secure payment rails & microservices
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#portfolio"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        AI & Automation Platforms
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        Autonomous agentic workflows & LLM pipelines
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#portfolio"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <AgricultureIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        Agritech Ecosystems
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        Supply chain traceability & IoT telemetry
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#portfolio"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        Enterprise SaaS Portals
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        Global high-throughput cloud dashboards
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Showcase Card */}
              <div className={`${theme.dropdownRightPanelBg} border-t lg:border-t-0 lg:border-l ${theme.dropdownDivider} p-6 sm:p-7 lg:p-8 lg:w-[40%] flex flex-col justify-between transition-colors duration-300`}>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#64748b] uppercase mb-4">
                    FEATURED CASE STUDY
                  </h4>
                  <div className="relative w-full h-[140px] rounded-xl overflow-hidden border border-white/10 shadow-lg mb-3">
                    <Image
                      src="/images/nav/hrm-crm.jpg"
                      alt="Featured Case Study"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover"
                    />
                  </div>
                  <h5 className="text-[14px] font-bold text-white mb-1">
                    Nexus Global Enterprise ERP
                  </h5>
                  <p className="text-[12px] text-[#7d8b9f] leading-snug">
                    Deployed across 18 countries, achieving 99.99% uptime and 40% reduction in query latency.
                  </p>
                </div>
                <div className="mt-4 pt-2">
                  <Link
                    href="#portfolio"
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white hover:text-blue-400 transition-colors group"
                  >
                    <span>View all client case studies</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* DESKTOP MEGA MENU DROPDOWN: COMPANY                       */}
        {/* ========================================================= */}
        {activeDropdown === "company" && (
          <div
            onMouseEnter={() => handleMouseEnterNav("company")}
            className={`absolute top-[calc(100%+6px)] left-0 right-0 z-50 rounded-2xl border ${theme.dropdownBorder} ${theme.dropdownBg} backdrop-blur-2xl shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in-50 zoom-in-95 duration-200`}
          >
            <div className="flex flex-col lg:flex-row">
              <div className="p-6 sm:p-7 lg:p-8 lg:w-[60%]">
                <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#64748b] uppercase mb-6">
                  ABOUT SATYAKABIR
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Link
                    href="#about"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        Our Vision & Story
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        Pioneering enterprise engineering since 2018
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#company"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        Leadership & Team
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        World-class systems architects & developers
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#company"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        Awards & Certification
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        ISO 27001, SOC-2 compliant engineering
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="#contact"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-start gap-3.5 group p-2.5 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0 text-blue-400 group-hover:border-blue-500">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-semibold text-white group-hover:text-blue-400 leading-tight">
                        Contact & Global Offices
                      </h4>
                      <p className="text-[12px] text-[#7d8b9f] mt-1">
                        Serving partners across Bhopal, Indore & UP
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Global Locations Preview */}
              <div className={`${theme.dropdownRightPanelBg} border-t lg:border-t-0 lg:border-l ${theme.dropdownDivider} p-6 sm:p-7 lg:p-8 lg:w-[40%] flex flex-col justify-between transition-colors duration-300`}>
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#64748b] uppercase mb-4">
                    CORPORATE HEADQUARTERS
                  </h4>
                  <div className="relative w-full h-[140px] rounded-xl overflow-hidden border border-white/10 shadow-lg mb-3">
                    <Image
                      src="/images/nav/locations-building.jpg"
                      alt="Satya Kabir Corporate Tower"
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover"
                    />
                  </div>
                  <h5 className="text-[14px] font-bold text-white mb-1">
                    Satya Kabir Technologies
                  </h5>
                  <p className="text-[12px] text-[#7d8b9f] leading-snug">
                    Offices in Bhopal, Indore & Uttar Pradesh. Serving clients globally.
                  </p>
                </div>
                <div className="mt-4 pt-2">
                  <Link
                    href="#contact"
                    onClick={() => setActiveDropdown(null)}
                    className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white hover:text-blue-400 transition-colors group"
                  >
                    <span>Get in touch with our team</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* MOBILE MENU ACCORDION                                     */}
        {/* ========================================================= */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-2 p-4 rounded-xl border ${theme.mobileMenuBorder} ${theme.mobileMenuBg} backdrop-blur-2xl shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200`}>
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm text-white font-semibold bg-white/10"
            >
              Home
            </Link>

            {/* Industries Accordion */}
            <div>
              <button
                type="button"
                onClick={() =>
                  setMobileAccordion(mobileAccordion === "industries" ? null : "industries")
                }
                className="w-full py-2 px-3 rounded-md text-sm text-slate-300 hover:text-white flex items-center justify-between"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    mobileAccordion === "industries" ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>

              {mobileAccordion === "industries" && (
                <div className="pl-3 pr-2 py-2 flex flex-col gap-3 border-l-2 border-blue-500/30 ml-3 mt-1">
                  {industryItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-1 group"
                    >
                      <div className="w-7 h-7 rounded bg-[#0c1630] border border-[#1c2b50] flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">
                          {item.title}
                        </span>
                        <span className="text-[10.5px] text-slate-400">
                          {item.subtitle}
                        </span>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Locations: Bhopal, Indore, UP</span>
                    <Link
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[11px] text-blue-400 font-semibold"
                    >
                      See all &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio Link */}
            <Link
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Portfolio
            </Link>

            {/* Company Link */}
            <Link
              href="#company"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Company
            </Link>

            {/* Contact Link */}
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md text-sm text-slate-300 hover:bg-white/5 hover:text-white"
            >
              Contact
            </Link>

            {/* Mobile Actions: Phone & Request Demo */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="tel:+91234567890"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-md bg-white/5 text-slate-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+91 234 567890</span>
              </a>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-white text-[#070f24] font-semibold text-center text-sm py-2.5 rounded-lg shadow-md"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
