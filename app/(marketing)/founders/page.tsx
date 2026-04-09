import type { Metadata } from "next";
import Image from "next/image";

import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";

const story = `Zachary and Hayley are a brother and sister duo who created SaySimons. After watching their older brother struggle with dating apps that felt difficult to interpret, Hayley began to recognize a broader pattern. Many people weren't struggling with connection itself, they were struggling with how little structure existed around expressing interest, reading intent, and understanding one another. What should feel intuitive often turned into guesswork. We lose all nonverbal social cues when we speak online (tone of voice, body language, eye contact). That led her to consider, what if there was an app that helped translate some of this ambiguity to help simulate more of a real world setting?

Hayley called on her tech brother Zach and they immediately got to work. People were left guessing about interest, intent, and compatibility, and they were seeing how ambiguity had become normalized in today. Rather than accept it, he set out to build a product that made those signals easier to understand.`;

const founderSections = [
  {
    name: "Dr. Hayley Simon",
    role: "Co-Founder and Behavioral Lead",
    emphasis: "Behavioral Design",
    imageSrc: "/images/founders/hayley.jpeg",
    bio: `Dr. Hayley Simon is a clinical psychologist and behavioral lead behind SaySimons, bringing a research-driven understanding of how people communicate, connect, and build relationships. Her work focuses on helping individuals better understand their emotional patterns, navigate relationships, and communicate with more clarity and intention. Hayley's research throughout school focused on social dynamics, communication patterns, and the ways digital environments influence relationships. At SaySimons, she leads the behavioral design of the product, ensuring that psychological insight is translated into an experience that feels grounded, natural, and genuinely useful.`,
  },
  {
    name: "Zachary Simon",
    role: "Co-Founder and Technical Lead",
    emphasis: "Product and Engineering",
    imageSrc: "/images/founders/zach.jpeg",
    bio: `Zachary Simon is co-founder and technical lead behind SaySimons, a personality-driven dating platform. With a background in building data-driven systems and automation tools, his work has consistently centered on solving complex, real-world problems through thoughtful, practical technology. Zachary graduated with a degree in computer science, and has a strong foundation in systems and software development. At SaySimons, he now leads both product and engineering, with the goal of creating an experience that turns behavioral insight into something structured, intuitive, and actually useful. He is currently pursuing a Master's of Science in Artificial Intelligence, to continue his focus on how intelligent systems can better help people.`,
  },
] as const;

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
        <div className="space-y-5">
          <Reveal>
            <div className="rounded-[2rem] border border-[#dbe5f0] bg-white/88 p-7 shadow-[0_20px_48px_-40px_rgba(79,111,149,0.24)] sm:p-9">
              <p className="text-center text-base font-semibold uppercase tracking-[0.18em] text-accent sm:text-lg">
                Our Story
              </p>
              <p className="mt-6 whitespace-pre-line text-base leading-8 text-muted-foreground">
                {story}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {founderSections.map((founder) => (
              <Reveal key={founder.name} className="h-full">
                <div className="h-full rounded-[2rem] border border-[#dbe5f0] bg-white/88 p-7 shadow-[0_20px_48px_-40px_rgba(79,111,149,0.24)]">
                  <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {founder.emphasis}
                  </p>
                  <div className="mt-4 flex flex-col items-center gap-4 text-center">
                    <div className="relative size-16 overflow-hidden rounded-full border border-[#dbe5f0] bg-[linear-gradient(135deg,#eef4fa,#dbe7f3)] shadow-[0_14px_34px_-24px_rgba(79,111,149,0.35)]">
                      <Image
                        src={founder.imageSrc}
                        alt={`${founder.name} headshot`}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
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
                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    {founder.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
