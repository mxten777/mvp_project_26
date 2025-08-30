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
      <div className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">예약 관리</h2>
        <div className="mb-4 flex justify-end">
          <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpen(true)}>예약 추가</Button>
        </div>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">고객명</th>
              <th>객실</th>
              <th>체크인</th>
              <th>체크아웃</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((r) => (
              <tr key={r.id} className="border-b last:border-0">
                <td className="py-2">{r.name}</td>
                <td>{r.room}</td>
                <td>{r.checkin}</td>
                <td>{r.checkout}</td>
                <td>{r.status}</td>
                <td>
                  <Button className="text-xs bg-gray-200 mr-2">수정</Button>
                  <Button className="text-xs bg-red-200">삭제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal open={open} onClose={() => setOpen(false)} title="예약 추가">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block mb-1 font-medium">고객명</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">객실</label>
              <input name="room" value={form.room} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block mb-1 font-medium">체크인</label>
                <input name="checkin" type="date" value={form.checkin} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">체크아웃</label>
                <input name="checkout" type="date" value={form.checkout} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-medium">상태</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full border rounded px-3 py-2">
                <option>예약완료</option>
                <option>체크인</option>
                <option>체크아웃</option>
              </select>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" className="bg-gray-200 text-gray-700" onClick={() => setOpen(false)}>취소</Button>
              <Button type="submit" className="bg-blue-600 text-white">저장</Button>
            </div>
          </form>
        </Modal>
      </div>
    </Layout>
  );
}
