# 🏔️ Resort BAIKAL - 팀원 개발 가이드

## 📋 프로젝트 개요

**Resort BAIKAL**은 바이칼 호수의 자연과 휴식을 담은 **프리미엄 리조트 예약/관리 시스템**입니다.
최고급 UI/UX와 완전한 모바일 최적화를 통해 경쟁력 있는 브랜드 경험을 제공합니다.

### 🎯 핵심 목표
- **프리미엄 경험**: 고급스럽고 세련된 디자인
- **완전한 반응형**: 모바일/태블릿/데스크탑 모든 기기 최적화
- **실시간 관리**: Firebase 기반 실시간 예약/관리 시스템
- **브랜드 일관성**: 퍼플 테마 기반 통합 디자인 시스템

---

## 🛠️ 기술 스택

### Frontend
- **⚡ Vite 7.1.3**: 빠른 개발 서버 및 빌드 도구
- **⚛️ React 19.1.1**: 최신 React with React Router DOM 7.8.2
- **🎨 TailwindCSS 3.4.0**: 유틸리티 기반 CSS 프레임워크
- **🔤 Typography**: Space Grotesk, Poppins, Inter Variable, JetBrains Mono, Pretendard

### Backend & Services
- **🔥 Firebase 9.23.0**: 
  - Authentication (사용자 인증)
  - Firestore (실시간 데이터베이스)
  - Storage (파일 저장)
  - Functions (서버리스 함수)

### Deployment
- **🚀 Vercel**: 프로덕션 배포 플랫폼
- **📊 Analytics**: 성능 모니터링 및 사용자 분석

---

## 📁 프로젝트 구조

```
mvp_project_26/
├── 📁 src/
│   ├── 📁 components/          # 재사용 가능한 컴포넌트
│   │   ├── Layout.jsx          # 메인 레이아웃 (네비게이션, 모바일 메뉴)
│   │   └── ToastHook.js        # 토스트 알림 훅
│   ├── 📁 pages/               # 페이지 컴포넌트들
│   │   ├── HomePage.jsx        # 메인 홈페이지
│   │   ├── AdminDashboard.jsx  # 관리자 대시보드 (모바일 최적화)
│   │   ├── RoomList.jsx        # 객실 목록
│   │   ├── Facilities.jsx      # 시설 안내
│   │   ├── Events.jsx          # 이벤트/프로그램
│   │   ├── BookingFlow.jsx     # 예약 프로세스
│   │   ├── MyBookings.jsx      # 내 예약 현황
│   │   ├── UserProfile.jsx     # 사용자 프로필
│   │   ├── Login.jsx           # 로그인
│   │   ├── Register.jsx        # 회원가입
│   │   ├── Contact.jsx         # 문의하기
│   │   ├── About.jsx           # 리조트 소개
│   │   └── NotFound.jsx        # 404 페이지
│   ├── 📁 config/              # 설정 파일들
│   │   └── firebase.js         # Firebase 초기화 설정
│   ├── Router.jsx              # 라우팅 설정 (13개 경로)
│   ├── App.jsx                 # 메인 앱 컴포넌트
│   ├── main.jsx                # 앱 진입점
│   └── index.css               # 글로벌 스타일 + 폰트 설정
├── 📁 public/                  # 정적 파일들
├── 📄 package.json             # 의존성 및 스크립트
├── 📄 tailwind.config.js       # TailwindCSS 설정 (커스텀 테마)
├── 📄 vite.config.js           # Vite 빌드 설정
├── 📄 vercel.json              # Vercel 배포 설정
├── 📄 .env.example             # 환경변수 템플릿
└── 📄 index.html               # HTML 템플릿
```

---

## 🎨 디자인 시스템

### 🎨 컬러 팔레트 (Purple Theme)
```css
/* Primary Purple */
purple-50: #faf5ff    purple-500: #a855f7    purple-900: #581c87
purple-100: #f3e8ff   purple-600: #9333ea    purple-950: #3b0764
purple-200: #e9d5ff   purple-700: #7c3aed
purple-300: #d8b4fe   purple-800: #6b21a8

/* Gradients */
bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400
bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700
```

### 🔤 타이포그래피 시스템
- **Display/Hero**: Space Grotesk (300-700 weight)
- **Headings**: Poppins (100-900 weight)
- **Body Text**: Inter Variable (100-900 weight)
- **Code/Mono**: JetBrains Mono (100-800 weight)
- **Korean**: Pretendard Variable + Noto Sans KR

### 📱 반응형 브레이크포인트
```css
sm: 640px    md: 768px    lg: 1024px    xl: 1280px    2xl: 1536px
```

---

## 🚀 개발 환경 설정

### 1️⃣ 저장소 클론
```bash
git clone https://github.com/mxten777/mvp_project_26.git
cd mvp_project_26
```

### 2️⃣ 의존성 설치
```bash
npm install
# 또는
pnpm install
```

### 3️⃣ 환경변수 설정
```bash
# .env.example을 복사하여 .env 파일 생성
cp .env.example .env

# Firebase 프로젝트 설정값으로 수정
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 4️⃣ 개발 서버 실행
```bash
npm run dev
# 기본 포트: http://localhost:5173
```

### 5️⃣ 프로덕션 빌드
```bash
npm run build
# 빌드 시간: ~4초, 최적화된 번들 생성
```

---

## 📱 주요 기능 및 페이지

### 🏠 **홈페이지** (`/`)
- 프리미엄 히어로 섹션
- 주요 기능 네비게이션 카드
- 반응형 레이아웃

### 👨‍💼 **관리자 대시보드** (`/admin`)
- **완전한 모바일 최적화** ✨
- 실시간 통계 카드
- 예약 현황 차트
- 모바일: 카드 레이아웃, 데스크탑: 테이블 레이아웃

### 🏨 **객실 관리** (`/rooms`)
- 객실 타입별 카테고리
- 가격 및 예약 상태
- 상세 정보 모달

### 🏊‍♂️ **시설 안내** (`/facilities`)
- 리조트 시설 소개
- 이미지 갤러리
- 이용 안내

### 🎉 **이벤트/프로그램** (`/events`)
- 계절별 이벤트
- 액티비티 프로그램
- 예약 연동

### 📝 **예약 시스템** (`/booking`)
- 단계별 예약 프로세스
- 실시간 가격 계산
- 결제 연동 준비

---

## 🔧 개발 가이드라인

### 📦 컴포넌트 작성 규칙
```jsx
// 1. 함수형 컴포넌트 사용
const ComponentName = () => {
  return (
    <div className="responsive-classes">
      {/* 내용 */}
    </div>
  );
};

// 2. 모바일 우선 반응형 클래스
<div className="p-4 md:p-6 lg:p-8">

// 3. 브랜드 컬러 사용
<button className="bg-purple-600 hover:bg-purple-700">
```

### 🎨 TailwindCSS 모범 사례
```css
/* 모바일 우선 (Mobile First) */
className="text-sm md:text-base lg:text-lg"

/* 그리드 시스템 */
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

/* 그라데이션 활용 */
className="bg-gradient-to-r from-purple-600 to-purple-400"
```

### 📱 모바일 최적화 체크리스트
- [ ] 터치 인터페이스 (최소 44px 터치 영역)
- [ ] 햄버거 메뉴 구현
- [ ] 카드 레이아웃으로 테이블 대체
- [ ] 적절한 여백 및 패딩
- [ ] 폰트 크기 반응형 조정

---

## 🔥 Firebase 연동 가이드

### 🔐 Authentication
```javascript
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

// 로그인 예시
const handleLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('로그인 실패:', error);
  }
};
```

### 📊 Firestore
```javascript
import { db } from '../config/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

// 데이터 추가
const addBooking = async (bookingData) => {
  await addDoc(collection(db, 'bookings'), bookingData);
};

// 데이터 조회
const getBookings = async () => {
  const snapshot = await getDocs(collection(db, 'bookings'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
```

---

## 🚀 배포 가이드

### Vercel 배포 (권장)
```bash
# 1. Vercel CLI 설치
npm i -g vercel

# 2. 로그인
vercel login

# 3. 프로젝트 연결
vercel

# 4. 프로덕션 배포
vercel --prod
```

### 환경변수 설정 (Vercel Dashboard)
1. Vercel 프로젝트 → Settings → Environment Variables
2. Firebase 설정값들을 동일한 이름으로 추가
3. 모든 환경에 적용 (Production, Preview, Development)

---

## 🧪 테스트 & 품질 관리

### 빌드 검증
```bash
# 프로덕션 빌드 테스트
npm run build

# 빌드 결과 미리보기
npm run preview
```

### 성능 최적화 현황
- **번들 크기**: CSS 25.34kB (gzip: 5.20kB), JS 294.14kB (gzip: 84.46kB)
- **빌드 시간**: ~4초
- **모듈 수**: 67개 모듈 최적화 완료

---

## 🐛 트러블슈팅

### 자주 발생하는 문제들

#### 1. 개발 서버가 안 켜질 때
```bash
# 포트 충돌 해결
npx kill-port 5173
npm run dev

# 또는 다른 포트 사용
npm run dev -- --port 8080
```

#### 2. Firebase 연결 오류
- `.env` 파일의 환경변수 확인
- Firebase 프로젝트 설정 재확인
- 브라우저 콘솔에서 오류 메시지 확인

#### 3. 빌드 오류
```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 클리어
npm run build -- --force
```

#### 4. TailwindCSS 스타일 미적용
- `tailwind.config.js` 파스 설정 확인
- 클래스명 오타 확인
- 개발 서버 재시작

---

## 📈 프로젝트 현황

### ✅ 완료된 기능
- [x] 프리미엄 UI/UX 디자인 시스템
- [x] 완전한 반응형 레이아웃
- [x] 13개 페이지 컴포넌트 구현
- [x] 모바일 최적화 (특히 AdminDashboard)
- [x] Firebase 설정 및 연동 준비
- [x] Vercel 배포 설정
- [x] 프리미엄 타이포그래피 시스템
- [x] 프로덕션 빌드 최적화

### 🚧 개발 예정
- [ ] Firebase 실제 데이터 연동
- [ ] 사용자 인증 플로우 완성
- [ ] 실시간 예약 시스템 구현
- [ ] 결제 시스템 연동
- [ ] 관리자 권한 시스템
- [ ] 푸시 알림 기능
- [ ] SEO 최적화
- [ ] 성능 모니터링 대시보드

---

## 👥 팀 협업 가이드

### Git 워크플로우
```bash
# 1. 새 기능 브랜치 생성
git checkout -b feature/새기능명

# 2. 변경사항 커밋
git add .
git commit -m "feat: 새 기능 설명"

# 3. 푸시 및 PR 생성
git push origin feature/새기능명
```

### 커밋 메시지 규칙
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경 (기능 변경 없음)
refactor: 코드 리팩토링
test: 테스트 코드 추가/수정
chore: 빌드 설정 등 기타 변경사항
```

### 코드 리뷰 체크리스트
- [ ] 모바일 반응형 테스트 완료
- [ ] 브랜드 컬러 가이드라인 준수
- [ ] 컴포넌트 재사용성 고려
- [ ] 성능 최적화 (번들 크기, 렌더링)
- [ ] 접근성 (a11y) 고려
- [ ] TypeScript 타입 안전성 (추후 적용)

---

## 📞 지원 및 문의

### 🆘 도움이 필요할 때
- **기술 문서**: 이 파일 및 README.md 참조
- **Firebase 공식 문서**: https://firebase.google.com/docs
- **TailwindCSS 문서**: https://tailwindcss.com/docs
- **React 공식 문서**: https://react.dev

### 📧 연락처
- **프로젝트 관리자**: [GitHub Issues](https://github.com/mxten777/mvp_project_26/issues)
- **긴급 문의**: 팀 채널 또는 직접 연락

---

## 🎯 다음 스프린트 목표

### 우선순위 높음 (이번 주)
1. **Firebase 실데이터 연동** - 예약 시스템 백엔드
2. **사용자 인증 완성** - 로그인/회원가입 플로우
3. **관리자 권한 시스템** - 역할 기반 접근 제어

### 우선순위 중간 (다음 주)
1. **결제 시스템 연동** - 실제 예약 결제 프로세스
2. **실시간 알림** - 예약 상태 변경 알림
3. **SEO 최적화** - 검색엔진 최적화

### 우선순위 낮음 (월말)
1. **성능 분석 대시보드** - 사용자 행동 분석
2. **A/B 테스트 시스템** - 전환율 최적화
3. **다국어 지원** - 국제화 준비

---

**🌟 Resort BAIKAL 팀, 최고의 프리미엄 리조트 시스템을 만들어봅시다! 🌟**

_마지막 업데이트: 2025년 10월 3일_