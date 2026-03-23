import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PhoneMockup } from "@/components/marketing/phone-mockup";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-shell grid gap-14 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="max-w-2xl space-y-7">
        <span className="eyebrow">Dating with more clarity</span>
        <div className="space-y-6">
          <h1 className="headline-display text-balance text-5xl font-semibold leading-none tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Stop guessing. Start connecting.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
            A dating app designed to remove ambiguity and help you build real,
            personality-driven connections.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
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

        <div className="grid gap-4 pt-4 text-sm text-muted-foreground sm:grid-cols-3">
          <div className="rounded-[1.4rem] border border-[#dbe5f0] bg-white/80 px-4 py-4 shadow-[0_16px_40px_-30px_rgba(79,111,149,0.38)]">
            Better profiles
          </div>
          <div className="rounded-[1.4rem] border border-[#dbe5f0] bg-[#f1f7ff] px-4 py-4 shadow-[0_16px_40px_-30px_rgba(79,111,149,0.38)]">
            Better conversations
          </div>
          <div className="rounded-[1.4rem] border border-[#ffe0c0] bg-[#fff5ea] px-4 py-4 shadow-[0_16px_40px_-30px_rgba(149,103,52,0.28)]">
            Better real-world dates
          </div>
        </div>
      </div>

      <div className="lg:justify-self-end">
        <PhoneMockup />
      </div>
    </section>
  );
}
