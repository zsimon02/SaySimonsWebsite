import type { Metadata } from "next";

import { DifferenceSection } from "@/components/marketing/home/difference-section";
import { FinalCtaSection } from "@/components/marketing/home/final-cta-section";
import { FounderPreviewSection } from "@/components/marketing/home/founder-preview-section";
import { HeroSection } from "@/components/marketing/home/hero-section";
import { JourneySection } from "@/components/marketing/home/journey-section";
import { ProblemSection } from "@/components/marketing/home/problem-section";
import { TestimonialsSection } from "@/components/marketing/home/testimonials-section";
import { TrustSection } from "@/components/marketing/home/trust-section";

export const metadata: Metadata = {
  title: "Stop guessing. Start connecting.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <DifferenceSection />
      <TrustSection />
      <JourneySection />
      <TestimonialsSection />
      <FounderPreviewSection />
      <FinalCtaSection />
    </>
  );
}
