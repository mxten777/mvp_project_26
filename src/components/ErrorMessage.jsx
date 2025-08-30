// 공통 에러 메시지 컴포넌트
export default function ErrorMessage({ message, className = "" }) {
  if (!message) return null;
  return (
    <div className={`bg-red-100 text-red-700 px-4 py-2 rounded mb-3 text-sm ${className}`}>
      {message}
    </div>
  );
}
