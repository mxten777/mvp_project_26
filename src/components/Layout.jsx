// 공통 레이아웃(헤더/푸터 포함)
export default function Layout({ children }) {
  return (
  <div className="min-h-screen flex flex-col bg-gradient-to-br from-brand-light via-white to-brand-light font-sans">
      {/* 헤더 */}
  <header className="w-full bg-gradient-to-r from-brand via-brand-dark to-brand shadow-brand py-5 mb-6 relative transition-all duration-500">
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-purple-300 to-purple-700 rounded-r-lg hidden md:block" />
  <div className="max-w-5xl mx-auto px-4 flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <span className="inline-block w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-brand animate-spin-slow">
              <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg font-sans">Resort BAIKAL</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline text-base text-brand-light font-semibold"><svg className="inline mr-1" width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" fill="#a78bfa"/></svg>고객센터 1234-5678</span>
            <a href="https://github.com/mxten777/mvp_project_26" target="_blank" rel="noopener noreferrer" className="ml-2 text-brand-light hover:text-white transition" title="GitHub">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/></svg>
            </a>
          </div>
        </div>
      </header>
      {/* 본문 */}
  <main className="flex-1 w-full max-w-5xl mx-auto px-2 sm:px-4 text-base font-sans animate-fade-in">{children}</main>
      {/* 푸터 */}
      <footer className="w-full bg-gradient-to-r from-brand-dark via-brand to-brand-dark text-brand-light text-center py-7 mt-10 text-xs sm:text-sm shadow-brand border-t border-brand-light/20 animate-fade-in">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 px-4">
          <div className="flex items-center gap-3">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#a78bfa"/><path d="M9.5 12.5l2 2 3-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span className="font-extrabold tracking-wide text-lg font-sans">Resort BAIKAL</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-brand-light/80">&copy; {new Date().getFullYear()} All rights reserved.</span>
            <a href="mailto:info@resortbaikal.com" className="text-brand-light hover:text-white transition underline underline-offset-2">info@resortbaikal.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
