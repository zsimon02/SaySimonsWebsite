import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";
import { LEGAL_LAST_UPDATED } from "@/lib/legal";
import { siteConfig } from "@/lib/site";

const sections = [
  {
    title: "1. Agreement to These Terms",
    paragraphs: [
      "These Terms of Service govern your access to and use of the SaySimons website, including the waitlist, site content, and any pre-launch communications or interactions made available through the site.",
      "By accessing or using the website, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, do not use the website.",
    ],
  },
  {
    title: "2. Eligibility",
    paragraphs: [
      "This website is intended for adults who are at least 18 years old. By using the site or joining the waitlist, you represent that you are 18 or older and legally able to enter into a binding agreement.",
    ],
  },
  {
    title: "3. Permitted Use",
    paragraphs: [
      "You may use the website only for lawful purposes and in accordance with these Terms. You agree not to misuse the website, interfere with its operation, attempt unauthorized access, scrape or harvest data at scale, introduce malicious code, or submit information that is false, infringing, unlawful, abusive, or misleading.",
      "You are responsible for the accuracy of the information you submit to SaySimons and for any activity that occurs through your interactions with the site.",
    ],
  },
  {
    title: "4. Waitlist and Early Access",
    paragraphs: [
      "Joining the waitlist expresses interest in the product but does not guarantee admission, priority, availability, launch timing, feature access, or any commercial terms.",
      "SaySimons may decide, in its sole discretion, whether to invite someone to early access, limit availability, change feature scope, delay launch, or discontinue the waitlist entirely.",
    ],
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "The website and all related content, including text, graphics, branding, logos, layouts, software, designs, and other materials, are owned by or licensed to SaySimons and are protected by intellectual property and other applicable laws.",
      "Except for the limited right to access and use the website for its intended purpose, these Terms do not grant you any license or ownership right in any SaySimons intellectual property without our prior written consent.",
    ],
  },
  {
    title: "6. Feedback and Submissions",
    paragraphs: [
      "If you send us suggestions, ideas, product feedback, or similar submissions, you grant SaySimons a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, and otherwise exploit that feedback for any lawful purpose without compensation or obligation to you.",
      "Do not send information you expect us to hold in confidence unless we have separately agreed to do so in writing.",
    ],
  },
  {
    title: "7. Third-Party Services and Links",
    paragraphs: [
      "The website may contain links to third-party websites, platforms, or services. We do not control and are not responsible for those third parties, their content, or their privacy and security practices. Your use of third-party services is governed by their own terms and policies.",
    ],
  },
  {
    title: "8. Changes to the Website",
    paragraphs: [
      "SaySimons may modify, suspend, or discontinue any part of the website or planned product at any time, with or without notice. Information on the site may describe current direction or intention, but it does not create a binding promise that any feature, timeline, or offering will remain available or launch as described.",
    ],
  },
  {
    title: "9. Disclaimers",
    paragraphs: [
      'The website is provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.',
      "To the fullest extent permitted by law, SaySimons does not warrant that the website will be uninterrupted, error-free, secure, or free from harmful components, or that content on the site will always be complete, accurate, or current.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, SaySimons and its founders, officers, employees, contractors, and affiliates will not be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenues, data, goodwill, or business opportunities, arising out of or related to your use of or inability to use the website.",
      "To the fullest extent permitted by law, the aggregate liability of SaySimons for all claims arising out of or relating to the website or these Terms will not exceed one hundred U.S. dollars (US$100).",
    ],
  },
  {
    title: "11. Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless SaySimons and its founders, officers, employees, contractors, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or related to your use of the website, your submissions, or your violation of these Terms or applicable law.",
    ],
  },
  {
    title: "12. Termination",
    paragraphs: [
      "We may suspend or terminate your access to the website at any time if we believe you have violated these Terms, created risk for SaySimons or others, or used the website in an unlawful or harmful manner.",
    ],
  },
  {
    title: "13. Changes to These Terms",
    paragraphs: [
      "We may update these Terms from time to time. If we make changes, we will post the revised Terms on this page and update the Last Updated date. By continuing to use the website after the revised Terms become effective, you agree to the updated Terms.",
    ],
  },
  {
    title: "14. General Terms",
    paragraphs: [
      "These Terms constitute the entire agreement between you and SaySimons regarding the website and supersede prior or contemporaneous understandings about that subject matter. If any provision is held unenforceable, the remaining provisions will remain in full force and effect. Our failure to enforce any provision is not a waiver of that provision.",
    ],
  },
  {
    title: "15. Contact",
    paragraphs: [
      `Questions about these Terms may be sent to ${siteConfig.email}.`,
    ],
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
        title="Terms of Service"
        description={`Last updated ${LEGAL_LAST_UPDATED}. These terms govern use of the SaySimons website, waitlist, and related pre-launch communications.`}
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
