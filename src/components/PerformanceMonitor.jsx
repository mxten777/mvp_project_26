// 📊 성능 모니터링 시스템 - Web Vitals & 실시간 성능 추적
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

const PerformanceMonitor = ({ showMetrics = false }) => {
  const [metrics, setMetrics] = useState({
    fcp: null,      // First Contentful Paint
    lcp: null,      // Largest Contentful Paint
    fid: null,      // First Input Delay
    cls: null,      // Cumulative Layout Shift
    ttfb: null,     // Time to First Byte
    memory: null,   // Memory Usage
    navigation: null // Navigation Timing
  });
  
  const [isVisible, setIsVisible] = useState(showMetrics);
  const observerRef = useRef(null);
  const performanceEntries = useRef([]);

  useEffect(() => {
    initializePerformanceMonitoring();
    startMemoryMonitoring();
    setupNavigationTiming();
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // 🔍 성능 모니터링 초기화
  const initializePerformanceMonitoring = () => {
    // Web Vitals 측정
    measureWebVitals();
    
    // Performance Observer 설정
    if ('PerformanceObserver' in window) {
      setupPerformanceObserver();
    }
    
    // Intersection Observer 설정
    setupIntersectionObserver();
  };

  // 📈 Web Vitals 측정
  const measureWebVitals = () => {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  };

  // 📊 Performance Observer 설정
  const setupPerformanceObserver = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        performanceEntries.current.push({
          name: entry.name,
          type: entry.entryType,
          startTime: entry.startTime,
          duration: entry.duration,
          timestamp: Date.now()
        });

        // 리소스 로딩 성능 추적
        if (entry.entryType === 'resource') {
          trackResourcePerformance(entry);
        }

        // 사용자 정의 측정
        if (entry.entryType === 'measure') {
          trackCustomMeasures(entry);
        }
      }
    });

    observer.observe({ 
      entryTypes: ['resource', 'measure', 'navigation'] 
    });
  };

  // 👁️ Intersection Observer 설정
  const setupIntersectionObserver = () => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 뷰포트 진입 시간 측정
            performance.mark(`viewport-${entry.target.id || 'element'}-visible`);
          }
        });
      },
      { threshold: 0.1 }
    );
  };

  // 🧠 메모리 모니터링
  const startMemoryMonitoring = () => {
    if ('memory' in performance) {
      const updateMemory = () => {
        setMetrics(prev => ({
          ...prev,
          memory: {
            used: performance.memory.usedJSHeapSize,
            total: performance.memory.totalJSHeapSize,
            limit: performance.memory.jsHeapSizeLimit
          }
        }));
      };

      updateMemory();
      const interval = setInterval(updateMemory, 5000);
      
      return () => clearInterval(interval);
    }
  };

  // 🚀 네비게이션 타이밍 설정
  const setupNavigationTiming = () => {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      if (navigation) {
        setMetrics(prev => ({
          ...prev,
          navigation: {
            dns: navigation.domainLookupEnd - navigation.domainLookupStart,
            tcp: navigation.connectEnd - navigation.connectStart,
            request: navigation.responseStart - navigation.requestStart,
            response: navigation.responseEnd - navigation.responseStart,
            domLoad: navigation.domContentLoadedEventEnd - navigation.navigationStart,
            windowLoad: navigation.loadEventEnd - navigation.navigationStart
          },
          ttfb: navigation.responseStart - navigation.requestStart
        }));
      }
    });
  };

  // 📦 리소스 성능 추적
  const trackResourcePerformance = (entry) => {
    const resourceType = entry.initiatorType;
    const duration = entry.responseEnd - entry.startTime;
    
    // 느린 리소스 감지
    if (duration > 1000) { // 1초 이상
      console.warn(`느린 리소스 감지: ${entry.name} (${duration.toFixed(2)}ms)`);
    }
    
    // 큰 리소스 감지
    if (entry.transferSize > 1024 * 1024) { // 1MB 이상
      console.warn(`큰 리소스 감지: ${entry.name} (${(entry.transferSize / 1024 / 1024).toFixed(2)}MB)`);
    }
  };

  // 📏 사용자 정의 측정 추적
  const trackCustomMeasures = (entry) => {
    console.log(`사용자 정의 측정: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
  };

  // 🎯 성능 점수 계산
  const calculatePerformanceScore = () => {
    const scores = {
      fcp: getScoreFromValue(metrics.fcp, [1800, 3000]),      // Good: <1.8s, Poor: >3s
      lcp: getScoreFromValue(metrics.lcp, [2500, 4000]),      // Good: <2.5s, Poor: >4s
      fid: getScoreFromValue(metrics.fid, [100, 300]),        // Good: <100ms, Poor: >300ms
      cls: getScoreFromValue(metrics.cls, [0.1, 0.25], true), // Good: <0.1, Poor: >0.25 (reverse)
      ttfb: getScoreFromValue(metrics.ttfb, [800, 1800])      // Good: <800ms, Poor: >1.8s
    };

    const validScores = Object.values(scores).filter(score => score !== null);
    return validScores.length > 0 
      ? validScores.reduce((sum, score) => sum + score, 0) / validScores.length 
      : 0;
  };

  // 📊 값에서 점수 계산
  const getScoreFromValue = (value, thresholds, reverse = false) => {
    if (value === null) return null;
    
    const [good, poor] = thresholds;
    let score;
    
    if (value <= good) {
      score = 100;
    } else if (value <= poor) {
      score = 50 + (50 * (poor - value) / (poor - good));
    } else {
      score = Math.max(0, 50 * (1 - (value - poor) / poor));
    }
    
    return reverse ? 100 - score : score;
  };

  // 🎨 메트릭 색상 결정
  const getMetricColor = (value, thresholds, reverse = false) => {
    if (value === null) return 'text-gray-400';
    
    const [good, poor] = thresholds;
    const isGood = reverse ? value <= good : value <= good;
    const isPoor = reverse ? value >= poor : value >= poor;
    
    if (isGood) return 'text-green-500';
    if (isPoor) return 'text-red-500';
    return 'text-yellow-500';
  };

  // 📱 포맷팅 유틸리티
  const formatTime = (ms) => ms ? `${ms.toFixed(0)}ms` : '-';
  const formatBytes = (bytes) => {
    if (!bytes) return '-';
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  };

  const performanceScore = calculatePerformanceScore();

  if (!isVisible && !showMetrics) return null;

  return (
    <AnimatePresence>
      {(isVisible || showMetrics) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 p-4 max-w-sm"
        >
          {/* 헤더 */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 dark:text-white">
              성능 메트릭
            </h3>
            <div className="flex items-center space-x-2">
              <div className={`text-sm font-medium ${
                performanceScore >= 90 ? 'text-green-500' :
                performanceScore >= 50 ? 'text-yellow-500' : 'text-red-500'
              }`}>
                {performanceScore.toFixed(0)}점
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FCP:</span>
              <span className={getMetricColor(metrics.fcp, [1800, 3000])}>
                {formatTime(metrics.fcp)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">LCP:</span>
              <span className={getMetricColor(metrics.lcp, [2500, 4000])}>
                {formatTime(metrics.lcp)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">FID:</span>
              <span className={getMetricColor(metrics.fid, [100, 300])}>
                {formatTime(metrics.fid)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">CLS:</span>
              <span className={getMetricColor(metrics.cls, [0.1, 0.25], true)}>
                {metrics.cls ? metrics.cls.toFixed(3) : '-'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
              <span className={getMetricColor(metrics.ttfb, [800, 1800])}>
                {formatTime(metrics.ttfb)}
              </span>
            </div>
          </div>

          {/* 메모리 사용량 */}
          {metrics.memory && (
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">메모리 사용량</div>
              <div className="flex justify-between text-sm">
                <span>사용:</span>
                <span>{formatBytes(metrics.memory.used)}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-1">
                <div 
                  className="bg-purple-600 h-2 rounded-full"
                  style={{ 
                    width: `${(metrics.memory.used / metrics.memory.total) * 100}%` 
                  }}
                />
              </div>
            </div>
          )}

          {/* 개발 모드 토글 */}
          {process.env.NODE_ENV === 'development' && (
            <button
              onClick={() => {
                console.log('Performance Entries:', performanceEntries.current);
                console.log('Current Metrics:', metrics);
              }}
              className="w-full mt-3 px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded text-sm transition-colors"
            >
              콘솔 로그 출력
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 🛠️ 성능 측정 훅
export const usePerformance = () => {
  const [isLoading, setIsLoading] = useState(false);

  const startMeasure = (name) => {
    performance.mark(`${name}-start`);
    setIsLoading(true);
  };

  const endMeasure = (name) => {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    setIsLoading(false);
    
    const measure = performance.getEntriesByName(name)[0];
    return measure ? measure.duration : 0;
  };

  const measureAsync = async (name, asyncFunc) => {
    startMeasure(name);
    try {
      const result = await asyncFunc();
      const duration = endMeasure(name);
      console.log(`${name} 완료: ${duration.toFixed(2)}ms`);
      return result;
    } catch (error) {
      endMeasure(name);
      throw error;
    }
  };

  return {
    isLoading,
    startMeasure,
    endMeasure,
    measureAsync
  };
};

// 🎯 성능 최적화 권장사항
export const getPerformanceRecommendations = (metrics) => {
  const recommendations = [];

  if (metrics.fcp > 3000) {
    recommendations.push({
      type: 'critical',
      metric: 'FCP',
      message: 'First Contentful Paint가 느립니다. 중요한 CSS를 인라인으로 포함하고 불필요한 자바스크립트를 제거하세요.'
    });
  }

  if (metrics.lcp > 4000) {
    recommendations.push({
      type: 'critical',
      metric: 'LCP',
      message: 'Largest Contentful Paint가 느립니다. 이미지를 최적화하고 지연 로딩을 구현하세요.'
    });
  }

  if (metrics.fid > 300) {
    recommendations.push({
      type: 'warning',
      metric: 'FID',
      message: 'First Input Delay가 높습니다. 메인 스레드를 차단하는 작업을 최소화하세요.'
    });
  }

  if (metrics.cls > 0.25) {
    recommendations.push({
      type: 'warning',
      metric: 'CLS',
      message: 'Cumulative Layout Shift가 높습니다. 이미지와 광고에 크기를 지정하세요.'
    });
  }

  return recommendations;
};

export default PerformanceMonitor;