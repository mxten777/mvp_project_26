import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const navs = [
  { to: "/", label: "홈", icon: "🏠", color: "from-purple-600 to-blue-600", description: "메인 페이지" },
  { to: "/intro", label: "소개", icon: "🏨", color: "from-blue-600 to-cyan-600", description: "리조트 소개" },
  { to: "/rooms", label: "객실", icon: "🛏️", color: "from-emerald-600 to-green-600", description: "객실 안내" },
  { to: "/facilities", label: "시설", icon: "🎯", color: "from-orange-600 to-red-600", description: "편의 시설" },
  { to: "/events", label: "이벤트", icon: "🎉", color: "from-pink-600 to-rose-600", description: "이벤트/프로모션" },
  { to: "/booking", label: "예약", icon: "✨", color: "from-indigo-600 to-purple-600", description: "객실 예약하기" },
];

const MainNav = React.memo(function MainNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 키보드 접근성: ESC로 메뉴 닫기
  const handleKeyDown = (e) => {
    if (open && e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-xl' 
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
      } border-b border-gray-200/50 dark:border-gray-700/50`}
      role="navigation"
      aria-label="메인 내비게이션"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* 🎨 프리미엄 모바일 헤더 */}
      <div className="sm:hidden flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-11 h-11 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white text-xl font-black">B</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
          </div>
          <div>
            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              BAIKAL
            </span>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Premium Resort</p>
          </div>
        </Link>
        
        {/* 햄버거 버튼 */}
        <button
          className="relative p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          onClick={() => setOpen(true)}
          aria-label="메뉴 열기"
          aria-haspopup="true"
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {/* 🖥️ 프리미엄 데스크탑 네비게이션 */}
      <div className="hidden sm:block max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                <span className="text-white text-2xl font-black">B</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div>
              <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                Resort BAIKAL
              </span>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold tracking-wider uppercase">Premium Luxury</p>
            </div>
          </Link>

          {/* 네비게이션 메뉴 */}
          <div className="flex items-center gap-3">
            {navs.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                className={`group relative px-6 py-3 rounded-xl font-black text-lg transition-all duration-300 ${
                  pathname === nav.to
                    ? `bg-gradient-to-r ${nav.color} text-white shadow-lg scale-105`
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                aria-current={pathname === nav.to ? 'page' : undefined}
                tabIndex={0}
              >
                <span className="flex items-center gap-2">
                  <span className="text-xl">{nav.icon}</span>
                  <span>{nav.label}</span>
                </span>
                {pathname === nav.to && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* 테마 토글 */}
            <div className="ml-2 pl-2 border-l border-gray-300 dark:border-gray-600">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      {/* 📱 프리미엄 모바일 드로어 메뉴 */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden" role="dialog" aria-modal="true">
          {/* 배경 오버레이 */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/90 via-purple-900/50 to-black/90 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            tabIndex={0}
            aria-label="메뉴 닫기 영역"
          />
          
          {/* 드로어 패널 */}
          <div className="relative w-[90%] max-w-md h-full bg-gradient-to-br from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900 shadow-2xl ml-auto animate-slide-in-right">
            {/* 🎨 헤더 */}
            <div className="relative p-8 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 overflow-hidden">
              {/* 장식 요소 */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl border border-white/30">
                      <span className="text-white font-black text-3xl">B</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-white drop-shadow-2xl">BAIKAL</h2>
                      <p className="text-white/90 font-semibold text-sm">Premium Resort</p>
                    </div>
                  </div>
                  
                  {/* 닫기 버튼 */}
                  <button
                    className="p-2.5 rounded-xl text-white/90 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 backdrop-blur-sm border border-white/20"
                    onClick={() => setOpen(false)}
                    aria-label="메뉴 닫기"
                    tabIndex={0}
                  >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                
                {/* 프로모션 배너 */}
                <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                  <p className="text-white/90 text-sm font-semibold">✨ 특별한 휴식을 경험하세요</p>
                  <p className="text-white/70 text-xs mt-1">바이칼 호수의 아름다움</p>
                </div>
              </div>
            </div>

            {/* 📋 메뉴 리스트 */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-3">
                {navs.map((nav) => (
                  <Link
                    key={nav.to}
                    to={nav.to}
                    className={`group block p-5 rounded-2xl transition-all duration-300 ${
                      pathname === nav.to 
                        ? `bg-gradient-to-r ${nav.color} text-white shadow-xl transform scale-[1.02]` 
                        : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg hover:scale-[1.01]"
                    }`}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === nav.to ? 'page' : undefined}
                    tabIndex={0}
                  >
                    <div className="flex items-center">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                        pathname === nav.to
                          ? "bg-white/20 backdrop-blur-sm"
                          : "bg-gray-100 dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600"
                      }`}>
                        <span className="text-2xl">{nav.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold text-lg ${pathname === nav.to ? "text-white" : ""}`}>
                          {nav.label}
                        </p>
                        <p className={`text-sm ${pathname === nav.to ? "text-white/80" : "text-gray-500 dark:text-gray-400"}`}>
                          {nav.description}
                        </p>
                      </div>
                      {pathname === nav.to && (
                        <div className="w-3 h-3 bg-white rounded-full shadow-lg"></div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

              {/* 👤 사용자 메뉴 */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">계정</p>
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    onClick={() => setOpen(false)}
                  >
                    <span>로그인</span>
                  </Link>
                  <Link
                    to="/signup"
                    className="flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-xl font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-purple-600 dark:hover:border-purple-400 transition-all duration-300 hover:scale-105"
                    onClick={() => setOpen(false)}
                  >
                    <span>회원가입</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* 푸터 */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Resort BAIKAL</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Premium Luxury Experience ✨</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
});

export default MainNav;
