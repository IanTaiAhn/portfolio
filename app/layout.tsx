import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// PLACEHOLDER FONTS — chosen for an editorial-meets-technical feel.
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

export const metadata: Metadata = {
  // PLACEHOLDER — replace with real name + tagline
  title: "[Your Name] — ML / NLP / Econometrics",
  description:
    "Portfolio of [Your Name] — selected projects in machine learning, NLP, data science, and econometrics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-navy text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
