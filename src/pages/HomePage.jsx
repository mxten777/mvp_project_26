
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

/* ─── SVG Icon Components ─── */
const Icons = {
  Star: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  Waves: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
      <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
      <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    </svg>
  ),
  Check: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  ),
  Diamond: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 3h12l4 6-10 12L2 9z"/>
    </svg>
  ),
  Bed: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
    </svg>
  ),
  Building: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  ),
  Calendar: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>
    </svg>
  ),
  Settings: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  Phone: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  User: (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  ArrowRight: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  ),
  ChevronDown: (props) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6"/>
    </svg>
  ),
};

/* ─── Feature Card Data ─── */
const FEATURES = [
  {
    to: '/rooms',
    icon: Icons.Bed,
    title: '객실 안내',
    description: '스탠다드부터 프레지덴셜 스위트까지, 바이칼 호수의 절경을 담은 프리미엄 객실',
    detail: '6가지 객실 타입 · 레이크뷰 보장',
    gradient: 'from-brand-500 to-brand-700',
    iconBg: 'bg-brand-500/20 text-brand-400',
  },
  {
    to: '/facilities',
    icon: Icons.Building,
    title: '시설 안내',
    description: '인피니티 풀, 프라이빗 스파, 파인 다이닝 등 월드클래스 어메니티',
    detail: '스파 · 피트니스 · 레스토랑 · 수영장',
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    to: '/events',
    icon: Icons.Calendar,
    title: '이벤트',
    description: '시즌별 특별 프로모션과 프라이빗 이벤트로 잊지 못할 순간을 만들어 드립니다',
    detail: '계절별 이벤트 · 패키지 상품',
    gradient: 'from-brand-accent to-pink-600',
    iconBg: 'bg-pink-500/20 text-pink-400',
  },
];

const STATS = [
  { value: '10,000+', label: '만족 고객', suffix: '' },
  { value: '4.9', label: '고객 평점', suffix: '/5' },
  { value: '200+', label: '프리미엄 객실', suffix: '' },
  { value: '24/7', label: '컨시어지 서비스', suffix: '' },
];

const BADGES = [
  { Icon: Icons.Star, text: '5성급 럭셔리', className: 'text-amber-400' },
  { Icon: Icons.Waves, text: '바이칼 레이크뷰', className: 'text-sky-400' },
  { Icon: Icons.Check, text: '즉시 예약 확정', className: 'text-emerald-400' },
  { Icon: Icons.Diamond, text: '프리미엄 서비스', className: 'text-violet-400' },
];

/* ─── Main Component ─── */
export default function HomePage() {
  const { isDark } = useTheme();

  return (
    <Layout>
      {/* ── Hero Section ── */}
      <section
        data-hero-bleed="true"
        className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-brand-950 via-brand-900 to-brand-800 mb-16 sm:mb-24"
        aria-label="Resort BAIKAL 메인 히어로"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-brand-600/15 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-brand-accent/10 blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-gold/5 blur-[140px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-brand-gold/30 bg-brand-gold/10 backdrop-blur-sm">
            <Icons.Star className="w-4 h-4 text-brand-gold" />
            <span className="text-sm font-semibold text-brand-gold tracking-wide uppercase">Premium Lakeside Resort</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-[0.95] tracking-tight text-white">
            Resort{' '}
            <span className="text-gradient">BAIKAL</span>
          </h1>

          {/* Decorative line */}
          <div className="h-px w-48 mx-auto mb-8 bg-gradient-to-r from-transparent via-brand-gold/60 to-transparent" aria-hidden="true" />

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
            세계가 인정한{' '}
            <span className="font-semibold text-brand-gold">럭셔리 리조트</span>의 품격
            <br className="hidden sm:block" />
            바이칼 호수가 선사하는 특별한 휴식
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <Link
              to="/booking"
              className="group btn-premium inline-flex items-center gap-3 w-full sm:w-auto px-10 py-4 text-lg font-bold rounded-xl"
            >
              <span>지금 예약하기</span>
              <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/rooms"
              className="inline-flex items-center gap-3 w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 justify-center"
            >
              객실 둘러보기
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {BADGES.map(({ Icon, text, className }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-sm text-white/90"
              >
                <Icon className={`w-4 h-4 ${className}`} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="text-center p-5 rounded-2xl bg-white/8 border border-white/15 backdrop-blur-sm"
              >
                <p className="text-3xl sm:text-4xl font-black mb-1">
                  <span className="bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-transparent">{stat.value}</span>
                  <span className="text-lg text-white/50">{stat.suffix}</span>
                </p>
                <p className="text-sm text-white/70 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40" aria-hidden="true">
          <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
          <Icons.ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* ── Feature Cards Section ── */}
      <section className="mb-16 sm:mb-24" aria-label="주요 서비스">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-display font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            프리미엄 서비스
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            바이칼 호수의 경이로운 자연과 세계 수준의 서비스가 만나는 곳
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map(({ to, icon: Icon, title, description, detail, gradient, iconBg }) => (
            <Link
              key={to}
              to={to}
              className={`group card-premium flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                isDark ? 'hover:shadow-brand-500/10' : ''
              }`}
            >
              {/* Card header gradient */}
              <div className={`relative bg-gradient-to-br ${gradient} p-6`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center mb-4 relative z-[1]`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white relative z-[1]">{title}</h3>
              </div>
              {/* Card body */}
              <div className={`flex-1 p-6 ${isDark ? 'bg-gray-800/50' : 'bg-white'}`}>
                <p className={`mb-3 leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {description}
                </p>
                <p className={`text-sm font-medium ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {detail}
                </p>
              </div>
              {/* Card footer */}
              <div className={`px-6 py-3 flex items-center justify-between border-t ${
                isDark ? 'border-gray-700/50 bg-gray-800/30' : 'border-gray-100 bg-gray-50/50'
              }`}>
                <span className={`text-sm font-semibold ${isDark ? 'text-brand-400' : 'text-brand-600'}`}>
                  자세히 보기
                </span>
                <Icons.ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                  isDark ? 'text-brand-400' : 'text-brand-600'
                }`} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Admin & Contact Section ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 sm:mb-24" aria-label="관리 및 서비스">
        {/* Admin Dashboard */}
        <Link
          to="/admin"
          className={`group card-premium overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
            isDark ? 'bg-gray-800/80' : 'bg-gray-900'
          }`}
        >
          <div className="p-8">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center mb-5">
              <Icons.Settings className="w-6 h-6 text-brand-gold" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">관리자 대시보드</h3>
            <p className="text-gray-400 mb-5 leading-relaxed">
              실시간 예약 현황, 매출 통계, 고객 관리를 한 곳에서
            </p>
            <div className="flex flex-wrap gap-2">
              {['예약 관리', '객실 관리', '사용자 관리', '쿠폰 관리'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>

        {/* Customer Service */}
        <Link
          to="/contact"
          className="group card-premium overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="p-8">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center mb-5">
              <Icons.Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">고객 서비스</h3>
            <p className="text-white/70 mb-5 leading-relaxed">
              문의사항, 피드백, 24시간 컨시어지 서비스
            </p>
            <div className="flex flex-wrap gap-2">
              {['24시간 고객센터', '온라인 문의', '피드백'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-white/15 text-white/90">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </section>

      {/* ── Member CTA Section ── */}
      <section
        className={`card-premium p-8 sm:p-12 text-center mb-8 relative overflow-hidden ${
          isDark ? 'bg-gray-800/80' : 'bg-white'
        }`}
        aria-label="회원 서비스"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-brand-accent to-brand-gold" aria-hidden="true" />

        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand-500/25">
          <Icons.User className="w-7 h-7 text-white" />
        </div>

        <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          회원 서비스
        </h3>
        <p className={`mb-8 max-w-md mx-auto leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          회원가입하고 얼리버드 특가, 전용 라운지, 포인트 적립 등 더 많은 혜택을 경험하세요
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/login"
            className="btn-premium inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold"
          >
            로그인
          </Link>
          <Link
            to="/signup"
            className={`inline-flex items-center justify-center px-8 py-3 rounded-xl font-semibold border transition-all duration-300 ${
              isDark
                ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500'
                : 'border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
            }`}
          >
            회원가입
          </Link>
        </div>
      </section>
    </Layout>
  );
}
