import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResortIntro from "./pages/ResortIntro";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomDetail";
import NotFound from "./pages/NotFound";
import Facilities from "./pages/Facilities";
import Events from "./pages/Events";
import BookingFlow from "./pages/BookingFlow";
import AdminDashboard from "./pages/AdminDashboard";
import RoomAdmin from "./pages/RoomAdmin";
import ReservationAdmin from "./pages/ReservationAdmin";
import CouponAdmin from "./pages/CouponAdmin";
import UserAdmin from "./pages/UserAdmin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<ResortIntro />} />
  <Route path="/rooms" element={<RoomList />} />
  <Route path="/rooms/:roomId" element={<RoomDetail />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/booking/*" element={<BookingFlow />} />
        {/* 인증 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* 관리자 페이지 */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/rooms" element={<RoomAdmin />} />
        <Route path="/admin/reservations" element={<ReservationAdmin />} />
        <Route path="/admin/coupons" element={<CouponAdmin />} />
        <Route path="/admin/users" element={<UserAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
