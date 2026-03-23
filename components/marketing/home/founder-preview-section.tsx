import Link from "next/link";

import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Button } from "@/components/ui/button";
import { founders } from "@/lib/site";

export function FounderPreviewSection() {
  return (
    <section className="section-shell py-20">
      <div className="grid gap-10 rounded-[2.25rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,244,232,0.72))] px-6 py-8 shadow-[0_30px_80px_-42px_rgba(118,92,62,0.24)] sm:px-10 sm:py-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Who is building it"
            title="A founding team shaped by human behavior and technical depth."
            description="SaySimons is being built by people who care deeply about how relationships form and how technology should support that, not distort it."
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
              <div className="rounded-[1.8rem] border border-[#ffe0c0] bg-white/88 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {founder.emphasis}
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{founder.role}</p>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
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
