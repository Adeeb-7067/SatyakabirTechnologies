"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const playBtnRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Wireframe border entrance
      if (borderRef.current) {
        gsap.fromTo(
          borderRef.current,
          { scale: 0.96, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.9,
            ease: "power2.out",
            clearProps: "all",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 92%",
              once: true,
            },
          }
        );
      }

      // Play button pop entrance
      if (playBtnRef.current) {
        gsap.fromTo(
          playBtnRef.current,
          { scale: 0.6, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.15,
            ease: "back.out(1.6)",
            clearProps: "all",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 92%",
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPlaying(false);
      }
    };
    if (isPlaying) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isPlaying]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[75vh] sm:h-[85vh] lg:h-screen min-h-[520px] overflow-hidden bg-black text-white group cursor-pointer select-none"
    >
      {/* Fullscreen High-Resolution Background Mockup Asset */}
      <Image
        src="/images/showreel-clean-hq.png"
        alt="Satya Kabir Technologies Showreel & Platform Showcase"
        fill
        sizes="100vw"
        className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.015]"
        priority
      />

      {/* Inset Architectural White Wireframe Border */}
      <div
        ref={borderRef}
        className="absolute inset-4 sm:inset-8 md:inset-12 lg:inset-16 xl:inset-20 border border-white/45 pointer-events-none z-10 transition-colors duration-300 group-hover:border-white/70"
        aria-hidden="true"
      />

      {/* Interactive Play Button Hotspot (Positioned over the laptop display) */}
      <div
        onClick={() => setIsPlaying(true)}
        className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
        aria-label="Play showreel video"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsPlaying(true);
          }
        }}
      >
        {/* Concentric Pulsing Ripple Rings on Hover */}
        <div ref={playBtnRef} className="relative flex items-center justify-center">
          <span className="absolute w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white/20 animate-ping opacity-75 group-hover:opacity-100 duration-1000" />
          <span className="absolute w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/30 backdrop-blur-sm group-hover:scale-125 transition-transform duration-300" />
          
          {/* Play Button Icon Circle */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
            <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-slate-900 text-slate-900 translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Cinematic Fullscreen Video Modal */}
      {isPlaying && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Platform Showcase Video"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-6 lg:p-12 animate-in fade-in duration-300"
          onClick={() => setIsPlaying(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsPlaying(false)}
            aria-label="Close video"
            className="absolute top-6 right-6 z-[210] w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Player Box */}
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
              title="Satya Kabir Showreel Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </section>
  );
}
