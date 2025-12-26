import Layout from "../components/Layout";

const facilities = [
  { icon: "🏊", name: "실내/야외 수영장", desc: "사계절 이용 가능한 대형 수영장" },
  { icon: "🧖", name: "사우나/스파", desc: "고급 스파, 찜질방, 마사지 시설" },
  { icon: "🍽️", name: "레스토랑/카페", desc: "뷔페, 한식, 양식, 카페 등 다양한 식음료" },
  { icon: "🏸", name: "실내외 스포츠", desc: "피트니스, 테니스, 배드민턴, 탁구장" },
  { icon: "👶", name: "키즈존/놀이방", desc: "어린이 전용 놀이공간, 키즈 프로그램" },
  { icon: "🚗", name: "무료주차/셔틀", desc: "넓은 주차장, 공항/역 셔틀버스 운영" },
];

export default function Facilities() {
  return (
    <Layout>
      <div data-has-hero="true" className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 편의시설</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((f) => (
            <div key={f.name} className="bg-white rounded-2xl shadow-brand hover:shadow-xl transition flex flex-col items-center text-center border border-brand-light/30 animate-fade-in">
              <div className="text-5xl mb-4">{f.icon}</div>
              <div className="font-extrabold text-lg text-brand mb-2 font-sans">{f.name}</div>
              <div className="text-gray-700 text-base mb-2 font-sans">{f.desc}</div>
              <div className="text-xs text-brand-dark/70 mb-2">최신 시설, 청결 관리, 안전 인증 완료</div>
              <a href="/booking" className="mt-3 inline-block bg-brand hover:bg-brand-dark text-white font-bold px-4 py-2 rounded-lg shadow-brand text-sm transition">이 시설로 예약하기</a>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-600 text-sm animate-fade-in">
          모든 시설은 바이칼 리조트의 엄격한 품질 관리와 안전 기준을 통과한 최신 설비입니다.<br />고객의 편안함과 만족을 위해 최선을 다합니다.
        </div>
      </div>
    </Layout>
  );
}
