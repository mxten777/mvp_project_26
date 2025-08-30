import MainNav from "../components/MainNav";
import Layout from "../components/Layout";

export default function ResortIntro() {
  return (
    <Layout>
      <MainNav />
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">리조트 소개</h2>
        <p className="text-gray-600">리조트의 기본 정보, 위치, 특징 등을 소개하는 페이지입니다.</p>
      </div>
    </Layout>
  );
}
