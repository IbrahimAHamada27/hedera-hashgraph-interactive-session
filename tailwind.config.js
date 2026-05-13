/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#165D9E',
        'dark-navy': '#203A5F',
        'silver': '#EAEAEA',
        'primary-gray': '#737373',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, rgba(22, 93, 158, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(22, 93, 158, 0.1) 1px, transparent 1px)',
      },
      boxShadow: {
        'glow-cyan': '0 0 15px 2px rgba(0, 255, 255, 0.3)',
        'glow-cyan-lg': '0 0 30px 5px rgba(0, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
