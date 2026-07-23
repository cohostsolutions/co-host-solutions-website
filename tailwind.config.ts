import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-red': '#9B1C31',
        'crimson': '#8B1D2F',
        'soft-gold': '#CBAF6E',
        'muted-gold': '#D4A24E',
        'light-beige': '#D1C6B1',
        'warm-beige': '#B49B7A',
        'cream': '#F5F0E8',
        'dark': '#2C2418',
        'text': '#3D3020',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
