import MainNav from "../components/MainNav";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <MainNav />
      <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-purple-100 via-white to-purple-200 rounded-xl shadow-lg p-6 md:p-12 my-8 overflow-hidden">
        <div className="flex-1 z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-purple-800 mb-4 drop-shadow">Resort BAIKAL에 오신 것을 환영합니다</h2>
          <p className="text-lg text-gray-700 mb-6">세계에서 가장 깊고 맑은 바이칼 호수의 품에 안긴, 자연과 휴식이 공존하는 프리미엄 리조트.<br className="hidden md:block"/> 가족, 연인, 친구 모두를 위한 최고의 힐링 공간을 경험하세요.</p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-purple-700 font-medium"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> 천혜의 자연환경과 바이칼 호수 전망</li>
            <li className="flex items-center gap-2 text-purple-700 font-medium"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> 프리미엄 객실 & 다양한 부대시설</li>
            <li className="flex items-center gap-2 text-purple-700 font-medium"><svg width="18" height="18" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> 사계절 액티비티 & 맞춤형 이벤트</li>
          </ul>
          <a href="/booking" className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-lg shadow transition">지금 예약하기</a>
        </div>
        <div className="flex-1 flex items-center justify-center z-10">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="바이칼 리조트 전경" className="rounded-xl shadow-lg w-full max-w-xs md:max-w-sm border-4 border-white" />
        </div>
        <div className="absolute right-0 bottom-0 w-40 h-40 bg-purple-200 rounded-full opacity-30 blur-2xl z-0" />
      </section>
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 2C7 2 2 7 2 12c0 5 5 10 10 10s10-5 10-10c0-5-5-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm0-14a6 6 0 100 12 6 6 0 000-12z" fill="#a78bfa"/></svg>
          <h3 className="text-lg font-bold text-purple-700 mt-2 mb-1">프리미엄 객실</h3>
          <p className="text-gray-600 text-sm">모던하고 쾌적한 객실, 스위트, 패밀리룸 등 다양한 타입의 객실을 제공합니다.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M17 10.5V7a5 5 0 00-10 0v3.5M5 10.5V17a2 2 0 002 2h10a2 2 0 002-2v-6.5" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 15v2" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <h3 className="text-lg font-bold text-purple-700 mt-2 mb-1">다양한 부대시설</h3>
          <p className="text-gray-600 text-sm">실내외 수영장, 스파, 레스토랑, 키즈존, 피트니스 등 다양한 시설을 즐기세요.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="10" stroke="#a78bfa" strokeWidth="2"/></svg>
          <h3 className="text-lg font-bold text-purple-700 mt-2 mb-1">사계절 액티비티</h3>
          <p className="text-gray-600 text-sm">겨울 스키, 여름 카약, 하이킹, 요가 등 계절별 다양한 액티비티를 제공합니다.</p>
        </div>
      </section>
    </Layout>
  );
}
