import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono, Nanum_Brush_Script } from "next/font/google";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

// Bricolage Grotesque: contemporary display with character (variable, slight quirks)
// Newsreader: literary serif for body
// JetBrains Mono: technical accents (tags, numerals, project codes)
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Newsreader({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const calligraphy = Nanum_Brush_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calligraphy",
  display: "swap",
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
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${calligraphy.variable}`}>
      <body className="min-h-screen bg-navy text-cream antialiased">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
