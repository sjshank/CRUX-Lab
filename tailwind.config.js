/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#f1f3f5",
        header: "#2b3441",
        "main-text": "#f2f5f7",
        "blue-accent": "#3559E0",
      },
      width: {
        "28rem": "28rem",
        "35rem": "35rem",
      },
    },
  },
  plugins: [],
};
