import AdminNav from "../components/AdminNav";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { useState } from "react";

const reservations = [
  { id: 1, name: "홍길동", room: "디럭스룸", checkin: "08-30", checkout: "09-01", status: "예약완료" },
  { id: 2, name: "김영희", room: "스위트룸", checkin: "08-29", checkout: "08-31", status: "체크인" },
  { id: 3, name: "이철수", room: "스탠다드룸", checkin: "08-30", checkout: "08-31", status: "예약완료" },
  { id: 4, name: "박민수", room: "패밀리룸", checkin: "08-28", checkout: "08-30", status: "체크아웃" },
];

export default function ReservationAdmin() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', room: '', checkin: '', checkout: '', status: '예약완료' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 저장 로직은 추후 구현
    setOpen(false);
    setForm({ name: '', room: '', checkin: '', checkout: '', status: '예약완료' });
    // 알림 등 추가 가능
  };

  return (
    <Layout>
      <AdminNav />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">예약 관리</h1>
            <p className="text-gray-600 dark:text-gray-400">리조트 객실 예약 현황을 관리합니다</p>
          </div>
          
          <div className="mb-6 flex justify-end">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
              onClick={() => setOpen(true)}
            >
              + 예약 추가
            </Button>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">고객명</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">객실</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">체크인</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">체크아웃</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">상태</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {reservations.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">👤</span>
                          </div>
                          <span className="text-gray-900 dark:text-white font-medium">{r.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">{r.room}</td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-mono">{r.checkin}</td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-mono">{r.checkout}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          r.status === "예약완료" 
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" 
                            : r.status === "체크인" 
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center space-x-2">
                          <button className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors">
                            수정
                          </button>
                          <button className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        <Modal open={open} onClose={() => setOpen(false)} title="예약 추가">
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div>
              <label className="block mb-2 font-bold text-brand">고객명</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">객실</label>
              <input name="room" value={form.room} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-2 font-bold text-brand">체크인</label>
                <input name="checkin" type="date" value={form.checkin} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
              </div>
              <div className="flex-1">
                <label className="block mb-2 font-bold text-brand">체크아웃</label>
                <input name="checkout" type="date" value={form.checkout} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
              </div>
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">상태</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg">
                <option>예약완료</option>
                <option>체크인</option>
                <option>체크아웃</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button type="button" className="bg-gray-200 text-gray-700 font-bold px-6 py-3 rounded-xl text-lg" onClick={() => setOpen(false)}>취소</Button>
              <Button type="submit" className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-xl text-lg shadow-brand transition">저장</Button>
            </div>
          </form>
        </Modal>
    </Layout>
  );
}
