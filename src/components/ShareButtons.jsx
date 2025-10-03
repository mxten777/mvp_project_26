import { useState } from "react";

const shareLinks = [
  { name: "카카오톡", color: "bg-yellow-400", icon: "💬", url: "https://www.kakao.com" },
  { name: "페이스북", color: "bg-blue-600", icon: "📘", url: "https://www.facebook.com" },
  { name: "트위터", color: "bg-sky-400", icon: "🐦", url: "https://twitter.com" },
  { name: "링크 복사", color: "bg-gray-300", icon: "🔗", url: "copy" },
];

export default function ShareButtons({ url }) {
  const [copied, setCopied] = useState(false);

  const handleShare = (link) => {
    if (link.url === "copy") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } else {
      window.open(link.url, "_blank");
    }
  };

  return (
    <div className="flex gap-4 justify-center mt-8 animate-fade-in">
      {shareLinks.map((link) => (
        <button
          key={link.name}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-lg shadow-brand transition hover:scale-105 ${link.color} text-brand-dark`}
          onClick={() => handleShare(link)}
        >
          <span>{link.icon}</span>
          <span>{link.name}</span>
        </button>
      ))}
      {copied && (
        <span className="ml-2 text-brand font-bold">링크가 복사되었습니다!</span>
      )}
    </div>
  );
}
