/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {},
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
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        wind: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        breatheSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        breatheFast: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        activate: {
          '0%': { opacity: '0.25' },
          '50%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'wind': 'wind 7s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulseSlow 2.1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathe-slow': 'breatheSlow 4.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'breathe-fast': 'breatheFast 2.1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'activate': 'activate 2s cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
};
