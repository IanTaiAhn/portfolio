import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

// Optimized font loading with specific weights and preload
// Bricolage Grotesque: contemporary display with character (variable, slight quirks)
// Newsreader: literary serif for body
// JetBrains Mono: technical accents (tags, numerals, project codes)
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "600", "700"],
  preload: true,
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "600"],
  preload: true,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
  preload: false, // Used less frequently
});

export const metadata: Metadata = {
  title: {
    default: "Ian Tai Ahn — Full Stack / ML / Data Science",
    template: "%s — Ian Tai Ahn",
  },
  description:
    "Portfolio of Ian Tai Ahn | curated projects in machine learning, data science, and software.",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    siteName: "Ian Tai Ahn",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-navy text-cream antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-amber focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-navy"
        >
          Skip to main content
        </a>
        <PageTransition>{children}</PageTransition>
        <Analytics />
      </body>
    </html>
  );
}
