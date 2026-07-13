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
          DEFAULT: "rgb(var(--ink-rgb) / <alpha-value>)",
          roman: "#292219",
          em: "rgba(41, 34, 25, 0.38)",
          70: "#4c4438",
          50: "#7b7163",
          30: "#a99f8e",
          15: "#d9d1c2",
          5: "#ede7da"
        },
        paper: "rgb(var(--paper-rgb) / <alpha-value>)",
        accent: "#b6552f"
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
