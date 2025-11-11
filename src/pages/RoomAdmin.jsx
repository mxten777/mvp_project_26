import AdminNav from "../components/AdminNav";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { useState } from "react";

const initialRooms = [
  { id: 1, name: "스탠다드룸", price: 120000, season: "비수기" },
  { id: 2, name: "디럭스룸", price: 180000, season: "성수기" },
  { id: 3, name: "스위트룸", price: 300000, season: "성수기" },
];

export default function RoomAdmin() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', price: '', season: '' });
  const [search, setSearch] = useState('');
  const [rooms] = useState(initialRooms);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 저장 로직은 추후 구현
    setOpen(false);
    setForm({ name: '', price: '', season: '' });
    // 알림 등 추가 가능
  };

  // 검색 필터링
  const filteredRooms = rooms.filter((r) => r.name.includes(search));

  return (
    <Layout>
      <AdminNav />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              객실/요금/시즌 관리
            </h1>
            <p className="text-gray-600 dark:text-gray-400">리조트 객실 정보와 요금을 관리합니다</p>
          </div>
          
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="객실명 검색..."
                className="w-full sm:w-80 px-4 py-3 pl-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
              onClick={() => setOpen(true)}
            >
              + 객실 추가
            </Button>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">객실명</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">요금</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">시즌</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredRooms.map((r, index) => (
                    <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold">🏨</span>
                          </div>
                          <span className="text-gray-900 dark:text-white font-medium">{r.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-semibold">₩{r.price.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          r.season === '성수기' 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' 
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {r.season}
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
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">블랙아웃(재고막기) 관리</h2>
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">날짜</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">객실</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">사유</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">관리</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">2025-09-10</td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">스위트룸</td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-sm font-medium">
                          정기점검
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg text-sm font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors">
                          해제
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Modal open={open} onClose={() => setOpen(false)} title="객실 추가">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block mb-1 font-medium">객실명</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">요금</label>
              <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">시즌</label>
              <input name="season" value={form.season} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" className="bg-gray-200 text-gray-700" onClick={() => setOpen(false)}>취소</Button>
              <Button type="submit" className="bg-blue-600 text-white">저장</Button>
            </div>
          </form>
        </Modal>
    </Layout>
  );
}
