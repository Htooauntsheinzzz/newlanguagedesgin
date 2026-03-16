import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        paper: "#F8FAFC",
        primary: "#0E7490",
        accent: "#D97706"
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15, 23, 42, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
