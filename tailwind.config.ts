import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          300: '#D1D5DB',
        }
      },
      spacing: {
        4: '1rem',
        24: '6rem',
      }
    },
  },
  plugins: [],
};

export default config;