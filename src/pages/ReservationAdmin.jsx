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
      <div className="py-12 px-4 max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 예약 관리</h2>
        <div className="mb-6 flex justify-end">
          <Button className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-xl shadow-brand transition text-lg" onClick={() => setOpen(true)}>예약 추가</Button>
        </div>
        <table className="w-full bg-white rounded-2xl shadow-brand text-base border border-brand-light/30 animate-fade-in">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-brand-dark">고객명</th>
              <th className="text-brand-dark">객실</th>
              <th className="text-brand-dark">체크인</th>
              <th className="text-brand-dark">체크아웃</th>
              <th className="text-brand-dark">상태</th>
              <th className="text-brand-dark">관리</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.id} className="border-b last:border-0 hover:bg-brand-light/10 transition">
                <td className="py-3 font-bold text-brand">{r.name}</td>
                <td>{r.room}</td>
                <td>{r.checkin}</td>
                <td>{r.checkout}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${r.status === "예약완료" ? "bg-brand text-white" : r.status === "체크인" ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"}`}>
                    {r.status}
                  </span>
                </td>
                <td>
                  <Button className="text-xs bg-brand-light hover:bg-brand px-4 py-2 rounded-xl font-bold text-brand-dark mr-2 transition">수정</Button>
                  <Button className="text-xs bg-red-200 hover:bg-red-400 px-4 py-2 rounded-xl font-bold text-red-700 transition">삭제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
      </div>
    </Layout>
  );
}
