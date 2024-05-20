/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      lineClamp: {
        5: "5",
      },
    },
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: colors.yellow,
    },
  },
  variants: {
    // Enable line-clamp utility variants
    lineClamp: ["responsive"],
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
