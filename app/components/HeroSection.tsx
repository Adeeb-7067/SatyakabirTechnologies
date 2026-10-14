"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const cubesRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Entrance Timeline for left content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headlineRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
      })
        .from(
          subtitleRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          buttonsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        );

      // Entrance for 3D cubes graphic
      gsap.from(cubesRef.current, {
        scale: 0.9,
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.2,
      });

      // Subtle continuous floating micro-animation for the 3D cubes
      gsap.to(cubesRef.current, {
        y: -12,
        duration: 3.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.4,
      });

      // Subtle atmospheric pulsing for radial glows
      if (glow1Ref.current) {
        gsap.to(glow1Ref.current, {
          scale: 1.08,
          opacity: 0.75,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      if (glow2Ref.current) {
        gsap.to(glow2Ref.current, {
          scale: 1.12,
          opacity: 0.35,
          duration: 5.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-6 sm:pt-10 md:pt-12 lg:pt-14 pb-12 sm:pb-16 lg:pb-20 overflow-hidden"
    >
      {/* Background Radial Glow Effects Behind Graphic */}
      <div
        ref={glow1Ref}
        className="pointer-events-none absolute right-[0%] top-[5%] w-[600px] lg:w-[780px] h-[450px] lg:h-[620px] rounded-full opacity-65 blur-[95px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37, 78, 205, 0.7) 0%, rgba(22, 45, 140, 0.45) 45%, rgba(10, 16, 38, 0) 72%)",
        }}
        aria-hidden="true"
      />
      <div
        ref={glow2Ref}
        className="pointer-events-none absolute left-[10%] top-[30%] w-[380px] h-[340px] rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(30, 64, 175, 0.35) 0%, rgba(15, 23, 42, 0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Headlines & Action Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center text-left pt-2 lg:pt-0">
            {/* Main Headline */}
            <h1
              ref={headlineRef}
              className="text-[44px] sm:text-[56px] md:text-[66px] lg:text-[70px] xl:text-[74px] font-bold text-white tracking-tight leading-[1.05] mb-5 sm:mb-6 font-sans"
            >
              Build better <br />
              <span className="text-white">Products</span>
            </h1>

            {/* Subtitle Description */}
            <p
              ref={subtitleRef}
              className="text-[14px] sm:text-[15px] md:text-[16px] text-slate-300 font-normal leading-[1.65] max-w-[460px] mb-8 sm:mb-9"
            >
              Join the 10,000+ brands around the world—Powerful, self-serve
              product analytics to help you convert, engage, and retain more
              users.
            </p>

            {/* Action Buttons */}
            <div ref={buttonsRef} className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary Blue Button */}
              <Link
                href="#demo"
                className="inline-flex items-center justify-center bg-[#1d4ed8] hover:bg-blue-600 text-white font-medium text-[14px] sm:text-[15px] px-6 sm:px-7 py-3 rounded-lg shadow-lg shadow-blue-700/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                Request a Demo
              </Link>

              {/* Secondary Light Blue Button with Play Icon */}
              <Link
                href="#work"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#e4e9ff] hover:bg-white text-[#1d4ed8] font-medium text-[14px] sm:text-[15px] px-5 sm:px-6 py-3 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md active:scale-[0.98] cursor-pointer"
              >
                {/* Circular Blue Badge with White Play Icon */}
                <span className="w-5 h-5 rounded-full bg-[#1d4ed8] flex items-center justify-center text-white flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5 text-white" />
                </span>
                <span>See our Work</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Frosted Blue Cubes Graphic */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] sm:max-w-[560px] lg:max-w-[620px] h-[340px] sm:h-[420px] md:h-[480px] lg:h-[520px]">
              {/* High-Resolution Cubes Graphic with continuous gentle float */}
              <div
                ref={cubesRef}
                className="relative w-full h-full transition-transform duration-700 ease-out hover:scale-[1.02]"
              >
                <Image
                  src="/images/cubes-isolated.png"
                  alt="3D Frosted Blue Geometric Cubes"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                  className="object-contain object-center lg:object-right select-none drop-shadow-[0_20px_30px_rgba(3,8,22,0.65)]"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
