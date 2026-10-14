import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import AboutSection from "./components/AboutSection";
import IndustriesSection from "./components/IndustriesSection";
import DisciplinesSection from "./components/DisciplinesSection";
import PlatformsSection from "./components/PlatformsSection";
import ShowreelSection from "./components/ShowreelSection";
import PopularIndustriesSection from "./components/PopularIndustriesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import EngineeringRoadmapSection from "./components/EngineeringRoadmapSection";
import ResponsiveShowcaseSection from "./components/ResponsiveShowcaseSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactCtaSection from "./components/ContactCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#080d1a] text-white selection:bg-blue-600 selection:text-white">
      {/* Hero Container with Deep Navy Gradient & Lighting */}
      <div className="relative w-full flex-1 flex flex-col justify-between bg-gradient-to-b from-[#070b16] via-[#091126] to-[#0b132b]">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="flex-1 flex items-center">
          <HeroSection />
        </div>
      </div>

      {/* Stats Section Bar */}
      <StatsSection />

      {/* About Us / In-house Engineering & Compliance Section */}
      <AboutSection />

      {/* Domain Expertise / Five Focused Industries Section */}
      <IndustriesSection />

      {/* Six Engineering Disciplines Section */}
      <DisciplinesSection />

      {/* SaaS Products / Ready-Made Platforms Section */}
      <PlatformsSection />

      {/* Video Showreel / Platform Showcase Section */}
      <ShowreelSection />

      {/* Most Popular Industries Showcase Section */}
      <PopularIndustriesSection />

      {/* Advantages / Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 5-Step Engineering Roadmap Section */}
      <EngineeringRoadmapSection />

      {/* Omnichannel Responsive Architecture & Conversion Rate Section */}
      <ResponsiveShowcaseSection />

      {/* Social Proof / What Our Clients Say Carousel Section */}
      <TestimonialsSection />

      {/* Direct Intake & Interactive Archives 2x2 Call-To-Action Section */}
      <ContactCtaSection />
    </main>
  );
}
