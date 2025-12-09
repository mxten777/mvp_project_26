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
  {
    id: 4,
    name: "패밀리룸",
    desc: "4인 가족, 거실 분리형",
    price: 220000,
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    detail: "가족 단위 투숙에 최적화된 넓은 공간. 거실과 침실 분리, 키즈 어메니티 제공.",
  },
  {
    id: 5,
    name: "펜트하우스",
    desc: "프라이빗 테라스, 최고급 시설",
    price: 500000,
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80",
    detail: "최고급 펜트하우스 스위트. 프라이빗 테라스, 자쿠지, 개인 집사 서비스 포함.",
  },
  {
    id: 6,
    name: "온돌룸",
    desc: "한국식 온돌, 가족/어르신 추천",
    price: 150000,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    detail: "전통 한국식 온돌 바닥난방. 가족 단위나 어르신 투숙객에게 인기.",
  },
];

export default function RoomDetail() {
  const { roomId } = useParams();
  const room = rooms.find((r) => String(r.id) === roomId);
  
  // 추가 이미지 갤러리 (실제로는 API에서 가져올 데이터)
  const roomGallery = [
    room?.img,
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1584132905271-512c958c6895?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80",
  ];

  if (!room) return (
    <Layout>
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🏨</div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">객실을 찾을 수 없습니다</h2>
          <p className="text-gray-600 mb-6">요청하신 객실이 존재하지 않거나 삭제되었습니다.</p>
          <Link to="/rooms" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-secondary transition-colors">
            ← 객실 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </Layout>
  );

  return (
    <Layout>
      {/* 프리미엄 이미지 갤러리 헤더 */}
      <div className="relative h-[70vh] overflow-hidden">
        <img 
          src={room.img} 
          alt={room.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* 갤러리 네비게이션 */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {roomGallery.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
            />
          ))}
        </div>

        {/* 객실 기본 정보 오버레이 */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-3 py-1 bg-brand-gold rounded-full text-sm font-semibold">
                Premium Room
              </div>
              <div className="flex items-center text-brand-gold">
                {'★'.repeat(5)}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-4">
              {room.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-4">
              {room.desc}
            </p>
            <div className="text-3xl font-bold">
              ₩{room.price.toLocaleString()} <span className="text-lg font-normal text-white/75">/ 박</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-12">
            {/* 객실 설명 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">🏨</span>
                </div>
                객실 소개
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {room.detail}
              </p>
            </div>

            {/* 편의시설 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary to-brand-accent rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">✨</span>
                </div>
                프리미엄 편의시설
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { icon: "🛏️", title: "킹사이즈 침대", desc: "프리미엄 메모리폼 매트리스" },
                  { icon: "🛁", title: "스파 욕조", desc: "대형 자쿠지와 레인샤워" },
                  { icon: "📺", title: "65인치 스마트 TV", desc: "넷플릭스, 유튜브 지원" },
                  { icon: "🌅", title: "바이칼 호수 전망", desc: "탁 트인 파노라마 뷰" },
                  { icon: "🍾", title: "미니바", desc: "프리미엄 음료 및 스낵" },
                  { icon: "🌡️", title: "개별 온도조절", desc: "스마트 에어컨 시스템" },
                  { icon: "🔒", title: "디지털 금고", desc: "노트북 수납 가능" },
                  { icon: "☕", title: "커피머신", desc: "네스프레소 캡슐머신" },
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-md">
                      {amenity.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-white">{amenity.title}</h3>
                      <p className="text-sm text-gray-600">{amenity.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 고객 후기 */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-gold rounded-xl flex items-center justify-center">
                  <span className="text-white text-xl">💬</span>
                </div>
                투숙객 후기
              </h2>
              
              <div className="space-y-6">
                {[
                  { name: "김민수", rating: 5, comment: "정말 환상적인 경험이었습니다. 바이칼 호수 전망이 숨이 멎을 정도로 아름다웠어요. 직원들도 너무 친절하고 시설도 최고급이었습니다.", date: "2024.10.15" },
                  { name: "이영희", rating: 5, comment: "가족여행으로 갔는데 모든 가족구성원이 만족했습니다. 특히 아이들이 스파 욕조를 너무 좋아했어요. 다음에도 꼭 재방문하겠습니다.", date: "2024.10.10" },
                  { name: "박철수", rating: 5, comment: "허니문 여행지로 완벽했습니다. 로맨틱한 분위기와 프라이빗한 공간, 그리고 최고의 서비스까지. 평생 잊지 못할 추억을 만들었습니다.", date: "2024.09.28" }
                ].map((review, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold">
                          {review.name[0]}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 dark:text-white">{review.name}</h4>
                          <div className="flex items-center text-brand-gold">
                            {'★'.repeat(review.rating)}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 예약 사이드바 */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                  ₩{room.price.toLocaleString()}
                </div>
                <div className="text-gray-600">1박 기준</div>
              </div>

              {/* 예약 폼 */}
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">체크인</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">체크아웃</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">투숙객</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent">
                    <option>성인 2명</option>
                    <option>성인 1명</option>
                    <option>성인 2명, 아동 1명</option>
                    <option>성인 2명, 아동 2명</option>
                  </select>
                </div>
              </div>

              <Link 
                to="/booking" 
                className="group relative w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-gold to-brand-accent text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden mb-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center gap-2">
                  ✨ 지금 예약하기
                </span>
              </Link>

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">🔒 안전한 결제 시스템</p>
                <p className="text-sm text-gray-600">📞 24시간 고객지원</p>
              </div>

              {/* 혜택 정보 */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  무료 취소 (체크인 24시간 전)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  조식 포함 (2인 기준)
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  무료 Wi-Fi & 주차
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                  24시간 룸서비스
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}