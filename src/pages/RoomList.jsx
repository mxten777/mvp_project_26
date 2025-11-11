import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { ResponsiveGrid, ResponsiveText, useDeviceType } from "../components/ResponsiveUtils";
import { FadeInUp, ScaleIn } from "../components/PageTransition";
import { motion } from "framer-motion";

const rooms = [
  {
    id: 1,
    name: "스탠다드룸",
    desc: "기본형 객실, 2인 기준",
    price: 120000,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "디럭스룸",
    desc: "넓은 공간, 3~4인 가족 추천",
    price: 180000,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "스위트룸",
    desc: "최고급 스위트, 오션뷰",
    price: 300000,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "패밀리룸",
    desc: "4인 가족, 거실 분리형",
    price: 220000,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "펜트하우스",
    desc: "프라이빗 테라스, 최고급 시설",
    price: 500000,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "온돌룸",
    desc: "한국식 온돌, 가족/어르신 추천",
    price: 150000,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
];

export default function RoomList() {
  return (
    <Layout>
      {/* 프리미엄 히어로 헤더 */}
      <div className="relative bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent py-12 sm:py-16 md:py-20 mb-8 sm:mb-12 md:mb-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <FadeInUp>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-display font-black mb-3 sm:mb-4">
              <span className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent">
                Luxury Rooms
              </span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <ResponsiveText 
              mobileSize="text-base"
              tabletSize="text-lg" 
              desktopSize="text-xl"
              className="text-white/90 font-light max-w-2xl mx-auto px-4"
            >
              바이칼 호수가 선사하는 최고급 객실에서 특별한 휴식을 경험하세요
            </ResponsiveText>
          </FadeInUp>
        </div>
      </div>

      <div className="px-4 sm:px-6 max-w-7xl mx-auto pb-12 sm:pb-20">
        {/* 필터 및 정렬 바 */}
        <div className="mb-8 sm:mb-12 flex flex-wrap gap-2 sm:gap-4 justify-center">
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-brand-gold to-brand-accent text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
            전체
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm text-gray-600 rounded-full font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
            스탠다드
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm text-gray-600 rounded-full font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
            디럭스
          </button>
          <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm text-gray-600 rounded-full font-semibold border border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base">
            스위트
          </button>
        </div>

        {/* 프리미엄 갤러리 그리드 */}
        <ResponsiveGrid 
          mobileCols={1} 
          tabletCols={2} 
          desktopCols={3} 
          gap="gap-6 sm:gap-8"
          className="mb-8 sm:mb-16"
        >
          {rooms.map((room, index) => (
            <ScaleIn key={room.id} delay={index * 0.1}>
              <div className="group relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 transform hover:-translate-y-2">
                {/* 이미지 컨테이너 */}
                <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                  <img 
                    src={room.img} 
                    alt={room.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* 가격 뱃지 */}
                  <div className="absolute top-4 right-4 bg-brand-gold text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                    ₩{(room.price / 1000).toFixed(0)}K
                  </div>

                  {/* 등급 뱃지 */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800 flex items-center gap-1">
                    ⭐ Premium
                  </div>
                </div>

                {/* 콘텐츠 영역 */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">{room.name}</h3>
                    <div className="flex items-center text-brand-gold">
                      {'★'.repeat(5)}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{room.desc}</p>

                  {/* 편의시설 아이콘 */}
                  <div className="flex gap-3 mb-6">
                    <div className="w-8 h-8 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-brand-primary text-sm">🛏️</span>
                    </div>
                    <div className="w-8 h-8 bg-brand-secondary/10 rounded-lg flex items-center justify-center">
                      <span className="text-brand-secondary text-sm">🛁</span>
                    </div>
                    <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                      <span className="text-brand-accent text-sm">📺</span>
                    </div>
                    <div className="w-8 h-8 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                      <span className="text-brand-gold text-sm">🌅</span>
                    </div>
                  </div>

                  {/* 가격 및 예약 버튼 */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="order-2 sm:order-1">
                      <span className="block text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                        ₩{room.price.toLocaleString()}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">/ 1박</span>
                    </div>
                    
                    <Link 
                      to={`/rooms/${room.id}`}
                      className="group/btn order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-xl sm:rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                    >
                      <span className="flex items-center gap-2">
                        상세보기
                        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform duration-300">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </ResponsiveGrid>

        {/* 더보기/페이지네이션 */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-white border-2 border-brand-primary text-brand-primary font-bold rounded-2xl hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
            더 많은 객실 보기
          </button>
        </div>
      </div>
    </Layout>
  );
}
