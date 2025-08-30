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
      <div className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">쿠폰/프로모션 관리</h2>
        <div className="mb-4 flex justify-end">
          <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpen(true)}>쿠폰 추가</Button>
        </div>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">코드</th>
              <th>설명</th>
              <th>할인</th>
              <th>유효기간</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => (
              <tr key={c.id} className="border-b last:border-0">
                <td className="py-2">{c.code}</td>
                <td>{c.desc}</td>
                <td>{c.discount}</td>
                <td>{c.valid}</td>
                <td>
                  <Button className="text-xs bg-gray-200 mr-2">수정</Button>
                  <Button className="text-xs bg-red-200">삭제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal open={open} onClose={() => setOpen(false)} title="쿠폰 추가">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block mb-1 font-medium">코드</label>
              <input name="code" value={form.code} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">설명</label>
              <input name="desc" value={form.desc} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">할인</label>
              <input name="discount" value={form.discount} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">유효기간</label>
              <input name="valid" value={form.valid} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
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
