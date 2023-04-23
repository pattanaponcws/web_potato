/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        res: "#FDE27B",
      },
      
      backgroundImage: {
        login: "url('assets/login_bg.png')",
        home: "url('assets/home_bg.png')",
        base: "url('assets/base_bg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
