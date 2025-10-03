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
      <div className="py-12 px-4 max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 관리자 대시보드</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="bg-gradient-to-br from-brand-light via-white to-brand rounded-2xl shadow-brand p-8 text-center border border-brand-light/30 animate-fade-in">
              <div className="text-3xl font-extrabold text-brand mb-2 drop-shadow-lg">{s.value}</div>
              <div className="text-brand-dark text-base font-bold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* 월별 매출 그래프 (목업) */}
        <div className="mb-12 bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-lg text-brand mb-6">월별 매출 추이</div>
          <div className="flex gap-4 items-end h-32">
            {monthlySales.map((m) => (
              <div key={m.month} className="flex flex-col items-center justify-end h-full">
                <div className="bg-brand-light rounded-t-xl w-10" style={{ height: `${m.value/7}px` }}>
                  <span className="block text-brand text-xs font-bold mt-1">{m.value}</span>
                </div>
                <div className="text-xs text-brand-dark mt-2">{m.month.replace('2025-', '')}월</div>
              </div>
            ))}
          </div>
        </div>

        {/* 객실별 점유율 */}
        <div className="mb-12 bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-lg text-brand mb-6">객실별 점유율</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {roomOccupancy.map((r) => (
              <div key={r.room} className="bg-brand-light/30 rounded-xl p-6 text-center">
                <div className="text-2xl font-extrabold text-brand mb-2">{r.rate}%</div>
                <div className="text-brand-dark text-base font-bold">{r.room}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 리뷰/평점 통계 */}
        <div className="mb-12 bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-lg text-brand mb-6">객실별 리뷰/평점</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {reviewStats.map((r) => (
              <div key={r.room} className="bg-brand-light/30 rounded-xl p-6 text-center">
                <div className="text-xl font-bold text-brand mb-1">평점 {r.avg} / 5.0</div>
                <div className="text-xs text-brand-dark mb-2">리뷰 {r.count}건</div>
                <div className="text-brand-dark text-base font-bold">{r.room}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 인기 이벤트/프로모션 */}
        <div className="mb-12 bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-lg text-brand mb-6">인기 이벤트/프로모션</div>
          <ul className="space-y-2">
            {eventStats.map((e) => (
              <li key={e.title} className="flex justify-between items-center bg-brand-light/20 rounded-xl px-6 py-3">
                <span className="font-bold text-brand-dark">{e.title}</span>
                <span className="font-bold text-brand">{e.count}건 예약</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 고객 유형 비율 */}
        <div className="mb-12 bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-lg text-brand mb-6">고객 유형 비율</div>
          <div className="flex gap-6 justify-center">
            {customerTypes.map((c) => (
              <div key={c.type} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-2xl font-extrabold text-brand mb-2">{c.percent}%</div>
                <div className="text-brand-dark font-bold">{c.type}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <div className="font-extrabold text-lg text-brand mb-6 flex items-center gap-2">
            <span>최근 예약 현황</span>
            <span className="bg-brand text-white text-xs px-3 py-1 rounded-full">실시간</span>
          </div>
          <table className="w-full text-base">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-brand-dark">고객명</th>
                <th className="text-brand-dark">객실</th>
                <th className="text-brand-dark">체크인</th>
                <th className="text-brand-dark">체크아웃</th>
                <th className="text-brand-dark">상태</th>
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
          <div className="mt-8 text-right">
            <button className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-xl shadow-brand transition text-lg">예약 관리 바로가기</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
