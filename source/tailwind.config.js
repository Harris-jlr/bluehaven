/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "launch-blue": "#0C70E4",
        "launch-black": "#1C1B1F",
        white: "#FFFFFF",
        "dark-gray": "#4A4752",
        "medium-gray": "#9592A0",
        "light-gray": "#E5E4E7",
        "pale-gray": "#F2F1F3",
        "almost-white": "#FAFAFA",

        // Secondary Colors
        "dark-blue": "#022F64",
        "light-blue": "#CDE4FE",
        "pale-blue": "#E6F1FE",
        "dark-yellow": "#E5CA1A",
        "medium-yellow": "#F0DF75",
        "light-yellow": "#F7F4BA",
        "dark-purple": "#450561",
        "medium-purple": "#8B0AC2",
        "light-purple": "#CB75F0",
        "pale-purple": "#F5E1FD",
        "dark-red": "#DC2F18",
        "dark-pink": "#F5ADA3",
        "medium-pink": "#FAD6D1",
        "light-pink": "#FCEAE8",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
