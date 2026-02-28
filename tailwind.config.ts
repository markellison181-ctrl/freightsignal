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
        darkblue: {
          DEFAULT: "#0d1b2a",
          50: "#415973",
          100: "#374E5F",
          200: "#2D424B",
          300: "#233637",
          400: "#192A23",
          500: "#0d1b2a",
          600: "#0B1521",
          700: "#090F18",
          800: "#07090F",
          900: "#050306",
        },
        orange: {
          DEFAULT: "#e87c3e",
          50: "#FAEDD7",
          100: "#F8E5C9",
          200: "#F5D5AD",
          300: "#F2C591",
          400: "#EFB575",
          500: "#e87c3e",
          600: "#E56A2B",
          700: "#D15118",
          800: "#B84005",
          900: "#8F3204",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;