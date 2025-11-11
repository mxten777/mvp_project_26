import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <div className="text-6xl font-bold mb-4 text-blue-600">404</div>
        <div className="text-xl mb-2 font-semibold">페이지를 찾을 수 없습니다.</div>
        <div className="mb-6 text-gray-500">입력하신 주소가 잘못되었거나, 존재하지 않는 페이지입니다.</div>
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">홈으로 이동</Link>
      </div>
    </>
  );
}
