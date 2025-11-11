import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ⏳ 프리미엄 로딩 애니메이션 컴포넌트들

// 메인 로딩 스피너
export const PremiumLoader = ({ isLoading = true, type = 'luxury', size = 'md' }) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const variants = {
    luxury: (
      <div className={`${sizes[size]} relative`}>
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-accent border-r-brand-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-brand-secondary border-l-brand-primary"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 rounded-full bg-gradient-to-br from-brand-gold to-brand-accent"
          animate={{ 
            scale: [0.8, 1.2, 0.8],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    ),
    
    dots: (
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-gradient-to-r from-brand-accent to-brand-gold rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    ),

    pulse: (
      <motion.div
        className={`${sizes[size]} bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ),

    wave: (
      <div className="flex items-end space-x-1">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-2 bg-gradient-to-t from-brand-accent to-brand-gold rounded-full"
            animate={{
              height: [20, 40, 20]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    )
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center"
        >
          {variants[type]}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 페이지 로딩 오버레이
export const PageLoader = ({ isLoading = true, message = "로딩 중..." }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-brand-primary/95 to-brand-secondary/95 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center"
          >
            <PremiumLoader type="luxury" size="lg" />
            
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 text-2xl font-bold text-white"
            >
              바이칼 리조트
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-2 text-white/80"
            >
              {message}
            </motion.p>

            {/* 로딩 프로그레스 바 */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
              className="mt-6 h-1 bg-gradient-to-r from-brand-gold to-brand-accent rounded-full overflow-hidden"
              style={{ width: "200px", margin: "0 auto" }}
            >
              <motion.div
                className="h-full bg-white/30"
                animate={{ x: [-200, 200] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                style={{ width: "50%" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 스켈레톤 로더
export const SkeletonLoader = ({ 
  lines = 3, 
  height = 'h-4', 
  className = "",
  showAvatar = false 
}) => {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {showAvatar && (
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-24"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-16"></div>
          </div>
        </div>
      )}
      
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: i * 0.1,
            ease: "easeInOut"
          }}
          className={`${height} bg-gradient-to-r from-gray-200 to-gray-300 rounded`}
          style={{ width: `${100 - (i * 10)}%` }}
        />
      ))}
    </div>
  );
};

// 카드 로딩 애니메이션
export const CardLoader = ({ count = 3, className = "" }) => {
  return (
    <div className={`grid gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
        >
          <div className="animate-pulse">
            <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300 rounded-xl mb-4"></div>
            <div className="space-y-3">
              <div className="h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// 버튼 로딩 상태
export const LoadingButton = ({ 
  isLoading = false, 
  children, 
  onClick,
  className = "",
  disabled = false,
  ...props 
}) => {
  return (
    <motion.button
      onClick={!isLoading ? onClick : undefined}
      disabled={disabled || isLoading}
      whileHover={!isLoading ? { scale: 1.02 } : {}}
      whileTap={!isLoading ? { scale: 0.98 } : {}}
      className={`relative overflow-hidden ${className} ${
        isLoading ? 'cursor-wait' : 'cursor-pointer'
      }`}
      {...props}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center space-x-2"
          >
            <PremiumLoader type="dots" size="sm" />
            <span>처리 중...</span>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default PremiumLoader;