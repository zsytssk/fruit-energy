const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

// console.log(`test:>defaultTheme`, defaultTheme);

function rem2px(input, fontSize = 16) {
  if (input == null) {
    return input;
  }
  switch (typeof input) {
    case "object":
      if (Array.isArray(input)) {
        return input.map((val) => rem2px(val, fontSize));
      } else {
        const ret = {};
        for (const key in input) {
          ret[key] = rem2px(input[key]);
        }
        return ret;
      }
    case "string":
      return input.replace(
        /(\d*\.?\d+)rem$/,
        (_, val) => parseFloat(val) * fontSize + "px",
      );
    default:
      return input;
  }
}

console.log(`test:>`, defaultTheme.margin);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  important: true,
  theme: {
    borderRadius: rem2px(defaultTheme.borderRadius),
    columns: rem2px(defaultTheme.columns),
    fontSize: rem2px(defaultTheme.fontSize),
    lineHeight: rem2px(defaultTheme.lineHeight),
    minHeight: {
      ...rem2px(defaultTheme.minHeight),
      4: "16px",
      8: "32px",
    },
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
