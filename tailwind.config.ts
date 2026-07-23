import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        crimson: '#7A1C2E',
        'crimson-dark': '#5C1220',
        'crimson-light': '#9B2540',
        'crimson-bg': '#F9F0F2',
        gold: '#A0823A',
        'gold-light': '#C8A96E',
        'gold-pale': '#F5EDD8',
        'gold-dark': '#7A6020',
        paper: '#FAF8F5',
        surface: '#FFFFFF',
        border: '#EDE8E0',
        'border-dark': '#D6CFC4',
        ink: '#1A1410',
        'ink-mid': '#4A4238',
        'ink-muted': '#8A7E72',
        'ink-light': '#B8AFA4',
      },
      fontFamily: {
        display: ['Merriweather', 'Georgia', 'serif'],
        body: ['TT Norms', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1140px',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(26,20,16,0.06), 0 1px 2px rgba(26,20,16,0.04)',
        md: '0 8px 24px rgba(26,20,16,0.08), 0 2px 6px rgba(26,20,16,0.05)',
        lg: '0 20px 48px rgba(92,18,32,0.14), 0 6px 16px rgba(26,20,16,0.06)',
      },
    },
  },
  plugins: [],
}
export default config
