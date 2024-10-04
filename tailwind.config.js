/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainLight: "#F2F2F2",
        accentMedium: "#CCCCCC",
        accentDark: "#858383",

        vipBg: "#ffc2f0",
        vipText: "#9b2d88",
        growBg: "#cff2bf",
        growText: "#376800",
        deadBg: "#d0d4dd",
        deadText: "#555c6b",
      },
    },
  },
  plugins: [],
};
