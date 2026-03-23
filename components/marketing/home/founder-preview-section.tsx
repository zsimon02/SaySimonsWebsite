import Link from "next/link";

import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { founders } from "@/lib/site";

export function FounderPreviewSection() {
  return (
    <section className="section-shell section-rule py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Meet the team"
            title="Built on psychology and technology."
            description="SaySimons is being built by people who care about how relationships form and ways technology should support it."
            action={
              <div>
                <Button asChild variant="secondary">
                  <Link href="/founders">Meet the founders</Link>
                </Button>
              </div>
            }
          />
        </Reveal>

        <div className="grid gap-4">
          {founders.map((founder) => (
            <Reveal key={founder.name}>
              <div className="rounded-[1.35rem] border border-[rgba(239,139,58,0.18)] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,248,241,0.72))] p-6 shadow-[0_20px_44px_-36px_rgba(118,92,62,0.22)]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {founder.emphasis}
                </p>
                <h3 className="mt-4 text-[1.8rem] font-semibold leading-tight text-foreground">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{founder.role}</p>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
