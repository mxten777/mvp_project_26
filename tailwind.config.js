/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter Variable', 'Inter', 'Pretendard Variable', 'Pretendard',
          'Noto Sans KR', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif',
        ],
        heading: [
          'Poppins', 'Inter Variable', 'Pretendard Variable', 'system-ui', 'sans-serif',
        ],
        display: [
          'Space Grotesk', 'Poppins', 'Inter Variable', 'system-ui', 'sans-serif',
        ],
        mono: [
          'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace',
        ],
      },
      colors: {
        brand: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
          primary: '#1a0b2e',
          secondary: '#7209b7',
          accent: '#f72585',
          gold: '#ffd60a',
          pearl: '#f8f9ff',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'brand': '0 20px 25px -5px rgb(114 9 183 / 0.3), 0 8px 10px -6px rgb(247 37 133 / 0.2)',
        'brand-lg': '0 25px 50px -12px rgb(114 9 183 / 0.4)',
        'glow': '0 0 40px rgb(247 37 133 / 0.5)',
        'glow-sm': '0 0 20px rgb(114 9 183 / 0.3)',
        'inner-glow': 'inset 0 2px 4px 0 rgb(114 9 183 / 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
        'elevation-2': '0 3px 6px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.12)',
        'elevation-3': '0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.10)',
        'elevation-4': '0 15px 25px rgba(0,0,0,0.15), 0 5px 10px rgba(0,0,0,0.05)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a0b2e 0%, #7209b7 50%, #f72585 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ffd60a 0%, #f72585 50%, #7209b7 100%)',
        'gradient-pearl': 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f0f4ff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #2d1b69 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #f8f9ff 0%, #eef2ff 50%, #f0f4ff 100%)',
        'hero': 'linear-gradient(135deg, #1a0b2e 0%, #7209b7 30%, #f72585 70%, #ffd60a 100%)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'spin-slow': 'spin 8s linear infinite',
        'shimmer': 'shimmer 2s infinite',
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgb(114 9 183 / 0.3)' },
          '50%': { boxShadow: '0 0 40px rgb(247 37 133 / 0.5)' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          from: { transform: 'translateY(-20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { transform: 'scale(0.95)', opacity: '0' },
          to: { transform: 'scale(1)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.05)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

