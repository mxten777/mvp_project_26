/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        brand: {
          DEFAULT: '#7c3aed', // 퍼플 메인
          light: '#a78bfa',
          dark: '#4c1d95',
        },
      },
      boxShadow: {
        'brand': '0 4px 24px 0 rgba(124,58,237,0.12)',
      },
      backgroundImage: {
        'hero': 'linear-gradient(135deg, #a78bfa 0%, #fff 100%)',
      },
    },
  },
  plugins: [],
}

