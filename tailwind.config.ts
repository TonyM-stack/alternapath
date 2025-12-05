import type { Config } from "tailwindcss";

export default {
  important: true,
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: { 
    extend: {
       fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        // brand: ["var(--font-brand)", "system-ui", "sans-serif"],
      },
  },
},
  plugins: [],
} satisfies Config;
