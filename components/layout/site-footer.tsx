import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(128,149,173,0.14)] pb-10 pt-14">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.3fr_0.8fr] lg:items-end">
        <div className="space-y-4">
          <Link href="/" className="headline-display text-3xl font-semibold">
            SaySimons
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/80">
              Explore
            </p>
            <Link href="/mission" className="block hover:text-foreground">
              Mission
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
