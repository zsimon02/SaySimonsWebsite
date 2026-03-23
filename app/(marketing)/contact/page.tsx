import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { siteConfig } from "@/lib/site";

const contactOptions = [
  {
    title: "General inquiries",
    body: siteConfig.email,
    detail: "Questions about the product, brand, or early access.",
    href: `mailto:${siteConfig.email}`,
  },
  {
    title: "Founding story",
    body: "Mission, product thinking, and why we're building this now.",
    detail: "A good fit for interviews, founder conversations, or early partners.",
    href: "/founders",
  },
  {
    title: "Join the waitlist",
    body: "Be first to hear about launch and early access.",
    detail: "If you want to use SaySimons, the waitlist is the best next step.",
    href: "/join",
  },
] as const;

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach out."
        description="We're early, thoughtful, and focused. If you want to talk about the product or what we're building, we'd love to hear from you."
      />

      <section className="section-shell pb-20 pt-6">
        <div className="grid gap-5 lg:grid-cols-3">
          {contactOptions.map((option) => (
            <Reveal key={option.title} className="h-full">
              <a
                href={option.href}
                className="flex h-full flex-col rounded-[2rem] border border-[#dbe5f0] bg-white/82 p-6 shadow-[0_18px_40px_-34px_rgba(79,111,149,0.35)] hover:border-[#ffd8b5] hover:bg-[#fff5ea]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {option.title}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-foreground">
                  {option.body}
                </h2>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {option.detail}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
