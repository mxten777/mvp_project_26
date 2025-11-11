import React, { createContext, useContext, useEffect, useState } from 'react';

// 🌙 테마 컨텍스트 생성
const ThemeContext = createContext();

// 테마 훅
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// 테마 타입 정의
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

// 시간에 따른 자동 테마 결정
const getAutoTheme = () => {
  const hour = new Date().getHours();
  // 오후 8시 ~ 오전 6시: 다크 모드
  // 오전 6시 ~ 오후 8시: 라이트 모드
  return (hour >= 20 || hour < 6) ? THEMES.DARK : THEMES.LIGHT;
};

// 테마 프로바이더 컴포넌트
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(THEMES.AUTO);
  const [currentTheme, setCurrentTheme] = useState(THEMES.LIGHT);

  // 로컬스토리지에서 테마 설정 로드
  useEffect(() => {
    const savedTheme = localStorage.getItem('baikal-theme');
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      setThemeMode(savedTheme);
    }
  }, []);

  // 실제 적용될 테마 계산
  useEffect(() => {
    let actualTheme;
    
    if (themeMode === THEMES.AUTO) {
      actualTheme = getAutoTheme();
    } else {
      actualTheme = themeMode;
    }

    setCurrentTheme(actualTheme);
    
    // DOM에 테마 클래스 적용
    const root = document.documentElement;
    if (actualTheme === THEMES.DARK) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode]);

  // 자동 모드일 때 시간 변화 감지
  useEffect(() => {
    if (themeMode === THEMES.AUTO) {
      const interval = setInterval(() => {
        const newAutoTheme = getAutoTheme();
        if (newAutoTheme !== currentTheme) {
          setCurrentTheme(newAutoTheme);
          
          // DOM 업데이트
          const root = document.documentElement;
          if (newAutoTheme === THEMES.DARK) {
            root.classList.add('dark');
          } else {
            root.classList.remove('dark');
          }
        }
      }, 60000); // 1분마다 체크

      return () => clearInterval(interval);
    }
  }, [themeMode, currentTheme]);

  // 테마 변경 함수
  const setTheme = (newTheme) => {
    setThemeMode(newTheme);
    localStorage.setItem('baikal-theme', newTheme);
  };

  // 테마 토글 함수 (라이트 ↔ 다크 간단 토글)
  const toggleTheme = () => {
    if (themeMode === THEMES.LIGHT || (themeMode === THEMES.AUTO && currentTheme === THEMES.LIGHT)) {
      setTheme(THEMES.DARK);
    } else {
      setTheme(THEMES.LIGHT);
    }
  };

  const value = {
    themeMode,
    currentTheme,
    setTheme,
    toggleTheme,
    isDark: currentTheme === THEMES.DARK,
    isLight: currentTheme === THEMES.LIGHT,
    isAuto: themeMode === THEMES.AUTO
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;