import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featureCards } from "@/lib/site";

export function DifferenceSection() {
  return (
    <section className="section-shell section-rule py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="How SaySimons is different"
          title="Designed to help people understand each other easier."
          description="SaySimons supports every stage of dating—how you express yourself, how you connect, how conversations flow, and how things move into real life."
        />
      </Reveal>

      <div className="mt-12 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {featureCards.map((feature, index) => (
          <Reveal key={feature.title} className="h-full">
            <Card className="h-full rounded-[1.35rem] bg-white/72">
              <CardHeader className="gap-5 pb-5">
                <div className="flex items-center gap-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  <span>0{index + 1}</span>
                  <span className="h-px flex-1 bg-[rgba(128,149,173,0.2)]" />
                </div>
                <CardTitle className="headline-display text-[2rem] font-semibold leading-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-muted-foreground sm:text-[1.02rem]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
