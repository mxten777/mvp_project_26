export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-xs bg-white rounded shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-center">회원가입</h2>
        <form>
          <input type="email" placeholder="이메일" className="mb-2 w-full px-3 py-2 border rounded" />
          <input type="password" placeholder="비밀번호" className="mb-2 w-full px-3 py-2 border rounded" />
          <input type="password" placeholder="비밀번호 확인" className="mb-4 w-full px-3 py-2 border rounded" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">회원가입</button>
        </form>
        <div className="mt-4 text-center">
          <a href="/login" className="text-blue-600 hover:underline">로그인</a>
        </div>
      </div>
    </div>
  );
}
