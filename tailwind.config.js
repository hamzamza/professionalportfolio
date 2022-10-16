/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{blugreen : '#7ae2e4', 
     darkmod: '#0a192f'

    ,hoverdark:"#2c4cc246",
  hoverlight: "#5f449146"},
      width:{300 : "300px" },
      height:{300: "300px"}
    },

  },
  plugins: [],
}
