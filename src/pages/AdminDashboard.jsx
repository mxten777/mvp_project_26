import AdminNav from "../components/AdminNav";
import Layout from "../components/Layout";

const stats = [
  { label: "오늘 체크인", value: 8 },
  { label: "오늘 체크아웃", value: 5 },
  { label: "점유율(%)", value: 72 },
  { label: "금일 매출(만원)", value: 430 },
];

const monthlySales = [
  { month: "2025-05", value: 320 },
  { month: "2025-06", value: 410 },
  { month: "2025-07", value: 520 },
  { month: "2025-08", value: 610 },
  { month: "2025-09", value: 430 },
];

const roomOccupancy = [
  { room: "디럭스룸", rate: 85 },
  { room: "스위트룸", rate: 78 },
  { room: "패밀리룸", rate: 92 },
  { room: "스탠다드룸", rate: 67 },
];

const reviewStats = [
  { room: "디럭스룸", avg: 4.8, count: 32 },
  { room: "스위트룸", avg: 4.6, count: 21 },
  { room: "패밀리룸", avg: 4.9, count: 18 },
  { room: "스탠다드룸", avg: 4.2, count: 27 },
];

const eventStats = [
  { title: "여름 패키지 할인", count: 54 },
  { title: "키즈 페스티벌", count: 38 },
  { title: "연박 프로모션", count: 41 },
];

const customerTypes = [
  { type: "가족", percent: 48 },
  { type: "커플", percent: 32 },
  { type: "비즈니스", percent: 12 },
  { type: "기타", percent: 8 },
];

const recent = [
  { name: "홍길동", room: "디럭스룸", checkin: "08-30", checkout: "09-01", status: "예약완료" },
  { name: "김영희", room: "스위트룸", checkin: "08-29", checkout: "08-31", status: "체크인" },
  { name: "이철수", room: "스탠다드룸", checkin: "08-30", checkout: "08-31", status: "예약완료" },
  { name: "박민수", room: "패밀리룸", checkin: "08-28", checkout: "08-30", status: "체크아웃" },
];

export default function AdminDashboard() {
  return (
    <Layout>
      <AdminNav />
      <div className="py-6 md:py-12 px-2 md:px-4 max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand mb-6 md:mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 관리자 대시보드</h2>
        
        {/* 통계 카드 - 모바일 최적화 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 mb-8 md:mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-gradient-to-br from-brand-light via-white to-brand rounded-xl md:rounded-2xl shadow-brand p-4 md:p-8 text-center border border-brand-light/30 animate-fade-in">
              <div className="text-xl md:text-3xl font-extrabold text-brand mb-1 md:mb-2 drop-shadow-lg">{s.value}</div>
              <div className="text-brand-dark text-xs md:text-base font-bold leading-tight">{s.label}</div>
            </div>
          ))}
        </div>

        {/* 월별 매출 그래프 (목업) - 모바일 최적화 */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-brand p-4 md:p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-base md:text-lg text-brand mb-4 md:mb-6">월별 매출 추이</div>
          <div className="flex gap-2 md:gap-4 items-end h-24 md:h-32 overflow-x-auto">
            {monthlySales.map((m) => (
              <div key={m.month} className="flex flex-col items-center justify-end h-full min-w-0 flex-shrink-0">
                <div className="bg-brand-light rounded-t-lg md:rounded-t-xl w-6 md:w-10" style={{ height: `${Math.max(m.value/10, 20)}px` }}>
                  <span className="block text-brand text-xs font-bold mt-1 text-center">{m.value}</span>
                </div>
                <div className="text-xs text-brand-dark mt-1 md:mt-2 whitespace-nowrap">{m.month.replace('2025-', '')}월</div>
              </div>
            ))}
          </div>
        </div>

        {/* 객실별 점유율 - 모바일 최적화 */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-brand p-4 md:p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-base md:text-lg text-brand mb-4 md:mb-6">객실별 점유율</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {roomOccupancy.map((r) => (
              <div key={r.room} className="bg-brand-light/30 rounded-lg md:rounded-xl p-3 md:p-6 text-center">
                <div className="text-lg md:text-2xl font-extrabold text-brand mb-1 md:mb-2">{r.rate}%</div>
                <div className="text-brand-dark text-xs md:text-base font-bold leading-tight">{r.room}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 리뷰/평점 통계 - 모바일 최적화 */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-brand p-4 md:p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-base md:text-lg text-brand mb-4 md:mb-6">객실별 리뷰/평점</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {reviewStats.map((r) => (
              <div key={r.room} className="bg-brand-light/30 rounded-lg md:rounded-xl p-3 md:p-6 text-center">
                <div className="text-sm md:text-xl font-bold text-brand mb-1">평점 {r.avg} / 5.0</div>
                <div className="text-xs text-brand-dark mb-1 md:mb-2">리뷰 {r.count}건</div>
                <div className="text-brand-dark text-xs md:text-base font-bold leading-tight">{r.room}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 인기 이벤트/프로모션 - 모바일 최적화 */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-brand p-4 md:p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-base md:text-lg text-brand mb-4 md:mb-6">인기 이벤트/프로모션</div>
          <ul className="space-y-2">
            {eventStats.map((e) => (
              <li key={e.title} className="flex justify-between items-center bg-brand-light/20 rounded-lg md:rounded-xl px-3 md:px-6 py-2 md:py-3">
                <span className="font-bold text-brand-dark text-sm md:text-base">{e.title}</span>
                <span className="font-bold text-brand text-sm md:text-base">{e.count}건 예약</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 고객 유형 비율 - 모바일 최적화 */}
        <div className="mb-8 md:mb-12 bg-white rounded-xl md:rounded-2xl shadow-brand p-4 md:p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-base md:text-lg text-brand mb-4 md:mb-6">고객 유형 비율</div>
          <div className="grid grid-cols-2 md:flex gap-4 md:gap-6 justify-center">
            {customerTypes.map((c) => (
              <div key={c.type} className="flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-brand-light flex items-center justify-center text-lg md:text-2xl font-extrabold text-brand mb-1 md:mb-2">{c.percent}%</div>
                <div className="text-brand-dark font-bold text-xs md:text-base">{c.type}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 최근 예약 현황 - 모바일 최적화 */}
        <div className="bg-white rounded-xl md:rounded-2xl shadow-brand p-4 md:p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-base md:text-lg text-brand mb-4 md:mb-6 flex items-center gap-2">
            <span>최근 예약 현황</span>
            <span className="bg-brand text-white text-xs px-2 md:px-3 py-1 rounded-full">실시간</span>
          </div>
          {/* 모바일용 카드 레이아웃 */}
          <div className="md:hidden space-y-3">
            {recent.map((r, i) => (
              <div key={i} className="bg-brand-light/10 rounded-lg p-3 border border-brand-light/20">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-brand text-sm">{r.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${r.status === "예약완료" ? "bg-brand text-white" : r.status === "체크인" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}>
                    {r.status}
                  </span>
                </div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div><span className="font-semibold">객실:</span> {r.room}</div>
                  <div><span className="font-semibold">체크인:</span> {r.checkin} ~ <span className="font-semibold">체크아웃:</span> {r.checkout}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* 데스크톱용 테이블 */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-base">
              <thead>
                <tr className="border-b">
                  <th className="py-3 text-brand-dark text-left">고객명</th>
                  <th className="text-brand-dark text-left">객실</th>
                  <th className="text-brand-dark text-left">체크인</th>
                  <th className="text-brand-dark text-left">체크아웃</th>
                  <th className="text-brand-dark text-left">상태</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((r, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-brand-light/10 transition">
                    <td className="py-3 font-bold text-brand">{r.name}</td>
                    <td>{r.room}</td>
                    <td>{r.checkin}</td>
                    <td>{r.checkout}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${r.status === "예약완료" ? "bg-brand text-white" : r.status === "체크인" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}>
                        {r.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 md:mt-8 text-center md:text-right">
            <button className="bg-brand hover:bg-brand-dark text-white font-bold py-2 md:py-3 px-6 md:px-8 rounded-lg md:rounded-xl shadow-brand transition text-sm md:text-lg w-full md:w-auto">예약 관리 바로가기</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
