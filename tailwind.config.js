/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink':         '#0c0b09',
        'surface':     '#131210',
        'card':        '#1a1916',
        'card-hover':  '#1f1e1a',
        'border':      '#2c2924',
        'border-light':'#3a3630',
        'gold':        '#a8834e',
        'gold-light':  '#c4a06b',
        'gold-dim':    '#6b5432',
        'text':        '#e2d9cc',
        'text-muted':  '#7a7268',
        'text-dim':    '#4a4540',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display':  ['clamp(3rem, 7vw, 6.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'title':    ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.25' }],
        'eyebrow':  ['0.6875rem', { lineHeight: '1', letterSpacing: '0.14em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 9rem)',
      },
      maxWidth: {
        'prose-sm': '38ch',
        'prose-md': '52ch',
        'prose-lg': '66ch',
      },
      transitionTimingFunction: {
        'cinematic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'fade-in': 'fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) both',
      },
    },
  },
  plugins: [],
}
