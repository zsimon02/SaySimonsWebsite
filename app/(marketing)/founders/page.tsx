import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { Button } from "@/components/ui/button";
import { founders } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founders",
};

export default function FoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Founders"
        title="Built by a team combining behavioral insight and technical execution."
        description="We are building SaySimons because modern dating apps often leave people with more uncertainty, not more understanding."
        supporting={
          <p className="max-w-3xl text-base leading-7 text-muted-foreground">
            Our perspective comes from psychology, human behavior, and AI
            systems designed to solve real problems. Together, that gives us a
            clear point of view on what dating technology should actually do for
            people.
          </p>
        }
      />

      <section className="section-shell py-10">
        <div className="grid gap-5 lg:grid-cols-2">
          {founders.map((founder) => (
            <Reveal key={founder.name} className="h-full">
              <div className="h-full rounded-[2.15rem] border border-[#dbe5f0] bg-white/84 p-7 shadow-[0_18px_40px_-34px_rgba(79,111,149,0.35)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {founder.emphasis}
                </p>
                <h2 className="headline-display mt-4 text-4xl font-semibold text-foreground">
                  {founder.name}
                </h2>
                <p className="mt-2 text-base font-medium text-foreground/80">
                  {founder.role}
                </p>
                <p className="mt-5 text-base leading-7 text-muted-foreground">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-20">
        <div className="grid gap-8 rounded-[2.25rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(239,246,255,0.72))] px-6 py-8 shadow-[0_30px_80px_-42px_rgba(79,111,149,0.3)] sm:px-10 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Why we are building this</span>
              <h2 className="headline-display mt-6 text-4xl font-semibold text-foreground sm:text-5xl">
                Dating should feel more human, more intentional, and less ambiguous.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-5 text-base leading-7 text-muted-foreground">
              <p>
                We believe dating apps are failing people because they do not
                help them understand each other. Too often, the experience is
                designed around keeping people engaged instead of helping them
                move toward something real.
              </p>
              <p>
                SaySimons is our attempt to build with a different set of
                incentives: clearer expression, better insight, stronger
                conversations, and more intentional movement toward real-world
                connection.
              </p>
              <p>
                We care about the emotional reality of modern dating, not just
                the interface around it.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell pb-20 pt-4">
        <div className="glass-panel rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="headline-display max-w-3xl text-4xl font-semibold text-foreground sm:text-5xl">
            If this vision sounds like what you have been missing, join us early.
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
