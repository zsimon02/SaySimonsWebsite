import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-2xl border border-[#d3deea] bg-white/90 px-4 py-3 text-base text-foreground shadow-[0_12px_30px_-24px_rgba(82,109,145,0.42)] outline-none placeholder:text-muted-foreground/80 focus-visible:border-[#a9c8ea] focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
