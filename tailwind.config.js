/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fullHD: { raw: "(min-width: 1900px)" },
      },
      gridTemplateColumns: {
        navbar: "30% 70%",
        "layout-desktop": "40% 60%",
        "education": "40% 60%",
        "about": "40% 60%",
      },
      colors: {
        "dorado": "rgb(201, 178, 86)",
        "skill": "rgb(91, 105, 65)",
      },
    },
  },
  plugins: [],
};
