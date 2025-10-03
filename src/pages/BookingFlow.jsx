import MainNav from "../components/MainNav";
import { useState } from "react";
import Input from "../components/Input";
import Toast, { useToast } from "../components/Toast";
import Layout from "../components/Layout";

export default function BookingFlow() {
  const [step, setStep] = useState(1);
  const [toast, showToast] = useToast();
  // 예약 입력값 상태
  const [form, setForm] = useState({
    checkin: '',
    checkout: '',
    people: 2,
    room: '',
    name: '',
    phone: '',
    email: '',
  });

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 1단계: 날짜/인원 유효성
  const handleNextStep1 = () => {
    if (!form.checkin || !form.checkout || !form.people) {
      showToast('체크인/체크아웃 날짜와 인원을 입력하세요.', 'error');
      return;
    }
    setStep(2);
  };
  // 2단계: 객실 선택 유효성
  const handleNextStep2 = () => {
    if (!form.room) {
      showToast('객실을 선택하세요.', 'error');
      return;
    }
    setStep(3);
  };
  // 3단계: 고객정보 유효성
  const handleNextStep3 = () => {
    if (!form.name || !form.phone || !form.email) {
      showToast('이름, 연락처, 이메일을 모두 입력하세요.', 'error');
      return;
    }
    setStep(4);
    showToast('예약이 완료되었습니다!', 'success');
  };
  // 새 예약
  const handleReset = () => {
    setForm({ checkin: '', checkout: '', people: 2, room: '', name: '', phone: '', email: '' });
    setStep(1);
  };

  return (
    <Layout>
      <MainNav />
      <div className="py-12 px-4 max-w-xl mx-auto bg-white rounded-2xl shadow-brand border border-brand-light/30 animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-8 font-sans drop-shadow-lg tracking-tight animate-fade-in">프리미엄 예약하기</h2>
        <div className="mb-10 flex gap-3 text-base justify-center">
          <StepLabel n={1} step={step}>날짜/인원</StepLabel>
          <StepLabel n={2} step={step}>객실선택</StepLabel>
          <StepLabel n={3} step={step}>고객정보</StepLabel>
          <StepLabel n={4} step={step}>예약완료</StepLabel>
        </div>
        {step === 1 && (
          <div>
            <Input label="체크인 날짜" type="date" name="checkin" value={form.checkin} onChange={handleChange} />
            <Input label="체크아웃 날짜" type="date" name="checkout" value={form.checkout} onChange={handleChange} />
            <Input label="인원" type="number" min={1} max={10} name="people" value={form.people} onChange={handleChange} />
            <button className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl shadow-brand transition text-lg" onClick={handleNextStep1}>
              다음 단계
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <label className="block mb-2 font-medium">객실 선택</label>
            <select className="mb-4 w-full border rounded px-3 py-2" name="room" value={form.room} onChange={handleChange}>
              <option value="">객실을 선택하세요</option>
              <option>스탠다드룸</option>
              <option>디럭스룸</option>
              <option>스위트룸</option>
            </select>
            <button className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl shadow-brand transition text-lg mb-2" onClick={handleNextStep2}>
              다음 단계
            </button>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-bold text-lg" onClick={() => setStep(1)}>
              이전 단계
            </button>
          </div>
        )}
        {step === 3 && (
          <div>
            <Input label="이름" name="name" value={form.name} onChange={handleChange} />
            <Input label="연락처" type="tel" name="phone" value={form.phone} onChange={handleChange} />
            <Input label="이메일" type="email" name="email" value={form.email} onChange={handleChange} />
            <button
              className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl shadow-brand transition text-lg mb-2"
              onClick={handleNextStep3}
            >
              예약 완료
            </button>
            <button className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-bold text-lg" onClick={() => setStep(2)}>
              이전 단계
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="text-center animate-fade-in">
            <div className="text-4xl mb-4">🎉</div>
            <div className="text-xl font-extrabold text-brand mb-2">예약이 완료되었습니다!</div>
            <div className="text-gray-700 mb-4">입력하신 연락처로 예약 안내가 발송됩니다.<br />빠른 체크인/체크아웃, 실시간 예약 관리가 가능합니다.</div>
            <button className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-xl shadow-brand transition text-lg" onClick={handleReset}>
              새 예약하기
            </button>
          </div>
        )}
        <Toast toast={toast} />
      </div>
    </Layout>
  );
}
// ...existing code...

function StepLabel({ n, step, children }) {
  return (
    <span className={`px-4 py-2 rounded-full font-bold text-base transition-all duration-300 shadow-brand ${step === n ? "bg-brand text-white" : "bg-gray-200 text-brand-dark/70"}`}>
      {children}
    </span>
  );
}
