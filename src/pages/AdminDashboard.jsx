import AdminNav from "../components/AdminNav";
import Layout from "../components/Layout";

const stats = [
  { label: "오늘 체크인", value: 8 },
  { label: "오늘 체크아웃", value: 5 },
  { label: "점유율(%)", value: 72 },
  { label: "금일 매출(만원)", value: 430 },
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
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">관리자 대시보드</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded shadow p-6 text-center">
              <div className="text-2xl font-bold mb-2">{s.value}</div>
              <div className="text-gray-600 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-white rounded shadow p-6">
          <div className="font-bold mb-4">최근 예약 현황</div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">고객명</th>
                <th>객실</th>
                <th>체크인</th>
                <th>체크아웃</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              {recent.map((r, i) => (
                <tr key={i} className="border-b last:border-0">
                  <td className="py-2">{r.name}</td>
                  <td>{r.room}</td>
                  <td>{r.checkin}</td>
                  <td>{r.checkout}</td>
                  <td>{r.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
