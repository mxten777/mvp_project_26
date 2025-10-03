import AdminNav from "../components/AdminNav";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useState } from "react";

const reviews = [
  { id: 1, name: "홍길동", room: "디럭스룸", rating: 5, comment: "최고의 서비스와 전망!" },
  { id: 2, name: "김영희", room: "스위트룸", rating: 4, comment: "청결하고 친절해요." },
  { id: 3, name: "이철수", room: "스탠다드룸", rating: 3, comment: "가성비 좋음." },
];

export default function ReviewAdmin() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', room: '', rating: 5, comment: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 저장 로직은 추후 구현
    setOpen(false);
    setForm({ name: '', room: '', rating: 5, comment: '' });
    // 알림 등 추가 가능
  };

  return (
    <Layout>
      <AdminNav />
      <div className="py-12 px-4 max-w-5xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 리뷰 관리</h2>
        <div className="mb-6 flex justify-end">
          <Button className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-xl shadow-brand transition text-lg" onClick={() => setOpen(true)}>리뷰 추가</Button>
        </div>
        <table className="w-full bg-white rounded-2xl shadow-brand text-base border border-brand-light/30 animate-fade-in">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-brand-dark">고객명</th>
              <th className="text-brand-dark">객실</th>
              <th className="text-brand-dark">평점</th>
              <th className="text-brand-dark">리뷰</th>
              <th className="text-brand-dark">관리</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => (
              <tr key={r.id} className="border-b last:border-0 hover:bg-brand-light/10 transition">
                <td className="py-3 font-bold text-brand">{r.name}</td>
                <td>{r.room}</td>
                <td>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</td>
                <td>{r.comment}</td>
                <td>
                  <Button className="text-xs bg-brand-light hover:bg-brand px-4 py-2 rounded-xl font-bold text-brand-dark mr-2 transition">수정</Button>
                  <Button className="text-xs bg-red-200 hover:bg-red-400 px-4 py-2 rounded-xl font-bold text-red-700 transition">삭제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal open={open} onClose={() => setOpen(false)} title="리뷰 추가">
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div>
              <label className="block mb-2 font-bold text-brand">고객명</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">객실</label>
              <input name="room" value={form.room} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">평점</label>
              <select name="rating" value={form.rating} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg">
                {[5,4,3,2,1].map((v) => (
                  <option key={v} value={v}>{v}점</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">리뷰</label>
              <textarea name="comment" value={form.comment} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" rows={3} required />
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
