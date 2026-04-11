import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";

const beliefs = [
  {
    title: "Dating apps should reduce confusion, not create it.",
    description:
      "They should help people understand interest, intent, and compatibility early\u2014so they can move forward with confidence.",
  },
  {
    title: "Profiles should make people easier to understand:",
    description:
      "When that happens, conversations start with substance.",
  },
  {
    title: "Connection is the goal. Time spent on the app isn't.",
    description:
      "We're not building for endless browsing\u2014we're building for clearer conversations and better real-world dates.",
  },
] as const;

const principles = [
  "Clarity over confusion",
  "Intentionality over volume",
  "Depth over shallow validation",
  "Supportive technology over performative AI",
] as const;

export const metadata: Metadata = {
  title: "Mission",
};

export default function MissionPage() {
  return (
    <div className="mission-gradient-flow">
      <PageHero
        eyebrow="Mission"
        title="Why SaySimons exists."
        description="We believe dating apps are failing people because they do not help them understand each other. SaySimons is our answer to that problem."
        centered
      />

      <section className="section-shell py-8">
        <div className="grid gap-5 lg:grid-cols-3">
          {beliefs.map((belief) => (
            <Reveal key={belief.title} className="h-full">
              <div className="h-full rounded-[2rem] border border-[#dbe5f0] bg-white/88 p-6 shadow-[0_20px_48px_-40px_rgba(79,111,149,0.24)]">
                <h2 className="headline-display text-[2rem] font-semibold leading-tight text-foreground">
                  {belief.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {belief.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-10 border-t border-[rgba(128,149,173,0.18)] pt-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14">
          <Reveal>
            <div className="space-y-4">
              <span className="eyebrow">What we stand for</span>
              <h2 className="headline-display text-4xl font-semibold text-foreground sm:text-5xl">
                A dating experience built around understanding.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-[1.02rem]">
                SaySimons is for people who are intentional about dating and want
                something real, but feel lost navigating the ambiguity of modern
                dating apps.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {principles.map((principle) => (
              <Reveal key={principle}>
                <div className="rounded-[1.35rem] border border-[#dbe5f0] bg-white/86 px-5 py-4 text-base font-medium text-foreground shadow-[0_16px_40px_-36px_rgba(79,111,149,0.2)]">
                  {principle}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
