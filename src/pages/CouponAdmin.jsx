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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">쿠폰 관리</h1>
            <p className="text-gray-600 dark:text-gray-400">할인 쿠폰과 프로모션을 관리합니다</p>
          </div>
          
          <div className="mb-6 flex justify-end">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
              onClick={() => setOpen(true)}
            >
              + 쿠폰 추가
            </Button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">코드</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">설명</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">할인</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">유효기간</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {coupons.map((c) => (
                    <tr key={c.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">🎟️</span>
                          </div>
                          <span className="text-gray-900 dark:text-white font-mono font-bold bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">{c.code}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">{c.desc}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          c.discount === '100%' 
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : parseInt(c.discount) >= 30
                            ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        }`}>
                          {c.discount}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">{c.valid}</td>
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
      <Modal open={open} onClose={() => setOpen(false)} title="쿠폰 추가">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">쿠폰 코드</label>
            <input 
              name="code" 
              value={form.code} 
              onChange={handleChange} 
              placeholder="예: SUMMER30"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all font-mono" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">설명</label>
            <input 
              name="desc" 
              value={form.desc} 
              onChange={handleChange} 
              placeholder="쿠폰 설명을 입력하세요"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">할인율</label>
            <input 
              name="discount" 
              value={form.discount} 
              onChange={handleChange} 
              placeholder="예: 30% 또는 10000원"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">유효기간</label>
            <input 
              name="valid" 
              type="date"
              value={form.valid} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required 
            />
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
