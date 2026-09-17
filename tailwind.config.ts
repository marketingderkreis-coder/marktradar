import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: { 50: "#fdf2f2", 100: "#fde6e6", 500: "#d9262e", 600: "#c71f27", 700: "#a91920" },
        ink: "#202326",
      },
      boxShadow: { card: "0 1px 2px rgba(16, 24, 40, .04), 0 8px 24px rgba(16, 24, 40, .04)" },
      fontFamily: { sans: ["var(--font-inter)", "Arial", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
