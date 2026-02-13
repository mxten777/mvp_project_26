import Layout from '../components/Layout';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const inputClass = (isDark) =>
  `w-full rounded-xl px-4 py-3 text-base transition-colors duration-200 border focus:outline-none focus:ring-2 focus:ring-brand-500/40 ${
    isDark
      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-brand-400'
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-brand-500'
  }`;

export default function ContactFeedback() {
  const { isDark } = useTheme();
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
      <div className="py-12 px-4 max-w-xl mx-auto">
        <div className="mb-8">
          <h2 className={`text-3xl font-display font-black tracking-tight mb-2 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            문의 / 피드백
          </h2>
          <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            문의사항이나 개선 의견을 남겨주세요
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`card-premium p-8 space-y-6 ${isDark ? 'bg-gray-800/80' : 'bg-white'}`}
        >
          <div>
            <label className={`block mb-2 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>이름</label>
            <input name="name" value={form.name} onChange={handleChange} className={inputClass(isDark)} placeholder="이름을 입력해주세요" required />
          </div>
          <div>
            <label className={`block mb-2 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>이메일</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass(isDark)} placeholder="email@example.com" required />
          </div>
          <div>
            <label className={`block mb-2 text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>문의/피드백 내용</label>
            <textarea name="message" value={form.message} onChange={handleChange} className={inputClass(isDark)} rows={5} placeholder="내용을 입력해주세요" required />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="btn-premium px-8 py-3 rounded-xl text-base font-semibold">보내기</button>
          </div>
          {sent && (
            <div className="text-emerald-500 font-semibold mt-2 text-center text-sm">
              문의/피드백이 정상적으로 접수되었습니다!
            </div>
          )}
        </form>

        <p className={`mt-8 text-center text-sm leading-relaxed ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          빠른 답변을 위해 정확한 연락처를 남겨주세요.<br />
          개선 의견, 불편사항, 칭찬 모두 환영합니다.
        </p>
      </div>
    </Layout>
  );
}
