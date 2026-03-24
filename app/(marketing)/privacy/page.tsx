import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";
import { siteConfig } from "@/lib/site";

const sections = [
  {
    title: "1. Scope",
    paragraphs: [
      "This Privacy Policy explains how SaySimons collects, uses, discloses, and safeguards personal information through the SaySimons website, including the waitlist flow and any communications you send us before the product launches.",
      "It applies to information collected through this marketing site and related pre-launch communications. If SaySimons later launches a mobile app or additional services with different data practices, we may provide supplemental notices or updated policies for those experiences.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "We collect information you choose to provide to us, including your first name, last name, email address, and any information you include when you contact us or respond to research or feedback requests.",
      "We also collect certain technical information automatically when you use the site, such as IP address, browser type, device information, pages viewed, referring URLs, and basic interaction or diagnostic data that helps us operate, secure, and improve the website.",
      "At this stage, the public website is primarily a waitlist and informational site. We do not intentionally collect payment information or detailed in-app dating profile data through this website.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: [
      "We use personal information to operate the website, process waitlist submissions, send product updates and early-access information, respond to inquiries, request research or feedback, maintain records, and understand interest in SaySimons.",
      "We also use information to secure the site, detect misuse, debug issues, comply with legal obligations, enforce our terms, and protect the rights, safety, and property of SaySimons, our users, and others.",
    ],
  },
  {
    title: "4. How We Share Information",
    paragraphs: [
      "We may share information with vendors and service providers that help us host, maintain, secure, or operate the website and related business systems. Those providers are permitted to access information only as needed to perform services for us.",
      "We may also disclose information to comply with law, respond to lawful requests, enforce agreements, protect rights and safety, or in connection with a merger, financing, acquisition, reorganization, sale of assets, or similar business transaction.",
      "We do not sell personal information submitted through this website, and we do not use the site to deliver third-party behavioral advertising.",
    ],
  },
  {
    title: "5. Legal Grounds for Processing",
    paragraphs: [
      "Where applicable law requires a legal basis for processing, we rely on one or more of the following: your consent, performance of a request you make to us, our legitimate interests in operating and improving the website and pre-launch service, and compliance with legal obligations.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "We retain personal information for as long as reasonably necessary for the purposes described in this policy, including maintaining the waitlist, communicating with interested users, meeting legal or operational requirements, resolving disputes, and enforcing agreements.",
      "If you ask us to delete your waitlist information, we will take reasonable steps to do so unless we need to retain certain data for legal, security, or recordkeeping reasons.",
    ],
  },
  {
    title: "7. Cookies, Analytics, and Similar Technologies",
    paragraphs: [
      "We and our service providers may use cookies or similar technologies that are reasonably necessary to operate the website, remember basic preferences, understand site performance, and protect against abuse.",
      "If SaySimons later adds analytics, advertising, or other optional tracking technologies that materially change this practice, we will update this policy and any related notices as required.",
    ],
  },
  {
    title: "8. AI and Automated Processing",
    paragraphs: [
      "The current waitlist site does not use automated decision-making to evaluate your eligibility for access. Joining the waitlist does not involve profiling that produces legal or similarly significant effects.",
      "SaySimons expects future products to include thoughtfully designed AI-assisted features. If those features launch, we will provide additional disclosures describing how those systems work, what information they use, and what controls are available.",
    ],
  },
  {
    title: "9. Your Choices and Rights",
    paragraphs: [
      "You may opt out of marketing or launch-update emails at any time by using an unsubscribe link, if available, or by contacting us at the email address below.",
      "Subject to applicable law, you may request access to, correction of, or deletion of personal information we hold about you. We may need to verify your identity before fulfilling a request, and some rights may be limited by law.",
    ],
  },
  {
    title: "10. Children",
    paragraphs: [
      "SaySimons is intended for adults. We do not knowingly collect personal information from anyone under 18, and the website is not directed to children. If you believe a minor has provided personal information to us, contact us so we can review and delete it if appropriate.",
    ],
  },
  {
    title: "11. International Transfers",
    paragraphs: [
      "SaySimons is based in the United States, and information collected through the website may be stored or processed in the United States or other jurisdictions where our service providers operate. Those jurisdictions may not provide the same level of data protection as your home jurisdiction.",
    ],
  },
  {
    title: "12. Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "13. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. If we make material changes, we will post the updated version here and revise the Last Updated date at the top of the page. Your continued use of the website after changes become effective indicates acceptance of the updated policy.",
    ],
  },
  {
    title: "14. Contact Us",
    paragraphs: [
      `Questions, requests, or complaints about this Privacy Policy or our data practices may be sent to ${siteConfig.email}.`,
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  const lastUpdated = "March 23, 2026";

  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description={`Last updated ${lastUpdated}. This policy applies to the SaySimons website, waitlist, and related pre-launch communications.`}
      />

      <section className="section-shell pb-20 pt-6">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#dbe5f0] bg-white/88 px-6 py-8 shadow-[0_22px_54px_-40px_rgba(79,111,149,0.24)] sm:px-10">
          <div className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.title}
                className="space-y-3 border-t border-[rgba(128,149,173,0.18)] pt-8 first:border-t-0 first:pt-0"
              >
                <h2 className="headline-display text-[1.9rem] font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-7 text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
