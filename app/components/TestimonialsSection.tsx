"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  theme: "blue" | "dark";
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Satyakabir restructured our entire server architecture. Queries that took minutes now compute instantly. Brilliant engineers.",
    author: "Ananya Sharma",
    role: "CTO, FinFlow",
    avatar: "/images/avatar-ananya.jpg",
    theme: "blue",
  },
  {
    id: 2,
    quote:
      "Their design team possesses high aesthetic standard. The glassmorphic interface has dramatically improved sign-up metrics.",
    author: "John Doe",
    role: "Product Director, HealthX",
    avatar: "/images/avatar-john.jpg",
    theme: "dark",
  },
  {
    id: 3,
    quote:
      "Their design team possesses high aesthetic standard. The glassmorphic interface has dramatically improved sign-up metrics.",
    author: "David Chen",
    role: "Head of Product, HealthX",
    avatar: "/images/avatar-david.jpg",
    theme: "blue",
  },
  {
    id: 4,
    quote:
      "An absolute powerhouse team for end-to-end SaaS development. Delivered ahead of schedule and highly dependable.",
    author: "Sarah Jenkins",
    role: "CEO, LearnPulse",
    avatar: "/images/avatar-sarah.jpg",
    theme: "dark",
  },
  {
    id: 5,
    quote:
      "From prototype to zero-downtime multi-region rollout, Satyakabir delivered an exceptional product that exceeded our SLAs.",
    author: "Alex Rivera",
    role: "VP of Technology, NexusAI",
    avatar: "/images/avatar-alex.jpg",
    theme: "blue",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Auto-play carousel rotation with hover pause
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-[#050810] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative z-10 text-white select-none overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle background architectural ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[340px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* Section Header matching reference */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.28em] uppercase mb-3 inline-flex items-center gap-1.5">
            <span className="text-[#3b82f6]">SOCIAL</span>
            <span className="text-[#f97316]">PROOF</span>
          </p>

          <h2 className="text-[34px] sm:text-[42px] md:text-[46px] font-bold text-white tracking-[-0.03em] leading-tight font-[family-name:var(--font-space-grotesk)]">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative w-full overflow-visible py-4 sm:py-6"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Card Track with Arced 3D Wave Perspective */}
          <div className="relative min-h-[260px] sm:min-h-[280px] flex items-center justify-center">
            {testimonials.map((item, idx) => {
              // Calculate relative offset distance from activeIndex
              let offset = idx - activeIndex;
              const total = testimonials.length;
              if (offset > total / 2) offset -= total;
              if (offset < -total / 2) offset += total;

              // Arc wave formula: dynamic X translation, Y displacement, and tilt rotation
              const isCenter = offset === 0;
              const isNear = Math.abs(offset) === 1;
              const isVisible = Math.abs(offset) <= 2;

              // Card spacing in pixels
              const translateX = offset * 340;
              // Gentle arced sag for natural curved ribbon
              const translateY = Math.abs(offset) * 8 + (offset === -1 ? -4 : offset === 1 ? -2 : 0);
              // Signature tilt angle: left tilts negative, right tilts positive
              const rotateDeg = offset * 2.8;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    transform: `translate3d(calc(-50% + ${translateX}px), ${translateY}px, 0) rotate(${rotateDeg}deg) scale(${
                      isCenter ? 1.04 : isNear ? 0.98 : 0.92
                    })`,
                    zIndex: isCenter ? 30 : 25 - Math.abs(offset),
                    opacity: isCenter ? 1 : isNear ? 0.88 : isVisible ? 0.45 : 0,
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-y-1/2 w-[310px] sm:w-[340px] md:w-[355px] h-[215px] sm:h-[225px] rounded-2xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    item.theme === "blue"
                      ? "bg-[#1e50e2] border border-blue-400/35 text-white shadow-[0_18px_42px_rgba(30,80,226,0.45),_0_0_20px_rgba(59,130,246,0.25)]"
                      : "bg-[#0c1222]/95 border border-[#1e2740] text-slate-200 shadow-[0_18px_38px_rgba(0,0,0,0.6)] backdrop-blur-md"
                  }`}
                >
                  {/* Quote Body */}
                  <p
                    className={`text-[13px] sm:text-[13.5px] leading-[1.62] font-normal line-clamp-4 ${
                      item.theme === "blue" ? "text-white/95" : "text-[#94a3b8]"
                    }`}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  {/* Author Row */}
                  <div className="flex items-center gap-3 pt-2">
                    <div
                      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden shrink-0 border-2 ${
                        item.theme === "blue" ? "border-white/30" : "border-slate-700"
                      }`}
                    >
                      <Image
                        src={item.avatar}
                        alt={item.author}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-col text-left">
                      <span className="text-[13.5px] sm:text-[14px] font-bold text-white tracking-tight leading-none">
                        {item.author}
                      </span>
                      <span
                        className={`text-[11.5px] sm:text-[12px] font-medium leading-none mt-1.5 ${
                          item.theme === "blue" ? "text-blue-100/75" : "text-[#64748b]"
                        }`}
                      >
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Discreet Interactive Navigation Buttons (appear gracefully on sides) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden md:flex absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0c1326]/80 hover:bg-[#131d38] border border-slate-700/60 text-slate-300 hover:text-white items-center justify-center transition-all duration-200 shadow-lg z-35 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2]" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="hidden md:flex absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0c1326]/80 hover:bg-[#131d38] border border-slate-700/60 text-slate-300 hover:text-white items-center justify-center transition-all duration-200 shadow-lg z-35 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Carousel Pagination Dots matching reference UI */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
              className={`transition-all duration-400 focus:outline-none cursor-pointer ${
                idx === activeIndex
                  ? "w-6 h-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  : "w-1.5 h-1.5 rounded-full bg-[#1e293b] hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
