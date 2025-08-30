import { Link, useLocation } from "react-router-dom";

const adminNavs = [
  { to: "/admin", label: "대시보드" },
  { to: "/admin/rooms", label: "객실/요금/시즌" },
  { to: "/admin/reservations", label: "예약 관리" },
  { to: "/admin/coupons", label: "쿠폰 관리" },
  { to: "/admin/users", label: "사용자/로그" },
];

export default function AdminNav() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full bg-gray-900 shadow mb-8 overflow-x-auto">
      <div className="max-w-4xl mx-auto flex gap-3 sm:gap-4 px-2 sm:px-4 py-3 whitespace-nowrap overflow-x-auto">
        {adminNavs.map((nav) => (
          <Link
            key={nav.to}
            to={nav.to}
            className={`font-medium px-2 py-1 rounded hover:bg-gray-800 transition ${pathname === nav.to ? "text-yellow-400" : "text-gray-200"}`}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
