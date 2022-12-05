/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        hero: "6rem",
      },
      fontFamily: {
        heading: ["Overpass"],
        body: ["Ubuntu"],
      },
      colors: {
        primaryCta: "hsl(356, 100%, 66%)",
        primaryCtaHoverBg: "hsl(355, 100%, 74%)",
        primaryHeadings: "hsl(208, 49%, 24%)",
        backgroundOne: "hsl(353, 100%, 62%)",
        backgroundTwo: "hsl(13, 100%, 72%)",
        bodyCopy: "hsl(207, 13%, 34%)",
      },
    },
  },
  plugins: [],
};
