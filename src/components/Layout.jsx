import { useState } from 'react';

// 공통 레이아웃(헤더/푸터 포함)
export default function Layout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light via-white to-brand-light font-sans">
      {/* 헤더 */}
      <header className="w-full bg-gradient-to-r from-brand via-brand-dark to-brand shadow-brand py-5 mb-6 relative transition-all duration-500">
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-300 to-purple-700 rounded-r-lg hidden md:block" />
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-brand animate-spin-slow">
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#a78bfa"/>
                <path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight drop-shadow-lg">Resort BAIKAL</span>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-6">
            <span className="text-base text-brand-light font-semibold">
              <svg className="inline mr-1" width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="#a78bfa"/>
              </svg>
              고객센터 1234-5678
            </span>
            <a href="https://github.com/mxten777/mvp_project_26" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-white transition" title="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </a>
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="메뉴 열기"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark shadow-brand z-50 border-t border-brand-light/20">
            <div className="px-4 py-6 space-y-4">
              <nav className="space-y-3">
                <a href="/" className="block text-white hover:text-brand-light transition-colors py-2 px-3 rounded-lg hover:bg-white/10">홈</a>
                <a href="/rooms" className="block text-white hover:text-brand-light transition-colors py-2 px-3 rounded-lg hover:bg-white/10">객실</a>
                <a href="/facilities" className="block text-white hover:text-brand-light transition-colors py-2 px-3 rounded-lg hover:bg-white/10">시설</a>
                <a href="/events" className="block text-white hover:text-brand-light transition-colors py-2 px-3 rounded-lg hover:bg-white/10">이벤트</a>
                <a href="/booking" className="block text-white hover:text-brand-light transition-colors py-2 px-3 rounded-lg hover:bg-white/10">예약</a>
                <a href="/contact" className="block text-white hover:text-brand-light transition-colors py-2 px-3 rounded-lg hover:bg-white/10">연락처</a>
                <a href="/admin" className="block text-white hover:text-brand-light transition-colors py-2 px-3 rounded-lg hover:bg-white/10">관리자</a>
              </nav>
              <div className="pt-4 border-t border-brand-light/20 space-y-3">
                <div className="text-brand-light text-sm">
                  <svg className="inline mr-2" width="16" height="16" fill="none" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="#a78bfa"/>
                  </svg>
                  고객센터 1234-5678
                </div>
                <a href="https://github.com/mxten777/mvp_project_26" target="_blank" rel="noopener noreferrer" className="flex items-center text-brand-light hover:text-white transition text-sm">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="mr-2">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 본문 */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-4 text-base font-sans animate-fade-in">
        {children}
      </main>

      {/* 푸터 */}
      <footer className="w-full bg-gradient-to-r from-brand-dark via-brand to-brand-dark text-brand-light text-center py-7 mt-10 text-xs sm:text-sm shadow-brand border-t border-brand-light/20 animate-fade-in">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-3">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#a78bfa"/>
              <path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="font-display font-extrabold tracking-tight text-lg">Resort BAIKAL</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-brand-light/80">&copy; {new Date().getFullYear()} All rights reserved.</span>
            <a href="mailto:info@resortbaikal.com" className="text-brand-light hover:text-white transition underline underline-offset-2">info@resortbaikal.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
