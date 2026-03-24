import type { Metadata } from "next";

import { DifferenceSection } from "@/components/marketing/home/difference-section";
import { FinalCtaSection } from "@/components/marketing/home/final-cta-section";
import { HeroSection } from "@/components/marketing/home/hero-section";
import { ProfileToFirstDateSection } from "@/components/marketing/home/profile-to-first-date-section";
import { ProblemSection } from "@/components/marketing/home/problem-section";
import { TestimonialsSection } from "@/components/marketing/home/testimonials-section";
import { TrustSection } from "@/components/marketing/home/trust-section";

export const metadata: Metadata = {
  title: "Stop guessing. Start connecting.",
};

export default function HomePage() {
  return (
    <div className="home-gradient-flow">
      <HeroSection />
      <section className="section-shell py-24 sm:py-28">
        <div className="grid gap-6 xl:grid-cols-2 xl:gap-7">
          <ProfileToFirstDateSection />
          <ProblemSection />
        </div>
      </section>
      <DifferenceSection />
      <TrustSection />
      <TestimonialsSection />
      <FinalCtaSection />
    </div>
  );
}
