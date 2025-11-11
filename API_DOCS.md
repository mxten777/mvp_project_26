# 🔌 Resort BAIKAL API 문서

## 📋 API 개요

Resort BAIKAL 시스템의 Firebase 기반 API 설계 및 데이터 구조 문서입니다.
---

## 🔥 Firebase Collections 구조

### 👤 users (사용자)
{
  uid: "user_unique_id",           // Firebase Auth UID
  email: "user@example.com",       // 이메일
  displayName: "홍길동",           // 표시 이름
  phoneNumber: "010-1234-5678",    // 전화번호
  role: "customer",                // 역할: "admin" | "customer"
  createdAt: Timestamp,            // 생성일
  updatedAt: Timestamp,            // 수정일
  isActive: true,                  // 활성 상태
  profile: {
    avatar: "url_to_image",        // 프로필 이미지
    preferences: {                 // 사용자 선호도
      notifications: true,
      language: "ko"
    }
  }
}
```

### 🏨 rooms (객실)
```javascript
{
  id: "room_001",                  // 객실 ID
  name: "바이칼 스위트",           // 객실명
  type: "suite",                   // 타입: "standard" | "deluxe" | "suite" | "presidential"
  capacity: {                      // 수용 인원
    adults: 2,
    children: 1,
    max: 3
  },
  price: {                         // 가격 정보
    base: 150000,                  // 기본 가격 (원)
    weekend: 180000,               // 주말 가격
    holiday: 200000                // 휴일 가격
  },
  amenities: [                     // 편의시설
    "wifi", "tv", "minibar", "balcony", "jacuzzi"
  ],
  images: [                        // 이미지 URL 배열
    "https://...", "https://..."
  ],
  description: "바이칼 호수 전망...", // 설명
  area: 45,                        // 면적 (㎡)
  bedType: "킹사이즈",             // 침대 타입
  isActive: true,                  // 활성 상태
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### 📅 bookings (예약)
```javascript
{
  id: "booking_001",               // 예약 ID
  userId: "user_uid",              // 예약자 UID
  roomId: "room_001",              // 객실 ID
  guestInfo: {                     // 투숙객 정보
    name: "홍길동",
    phone: "010-1234-5678",
    email: "guest@example.com",
    adults: 2,
    children: 1,
    specialRequests: "늦은 체크인 요청"
  },
  dates: {                         // 날짜 정보
    checkIn: "2025-10-15",
    checkOut: "2025-10-17",
    nights: 2
  },
  pricing: {                       // 가격 정보
    roomRate: 150000,              // 1박 요금
    totalNights: 2,                // 총 박수
    subtotal: 300000,              // 소계
    taxes: 30000,                  // 세금
    fees: 10000,                   // 수수료
    total: 340000                  // 총액
  },
  status: "confirmed",             // 상태: "pending" | "confirmed" | "checked_in" | "checked_out" | "cancelled"
  paymentStatus: "paid",           // 결제: "pending" | "paid" | "refunded"
  paymentMethod: "card",           // 결제수단: "card" | "bank" | "cash"
  updatedAt: Timestamp,
  notes: "관리자 메모"
### 🏊‍♀️ facilities (시설)
```javascript
{
  id: "facility_001",              // 시설 ID
  name: "인피니티 풀",             // 시설명
  category: "pool",                // 카테고리: "pool" | "spa" | "restaurant" | "fitness" | "recreation"
  description: "바이칼 호수 전망...", // 설명
  operatingHours: {               // 운영시간
    open: "06:00",
    close: "22:00",
    closed: []                     // 휴무일 배열
  },
  capacity: 50,                    // 수용인원
  amenities: ["heated", "infinity", "poolbar"], // 특징
  images: ["https://...", "https://..."],
  pricing: {                       // 이용요금
    adult: 50000,
    child: 30000,
    family: 120000
  },
  bookingRequired: true,           // 예약 필요 여부
  createdAt: Timestamp,
  updatedAt: Timestamp
### 🎉 events (이벤트)
```javascript
{
  id: "event_001",                 // 이벤트 ID
  title: "겨울 축제",              // 제목
  description: "바이칼 겨울 축제...", // 설명
  category: "festival",            // 카테고리: "festival" | "activity" | "dining" | "wellness"
  dates: {                         // 일정
    start: "2025-12-01",
    end: "2025-12-31",
    times: ["10:00", "14:00", "19:00"] // 시간대
  },
  location: "메인 로비",           // 장소
  capacity: 100,                   // 정원
  pricing: {                       // 요금
    adult: 80000,
    child: 50000,
    resident: 60000                // 투숙객 할인
  },
  images: ["https://...", "https://..."],
  features: ["food", "music", "activities"], // 특징
  ageRestriction: "all",           // 연령제한: "all" | "adult" | "family"
  isActive: true,
  registrations: [],               // 참가 신청 배열
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### 📞 inquiries (문의)
```javascript
{
  id: "inquiry_001",               // 문의 ID
  userId: "user_uid",              // 문의자 UID (비회원 가능)
  guestInfo: {                     // 문의자 정보
    name: "홍길동",
    email: "guest@example.com",
    phone: "010-1234-5678"
  },
  subject: "객실 예약 문의",       // 제목
  category: "booking",             // 카테고리: "booking" | "facility" | "event" | "general" | "complaint"
  message: "12월 예약 가능한...",  // 내용
  status: "pending",               // 상태: "pending" | "in_progress" | "resolved" | "closed"
  priority: "normal",              // 우선순위: "low" | "normal" | "high" | "urgent"
  assignedTo: "admin_uid",         // 담당자
  responses: [                     // 응답 배열
    {
      userId: "admin_uid",
      message: "안녕하세요...",
      timestamp: Timestamp,
      isStaff: true
    }
  ],
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

---

## 🔐 Firebase Security Rules

### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 사용자 문서
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      allow read: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // 객실 정보 (읽기 전용)
    match /rooms/{roomId} {
      allow read: if true; // 공개
      allow write: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // 예약 정보
    match /bookings/{bookingId} {
      allow read, write: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
    
    // 시설 정보 (읽기 전용)
    match /facilities/{facilityId} {
      allow read: if true; // 공개
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // 이벤트 정보
    match /events/{eventId} {
      allow read: if true; // 공개
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // 문의사항
    match /inquiries/{inquiryId} {
      allow read, write: if request.auth != null && 
        (resource.data.userId == request.auth.uid || 
         get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin');
    }
  }
}
```

---

## 🔧 API 사용 예시

### 인증 관련
```javascript
import { auth } from '../config/firebase';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth';

// 회원가입
export const registerUser = async (email, password, userData) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Firestore에 사용자 정보 저장
    await setDoc(doc(db, 'users', user.uid), {
      ...userData,
      uid: user.uid,
      email: email,
      role: 'customer',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 로그인
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 로그아웃
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};
```

### 예약 관련
```javascript
import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore';

// 예약 생성
export const createBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...bookingData,
      status: 'pending',
      paymentStatus: 'pending',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    throw new Error(error.message);
  }
};

// 사용자 예약 목록 조회
export const getUserBookings = async (userId) => {
  try {
    const q = query(
      collection(db, 'bookings'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw new Error(error.message);
  }
};

// 예약 상태 업데이트
export const updateBookingStatus = async (bookingId, status) => {
  try {
    const bookingRef = doc(db, 'bookings', bookingId);
    await updateDoc(bookingRef, {
      status: status,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
```

### 객실 관련
```javascript
// 객실 목록 조회
export const getRooms = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'rooms'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    throw new Error(error.message);
  }
};

// 특정 기간 객실 가용성 확인
export const checkRoomAvailability = async (roomId, checkIn, checkOut) => {
  try {
    const q = query(
      collection(db, 'bookings'),
      where('roomId', '==', roomId),
      where('status', 'in', ['confirmed', 'checked_in'])
    );
    
    const querySnapshot = await getDocs(q);
    const existingBookings = querySnapshot.docs.map(doc => doc.data());
    
    // 날짜 겹침 확인 로직
    const isAvailable = !existingBookings.some(booking => {
      const bookingCheckIn = new Date(booking.dates.checkIn);
      const bookingCheckOut = new Date(booking.dates.checkOut);
      const requestCheckIn = new Date(checkIn);
      const requestCheckOut = new Date(checkOut);
      
      return !(requestCheckOut <= bookingCheckIn || requestCheckIn >= bookingCheckOut);
    });
    
    return isAvailable;
  } catch (error) {
    throw new Error(error.message);
  }
};
```

---

## 📊 실시간 데이터 구독

### 예약 실시간 모니터링
```javascript
import { onSnapshot } from 'firebase/firestore';

// 관리자 대시보드에서 실시간 예약 모니터링
export const subscribeToBookings = (callback) => {
  const q = query(
    collection(db, 'bookings'),
    orderBy('createdAt', 'desc')
  );
  
  return onSnapshot(q, (querySnapshot) => {
    const bookings = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    callback(bookings);
  });
};

// 사용 예시
useEffect(() => {
  const unsubscribe = subscribeToBookings((bookings) => {
    setRealtimeBookings(bookings);
  });
  
  return () => unsubscribe();
}, []);
```

---

## 🔍 복합 쿼리 예시

### 대시보드 통계 조회
```javascript
// 오늘 체크인 예정
export const getTodayCheckIns = async () => {
  const today = new Date().toISOString().split('T')[0];
  const q = query(
    collection(db, 'bookings'),
    where('dates.checkIn', '==', today),
    where('status', '==', 'confirmed')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 월별 매출 통계
export const getMonthlyRevenue = async (year, month) => {
  const startDate = `${year}-${month.toString().padStart(2, '0')}-01`;
  const endDate = `${year}-${month.toString().padStart(2, '0')}-31`;
  
  const q = query(
    collection(db, 'bookings'),
    where('dates.checkIn', '>=', startDate),
    where('dates.checkIn', '<=', endDate),
    where('paymentStatus', '==', 'paid')
  );
  
  const snapshot = await getDocs(q);
  const bookings = snapshot.docs.map(doc => doc.data());
  
  return bookings.reduce((total, booking) => total + booking.pricing.total, 0);
};
```

---

## 🚨 에러 처리

### 공통 에러 처리 함수
```javascript
export const handleFirebaseError = (error) => {
  const errorMessages = {
    'auth/user-not-found': '사용자를 찾을 수 없습니다.',
    'auth/wrong-password': '비밀번호가 올바르지 않습니다.',
    'auth/email-already-in-use': '이미 사용 중인 이메일입니다.',
    'auth/weak-password': '비밀번호가 너무 약합니다.',
    'auth/invalid-email': '유효하지 않은 이메일 형식입니다.',
    'permission-denied': '권한이 없습니다.',
    'not-found': '문서를 찾을 수 없습니다.',
    'already-exists': '이미 존재하는 문서입니다.'
  };
  
  return errorMessages[error.code] || '알 수 없는 오류가 발생했습니다.';
};

// 사용 예시
try {
  await createBooking(bookingData);
} catch (error) {
  const message = handleFirebaseError(error);
  showToast(message, 'error');
}
```

---

## 🔄 데이터 마이그레이션

### 초기 데이터 설정
```javascript
// 샘플 객실 데이터 생성
export const initializeRooms = async () => {
  const sampleRooms = [
    {
      id: 'standard_001',
      name: '스탠다드 룸',
      type: 'standard',
      capacity: { adults: 2, children: 1, max: 3 },
      price: { base: 120000, weekend: 140000, holiday: 160000 },
      amenities: ['wifi', 'tv', 'minibar'],
      area: 25,
      bedType: '더블',
      isActive: true
    },
    // ... 더 많은 객실 데이터
  ];
  
  for (const room of sampleRooms) {
    await setDoc(doc(db, 'rooms', room.id), {
      ...room,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
  }
};
```

---

**📚 이 API 문서는 Resort BAIKAL 시스템의 Firebase 백엔드 구조를 정의합니다. 모든 팀원이 일관된 데이터 구조와 API를 사용할 수 있도록 참조해주세요.**