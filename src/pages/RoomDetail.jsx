import MainNav from "../components/MainNav";
import Layout from "../components/Layout";
import { useParams, Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "스탠다드룸",
    desc: "기본형 객실, 2인 기준",
    price: 120000,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    detail: "아늑한 분위기의 스탠다드룸. 침대 1, 욕실 1, TV, Wi-Fi, 에어컨 등 기본 편의시설 제공.",
  },
  {
    id: 2,
    name: "디럭스룸",
    desc: "넓은 공간, 3~4인 가족 추천",
    price: 180000,
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80",
    detail: "여유로운 공간과 추가 침구, 가족 단위 투숙에 적합. 욕조, 미니바, 발코니 포함.",
  },
  {
    id: 3,
    name: "스위트룸",
    desc: "최고급 스위트, 오션뷰",
    price: 300000,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    detail: "오션뷰, 거실/침실 분리, 고급 어메니티, 프라이빗 테라스, 룸서비스 제공.",
  },
];

export default function RoomDetail() {
  const { roomId } = useParams();
  const room = rooms.find((r) => String(r.id) === roomId);
  if (!room) return (
    <Layout>
      <MainNav />
      <div className="p-8 text-center text-gray-500">존재하지 않는 객실입니다.</div>
    </Layout>
  );
  return (
    <Layout>
      <MainNav />
      <div className="py-12 px-4 max-w-2xl mx-auto bg-white rounded-2xl shadow-brand border border-brand-light/30 animate-fade-in">
        <img src={room.img} alt={room.name} className="rounded-2xl mb-8 w-full h-64 object-cover shadow-brand" />
        <h2 className="text-3xl font-extrabold text-brand mb-2 font-sans drop-shadow-lg flex items-center gap-2">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          {room.name}
        </h2>
        <div className="text-lg text-gray-600 mb-2 font-sans">{room.desc}</div>
        <div className="text-brand-dark font-bold mb-4 text-xl">₩{room.price.toLocaleString()}</div>
        <div className="mb-6 text-gray-700 text-base font-sans">{room.detail}</div>
        <div className="mb-8">
          <h3 className="text-lg font-bold text-brand mb-2">주요 편의시설</h3>
          <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-brand rounded-full" />무료 Wi-Fi</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-brand rounded-full" />에어컨/난방</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-brand rounded-full" />TV/케이블</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-brand rounded-full" />욕실/어메니티</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-brand rounded-full" />룸서비스</li>
            <li className="flex items-center gap-2"><span className="inline-block w-2 h-2 bg-brand rounded-full" />발코니/테라스</li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-bold text-brand mb-2">실제 이용 후기</h3>
          <div className="bg-brand-light/10 rounded p-3 text-gray-700 text-sm mb-2">“정말 쾌적하고 전망이 최고였어요!” <span className="text-brand-dark">- 김OO</span></div>
          <div className="bg-brand-light/10 rounded p-3 text-gray-700 text-sm">“가족 모두 만족한 여행, 다음에도 꼭 올게요.” <span className="text-brand-dark">- 이OO</span></div>
        </div>
        <Link to="/booking" className="block w-full text-center bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 rounded-xl shadow-brand transition text-lg">
          지금 예약하기
        </Link>
      </div>
    </Layout>
  );
}
