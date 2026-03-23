import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { journeySteps } from "@/lib/site";

export function JourneySection() {
  return (
    <section className="section-shell section-rule py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="The product journey"
          title="Support across the full dating experience."
          description="SaySimons is built to help from the first profile decision to the moment two people are ready to meet."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {journeySteps.map((step) => (
          <Reveal key={step.step} className="h-full">
            <div className="flex h-full flex-col rounded-[1.35rem] border border-[rgba(128,149,173,0.16)] bg-white/72 p-6 shadow-[0_20px_44px_-36px_rgba(79,111,149,0.24)]">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {step.step}
                </span>
                <span className="h-px flex-1 bg-[rgba(128,149,173,0.18)]" />
                <ArrowDownRight className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-7 text-[1.65rem] font-semibold leading-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
