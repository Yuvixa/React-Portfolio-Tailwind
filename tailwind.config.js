/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",

  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* si quiero agregar mi estilo personal */
      fontFamily: {
        burtons: "burtons",
      }
    },
  },
  plugins: [],
};
