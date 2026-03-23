import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export default function MarketingLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="site-shell min-h-screen overflow-x-clip">
      <div className="page-glow left-[-6rem] top-24" />
      <div className="page-glow right-[-6rem] top-[28rem]" />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
