// 🖼️ 이미지 최적화 컴포넌트 - 지연 로딩 및 WebP 지원
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width, 
  height,
  priority = false,
  placeholder = 'blur',
  quality = 75,
  sizes = '100vw',
  onLoad,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState('');
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  // 🔍 WebP 지원 확인
  const supportsWebP = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  // 📱 반응형 이미지 소스 생성
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    const isWebPSupported = supportsWebP();
    const extension = isWebPSupported ? '.webp' : '.jpg';
    const baseName = baseSrc.replace(/\.[^/.]+$/, '');
    
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes
      .map(size => `${baseName}_${size}w${extension} ${size}w`)
      .join(', ');
  };

  // 🎨 플레이스홀더 생성
  const generatePlaceholder = (w = width || 400, h = height || 300) => {
    const canvas = document.createElement('canvas');
    canvas.width = 20;
    canvas.height = 15;
    const ctx = canvas.getContext('2d');
    
    // 그라데이션 플레이스홀더
    const gradient = ctx.createLinearGradient(0, 0, 20, 15);
    gradient.addColorStop(0, '#f3f4f6');
    gradient.addColorStop(1, '#e5e7eb');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 20, 15);
    
    return canvas.toDataURL();
  };

  // 👁️ Intersection Observer 설정
  useEffect(() => {
    if (priority) {
      setCurrentSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            if (observerRef.current) {
              observerRef.current.unobserve(entry.target);
            }
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
      observerRef.current = observer;
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, priority]);

  // 📈 로딩 완료 처리
  const handleLoad = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  // ❌ 에러 처리
  const handleError = (e) => {
    setIsError(true);
    setCurrentSrc(generatePlaceholder());
    onError?.(e);
  };

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* 플레이스홀더 */}
      {placeholder === 'blur' && !isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
          style={{
            backgroundImage: `url(${generatePlaceholder()})`,
            backgroundSize: 'cover',
            filter: 'blur(10px)',
            transform: 'scale(1.1)'
          }}
        />
      )}

      {/* 실제 이미지 */}
      {currentSrc && (
        <motion.img
          src={currentSrc}
          srcSet={generateSrcSet(currentSrc)}
          sizes={sizes}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          {...props}
        />
      )}

      {/* 로딩 인디케이터 */}
      {!isLoaded && !isError && currentSrc && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
        </div>
      )}

      {/* 에러 상태 */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center text-gray-500">
            <div className="text-2xl mb-2">📷</div>
            <div className="text-sm">이미지를 불러올 수 없습니다</div>
          </div>
        </div>
      )}
    </div>
  );
};

// 🎭 이미지 갤러리 컴포넌트
export const ImageGallery = ({ images, className = '' }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* 메인 이미지 */}
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <OptimizedImage
          src={images[selectedIndex]?.src}
          alt={images[selectedIndex]?.alt || `이미지 ${selectedIndex + 1}`}
          className="rounded-lg cursor-pointer"
          priority={selectedIndex === 0}
          onClick={() => setIsFullscreen(true)}
        />
      </div>

      {/* 썸네일 */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-w-1 aspect-h-1 cursor-pointer rounded-md overflow-hidden ${
              selectedIndex === index ? 'ring-2 ring-purple-500' : ''
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <OptimizedImage
              src={image.thumbnail || image.src}
              alt={image.alt || `썸네일 ${index + 1}`}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* 풀스크린 모달 */}
      {isFullscreen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="max-w-4xl max-h-4xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <OptimizedImage
              src={images[selectedIndex]?.src}
              alt={images[selectedIndex]?.alt}
              className="w-full h-full"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// 🏞️ 배경 이미지 컴포넌트
export const BackgroundImage = ({ 
  src, 
  className = '',
  overlay = true,
  overlayColor = 'bg-black bg-opacity-40',
  children,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} {...props}>
      {/* 배경 이미지 */}
      <OptimizedImage
        src={src}
        alt="배경 이미지"
        className="absolute inset-0 w-full h-full object-cover"
        priority
        onLoad={() => setIsLoaded(true)}
      />

      {/* 오버레이 */}
      {overlay && (
        <div className={`absolute inset-0 ${overlayColor}`} />
      )}

      {/* 컨텐츠 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

// 🎨 아바타 이미지 컴포넌트
export const Avatar = ({ 
  src, 
  alt, 
  size = 'md',
  fallback,
  className = '',
  ...props 
}) => {
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-20 h-20'
  };

  const fallbackContent = fallback || alt?.charAt(0)?.toUpperCase() || '?';

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex items-center justify-center ${className}`} {...props}>
      {!hasError && src ? (
        <OptimizedImage
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-gray-600 font-medium text-sm">
          {fallbackContent}
        </span>
      )}
    </div>
  );
};

export default OptimizedImage;