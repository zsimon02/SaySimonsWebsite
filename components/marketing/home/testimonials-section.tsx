import { Reveal } from "@/components/marketing/reveal";
import { SectionHeading } from "@/components/marketing/section-heading";
import { testimonials } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="section-shell section-rule py-24 sm:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Early impressions"
          title="What early users are responding to."
          description="These are early-stage reactions to the concept and product direction, included as signals of resonance rather than polished customer case studies."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.quote} className="h-full">
            <div className="flex h-full flex-col justify-between border-t border-[rgba(128,149,173,0.22)] pt-6">
              <p className="headline-display text-[2rem] leading-[1.18] text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="mt-8 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {testimonial.attribution}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
