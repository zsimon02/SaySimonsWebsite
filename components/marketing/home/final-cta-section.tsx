import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="section-shell py-20">
      <div className="glass-panel rounded-[2.4rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(239,246,255,0.88))] px-6 py-10 text-center sm:px-10 sm:py-14">
        <span className="eyebrow">Join the waitlist</span>
        <h2 className="headline-display mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold text-foreground sm:text-5xl">
          Find something real. Join SaySimons.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          If you&apos;re tired of shallow matching and unclear intent, you&apos;re exactly
          who we&apos;re building for.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="/join">
              Join the Waitlist
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
