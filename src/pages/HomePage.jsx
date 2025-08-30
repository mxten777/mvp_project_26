import MainNav from "../components/MainNav";
import Layout from "../components/Layout";

export default function HomePage() {
  return (
    <Layout>
      <MainNav />
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">리조트 홈페이지 메인</h2>
        <p className="text-gray-600">여기에 리조트 소개, 객실 리스트, 예약 등 메인 콘텐츠가 들어갑니다.</p>
      </div>
    </Layout>
  );
}
