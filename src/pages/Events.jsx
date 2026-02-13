import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ShareButtons from '../components/ShareButtons';
import { useTheme } from '../contexts/ThemeContext';

const events = [
  {
    id: 1,
    title: '여름 패키지 할인',
    desc: '7~8월 투숙 시 최대 30% 할인 + 조식 무료 제공',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    period: '2025.07.01 ~ 08.31',
    badge: '인기',
  },
  {
    id: 2,
    title: '키즈 페스티벌',
    desc: '어린이 고객 대상 키즈 프로그램 무료, 선물 증정',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    period: '2025.08.01 ~ 08.31',
    badge: '가족',
  },
  {
    id: 3,
    title: '연박 프로모션',
    desc: '2박 이상 예약 시 추가 할인 및 룸 업그레이드 제공',
    img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80',
    period: '상시진행',
    badge: '상시',
  },
];

export default function Events() {
  const { isDark } = useTheme();

  return (
    <Layout>
      <div className="py-12 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className={`text-3xl font-display font-black tracking-tight mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            이벤트 & 프로모션
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            바이칼 리조트만의 특별한 혜택을 만나보세요
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <article
              key={e.id}
              className={`card-premium flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'bg-gray-800/80' : 'bg-white'
              }`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={e.img}
                  alt={e.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {e.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full bg-brand-500/90 text-white backdrop-blur-sm">
                    {e.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-5">
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {e.title}
                </h3>
                <p className={`text-sm mb-3 leading-relaxed ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {e.desc}
                </p>
                <p className={`text-xs mb-4 ${
                  isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  기간: {e.period}
                </p>

                {/* CTA */}
                <Link
                  to="/booking"
                  className="btn-premium block text-center text-sm font-semibold py-2.5 rounded-lg mt-auto"
                >
                  이벤트로 예약하기
                </Link>

                {/* Share */}
                <ShareButtons url={typeof window !== 'undefined' ? window.location.href : ''} />
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className={`mt-12 text-center text-sm leading-relaxed ${
          isDark ? 'text-gray-500' : 'text-gray-500'
        }`}>
          모든 이벤트는 바이칼 리조트 고객을 위한 특별 혜택입니다.<br />
          실시간 예약 시 자동 적용되며, 자세한 내용은 고객센터로 문의해 주세요.
        </p>
      </div>
    </Layout>
  );
}
