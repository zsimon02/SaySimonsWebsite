import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { trustPillars } from "@/lib/site";

export function TrustSection() {
  return (
    <section className="section-shell py-20">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Built with psychology and AI"
            title="Trust starts with clear thinking, not inflated claims."
            description="We do not have a stack of press logos yet, and we are not pretending to. Trust here comes from the people building SaySimons, the philosophy behind it, and the discipline to solve the right problem."
          />
        </Reveal>

        <div className="grid gap-4">
          {trustPillars.map((pillar) => (
            <Reveal key={pillar.title}>
              <div className="rounded-[1.9rem] border border-[#dbe5f0] bg-white/80 px-6 py-6 shadow-[0_18px_40px_-34px_rgba(79,111,149,0.35)]">
                <h3 className="text-xl font-semibold text-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
