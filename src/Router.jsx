import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResortIntro from "./pages/ResortIntro";
import RoomList from "./pages/RoomList";
import RoomDetail from "./pages/RoomDetail";
import NotFound from "./pages/NotFound";
import Facilities from "./pages/Facilities";
import Events from "./pages/Events";
import BookingFlow from "./pages/BookingFlow";
import ContactFeedback from "./pages/ContactFeedback";
import AdminDashboard from "./pages/AdminDashboard";
import RoomAdmin from "./pages/RoomAdmin";
import ReservationAdmin from "./pages/ReservationAdmin";
import CouponAdmin from "./pages/CouponAdmin";
import UserAdmin from "./pages/UserAdmin";
import ReviewAdmin from "./pages/ReviewAdmin";

// 🎬 애니메이션 컴포넌트들
import PageTransition from "./components/PageTransition";
import { ScrollProgressBar } from "./components/ScrollAnimations";

// 라우트 컴포넌트 (애니메이션 적용)
function AnimatedRoutes() {
  return (
    <PageTransition>
      <ScrollProgressBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<ResortIntro />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/rooms/:roomId" element={<RoomDetail />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/events" element={<Events />} />
        <Route path="/booking/*" element={<BookingFlow />} />
        <Route path="/contact" element={<ContactFeedback />} />
        {/* 인증 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* 관리자 페이지 */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/rooms" element={<RoomAdmin />} />
        <Route path="/admin/reservations" element={<ReservationAdmin />} />
        <Route path="/admin/reviews" element={<ReviewAdmin />} />
        <Route path="/admin/coupons" element={<CouponAdmin />} />
        <Route path="/admin/users" element={<UserAdmin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default Router;
