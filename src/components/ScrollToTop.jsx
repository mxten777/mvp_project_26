import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 🔝 페이지 전환 시 자동으로 상단으로 스크롤하는 컴포넌트
 * React Router의 페이지 전환 시 스크롤 위치를 초기화합니다.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 전환 시 즉시 상단으로 스크롤
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 부드러운 스크롤 대신 즉시 이동
    });
  }, [pathname]);

  return null; // 렌더링할 UI 없음
};

export default ScrollToTop;