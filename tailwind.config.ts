import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy + electric amber + cream
        navy: {
          DEFAULT: "#0B1626",
          deep: "#060D17",
          mid: "#162338",
          soft: "#1F2F4A",
        },
        amber: {
          DEFAULT: "#FFB627",
          electric: "#FFC93C",
          burnt: "#E89B1A",
        },
        cream: {
          DEFAULT: "#F5EFE0",
          warm: "#EFE6D2",
          dim: "#D9CFB8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
        calligraphy: ["var(--font-calligraphy)", "cursive"],
      },
      fontSize: {
        // Editorial display sizes
        "display-xl": ["clamp(4rem, 12vw, 12rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(3rem, 8vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2.25rem, 5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
