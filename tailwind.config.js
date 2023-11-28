/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {

      },
      fontFamily: {
        thin: ['var(--font-creato-thin)'],
        light: ['var(--font-creato-light)'],
        regular: ['var(--font-creato-regular)'],
        medium: ['var(--font-creato-medium)'],
        bold: ['var(--font-creato-bold)'],
        extraBold: ['var(--font-creato-extraBold)'],
        black: ['var(--font-creato-black)'],
        permanentMarker: ['var(--font-marker)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
