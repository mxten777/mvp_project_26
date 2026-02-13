import Layout from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

/* ── SVG Icons ── */
const BedIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>;
const BathIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/><path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"/></svg>;
const TvIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>;
const SunriseIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="M16 18a4 4 0 0 0-8 0"/></svg>;
const WineIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5z"/></svg>;
const ThermIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z"/></svg>;
const LockIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const CoffeeIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>;
const BuildingIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>;
const SparkleIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
const ChatIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const ShieldIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const PhoneIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const StarIcon = ({ filled, ...p }) => <svg {...p} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

const AMENITIES = [
  { Icon: BedIcon, title: '킹사이즈 침대', desc: '프리미엄 메모리폼 매트리스' },
  { Icon: BathIcon, title: '스파 욕조', desc: '대형 자쿠지와 레인샤워' },
  { Icon: TvIcon, title: '65인치 스마트 TV', desc: '넷플릭스, 유튜브 지원' },
  { Icon: SunriseIcon, title: '바이칼 호수 전망', desc: '탁 트인 파노라마 뷰' },
  { Icon: WineIcon, title: '미니바', desc: '프리미엄 음료 및 스낵' },
  { Icon: ThermIcon, title: '개별 온도조절', desc: '스마트 에어컨 시스템' },
  { Icon: LockIcon, title: '디지털 금고', desc: '노트북 수납 가능' },
  { Icon: CoffeeIcon, title: '커피머신', desc: '네스프레소 캡슐머신' },
];

const REVIEWS = [
  { name: '김민수', rating: 5, comment: '정말 환상적인 경험이었습니다. 바이칼 호수 전망이 숨이 멎을 정도로 아름다웠어요. 직원들도 너무 친절하고 시설도 최고급이었습니다.', date: '2024.10.15' },
  { name: '이영희', rating: 5, comment: '가족여행으로 갔는데 모든 가족구성원이 만족했습니다. 특히 아이들이 스파 욕조를 너무 좋아했어요. 다음에도 꼭 재방문하겠습니다.', date: '2024.10.10' },
  { name: '박철수', rating: 5, comment: '허니문 여행지로 완벽했습니다. 로맨틱한 분위기와 프라이빗한 공간, 그리고 최고의 서비스까지. 평생 잊지 못할 추억을 만들었습니다.', date: '2024.09.28' },
];

const BENEFITS = [
  { color: 'bg-emerald-400', text: '무료 취소 (체크인 24시간 전)' },
  { color: 'bg-sky-400', text: '조식 포함 (2인 기준)' },
  { color: 'bg-violet-400', text: '무료 Wi-Fi & 주차' },
  { color: 'bg-amber-400', text: '24시간 룸서비스' },
];

const rooms = [
  { id: 1, name: '스탠다드룸', desc: '기본형 객실, 2인 기준', price: 120000, img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', detail: '아늑한 분위기의 스탠다드룸. 침대 1, 욕실 1, TV, Wi-Fi, 에어컨 등 기본 편의시설 제공.' },
  { id: 2, name: '디럭스룸', desc: '넓은 공간, 3~4인 가족 추천', price: 180000, img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80', detail: '여유로운 공간과 추가 침구, 가족 단위 투숙에 적합. 욕조, 미니바, 발코니 포함.' },
  { id: 3, name: '스위트룸', desc: '최고급 스위트, 오션뷰', price: 300000, img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', detail: '오션뷰, 거실/침실 분리, 고급 어메니티, 프라이빗 테라스, 룸서비스 제공.' },
  { id: 4, name: '패밀리룸', desc: '4인 가족, 거실 분리형', price: 220000, img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80', detail: '가족 단위 투숙에 최적화된 넓은 공간. 거실과 침실 분리, 키즈 어메니티 제공.' },
  { id: 5, name: '펜트하우스', desc: '프라이빗 테라스, 최고급 시설', price: 500000, img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80', detail: '최고급 펜트하우스 스위트. 프라이빗 테라스, 자쿠지, 개인 집사 서비스 포함.' },
  { id: 6, name: '온돌룸', desc: '한국식 온돌, 가족/어르신 추천', price: 150000, img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80', detail: '전통 한국식 온돌 바닥난방. 가족 단위나 어르신 투숙객에게 인기.' },
];

/* ── Helper: input classes ── */
const inputCls = (isDark) =>
  `w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${
    isDark
      ? 'bg-gray-700/50 border-gray-600 text-white focus:border-brand-400'
      : 'bg-white border-gray-200 text-gray-900 focus:border-brand-500'
  }`;

export default function RoomDetail() {
  const { roomId } = useParams();
  const { isDark } = useTheme();
  const room = rooms.find((r) => String(r.id) === roomId);

  const roomGallery = [
    room?.img,
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1584132905271-512c958c6895?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80',
  ];

  /* ── Not Found ── */
  if (!room) return (
    <Layout>
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <BuildingIcon className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
          <h2 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>객실을 찾을 수 없습니다</h2>
          <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>요청하신 객실이 존재하지 않거나 삭제되었습니다.</p>
          <Link to="/rooms" className="btn-premium inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
            &larr; 객실 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </Layout>
  );

  return (
    <Layout>
      {/* ── Hero Image ── */}
      <div className="relative h-[70vh] overflow-hidden">
        <img src={room.img} alt={room.name} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Gallery dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {roomGallery.map((_, i) => (
            <button key={i} className={`w-3 h-3 rounded-full transition-all ${i === 0 ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`} aria-label={`Image ${i + 1}`} />
          ))}
        </div>

        {/* Overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-gold rounded-full text-sm font-semibold text-gray-900">Premium Room</span>
              <div className="flex items-center text-brand-gold gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => <StarIcon key={i} className="w-4 h-4" filled />)}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-4">{room.name}</h1>
            <p className="text-xl md:text-2xl text-white/90 font-light mb-4">{room.desc}</p>
            <div className="text-3xl font-bold">
              ₩{room.price.toLocaleString()} <span className="text-lg font-normal text-white/75">/ 박</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-12">

            {/* Room intro */}
            <div className={`card-premium p-8 ${isDark ? 'bg-gray-800/80' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center">
                  <BuildingIcon className="w-5 h-5 text-white" />
                </div>
                객실 소개
              </h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                {room.detail}
              </p>
            </div>

            {/* Amenities */}
            <div className={`card-premium p-8 ${isDark ? 'bg-gray-800/80' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <SparkleIcon className="w-5 h-5 text-white" />
                </div>
                프리미엄 편의시설
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {AMENITIES.map(({ Icon, title, desc }, i) => (
                  <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl transition-colors ${
                    isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-50 hover:bg-gray-100'
                  }`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isDark ? 'bg-gray-700' : 'bg-white shadow-sm'
                    }`}>
                      <Icon className={`w-5 h-5 ${isDark ? 'text-brand-400' : 'text-brand-600'}`} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                      <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className={`card-premium p-8 ${isDark ? 'bg-gray-800/80' : 'bg-white'}`}>
              <h2 className={`text-2xl font-bold mb-8 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                  <ChatIcon className="w-5 h-5 text-white" />
                </div>
                투숙객 후기
              </h2>
              <div className="space-y-5">
                {REVIEWS.map((review, i) => (
                  <div key={i} className={`p-5 rounded-2xl border ${
                    isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-100'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {review.name[0]}
                        </div>
                        <div>
                          <h4 className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>{review.name}</h4>
                          <div className="flex items-center text-brand-gold gap-0.5">
                            {Array.from({ length: review.rating }).map((_, j) => <StarIcon key={j} className="w-3.5 h-3.5" filled />)}
                          </div>
                        </div>
                      </div>
                      <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{review.date}</span>
                    </div>
                    <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className={`sticky top-8 card-premium p-8 ${isDark ? 'bg-gray-800/80' : 'bg-white'}`}>
              <div className="text-center mb-8">
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ₩{room.price.toLocaleString()}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>1박 기준</div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>체크인</label>
                  <input type="date" className={inputCls(isDark)} />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>체크아웃</label>
                  <input type="date" className={inputCls(isDark)} />
                </div>
                <div>
                  <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>투숙객</label>
                  <select className={inputCls(isDark)}>
                    <option>성인 2명</option>
                    <option>성인 1명</option>
                    <option>성인 2명, 아동 1명</option>
                    <option>성인 2명, 아동 2명</option>
                  </select>
                </div>
              </div>

              <Link
                to="/booking"
                className="btn-premium w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base mb-6"
              >
                <SparkleIcon className="w-5 h-5" /> 지금 예약하기
              </Link>

              <div className={`flex items-center justify-center gap-6 text-xs mb-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="flex items-center gap-1"><ShieldIcon className="w-4 h-4" /> 안전 결제</span>
                <span className="flex items-center gap-1"><PhoneIcon className="w-4 h-4" /> 24시간 지원</span>
              </div>

              <div className={`space-y-3 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-100'}`}>
                {BENEFITS.map(({ color, text }) => (
                  <div key={text} className={`flex items-center gap-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    <span className={`w-2 h-2 ${color} rounded-full flex-shrink-0`} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}