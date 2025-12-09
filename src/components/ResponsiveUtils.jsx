// 📱 모바일 반응형 유틸리티 - 디바이스별 최적화 컴포넌트
import { useState, useEffect } from 'react';

// 🔍 디바이스 감지 훅
export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('desktop');
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [orientation, setOrientation] = useState('portrait');

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      setOrientation(width > height ? 'landscape' : 'portrait');

      // 디바이스 타입 결정
      if (width < 640) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return {
    deviceType,
    screenSize,
    orientation,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    isPortrait: orientation === 'portrait',
    isLandscape: orientation === 'landscape'
  };
};

// 📱 반응형 컨테이너
export const ResponsiveContainer = ({ 
  children, 
  className = '',
  mobileClass = '',
  tabletClass = '',
  desktopClass = '',
  ...props 
}) => {
  const { deviceType } = useDeviceType();
  
  const deviceClasses = {
    mobile: mobileClass,
    tablet: tabletClass,
    desktop: desktopClass
  };

  return (
    <div 
      className={`${className} ${deviceClasses[deviceType] || ''}`}
      {...props}
    >
      {children}
    </div>
  );
};

// 📏 반응형 텍스트
export const ResponsiveText = ({ 
  children,
  mobileSize = 'text-sm',
  tabletSize = 'text-base', 
  desktopSize = 'text-lg',
  className = '',
  ...props
}) => {
  const { deviceType } = useDeviceType();
  
  const sizeClasses = {
    mobile: mobileSize,
    tablet: tabletSize,
    desktop: desktopSize
  };

  return (
    <span 
      className={`${className} ${sizeClasses[deviceType]}`}
      {...props}
    >
      {children}
    </span>
  );
};

// 🖼️ 반응형 이미지 그리드
export const ResponsiveGrid = ({ 
  children,
  mobileCols = 1,
  tabletCols = 2,
  desktopCols = 3,
  gap = 'gap-4',
  className = '',
  ...props
}) => {
  const { deviceType } = useDeviceType();
  
  const colClasses = {
    mobile: `grid-cols-${mobileCols}`,
    tablet: `grid-cols-${tabletCols}`,
    desktop: `grid-cols-${desktopCols}`
  };

  return (
    <div 
      className={`grid ${colClasses[deviceType]} ${gap} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// 🔄 터치 제스처 지원 컴포넌트
export const TouchGesture = ({ 
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  className = '',
  ...props
}) => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    const diffX = touchStart.x - touchEnd.x;
    const diffY = touchStart.y - touchEnd.y;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // 수평 스와이프
      if (Math.abs(diffX) > threshold) {
        if (diffX > 0) {
          onSwipeLeft?.();
        } else {
          onSwipeRight?.();
        }
      }
    } else {
      // 수직 스와이프
      if (Math.abs(diffY) > threshold) {
        if (diffY > 0) {
          onSwipeUp?.();
        } else {
          onSwipeDown?.();
        }
      }
    }
  };

  return (
    <div
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      {...props}
    >
      {children}
    </div>
  );
};

// 📱 모바일 전용 컴포넌트
export const MobileOnly = ({ children, fallback = null }) => {
  const { isMobile } = useDeviceType();
  return isMobile ? children : fallback;
};

// 💻 데스크톱 전용 컴포넌트
export const DesktopOnly = ({ children, fallback = null }) => {
  const { isDesktop } = useDeviceType();
  return isDesktop ? children : fallback;
};

// 📱 모바일 네비게이션 드로어
export const MobileDrawer = ({ 
  isOpen, 
  onClose, 
  children,
  position = 'left' // 'left', 'right', 'top', 'bottom'
}) => {
  const { isMobile } = useDeviceType();

  const positions = {
    left: {
      initial: { x: '-100%' },
      animate: { x: 0 },
      exit: { x: '-100%' }
    },
    right: {
      initial: { x: '100%' },
      animate: { x: 0 },
      exit: { x: '100%' }
    },
    top: {
      initial: { y: '-100%' },
      animate: { y: 0 },
      exit: { y: '-100%' }
    },
    bottom: {
      initial: { y: '100%' },
      animate: { y: 0 },
      exit: { y: '100%' }
    }
  };

  if (!isMobile) return null;

  return (
    <>
      {/* 오버레이 */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* 드로어 */}
      <motion.div
        initial={positions[position].initial}
        animate={isOpen ? positions[position].animate : positions[position].exit}
        exit={positions[position].exit}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed z-50 bg-white dark:bg-gray-900 shadow-xl ${
          position === 'left' || position === 'right' 
            ? 'top-0 h-full w-80 max-w-[85vw]' 
            : 'left-0 w-full h-80 max-h-[85vh]'
        } ${
          position === 'left' ? 'left-0' :
          position === 'right' ? 'right-0' :
          position === 'top' ? 'top-0' : 'bottom-0'
        }`}
      >
        {children}
      </motion.div>
    </>
  );
};

// 📱 모바일 풀스크린 모달
export const MobileModal = ({ 
  isOpen, 
  onClose, 
  title,
  children,
  showCloseButton = true
}) => {
  const { isMobile } = useDeviceType();

  if (!isMobile) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className={`fixed inset-0 z-50 bg-white dark:bg-gray-900 ${isOpen ? 'block' : 'hidden'}`}
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* 콘텐츠 */}
      <div className="flex-1 overflow-y-auto p-4">
        {children}
      </div>
    </motion.div>
  );
};

// 📱 모바일 탭 바 (하단 네비게이션)
export const MobileTabBar = ({ tabs, activeTab, onTabChange, className = '' }) => {
  const { isMobile } = useDeviceType();

  if (!isMobile) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 z-30 ${className}`}>
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'text-purple-600 bg-purple-50 dark:bg-purple-900/20'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <div className="text-xl mb-1">{tab.icon}</div>
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// 🔍 뷰포트 기반 조건부 렌더링
export const ViewportConditional = ({ 
  minWidth, 
  maxWidth, 
  children, 
  fallback = null 
}) => {
  const { screenSize } = useDeviceType();
  const { width } = screenSize;

  const shouldRender = 
    (!minWidth || width >= minWidth) && 
    (!maxWidth || width <= maxWidth);

  return shouldRender ? children : fallback;
};

// 📱 모바일 풀어내기 새로고침
export const PullToRefresh = ({ 
  onRefresh, 
  children, 
  threshold = 80,
  className = '' 
}) => {
  const { isMobile } = useDeviceType();
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [startY, setStartY] = useState(0);

  if (!isMobile) return children;

  const handleTouchStart = (e) => {
    if (window.scrollY === 0) {
      setStartY(e.touches[0].clientY);
    }
  };

  const handleTouchMove = (e) => {
    if (window.scrollY === 0 && startY > 0) {
      const currentY = e.touches[0].clientY;
      const distance = Math.max(0, currentY - startY);
      setPullDistance(distance);
    }
  };

  const handleTouchEnd = async () => {
    if (pullDistance > threshold && !isRefreshing) {
      setIsRefreshing(true);
      await onRefresh();
      setIsRefreshing(false);
    }
    setPullDistance(0);
    setStartY(0);
  };

  return (
    <div
      className={className}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        transform: `translateY(${Math.min(pullDistance * 0.5, 40)}px)`,
        transition: pullDistance === 0 ? 'transform 0.3s ease' : 'none'
      }}
    >
      {/* 풀어내기 인디케이터 */}
      {pullDistance > 20 && (
        <div className="flex justify-center py-2">
          <div className={`transition-transform ${pullDistance > threshold ? 'rotate-180' : ''}`}>
            {isRefreshing ? (
              <div className="w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
          </div>
        </div>
      )}
      
      {children}
    </div>
  );
};

export default {
  useDeviceType,
  ResponsiveContainer,
  ResponsiveText,
  ResponsiveGrid,
  TouchGesture,
  MobileOnly,
  DesktopOnly,
  MobileDrawer,
  MobileModal,
  MobileTabBar,
  ViewportConditional,
  PullToRefresh
};