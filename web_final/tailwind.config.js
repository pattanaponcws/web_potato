/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        res: "#FDE27B",
        selmy: "#D9D9D9",
        selre: "#F9E495",
      },

      fontFamily: {
        mali: ["Mali"],
        prom: ["Prompt"],
      },

      backgroundImage: {
        login: "url('assets/login_bg.png')",
        home: "url('assets/home_bg.png')",
        base: "url('assets/base_bg.png')",
        deliver: "url('assets/deliver.png')",
        base1: "url('assets/base1.png')",
        log: "url('assets/Rectangle1.png')",
      },

      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(20rem)" },
          "80%": { transform: "translateX(-2rem)" },
          "100%": { transform: "translateX(0)" },
        },
        moveDown: {
          "0%": { transform: "translateY(-10rem)" },
          "100%": { transform: "translateY(0)" },
        },
        moveUp: {
          "0%": { transform: "translateY(10rem)" },
          "100%": { transform: "translateY(0)" },
        },
        moveLeft: {
          "0%": { transform: "translateX(-10rem)" },
          "100%": { transform: "translateX(0)" },
        },
        popUp:{
          "0%":{transform:"scale(0)"},
          "50%":{transform:"scale(1.3)"},
          "100%":{transform:"scale(1)"}
        },
        movingUpandDown:{
          '0%,100%':{transform:'translateY(0rem)'},
          '50%':{transform:'translateY(2rem)'}

        }

      },
      animation: {
        moveRight: "moveRight 2s ease-in-out",
        moveDown: " moveDown 1s ease-in-out",
        moveUp: " moveUp 1s ease-in-out",
        popUp:"popUp ease-in-out",
        movingUpandDown:'movingUpandDown'
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
