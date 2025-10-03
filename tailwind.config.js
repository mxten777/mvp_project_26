/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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

