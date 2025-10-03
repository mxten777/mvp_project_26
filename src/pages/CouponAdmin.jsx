import AdminNav from "../components/AdminNav";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { useState } from "react";

const coupons = [
  { id: 1, code: "SUMMER30", desc: "여름 30% 할인", discount: "30%", valid: "2025-08-31" },
  { id: 2, code: "KIDSFREE", desc: "키즈 페스티벌 무료", discount: "100%", valid: "2025-08-31" },
  { id: 3, code: "STAY2NIGHT", desc: "2박 연박 할인", discount: "15%", valid: "상시" },
];

export default function CouponAdmin() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ code: '', desc: '', discount: '', valid: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 저장 로직은 추후 구현
    setOpen(false);
    setForm({ code: '', desc: '', discount: '', valid: '' });
    // 알림 등 추가 가능
  };

  return (
    <Layout>
      <AdminNav />
      <div className="py-12 px-4 max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 쿠폰/프로모션 관리</h2>
        <div className="mb-6 flex justify-end">
          <Button className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-xl shadow-brand transition text-lg" onClick={() => setOpen(true)}>쿠폰 추가</Button>
        </div>
        <table className="w-full bg-white rounded-2xl shadow-brand text-base border border-brand-light/30 animate-fade-in">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-brand-dark">코드</th>
              <th className="text-brand-dark">설명</th>
              <th className="text-brand-dark">할인</th>
              <th className="text-brand-dark">유효기간</th>
              <th className="text-brand-dark">관리</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => (
              <tr key={c.id} className="border-b last:border-0 hover:bg-brand-light/10 transition">
                <td className="py-3 font-bold text-brand">{c.code}</td>
                <td>{c.desc}</td>
                <td>{c.discount}</td>
                <td>{c.valid}</td>
                <td>
                  <Button className="text-xs bg-brand-light hover:bg-brand px-4 py-2 rounded-xl font-bold text-brand-dark mr-2 transition">수정</Button>
                  <Button className="text-xs bg-red-200 hover:bg-red-400 px-4 py-2 rounded-xl font-bold text-red-700 transition">삭제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal open={open} onClose={() => setOpen(false)} title="쿠폰 추가">
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div>
              <label className="block mb-2 font-bold text-brand">코드</label>
              <input name="code" value={form.code} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">설명</label>
              <input name="desc" value={form.desc} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">할인</label>
              <input name="discount" value={form.discount} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">유효기간</label>
              <input name="valid" value={form.valid} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
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
