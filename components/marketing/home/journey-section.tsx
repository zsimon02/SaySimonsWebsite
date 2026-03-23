import { ArrowDownRight } from "lucide-react";

import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { journeySteps } from "@/lib/site";

export function JourneySection() {
  return (
    <section className="section-shell py-20">
      <Reveal>
        <SectionHeading
          eyebrow="The product journey"
          title="Support across the full dating experience."
          description="SaySimons is built to help from the first profile decision to the moment two people are ready to meet."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {journeySteps.map((step) => (
          <Reveal key={step.step} className="h-full">
            <div className="flex h-full flex-col rounded-[1.9rem] border border-[#dbe5f0] bg-white/82 p-6 shadow-[0_18px_40px_-34px_rgba(79,111,149,0.34)]">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {step.step}
                </span>
                <ArrowDownRight className="size-4 text-muted-foreground" />
              </div>
              <h3 className="mt-8 text-2xl font-semibold text-foreground">
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
