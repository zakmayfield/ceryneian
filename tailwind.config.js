/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-aqua': '#C9D8D3',
        amber: '#FDC76F',
        'slate-gray': '#3C3C3C',
      },
      fontFamily: {
        'playfair-display': ['Playfair Display', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serfif'],
      },
    },
  },
  plugins: [],
};
