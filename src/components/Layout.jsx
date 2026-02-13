import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PremiumThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

// SVG Icon components for cleaner, professional look
const Icons = {
  Logo: () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#logo-grad)" />
      <path d="M10 22V12l6-4 6 4v10" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 22v-5h4v5" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#ffd60a" />
          <stop offset="1" stopColor="#f72585" />
        </linearGradient>
      </defs>
    </svg>
  ),
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  ),
  MapPin: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  GitHub: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
    </svg>
  ),
  Menu: ({ open }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      {open ? (
        <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
      ) : (
        <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
      )}
    </svg>
  ),
};

// Navigation items
const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/intro', label: 'About' },
  { to: '/rooms', label: 'Rooms' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/events', label: 'Events' },
  { to: '/booking', label: 'Booking' },
];

const PremiumLayout = React.memo(function PremiumLayout({ children }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useTheme();

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ESC key to close mobile menu
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') closeMobileMenu(); };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <div className={`min-h-screen flex flex-col font-sans relative overflow-x-hidden transition-colors duration-500 ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-slate-50 via-white to-brand-50/20'
    }`}>
      {/* Subtle background decorations */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40" aria-hidden="true">
        <div className={`absolute top-20 -right-32 w-96 h-96 rounded-full blur-3xl animate-float-slow ${
          isDark ? 'bg-purple-900/20' : 'bg-brand-200/30'
        }`} />
        <div className={`absolute bottom-40 -left-32 w-80 h-80 rounded-full blur-3xl animate-float-slow ${
          isDark ? 'bg-indigo-900/20' : 'bg-brand-100/40'
        }`} style={{ animationDelay: '3s' }} />
      </div>

      {/* ─── Header ─── */}
      <header
        className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? `py-2 backdrop-blur-xl border-b shadow-lg ${
                isDark ? 'bg-gray-900/90 border-gray-700/50' : 'bg-white/80 border-gray-200/50'
              }`
            : `py-4 ${
                isDark ? 'bg-gray-900/60 backdrop-blur-md' : 'bg-white/40 backdrop-blur-md'
              }`
        }`}
        role="banner"
        aria-label="Site header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Resort BAIKAL Home"
          >
            <Icons.Logo />
            <span className={`text-xl sm:text-2xl font-display font-extrabold tracking-tight transition-colors duration-300 ${
              isDark ? 'text-white' : 'text-brand-primary'
            } group-hover:text-brand-secondary`}>
              Resort BAIKAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map(({ to, label }) => {
              const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isDark
                        ? 'text-brand-gold bg-white/10'
                        : 'text-brand-secondary bg-brand-50'
                      : isDark
                        ? 'text-gray-300 hover:text-white hover:bg-white/5'
                        : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-brand-secondary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Phone */}
            <a
              href="tel:+82-2-5678-9012"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                isDark
                  ? 'text-brand-gold/90 bg-brand-gold/10 hover:bg-brand-gold/20'
                  : 'text-brand-secondary bg-brand-50 hover:bg-brand-100'
              }`}
            >
              <Icons.Phone />
              <span>02-5678-9012</span>
            </a>

            {/* Theme Toggle */}
            <PremiumThemeToggle size="sm" showLabel={false} />

            {/* GitHub */}
            <a
              href="https://github.com/mxten777/mvp_project_26"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg transition-all duration-200 ${
                isDark ? 'text-gray-400 hover:text-white hover:bg-white/10' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
              }`}
              title="GitHub Repository"
            >
              <Icons.GitHub />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
              isDark ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Icons.Menu open={isMobileMenuOpen} />
          </button>
        </div>

        {/* ─── Mobile Menu ─── */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            {/* Panel */}
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden shadow-2xl animate-slide-in-right ${
              isDark ? 'bg-gray-900' : 'bg-white'
            }`}>
              <div className="flex flex-col h-full">
                {/* Mobile menu header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200/10">
                  <span className={`font-display font-bold text-lg ${isDark ? 'text-white' : 'text-brand-primary'}`}>
                    Menu
                  </span>
                  <button
                    onClick={closeMobileMenu}
                    className={`p-2 rounded-lg ${isDark ? 'hover:bg-white/10 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}
                    aria-label="Close menu"
                  >
                    <Icons.Menu open={true} />
                  </button>
                </div>

                {/* Navigation links */}
                <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Mobile navigation">
                  {[...NAV_ITEMS, { to: '/contact', label: 'Contact' }, { to: '/admin', label: 'Admin' }].map(({ to, label }) => {
                    const isActive = location.pathname === to;
                    return (
                      <Link
                        key={to}
                        to={to}
                        onClick={closeMobileMenu}
                        className={`flex items-center px-4 py-3 rounded-xl mb-1 text-base font-medium transition-all duration-200 ${
                          isActive
                            ? isDark
                              ? 'text-brand-gold bg-brand-gold/10'
                              : 'text-brand-secondary bg-brand-50'
                            : isDark
                              ? 'text-gray-300 hover:text-white hover:bg-white/5'
                              : 'text-gray-600 hover:text-brand-primary hover:bg-gray-50'
                        }`}
                      >
                        {label}
                        {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile footer */}
                <div className={`p-4 border-t space-y-3 ${isDark ? 'border-gray-800' : 'border-gray-100'}`}>
                  <PremiumThemeToggle size="md" showLabel={true} />
                  <a
                    href="tel:+82-2-5678-9012"
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium ${
                      isDark ? 'text-brand-gold bg-brand-gold/10' : 'text-brand-secondary bg-brand-50'
                    }`}
                  >
                    <Icons.Phone />
                    <span>02-5678-9012</span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Header spacer */}
      <div className="h-[72px]" aria-hidden="true" />

      {/* ─── Main Content ─── */}
      <main
        className="flex-1 w-full relative z-10"
        role="main"
        aria-label="Main content"
      >
        <div className="animate-fadeIn">
          {children}
        </div>
      </main>

      {/* ─── Footer ─── */}
      <footer
        className={`w-full mt-auto relative z-10 ${
          isDark
            ? 'bg-gray-900 border-t border-gray-800'
            : 'bg-gradient-to-b from-gray-50 to-white border-t border-gray-100'
        }`}
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4">
                <Icons.Logo />
                <span className={`font-display font-extrabold text-xl ${isDark ? 'text-white' : 'text-brand-primary'}`}>
                  Resort BAIKAL
                </span>
              </Link>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                바이칼 호수의 아름다운 자연과 함께하는 프리미엄 럭셔리 리조트 경험
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-semibold text-sm mb-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_ITEMS.map(({ to, label }) => (
                  <li key={to}>
                    <Link to={to} className={`text-sm transition-colors ${isDark ? 'text-gray-400 hover:text-brand-gold' : 'text-gray-500 hover:text-brand-secondary'}`}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className={`font-semibold text-sm mb-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+82-2-5678-9012" className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-400 hover:text-brand-gold' : 'text-gray-500 hover:text-brand-secondary'}`}>
                    <Icons.Phone /> 02-5678-9012
                  </a>
                </li>
                <li>
                  <a href="mailto:info@baikalsys.kr" className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-400 hover:text-brand-gold' : 'text-gray-500 hover:text-brand-secondary'}`}>
                    <Icons.Mail /> info@baikalsys.kr
                  </a>
                </li>
                <li>
                  <span className={`flex items-center gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Icons.MapPin /> 바이칼 프리미엄 리조트
                  </span>
                </li>
              </ul>
            </div>

            {/* Social & Dev */}
            <div>
              <h4 className={`font-semibold text-sm mb-4 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                Connect
              </h4>
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="https://github.com/mxten777/mvp_project_26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-lg transition-all duration-200 ${
                    isDark ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10' : 'bg-gray-100 text-gray-500 hover:text-gray-700 hover:bg-gray-200'
                  }`}
                  title="GitHub"
                >
                  <Icons.GitHub />
                </a>
              </div>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                Built with React & Vite
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className={`mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? 'border-gray-800' : 'border-gray-100'
          }`}>
            <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              &copy; {new Date().getFullYear()} Resort BAIKAL. All rights reserved.
            </span>
            <div className={`flex items-center gap-4 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              <span className="hover:underline cursor-pointer">Privacy Policy</span>
              <span>·</span>
              <span className="hover:underline cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
});

export default PremiumLayout;