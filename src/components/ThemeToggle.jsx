import React, { useState, useEffect } from 'react';
import { useTheme, THEMES } from '../contexts/ThemeContext';

// 🌙 프리미엄 테마 토글 컴포넌트
const PremiumThemeToggle = ({ className = "", showLabel = true, size = "md" }) => {
  const { themeMode, toggleTheme, isDark, isAuto } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  // 크기별 스타일 정의
  const sizes = {
    sm: "w-12 h-6",
    md: "w-16 h-8", 
    lg: "w-20 h-10"
  };

  const iconSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base"
  };

  // 크기별 슬라이더 이동 거리 (완전히 보이도록 조정)
  const translateValues = {
    sm: isDark ? 'translate-x-7' : 'translate-x-0.5',  // 더 정확한 위치
    md: isDark ? 'translate-x-8' : 'translate-x-0.5',  // 기본값 조정
    lg: isDark ? 'translate-x-11' : 'translate-x-0.5'  // 더 넉넉한 공간
  };

  // 크기별 슬라이더 크기
  const sliderSizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  // 토글 애니메이션 처리
  const handleToggle = () => {
    setIsAnimating(true);
    toggleTheme();
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // 현재 시간 표시용
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // 테마별 아이콘과 색상
  const getThemeIcon = () => {
    if (isAuto) {
      return isDark ? '🌙' : '🌞';
    }
    return isDark ? '🌙' : '🌞';
  };

  const getThemeLabel = () => {
    if (isAuto) {
      return `자동 (${isDark ? '다크' : '라이트'})`;
    }
    return isDark ? '다크 모드' : '라이트 모드';
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* 토글 스위치 */}
      <button
        onClick={handleToggle}
        className={`
          relative inline-flex items-center justify-between
          ${sizes[size]} rounded-full
          transition-all duration-300 ease-in-out
          ${isDark 
            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-purple-500/25' 
            : 'bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-orange-500/25'
          }
          hover:scale-105 active:scale-95
          ${isAnimating ? 'animate-pulse' : ''}
        `}
        aria-label={`현재 ${getThemeLabel()}, 클릭하여 변경`}
      >
        {/* 배경 패턴 */}
        <div className="absolute inset-0 rounded-full opacity-20">
          <div className={`w-full h-full rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-purple-400 to-pink-400' 
              : 'bg-gradient-to-r from-yellow-300 to-amber-300'
          }`}></div>
        </div>

        {/* 슬라이더 */}
        <div className={`
          absolute ${sliderSizes[size]} bg-white rounded-full shadow-lg
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          ${translateValues[size]}
        `}>
          <span className={`${iconSizes[size]} transition-transform duration-300 ${
            isAnimating ? 'rotate-180' : ''
          }`}>
            {getThemeIcon()}
          </span>
        </div>

        {/* 자동 모드 표시 */}
        {isAuto && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse">
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></div>
          </div>
        )}
      </button>

      {/* 라벨 표시 */}
      {showLabel && (
        <div className="flex flex-col">
          <span className={`text-sm font-semibold transition-colors duration-200 ${
            isDark ? 'text-gray-200' : 'text-gray-700'
          }`}>
            {getThemeLabel()}
          </span>
          
          {/* 자동 모드일 때 시간 표시 */}
          {isAuto && (
            <span className={`text-xs opacity-75 transition-colors duration-200 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              {currentTime.toLocaleTimeString('ko-KR', { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          )}
        </div>
      )}

      {/* 테마 선택 드롭다운 (고급 기능) */}
      <div className="relative group">
        <button className={`
          p-2 rounded-lg transition-all duration-200
          ${isDark 
            ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }
        `}>
          ⚙️
        </button>
        
        {/* 드롭다운 메뉴 */}
        <div className={`
          absolute right-0 top-full mt-2 w-48 rounded-xl shadow-2xl
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-200 transform translate-y-2 group-hover:translate-y-0
          ${isDark 
            ? 'bg-gray-800 border border-gray-600' 
            : 'bg-white border border-gray-200'
          }
          z-50
        `}>
          <div className="p-2">
            {Object.values(THEMES).map((theme) => (
              <button
                key={theme}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    // setTheme 함수를 사용해야 함
                    setIsAnimating(false);
                  }, 300);
                }}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2 rounded-lg
                  transition-all duration-200 text-left
                  ${themeMode === theme
                    ? (isDark 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-blue-100 text-blue-900'
                      )
                    : (isDark 
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                        : 'text-gray-700 hover:bg-gray-100'
                      )
                  }
                `}
              >
                <span>
                  {theme === THEMES.LIGHT ? '🌞' : 
                   theme === THEMES.DARK ? '🌙' : '🔄'}
                </span>
                <span className="text-sm font-medium">
                  {theme === THEMES.LIGHT ? '라이트 모드' :
                   theme === THEMES.DARK ? '다크 모드' : '자동 모드'}
                </span>
                {theme === THEMES.AUTO && (
                  <span className={`text-xs ml-auto ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    시간 기반
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumThemeToggle;
