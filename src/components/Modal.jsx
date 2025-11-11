
import React, { useEffect, useRef } from 'react';

// 🏨 프리미엄 모달 컴포넌트 - 럭셔리 호텔 수준의 사용자 경험
const PremiumModal = React.memo(function PremiumModal({ 
  open, 
  onClose, 
  title, 
  children, 
  variant = 'default',
  size = 'md',
  overlay = 'dark',
  animation = 'scale-in',
  className = '',
  headerless = false
}) {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);

  // 모달 크기 설정
  const sizeClasses = {
    sm: 'max-w-xs sm:max-w-sm',
    md: 'max-w-sm sm:max-w-md md:max-w-lg',
    lg: 'max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl',
    xl: 'max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl',
    full: 'max-w-full mx-4'
  };

  // 모달 스타일 변형
  const variantClasses = {
    default: 'glass-morphism border border-white/20 text-slate-800',
    luxury: 'bg-gradient-to-br from-brand-primary/95 via-brand-secondary/90 to-purple-900/95 backdrop-blur-xl border border-brand-gold/30 text-white shadow-2xl shadow-brand-primary/30',
    minimal: 'bg-white/95 backdrop-blur-sm border border-gray-200/50 text-gray-900',
    dark: 'bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 text-white'
  };

  // 오버레이 스타일
  const overlayClasses = {
    dark: 'bg-black/60',
    light: 'bg-white/80',
    blur: 'bg-black/40 backdrop-blur-sm',
    luxury: 'bg-gradient-to-br from-brand-primary/30 via-brand-secondary/20 to-purple-900/40 backdrop-blur-md'
  };

  // 애니메이션 클래스
  const animationClasses = {
    'fade-in': 'animate-fadeIn',
    'scale-in': 'animate-scale-in',
    'slide-up': 'animate-slide-in-up',
    'bounce': 'animate-bounce-in'
  };

  // ESC 키로 닫기 & 포커스 트랩
  useEffect(() => {
    if (!open) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
      
      // 포커스 트랩
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        
        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  // 모달 열릴 때 포커스 & 스크롤 잠금
  useEffect(() => {
    if (open) {
      // 스크롤 잠금
      document.body.style.overflow = 'hidden';
      
      // 포커스 설정
      if (modalRef.current) {
        const firstFocusable = modalRef.current.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable) {
          firstFocusable.focus();
        } else {
          modalRef.current.focus();
        }
      }
    } else {
      // 스크롤 잠금 해제
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // 오버레이 클릭으로 닫기
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        ${overlayClasses[overlay] || overlayClasses.dark}
        animate-fadeIn
      `}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby="modal-content"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={`
          ${sizeClasses[size] || sizeClasses.md}
          ${variantClasses[variant] || variantClasses.default}
          ${animationClasses[animation] || animationClasses['scale-in']}
          w-full rounded-2xl shadow-2xl
          transform transition-all duration-300 ease-out
          relative overflow-hidden
          ${className}
        `}
        id="modal-content"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 럭셔리 그라데이션 오버레이 */}
        {variant === 'luxury' && (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-brand-accent/10 pointer-events-none" />
        )}

        {/* 헤더 */}
        {!headerless && (
          <div className="relative z-10 flex items-center justify-between p-6 border-b border-current/10">
            {title && (
              <h2 
                id="modal-title" 
                className={`
                  text-xl font-bold
                  ${variant === 'luxury' ? 'text-brand-gold' : ''}
                `}
              >
                {title}
              </h2>
            )}
            <button
              className={`
                ml-auto p-2 rounded-full transition-all duration-200
                hover:scale-110 focus:scale-110 focus:outline-none
                ${variant === 'luxury' 
                  ? 'text-brand-gold/70 hover:text-brand-gold hover:bg-brand-gold/10' 
                  : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100/50'
                }
              `}
              onClick={onClose}
              aria-label="모달 닫기"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* 컨텐츠 */}
        <div className="relative z-10 p-6">
          {children}
        </div>

        {/* 럭셔리 장식 요소 */}
        {variant === 'luxury' && (
          <>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-brand-accent/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          </>
        )}
      </div>
    </div>
  );
});

export default PremiumModal;
export { PremiumModal as Modal };
