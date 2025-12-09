import { useState, useEffect } from "react";
import Input from "../components/Input";
import Toast from "../components/Toast";
import { useToast } from "../components/ToastHook";
import Layout from "../components/Layout";

const roomTypes = [
  { id: 1, name: "스탠다드룸", price: 120000, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80", desc: "기본형 객실, 2인 기준" },
  { id: 2, name: "디럭스룸", price: 180000, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=300&q=80", desc: "넓은 공간, 3~4인 가족 추천" },
  { id: 3, name: "스위트룸", price: 300000, image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80", desc: "최고급 스위트, 오션뷰" },
  { id: 4, name: "패밀리룸", price: 220000, image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80", desc: "4인 가족, 거실 분리형" },
  { id: 5, name: "펜트하우스", price: 500000, image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=300&q=80", desc: "프라이빗 테라스, 최고급 시설" },
];

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [toast, showToast] = useToast();
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);

  // 예약 입력값 상태
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    people: 2,
    room: null,
    name: '',
    phone: '',
    email: '',
    requests: '',
  });

  // 가격 계산
  useEffect(() => {
    if (form.checkin && form.checkout && form.room) {
      const checkinDate = new Date(form.checkin);
      const checkoutDate = new Date(form.checkout);
      const timeDiff = checkoutDate.getTime() - checkinDate.getTime();
      const nightCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (nightCount > 0) {
        setNights(nightCount);
        setTotalPrice(form.room.price * nightCount);
      }
    }
  }, [form.checkin, form.checkout, form.room]);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 객실 선택 핸들러
  const handleRoomSelect = (room) => {
    setForm((prev) => ({ ...prev, room }));
  };

  // 1단계: 날짜/인원 유효성
  const handleNextStep1 = () => {
    if (!form.checkin || !form.checkout || !form.people) {
      showToast('체크인/체크아웃 날짜와 인원을 입력하세요.', 'error');
      return;
    }
    
    const checkinDate = new Date(form.checkin);
    const checkoutDate = new Date(form.checkout);
    
    if (checkoutDate <= checkinDate) {
      showToast('체크아웃 날짜는 체크인 날짜 이후여야 합니다.', 'error');
      return;
    }
    
    setStep(2);
  };

  // 2단계: 객실 선택 유효성
  const handleNextStep2 = () => {
    if (!form.room) {
      showToast('객실을 선택하세요.', 'error');
      return;
    }
    setStep(3);
  };

  // 3단계: 고객정보 유효성
  const handleNextStep3 = () => {
    if (!form.name || !form.phone || !form.email) {
      showToast('이름, 연락처, 이메일을 모두 입력하세요.', 'error');
      return;
    }
    setStep(4);
    showToast('예약이 완료되었습니다!', 'success');
  };

  // 새 예약
  const handleReset = () => {
    setForm({ checkin: '', checkout: '', people: 2, room: null, name: '', phone: '', email: '', requests: '' });
    setStep(1);
    setTotalPrice(0);
    setNights(0);
  };

  return (
    <Layout>
      {/* 프리미엄 히어로 헤더 */}
      <div className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent py-16 mb-12">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-display font-black mb-4">
            <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent">
              Premium Booking
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            럭셔리 예약 경험을 시작하세요
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        {/* 💎 초프리미엄 프로그레스 바 with 애니메이션 */}
        <div className="mb-16">
          <div className="relative flex items-center justify-between">
            {[
              { num: 1, title: "날짜 & 인원", icon: "📅" },
              { num: 2, title: "객실 선택", icon: "🏨" },
              { num: 3, title: "고객 정보", icon: "👤" },
              { num: 4, title: "예약 완료", icon: "✨" }
            ].map((item, index) => (
              <div key={item.num} className="flex flex-col items-center relative z-10">
                <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold transition-all duration-500 ${
                  step >= item.num 
                    ? 'bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 text-white shadow-2xl transform scale-110' 
                    : 'bg-white border-2 border-gray-300 text-gray-400'
                }`}>
                  {step > item.num ? (
                    <span className="animate-pulse">✓</span>
                  ) : (
                    item.icon
                  )}
                  
                  {/* 활성화된 단계에만 펄스 링 효과 */}
                  {step === item.num && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 animate-ping opacity-75"></span>
                  )}
                </div>
                
                <div className={`mt-4 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  step >= item.num ? 'text-purple-600' : 'text-gray-400'
                }`}>
                  {item.title}
                </div>
                
                {/* 연결선 - 최대 넓이 제한 */}
                {index < 3 && (
                  <div className="absolute top-8 sm:top-10 left-1/2 flex items-center" style={{ width: 'calc(100vw / 4 - 2rem)', maxWidth: '150px' }}>
                    <div className={`h-1 w-full rounded-full transition-all duration-500 ${
                      step > item.num 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                        : 'bg-gray-300'
                    }`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* 진행률 표시 */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full">
              <span className="text-sm font-semibold text-purple-600">
                진행률: {Math.round((step / 4) * 100)}%
              </span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-500"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 메인 폼 영역 - 슬라이드 애니메이션 */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 overflow-hidden"
               style={{ minHeight: '500px' }}>
            {step === 1 && (
              <div className="space-y-8 animate-slide-in">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-4">
                    <span className="text-4xl">📅</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">날짜 및 인원 선택</h2>
                  <p className="text-gray-600">완벽한 휴식을 위한 첫걸음</p>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">체크인 날짜</label>
                      <input 
                        type="date" 
                        name="checkin" 
                        value={form.checkin} 
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">체크아웃 날짜</label>
                      <input 
                        type="date" 
                        name="checkout" 
                        value={form.checkout} 
                        onChange={handleChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">투숙 인원</label>
                    <select 
                      name="people" 
                      value={form.people} 
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg bg-white"
                    >
                      <option value={1}>성인 1명</option>
                      <option value={2}>성인 2명</option>
                      <option value={3}>성인 2명, 아동 1명</option>
                      <option value={4}>성인 2명, 아동 2명</option>
                      <option value={5}>성인 3명, 아동 2명</option>
                      <option value={6}>성인 4명, 아동 2명</option>
                    </select>
                  </div>
                </div>

                <button 
                  className="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden text-lg"
                  onClick={handleNextStep1}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-2">
                    다음 단계
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-8 animate-slide-in">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-4">
                    <span className="text-4xl">🏨</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">객실 선택</h2>
                  <p className="text-gray-600">럭셔리 객실을 선택해보세요</p>
                </div>

                <div className="space-y-4">
                  {roomTypes.map((room) => (
                    <div 
                      key={room.id}
                      className={`relative p-6 border-2 rounded-2xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        form.room?.id === room.id 
                          ? 'border-brand-primary bg-brand-primary/5 shadow-lg' 
                          : 'border-gray-200 hover:border-brand-primary/50'
                      }`}
                      onClick={() => handleRoomSelect(room)}
                    >
                      <div className="flex items-center gap-6">
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-24 h-24 object-cover rounded-xl shadow-md"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-brand-primary">
                                ₩{room.price.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-600">/ 박</div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">{room.desc}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              무료 Wi-Fi
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                              조식 포함
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              24시간 룸서비스
                            </span>
                          </div>
                        </div>
                        {form.room?.id === room.id && (
                          <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center text-white">
                            ✓
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button 
                    className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors"
                    onClick={() => setStep(1)}
                  >
                    이전 단계
                  </button>
                  <button 
                    className="group relative flex-1 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    onClick={handleNextStep2}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center gap-2">
                      다음 단계
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-8 animate-slide-in">
                <div className="text-center mb-8">
                  <div className="inline-block p-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-4">
                    <span className="text-4xl">👤</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">고객 정보 입력</h2>
                  <p className="text-gray-600">예약 확정을 위한 마지막 단계</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">성명</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange}
                      placeholder="홍길동"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">연락처</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={form.phone} 
                      onChange={handleChange}
                      placeholder="010-1234-5678"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">이메일</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all text-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">특별 요청사항 (선택)</label>
                    <textarea 
                      name="requests" 
                      value={form.requests} 
                      onChange={handleChange}
                      placeholder="추가 요청사항이 있으시면 입력해주세요..."
                      rows={4}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all resize-none"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">개인정보 처리 안내</h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p>• 수집된 개인정보는 예약 확인 및 숙박 서비스 제공 목적으로만 사용됩니다.</p>
                    <p>• 고객님의 개인정보는 안전하게 보호되며, 제3자에게 제공되지 않습니다.</p>
                    <p>• 예약 취소 시 관련 정보는 즉시 삭제됩니다.</p>
                  </div>
                  <label className="flex items-center gap-3 mt-4">
                    <input type="checkbox" className="w-5 h-5 text-brand-primary" />
                    <span className="text-sm font-semibold text-gray-700">개인정보 처리방침에 동의합니다.</span>
                  </label>
                </div>

                <div className="flex gap-4">
                  <button 
                    className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-2xl hover:bg-gray-200 transition-colors"
                    onClick={() => setStep(2)}
                  >
                    이전 단계
                  </button>
                  <button 
                    className="group relative flex-1 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-accent text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    onClick={handleNextStep3}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center gap-2">
                      ✨ 예약 완료
                    </span>
                  </button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="text-center space-y-8 animate-fade-in">
                <div className="text-6xl mb-6">🎉</div>
                
                <div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-4">예약이 완료되었습니다!</h2>
                  <p className="text-xl text-gray-600">Resort BAIKAL에서 특별한 경험을 준비해드리겠습니다</p>
                </div>

                <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">예약 확인서</h3>
                  
                  <div className="space-y-4 text-left">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">예약자명</span>
                      <span className="text-gray-800">{form.name}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">연락처</span>
                      <span className="text-gray-800">{form.phone}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">객실</span>
                      <span className="text-gray-800">{form.room?.name}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">체크인</span>
                      <span className="text-gray-800">{form.checkin}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">체크아웃</span>
                      <span className="text-gray-800">{form.checkout}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">숙박 기간</span>
                      <span className="text-gray-800">{nights}박 {nights + 1}일</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-700">인원</span>
                      <span className="text-gray-800">{form.people}명</span>
                    </div>
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-xl font-bold text-gray-800">총 결제금액</span>
                      <span className="text-2xl font-bold text-brand-primary">₩{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 mb-3">📧 예약 확인 안내</h4>
                  <div className="text-sm text-gray-600 space-y-2 text-left">
                    <p>• 예약 확인서가 <strong>{form.email}</strong>로 발송되었습니다.</p>
                    <p>• 체크인 24시간 전까지 무료 취소가 가능합니다.</p>
                    <p>• 문의사항은 고객센터(1588-0000)로 연락주세요.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    className="flex-1 px-6 py-4 bg-white border-2 border-brand-primary text-brand-primary font-semibold rounded-2xl hover:bg-brand-primary hover:text-white transition-colors"
                    onClick={() => window.print()}
                  >
                    📄 예약서 출력
                  </button>
                  <button 
                    className="group relative flex-1 inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
                    onClick={handleReset}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="relative flex items-center gap-2">
                      🏨 새 예약하기
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 가격 요약 사이드바 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {form.room && (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">예약 요약</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src={form.room.image} 
                        alt={form.room.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800">{form.room.name}</h4>
                        <p className="text-sm text-gray-600">{form.room.desc}</p>
                      </div>
                    </div>
                    
                    {form.checkin && form.checkout && (
                      <div className="border-t border-gray-200 pt-4 space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">체크인</span>
                          <span className="font-semibold">{form.checkin}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">체크아웃</span>
                          <span className="font-semibold">{form.checkout}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">숙박 기간</span>
                          <span className="font-semibold">{nights}박</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">인원</span>
                          <span className="font-semibold">{form.people}명</span>
                        </div>
                      </div>
                    )}
                    
                    {nights > 0 && (
                      <div className="border-t border-gray-200 pt-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">객실료 ({nights}박)</span>
                          <span>₩{(form.room.price * nights).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">세금 및 수수료</span>
                          <span>₩0</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2">
                          <div className="flex justify-between text-xl font-bold text-brand-primary">
                            <span>총 결제금액</span>
                            <span>₩{totalPrice.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      무료 취소 (24시간 전)
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      조식 포함
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      무료 Wi-Fi & 주차
                    </div>
                  </div>
                </>
              )}
              
              {!form.room && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🏨</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">객실을 선택하세요</h3>
                  <p className="text-gray-600 text-sm">객실 선택 후 가격을 확인하실 수 있습니다</p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <Toast toast={toast} />
      </div>
    </Layout>
  );
}
