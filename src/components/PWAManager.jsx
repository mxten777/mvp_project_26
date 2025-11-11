// 🚀 PWA 관리자 - 서비스 워커 및 앱 설치 관리
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PWAManager = () => {
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [swStatus, setSWStatus] = useState('checking');
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [cacheSize, setCacheSize] = useState(0);

  useEffect(() => {
    initializePWA();
    setupEventListeners();
    checkServiceWorker();
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  // 🔧 PWA 초기화
  const initializePWA = () => {
    // 이미 설치된 상태 확인
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }
    
    // 서비스 워커 등록
    if ('serviceWorker' in navigator) {
      registerServiceWorker();
    }
  };

  // 📱 이벤트 리스너 설정
  const setupEventListeners = () => {
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
  };

  // 🔄 서비스 워커 등록
  const registerServiceWorker = async () => {
    try {
      setSWStatus('registering');
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });

      console.log('[PWA] 서비스 워커 등록 성공:', registration.scope);
      setSWStatus('registered');

      // 업데이트 확인
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            setSWStatus('updated');
            showUpdateAvailable();
          }
        });
      });

      // 활성 서비스 워커와 통신
      if (registration.active) {
        getCacheInfo();
      }

    } catch (error) {
      console.error('[PWA] 서비스 워커 등록 실패:', error);
      setSWStatus('failed');
    }
  };

  // 📦 캐시 정보 조회
  const getCacheInfo = async () => {
    try {
      const cacheNames = await caches.keys();
      let totalSize = 0;
      
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const requests = await cache.keys();
        
        for (const request of requests) {
          const response = await cache.match(request);
          if (response) {
            const responseClone = response.clone();
            const buffer = await responseClone.arrayBuffer();
            totalSize += buffer.byteLength;
          }
        }
      }
      
      setCacheSize(totalSize);
    } catch (error) {
      console.error('[PWA] 캐시 크기 조회 실패:', error);
    }
  };

  // 🔍 서비스 워커 상태 확인
  const checkServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      if (navigator.serviceWorker.controller) {
        setSWStatus('active');
        getCacheInfo();
      }
    }
  };

  // 📱 앱 설치 프롬프트 처리
  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setIsInstallable(true);
  };

  // ✅ 앱 설치 완료 처리
  const handleAppInstalled = () => {
    setIsInstalled(true);
    setIsInstallable(false);
    setDeferredPrompt(null);
    showInstallSuccess();
  };

  // 🌐 네트워크 상태 변경 처리
  const handleOnlineStatusChange = () => {
    setIsOnline(navigator.onLine);
  };

  // 📲 앱 설치 실행
  const installApp = async () => {
    if (!deferredPrompt) return;

    try {
      const result = await deferredPrompt.prompt();
      console.log('[PWA] 설치 프롬프트 결과:', result.outcome);
      
      if (result.outcome === 'accepted') {
        setDeferredPrompt(null);
        setIsInstallable(false);
      }
    } catch (error) {
      console.error('[PWA] 앱 설치 실패:', error);
    }
  };

  // 🔄 서비스 워커 업데이트
  const updateServiceWorker = () => {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  };

  // 🗑️ 캐시 초기화
  const clearCache = async () => {
    try {
      const cacheNames = await caches.keys();
      await Promise.all(cacheNames.map(name => caches.delete(name)));
      setCacheSize(0);
      showCacheCleared();
    } catch (error) {
      console.error('[PWA] 캐시 초기화 실패:', error);
    }
  };

  // 📢 알림 함수들
  const showInstallSuccess = () => {
    // Toast 알림 (실제 구현 시 Toast 컴포넌트 사용)
    console.log('앱이 성공적으로 설치되었습니다! 🎉');
  };

  const showUpdateAvailable = () => {
    console.log('새로운 업데이트가 있습니다! 🔄');
  };

  const showCacheCleared = () => {
    console.log('캐시가 초기화되었습니다! 🗑️');
  };

  // 📊 유틸리티 함수들
  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': case 'registered': return 'text-green-400';
      case 'failed': return 'text-red-400';
      case 'updated': return 'text-blue-400';
      default: return 'text-yellow-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'checking': return '확인 중...';
      case 'registering': return '등록 중...';
      case 'registered': return '등록됨';
      case 'active': return '활성';
      case 'updated': return '업데이트 가능';
      case 'failed': return '실패';
      default: return '알 수 없음';
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* PWA 상태 인디케이터 */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 mb-2"
      >
        <div className="flex items-center space-x-2">
          {/* 온라인 상태 */}
          <div className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-400' : 'bg-red-400'}`} />
          
          {/* 설치 상태 */}
          {isInstalled && (
            <div className="w-3 h-3 rounded-full bg-blue-400" />
          )}
          
          {/* 서비스 워커 상태 */}
          <div className={`text-xs font-medium ${getStatusColor(swStatus)}`}>
            SW
          </div>
        </div>
      </motion.div>

      {/* 설치 버튼 */}
      {isInstallable && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          onClick={installApp}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium mb-2 block w-full"
        >
          📱 앱 설치하기
        </motion.button>
      )}

      {/* 업데이트 버튼 */}
      {swStatus === 'updated' && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          onClick={updateServiceWorker}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium mb-2 block w-full"
        >
          🔄 업데이트
        </motion.button>
      )}

      {/* PWA 관리 패널 (개발 모드에서만 표시) */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-xl border border-gray-200 dark:border-gray-700 w-64"
        >
          <h3 className="font-semibold text-gray-900 dark:text-white mb-3">PWA 상태</h3>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">네트워크:</span>
              <span className={isOnline ? 'text-green-600' : 'text-red-600'}>
                {isOnline ? '온라인' : '오프라인'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">서비스 워커:</span>
              <span className={getStatusColor(swStatus)}>
                {getStatusText(swStatus)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">설치됨:</span>
              <span className={isInstalled ? 'text-green-600' : 'text-gray-600'}>
                {isInstalled ? '예' : '아니오'}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">캐시 크기:</span>
              <span className="text-gray-900 dark:text-white">
                {formatFileSize(cacheSize)}
              </span>
            </div>
          </div>
          
          <button
            onClick={clearCache}
            className="w-full mt-3 px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-md text-sm transition-colors duration-200"
          >
            캐시 초기화
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default PWAManager;