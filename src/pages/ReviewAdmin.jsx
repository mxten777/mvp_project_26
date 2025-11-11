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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">리뷰 관리</h1>
            <p className="text-gray-600 dark:text-gray-400">고객 리뷰와 평점을 관리합니다</p>
          </div>
          
          <div className="mb-6 flex justify-end">
            <Button 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105" 
              onClick={() => setOpen(true)}
            >
              + 리뷰 추가
            </Button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">고객명</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">객실</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">평점</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">리뷰</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900 dark:text-white">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {reviews.map((r) => (
                    <tr key={r.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">👤</span>
                          </div>
                          <span className="text-gray-900 dark:text-white font-medium">{r.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white">{r.room}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <span className="text-yellow-400 text-lg">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</span>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({r.rating}/5)</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 dark:text-white max-w-xs truncate">{r.comment}</td>
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
      
      <Modal open={open} onClose={() => setOpen(false)} title="리뷰 추가">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">고객명</label>
            <input 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">객실</label>
            <input 
              name="room" 
              value={form.room} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">평점</label>
            <select 
              name="rating" 
              value={form.rating} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            >
              {[5,4,3,2,1].map((v) => (
                <option key={v} value={v}>{v}점 ({'★'.repeat(v)})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">리뷰</label>
            <textarea 
              name="comment" 
              value={form.comment} 
              onChange={handleChange} 
              className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all" 
              rows={3} 
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
