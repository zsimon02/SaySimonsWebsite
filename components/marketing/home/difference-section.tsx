import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featureCards } from "@/lib/site";

export function DifferenceSection() {
  return (
    <section className="section-shell py-20">
      <Reveal>
        <SectionHeading
          eyebrow="How SaySimons is different"
          title="Designed to help people understand each other sooner."
          description="SaySimons supports the moments where dating apps usually fall apart: expression, compatibility, conversation, and the leap into real life."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {featureCards.map((feature, index) => (
          <Reveal key={feature.title} className="h-full">
            <Card className="h-full rounded-[2rem] p-1">
              <CardHeader className="gap-4 pb-4">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  0{index + 1}
                </div>
                <CardTitle className="headline-display text-3xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base leading-7 text-muted-foreground">
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
