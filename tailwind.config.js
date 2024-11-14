/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';


let obj = {}
Array(83).fill(0).forEach((_, idx) => {
  obj[`${idx + 14}`] = [`${idx + 14}px`, `${idx + 14}px`];
})

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-1": "#ddf2fd",
        "color-2": "#c0d684",
        "color-3": "#ed6a5a",
        "color-4": "#164863",
        "color-5": "#511730",
      },
      fontFamily: {
        'sans': ['"poppins"', ...defaultTheme.fontFamily.sans],
        'custom': ['"titillium-web"', 'sans-serif']
      },
      fontSize: obj
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'html': { fontSize: "18px" }
      })
    }),
  ],
};
