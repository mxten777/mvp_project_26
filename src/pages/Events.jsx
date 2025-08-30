import MainNav from "../components/MainNav";
import Layout from "../components/Layout";

const events = [
  {
    id: 1,
    title: "여름 패키지 할인",
    desc: "7~8월 투숙 시 최대 30% 할인 + 조식 무료 제공",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    period: "2025.07.01 ~ 08.31",
  },
  {
    id: 2,
    title: "키즈 페스티벌",
    desc: "어린이 고객 대상 키즈 프로그램 무료, 선물 증정",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    period: "2025.08.01 ~ 08.31",
  },
  {
    id: 3,
    title: "연박 프로모션",
    desc: "2박 이상 예약 시 추가 할인 및 룸 업그레이드 제공",
    img: "https://images.unsplash.com/photo-1509228468518-c5eeecbff44a?auto=format&fit=crop&w=400&q=80",
    period: "상시진행",
  },
];

export default function Events() {
  return (
    <Layout>
      <MainNav />
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">이벤트 & 프로모션</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((e) => (
            <div key={e.id} className="bg-white rounded-lg shadow flex flex-col overflow-hidden">
              <img src={e.img} alt={e.title} className="w-full h-32 object-cover" />
              <div className="flex-1 flex flex-col p-4">
                <div className="font-bold text-lg mb-1">{e.title}</div>
                <div className="text-gray-600 mb-2 text-sm">{e.desc}</div>
                <div className="text-xs text-gray-400 mt-auto">{e.period}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
