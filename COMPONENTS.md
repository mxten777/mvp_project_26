# 🧩 Resort BAIKAL 컴포넌트 라이브러리

## 📋 컴포넌트 개요

Resort BAIKAL 시스템의 재사용 가능한 컴포넌트들과 사용법을 정리한 문서입니다.

---

## 🏗️ Layout 컴포넌트

### `Layout.jsx` - 메인 레이아웃
**위치**: `src/components/Layout.jsx`

```jsx
import Layout from '../components/Layout';

const MyPage = () => {
  return (
      <div>페이지 내용</div>
    </Layout>
  );
};
```
**Features:**
- ✅ 반응형 네비게이션
- ✅ 모바일 햄버거 메뉴
- ✅ 브랜드 로고 및 색상 일관성
- ✅ 푸터 포함

**Props:**
- `children` (ReactNode): 페이지 컨텐츠

**모바일 최적화:**
- 768px 이하: 햄버거 메뉴 활성화
- 터치 친화적 네비게이션
- 적절한 패딩 및 여백

---

## 🎨 UI 컴포넌트 패턴

### 버튼 컴포넌트
</button>

<button className="bg-white hover:bg-purple-50 text-purple-600 font-semibold py-3 px-6 rounded-lg border-2 border-purple-600 transition-all duration-200">
  Secondary Button
<button className="text-purple-600 hover:text-purple-800 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors duration-200">
</button>
```

### 카드 컴포넌트
```jsx
// Basic Card
<div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Card Title</h3>
  <p className="text-gray-600">Card content...</p>
</div>

// Feature Card (홈페이지용)
<div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:scale-105">
  <div className="text-4xl mb-4">{icon}</div>
  <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
  <p className="text-gray-600 mb-4">{description}</p>
</div>
// Stats Card (대시보드용)
<div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-purple-100 text-sm font-medium">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
    <div className="text-4xl opacity-80">{icon}</div>
  </div>
### 폼 컴포넌트
```jsx
  <input
    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200"
    placeholder="Enter your email"
  />
</div>

// Select Dropdown
<div className="mb-4">
    <option value="">Select room type</option>
    <option value="standard">Standard</option>
  </select>

// Textarea
<div className="mb-4">
  <label className="block text-gray-700 text-sm font-semibold mb-2">
    Special Requests
  </label>
  <textarea
    placeholder="Any special requests..."
  />


## 📱 반응형 패턴
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
      {/* 카드 내용 */}
  {stats.map(stat => (
    <div key={stat.id} className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
      {/* 통계 카드 */}
    </div>
  ))}
</div>

// 컨텐츠 + 사이드바
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  <div className="lg:col-span-2">
    {/* 메인 컨텐츠 */}
  </div>
  <div className="lg:col-span-1">
    {/* 사이드바 */}
  </div>
</div>
```

### 모바일 최적화 패턴
```jsx
// 모바일에서 테이블을 카드로 변환
<div className="hidden md:block">
  {/* 데스크탑 테이블 */}
  <table className="w-full">
    {/* 테이블 내용 */}
  </table>
</div>

<div className="md:hidden space-y-4">
  {/* 모바일 카드 */}
  {data.map(item => (
    <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold">{item.title}</h3>
        <span className="text-sm text-gray-500">{item.date}</span>
      </div>
      <p className="text-gray-600 text-sm mb-3">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-purple-600 font-semibold">{item.price}</span>
        <button className="text-sm bg-purple-600 text-white px-3 py-1 rounded">
          View
        </button>
      </div>
    </div>
  ))}
</div>

// 반응형 네비게이션
<nav className="hidden md:flex space-x-8">
  {/* 데스크탑 메뉴 */}
</nav>

<div className="md:hidden">
  {/* 모바일 햄버거 메뉴 */}
  <button className="p-2 rounded-md hover:bg-gray-100">
    <svg className="w-6 h-6">
      {/* 햄버거 아이콘 */}
    </svg>
  </button>
</div>
```

---

## 🎨 색상 시스템

### Primary Colors (Purple)
```css
/* TailwindCSS 클래스 */
bg-purple-50    /* #faf5ff - 가장 연한 보라 */
bg-purple-100   /* #f3e8ff */
bg-purple-200   /* #e9d5ff */
bg-purple-300   /* #d8b4fe */
bg-purple-400   /* #c084fc */
bg-purple-500   /* #a855f7 - 기본 보라 */
bg-purple-600   /* #9333ea - 주요 브랜드 색상 */
bg-purple-700   /* #7c3aed */
bg-purple-800   /* #6b21a8 */
bg-purple-900   /* #581c87 - 가장 진한 보라 */
bg-purple-950   /* #3b0764 */
```

### 그라데이션
```css
/* 기본 그라데이션 */
bg-gradient-to-r from-purple-600 to-purple-400
bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700
bg-gradient-to-t from-purple-600/20 to-transparent

/* 텍스트 그라데이션 */
bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent
```

### Semantic Colors
```css
/* 성공 */
bg-green-500    text-green-600    border-green-300

/* 경고 */
bg-yellow-500   text-yellow-600   border-yellow-300

/* 오류 */
bg-red-500      text-red-600      border-red-300

/* 정보 */
bg-blue-500     text-blue-600     border-blue-300

/* 중성 */
bg-gray-500     text-gray-600     border-gray-300
```

---

## 🔤 타이포그래피 시스템

### 폰트 패밀리
```css
/* Display/Hero 텍스트 */
font-space-grotesk    /* Space Grotesk */

/* 제목 */
font-poppins         /* Poppins */

/* 본문 */
font-inter           /* Inter Variable */

/* 코드/모노스페이스 */
font-jetbrains       /* JetBrains Mono */

/* 한글 */
font-pretendard      /* Pretendard Variable */
font-noto-sans-kr    /* Noto Sans KR */
```

### 텍스트 크기
```css
/* 헤드라인 */
text-6xl md:text-7xl lg:text-8xl    /* Hero 제목 */
text-4xl md:text-5xl lg:text-6xl    /* 페이지 제목 */
text-3xl md:text-4xl                /* 섹션 제목 */
text-2xl md:text-3xl                /* 서브 제목 */

/* 본문 */
text-lg md:text-xl                  /* 큰 본문 */
text-base md:text-lg                /* 기본 본문 */
text-sm md:text-base                /* 작은 본문 */
text-xs md:text-sm                  /* 캡션/라벨 */
```

### 타이포그래피 컴포넌트
```jsx
// Hero Title
<h1 className="font-space-grotesk text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
  Resort BAIKAL
</h1>

// Page Title
<h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-800">
  Page Title
</h1>

// Section Heading
<h2 className="font-poppins text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
  Section Heading
</h2>

// Body Text
<p className="font-inter text-base md:text-lg text-gray-600 leading-relaxed">
  Body paragraph text with good readability...
</p>

// Caption
<span className="font-inter text-xs md:text-sm text-gray-500">
  Caption or small text
</span>
```

---

## 🎯 상호작용 패턴

### 호버 효과
```css
/* 기본 호버 */
hover:bg-purple-700 transition-colors duration-200

/* 그림자 호버 */
hover:shadow-xl transition-shadow duration-300

/* 스케일 호버 */
hover:scale-105 transition-transform duration-300

/* 복합 호버 */
hover:bg-purple-700 hover:shadow-xl hover:scale-105 transition-all duration-300
```

### 포커스 상태
```css
/* 인풋 포커스 */
focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors duration-200

/* 버튼 포커스 */
focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50
```

### 애니메이션
```css
/* 페이드 인 */
opacity-0 animate-fade-in

/* 슬라이드 업 */
transform translate-y-4 opacity-0 animate-slide-up

/* 바운스 */
animate-bounce

/* 스핀 (로딩) */
animate-spin
```

---

## 📊 대시보드 컴포넌트

### 통계 카드
```jsx
const StatCard = ({ title, value, icon, change, changeType }) => (
  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-purple-100 text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className="text-4xl opacity-80">{icon}</div>
    </div>
    {change && (
      <div className="flex items-center text-sm">
        <span className={`flex items-center ${
          changeType === 'increase' ? 'text-green-200' : 'text-red-200'
        }`}>
          {changeType === 'increase' ? '↗' : '↘'} {change}%
        </span>
        <span className="text-purple-100 ml-2">vs last month</span>
      </div>
    )}
  </div>
);
```

### 차트 컨테이너
```jsx
const ChartContainer = ({ title, children }) => (
  <div className="bg-white rounded-xl shadow-lg p-6">
    <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
    <div className="h-80">
      {children}
    </div>
  </div>
);
```

---

## 🔄 상태 관리 패턴

### 로딩 상태
```jsx
// 로딩 스피너
<div className="flex items-center justify-center p-8">
  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
</div>

// 스켈레톤 로딩
<div className="animate-pulse">
  <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
  <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
</div>

// 로딩 오버레이
<div className="relative">
  {isLoading && (
    <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
    </div>
  )}
  {/* 컨텐츠 */}
</div>
```

### 에러 상태
```jsx
// 에러 메시지
<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
  <div className="flex">
    <div className="text-red-400">⚠</div>
    <div className="ml-3">
      <h3 className="text-sm font-medium text-red-800">Error occurred</h3>
      <p className="mt-1 text-sm text-red-700">{errorMessage}</p>
    </div>
  </div>
</div>

// 빈 상태
<div className="text-center py-12">
  <div className="text-6xl text-gray-300 mb-4">📭</div>
  <h3 className="text-lg font-medium text-gray-800 mb-2">No data found</h3>
  <p className="text-gray-600">There are no items to display at the moment.</p>
</div>
```

---

## 🎪 토스트 알림

### `ToastHook.js` 사용법
**위치**: `src/components/ToastHook.js`

```jsx
import { useToast } from '../components/ToastHook';

const MyComponent = () => {
  const { showToast } = useToast();
  
  const handleSuccess = () => {
    showToast('Operation successful!', 'success');
  };
  
  const handleError = () => {
    showToast('Something went wrong', 'error');
  };
  
  const handleInfo = () => {
    showToast('Information message', 'info');
  };
  
  return (
    <div>
      <button onClick={handleSuccess}>Success Toast</button>
      <button onClick={handleError}>Error Toast</button>
      <button onClick={handleInfo}>Info Toast</button>
    </div>
  );
};
```

**토스트 타입:**
- `success`: 성공 메시지 (녹색)
- `error`: 오류 메시지 (빨간색)
- `info`: 정보 메시지 (파란색)
- `warning`: 경고 메시지 (노란색)

---

## 📐 레이아웃 패턴

### 페이지 래퍼
```jsx
// 기본 페이지 레이아웃
<Layout>
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 페이지 헤더 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Page Title</h1>
        <p className="mt-2 text-gray-600">Page description</p>
      </div>
      
      {/* 페이지 컨텐츠 */}
      <div className="space-y-8">
        {/* 컨텐츠 섹션들 */}
      </div>
    </div>
  </div>
</Layout>

// 대시보드 레이아웃
<Layout>
  <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 대시보드 헤더 */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="mt-1 text-gray-600">Welcome back!</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            New Action
          </button>
        </div>
      </div>
      
      {/* 통계 카드 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {/* 통계 카드들 */}
      </div>
      
      {/* 차트 및 테이블 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 차트 컴포넌트들 */}
      </div>
    </div>
  </div>
</Layout>
```

---

## 🔧 유틸리티 클래스

### 간격 시스템
```css
/* Padding */
p-4     /* 1rem */
p-6     /* 1.5rem */
p-8     /* 2rem */
px-4    /* 좌우 1rem */
py-6    /* 상하 1.5rem */

/* Margin */
m-4     /* 1rem */
mb-6    /* 하단 1.5rem */
mt-8    /* 상단 2rem */
mx-auto /* 좌우 자동 (중앙 정렬) */

/* Gap (Flexbox/Grid) */
gap-4   /* 1rem */
gap-6   /* 1.5rem */
gap-8   /* 2rem */
```

### 레이아웃 유틸리티
```css
/* Container */
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8

/* Flexbox */
flex items-center justify-between
flex flex-col sm:flex-row
flex-wrap

/* Grid */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
grid-cols-1 md:grid-cols-2 xl:grid-cols-4

/* Position */
relative
absolute inset-0
sticky top-0
```

---

**🎨 이 컴포넌트 라이브러리를 참조하여 일관된 UI/UX를 구현해주세요. 새로운 패턴이 필요한 경우 이 문서를 업데이트해주세요.**