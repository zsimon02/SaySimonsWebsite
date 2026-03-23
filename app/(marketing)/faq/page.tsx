import type { Metadata } from "next";

import { PageHero } from "@/components/marketing/page-hero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="A few clear answers."
        description="The basics of what SaySimons is, what it is not, and where things stand right now."
        supporting={
          <div className="space-y-4 rounded-[2rem] border border-[#dbe5f0] bg-white/88 p-6 shadow-[0_22px_54px_-40px_rgba(79,111,149,0.28)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              What&apos;s covered
            </p>
            <div className="space-y-3 border-t border-[rgba(128,149,173,0.18)] pt-4 text-sm text-foreground sm:text-base">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" />
                <span>What SaySimons is</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" />
                <span>How the waitlist works</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-accent" />
                <span>Where the product stands today</span>
              </div>
            </div>
          </div>
        }
      />

      <section className="section-shell pb-20 pt-6">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#dbe5f0] bg-white/88 px-6 py-3 shadow-[0_22px_54px_-40px_rgba(79,111,149,0.24)] sm:px-8">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
