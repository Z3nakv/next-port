import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        linkedin: "rgb(10, 102, 194)",
        resume: "rgb(58, 58, 210)",
        presentation: "rgb(83, 92, 145)"
      },
    },
  },
  plugins: [],
} satisfies Config;
