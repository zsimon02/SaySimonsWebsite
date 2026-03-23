import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { featureCards, journeySteps } from "@/lib/site";

const outcomes = [
  "Express yourself clearly",
  "Understand compatibility faster",
  "Have better conversations",
  "Move toward real dates more intentionally",
] as const;

export const metadata: Metadata = {
  title: "Product",
};

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="Product"
        title="A dating app built to create clarity across the whole journey."
        description="SaySimons helps people express themselves better, understand compatibility sooner, and move through dating with more intention from setup to first date."
        supporting={
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="rounded-[1.6rem] border border-[#dbe5f0] bg-white/82 px-5 py-4 text-base font-medium text-foreground shadow-[0_16px_40px_-32px_rgba(79,111,149,0.32)]"
              >
                {outcome}
              </div>
            ))}
          </div>
        }
      />

      <section className="section-shell py-10">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((feature) => (
            <Reveal key={feature.title} className="h-full">
              <div className="h-full rounded-[2rem] border border-[#dbe5f0] bg-white/84 p-6 shadow-[0_18px_40px_-34px_rgba(79,111,149,0.35)]">
                <h2 className="headline-display text-3xl font-semibold text-foreground">
                  {feature.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 rounded-[2.25rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(239,246,255,0.72))] px-6 py-8 shadow-[0_30px_80px_-42px_rgba(79,111,149,0.3)] sm:px-10 sm:py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <span className="eyebrow">How it works</span>
              <h2 className="headline-display mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
                From better setup to better dates.
              </h2>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                Every phase of the product is designed to reduce the behaviors
                that make dating apps exhausting: surface-level profiles, endless
                small talk, ghosting caused by ambiguity, and misaligned
                expectations.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {journeySteps.map((step) => (
              <Reveal key={step.step}>
                <div className="rounded-[1.75rem] border border-[#dbe5f0] bg-white/82 p-5 shadow-[0_16px_40px_-32px_rgba(79,111,149,0.32)]">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 pt-4">
        <div className="glass-panel rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="headline-display max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
            The point is not more app time. The point is a better connection.
          </h2>
          <div className="mt-8">
            <Button asChild>
              <Link href="/join">Join the Waitlist</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
