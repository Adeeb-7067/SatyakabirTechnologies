import React from "react";
import type { Metadata } from "next";
import AboutHeroSection from "../components/AboutHeroSection";
import AboutIndustriesSection from "./AboutIndustriesSection";
import AboutWhyChooseUsSection from "./AboutWhyChooseUsSection";
import AboutCompanyStandardsSection from "./AboutCompanyStandardsSection";
import AboutReadyToDiscussSection from "./AboutReadyToDiscussSection";
import AboutLocationsGallerySection from "../components/AboutLocationsGallerySection";
import AboutMilestonesSection from "../components/AboutMilestonesSection";
import AboutKeepReadingSection from "../components/AboutKeepReadingSection";

export const metadata: Metadata = {
  title: "About Us | Satya Kabir Technologies — Enterprise Engineering & Global Hubs",
  description:
    "Satyakabir Technologies builds AI, cloud, and product platforms from Bhopal — principal-led pods that transfer ownership, not dependency.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#0b0f17] text-white selection:bg-blue-600 selection:text-white">
      {/* SECTION 01: Global Operations & Core Pillars */}
      <AboutHeroSection />

      {/* SECTION 03: 5 Global Engineering Hubs Gallery */}
      
      <AboutLocationsGallerySection />

      {/* SECTION 04: Overview, Milestones & Engineering Philosophy */}
      <AboutMilestonesSection />

      {/* SECTION 05: More About Us - Keep Reading (Interactive Tabs & Globe) */}
      <AboutKeepReadingSection />

      {/* SECTION 06: Industries We Serve */}
      <AboutIndustriesSection />

      {/* SECTION 07: Why Choose Us */}
      <AboutWhyChooseUsSection />

      {/* SECTION 08: Company Standards */}
      <AboutCompanyStandardsSection />

      {/* SECTION 09: Ready To Discuss CTA */}
      <AboutReadyToDiscussSection />
    </main>
  );
}
