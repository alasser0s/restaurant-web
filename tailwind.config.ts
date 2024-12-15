// tailwind.config.js
module.exports = {
  darkMode: 'class', // Make sure this is set
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        darkbg: '#121212', // Define your custom dark background color
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    }
  },
  plugins: [],
}
