const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      backgroundColor: {
        main: "#F5F5F5",
      },
      colors: {
        title: "#303133",
      },
      box: {
        screen: "",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        // '.box-fill': {
        //   'min-height': 'calc(100vh - 200px)',
        // },
      });
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
