/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      sm: {'max': '767px'},
      md: {'max': '1025px'},
      lg: {'max': '1454px'},
      padding: {
        DEFAULT: '3.25rem',
        sm: '1.25rem',
        md: '1rem',
        lg: '1rem',
        xl: '2rem',
      }
    },
    screens: {
      'sm': { 'min': '300px', 'max': '980px' },
      // => @media (min-width: 320px and max-width: 767px) { ... }

      'md': { 'min': '981px', 'max': '1239px' },
      // => @media (min-width: 768px and max-width: 1024px) { ... }
      'lg': { 'min': '1240px' },
      // => @media (min-width: 1024px ) { ... }

      'xl': { 'min': '1600px' },

      'xxl': { 'min': '1920px' },

    },
    extend: {
      flex: {
        '3': '0 0 25%',
        '4': '0 0 33.33%',
        '6': '0 0 50%',
        '12': '0 0 100%'
      },

      rounded:{
        'atom-sm': '4px',
        'atom-badges':'16px'
      },

      
      boxShadow: {
        'sm':'0 8px 20px rgba(0, 0, 0, 0.16)',
        'normal': '0 3px 15px rgba(0, 0, 0, 0.06)',
        
      },
      
      fontSize: {
        xxs:['11px','16px'],
        xs: ['12px', '18px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
       
      },
      colors: {
        //Sameer colours
        atom_BerKeleyBlue: '#022B5C',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '767px',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },         
        }
      })
    }
  ],
}
