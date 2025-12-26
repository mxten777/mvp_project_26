import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PremiumThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

// 🏨 프리미엄 레이아웃 컴포넌트 - 럭셔리 호텔 수준의 경험
const PremiumLayout = React.memo(function PremiumLayout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // KETRI: removed header scroll position logic to keep header fixed

  return (
    <div className={`min-h-screen flex flex-col font-sans relative overflow-x-hidden transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-slate-50 via-white to-brand-light/20'
    }`}>
      {/* 배경 장식 요소 */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute top-20 -right-20 w-96 h-96 rounded-full blur-3xl animate-float transition-colors duration-500 ${
          isDark 
            ? 'bg-gradient-to-br from-purple-900/20 to-blue-900/10' 
            : 'bg-gradient-to-br from-brand-primary/10 to-brand-secondary/5'
        }`} />
        <div className={`absolute bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl animate-float transition-colors duration-500 ${
          isDark 
            ? 'bg-gradient-to-br from-indigo-900/20 to-purple-800/10' 
            : 'bg-gradient-to-br from-brand-accent/10 to-brand-gold/5'
        }`} style={{ animationDelay: '3s' }} />
      </div>

      {/* 프리미엄 헤더 (fixed, non-animating) */}
      <header
        className={`w-full z-40 app-header glass-morphism border-b shadow-lg backdrop-blur-xl py-3 ${isDark ? 'border-gray-700/50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'border-white/20 bg-gradient-to-r from-brand-primary via-brand-secondary to-purple-900'}`}
        role="banner"
        aria-label="프리미엄 호텔 헤더"
      >
        {/* 럭셔리 장식 라인 */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-gold via-brand-accent to-brand-gold rounded-r-lg hidden md:block animate-pulse-glow" />
        <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-brand-gold via-brand-accent to-brand-gold rounded-l-lg hidden md:block animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between app-header-inner">
          {/* 로고 & 브랜드 */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-gold to-brand-accent rounded-full flex items-center justify-center shadow-xl shadow-brand-gold/30 animate-float">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="url(#premium-gradient)"/>
                  <path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="premium-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffd60a" />
                      <stop offset="100%" stopColor="#f72585" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-brand-gold/40 to-brand-accent/40 rounded-full blur animate-pulse" />
            </div>
            <Link 
              to="/" 
              className={`
                text-2xl md:text-3xl font-display font-black tracking-tight drop-shadow-xl
                bg-gradient-to-r from-brand-gold via-white to-brand-gold bg-clip-text text-transparent
                hover:scale-105 transition-all duration-300
              `}
            >
              Resort BAIKAL ✨
            </Link>
          </div>
          
          {/* 프리미엄 데스크톱 내비게이션 */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            <nav className="flex gap-3 text-sm font-semibold">
              {[
                { to: '/', label: '홈', icon: '🏠' },
                { to: '/intro', label: '소개', icon: '✨' },
                { to: '/rooms', label: '객실', icon: '🛏️' },
                { to: '/facilities', label: '시설', icon: '🏊' },
                { to: '/events', label: '이벤트', icon: '🎉' },
                { to: '/booking', label: '예약', icon: '📅' }
              ].map(({ to, label, icon }) => (
                <Link 
                  key={to}
                  to={to} 
                  className={`
                    group relative px-2 py-1.5 rounded-lg transition-all duration-300 whitespace-nowrap
                    ${location.pathname === to 
                      ? 'text-brand-gold bg-white/10 shadow-lg shadow-brand-gold/20' 
                      : 'text-white/90 hover:text-brand-gold hover:bg-white/5'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center gap-1.5">
                    <span className="text-xs">{icon}</span>
                    <span>{label}</span>
                  </span>
                  {location.pathname === to && (
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/20 to-brand-accent/20 rounded-lg animate-pulse" />
                  )}
                </Link>
              ))}
            </nav>
            
            {/* 고객센터 - 더 컴팩트하게 */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-lg backdrop-blur-sm border-2 border-yellow-400/60 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
              <svg className="w-4 h-4 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{
                filter: 'drop-shadow(0 0 8px rgba(253, 224, 71, 0.8)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))'
              }}>
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
              </svg>
              <span className="text-xs text-white font-black" style={{
                textShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.8)'
              }}>02-5678-9012</span>
            </div>
            
            {/* 테마 토글 */}
            <div className="hidden md:block">
              <PremiumThemeToggle size="sm" showLabel={false} />
            </div>

            {/* GitHub 링크 - 컴팩트하게 */}
            <a 
              href="https://github.com/mxten777/mvp_project_26" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 hover:text-brand-gold hover:scale-110 transition-all duration-300" 
              title="GitHub Repository"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </a>
          </div>

          {/* 프리미엄 모바일 햄버거 버튼 */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:text-brand-gold hover:scale-110 transition-all duration-300"
            aria-label="메뉴 열기"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* 프리미엄 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass-morphism border-t border-white/20 shadow-2xl z-50 backdrop-blur-xl">
            <div className="px-6 py-8 space-y-6">
              <nav className="space-y-4">
                {[
                  { to: '/', label: '홈', icon: '🏠' },
                  { to: '/intro', label: '소개', icon: '✨' },
                  { to: '/rooms', label: '객실', icon: '🛏️' },
                  { to: '/facilities', label: '시설', icon: '🏊' },
                  { to: '/events', label: '이벤트', icon: '🎉' },
                  { to: '/booking', label: '예약', icon: '📅' },
                  { to: '/contact', label: '연락처', icon: '📞' },
                  { to: '/admin', label: '관리자', icon: '⚙️' }
                ].map(({ to, label, icon }) => (
                  <Link 
                    key={to}
                    to={to} 
                    className={`
                      group flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300
                      ${location.pathname === to 
                        ? 'text-brand-gold bg-gradient-to-r from-brand-gold/20 to-brand-accent/20 shadow-lg' 
                        : 'text-white/90 hover:text-brand-gold hover:bg-white/10'
                      }
                    `}
                    onClick={toggleMobileMenu}
                  >
                    <span className="text-lg">{icon}</span>
                    <span className="font-medium">{label}</span>
                    {location.pathname === to && (
                      <div className="ml-auto w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
                    )}
                  </Link>
                ))}
              </nav>
              
              <div className="pt-6 border-t border-white/20 space-y-4">
                {/* 다크모드 토글 - 모바일용 */}
                <div className="px-4 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <PremiumThemeToggle size="md" showLabel={true} />
                </div>
                
                {/* 고객센터 */}
                <div className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <svg className="w-5 h-5 text-yellow-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                  </svg>
                  <span className="text-white font-bold drop-shadow-lg">고객센터 02-5678-9012</span>
                </div>
                
                {/* GitHub 링크 */}
                <a 
                  href="https://github.com/mxten777/mvp_project_26" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl backdrop-blur-sm text-white/90 hover:text-brand-gold transition-all duration-300"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                  <span className="font-medium">GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 프리미엄 본문 콘텐츠 */}
      <main 
        className={`${location.pathname !== '/' ? 'pt-header' : ''} flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10`} 
        role="main" 
        aria-label="메인 콘텐츠"
      >
        <div className="animate-fadeIn">
          {children}
        </div>
      </main>

      {/* 프리미엄 푸터 */}
      <footer 
        className="
          w-full mt-16 relative z-10
          bg-gradient-to-r from-brand-primary via-brand-secondary to-purple-900
          shadow-2xl shadow-brand-primary/30
        " 
        role="contentinfo" 
        aria-label="프리미엄 호텔 푸터"
      >
        {/* 럭셔리 장식 요소 */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-accent/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          {/* 메인 푸터 콘텐츠 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* 브랜드 섹션 */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-gold to-brand-accent rounded-full flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="url(#footer-gradient)"/>
                    <path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffd60a" />
                        <stop offset="100%" stopColor="#f72585" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-display font-black text-2xl bg-gradient-to-r from-brand-gold to-white bg-clip-text text-transparent">
                  Resort BAIKAL ✨
                </span>
              </div>
              <p className="text-white/90 text-base leading-relaxed font-medium">
                바이칼의 아름다운 자연과 함께하는<br />
                프리미엄 럭셔리 리조트 경험
              </p>
            </div>

            {/* 연락처 정보 */}
            <div className="text-center">
              <h3 className="text-white font-black text-2xl mb-6 flex items-center justify-center gap-3">
                <span className="text-3xl">📞</span>
                <span className="drop-shadow-lg">연락처</span>
              </h3>
              <div className="space-y-4 text-white">
                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-sm rounded-xl px-6 py-4 hover:from-yellow-500/40 hover:to-orange-500/40 transition-all border-2 border-yellow-400/60 shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                  <svg className="w-7 h-7 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{
                    filter: 'drop-shadow(0 0 12px rgba(253, 224, 71, 1)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))'
                  }}>
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/>
                  </svg>
                  <span className="font-black text-xl text-white" style={{
                    textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(250, 204, 21, 0.8), 0 4px 8px rgba(0, 0, 0, 0.9)'
                  }}>02-5678-9012</span>
                </div>
                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-sm rounded-xl px-6 py-4 hover:from-yellow-500/40 hover:to-orange-500/40 transition-all border-2 border-yellow-400/60 shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                  <svg className="w-7 h-7 text-yellow-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{
                    filter: 'drop-shadow(0 0 12px rgba(253, 224, 71, 1)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))'
                  }}>
                    <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <a href="mailto:info@baikalsys.kr" className="font-black text-xl text-white hover:text-yellow-200 transition-colors" style={{
                    textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(250, 204, 21, 0.8), 0 4px 8px rgba(0, 0, 0, 0.9)'
                  }}>
                    info@baikalsys.kr
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500/30 to-blue-500/30 backdrop-blur-sm rounded-xl px-6 py-4 hover:from-purple-500/40 hover:to-blue-500/40 transition-all border-2 border-purple-400/60 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <svg className="w-7 h-7 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" style={{
                    filter: 'drop-shadow(0 0 12px rgba(216, 180, 254, 1)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.8))'
                  }}>
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-black text-lg text-white" style={{
                    textShadow: '0 0 15px rgba(255, 255, 255, 1), 0 0 30px rgba(168, 85, 247, 0.8), 0 4px 8px rgba(0, 0, 0, 0.9)'
                  }}>바이칼 프리미엄 리조트</span>
                </div>
              </div>
            </div>

            {/* 소셜 & 개발자 정보 */}
            <div className="text-center md:text-right">
              <h3 className="text-white font-black text-xl mb-6">🔗 연결</h3>
              <div className="flex justify-center md:justify-end gap-4 mb-4">
                <a 
                  href="https://github.com/mxten777/mvp_project_26" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/80 hover:text-brand-gold hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  title="GitHub Repository"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                </a>
              </div>
              <p className="text-white/60 text-xs">
                Built with ❤️ using React & Vite
              </p>
            </div>
          </div>

          {/* 하단 구분선 & 저작권 */}
          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-white/60 text-sm">
                &copy; {new Date().getFullYear()} Resort BAIKAL. All rights reserved.
              </span>
              <div className="flex items-center gap-4 text-white/60 text-xs">
                <span>Privacy Policy</span>
                <span>•</span>
                <span>Terms of Service</span>
                <span>•</span>
                <span>Made with Premium Design System</span>
              </div>
            </div>
          </div>
        </div>

        {/* 푸터 장식 요소 */}
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-accent/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </footer>

    </div>
  );
});

export default PremiumLayout;
