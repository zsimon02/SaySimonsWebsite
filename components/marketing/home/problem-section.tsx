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
    <section id="the-problem" className="section-shell py-20">
      <Reveal>
        <div className="grid gap-10 rounded-[2.25rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(239,246,255,0.7))] px-6 py-8 shadow-[0_30px_80px_-42px_rgba(79,111,149,0.3)] sm:px-10 sm:py-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why dating feels broken"
            title="Most dating apps are built for engagement, not understanding."
            description="They leave people guessing about interest, intent, and compatibility. The result is swipe fatigue, stalled chats, and a lot of confusion where connection should be."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="rounded-[1.75rem] border border-[#d9e3ef] bg-white/82 p-5 text-base leading-7 text-muted-foreground"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
