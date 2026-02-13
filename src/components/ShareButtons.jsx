import { useState } from 'react';

/* ─── SVG Share Icons ─── */
const KakaoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6l-.96 3.56c-.08.3.26.54.52.37l4.23-2.79c.5.06 1.02.1 1.56.1 5.52 0 10-3.58 10-7.84C22 6.58 17.52 3 12 3z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const SHARE_LINKS = [
  { name: '카카오톡', Icon: KakaoIcon, className: 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500', url: 'https://www.kakao.com' },
  { name: '페이스북', Icon: FacebookIcon, className: 'bg-blue-600 text-white hover:bg-blue-700', url: 'https://www.facebook.com' },
  { name: 'X', Icon: TwitterIcon, className: 'bg-gray-900 text-white hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600', url: 'https://x.com' },
  { name: '링크복사', Icon: LinkIcon, className: 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500', url: 'copy' },
];

export default function ShareButtons({ url }) {
  const [copied, setCopied] = useState(false);

  const handleShare = (link) => {
    if (link.url === 'copy') {
      navigator.clipboard.writeText(url || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } else {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <span className="text-xs text-gray-400 dark:text-gray-500 mr-1">공유</span>
      {SHARE_LINKS.map(({ name, Icon, className, url: linkUrl }) => (
        <button
          key={name}
          onClick={() => handleShare({ url: linkUrl })}
          className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-xs font-medium transition-colors duration-200 ${className}`}
          aria-label={`${name}으로 공유`}
          title={name}
        >
          <Icon />
        </button>
      ))}
      {copied && (
        <span className="text-xs text-emerald-500 font-medium ml-1 animate-fade-in">복사됨!</span>
      )}
    </div>
  );
}
