import MainNav from "../components/MainNav";
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
      <MainNav />
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">편의시설</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((f) => (
            <div key={f.name} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
              <div className="text-4xl mb-3">{f.icon}</div>
              <div className="font-bold text-lg mb-1">{f.name}</div>
              <div className="text-gray-600 text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
