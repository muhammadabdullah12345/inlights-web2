/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        mono: ["var(--font-roboto-mono)"],
      },
      screens: {
        xl: "1200px", // Custom extra large screen
        "2xl": "2200px",
      },
    },
  },
  plugins: [],
};
