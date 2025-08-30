// 공통 로딩 스피너 컴포넌트
export default function Spinner({ size = 32, className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg
        className="animate-spin"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="#a78bfa"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="#7c3aed"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
}
