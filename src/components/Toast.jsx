// 🌟 프리미엄 토스트 알림 컴포넌트 - 럭셔리 호텔 수준의 피드백

import React, { useEffect, useState } from 'react';

// 토스트 타입별 아이콘
const ToastIcons = {
  success: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  error: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  ),
  warning: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  ),
  info: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
    </svg>
  ),
  premium: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
};

export default function PremiumToast({ 
  toast, 
  onClose, 
  position = 'top-center',
  variant = 'default',
  autoClose = true,
  duration = 4000
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = React.useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  }, [onClose]);

  // 자동 닫기
  useEffect(() => {
    if (!toast || !autoClose) return;
    
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [toast, autoClose, duration, handleClose]);

  // 등장 애니메이션
  useEffect(() => {
    if (toast) {
      setIsVisible(true);
      setIsClosing(false);
    }
  }, [toast]);

  if (!toast || !isVisible) return null;

  // 위치 클래스
  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4'
  };

  // 타입별 스타일
  const typeStyles = {
    success: {
      default: 'bg-emerald-500 border-emerald-400 text-white',
      premium: 'glass-morphism border-emerald-400/50 text-emerald-100 bg-gradient-to-r from-emerald-500/90 to-emerald-600/90'
    },
    error: {
      default: 'bg-red-500 border-red-400 text-white',
      premium: 'glass-morphism border-red-400/50 text-red-100 bg-gradient-to-r from-red-500/90 to-red-600/90'
    },
    warning: {
      default: 'bg-amber-500 border-amber-400 text-white',
      premium: 'glass-morphism border-amber-400/50 text-amber-100 bg-gradient-to-r from-amber-500/90 to-amber-600/90'
    },
    info: {
      default: 'bg-blue-500 border-blue-400 text-white',
      premium: 'glass-morphism border-blue-400/50 text-blue-100 bg-gradient-to-r from-blue-500/90 to-blue-600/90'
    },
    premium: {
      default: 'bg-gradient-to-r from-brand-primary to-brand-secondary border-brand-gold/50 text-white',
      premium: 'glass-morphism border-brand-gold/50 text-brand-gold bg-gradient-to-r from-brand-primary/90 via-brand-secondary/90 to-purple-900/90 shadow-2xl shadow-brand-primary/30'
    }
  };

  const currentStyle = typeStyles[toast.type]?.[variant] || typeStyles.info[variant];

  return (
    <div
      className={`
        fixed z-50 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border backdrop-blur-md
        shadow-lg transition-all duration-300 ease-out
        flex items-center gap-3 max-w-md min-w-80
        ${positionClasses[position] || positionClasses['top-center']}
        ${currentStyle}
        ${isClosing 
          ? 'opacity-0 scale-95 translate-y-2' 
          : 'opacity-100 scale-100 translate-y-0 animate-slide-in-up'
        }
      `}
      role="alert"
      aria-live="assertive"
      tabIndex={0}
    >
      {/* 아이콘 */}
      <div className="flex-shrink-0">
        {ToastIcons[toast.type] || ToastIcons.info}
      </div>

      {/* 메시지 */}
      <div className="flex-1 min-w-0">
        {toast.title && (
          <div className="font-semibold text-sm mb-1">{toast.title}</div>
        )}
        <div className="text-sm opacity-90 break-words">
          {toast.msg || toast.message}
        </div>
      </div>

      {/* 닫기 버튼 */}
      {onClose && (
        <button
          onClick={handleClose}
          aria-label="알림 닫기"
          className="
            flex-shrink-0 p-1 rounded-full transition-all duration-200
            hover:bg-white/20 focus:bg-white/20 focus:outline-none
            hover:scale-110 focus:scale-110
          "
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}

      {/* 프리미엄 장식 요소 */}
      {variant === 'premium' && toast.type === 'premium' && (
        <>
          <div className="absolute -top-1 -left-1 w-3 h-3 bg-brand-gold rounded-full animate-ping opacity-75" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
        </>
      )}

      {/* 진행 바 (자동 닫기 시) */}
      {autoClose && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-xl overflow-hidden">
          <div 
            className="h-full bg-current opacity-50 rounded-b-xl"
            style={{
              animation: `shrink ${duration}ms linear forwards`
            }}
          />
        </div>
      )}
    </div>
  );
}
