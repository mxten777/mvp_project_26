import Layout from "../components/Layout";

export default function FirebaseGuide() {
  return (
    <Layout>
      <div className="py-12 px-4 max-w-3xl mx-auto animate-fade-in">
        <h2 className="text-3xl font-extrabold text-brand mb-10 font-sans drop-shadow-lg tracking-tight animate-fade-in">Firebase 연동 가이드</h2>
        <div className="bg-white rounded-2xl shadow-brand p-8 border border-brand-light/30 animate-fade-in">
          <h3 className="text-xl font-bold text-brand mb-4">기본 연동</h3>
          <ul className="list-disc pl-6 mb-8 text-lg text-brand-dark/80 space-y-2">
            <li>환경변수(.env) 설정 후 <span className="font-bold text-brand">src/firebase/index.js</span>에서 Firebase 초기화</li>
            <li>인증(Auth), DB(Firestore), 스토리지(Storage) 모듈 분리</li>
            <li>각 페이지/컴포넌트에서 아래와 같이 import하여 사용</li>
            <pre className="bg-gray-100 rounded-xl p-2 text-sm mb-2 overflow-x-auto">import {'{'} auth, db, storage {'}'} from 'src/firebase'</pre>
          </ul>
          <h3 className="text-xl font-bold text-brand mb-4">예시 코드</h3>
          <pre className="bg-gray-100 rounded-xl p-4 text-sm mb-8 overflow-x-auto">
{`
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

async function fetchRooms() {
  const querySnapshot = await getDocs(collection(db, "rooms"));
  return querySnapshot.docs.map(doc => doc.data());
}
`}
          </pre>
          <h3 className="text-xl font-bold text-brand mb-4">CRUD 연동 팁</h3>
          <ul className="list-disc pl-6 text-lg text-brand-dark/80 space-y-2">
            <li>예약/리뷰/객실 등 주요 데이터는 Firestore 컬렉션으로 관리</li>
            <li>실제 연동은 추후 진행, 현재는 목업 데이터 기반 UI</li>
            <li>에러/로딩/권한 등 예외처리 필수</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
