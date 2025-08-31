
# Resort BAIKAL - 프리미엄 리조트 예약 시스템

## 스택
- Vite + React + TailwindCSS
- Firebase (Auth, Firestore, Storage, Functions)
- Vercel (배포)

## 폴더 구조
- src/components: 공통 컴포넌트
- src/pages: 라우트/화면 단위
- src/hooks: 커스텀 훅
- src/utils: 유틸리티 함수
- src/firebase: 파이어베이스 초기화

## 환경변수
.env 파일에 Firebase 설정 필요 (.env.example 참고)

## 실행
```
npm install
npm run dev
```

## 배포
- Vercel 연동 및 환경변수 세팅 필요
