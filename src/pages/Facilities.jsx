import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { useTheme } from '../contexts/ThemeContext';

/* ── SVG Icon Components ── */
const PoolIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20c.9-.4 1.8-.8 3-.8s2.1.8 3 .8 2.1-.4 3-.8c.9-.4 1.8-.8 3-.8s2.1.4 3 .8 1.8.8 3 .8" /><path d="M2 16c.9-.4 1.8-.8 3-.8s2.1.8 3 .8 2.1-.4 3-.8c.9-.4 1.8-.8 3-.8s2.1.4 3 .8 1.8.8 3 .8" /><circle cx="12" cy="6" r="3" /><path d="M12 9v3" /></svg>;
const SpaIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c-4.97 0-9-2.69-9-6v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5c0 1.93 2.69 3.5 6 3.5s6-1.57 6-3.5v-.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v.5c0 3.31-4.03 6-9 6z" /><path d="M12 2s3 3.5 3 6a3 3 0 0 1-6 0c0-2.5 3-6 3-6z" /></svg>;
const DiningIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg>;
const SportsIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" /><path d="m14.83 14.83 4.24 4.24" /><path d="m9.17 14.83-4.24 4.24" /><circle cx="12" cy="12" r="4" /></svg>;
const KidsIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="4" r="2" /><path d="M12 6v4" /><path d="m8 10 4 4 4-4" /><path d="M8 22v-6l4-2 4 2v6" /></svg>;
const ParkingIcon = (p) => <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 17V7h4a3 3 0 0 1 0 6H9" /></svg>;

const facilities = [
  { Icon: PoolIcon, name: '실내/야외 수영장', desc: '사계절 이용 가능한 대형 수영장', color: 'text-sky-500' },
  { Icon: SpaIcon, name: '사우나/스파', desc: '고급 스파, 찜질방, 마사지 시설', color: 'text-rose-500' },
  { Icon: DiningIcon, name: '레스토랑/카페', desc: '뷔페, 한식, 양식, 카페 등 다양한 식음료', color: 'text-amber-500' },
  { Icon: SportsIcon, name: '실내외 스포츠', desc: '피트니스, 테니스, 배드민턴, 탁구장', color: 'text-emerald-500' },
  { Icon: KidsIcon, name: '키즈존/놀이방', desc: '어린이 전용 놀이공간, 키즈 프로그램', color: 'text-violet-500' },
  { Icon: ParkingIcon, name: '무료주차/셔틀', desc: '넓은 주차장, 공항/역 셔틀버스 운행', color: 'text-gray-500' },
];

export default function Facilities() {
  const { isDark } = useTheme();

  return (
    <Layout>
      <div className="py-12 px-4 max-w-5xl mx-auto">
        <div className="mb-10">
          <h2 className={`text-3xl font-display font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            프리미엄 편의시설
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            세계 수준의 시설에서 완벽한 휴식을 경험하세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map(({ Icon, name, desc, color }) => (
            <div
              key={name}
              className={`card-premium flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'bg-gray-800/80' : 'bg-white'
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                isDark ? 'bg-white/5' : 'bg-gray-50'
              }`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{name}</h3>
              <p className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{desc}</p>
              <p className={`text-xs mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>최신 시설 · 청결 관리 · 안전 인증</p>
              <Link
                to="/booking"
                className="btn-premium block text-center text-sm font-semibold py-2.5 rounded-lg mt-auto"
              >
                이 시설로 예약하기
              </Link>
            </div>
          ))}
        </div>

        <p className={`mt-12 text-center text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          모든 시설은 바이칼 리조트의 엄격한 품질 관리와 안전 기준을 통과한 최신 설비입니다.<br />
          고객의 편안함과 만족을 위해 최선을 다합니다.
        </p>
      </div>
    </Layout>
  );
}
