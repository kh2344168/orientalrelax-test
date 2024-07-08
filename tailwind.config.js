/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'purple-gradient': 'radial-gradient(#AE5EAF, #D69AD8)',
      },
    },
  },
  plugins: [],
}

