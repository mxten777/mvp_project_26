
import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
      {/* 메인 히어로 섹션 */}
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-hero rounded-2xl shadow-brand mx-auto max-w-4xl px-6 py-16 animate-fade-in mb-12">
        <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-brand mb-6 animate-spin-slow mx-auto">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-brand mb-6 drop-shadow-lg tracking-tight">Resort BAIKAL</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-sans text-center font-medium">최고의 경쟁력과 고급스러움, 세련된 디자인을 담은 프리미엄 리조트 예약 시스템</p>
        <a href="/booking" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl shadow-brand transition text-lg">지금 예약하기</a>
      </div>

      {/* 메인 기능 카드들 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* 객실 카드 */}
        <a href="/rooms" className="group block bg-white rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="bg-gradient-to-br from-brand-light to-brand p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2V7zm16 0v1H5V7h14zm0 0V6a1 1 0 00-1-1H6a1 1 0 00-1 1v1" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">객실 안내</h3>
            <p className="text-brand-light">다양한 타입의 프리미엄 객실을 확인하세요</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-sm">스탠다드룸부터 스위트룸까지 다양한 옵션</p>
          </div>
        </a>

        {/* 시설 카드 */}
        <a href="/facilities" className="group block bg-white rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="bg-gradient-to-br from-brand-light to-brand p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">시설 안내</h3>
            <p className="text-brand-light">최고급 편의시설과 부대시설을 이용하세요</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-sm">스파, 피트니스, 레스토랑, 수영장</p>
          </div>
        </a>

        {/* 이벤트 카드 */}
        <a href="/events" className="group block bg-white rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 overflow-hidden">
          <div className="bg-gradient-to-br from-brand-light to-brand p-6 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-heading font-bold mb-2">이벤트</h3>
            <p className="text-brand-light">특별한 이벤트와 프로모션을 확인하세요</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 text-sm">계절별 이벤트, 패키지 상품</p>
          </div>
        </a>
      </div>

      {/* 관리자 & 고객 서비스 섹션 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* 관리자 대시보드 */}
        <a href="/admin" className="group block bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 overflow-hidden text-white">
          <div className="p-8">
            <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2V7a2 2 0 012-2h2a2 2 0 002 2v2a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 00-2 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-3">관리자 대시보드</h3>
            <p className="text-gray-300 mb-4">실시간 예약 현황, 매출 통계, 고객 관리</p>
            <div className="text-sm text-gray-400">
              • 예약 관리 • 객실 관리 • 사용자 관리 • 쿠폰 관리
            </div>
          </div>
        </a>

        {/* 고객 서비스 */}
        <a href="/contact" className="group block bg-gradient-to-br from-brand to-brand-dark rounded-2xl shadow-brand hover:shadow-lg transition-all duration-300 overflow-hidden text-white">
          <div className="p-8">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-heading font-bold mb-3">고객 서비스</h3>
            <p className="text-brand-light mb-4">문의사항, 피드백, 고객지원</p>
            <div className="text-sm text-brand-light">
              • 24시간 고객센터 • 온라인 문의 • 피드백
            </div>
          </div>
        </a>
      </div>

      {/* 로그인/회원가입 섹션 */}
      <div className="bg-white rounded-2xl shadow-brand p-8 text-center">
        <h3 className="text-2xl font-heading font-bold text-brand mb-4">회원 서비스</h3>
        <p className="text-gray-600 mb-6">회원가입하고 더 많은 혜택을 받으세요</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/login" className="bg-brand hover:bg-brand-dark text-white px-6 py-3 rounded-xl font-bold transition">로그인</a>
          <a href="/signup" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-bold transition">회원가입</a>
        </div>
      </div>
    </Layout>
  );
}
