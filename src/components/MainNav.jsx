
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navs = [
  { to: "/", label: "홈", icon: "🏠", color: "from-blue-500 to-cyan-500" },
  { to: "/intro", label: "소개", icon: "🏨", color: "from-purple-500 to-pink-500" },
  { to: "/rooms", label: "객실", icon: "🛏️", color: "from-green-500 to-emerald-500" },
  { to: "/facilities", label: "시설", icon: "🎯", color: "from-orange-500 to-red-500" },
  { to: "/events", label: "이벤트", icon: "🎉", color: "from-yellow-500 to-orange-500" },
  { to: "/booking", label: "예약", icon: "📅", color: "from-indigo-500 to-purple-500" },
];

const MainNav = React.memo(function MainNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // 키보드 접근성: ESC로 메뉴 닫기
  const handleKeyDown = (e) => {
    if (open && e.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <nav
      className="w-full bg-white dark:bg-gray-900 shadow-md mb-4 sm:mb-8 overflow-x-auto"
      role="navigation"
      aria-label="메인 내비게이션"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* 모바일 햄버거 버튼 */}
      <div className="sm:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-700 to-blue-600 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white text-sm font-bold">B</span>
          </div>
          <span className="text-lg font-bold text-purple-700 dark:text-purple-400">Resort BAIKAL</span>
        </div>
        <button
          className="text-purple-700 dark:text-purple-400 p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onClick={() => setOpen(true)}
          aria-label="메뉴 열기"
          aria-haspopup="true"
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
      {/* 데스크탑 내비게이션 */}
      <div className="max-w-4xl mx-auto gap-3 sm:gap-4 px-2 sm:px-4 py-3 whitespace-nowrap overflow-x-auto hidden sm:flex">
        {navs.map((nav) => (
          <Link
            key={nav.to}
            to={nav.to}
            className={`font-medium px-2 py-1 rounded hover:bg-purple-50 transition ${pathname === nav.to ? "text-purple-700 font-bold" : "text-gray-700"}`}
            aria-current={pathname === nav.to ? 'page' : undefined}
            tabIndex={0}
          >
            {nav.label}
          </Link>
        ))}
      </div>
      {/* 모바일 드로어 메뉴 */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex sm:hidden" role="dialog" aria-modal="true">
          <div className="bg-white dark:bg-gray-900 w-80 max-w-[85vw] h-full shadow-2xl flex flex-col border-r-4 border-purple-500/30">
            {/* 드로어 헤더 */}
            <div className="flex items-center justify-between p-6 border-b-2 border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-600 to-blue-600">
              <div className="flex items-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4 shadow-xl border border-white/30">
                  <span className="text-white font-black text-2xl">B</span>
                </div>
                <div>
                  <h2 className="text-2xl font-black text-white drop-shadow-lg">Resort BAIKAL</h2>
                  <p className="text-base text-white/90 font-semibold">✨ 프리미엄 리조트</p>
                </div>
              </div>
              <button
                className="p-3 rounded-2xl text-white/80 hover:text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 backdrop-blur-sm border border-white/20"
                onClick={() => setOpen(false)}
                aria-label="메뉴 닫기"
                tabIndex={0}
              >
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            {/* 네비게이션 메뉴 */}
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-3">
                {navs.map((nav) => (
                  <Link
                    key={nav.to}
                    to={nav.to}
                    className={`group flex items-center px-4 py-4 rounded-xl transition-all duration-300 ${
                      pathname === nav.to 
                        ? `bg-gradient-to-r ${nav.color} text-white shadow-lg transform scale-[1.02]` 
                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 shadow-md hover:shadow-lg hover:transform hover:scale-[1.01]"
                    }`}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === nav.to ? 'page' : undefined}
                    tabIndex={0}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 mr-4">
                      <span className="text-xl">{nav.icon}</span>
                    </div>
                    <span className="font-semibold text-lg">{nav.label}</span>
                    {pathname === nav.to && (
                      <span className="ml-auto">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* 드로어 푸터 - 간단하게 */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                <p className="font-medium">Resort BAIKAL</p>
                <p>Premium Experience ✨</p>
              </div>
            </div>
          </div>
          <div 
            className="flex-1" 
            onClick={() => setOpen(false)} 
            tabIndex={0} 
            aria-label="메뉴 닫기 영역"
          />
        </div>
      )}
    </nav>
  );
});

export default MainNav;
