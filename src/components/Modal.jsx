// 공통 모달 컴포넌트
export default function Modal({ open, onClose, title, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded shadow-lg max-w-md w-full p-6 relative animate-fadeIn">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 text-xl"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        {title && <div className="font-bold text-lg mb-4">{title}</div>}
        {children}
      </div>
    </div>
  );
}
