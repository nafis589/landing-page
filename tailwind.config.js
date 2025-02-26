/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["[data-theme=light]"],
        primary: "#0ea5e9",
        "primary-focus": "#0284c7"
      },
      dark: {
        ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
        primary: "#0ea5e9",
        "primary-focus": "#0284c7"
      },
      corporate: {
        ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
        primary: "#0ea5e9",
        "primary-focus": "#0284c7"
      }
    }],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: false,
    themeRoot: ":root"
  }
};
