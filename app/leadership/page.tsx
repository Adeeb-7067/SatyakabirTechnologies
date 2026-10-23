import React from "react";
import type { Metadata } from "next";
import LeadershipHeroSection from "./LeadershipHeroSection";
import LeadershipTeamSection from "./LeadershipTeamSection";
import LeadershipVisionSection from "./LeadershipVisionSection";
import LeadershipCultureSection from "./LeadershipCultureSection";
import LeadershipLifestyleSection from "./LeadershipLifestyleSection";
import LeadershipPillarsSection from "./LeadershipPillarsSection";
import LeadershipExecutionSection from "./LeadershipExecutionSection";
import LeadershipCTASection from "./LeadershipCTASection";

export const metadata: Metadata = {
  title: "Leadership & Team | Satya Kabir Technologies — Engineering Digital Excellence",
  description:
    "Meet the minds behind engineering digital excellence at Satyakabir Technologies. Our engineering teams, product designers, and strategic thinkers drive robust global platforms.",
};

export default function LeadershipPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0a0d14] text-white selection:bg-blue-600 selection:text-white">
      {/* SECTION 01: Hero Section with Breadcrumb, Badge & CTAs */}
      <LeadershipHeroSection />

      {/* SECTION 02: Our Team - The Engineering Force Behind Your Enterprise */}
      <LeadershipTeamSection />

      {/* SECTION 03: Leadership - Guiding the Vision for Standard Digital Solutions */}
      <LeadershipVisionSection />

      {/* SECTION 04: Culture - Built on Autonomy, Innovation & Learning */}
      <LeadershipCultureSection />

      {/* SECTION 05: Lifestyle - Work Hard. Live Well. Grow Faster */}
      <LeadershipLifestyleSection />

      {/* SECTION 06: Our Engineering Pillars */}
      <LeadershipPillarsSection />

      {/* SECTION 07: How We Execute */}
      <LeadershipExecutionSection />

      {/* SECTION 08: Ready to Discuss CTA */}
      <LeadershipCTASection />
    </main>
  );
}
