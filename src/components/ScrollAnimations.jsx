import React, { useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useSpring } from 'framer-motion';

// 📜 스크롤 기반 애니메이션 컴포넌트들

// 뷰포트에 들어올 때 애니메이션
export const ScrollReveal = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.6,
  threshold = 0.1,
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold,
    margin: "-10% 0px -10% 0px"
  });

  const variants = {
    up: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 }
    },
    down: {
      initial: { opacity: 0, y: -60 },
      animate: { opacity: 1, y: 0 }
    },
    left: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 }
    },
    right: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    rotate: {
      initial: { opacity: 0, rotate: -15, scale: 0.9 },
      animate: { opacity: 1, rotate: 0, scale: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 스크롤 진행률에 따른 애니메이션
export const ScrollProgress = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 패럴랙스 효과
export const ParallaxElement = ({ 
  children, 
  speed = 0.5, 
  direction = 'vertical',
  className = "" 
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], 
    direction === 'vertical' ? [0, speed * 200] : [0, 0]
  );
  const x = useTransform(smoothProgress, [0, 1], 
    direction === 'horizontal' ? [0, speed * 200] : [0, 0]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y, x }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 스크롤 기반 숫자 카운터
export const ScrollCounter = ({ 
  from = 0, 
  to = 100, 
  duration = 2,
  className = "",
  suffix = ""
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  const count = useTransform(
    useSpring(isInView ? to : from, {
      duration: duration * 1000,
      bounce: 0
    }),
    (value) => Math.round(value)
  );

  return (
    <motion.span ref={ref} className={className}>
      <motion.span>{count}</motion.span>
      {suffix}
    </motion.span>
  );
};

// 스크롤 기반 텍스트 애니메이션
export const ScrollText = ({ text, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const child = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: 90
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// 스크롤 기반 프로그레스 바
export const ScrollProgressBar = ({ className = "" }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-accent to-brand-gold z-50 transform-gpu ${className}`}
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
};

// 스크롤 기반 이미지 줌
export const ScrollZoom = ({ children, scale = 1.2, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1, scale, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleValue, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;