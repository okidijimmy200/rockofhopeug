import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#17352F',
        leaf: '#2B725E',
        moss: '#DDE9DE',
        marigold: '#D98B63',
        clay: '#A95F4C',
        paper: '#FBF7EE',
        ink: '#18312B',
        mist: '#F2F5EF',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px rgba(23, 53, 47, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config
