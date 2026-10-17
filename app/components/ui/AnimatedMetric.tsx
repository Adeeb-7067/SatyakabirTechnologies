"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedMetricProps {
  value?: string | number; // e.g. "99.8% Accuracy", "$24M+ Saved", "12,000+"
  number?: string | number; // or separate number
  prefix?: string; // e.g. "$", "₹"
  suffix?: string; // e.g. "+", "%", "Cr+"
  label?: string; // optional companion label
  duration?: number; // duration in ms (default 1800)
  scramble?: boolean; // scramble text effect (default true)
  className?: string;
  labelClassName?: string;
}

const SCRAMBLE_CHARS = "0123456789ABCDEF$#%+@&";

export default function AnimatedMetric({
  value,
  number: propNumber,
  prefix: propPrefix = "",
  suffix: propSuffix = "",
  label,
  duration = 1800,
  scramble = true,
  className = "",
  labelClassName = "",
}: AnimatedMetricProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayNumber, setDisplayNumber] = useState<string>("0");
  const [displaySuffix, setDisplaySuffix] = useState<string>(propSuffix);

  // Parse input
  let rawPrefix = propPrefix;
  let rawNumberStr = propNumber !== undefined ? String(propNumber) : "";
  let rawSuffix = propSuffix;

  if (value !== undefined) {
    const str = String(value).trim();
    // Match prefix (non-digit, non-comma, non-dot at start)
    const match = str.match(/^([^0-9]*)([\d,]+(?:\.\d+)?)(.*)$/);
    if (match) {
      rawPrefix = match[1] || "";
      rawNumberStr = match[2] || "0";
      rawSuffix = match[3] || "";
    } else {
      rawNumberStr = str;
    }
  }

  const hasCommas = rawNumberStr.includes(",");
  const cleanNumberStr = rawNumberStr.replace(/,/g, "");
  const targetNum = parseFloat(cleanNumberStr) || 0;
  const isFloat = cleanNumberStr.includes(".");
  const decimalPlaces = isFloat ? cleanNumberStr.split(".")[1]?.length || 1 : 0;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) {
      setDisplayNumber(isFloat ? (0).toFixed(decimalPlaces) : "0");
      return;
    }

    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // EaseOutExpo curve
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = targetNum * ease;

      let formattedNumber: string;
      if (isFloat) {
        formattedNumber = currentVal.toFixed(decimalPlaces);
      } else {
        const rounded = Math.round(currentVal);
        formattedNumber = hasCommas ? rounded.toLocaleString() : String(rounded);
      }

      setDisplayNumber(formattedNumber);

      // Scramble suffix during animation if requested
      if (scramble && rawSuffix && progress < 0.85) {
        const scrambled = rawSuffix
          .split("")
          .map((ch) => (ch === " " ? " " : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]))
          .join("");
        setDisplaySuffix(scrambled);
      } else {
        setDisplaySuffix(rawSuffix);
      }

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        // Final lock-in
        let finalStr: string;
        if (isFloat) {
          finalStr = targetNum.toFixed(decimalPlaces);
        } else {
          finalStr = hasCommas ? Math.round(targetNum).toLocaleString() : String(Math.round(targetNum));
        }
        setDisplayNumber(finalStr);
        setDisplaySuffix(rawSuffix);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated, targetNum, duration, decimalPlaces, isFloat, hasCommas, rawSuffix, scramble]);

  return (
    <span ref={containerRef} className="inline-flex flex-col">
      <span className={`inline-flex items-baseline font-mono tracking-tight ${className}`}>
        {rawPrefix && <span className="opacity-90 mr-0.5 select-none">{rawPrefix}</span>}
        <span className="tabular-nums font-bold">{displayNumber}</span>
        {displaySuffix && <span className="opacity-90 ml-0.5 select-none">{displaySuffix}</span>}
      </span>
      {label && <span className={labelClassName}>{label}</span>}
    </span>
  );
}
