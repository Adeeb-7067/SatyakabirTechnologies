"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0 0-3.36 1.68 1.68 0 0 0 0 3.36m1.4 9.74V9.89H5.06v8.61h2.8z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.41a6.33 6.33 0 0 0-.85-.06A6.34 6.34 0 0 0 3 15.69a6.34 6.34 0 0 0 10.82 4.47 6.27 6.27 0 0 0 1.86-4.49v-7a8.16 8.16 0 0 0 4.91 1.63V6.86c-.33-.04-.67-.1-1-.17z" />
    </svg>
  );
}

const workLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "case Studies", href: "#case-studies" },
  { label: "Projects", href: "#projects" },
];

const industryLinks = [
  { label: "Agriculture", href: "#industries" },
  { label: "Tour & Travels", href: "#industries" },
  { label: "Security & manpower", href: "#industries" },
  { label: "Live Streaming & dating", href: "#industries" },
  { label: "CRM HRM & Automation", href: "#industries" },
];

const actionLinks = [
  { label: "Book strategic call", href: "#contact" },
  { label: "Talk To Assitance", href: "#contact" },
  { label: "Infrastructure", href: "#about" },
  { label: "Leadership", href: "#company" },
  { label: "Get Quote", href: "#contact" },
];

const companyLinks = [
  { label: "About Satyakabir", href: "#about" },
  { label: "Lifestyle at Satyakabir", href: "#company" },
  { label: "Awards & cerification", href: "#company" },
  { label: "Careers & Culture", href: "#company" },
  { label: "Contact & Locations", href: "#contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Cookie Policy", href: "#cookies" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Security Protocols", href: "#security" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#050810] text-white relative overflow-hidden select-none border-t border-[#131b2e] pt-14 sm:pt-16 md:pt-20 pb-4">
      {/* Container matching project standard max-w-[1240px] */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Email & Socials on Left, 4 Navigation Columns on Right */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Left Block: Contact Email & Socials */}
          <div className="flex flex-col gap-4 max-w-[340px]">
            {/* Email with Icon */}
            <a
              href="mailto:connect@satyakabir.co.in"
              className="inline-flex items-center gap-2.5 font-mono text-[13px] sm:text-[14px] text-slate-200 hover:text-white transition-colors tracking-tight group"
            >
              <Mail className="w-4 h-4 text-[#7c9bf5] stroke-[1.8] transition-transform duration-200 group-hover:scale-110" />
              <span className="font-mono text-slate-300 group-hover:text-white">
                connect@satyakabir.co.in
              </span>
            </a>

            {/* Social Icons Row */}
            <div className="flex items-center gap-4 text-slate-400 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="hover:text-white transition-colors"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="hover:text-white transition-colors"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="hover:text-white transition-colors"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="hover:text-white transition-colors"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Navigation Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 lg:gap-14">
            
            {/* WORK Column */}
            <div className="flex flex-col">
              <h4 className="font-mono text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] text-white uppercase mb-4">
                WORK
              </h4>
              <ul className="flex flex-col gap-2.5">
                {workLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] sm:text-[12.5px] text-[#8e98aa] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* INDUSTRIES Column */}
            <div className="flex flex-col">
              <h4 className="font-mono text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] text-white uppercase mb-4">
                INDUSTRIES
              </h4>
              <ul className="flex flex-col gap-2.5">
                {industryLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] sm:text-[12.5px] text-[#8e98aa] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACTIONS Column */}
            <div className="flex flex-col">
              <h4 className="font-mono text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] text-white uppercase mb-4">
                ACTIONS
              </h4>
              <ul className="flex flex-col gap-2.5">
                {actionLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] sm:text-[12.5px] text-[#8e98aa] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY Column */}
            <div className="flex flex-col">
              <h4 className="font-mono text-[11px] sm:text-[11.5px] font-bold tracking-[0.2em] text-white uppercase mb-4">
                COMPANY
              </h4>
              <ul className="flex flex-col gap-2.5">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[12px] sm:text-[12.5px] text-[#8e98aa] hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Middle Legal Bar with Border */}
        <div className="border-t border-[#131b2e] pt-6 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10.5px] sm:text-[11px] text-[#556075] tracking-tight">
            &copy; 2026 Satyakabir Technologies Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-7 gap-y-2">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-mono text-[10.5px] sm:text-[11px] text-[#556075] hover:text-slate-300 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Giant Architectural Watermark: SATYAKABIR TECHNOLOGIES */}
      <div className="w-full overflow-hidden select-none pointer-events-none mt-2 sm:mt-4">
        <h2 className="text-[9.5vw] font-black tracking-[-0.03em] uppercase text-[#0d1424] leading-none text-center whitespace-nowrap select-none">
          SATYAKABIR TECHNOLOGIES
        </h2>
      </div>
    </footer>
  );
}
