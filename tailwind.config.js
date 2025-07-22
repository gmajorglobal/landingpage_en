tailwind.config = {
  theme: {
    extend: {
      colors: {
        main: '#004AAD',
        main_hover: '#003a8a', 
        secondary: '#1a1a1a',
        text: '#666666',
        blue_light: '#94b9ff',
        green_light: '#cdffd8',
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
        'gradient-radial-gray': 'radial-gradient(circle at var(--x,50%) var(--y,50%), #a6a6a6 0%, white 100%)',
        'gradient-linear-gray': 'linear-gradient(0deg, #303643 0%, #a5acb9 100%)',
        'gradient-cyan-blue': 'linear-gradient(90deg, #caffd7 0%, #a3caff 100%)'
      },
      textShadow: {
        'sm': '2px 2px 8px rgba(0, 0, 0, 0.13)',
        'md': '2px 2px 5px rgba(0, 0, 0, 0.35)',
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
      animation: {
        'gradient-move-x': 'gradient-move-x 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-move-x': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      // Custom utilities
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '2px 2px 8px rgba(0, 0, 0, 0.13)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.35)',
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
      })
      // Custom components
      addComponents({
        '.section-solutions': {
          padding: '3rem 1rem',
          '@screen lg': {
            padding: '4rem 1.5rem',
          }
        },
        '.section-solutions .container': {
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          '@screen lg': {
            padding: '0 1.5rem',
          }
        },
        '.section-solutions .heading': {
          fontSize: '2.25rem',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '3rem',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.35)',
          '@screen md': {
            fontSize: '3rem',
          }
        },
        '.title-heading': {
          fontSize: '2.25rem',
          fontWeight: '800',
          textAlign: 'center',
          marginBottom: '3rem',
          textShadow: '2px 2px 5px rgba(0, 0, 0, 0.35)',
          '@screen md': {
            fontSize: '3rem',
          }
        },
        '.solutions-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
          gap: '1.5rem',
          '@screen sm': {
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          },
          '@screen lg': {
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          },
          '@screen xl': {
            gap: '2rem',
          }
        },
        '.solution-card': {
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '1.5rem',
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          transition: 'box-shadow 0.3s ease',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: '0',
            background: 'radial-gradient(circle at var(--x,50%) var(--y,50%), rgb(93,224,230) 0%, rgb(0,74,173) 100%)',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          },
          '&:hover::before': {
            opacity: '0.85',
          },
          '&:hover': {
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
          }
        },
        '.compare-table-wrapper': {
          overflowX: 'auto',
          marginTop: '2rem',
        },
        '.compare-table': {
          width: '100%',
          borderCollapse: 'collapse',
          borderSpacing: '0',
        },
        '.img-logo': {
          width: '60px',
          height: 'auto',
          objectFit: 'contain',
        },
        '.img-checked': {
          width: '32px',
          height: '32px',
        },
        '.img-cross-icon': {
          width: '32px',
          height: '32px',
        },
        '.industry-carousel': {
          marginTop: '3rem',
          position: 'relative',
          maxWidth: '100%',
          overflow: 'hidden',
        },
        '.carousel-flex': {
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          position: 'relative',
        },
        '.viewport': {
          flex: '1',
          overflow: 'hidden',
          position: 'relative',
        },
        '.industry-grid': {
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          width: 'fit-content',
        },
        '.card': {
          position: 'relative',
          padding: '1rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
          }
        },
        '.nav': {
          width: '40px',
          height: '40px',
          border: 'none',
          borderRadius: '50%',
          backgroundColor: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
          fontWeight: 'bold',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: '#f3f4f6',
            transform: 'scale(1.1)',
          },
          '&[disabled]': {
            opacity: '0.5',
            cursor: 'not-allowed',
          }
        },
        '.promo-banner': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '3rem 1rem',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
        },
        '.promo-card': {
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        },
        '.sparkle': {
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontSize: '2rem',
          animation: 'spin 2s linear infinite',
        },
        '.support-banner': {
          background: 'linear-gradient(90deg, #caffd7 0%, #a3caff 100%)',
          padding: '3rem 1rem',
          textAlign: 'center',
        },
        '.support-content': {
          maxWidth: '800px',
          margin: '0 auto',
        },
        '.contact-inner': {
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        },
        '.visual': {
          textAlign: 'center',
        }
      })
    }
  ]
} 