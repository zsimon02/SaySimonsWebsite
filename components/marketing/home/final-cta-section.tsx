import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <section className="section-shell section-rule py-24 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Join the waitlist</span>
        <h2 className="headline-display mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
          Find something real. Join SaySimons.
        </h2>
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
