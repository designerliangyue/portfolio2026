import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-stack-sans)"],
        mono: ["var(--font-stack-mono)"],
        display: ["var(--font-stack-display)"]
      },
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          roman: "#0a0a0a",
          em: "rgba(10, 10, 10, 0.34)",
          70: "#3a3a3a",
          50: "#6b6b6b",
          30: "#a1a1a1",
          15: "#d4d4d4",
          5: "#ededed"
        },
        paper: "#fafaf7",
        accent: "#ff4500"
      },
      letterSpacing: {
        tightish: "-0.02em",
        tighter2: "-0.035em"
      },
      maxWidth: {
        content: "1440px",
        prose: "65ch"
      },
      transitionTimingFunction: {
        swiss: "cubic-bezier(0.22, 1, 0.36, 1)"
      }
    }
  },
  plugins: []
};

export default config;
