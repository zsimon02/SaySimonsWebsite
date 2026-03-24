import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="section-shell relative flex min-h-[calc(100svh-4.5rem)] items-center justify-center py-16 sm:py-20">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[12%] h-52 bg-[radial-gradient(circle,rgba(126,176,235,0.18),transparent_62%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-[18%] bottom-[10%] h-44 bg-[radial-gradient(circle,rgba(239,139,58,0.12),transparent_68%)] blur-3xl"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <span className="eyebrow justify-center before:hidden">
          Dating with more clarity
        </span>
        <div className="mt-6 space-y-5">
          <h1 className="headline-display max-w-[14ch] text-balance text-[3.75rem] font-semibold leading-[0.92] tracking-tight text-foreground sm:text-[5rem] lg:text-[6.4rem]">
            Stop guessing. Start connecting.
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground sm:text-[1.2rem]">
            A dating app built to remove ambiguity, so you can focus on real connection.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 pt-8 sm:flex-row sm:justify-center sm:pt-10">
          <Button asChild size="lg">
            <Link href="/join">
              Join the Waitlist
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="#from-profile-to-first-date">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
