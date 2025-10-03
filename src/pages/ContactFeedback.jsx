import Layout from "../components/Layout";
import { useState } from "react";

export default function ContactFeedback() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Layout>
      <div className="py-12 px-4 max-w-xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">문의 / 피드백</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 space-y-6 animate-fade-in">
          <div>
            <label className="block mb-2 font-bold text-brand">이름</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
          </div>
          <div>
            <label className="block mb-2 font-bold text-brand">이메일</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" required />
          </div>
          <div>
            <label className="block mb-2 font-bold text-brand">문의/피드백 내용</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="w-full border border-brand-light rounded-xl px-4 py-3 focus:outline-brand text-lg" rows={5} required />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-brand hover:bg-brand-dark text-white font-bold px-8 py-3 rounded-xl text-lg shadow-brand transition">보내기</button>
          </div>
          {sent && <div className="text-brand font-bold mt-4 text-center">문의/피드백이 정상적으로 접수되었습니다!</div>}
        </form>
        <div className="mt-8 text-center text-gray-600 text-sm animate-fade-in">
          빠른 답변을 위해 정확한 연락처를 남겨주세요.<br />개선 의견, 불편사항, 칭찬 모두 환영합니다.
        </div>
      </div>
    </Layout>
  );
}
