import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";

const beliefs = [
  {
    title: "Dating apps should reduce confusion, not create more of it.",
    description:
      "The right product should help people understand interest, intent, and compatibility earlier so they can move with more confidence.",
  },
  {
    title: "Profiles should make people more legible.",
    description:
      "When someone is easier to understand, conversations start with substance instead of performance.",
  },
  {
    title: "Connection is the goal. App time is not.",
    description:
      "We are not building for endless browsing. We are building for clearer conversations and better real-world dates.",
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
    <>
      <PageHero
        eyebrow="Mission"
        title="Why SaySimons exists."
        description="We believe dating apps are failing people because they do not help them understand each other. SaySimons is our answer to that problem."
        supporting={
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[#dbe5f0] bg-white/82 p-5 shadow-[0_16px_40px_-32px_rgba(79,111,149,0.32)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Our opinion
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Dating apps are broken because they optimize for engagement, not
                meaningful relationships.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[#ffe0c0] bg-[#fff5ea] p-5 shadow-[0_16px_40px_-32px_rgba(149,103,52,0.24)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                Our promise
              </p>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                You&apos;ll understand your matches better and be understood yourself.
              </p>
            </div>
          </div>
        }
      />

      <section className="section-shell py-10">
        <div className="grid gap-5 lg:grid-cols-3">
          {beliefs.map((belief) => (
            <Reveal key={belief.title} className="h-full">
              <div className="h-full rounded-[2rem] border border-[#dbe5f0] bg-white/84 p-6 shadow-[0_18px_40px_-34px_rgba(79,111,149,0.35)]">
                <h2 className="headline-display text-3xl font-semibold text-foreground">
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
        <div className="grid gap-8 rounded-[2.25rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(239,246,255,0.72))] px-6 py-8 shadow-[0_30px_80px_-42px_rgba(79,111,149,0.3)] sm:px-10 sm:py-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <Reveal>
            <div>
              <span className="eyebrow">What we stand for</span>
              <h2 className="headline-display mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
                A dating experience built around understanding.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                SaySimons is for people who are intentional about dating and want
                something real, but feel lost navigating the ambiguity of modern
                dating apps. It is not for endless swiping, casual validation, or
                hookup-first behavior.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-3">
            {principles.map((principle) => (
              <Reveal key={principle}>
                <div className="rounded-[1.6rem] border border-[#dbe5f0] bg-white/82 px-5 py-4 text-base font-medium text-foreground">
                  {principle}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 pt-4">
        <div className="glass-panel rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-12">
          <p className="headline-display max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
            SaySimons helps you stop guessing and start actually connecting.
          </p>
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
