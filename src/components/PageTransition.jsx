import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

// 🎬 프리미엄 페이지 전환 애니메이션 컴포넌트
const PageTransition = ({ children }) => {
  const location = useLocation();

  // 페이지별 전환 애니메이션 설정
  const pageVariants = {
    initial: { opacity: 0 },
    in: {
      opacity: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
        staggerChildren: 0.08
      }
    },
    out: {
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: 'easeIn'
      }
    }
  };

  // 특별한 페이지별 애니메이션
  const getPageSpecificAnimation = (pathname) => {
    if (pathname === '/') {
      return {
        initial: { opacity: 0 },
        in: { 
          opacity: 1,
          transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 }
        },
        out: { opacity: 0, transition: { duration: 0.4 } }
      };
    }
    
    if (pathname.includes('/admin')) {
      return {
        initial: { opacity: 0 },
        in: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.08 } },
        out: { opacity: 0, transition: { duration: 0.3 } }
      };
    }

    if (pathname.includes('/booking')) {
      return {
        initial: { opacity: 0 },
        in: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } },
        out: { opacity: 0, transition: { duration: 0.25 } }
      };
    }

    return pageVariants;
  };

  const variants = getPageSpecificAnimation(location.pathname);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={variants}
        className="page-transition-wrapper"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

// 🌟 개별 요소 애니메이션 컴포넌트들
export const FadeInUp = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.5, 
      delay,
      ease: "backOut",
      stiffness: 100
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SlideInLeft = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.6, 
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const RotateIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
    animate={{ opacity: 1, rotate: 0, scale: 1 }}
    transition={{ 
      duration: 0.7, 
      delay,
      ease: [0.25, 0.46, 0.45, 0.94]
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// ✨ 호버 애니메이션 컴포넌트
export const HoverScale = ({ children, scale = 1.05, className = "" }) => (
  <motion.div
    whileHover={{ 
      scale,
      transition: { duration: 0.2, ease: "easeOut" }
    }}
    whileTap={{ scale: 0.95 }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HoverFloat = ({ children, y = -10, className = "" }) => (
  <motion.div
    whileHover={{ 
      y,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const HoverGlow = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ 
      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(247, 37, 133, 0.3)",
      transition: { duration: 0.3 }
    }}
    className={`${className} transition-all duration-300`}
  >
    {children}
  </motion.div>
);

export default PageTransition;