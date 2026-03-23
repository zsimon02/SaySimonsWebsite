import type { Metadata } from "next";

import { Reveal } from "@/components/marketing/reveal";
import { WaitlistForm } from "@/components/marketing/waitlist-form";

const promises = [
  "Early access when openings start",
  "Clear launch updates",
  "Occasional product feedback requests",
] as const;

export const metadata: Metadata = {
  title: "Join the Waitlist",
};

export default function JoinPage() {
  return (
    <section className="section-shell pb-24 pt-20 sm:pt-24">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14">
        <Reveal>
          <div className="space-y-6 pt-2">
            <p className="eyebrow">Join</p>
            <div className="space-y-4">
              <h1 className="headline-display max-w-[10ch] text-balance text-[3.35rem] font-semibold leading-[0.94] tracking-tight text-foreground sm:text-[4.35rem]">
                Join the waitlist.
              </h1>
              <p className="max-w-[34rem] text-base leading-7 text-muted-foreground sm:text-[1.02rem]">
                SaySimons is being built for people who want dating to feel more
                intentional, more understandable, and less ambiguous.
              </p>
            </div>

            <div className="space-y-4 border-t border-[rgba(128,149,173,0.18)] pt-6">
              {promises.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-foreground sm:text-base">
                  <span className="size-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
