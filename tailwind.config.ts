import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#06060A",
        "void-2": "#0A0D0A",
        "void-3": "#0E120E",
        brand: {
          green: "#2ECC1D",
          "green-dim": "#1A8012",
          "green-glow": "rgba(46,204,29,0.15)",
          navy: "#0B1A33",
          "navy-light": "#112244",
        },
        product: {
          subs: "#00B4D8",
          dubs: "#A855F7",
          shield: "#EF4444",
          tracker: "#3B82F6",
        },
        surface: {
          DEFAULT: "rgba(255,255,255,0.04)",
          hover: "rgba(255,255,255,0.07)",
          border: "rgba(255,255,255,0.08)",
          "green-border": "rgba(46,204,29,0.2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        ticker: "ticker 35s linear infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-delay": "float 7s ease-in-out 3.5s infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-10px) rotate(2deg)" },
          "66%": { transform: "translateY(-5px) rotate(-1deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
