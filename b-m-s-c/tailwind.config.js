/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:  {
      colors: {
        darkBackground: {
          700: '#1a1a2e', // Replace this with your desired color
        },
      },
    },
  },
  plugins: [],
}

