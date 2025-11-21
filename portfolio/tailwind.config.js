/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#5B21B6",
          blue: "#2563EB",
          orange: "#F97316",
          dark: "#1E1E1E",
          light: "#F9FAFB",
        },
      },
    },
  },
  plugins: [],
};
