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
    <div
      id="the-problem"
      className="glass-panel relative isolate overflow-hidden rounded-[2rem] p-7 sm:p-8 lg:p-10"
    >
      <div className="absolute bottom-[-5rem] left-[-4rem] -z-10 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(239,139,58,0.16),transparent_68%)] blur-2xl" />
      <div className="space-y-8">
        <Reveal className="space-y-6">
          <span className="inline-flex rounded-full border border-[rgba(239,139,58,0.2)] bg-[rgba(239,139,58,0.08)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#b96a2a]">
            The problem
          </span>
          <SectionHeading
            eyebrow="Why dating feels broken"
            title="Most dating apps are built for engagement, not understanding."
            description="They leave people guessing about interest, intent, and compatibility. The result is swipe fatigue, stalled chats, and a lot of confusion."
          />
        </Reveal>

        <div className="grid gap-3 sm:gap-4">
          {painPoints.map((point, index) => (
            <Reveal key={point} className="h-full">
              <div className="grid h-full gap-4 rounded-[1.45rem] border border-[rgba(128,149,173,0.16)] bg-white/68 px-5 py-5 shadow-[0_18px_44px_-38px_rgba(79,111,149,0.28)] sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-[rgba(239,139,58,0.12)] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#b96a2a]">
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
    </div>
  );
}
