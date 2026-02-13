import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ResponsiveGrid, ResponsiveText } from "../components/ResponsiveUtils";
import { FadeInUp, ScaleIn, HoverScale } from "../components/PageTransition";

const rooms = [
  {
    id: 1,
    name: "스탠다드룸",
    desc: "아늑하고 편안한 공간",
    detail: "2인 기준, 퀸사이즈 침대, 기본 어메니티 제공",
    price: 120000,
    discount: null,
    rating: 4.5,
    reviews: 128,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    badge: null,
    features: ["퀸사이즈 침대", "무료 Wi-Fi", "미니바"],
  },
  {
    id: 2,
    name: "디럭스룸",
    desc: "넓고 럭셔리한 공간",
    detail: "3~4인 가족 추천, 킹사이즈 침대, 프리미엄 어메니티",
    price: 180000,
    discount: null,
    rating: 4.7,
    reviews: 256,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
    badge: "인기",
    features: ["킹사이즈 침대", "발코니", "욕조"],
  },
  {
    id: 3,
    name: "스위트룸",
    desc: "최고급 럭셔리 스위트",
    detail: "오션뷰, 거실 분리형, VIP 서비스",
    price: 300000,
    discount: 20,
    rating: 4.9,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    badge: "프리미엄",
    features: ["오션뷰", "거실 분리", "프라이빗 라운지"],
  },
  {
    id: 4,
    name: "패밀리룸",
    desc: "가족을 위한 완벽한 공간",
    detail: "4인 가족, 거실 분리형, 키즈 어메니티",
    price: 220000,
    discount: null,
    rating: 4.6,
    reviews: 167,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
    badge: "가족 추천",
    features: ["침실 2개", "거실", "키즈 패키지"],
  },
  {
    id: 5,
    name: "펜트하우스",
    desc: "최상급 프라이빗 스위트",
    detail: "프라이빗 테라스, 전용 수영장, 최고급 시설",
    price: 500000,
    discount: 15,
    rating: 5.0,
    reviews: 45,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
    badge: "최고급",
    features: ["프라이빗 테라스", "전용 수영장", "집사 서비스"],
  },
  {
    id: 6,
    name: "온돌룸",
    desc: "전통과 현대의 조화",
    detail: "한국식 온돌, 가족/어르신 추천, 힐링 공간",
    price: 150000,
    discount: null,
    rating: 4.8,
    reviews: 203,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    badge: "한국식",
    features: ["온돌 침실", "좌식 테이블", "족욕기"],
  },
];

export default function RoomList() {
  return (
    <Layout>
      {/* 🌟 프리미엄 히어로 섹션 */}
      <div data-has-hero="true" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 mb-16">
        {/* 배경 효과 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <FadeInUp>
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-sm font-semibold mb-6 border border-white/20">
              프리미엄 객실 컬렉션
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200">
                Luxury Rooms
              </span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              바이칼 호수의 장엄한 전망과 함께하는
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-semibold">
                최상급 럭셔리 경험
              </span>
            </p>
          </FadeInUp>
        </div>
      </div>

      <div className="px-6 max-w-7xl mx-auto pb-20">
        {/* 필터 바 */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {["전체", "스탠다드", "디럭스", "스위트", "패밀리"].map((filter, idx) => (
            <button 
              key={idx}
              className={`px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
                idx === 0
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-2 border-gray-200 dark:border-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* 🏨 프리미엄 객실 카드 그리드 */}
        <ResponsiveGrid 
          mobileCols={1} 
          tabletCols={2} 
          desktopCols={3} 
          gap="gap-8"
          className="mb-16"
        >
          {rooms.map((room, index) => (
            <ScaleIn key={room.id} delay={index * 0.1}>
              <Link to={`/rooms/${room.id}`} className="block group">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-3">
                  {/* 이미지 컨테이너 */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={room.img} 
                      alt={room.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* 할인 뱃지 */}
                    {room.discount && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl animate-pulse">
                        {room.discount}% OFF
                      </div>
                    )}
                    
                    {/* 상태 뱃지 */}
                    {room.badge && (
                      <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-gray-800 dark:text-white shadow-lg border border-white/20 dark:border-gray-700/20">
                        {room.badge}
                      </div>
                    )}

                    {/* 평점 */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-2 rounded-full">
                      <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span className="text-white font-bold">{room.rating}</span>
                      <span className="text-white/70 text-sm">({room.reviews})</span>
                    </div>
                  </div>

                  {/* 콘텐츠 영역 */}
                  <div className="p-6">
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                      {room.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-3">
                      {room.desc}
                    </p>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                      {room.detail}
                    </p>

                    {/* 특징 태그 */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* 가격 및 예약 버튼 */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        {room.discount ? (
                          <>
                            <div className="text-sm text-gray-400 line-through">
                              ₩{room.price.toLocaleString()}
                            </div>
                            <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                              ₩{(room.price * (1 - room.discount / 100)).toLocaleString()}
                            </div>
                          </>
                        ) : (
                          <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                            ₩{room.price.toLocaleString()}
                          </div>
                        )}
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          1박 기준
                        </div>
                      </div>
                      
                      <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                        예약하기
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScaleIn>
          ))}
        </ResponsiveGrid>

        {/* 💎 특별 프로모션 섹션 */}
        <FadeInUp>
          <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden mb-8">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-xl rounded-full text-sm font-bold mb-6">
                특별 이벤트
              </div>
              <h2 className="text-4xl font-black mb-4">첫 예약 특별 할인</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                지금 가입하고 첫 예약 시 <span className="font-bold text-yellow-300">20% 할인</span> 혜택을 받으세요
              </p>
              <Link
                to="/signup"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>회원가입하고 할인받기</span>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </FadeInUp>
      </div>
    </Layout>
  );
}
