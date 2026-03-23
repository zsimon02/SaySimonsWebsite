import Link from "next/link";
import { ArrowUpRight, AtSign, Send } from "lucide-react";

import { siteConfig } from "@/lib/site";

const socialIconMap = {
  Instagram: AtSign,
  LinkedIn: ArrowUpRight,
  X: Send,
} as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[#dbe4ef] pb-10 pt-14">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          <Link href="/" className="headline-display text-3xl font-semibold">
            SaySimons
          </Link>
          <p className="max-w-xl text-sm leading-7 text-muted-foreground">
            A personality-driven dating app built to remove ambiguity and help
            people build real connections.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {siteConfig.socialLinks.map((link) => {
              const Icon =
                socialIconMap[link.label as keyof typeof socialIconMap] ?? ArrowUpRight;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d6e1ee] bg-white/80 px-4 py-2 text-sm font-medium text-muted-foreground hover:border-[#bfd5ec] hover:bg-[#eef6ff] hover:text-foreground"
                >
                  <Icon className="size-4" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
              Explore
            </p>
            <Link href="/mission" className="block hover:text-foreground">
              Mission
            </Link>
            <Link href="/product" className="block hover:text-foreground">
              Product
            </Link>
            <Link href="/founders" className="block hover:text-foreground">
              Founders
            </Link>
            <Link href="/faq" className="block hover:text-foreground">
              FAQ
            </Link>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
              Company
            </p>
            <Link href="/join" className="block hover:text-foreground">
              Join the Waitlist
            </Link>
            <Link href="/contact" className="block hover:text-foreground">
              Contact
            </Link>
            <Link href="/privacy" className="block hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
