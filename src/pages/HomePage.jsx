
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { ScrollReveal, ParallaxElement, ScrollCounter, ScrollText } from '../components/ScrollAnimations';
import { FadeInUp, ScaleIn, HoverScale, HoverFloat } from '../components/PageTransition';

export default function HomePage() {
  return (
    <Layout>
      {/* 프리미엄 히어로 섹션 */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden rounded-3xl mx-auto max-w-6xl mb-16">
        {/* 동적 배경 레이어 */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-gold/20 to-transparent animate-pulse"></div>
        
        {/* 파티클 효과 배경 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-100"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-brand-gold/40 rounded-full animate-bounce delay-300"></div>
          <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-white/50 rounded-full animate-bounce delay-500"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-brand-accent/30 rounded-full animate-bounce delay-700"></div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="relative z-10 text-center px-6 py-20">
          {/* 프리미엄 로고/아이콘 */}
          <FadeInUp delay={0.2}>
            <div className="mb-8 relative">
              <HoverFloat>
                <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl mb-6 mx-auto border border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent"></div>
                  <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="relative z-10">
                    <path d="M12 2L3.09 8.26V16H21V8.26L12 2Z" fill="url(#gradient1)" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M8 12H16M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700"/>
                    <stop offset="100%" stopColor="#FFA500"/>
                  </linearGradient>
                </defs>
                  </svg>
                </div>
              </HoverFloat>
            </div>
          </FadeInUp>

          {/* 프리미엄 타이틀 */}
          <FadeInUp delay={0.4}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-display font-black text-white mb-4 sm:mb-6 relative">
              <ScrollText 
                text="Resort BAIKAL"
                className="bg-gradient-to-r from-white via-brand-gold to-white bg-clip-text text-transparent drop-shadow-2xl"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-brand-accent/20 blur-xl opacity-30 animate-pulse"></div>
            </h1>
          </FadeInUp>

          {/* 프리미엄 서브타이틀 */}
          <FadeInUp delay={0.6}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 font-light max-w-4xl mx-auto leading-relaxed px-4">
              <span className="font-medium text-brand-gold">세계 최고 수준</span>의 럭셔리 리조트 경험을 
              <br className="hidden sm:block"/>
              <span className="font-medium text-brand-gold">프리미엄 예약 시스템</span>으로 만나보세요
            </p>
          </FadeInUp>

          {/* 프리미엄 CTA 버튼 */}
          <FadeInUp delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <HoverScale scale={1.08}>
                <Link 
                  to="/booking" 
                  className="group relative inline-flex items-center justify-center w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-brand-gold to-brand-accent rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden border border-white/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center gap-3">
                    ✨ 지금 예약하기
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
              </HoverScale>
              
              <HoverScale scale={1.05}>
                <Link 
                  to="/rooms" 
                  className="group inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-2xl border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    🏨 객실 둘러보기
                  </span>
                </Link>
              </HoverScale>
            </div>
          </FadeInUp>

          {/* 프리미엄 특징 뱃지 */}
          <FadeInUp delay={1.0}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {[
                { icon: "⭐", text: "5성급 서비스" },
                { icon: "🌊", text: "바이칼 호수 전망" },
                { icon: "🎯", text: "즉시 예약 확정" }
              ].map((badge, index) => (
                <ScaleIn key={index} delay={1.2 + index * 0.1}>
                  <HoverFloat y={-5}>
                    <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                      {badge.icon} {badge.text}
                    </div>
                  </HoverFloat>
                </ScaleIn>
              ))}
            </div>
          </FadeInUp>
        </div>

        {/* 하단 스크롤 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* 메인 기능 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* 객실 카드 */}
        <Link to="/rooms" className="group block bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 relative z-10">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm16 0v1H5V7h14zm0 0V6a1 1 0 00-1-1H6a1 1 0 00-1 1v1" />
              </svg>
            </div>
            <h3 
              className="text-xl font-black mb-2 relative z-10" 
              style={{
                WebkitTextFillColor: '#87CEEB',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight: '900'
              }}
            >
              객실 안내
            </h3>
            <p className="text-gray-100 relative z-10 drop-shadow-xl font-semibold">스탠다드룸부터 스위트룸까지 다양한 옵션</p>
          </div>
          <div className="p-6 bg-gray-50">
            <p className="text-gray-700 font-medium">스탠다드룸부터 스위트룸까지 다양한 옵션</p>
          </div>
        </Link>

        {/* 시설 카드 */}
        <Link to="/facilities" className="group block bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 relative z-10">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-black mb-2 text-white relative z-10 drop-shadow-2xl">시설 안내</h3>
            <p className="text-gray-100 relative z-10 drop-shadow-xl font-semibold">최고급 편의시설과 부대시설을 이용하세요</p>
          </div>
          <div className="p-6 bg-gray-50">
            <p className="text-gray-700 font-medium">스파, 피트니스, 레스토랑, 수영장</p>
          </div>
        </Link>

        {/* 이벤트 카드 */}
        <Link to="/events" className="group block bg-white rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105">
          <div className="bg-gradient-to-br from-brand-accent to-pink-500 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 relative z-10">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-black mb-2 text-white relative z-10 drop-shadow-2xl">이벤트</h3>
            <p className="text-gray-100 relative z-10 drop-shadow-xl font-semibold">특별한 이벤트와 프로모션을 확인하세요</p>
          </div>
          <div className="p-6 bg-gray-50">
            <p className="text-gray-700 font-medium">계절별 이벤트, 패키지 상품</p>
          </div>
        </Link>
      </div>

      {/* 관리자 & 고객 서비스 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 관리자 대시보드 */}
        <Link to="/admin" className="group block bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 hover:shadow-3xl transition-all duration-300 overflow-hidden text-white hover:scale-105 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="p-8 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-accent rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 
              className="text-2xl font-black mb-3 drop-shadow-2xl bg-black/30 backdrop-blur-sm rounded-lg py-2"
              style={{
                WebkitTextFillColor: '#87CEEB',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight: '900',
                textAlign: 'left',
                display: 'block',
                width: 'fit-content',
                marginLeft: '0',
                marginRight: 'auto',
                paddingLeft: '8px',
                paddingRight: '8px'
              }}
            >
              관리자 대시보드
            </h3>
            <p className="text-gray-100 mb-4 leading-relaxed font-semibold drop-shadow-xl">실시간 예약 현황, 매출 통계, 고객 관리</p>
            <div className="text-sm text-gray-300 bg-white/5 rounded-lg p-3 backdrop-blur-sm">
              • 예약 관리 • 객실 관리 • 사용자 관리 • 쿠폰 관리
            </div>
          </div>
        </Link>

        {/* 고객 서비스 */}
        <Link to="/contact" className="group block bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl shadow-2xl border border-brand-accent/30 hover:shadow-3xl transition-all duration-300 overflow-hidden text-white hover:scale-105 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="p-8 relative z-10">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6 shadow-lg">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 
              className="text-2xl font-black mb-3 drop-shadow-2xl bg-black/30 backdrop-blur-sm rounded-lg py-2"
              style={{
                WebkitTextFillColor: '#87CEEB',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                fontWeight: '900',
                textAlign: 'left',
                display: 'block',
                width: 'fit-content',
                marginLeft: '0',
                marginRight: 'auto',
                paddingLeft: '8px',
                paddingRight: '8px'
              }}
            >
              고객 서비스
            </h3>
            <p className="text-gray-100 mb-4 leading-relaxed font-semibold drop-shadow-xl">문의사항, 피드백, 고객지원</p>
            <div className="text-sm text-white/90 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              • 24시간 고객센터 • 온라인 문의 • 피드백
            </div>
          </div>
        </Link>
      </div>

      {/* 로그인/회원가입 섹션 */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent"></div>
        <div className="w-16 h-16 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4">회원 서비스</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">회원가입하고 더 많은 혜택을 받으세요</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/login" className="bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">로그인</Link>
          <Link to="/signup" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-xl font-bold transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:scale-105">회원가입</Link>
        </div>
      </div>
    </Layout>
  );
}
