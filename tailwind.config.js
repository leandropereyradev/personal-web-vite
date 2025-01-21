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
        "dark-grey": "#131313",
      },
    },
  },
  plugins: [],
};
