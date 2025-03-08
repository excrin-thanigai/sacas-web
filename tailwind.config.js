export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "max-62rem": { max: "62rem" },
        "max-1024rem": { max: "64rem" },
        "max-1024": { max: "64rem" },
        "max-1280": { max: "80rem" },
        "max-56rem": { max: "56rem" },
        "max-md": { max: "48rem" },
        "max-sm": { max: "30rem" },
      },

      fontFamily: {
        inter: ["Inter", "serif"],
      },
      colors: {
        white: "#FFFFFF",
        deep_red: "#7e131d",
        off_black: "#0D0D0D",
        heritage_gold: "#d6af73",

        neutral_50: "#FAFAFA",
        neutral_100: "#F5F5F5",
        neutral_200: "#E5E5E5",
        neutral_300: "#D4D4D4",
        neutral_400: "#A3A3A3",
        neutral_500: "#737373",
        neutral_600: "#525252",
        neutral_700: "#404040",
        neutral_800: "#262626",
        neutral_900: "#171717",

        btn_blue: "#1594EB",
        gradient_linear:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42.85%, #000 100%)",
      },
      fontSize: {
        h1: ["3.5rem", { lineHeight: "4rem" }],
        h2: ["3rem", { lineHeight: "3.5rem" }],
        h3: ["2rem", { lineHeight: "2.5rem" }],
        h4: ["1.5rem", { lineHeight: "2rem" }],

        body_l: [" 1.125rem", { lineHeight: "1.75rem" }],
        body_m: ["1rem", { lineHeight: " 1.5rem" }],
        body_s: [" 0.875rem", { lineHeight: " 1.25rem" }],
        body_xs: [" 0.75rem", { lineHeight: " 1rem" }],
      },
    },
  },
  plugins: [],
};
