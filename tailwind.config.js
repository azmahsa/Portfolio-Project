/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main_color: "#ff014f",
        subtitle_color: "#f9004d",
        text_body: "#3c3e41",
        heading_color: "#1e2125",
      },
      screens: {
        com: { min: "1200px" },
        res_menu: { max: "1200px" },
        mob: { max: "800px" },
        res_spe: { max: "1030px", min: "800px" },
      },
    },
  },
  plugins: [],
};
