import type { ReactNode } from "react";

import { SectionHeading } from "@/components/marketing/section-heading";

export function PageHero({
  eyebrow,
  title,
  description,
  supporting,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  supporting?: ReactNode;
}) {
  return (
    <section className="section-shell pb-10 pt-20 sm:pt-24">
      <div className="glass-panel rounded-[2.25rem] px-6 py-10 sm:px-10 sm:py-14">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        {supporting ? (
          <div className="mt-10 border-t border-[#dbe4ef] pt-8">{supporting}</div>
        ) : null}
      </div>
    </section>
  );
}
