/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        res: "#FDE27B",
        selmy:"#D9D9D9",
        selre:"#F9E495",
      },

      fontFamily:{
        mali:['Mali'],
        prom:['Prompt'],
      },
      
      backgroundImage: {
        login: "url('assets/login_bg.png')",
        home: "url('assets/home_bg.png')",
        base: "url('assets/base_bg.png')",
        deliver: "url('assets/deliver.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
