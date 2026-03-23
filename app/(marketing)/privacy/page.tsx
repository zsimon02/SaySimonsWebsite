import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";

const sections = [
  {
    title: "1. Overview",
    body: "This placeholder Privacy Policy explains the structure SaySimons intends to use once the product is live. It is designed to be replaced with final legal language before launch. Until then, it reflects the categories of information we expect to handle and the principles we intend to follow.",
  },
  {
    title: "2. Information We Collect",
    body: "We may collect information you provide directly, such as your name, email address, waitlist details, messages you send us, and profile information once the app is available. We may also collect technical information such as device type, browser information, and usage signals needed to operate and improve the service.",
  },
  {
    title: "3. How We Use Information",
    body: "We expect to use information to provide and improve the SaySimons experience, communicate with users, support matchmaking and conversation features, protect the platform, and understand how the product is performing. We do not intend to use personal information in ways that conflict with the brand promise of clarity, intentionality, and respect.",
  },
  {
    title: "4. AI Features",
    body: "SaySimons plans to use AI to support clarity and insight, not to replace authentic communication. Final production disclosures will explain exactly what AI features exist, what data they rely on, and how users can understand or control those experiences.",
  },
  {
    title: "5. Sharing and Security",
    body: "We may share data with service providers who help us operate the product, subject to appropriate safeguards. We also expect to use reasonable technical and organizational measures to protect personal information, though no system can be guaranteed to be completely secure.",
  },
  {
    title: "6. Your Choices",
    body: "When the live product launches, users will receive clear information about how to access, update, or delete relevant personal data, manage communications, and understand the controls available to them.",
  },
  {
    title: "7. Contact",
    body: "Questions about this placeholder policy can be directed to hello@saysimons.com. This page should be reviewed and replaced with finalized legal language before public launch.",
  },
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy placeholder."
        description="Last updated March 23, 2026. This page is a polished placeholder and should be replaced with finalized legal language before launch."
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
