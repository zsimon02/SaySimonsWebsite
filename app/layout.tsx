import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "SaySimons | Stop guessing. Start connecting.",
    template: "%s | SaySimons",
  },
  description:
    "SaySimons is a personality-driven dating app that removes ambiguity and helps people build real connections.",
  applicationName: "SaySimons",
  keywords: [
    "SaySimons",
    "dating app",
    "intentional dating",
    "personality matching",
    "dating waitlist",
  ],
  openGraph: {
    title: "SaySimons",
    description:
      "A dating app designed to remove ambiguity and help people build real, personality-driven connections.",
    siteName: "SaySimons",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaySimons",
    description:
      "Stop guessing. Start connecting with a more intentional dating experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
