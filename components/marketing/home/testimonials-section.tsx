import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="section-shell py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Early impressions"
          title="What early users are responding to."
          description="These are early-stage reactions to the concept and product direction, included as signals of resonance rather than polished customer case studies."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.quote} className="h-full">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-[#dbe5f0] bg-[linear-gradient(180deg,rgba(255,255,255,0.84),rgba(241,247,255,0.82))] p-6 shadow-[0_18px_40px_-34px_rgba(79,111,149,0.35)]">
              <p className="headline-display text-3xl leading-tight text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-8 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {testimonial.attribution}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
