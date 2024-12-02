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
      boxShadow: {
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.5), 0 2px 4px rgba(255, 255, 255, 0.1)",
      },
      fontSize:{
        title: 'clamp(1.7rem, 7vw, 4.3rem)',
        subtitle: 'clamp(1.2rem, 5vw,3rem)',
        presentationTitle:'clamp(2rem,7vw, 5rem)',
        presentationText: 'clamp(1rem, 2.5vw, 1.7rem )',
      }
    },
    animation:{
      flying: 'flying 4s infinite',
    },
    keyframes: {
      flying: {
        '0%': { transform: 'translateY(5%)' },
          '50%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(5%)' },
        
      },
    },
  },
  plugins: [],
} satisfies Config;
