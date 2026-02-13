import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Core components (not lazy - needed immediately)
import PageTransition from './components/PageTransition';
import { ScrollProgressBar } from './components/ScrollAnimations';
import ScrollToTop from './components/ScrollToTop';

// Premium loading fallback
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-pearl via-white to-brand-50">
      <div className="text-center space-y-4">
        <div className="relative w-16 h-16 mx-auto">
          <div className="absolute inset-0 rounded-full border-4 border-brand-200 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-brand-secondary animate-spin" />
        </div>
        <p className="text-neutral-500 text-sm font-medium tracking-wide">Loading...</p>
      </div>
    </div>
  );
}

// ─── Lazy-loaded pages (code splitting) ───
const HomePage = lazy(() => import('./pages/HomePage'));
const ResortIntro = lazy(() => import('./pages/ResortIntro'));
const RoomList = lazy(() => import('./pages/RoomList'));
const RoomDetail = lazy(() => import('./pages/RoomDetail'));
const Facilities = lazy(() => import('./pages/Facilities'));
const Events = lazy(() => import('./pages/Events'));
const BookingFlow = lazy(() => import('./pages/BookingFlow'));
const ContactFeedback = lazy(() => import('./pages/ContactFeedback'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin pages (separate chunk)
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const RoomAdmin = lazy(() => import('./pages/RoomAdmin'));
const ReservationAdmin = lazy(() => import('./pages/ReservationAdmin'));
const ReviewAdmin = lazy(() => import('./pages/ReviewAdmin'));
const CouponAdmin = lazy(() => import('./pages/CouponAdmin'));
const UserAdmin = lazy(() => import('./pages/UserAdmin'));

// Animated routes wrapper
function AnimatedRoutes() {
  return (
    <PageTransition>
      <ScrollProgressBar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/intro" element={<ResortIntro />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/rooms/:roomId" element={<RoomDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/events" element={<Events />} />
          <Route path="/booking/*" element={<BookingFlow />} />
          <Route path="/contact" element={<ContactFeedback />} />

          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/rooms" element={<RoomAdmin />} />
          <Route path="/admin/reservations" element={<ReservationAdmin />} />
          <Route path="/admin/reviews" element={<ReviewAdmin />} />
          <Route path="/admin/coupons" element={<CouponAdmin />} />
          <Route path="/admin/users" element={<UserAdmin />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
