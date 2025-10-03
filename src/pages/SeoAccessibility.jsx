import Layout from "../components/Layout";

export default function SeoAccessibility() {
  return (
    <Layout>
      <div className="py-12 px-4 max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">SEO & 접근성 가이드</h2>
        <div className="bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <h3 className="text-xl font-bold text-brand mb-4">검색엔진 최적화(SEO)</h3>
          <ul className="list-disc pl-6 mb-8 text-lg text-brand-dark/80 space-y-2">
            <li>모든 페이지에 <span className="font-bold text-brand">적절한 meta 태그</span>와 <span className="font-bold text-brand">타이틀</span> 적용</li>
            <li>Open Graph, Twitter Card 등 <span className="font-bold text-brand">소셜 미디어 태그</span> 지원</li>
            <li>구조화된 데이터(JSON-LD)로 <span className="font-bold text-brand">리조트 정보, 리뷰, 이벤트</span> 노출</li>
            <li>빠른 로딩, 모바일 최적화, <span className="font-bold text-brand">Vercel CDN</span> 활용</li>
            <li>robots.txt, sitemap.xml 자동 생성 및 관리</li>
          </ul>
          <h3 className="text-xl font-bold text-brand mb-4">접근성(Accessibility)</h3>
          <ul className="list-disc pl-6 text-lg text-brand-dark/80 space-y-2">
            <li>모든 이미지에 <span className="font-bold text-brand">alt 텍스트</span> 제공</li>
            <li>명확한 <span className="font-bold text-brand">색 대비</span>와 <span className="font-bold text-brand">폰트 크기</span> 적용</li>
            <li>키보드 내비게이션, 포커스 스타일, <span className="font-bold text-brand">ARIA 속성</span> 지원</li>
            <li>스크린리더 친화적 구조, <span className="font-bold text-brand">semantic HTML</span> 사용</li>
            <li>애니메이션/모션에 <span className="font-bold text-brand">사용자 제어 옵션</span> 제공</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
