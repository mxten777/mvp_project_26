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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">사용자/로그 관리</h1>
            <p className="text-gray-600 dark:text-gray-400">시스템 사용자와 접근 로그를 관리합니다</p>
          </div>
          
          <div className="mb-6 flex justify-end">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
              onClick={() => setOpen(true)}
            >
              + 사용자 추가
            </Button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">이름</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">이메일</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">역할</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">상태</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">👤</span>
                          </div>
                          <span className="text-gray-900 dark:text-white font-medium">{u.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">{u.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          u.role === '관리자' 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : u.role === '매니저' 
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          u.status === "활성" 
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" 
                            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        }`}>
                          {u.status}
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

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span>감사로그(최근)</span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs px-3 py-1 rounded-full">실시간</span>
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">일시</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">사용자</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">액션</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-mono text-sm">2025-08-30 10:12</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">홍길동</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full text-sm font-medium">
                        예약 생성
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-mono text-sm">2025-08-30 09:55</td>
                    <td className="px-6 py-4 text-gray-900 dark:text-white">김영희</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-sm font-medium">
                        객실 요금 수정
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="사용자 추가">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">이름</label>
            <input 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">이메일</label>
            <input 
              name="email" 
              type="email"
              value={form.email} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">역할</label>
            <select 
              name="role" 
              value={form.role} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required
            >
              <option value="">역할 선택</option>
              <option value="관리자">관리자</option>
              <option value="매니저">매니저</option>
              <option value="직원">직원</option>
              <option value="고객">고객</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">상태</label>
            <select 
              name="status" 
              value={form.status} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              <option value="활성">활성</option>
              <option value="비활성">비활성</option>
            </select>
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <Button 
              type="button" 
              className="px-6 py-3 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors" 
              onClick={() => setOpen(false)}
            >
              취소
            </Button>
            <Button 
              type="submit" 
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              저장
            </Button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}
