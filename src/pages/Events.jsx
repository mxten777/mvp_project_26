import Layout from "../components/Layout";
import ShareButtons from "../components/ShareButtons";

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
      <div className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">이벤트 & 프로모션</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((e) => (
            <div key={e.id} className="bg-white rounded-2xl shadow-brand hover:shadow-xl transition flex flex-col overflow-hidden border border-brand-light/30 animate-fade-in">
              <img src={e.img} alt={e.title} className="w-full h-36 object-cover rounded-t-2xl" />
              <div className="flex-1 flex flex-col p-5">
                <div className="font-extrabold text-lg text-brand mb-2 font-sans">{e.title}</div>
                <div className="text-gray-700 mb-3 text-base font-sans">{e.desc}</div>
                <div className="text-xs text-brand-dark/70 mb-2">기간: {e.period}</div>
                <a href="/booking" className="mt-auto inline-block bg-brand hover:bg-brand-dark text-white font-bold px-4 py-2 rounded-lg shadow-brand text-sm text-center transition">이벤트로 예약하기</a>
                <ShareButtons url={window.location.href} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-gray-600 text-sm animate-fade-in">
          모든 이벤트는 바이칼 리조트 고객을 위한 특별 혜택입니다.<br />실시간 예약 시 자동 적용되며, 자세한 내용은 고객센터로 문의해 주세요.
        </div>
      </div>
    </Layout>
  );
}
