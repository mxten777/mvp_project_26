// ⚡ 지연 로딩 유틸리티 - 코드 분할 및 성능 최적화
import { lazy, Suspense, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PremiumLoader } from './LoadingAnimations';

// 🎯 지연 로딩 컴포넌트 래퍼
export const LazyComponent = ({ 
  importFunc, 
  fallback, 
  errorFallback,
  retryCount = 3,
  ...props 
}) => {
  const [Component, setComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retries, setRetries] = useState(0);

  const loadComponent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const module = await importFunc();
      setComponent(() => module.default || module);
      setIsLoading(false);
    } catch (err) {
      console.error('컴포넌트 로딩 실패:', err);
      
      if (retries < retryCount) {
        setTimeout(() => {
          setRetries(prev => prev + 1);
          loadComponent();
        }, 1000 * (retries + 1)); // 지수 백오프
      } else {
        setError(err);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    loadComponent();
  }, []);

  if (isLoading) {
    return fallback || <PremiumLoader type="luxury" />;
  }

  if (error) {
    return errorFallback || (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          컴포넌트를 불러올 수 없습니다
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          네트워크 연결을 확인하고 다시 시도해주세요.
        </p>
        <button
          onClick={() => {
            setRetries(0);
            loadComponent();
          }}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          다시 시도
        </button>
      </div>
    );
  }

  if (!Component) {
    return null;
  }

  return <Component {...props} />;
};

// 📦 페이지 지연 로딩 래퍼
export const LazyPage = ({ 
  children, 
  fallback,
  pageTitle,
  description 
}) => {
  const defaultFallback = (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <PremiumLoader type="luxury" />
        {pageTitle && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-4"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {pageTitle} 로딩 중...
            </h2>
            {description && (
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {description}
              </p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <AnimatePresence mode="wait">
        {children}
      </AnimatePresence>
    </Suspense>
  );
};

// 🎨 모달 지연 로딩
export const LazyModal = ({ 
  isOpen, 
  onClose, 
  importFunc, 
  modalProps = {},
  ...props 
}) => {
  const [ModalComponent, setModalComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && !ModalComponent) {
      setIsLoading(true);
      importFunc()
        .then(module => {
          setModalComponent(() => module.default || module);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('모달 컴포넌트 로딩 실패:', error);
          setIsLoading(false);
        });
    }
  }, [isOpen, ModalComponent, importFunc]);

  if (!isOpen) return null;

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
          <PremiumLoader type="dots" />
        </div>
      </div>
    );
  }

  if (!ModalComponent) return null;

  return (
    <ModalComponent
      isOpen={isOpen}
      onClose={onClose}
      {...modalProps}
      {...props}
    />
  );
};

// 📊 차트 지연 로딩
export const LazyChart = ({ 
  type, 
  data, 
  options, 
  className = '',
  ...props 
}) => {
  const [ChartComponent, setChartComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getChartImport = (chartType) => {
    switch (chartType) {
      case 'line':
        return () => import('react-chartjs-2').then(module => module.Line);
      case 'bar':
        return () => import('react-chartjs-2').then(module => module.Bar);
      case 'pie':
        return () => import('react-chartjs-2').then(module => module.Pie);
      case 'doughnut':
        return () => import('react-chartjs-2').then(module => module.Doughnut);
      default:
        return () => import('react-chartjs-2').then(module => module.Line);
    }
  };

  useEffect(() => {
    const loadChart = async () => {
      try {
        // Chart.js 등록
        const { Chart, registerables } = await import('chart.js');
        Chart.register(...registerables);

        const chartImport = getChartImport(type);
        const component = await chartImport();
        setChartComponent(() => component);
        setIsLoading(false);
      } catch (error) {
        console.error('차트 컴포넌트 로딩 실패:', error);
        setIsLoading(false);
      }
    };

    loadChart();
  }, [type]);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <PremiumLoader type="pulse" />
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            차트 로딩 중...
          </p>
        </div>
      </div>
    );
  }

  if (!ChartComponent) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">📊</div>
          <p>차트를 불러올 수 없습니다</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <ChartComponent data={data} options={options} {...props} />
    </div>
  );
};

// 🗺️ 지도 지연 로딩
export const LazyMap = ({ 
  center, 
  zoom = 10, 
  markers = [], 
  className = '',
  mapType = 'google', // 'google', 'kakao', 'naver'
  ...props 
}) => {
  const [MapComponent, setMapComponent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        let mapModule;
        
        switch (mapType) {
          case 'google':
            mapModule = await import('@googlemaps/js-api-loader')
              .then(({ Loader }) => ({ Loader }));
            break;
          case 'kakao':
            // Kakao Map API 로딩
            mapModule = await loadKakaoMap();
            break;
          case 'naver':
            // Naver Map API 로딩
            mapModule = await loadNaverMap();
            break;
          default:
            throw new Error('지원하지 않는 지도 타입입니다.');
        }

        setMapComponent(() => createMapComponent(mapModule, mapType));
        setIsLoading(false);
      } catch (err) {
        console.error('지도 컴포넌트 로딩 실패:', err);
        setError(err);
        setIsLoading(false);
      }
    };

    loadMap();
  }, [mapType]);

  const loadKakaoMap = async () => {
    return new Promise((resolve, reject) => {
      if (window.kakao && window.kakao.maps) {
        resolve(window.kakao.maps);
        return;
      }

      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`;
      script.onload = () => {
        window.kakao.maps.load(() => {
          resolve(window.kakao.maps);
        });
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const loadNaverMap = async () => {
    return new Promise((resolve, reject) => {
      if (window.naver && window.naver.maps) {
        resolve(window.naver.maps);
        return;
      }

      const script = document.createElement('script');
      script.src = `//openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.REACT_APP_NAVER_MAP_KEY}`;
      script.onload = () => resolve(window.naver.maps);
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };

  const createMapComponent = (mapModule, type) => {
    return ({ center, zoom, markers, ...props }) => {
      const mapRef = useRef(null);

      useEffect(() => {
        if (!mapRef.current || !mapModule) return;

        // 지도 타입별 초기화 로직
        let map;
        switch (type) {
          case 'kakao':
            map = new mapModule.Map(mapRef.current, {
              center: new mapModule.LatLng(center.lat, center.lng),
              level: zoom
            });
            break;
          case 'naver':
            map = new mapModule.Map(mapRef.current, {
              center: new mapModule.LatLng(center.lat, center.lng),
              zoom: zoom
            });
            break;
          default:
            // Google Maps 초기화
            break;
        }

        // 마커 추가
        markers.forEach(marker => {
          switch (type) {
            case 'kakao':
              new mapModule.Marker({
                position: new mapModule.LatLng(marker.lat, marker.lng),
                map: map
              });
              break;
            case 'naver':
              new mapModule.Marker({
                position: new mapModule.LatLng(marker.lat, marker.lng),
                map: map
              });
              break;
          }
        });
      }, [mapModule, center, zoom, markers]);

      return <div ref={mapRef} className="w-full h-full" {...props} />;
    };
  };

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ minHeight: '400px' }}>
        <div className="text-center">
          <PremiumLoader type="wave" />
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            지도 로딩 중...
          </p>
        </div>
      </div>
    );
  }

  if (error || !MapComponent) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ minHeight: '400px' }}>
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🗺️</div>
          <p>지도를 불러올 수 없습니다</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <MapComponent
        center={center}
        zoom={zoom}
        markers={markers}
        {...props}
      />
    </div>
  );
};

// 🎬 비디오 지연 로딩
export const LazyVideo = ({ 
  src, 
  poster, 
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(autoPlay);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoaded(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={videoRef} className={`relative ${className}`}>
      {!isLoaded ? (
        <div 
          className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer"
          onClick={() => setShouldLoad(true)}
        >
          {poster ? (
            <img src={poster} alt="비디오 썸네일" className="w-full h-full object-cover" />
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-2">▶️</div>
              <p className="text-gray-600">클릭하여 비디오 로드</p>
            </div>
          )}
        </div>
      ) : (
        <video
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          controls={controls}
          className="w-full h-full"
          {...props}
        />
      )}
    </div>
  );
};

export default LazyComponent;