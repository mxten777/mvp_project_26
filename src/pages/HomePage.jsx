

export default function HomePage() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-hero rounded-2xl shadow-brand mx-auto max-w-3xl px-6 py-16 animate-fade-in">
        <span className="inline-block w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-brand mb-6 animate-spin-slow">
          <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand mb-6 font-sans drop-shadow-lg tracking-tight">Resort BAIKAL</h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 font-sans">최고의 경쟁력과 고급스러움, 세련된 디자인을 담은 프리미엄 리조트 예약 시스템</p>
        <a href="/booking" className="inline-block bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl shadow-brand transition text-lg">지금 예약하기</a>
      </div>
    </Layout>
  );
}
