import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-28 w-full rounded-3xl border border-[#d3deea] bg-white/90 px-4 py-3 text-base text-foreground shadow-[0_12px_30px_-24px_rgba(82,109,145,0.42)] outline-none placeholder:text-muted-foreground/80 focus-visible:border-[#a9c8ea] focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
