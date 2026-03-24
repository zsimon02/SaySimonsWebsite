import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";

const highlights = [
  {
    title: "Clearer profiles",
    description: "Express who you actually are—so people understand you from the start.",
  },
  {
    title: "Stronger conversations",
    description: "Skip the small talk and build real momentum from the first message.",
  },
  {
    title: "Real-world connection",
    description: "Move naturally from matching to making plans that actually happen.",
  },
] as const;

export function ProfileToFirstDateSection() {
  return (
    <div
      id="from-profile-to-first-date"
      className="glass-panel relative isolate overflow-hidden rounded-[2rem] p-7 sm:p-8 lg:p-10"
    >
      <div className="absolute inset-x-auto right-[-4.5rem] top-[-4.5rem] -z-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(126,176,235,0.18),transparent_68%)] blur-2xl" />
      <div className="space-y-8">
        <Reveal className="space-y-6">
          <span className="inline-flex rounded-full border border-[rgba(126,176,235,0.22)] bg-[rgba(126,176,235,0.08)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#58779c]">
            Better flow
          </span>
          <SectionHeading
            eyebrow="From profile to first date"
            title="A clearer path to something real."
            description="SaySimons brings clarity to how you present yourself, connect with others, and move from conversation into real life."
          />
        </Reveal>

        <div className="grid gap-3 sm:gap-4">
          {highlights.map((item, index) => (
            <Reveal key={item.title} className="h-full">
              <div className="grid h-full gap-4 rounded-[1.45rem] border border-[rgba(128,149,173,0.16)] bg-white/72 px-5 py-5 shadow-[0_18px_44px_-38px_rgba(79,111,149,0.32)] sm:grid-cols-[auto_1fr] sm:items-start sm:gap-5">
                <span className="flex size-10 items-center justify-center rounded-full bg-[rgba(126,176,235,0.14)] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#58779c]">
                  0{index + 1}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-[1.02rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
