/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#0a0a0f',
          panel: '#14141c',
          card: '#1b1b26',
          pink: '#ff2e93',
          pinkDark: '#c2116b',
          gold: '#ffb400',
          green: '#22c55e',
          red: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 46, 147, 0.35)',
        card: '0 4px 20px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
