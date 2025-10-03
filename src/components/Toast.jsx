// 공통 알림(Toast) 컴포넌트
// import 제거됨

export default function Toast({ toast }) {
  if (!toast) return null;
  const color = toast.type === "error" ? "bg-red-500" : toast.type === "success" ? "bg-green-500" : "bg-purple-600";
  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-3 text-white rounded shadow-lg z-50 ${color}`}>
      {toast.msg}
    </div>
  );
}
