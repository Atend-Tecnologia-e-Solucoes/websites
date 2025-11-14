import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          // one color blue pallete
          50: "#021C2B",
          100: "#033854",
          200: "#04547D",
          300: "#0570A6",
          400: "#068CCF",
          500: "#1AAFEF",
          600: "#4DC1FF",
          700: "#80D3FF",
          800: "#B3E5FF",
          900: "#E6F7FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
