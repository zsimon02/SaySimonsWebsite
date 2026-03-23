import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const painPoints = [
  "Shallow profiles make everyone harder to understand.",
  "Swipe-first design trains people to browse, not connect.",
  "Ambiguity creates ghosting, awkwardness, and mismatched expectations.",
  "Too many conversations go nowhere because they start with too little substance.",
] as const;

export function ProblemSection() {
  return (
    <section id="the-problem" className="section-shell section-rule py-24 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="Why dating feels broken"
            title="Most dating apps are built for engagement, not understanding."
            description="They leave people guessing about interest, intent, and compatibility. The result is swipe fatigue, stalled chats, and a lot of confusion."
          />
        </Reveal>

        <div className="divide-y divide-[rgba(128,149,173,0.18)] border-y border-[rgba(128,149,173,0.18)]">
          {painPoints.map((point, index) => (
            <Reveal key={point}>
              <div className="grid gap-3 py-5 sm:grid-cols-[auto_1fr] sm:gap-5">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  0{index + 1}
                </span>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-[1.02rem]">
                  {point}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
