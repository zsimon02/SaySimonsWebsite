"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { navigationLinks } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-[linear-gradient(180deg,rgba(250,252,255,0.84),rgba(250,252,255,0.56)_65%,rgba(250,252,255,0))] backdrop-blur-lg">
      <div className="section-shell flex h-[4.5rem] items-center justify-between gap-6">
        <Button
          asChild
          variant="ghost"
          className="headline-display h-auto px-0 text-2xl font-semibold tracking-tight text-foreground hover:bg-transparent hover:text-foreground"
        >
          <Link href="/">SaySimons</Link>
        </Button>

        <nav className="hidden items-center gap-6 md:flex">
          {navigationLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <Link href="/join">Join the Waitlist</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Dialog key={pathname}>
            <DialogTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="pr-10">
                <DialogTitle>
                  <Button
                    asChild
                    variant="ghost"
                    className="headline-display h-auto px-0 text-3xl font-semibold text-foreground hover:bg-transparent hover:text-foreground"
                  >
                    <Link href="/">SaySimons</Link>
                  </Button>
                </DialogTitle>
              </DialogHeader>
              <nav className="mt-8 flex flex-col gap-2">
                {navigationLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-[rgba(128,149,173,0.16)] px-1 py-3 text-base font-semibold text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link href="/join">Join the Waitlist</Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
