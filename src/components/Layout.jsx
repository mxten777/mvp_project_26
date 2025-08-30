// 공통 레이아웃(헤더/푸터 포함)
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="w-full bg-white shadow py-3 md:py-4 mb-4">
        <div className="max-w-5xl mx-auto px-2 sm:px-4 flex items-center justify-between">
          <div className="text-lg sm:text-xl font-bold text-purple-700">Resort BAIKAL</div>
          <div className="text-xs sm:text-sm text-purple-500">고객센터 1234-5678</div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-4 text-base">{children}</main>
      <footer className="w-full bg-purple-900 text-purple-100 text-center py-3 md:py-4 mt-8 text-xs sm:text-sm">
  &copy; {new Date().getFullYear()} Resort BAIKAL. All rights reserved.
      </footer>
    </div>
  );
}
