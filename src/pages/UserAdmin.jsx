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
      <div className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">사용자/로그 관리</h2>
        <div className="mb-4 flex justify-end">
          <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpen(true)}>사용자 추가</Button>
        </div>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2">이름</th>
              <th>이메일</th>
              <th>역할</th>
              <th>상태</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-0">
                <td className="py-2">{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>{u.status}</td>
                <td>
                  <Button className="text-xs bg-gray-200 mr-2">수정</Button>
                  <Button className="text-xs bg-red-200">삭제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8">
          <div className="font-bold mb-2">감사로그(최근)</div>
          <table className="w-full bg-white rounded shadow text-xs">
            <thead>
              <tr className="border-b">
                <th className="py-2">일시</th>
                <th>사용자</th>
                <th>액션</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">2025-08-30 10:12</td>
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
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block mb-1 font-medium">이름</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">이메일</label>
              <input name="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">역할</label>
              <input name="role" value={form.role} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">상태</label>
              <select name="status" value={form.status} onChange={handleChange} className="w-full border rounded px-3 py-2">
                <option>활성</option>
                <option>비활성</option>
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
