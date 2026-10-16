"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function AgriAppointmentSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section className="relative w-full bg-[#030d07] text-white py-16 sm:py-20 lg:py-24 border-t border-emerald-950/40 select-none overflow-hidden">
      {/* Soft atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-10 blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(6, 78, 59, 0.2) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ===================================================================
              LEFT COLUMN: Accent Line + Heading + Subtitle + Button + 3 Stats
          ==================================================================== */}
          <div className="lg:col-span-7 flex items-start">
            {/* Thin accent vertical line on the far left matching screenshot */}
            <div className="w-[1.5px] bg-[#1a3828] mr-5 sm:mr-7 flex-shrink-0 self-stretch my-1" />

            <div className="flex-1 flex flex-col text-left">
              {/* Heading */}
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] xl:text-[40px] font-bold text-white tracking-[-0.03em] leading-[1.18] font-sans">
                Let&apos;s get started on something great
              </h2>

              {/* Subtitle */}
              <p className="text-[13px] sm:text-[14px] text-[#8fa89b] leading-[1.65] font-normal mt-3 sm:mt-4 max-w-[480px]">
                Our team of IT experts looks forward to meeting with you and providing valuable insights tailored to your business.
              </p>

              {/* Primary Appointment Button */}
              <div className="mt-6 sm:mt-7">
                <Link
                  href="/#contact-cta"
                  className="w-full sm:w-auto justify-center bg-[#198754] hover:bg-[#157347] active:bg-[#146c43] text-white font-bold text-[12px] sm:text-[12.5px] tracking-[0.06em] uppercase px-7 py-3.5 rounded-full inline-flex items-center shadow-[0_8px_20px_rgba(25,135,84,0.3)] transition-all duration-300 active:scale-95 cursor-pointer text-center"
                >
                  GET AN APPOINTMENT NOW
                </Link>
              </div>

              {/* 3 Metric Stats Row (Balanced 3-col on phones, flex on tablets/desktops) */}
              <div className="grid grid-cols-3 gap-3 sm:gap-10 lg:gap-12 sm:flex sm:flex-wrap items-start sm:items-center mt-10 sm:mt-12 pt-2">
                {/* 1. Response Time */}
                <div className="flex flex-col">
                  <span className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight leading-none font-sans">
                    2 Mins
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-[#7d998b] font-normal mt-1.5">
                    Response Time
                  </span>
                </div>

                {/* 2. Client Satisfaction */}
                <div className="flex flex-col">
                  <span className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight leading-none font-sans">
                    99%
                  </span>
                  <span className="text-[11.5px] sm:text-[11.5px] text-[#7d998b] font-normal mt-1.5">
                    Client Satisfaction
                  </span>
                </div>

                {/* 3. Field Experience */}
                <div className="flex flex-col">
                  <span className="text-[22px] sm:text-[25px] font-bold text-white tracking-tight leading-none font-sans">
                    22+ Years
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-[#7d998b] font-normal mt-1.5">
                    Field Experience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT COLUMN: Synck Brand + Input + Partner Badges
          ==================================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left lg:pt-1">
            {/* Header: Green Square with 'S' + SYNCK Brand */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[8px] bg-[#198754] flex items-center justify-center text-white font-extrabold text-[15px] shadow-sm">
                S
              </div>
              <span className="text-white font-extrabold text-[19px] sm:text-[21px] tracking-[0.06em] font-sans">
                SYNCK
              </span>
            </div>

            {/* Description */}
            <p className="text-[13px] sm:text-[14px] text-[#8fa89b] leading-[1.65] font-normal mt-4 max-w-[420px]">
              We provide the expertise and support to propel your business forward.
            </p>

            {/* Email Input Bar with Integrated Button */}
            <form onSubmit={handleSubscribe} className="mt-6 sm:mt-7 w-full max-w-[440px]">
              <div className="relative w-full bg-[#0a121e] border border-slate-800/80 focus-within:border-emerald-500/70 rounded-full p-1 sm:p-1.5 flex items-center transition-colors shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your mail"
                  required
                  className="bg-transparent text-white placeholder-[#505d73] text-[13px] sm:text-[13.5px] px-4 py-2 flex-1 outline-none min-w-0"
                />
                <button
                  type="submit"
                  className="bg-[#198754] hover:bg-[#157347] active:bg-[#146c43] text-white font-medium text-[12.5px] sm:text-[13px] px-5 sm:px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 flex-shrink-0 cursor-pointer shadow-md"
                >
                  {isSubmitted ? "Subscribed!" : "Get started"}
                </button>
              </div>

              {isSubmitted && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-[12px] mt-2 pl-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Thank you! We will get in touch shortly.</span>
                </div>
              )}
            </form>

            {/* Partner Logos Row */}
            <div className="flex flex-wrap items-center justify-between sm:justify-start gap-4 sm:gap-7 mt-8 sm:mt-9">
              {/* YouTube */}
              <div className="flex items-center gap-1.5 text-[#6c7f74] hover:text-white transition-colors cursor-pointer group">
                <svg
                  className="w-4 h-4 fill-[#6c7f74] group-hover:fill-red-500 group-hover:scale-110 transition-all"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="font-semibold text-[13px] tracking-tight text-[#6c7f74] group-hover:text-white transition-colors">
                  YouTube
                </span>
              </div>

              {/* Webflow */}
              <div className="flex items-center text-[#6c7f74] hover:text-white transition-colors cursor-pointer group">
                <span className="font-medium text-[13.5px] lowercase tracking-normal text-[#6c7f74] group-hover:text-white transition-colors">
                  webflow
                </span>
              </div>

              {/* Upwork */}
              <div className="flex items-center text-[#6c7f74] hover:text-white transition-colors cursor-pointer group">
                <span className="font-medium text-[13.5px] lowercase tracking-normal text-[#6c7f74] group-hover:text-white transition-colors">
                  upwork
                </span>
              </div>

              {/* Shopify */}
              <div className="flex items-center gap-1.5 text-[#6c7f74] hover:text-white transition-colors cursor-pointer group">
                <svg
                  className="w-4 h-4 fill-[#6c7f74] group-hover:fill-[#95bf47] group-hover:scale-110 transition-all"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.5 6.5l-2.4-1.2-1.7 4.2-2.4-1.4 1.7-4.2L14.3 2.7C14.1 2.6 13.9 2.5 13.7 2.6L12.3 3c-.4.1-.7.4-.8.8L8.6 17.5l-4.1-1.3c-.3-.1-.6 0-.8.2-.2.2-.3.5-.2.8l2 6.5c.1.3.4.6.8.6h.1l11.7-3.7c.3-.1.6-.4.6-.7L21.9 7.2c.1-.3 0-.6-.4-.7zm-5.7-2.6l1.2.7-1.2 3.1-1.2-.7 1.2-3.1zM11 20.3L9.6 16l3.7 1.2-2.3 3.1zm4.1-1.3l-3.3-1 2.3-3.1 3.5 1.1-2.5 3zm1.1-4.2l-3.5-1.1 2.7-3.6 3.6 1.1-2.8 3.6z" />
                </svg>
                <span className="font-medium text-[13.5px] lowercase tracking-normal text-[#6c7f74] group-hover:text-white transition-colors">
                  shopify
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
