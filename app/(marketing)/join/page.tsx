import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";
import { WaitlistForm } from "@/components/marketing/waitlist-form";
import { Reveal } from "@/components/marketing/reveal";

const expectations = [
  "Launch progress updates",
  "Early access announcements",
  "Occasional feedback invitations",
] as const;

export const metadata: Metadata = {
  title: "Join the Waitlist",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join"
        title="Get early access to SaySimons."
        description="We're building for people who want dating to feel more intentional, more understandable, and more human."
        supporting={
          <div className="grid gap-4 sm:grid-cols-3">
            {expectations.map((item) => (
              <div
                key={item}
                className="rounded-[1.6rem] border border-[#dbe5f0] bg-white/82 px-5 py-4 text-base font-medium text-foreground shadow-[0_16px_40px_-32px_rgba(79,111,149,0.32)]"
              >
                {item}
              </div>
            ))}
          </div>
        }
      />

      <section className="section-shell pb-20 pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="space-y-4 rounded-[2rem] border border-[#dbe5f0] bg-white/84 p-6 shadow-[0_20px_48px_-38px_rgba(79,111,149,0.34)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                What to expect
              </p>
              <h2 className="headline-display text-4xl font-semibold text-foreground">
                A thoughtful early community, not a mass-signup blast.
              </h2>
              <p className="text-base leading-7 text-muted-foreground">
                Joining the waitlist helps us build with the right people in
                mind. We&apos;ll use it to shape launch timing, early access, and
                research with people who want something real.
              </p>
              <div className="rounded-[1.6rem] border border-[#ffe0c0] bg-[#fff5ea] p-5">
                <p className="text-sm leading-7 text-muted-foreground">
                  Right now, SaySimons is in the early build phase. That means
                  the waitlist is both a launch list and a signal of who
                  resonates most strongly with the product vision.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <WaitlistForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
