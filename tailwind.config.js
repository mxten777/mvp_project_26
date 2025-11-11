/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // 메인 산세리프 폰트 (본문용)
        sans: [
          'Inter Variable',
          'Inter',
          'Pretendard Variable',
          'Pretendard',
          'Noto Sans KR',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
        // 헤딩용 폰트 (제목용)
        heading: [
          'Poppins',
          'Inter Variable',
          'Inter',
          'Pretendard Variable',
          'Pretendard',
          'system-ui',
          'sans-serif',
        ],
        // 디스플레이 폰트 (브랜드명, 큰 제목용)
        display: [
          'Space Grotesk',
          'Poppins',
          'Inter Variable',
          'system-ui',
          'sans-serif',
        ],
        // 모노스페이스 폰트 (코드, 숫자용)
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'Monaco',
          'monospace',
        ],
      },
      colors: {
        // 프리미엄 브랜드 컬러 시스템
        brand: {
          50: '#f8f9ff',
          100: '#f0f4ff',
          200: '#e0e7ff',
          300: '#c7d2fe',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          primary: '#1a0b2e',
          secondary: '#7209b7',
          accent: '#f72585',
          gold: '#ffd60a',
          pearl: '#f8f9ff',
        },
        // 뉴트럴 그레이 시스템
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
        },
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'brand': '0 20px 25px -5px rgb(114 9 183 / 0.3), 0 8px 10px -6px rgb(247 37 133 / 0.2)',
        'brand-lg': '0 25px 50px -12px rgb(114 9 183 / 0.4)',
        'glow': '0 0 40px rgb(247 37 133 / 0.5)',
        'inner-glow': 'inset 0 2px 4px 0 rgb(114 9 183 / 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a0b2e 0%, #7209b7 50%, #f72585 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #ffd60a 0%, #f72585 50%, #7209b7 100%)',
        'gradient-pearl': 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 50%, #f0f4ff 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0f23 0%, #1a0b2e 50%, #2d1b69 100%)',
        'hero': 'linear-gradient(135deg, #1a0b2e 0%, #7209b7 30%, #f72585 70%, #ffd60a 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'slide-in-up': 'slideInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

