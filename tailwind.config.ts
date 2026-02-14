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
        background: "var(--background)",
        foreground: "var(--foreground)",
        retro: {
          black: "#000000",
          dark: "#0a0a0a",
          darker: "#111111",
          gray: "#1a1a1a",
          lightgray: "#2a2a2a",
          text: "#e0e0e0",
          muted: "#888888",
          cyan: "#00ff9d",
          magenta: "#ff00ff",
          blue: "#00d9ff",
          yellow: "#ffff00",
          orange: "#ff9d00",
        },
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 157, 0.5), 0 0 10px rgba(0, 255, 157, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 157, 0.8), 0 0 30px rgba(0, 255, 157, 0.5)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
