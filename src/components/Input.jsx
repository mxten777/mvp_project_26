// 공통 입력폼 컴포넌트
export default function Input({ label, type = "text", className = '', ...props }) {
  return (
    <div className="mb-3">
      {label && <label className="block mb-1 font-medium">{label}</label>}
      <input
        type={type}
        className={`w-full border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 ${className}`}
        {...props}
      />
    </div>
  );
}
