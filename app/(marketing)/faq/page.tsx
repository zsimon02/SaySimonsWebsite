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
        title="A few clear answers."
        titleClassName="max-w-none"
        centered
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
