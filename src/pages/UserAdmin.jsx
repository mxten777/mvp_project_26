import AdminNav from "../components/AdminNav";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { useState } from "react";

const users = [
  { id: 1, name: "홍길동", email: "hong@test.com", role: "관리자", status: "활성" },
  { id: 2, name: "김영희", email: "kim@test.com", role: "매니저", status: "활성" },
  { id: 3, name: "이철수", email: "lee@test.com", role: "직원", status: "비활성" },
  { id: 4, name: "박민수", email: "park@test.com", role: "고객", status: "활성" },
];

export default function UserAdmin() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', role: '', status: '활성' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 저장 로직은 추후 구현
    setOpen(false);
    setForm({ name: '', email: '', role: '', status: '활성' });
    // 알림 등 추가 가능
  };

  return (
    <Layout>
      <AdminNav />
      <div className="py-12 px-4 max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 사용자/로그 관리</h2>
        <div className="mb-6 flex justify-end">
          <Button className="bg-brand hover:bg-brand-dark text-white font-bold py-3 px-8 rounded-xl shadow-brand transition text-lg" onClick={() => setOpen(true)}>사용자 추가</Button>
        </div>
        <table className="w-full bg-white rounded-2xl shadow-brand text-base border border-brand-light/30 animate-fade-in">
          <thead>
            <tr className="border-b">
              <th className="py-3 text-brand-dark">이름</th>
              <th className="text-brand-dark">이메일</th>
              <th className="text-brand-dark">역할</th>
              <th className="text-brand-dark">상태</th>
              <th className="text-brand-dark">관리</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-0 hover:bg-brand-light/10 transition">
                <td className="py-3 font-bold text-brand">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${u.status === "활성" ? "bg-brand text-white" : "bg-gray-300 text-gray-700"}`}>
                    {u.status}
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
        <div className="mt-10">
          <div className="font-extrabold text-lg text-brand mb-4 flex items-center gap-2">
            <span>감사로그(최근)</span>
            <span className="bg-brand text-white text-xs px-3 py-1 rounded-full">실시간</span>
          </div>
          <table className="w-full bg-white rounded-2xl shadow-brand text-sm border border-brand-light/30 animate-fade-in">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-brand-dark">일시</th>
                <th className="text-brand-dark">사용자</th>
                <th className="text-brand-dark">액션</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">2025-08-30 10:12</td>
                <td>홍길동</td>
                <td>예약 생성</td>
              </tr>
              <tr>
                <td>2025-08-30 09:55</td>
                <td>김영희</td>
                <td>객실 요금 수정</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} title="사용자 추가">
          <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
            <div>
              <label className="block mb-2 font-bold text-brand">이름</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">이메일</label>
              <input name="email" value={form.email} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">역할</label>
              <input name="role" value={form.role} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
            </div>
            <div>
              <label className="block mb-2 font-bold text-brand">상태</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg">
                <option>활성</option>
                <option>비활성</option>
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
