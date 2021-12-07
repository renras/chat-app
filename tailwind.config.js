module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "bg-main": "#121212",
      "bg-secondary": "#1F1F1F",
      "bg-bar": "#2B2B2B",
      text: "#BABABA",
      notification: "red",
      white: "white",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
