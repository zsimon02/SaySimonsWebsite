import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const heroHighlights = [
  {
    label: "Clearer profiles",
    description: "Express who you actually are—so people understand you from the start.",
  },
  {
    label: "Stronger conversations",
    description: "Skip the small talk and build real momentum from the first message.",
  },
  {
    label: "Real-world connection",
    description: "Move naturally from matching to making plans that actually happen.",
  },
] as const;

export function HeroSection() {
  return (
    <section className="section-shell grid gap-14 pb-24 pt-16 sm:pt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-center lg:gap-[4.5rem] lg:pb-28 lg:pt-28">
      <div className="max-w-2xl space-y-8">
        <span className="eyebrow">Dating with more clarity</span>
        <div className="space-y-5">
          <h1 className="headline-display max-w-[20ch] text-balance text-[3.35rem] font-semibold leading-[0.94] tracking-tight text-foreground sm:text-6xl lg:text-[5.15rem]">
            Stop guessing. Start connecting.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-[1.2rem]">
            A dating app built to remove ambiguity, so you can focus on real connection.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="/join">
              Join the Waitlist
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#the-problem">Learn More</Link>
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-x-8 top-12 h-40 rounded-full bg-[radial-gradient(circle,rgba(239,139,58,0.12),transparent_70%)] blur-3xl" />
        <div className="relative mx-auto max-w-md space-y-10 pl-6 lg:ml-auto">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-0 top-0 w-px bg-[rgba(128,149,173,0.22)]"
          />
          <div className="space-y-4">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              From profile to first date
            </p>

            <p className="headline-display max-w-[14ch] text-3xl font-semibold leading-tight text-foreground sm:text-[2.5rem]">
              A clearer path to something real.
            </p>

            <p className="max-w-sm text-base leading-7 text-muted-foreground">
              SaySimons brings clarity to how you present yourself, connect with others, and move from conversation into real life.
            </p>
          </div>

          <div className="divide-y divide-[rgba(128,149,173,0.18)] border-y border-[rgba(128,149,173,0.18)]">
            {heroHighlights.map((item, index) => (
              <div
                key={item.label}
                className="grid gap-3 py-5 sm:grid-cols-[auto_1fr] sm:gap-5"
              >
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  0{index + 1}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-foreground">{item.label}</h3>
                  <p className="text-sm leading-6 text-muted-foreground sm:text-[0.96rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
