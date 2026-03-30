import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0f9f6',
          100: '#dcf0e9',
          200: '#bbe2d5',
          300: '#8ccdb8',
          400: '#58b097',
          500: '#38957c',
          600: '#2a7863',
          700: '#246152',
          800: '#204e43',
          900: '#1d4139',
          950: '#0c2420',
        },
        gold: { 400: '#d4a853', 500: '#c49535' },
        cream: '#faf8f5',
        charcoal: '#1a1a2e',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'float':   'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config