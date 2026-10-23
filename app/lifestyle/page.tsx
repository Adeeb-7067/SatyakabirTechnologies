import React from "react";
import type { Metadata } from "next";
import LifestyleHeroSection from "./LifestyleHeroSection";
import LifestyleBrandingMarqueeSection from "./LifestyleBrandingMarqueeSection";
import LifestyleEngineeringSection from "./LifestyleEngineeringSection";
import LifestyleCertificationsSection from "./LifestyleCertificationsSection";
import LifestyleAlliancesSection from "./LifestyleAlliancesSection";
import LifestyleAwardsSection from "./LifestyleAwardsSection";
import LifestyleCSRSection from "./LifestyleCSRSection";
import LifestyleCTASection from "./LifestyleCTASection";

export const metadata: Metadata = {
  title: "Lifestyle & Culture | Satya Kabir Technologies — Work, Life & Innovation",
  description:
    "Discover life at Satyakabir Technologies. Founded with a vision to eliminate operational bottlenecks, our Bhopal headquarters houses world-class engineers, architects, and designers.",
};

export default function LifestylePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#060913] text-white selection:bg-blue-600 selection:text-white">
      {/* SECTION 01: Hero Section with Breadcrumb & 'Who we are' Card */}
      <LifestyleHeroSection />

      {/* SECTION 02: Our Branding Infinite Marquee Animation Section */}
      <LifestyleBrandingMarqueeSection />

      {/* SECTION 03: Engineering Core & Runtime Telemetry Section */}
      <LifestyleEngineeringSection />

      {/* SECTION 04: Trust & Governance Certifications Section */}
      <LifestyleCertificationsSection />

      {/* SECTION 05: Alliances & Ecosystem Partners Section */}
      <LifestyleAlliancesSection />

      {/* SECTION 06: Recognition & Awards Section */}
      <LifestyleAwardsSection />

      {/* SECTION 07: Civic Impact & CSR Section */}
      <LifestyleCSRSection />

      {/* SECTION 08: Final Ready To Discuss CTA Banner */}
      <LifestyleCTASection />
    </main>
  );
}
