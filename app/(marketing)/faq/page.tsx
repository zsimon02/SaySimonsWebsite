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
      />

      <section className="section-shell pb-20 pt-6">
        <div className="glass-panel rounded-[2rem] px-6 py-4 sm:px-8">
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
