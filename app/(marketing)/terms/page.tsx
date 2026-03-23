import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "These placeholder Terms of Service describe the structure SaySimons expects to use for the public website and future product. They are provided as a temporary draft framework and should be replaced with finalized legal language before launch.",
  },
  {
    title: "2. Use of the Website",
    body: "Visitors may browse the SaySimons website, submit interest through the waitlist, and contact the company for lawful purposes only. You agree not to misuse the site, interfere with its operation, or submit false or misleading information.",
  },
  {
    title: "3. Waitlist and Early Access",
    body: "Joining the waitlist does not guarantee access to the product, a launch date, or any particular feature set. SaySimons may determine the timing and availability of early access at its sole discretion.",
  },
  {
    title: "4. Intellectual Property",
    body: "The website design, branding, copy, logos, and product concepts displayed on this site are the property of SaySimons unless otherwise noted. Temporary placeholder assets remain subject to replacement as the brand evolves.",
  },
  {
    title: "5. Product Changes",
    body: "Because SaySimons is in an early stage, product features, policies, pricing, and availability may change over time. Information on this site is intended to reflect current direction, not an unchangeable product commitment.",
  },
  {
    title: "6. Disclaimer and Limitation",
    body: "This site and its placeholder content are provided on an as-is basis. Final legal terms will include the appropriate disclaimers, limitation of liability language, and any jurisdiction-specific provisions required before launch.",
  },
  {
    title: "7. Contact",
    body: "Questions about these placeholder Terms of Service can be sent to hello@saysimons.com. This page should be reviewed and replaced with finalized legal language before launch.",
  },
] as const;

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Terms placeholder."
        description="Last updated March 23, 2026. This page provides structured placeholder content until final legal language is prepared."
      />

      <section className="section-shell pb-20 pt-6">
        <div className="glass-panel rounded-[2rem] px-6 py-8 sm:px-10">
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground">
                  {section.title}
                </h2>
                <p className="text-base leading-7 text-muted-foreground">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
