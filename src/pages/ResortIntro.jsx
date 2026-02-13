import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useTheme } from '../contexts/ThemeContext';

const CheckIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className="flex-shrink-0">
    <circle cx="12" cy="12" r="10" className="fill-brand-500" />
    <path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HIGHLIGHTS = [
  '천혜의 자연환경과 바이칼 호수 전망',
  '프리미엄 객실 & 스위트, 다양한 부대시설',
  '사계절 액티비티 & 맞춤형 이벤트',
  '가족/연인/비즈니스 모두를 위한 맞춤 서비스',
];

const INFO_CARDS = [
  {
    icon: (isDark) => <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" className={isDark ? 'stroke-brand-400' : 'stroke-brand-500'} strokeWidth="2" /><circle cx="12" cy="12" r="6" className={isDark ? 'stroke-brand-400' : 'stroke-brand-500'} strokeWidth="2" /></svg>,
    title: '프리미엄 객실',
    desc: '모던하고 쾌적한 객실, 스위트, 패밀리룸 등 다양한 타입의 객실을 제공합니다.',
  },
  {
    icon: (isDark) => <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M17 10.5V7a5 5 0 00-10 0v3.5M5 10.5V17a2 2 0 002 2h10a2 2 0 002-2v-6.5" className={isDark ? 'stroke-brand-400' : 'stroke-brand-500'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 15v2" className={isDark ? 'stroke-brand-400' : 'stroke-brand-500'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    title: '다양한 부대시설',
    desc: '실내외 수영장, 스파, 레스토랑, 키즈존, 피트니스 등 다양한 시설을 즐기세요.',
  },
  {
    icon: (isDark) => <svg width="36" height="36" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" className={isDark ? 'stroke-brand-400' : 'stroke-brand-500'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="10" className={isDark ? 'stroke-brand-400' : 'stroke-brand-500'} strokeWidth="2" /></svg>,
    title: '사계절 액티비티',
    desc: '겨울 스키, 여름 카약, 하이킹, 요가 등 계절별 다양한 액티비티를 제공합니다.',
  },
];

export default function ResortIntro() {
  const { isDark } = useTheme();

  return (
    <Layout>
      {/* Hero */}
      <section className={`relative w-full min-h-[320px] flex flex-col md:flex-row items-center justify-between gap-8 rounded-xl shadow-lg p-6 md:p-12 mb-8 overflow-hidden ${
        isDark
          ? 'bg-gradient-to-r from-brand-900/60 via-gray-800 to-brand-900/60'
          : 'bg-gradient-to-r from-brand-50 via-white to-brand-100'
      }`}>
        <div className="flex-1 z-10">
          <h2 className={`text-3xl md:text-4xl font-display font-black mb-4 ${
            isDark ? 'text-white' : 'text-brand-800'
          }`}>Resort BAIKAL</h2>
          <p className={`text-lg mb-6 leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            세계에서 가장 깊고 맑은 바이칼 호수의 품에 안긴, 자연과 휴식이 공존하는 프리미엄 리조트.
            <br className="hidden md:block" />
            가족, 연인, 친구 모두를 위한 최고의 힐링 공간을 경험하세요.
          </p>
          <ul className="space-y-3 mb-6">
            {HIGHLIGHTS.map((text) => (
              <li key={text} className={`flex items-center gap-2 font-medium ${
                isDark ? 'text-gray-200' : 'text-brand-700'
              }`}>
                <CheckIcon /> {text}
              </li>
            ))}
          </ul>
          <Link to="/booking" className="btn-premium inline-block px-6 py-3 rounded-lg font-semibold">
            지금 예약하기
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center z-10">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="바이칼 리조트 전경"
            className={`rounded-xl shadow-lg w-full max-w-xs md:max-w-sm border-4 ${
              isDark ? 'border-gray-700' : 'border-white'
            }`}
            loading="lazy"
          />
        </div>
        <div className={`absolute right-0 bottom-0 w-40 h-40 rounded-full opacity-20 blur-2xl z-0 ${
          isDark ? 'bg-brand-500' : 'bg-brand-200'
        }`} />
      </section>

      {/* Info Cards */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {INFO_CARDS.map(({ icon, title, desc }) => (
          <div key={title} className={`card-premium p-6 flex flex-col items-center text-center ${
            isDark ? 'bg-gray-800/80' : 'bg-white'
          }`}>
            {icon(isDark)}
            <h3 className={`text-lg font-bold mt-3 mb-1 ${
              isDark ? 'text-white' : 'text-brand-700'
            }`}>{title}</h3>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>{desc}</p>
          </div>
        ))}
      </section>

      {/* Location */}
      <section className="max-w-4xl mx-auto mb-16">
        <div className={`card-premium p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 ${
          isDark ? 'bg-gray-800/80' : 'bg-brand-50'
        }`}>
          <div className="flex-1">
            <h4 className={`text-xl font-bold mb-2 ${
              isDark ? 'text-white' : 'text-brand-800'
            }`}>오시는 길</h4>
            <p className={`text-sm mb-2 leading-relaxed ${
              isDark ? 'text-gray-400' : 'text-gray-700'
            }`}>
              러시아 이르쿠츠크 공항에서 차량 1시간 거리, 바이칼 호수 바로 앞에 위치.<br />
              무료 셔틀버스 및 주차장 완비.
            </p>
            <a href="https://goo.gl/maps/2Qe5k1b1b1b1b1b1A" target="_blank" rel="noopener noreferrer" className={`text-sm hover:underline ${
              isDark ? 'text-brand-400' : 'text-brand-700'
            }`}>구글맵에서 위치 확인</a>
          </div>
          <div className="flex-1 w-full h-48 md:h-40 rounded-lg overflow-hidden shadow">
            <iframe
              title="리조트 위치"
              src="https://www.openstreetmap.org/export/embed.html?bbox=104.2%2C51.5%2C105.2%2C52.5&amp;layer=mapnik"
              className="w-full h-full border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
