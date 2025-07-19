/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./en/*.html",
    "./vi/*.html",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        main: '#004AAD',
        main_hover: '#003a8a', 
        secondary: '#1a1a1a',
        text: '#666666'
      },
      fontFamily: {
        'cabin': ['Cabin', 'sans-serif'],
      },
      dropShadow: {
        'md': '2px 2px 5px rgba(0, 0, 0, 0.35)',
        'sm': '0 4px 16px rgba(0, 0, 0, 0.04)',
        'text': '2px 2px 8px rgba(0, 0, 0, 0.13)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at var(--x,50%) var(--y,50%), rgb(93,224,230) 0%, rgb(0,74,173) 100%)',
        'gradient-cyan-blue': 'linear-gradient(90deg, #caffd7 0%, #a3caff 100%)'
      },
      textShadow: {
        'sm': '2px 2px 8px rgba(0, 0, 0, 0.13)',
        'md': '2px 2px 5px rgba(0, 0, 0, 0.35)',
      },
      maxWidth: {
        'screen-xl': '1280px',
      }
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: theme('textShadow.sm'),
        },
        '.text-shadow-md': {
          textShadow: theme('textShadow.md'),
        },
        '.drop-shadow-text': {
          filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.13))',
        },
        '.bg-gradient-radial': {
          background: 'radial-gradient(circle at var(--x,50%) var(--y,50%), rgb(93,224,230) 0%, rgb(0,74,173) 100%)',
        },
        '.bg-gradient-cyan-blue': {
          background: 'linear-gradient(90deg, #caffd7 0%, #a3caff 100%)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}
