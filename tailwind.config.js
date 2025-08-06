/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solana: {
          purple: '#9945FF',
          teal: '#14F195',
          green: '#00FF88',
          dark: '#0A0A0A',
          darker: '#050505',
          gray: '#1A1A1A',
          lightGray: '#2A2A2A',
        },
        neon: {
          purple: '#9945FF',
          teal: '#14F195',
          green: '#00FF88',
          pink: '#FF6B9D',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #9945FF, 0 0 10px #9945FF, 0 0 15px #9945FF' },
          '100%': { boxShadow: '0 0 10px #9945FF, 0 0 20px #9945FF, 0 0 30px #9945FF' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
} 