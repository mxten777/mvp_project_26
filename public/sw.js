// 🔧 바이칼 리조트 서비스 워커 - 프리미엄 오프라인 경험
const CACHE_NAME = 'baikal-resort-v1.0.0';
const CACHE_URLS = [
  '/',
  '/manifest.json',
  '/src/main.jsx',
  '/src/index.css',
  // 폰트 캐시
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap',
  // 이미지 캐시 (나중에 추가)
];

// 📦 설치 이벤트 - 초기 캐시 설정
self.addEventListener('install', (event) => {
  console.log('[SW] 서비스 워커 설치 중...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] 캐시 저장 중...');
        return cache.addAll(CACHE_URLS);
      })
      .then(() => {
        console.log('[SW] 설치 완료!');
        return self.skipWaiting();
      })
  );
});

// 🔄 활성화 이벤트 - 이전 캐시 정리
self.addEventListener('activate', (event) => {
  console.log('[SW] 서비스 워커 활성화 중...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] 이전 캐시 삭제:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('[SW] 활성화 완료!');
        return self.clients.claim();
      })
  );
});

// 🌐 네트워크 요청 인터셉트 - 캐시 우선 전략
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API 요청은 네트워크 우선
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // 성공적인 응답을 캐시에 저장
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(request, responseClone);
              });
          }
          return response;
        })
        .catch(() => {
          // 네트워크 실패 시 캐시에서 반환
          return caches.match(request);
        })
    );
    return;
  }

  // 이미지는 캐시 우선, 네트워크 fallback
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(request)
            .then((response) => {
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(request, responseClone);
                  });
              }
              return response;
            });
        })
    );
    return;
  }

  // 일반 요청 - 네트워크 우선, 캐시 fallback
  event.respondWith(
    fetch(request)
      .then((response) => {
        // 성공적인 GET 요청만 캐시
        if (request.method === 'GET' && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(request, responseClone);
            });
        }
        return response;
      })
      .catch(() => {
        // 네트워크 실패 시 캐시에서 반환
        return caches.match(request)
          .then((cachedResponse) => {
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // 기본 오프라인 페이지 반환
            if (request.destination === 'document') {
              return caches.match('/offline.html');
            }
            
            return new Response('네트워크 오류가 발생했습니다.', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});

// 📢 메시지 이벤트 - 앱과 통신
self.addEventListener('message', (event) => {
  const { type, payload } = event.data;
  
  switch (type) {
    case 'SKIP_WAITING':
      self.skipWaiting();
      break;
      
    case 'GET_VERSION':
      event.ports[0].postMessage({
        type: 'VERSION',
        payload: { version: CACHE_NAME }
      });
      break;
      
    case 'CLEAR_CACHE':
      caches.delete(CACHE_NAME)
        .then(() => {
          event.ports[0].postMessage({
            type: 'CACHE_CLEARED',
            payload: { success: true }
          });
        });
      break;
      
    default:
      console.log('[SW] 알 수 없는 메시지:', type);
  }
});

// 🔄 백그라운드 동기화 (향후 확장용)
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('[SW] 백그라운드 동기화 실행');
    event.waitUntil(doBackgroundSync());
  }
});

// 📱 푸시 알림 (향후 확장용)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : '새로운 알림이 있습니다.',
    icon: '/images/icon-192x192.svg',
    badge: '/images/icon-72x72.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: '확인하기',
        icon: '/images/checkmark.png'
      },
      {
        action: 'close',
        title: '닫기',
        icon: '/images/xmark.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('바이칼 리조트', options)
  );
});

// 🎯 알림 클릭 처리
self.addEventListener('notificationclick', (event) => {
  const { action, notification } = event;
  
  notification.close();
  
  if (action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// 🔧 유틸리티 함수들
async function doBackgroundSync() {
  try {
    // 오프라인 중 저장된 데이터 동기화
    const offlineData = await getOfflineData();
    if (offlineData.length > 0) {
      await syncOfflineData(offlineData);
      await clearOfflineData();
    }
  } catch (error) {
    console.error('[SW] 백그라운드 동기화 실패:', error);
  }
}

async function getOfflineData() {
  // IndexedDB에서 오프라인 데이터 조회
  return [];
}

async function syncOfflineData(data) {
  // 서버와 데이터 동기화
  return Promise.resolve();
}

async function clearOfflineData() {
  // 동기화 완료된 오프라인 데이터 삭제
  return Promise.resolve();
}

console.log('[SW] 바이칼 리조트 서비스 워커 로드 완료! 🏨✨');