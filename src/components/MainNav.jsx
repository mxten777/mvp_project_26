import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navs = [
  { to: "/", label: "홈" },
  { to: "/intro", label: "리조트 소개" },
  { to: "/rooms", label: "객실 리스트" },
  { to: "/facilities", label: "편의시설" },
  { to: "/events", label: "이벤트" },
  { to: "/booking", label: "예약" },
];

export default function MainNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-white shadow mb-8 overflow-x-auto">
      {/* 모바일 햄버거 버튼 */}
      <div className="sm:hidden flex items-center px-4 py-3">
        <button
          className="text-purple-700 text-2xl focus:outline-none"
          onClick={() => setOpen(true)}
          aria-label="메뉴 열기"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
  <span className="ml-3 text-lg font-bold text-purple-700">Resort BAIKAL</span>
      </div>
      {/* 데스크탑 내비게이션 */}
      <div className="max-w-4xl mx-auto gap-3 sm:gap-4 px-2 sm:px-4 py-3 whitespace-nowrap overflow-x-auto hidden sm:flex">
        {navs.map((nav) => (
          <Link
            key={nav.to}
            to={nav.to}
            className={`font-medium px-2 py-1 rounded hover:bg-purple-50 transition ${pathname === nav.to ? "text-purple-700 font-bold" : "text-gray-700"}`}
          >
            {nav.label}
          </Link>
        ))}
      </div>
      {/* 모바일 드로어 메뉴 */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex">
          <div className="bg-white w-64 h-full shadow-lg p-6 flex flex-col animate-slideInLeft">
            <button className="self-end text-2xl text-gray-400 hover:text-purple-700 mb-6" onClick={() => setOpen(false)} aria-label="메뉴 닫기">×</button>
            {navs.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                className={`block px-2 py-3 rounded mb-1 text-lg hover:bg-purple-50 transition ${pathname === nav.to ? "text-purple-700 font-bold" : "text-gray-700"}`}
                onClick={() => setOpen(false)}
              >
                {nav.label}
              </Link>
            ))}
          </div>
          <div className="flex-1" onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
}
