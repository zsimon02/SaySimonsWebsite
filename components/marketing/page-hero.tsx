import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  supporting,
  className,
  shellClassName,
  containerClassName,
  titleClassName,
  centered = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  supporting?: ReactNode;
  className?: string;
  shellClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  centered?: boolean;
}) {
  return (
    <section
      className={cn(
        shellClassName ?? "section-shell",
        "pb-10 pt-20 sm:pt-24",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto w-full gap-10",
          supporting
            ? "grid max-w-5xl lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-14"
            : "max-w-3xl",
          centered && !supporting && "text-center",
          containerClassName,
        )}
      >
        <div className={cn("space-y-6 pt-2", centered && !supporting && "mx-auto")}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <div className="space-y-4">
            <h1
              className={cn(
                "headline-display max-w-[14ch] text-balance text-[3.1rem] font-semibold leading-[0.95] tracking-tight text-foreground sm:text-[4.1rem]",
                centered && !supporting && "mx-auto",
                titleClassName,
              )}
            >
              {title}
            </h1>
            {description ? (
              <p
                className={cn(
                  "max-w-[34rem] text-base leading-7 text-muted-foreground sm:text-[1.02rem]",
                  centered && !supporting && "mx-auto",
                )}
              >
                {description}
              </p>
            ) : null}
          </div>
        </div>

        {supporting ? <div className="pt-2">{supporting}</div> : null}
      </div>
    </section>
  );
}
