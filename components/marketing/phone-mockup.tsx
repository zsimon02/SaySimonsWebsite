import { CheckCircle2, Compass, MessageSquareText, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

const insights = [
  {
    icon: Sparkles,
    title: "Clarity on intent",
    description: "See what someone is looking for before the guessing begins.",
  },
  {
    icon: Compass,
    title: "Personality cues",
    description: "Profiles surface how someone thinks, not just how they pose.",
  },
  {
    icon: MessageSquareText,
    title: "Conversation support",
    description: "Guided prompts help chats move somewhere real.",
  },
] as const;

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-[#b8d8fb]/65 blur-3xl" />
      <div className="absolute -right-8 bottom-10 h-24 w-24 rounded-full bg-[#ffd7b3]/70 blur-3xl" />
      <div className="phone-shadow relative overflow-hidden rounded-[2.5rem] border border-[#d7e2ef] bg-[linear-gradient(180deg,#ffffff_0%,#f5f9ff_100%)] p-3">
        <div className="rounded-[2rem] border border-[#dde8f3] bg-[linear-gradient(180deg,#ffffff_0%,#eef5ff_100%)] p-5">
          <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-[#c7d5e6]" />
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Match clarity
              </p>
              <h3 className="mt-1 text-xl font-semibold text-foreground">
                Ella & Marcus
              </h3>
            </div>
            <Badge variant="accent">Early access</Badge>
          </div>

          <div className="space-y-3">
            {insights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-[#dbe5f0] bg-white/80 p-4"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-[#e8f3ff] p-2 text-[#5c94d7]">
                      <Icon className="size-4" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 rounded-[1.6rem] border border-[#ffd8b5] bg-[#fff3e6] p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="size-4 text-accent" />
              Ready for a real date
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Shared pacing, aligned intentions, and a conversation that already
              feels natural.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
