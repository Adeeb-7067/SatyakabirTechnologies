"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Phone, ChevronDown, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "Portfolio", href: "#portfolio", hasDropdown: true },
  { label: "Company", href: "#company", hasDropdown: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="max-w-[1240px] mx-auto">
        <nav
          className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-[#2b3552] bg-[#0c1326]/60 backdrop-blur-md shadow-xl transition-all duration-300"
          aria-label="Global"
        >
          {/* Logo & Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none select-none"
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
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14px] lg:text-[15px] transition-colors flex items-center gap-1 focus:outline-none ${
                  item.label === "Home"
                    ? "text-white font-semibold"
                    : "text-slate-300 hover:text-white font-normal"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2] transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Search Icon Button */}
            <button
              type="button"
              aria-label="Search"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white hover:bg-slate-100 text-slate-800 flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
            >
              <Search className="w-4 h-4 text-slate-700 stroke-[2.2]" />
            </button>

            {/* Phone/Call Icon Button */}
            <button
              type="button"
              aria-label="Contact support"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-white hover:bg-slate-100 text-[#1d4ed8] flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#1d4ed8] stroke-[2.2]" />
            </button>

            {/* Start a Project CTA Button */}
            <Link
              href="#contact"
              className="bg-[#1d4ed8] hover:bg-blue-600 text-white font-medium text-[13px] sm:text-[14px] px-4 sm:px-5 py-2 sm:py-2.5 rounded-md shadow-md shadow-blue-800/30 transition-all duration-200 hover:shadow-lg hover:shadow-blue-700/40 active:scale-95 whitespace-nowrap cursor-pointer ml-1"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-lg border border-[#2b3552] bg-[#0c1326]/95 backdrop-blur-2xl shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md text-sm flex items-center justify-between ${
                  item.label === "Home"
                    ? "bg-white/10 text-white font-semibold"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/10 flex items-center gap-2">
              <button
                type="button"
                className="w-9 h-9 rounded-md bg-white text-slate-800 flex items-center justify-center flex-shrink-0"
              >
                <Search className="w-4 h-4 text-slate-700 stroke-[2.2]" />
              </button>
              <button
                type="button"
                className="w-9 h-9 rounded-md bg-white text-[#1d4ed8] flex items-center justify-center flex-shrink-0"
              >
                <Phone className="w-4 h-4 text-[#1d4ed8] stroke-[2.2]" />
              </button>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 bg-[#1d4ed8] text-white text-center font-medium text-sm py-2 rounded-md"
              >
                Start a Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
