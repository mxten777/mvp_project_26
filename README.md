
npm install
npm run dev

# Resort BAIKAL

최고의 경쟁력과 고급스러움, 세련된 디자인을 갖춘 프리미엄 바이칼 리조트 예약/관리 시스템

## 프로젝트 개요

Resort BAIKAL은 바이칼 호수의 자연과 휴식을 담은 프리미엄 리조트 예약/관리 웹 애플리케이션입니다.
최신 트렌드와 경쟁력 있는 기능, 고급스러운 UI/UX, 세련된 퍼플 테마로 누구나 쉽고 빠르게 예약·관리가 가능합니다.
고객은 객실/시설/이벤트/예약을 직관적으로 확인·예약할 수 있고, 관리자는 실시간으로 리조트 운영을 효율적으로 관리할 수 있습니다.


## 주요 특징
- 고급스럽고 세련된 디자인, 경쟁력 있는 브랜드 경험
- 반응형 SPA: Vite + React + TailwindCSS 기반, 모바일/PC 모두 최적화
- 실시간 예약/관리: Firebase(인증, DB, 스토리지, 함수) 연동
- 관리자/고객 분리 UI, 직관적 네비게이션, 퍼플 테마, 세련된 UI/UX
- Vercel로 빠른 배포 및 미리보기 지원

## 기술 스택
- Vite, React, TailwindCSS
- Firebase (Auth, Firestore, Storage, Functions)
- Vercel (배포)

## 폴더 구조
```
src/
	components/   # 공통 컴포넌트
	pages/        # 라우트/화면 단위
	hooks/        # 커스텀 훅
	utils/        # 유틸리티 함수
	firebase/     # 파이어베이스 초기화
```

## 환경변수 설정
Firebase 연동을 위해 .env 파일에 환경변수 입력 필요 (.env.example 참고)

## 실행 방법
```bash
npm install
npm run dev
```

## 배포
Vercel 연동 및 환경변수 세팅 후, 아래 명령어로 배포
```bash
vercel --prod
```

## 기여
이슈/PR 환영합니다! (스타도 부탁드려요 ⭐)

## 라이선스
MIT
