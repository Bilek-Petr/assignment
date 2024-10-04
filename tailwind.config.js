/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainLight: "#F2F2F2",
        accentMedium: "#CCCCCC",
        accentDark: "#858383",
      },
    },
  },
  plugins: [],
};
