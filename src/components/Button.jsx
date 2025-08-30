// 공통 버튼 컴포넌트
export default function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
