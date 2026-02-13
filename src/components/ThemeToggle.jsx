import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme, THEMES } from '../contexts/ThemeContext';

/* ─── SVG Icons ─── */
const SunIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const AutoIcon = ({ className = '' }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 0 0 0 20z"/>
  </svg>
);

const ChevronIcon = ({ className = '' }) => (
  <svg className={className} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

/* ─── Theme Option Config ─── */
const THEME_OPTIONS = [
  { key: THEMES.LIGHT, label: '라이트', Icon: SunIcon },
  { key: THEMES.DARK, label: '다크', Icon: MoonIcon },
  { key: THEMES.AUTO, label: '자동', Icon: AutoIcon, hint: '시간 기반' },
];

/* ─── Premium Theme Toggle ─── */
const PremiumThemeToggle = ({ className = '', showLabel = true, size = 'md' }) => {
  const { themeMode, setTheme, toggleTheme, isDark, isAuto } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or Escape
  const handleClose = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) handleClose();
    };
    const handleEscape = (e) => { if (e.key === 'Escape') handleClose(); };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, handleClose]);

  // Size variants
  const toggle = {
    sm: { track: 'w-11 h-6', dot: 'w-4 h-4', move: isDark ? 'translate-x-[22px]' : 'translate-x-[2px]' },
    md: { track: 'w-14 h-7', dot: 'w-5 h-5', move: isDark ? 'translate-x-[30px]' : 'translate-x-[2px]' },
    lg: { track: 'w-16 h-8', dot: 'w-6 h-6', move: isDark ? 'translate-x-[34px]' : 'translate-x-[2px]' },
  }[size];

  const getLabel = () => {
    if (isAuto) return `자동 (${isDark ? '다크' : '라이트'})`;
    return isDark ? '다크 모드' : '라이트 모드';
  };

  return (
    <div className={`flex items-center gap-2 ${className}`} ref={dropdownRef}>
      {/* Toggle switch */}
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex items-center ${toggle.track} rounded-full transition-colors duration-300
          ${isDark
            ? 'bg-brand-600 shadow-sm shadow-brand-500/30'
            : 'bg-amber-400 shadow-sm shadow-amber-400/30'
          } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2
        `}
        role="switch"
        aria-checked={isDark}
        aria-label={`현재 ${getLabel()}, 클릭하여 변경`}
      >
        <span
          className={`
            ${toggle.dot} rounded-full bg-white shadow-md flex items-center justify-center
            transition-transform duration-300 ease-out ${toggle.move}
          `}
        >
          {isDark
            ? <MoonIcon className="w-3 h-3 text-brand-600" />
            : <SunIcon className="w-3 h-3 text-amber-500" />
          }
        </span>

        {/* Auto mode indicator */}
        {isAuto && (
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-gray-900" />
        )}
      </button>

      {/* Label */}
      {showLabel && (
        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {getLabel()}
        </span>
      )}

      {/* Dropdown trigger */}
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={`
            p-1.5 rounded-lg transition-colors duration-200
            ${isDark
              ? 'text-gray-400 hover:text-white hover:bg-white/10'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500
          `}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="테마 선택 메뉴"
        >
          <ChevronIcon className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            className={`
              absolute right-0 top-full mt-2 w-44 rounded-xl shadow-elevation-3 overflow-hidden
              border backdrop-blur-xl z-50
              ${isDark ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'}
            `}
            role="listbox"
            aria-label="테마 선택"
          >
            <div className="p-1.5">
              {THEME_OPTIONS.map(({ key, label, Icon, hint }) => (
                <button
                  key={key}
                  role="option"
                  aria-selected={themeMode === key}
                  onClick={() => {
                    setTheme(key);
                    setIsOpen(false);
                  }}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors duration-150
                    ${themeMode === key
                      ? isDark ? 'bg-brand-600/30 text-brand-300' : 'bg-brand-50 text-brand-700'
                      : isDark ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-50'
                    }
                  `}
                >
                  <Icon className={`w-4 h-4 flex-shrink-0 ${themeMode === key ? (isDark ? 'text-brand-400' : 'text-brand-600') : ''}`} />
                  <span className="text-sm font-medium flex-1">{label}</span>
                  {hint && (
                    <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{hint}</span>
                  )}
                  {themeMode === key && (
                    <svg className={`w-4 h-4 ${isDark ? 'text-brand-400' : 'text-brand-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumThemeToggle;
