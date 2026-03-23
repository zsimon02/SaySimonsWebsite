import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { trustPillars } from "@/lib/site";

export function TrustSection() {
  return (
    <section className="section-shell section-rule py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Built with psychology and AI"
            title="Trust starts with clear thinking, not inflated claims."
            description="We do not have a stack of press logos yet, and we are not pretending to. Trust here comes from the people building SaySimons, the philosophy behind it, and the discipline to solve the right problem."
          />
        </Reveal>

        <div className="divide-y divide-[rgba(128,149,173,0.18)] border-y border-[rgba(128,149,173,0.18)]">
          {trustPillars.map((pillar, index) => (
            <Reveal key={pillar.title}>
              <div className="grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-5">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  0{index + 1}
                </span>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">{pillar.title}</h3>
                  <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-[1.02rem]">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
