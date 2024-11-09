/** @type {import('tailwindcss').Config} */
// const colors = require("tailwindcss/colors");

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Roboto Mono', 'monospace'],
      poppins: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      gray0: '#f6f9fc',
      gray1: '#dbe1e8',
      gray2: '#b2becd',
      gray3: '#6c7983',
      gray4: '#454e56',
      gray5: '#2a2e35',
      gray6: '#202023',
      gray7: '#0f0f0f',
      redLight: '#ff414e',
      red: '#e13b47',
      orangeLight: '#ff7a00',
      orange: '#e66e00',
      blueLight: '#3b82f6',
      blue: '#005ac4',
      greenLight: '#a4c34a',
      green: '#387002',
      purple: '#9166cc',
      purpleLight: '#a372e7',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        navBackground: 'rgba(248, 248, 248, 0.6)',
        navBackgroundDark: 'rgba(15, 15, 15, 0.6)',
        cardBackground: 'rgba(248, 248, 248, 0.98)',
        cardBackgroundDark: 'rgba(15, 15, 15, 0.98)',
        darkHoverlay: 'rgba(120, 120, 120, 0.2)',
        lightHoverlay: 'rgba(200, 200, 200, 0.2)',
      },
      boxShadow: {
        light: '0 2px 4px rgba(0, 30, 84, 0.12)',
        lightToc: 'rgba(0, 0, 0, 0.2) 0px 8px 10px 0px',
        lightHover: '0 6px 12px -2px rgba(50, 50, 93, 0.25)',

        dark: '0 2px 4px rgba(0, 0, 0, 0.3)',
        darkToc: 'rgba(0, 0, 0, 0.6) 0px 8px 10px 0px',
        darkHover: '0 6px 12px -2px rgba(0, 0, 0, 0.6)',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              'font-weight': 'normal',
              'font-size': '2.5rem',
            },
            h2: {
              'font-weight': 'normal',
              'font-size': '2rem',
            },
            h3: {
              'font-weight': 'normal',
              'font-size': '1.75rem',
            },
            h4: {
              'font-weight': 'normal',
              'font-size': '1.5rem',
            },
            h5: {
              'font-weight': 'normal',
              'font-size': '1.25rem',
            }
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
