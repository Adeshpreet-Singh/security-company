import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00d4ff',
          dim: '#00a8cc',
          dark: '#0088cc',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          surface: '#111111',
          card: '#141414',
          border: '#1e1e1e',
        },
        'slate-text': '#a0a0a0',
      },
      fontFamily: {
        heading: ['Bebas Neue', 'Impact', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'neon-flicker': 'neonFlicker 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.06)' },
        },
        neonFlicker: {
          '0%, 19%, 21%, 23%, 25%, 54%, 56%, 100%': {
            textShadow: '0 0 10px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.2)',
          },
          '20%, 24%, 55%': { textShadow: 'none' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
