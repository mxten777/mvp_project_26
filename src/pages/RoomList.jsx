import MainNav from "../components/MainNav";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

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
      <MainNav />
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">객실 리스트</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow hover:shadow-lg transition flex flex-col overflow-hidden">
              <img src={room.img} alt={room.name} className="w-full h-40 object-cover" />
              <div className="flex-1 flex flex-col p-4">
                <div className="font-bold text-lg mb-1">{room.name}</div>
                <div className="text-gray-600 mb-2 text-sm">{room.desc}</div>
                <div className="text-blue-600 font-semibold mb-4">₩{room.price.toLocaleString()}</div>
                <Link to={`/rooms/${room.id}`} className="mt-auto text-sm bg-blue-600 text-white px-3 py-2 rounded text-center hover:bg-blue-700 transition">
                  상세보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
