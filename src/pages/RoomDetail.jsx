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
      <div className="p-8 max-w-2xl mx-auto">
        <img src={room.img} alt={room.name} className="rounded mb-6 w-full h-64 object-cover" />
        <h2 className="text-2xl font-bold mb-2">{room.name}</h2>
        <div className="text-gray-600 mb-2">{room.desc}</div>
        <div className="text-blue-600 font-semibold mb-4">₩{room.price.toLocaleString()}</div>
        <div className="mb-6 text-gray-700">{room.detail}</div>
        <Link to="/booking" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          예약하기
        </Link>
      </div>
    </Layout>
  );
}
