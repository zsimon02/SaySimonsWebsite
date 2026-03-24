import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { founders } from "@/lib/site";

export const metadata: Metadata = {
  title: "Founders",
};

export default function FoundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Founders"
        title="Built on an understanding of how people connect, supported by thoughtful technology."
        shellClassName="w-full px-4 sm:px-8 lg:px-12"
        className="!flex items-center py-20 sm:py-28"
        containerClassName="max-w-[120rem]"
        titleClassName="max-w-none text-balance text-[clamp(3.5rem,6.8vw,7.25rem)] leading-[0.95] tracking-tight"
        centered
      />

      <section className="section-shell py-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {founders.map((founder) => (
            <Reveal key={founder.name} className="h-full">
              <div className="h-full rounded-[2rem] border border-[#dbe5f0] bg-white/88 p-7 shadow-[0_20px_48px_-40px_rgba(79,111,149,0.24)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                  {founder.emphasis}
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="relative size-16 overflow-hidden rounded-full border border-[#dbe5f0] bg-[linear-gradient(135deg,#eef4fa,#dbe7f3)] shadow-[0_14px_34px_-24px_rgba(79,111,149,0.35)]">
                    {founder.imageSrc ? (
                      <Image
                        src={founder.imageSrc}
                        alt={`${founder.name} headshot`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : null}
                  </div>
                  <div>
                    <h2 className="headline-display text-4xl font-semibold text-foreground">
                      {founder.name}
                    </h2>
                    <p className="mt-2 text-base font-medium text-foreground/80">
                      {founder.role}
                    </p>
                  </div>
                </div>
                <p className="mt-5 whitespace-pre-line text-base leading-7 text-muted-foreground">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
