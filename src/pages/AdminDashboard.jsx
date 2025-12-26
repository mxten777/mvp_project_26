import AdminNav from "../components/AdminNav";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 📊 프로페셔널 대시보드 데이터
const kpiData = [
  { 
    id: 'checkin',
    label: "오늘 체크인", 
    value: 12, 
    change: +15.3,
    icon: "🏨",
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
  { 
    id: 'checkout',
    label: "오늘 체크아웃", 
    value: 8, 
    change: -5.2,
    icon: "🚪",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  { 
    id: 'occupancy',
    label: "점유율", 
    value: 87.5, 
    change: +12.8,
    icon: "📈",
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    suffix: "%"
  },
  { 
    id: 'revenue',
    label: "금일 매출", 
    value: 1240, 
    change: +23.7,
    icon: "💰",
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    suffix: "만원"
  },
];

const revenueData = [
  { month: "1월", revenue: 2100, bookings: 145, year: "2025" },
  { month: "2월", revenue: 1890, bookings: 132, year: "2025" },
  { month: "3월", revenue: 2450, bookings: 167, year: "2025" },
  { month: "4월", revenue: 2780, bookings: 189, year: "2025" },
  { month: "5월", revenue: 3200, bookings: 212, year: "2025" },
  { month: "6월", revenue: 3850, bookings: 245, year: "2025" },
  { month: "7월", revenue: 4200, bookings: 267, year: "2025" },
  { month: "8월", revenue: 4100, bookings: 259, year: "2025" },
  { month: "9월", revenue: 3600, bookings: 234, year: "2025" },
  { month: "10월", revenue: 3100, bookings: 201, year: "2025" },
  { month: "11월", revenue: 2800, bookings: 187, year: "2025" },
];

const roomStats = [
  { 
    name: "스탠다드룸", 
    occupancy: 92, 
    revenue: 680, 
    avgRating: 4.3,
    totalRooms: 24,
    availableRooms: 2,
    color: "bg-gradient-to-r from-blue-400 to-blue-500"
  },
  { 
    name: "디럭스룸", 
    occupancy: 78, 
    revenue: 890, 
    avgRating: 4.6,
    totalRooms: 18,
    availableRooms: 4,
    color: "bg-gradient-to-r from-purple-400 to-purple-500"
  },
  { 
    name: "스위트룸", 
    occupancy: 85, 
    revenue: 1200, 
    avgRating: 4.8,
    totalRooms: 12,
    availableRooms: 2,
    color: "bg-gradient-to-r from-emerald-400 to-emerald-500"
  },
  { 
    name: "펜트하우스", 
    occupancy: 100, 
    revenue: 2500, 
    avgRating: 4.9,
    totalRooms: 4,
    availableRooms: 0,
    color: "bg-gradient-to-r from-orange-400 to-orange-500"
  },
];

const recentActivities = [
  { 
    id: 1,
    type: "booking",
    title: "새로운 예약",
    description: "김민수님 - 디럭스룸 (11/15~11/17)",
    time: "5분전",
    icon: "📅",
    priority: "high"
  },
  { 
    id: 2,
    type: "checkin",
    title: "체크인 완료",
    description: "이영희님 - 스위트룸 (11/11~11/13)",
    time: "12분전",
    icon: "🏨",
    priority: "medium"
  },
  { 
    id: 3,
    type: "review",
    title: "새로운 리뷰",
    description: "박철수님 - ⭐⭐⭐⭐⭐ '완벽한 서비스였습니다!'",
    time: "25분전",
    icon: "⭐",
    priority: "low"
  },
  { 
    id: 4,
    type: "maintenance",
    title: "시설 점검 완료",
    description: "스탠다드룸 202호 - 에어컨 정기점검",
    time: "1시간전",
    icon: "🔧",
    priority: "medium"
  },
];

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "객실 재고 부족",
    message: "펜트하우스 객실이 모두 예약되었습니다.",
    time: "방금전"
  },
  {
    id: 2,
    type: "info",
    title: "정기 점검 예정",
    message: "내일 오전 10시 보일러 정기점검이 예정되어 있습니다.",
    time: "30분전"
  },
  {
    id: 3,
    type: "success",
    title: "목표 달성",
    message: "이번 달 매출 목표 105% 달성했습니다!",
    time: "2시간전"
  }
];

// 프로페셔널 대시보드 컴포넌트들
const KPICard = ({ data, isLoading }) => (
  <div className={`${data.bgColor} dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100 dark:border-gray-700 group relative overflow-hidden`}>
    {/* 배경 그라데이션 효과 */}
    <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-20 transition-opacity duration-500`}></div>
    
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${data.color} flex items-center justify-center text-white text-3xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
          {data.icon}
        </div>
        <div className={`flex items-center text-sm font-bold px-3 py-1.5 rounded-full ${
          data.change >= 0 
            ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/50 shadow-emerald-200/50' 
            : 'text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-900/50 shadow-red-200/50'
        } shadow-lg`}>
          <span className="mr-1 text-lg">{data.change >= 0 ? '↗' : '↘'}</span>
          {Math.abs(data.change)}%
        </div>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">{data.label}</p>
        <div className="flex items-baseline space-x-2">
          <p className={`text-4xl sm:text-5xl font-black ${data.textColor} dark:text-white tabular-nums`}>
            {isLoading ? (
              <span className="animate-pulse">...</span>
            ) : (
              <>
                {data.value}
                {data.suffix && <span className="text-2xl ml-1">{data.suffix}</span>}
              </>
            )}
          </p>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">전일 대비 {data.change >= 0 ? '증가' : '감소'}</p>
      </div>
    </div>
  </div>
);

const RevenueChart = ({ data }) => {
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const maxBookings = Math.max(...data.map(d => d.bookings));
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-2">📊 매출 트렌드 분석</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">2025년 월별 매출 및 예약 현황</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-xl">
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg"></div>
            <span className="text-sm font-semibold text-blue-600">매출</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-xl">
            <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-lg"></div>
            <span className="text-sm font-semibold text-emerald-600">예약</span>
          </div>
        </div>
      </div>
      
      <div className="relative">
        {/* 그리드 라인 */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-t border-gray-300"></div>
          ))}
        </div>
        
        <div className="flex items-end space-x-2 sm:space-x-3 h-72 overflow-x-auto pb-4 pt-4 relative">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-shrink-0 group">
              <div className="flex flex-col items-center justify-end h-56 space-y-2 relative">
                {/* 매출 바 */}
                <div 
                  className="w-10 sm:w-12 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400 rounded-t-2xl shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/50 relative overflow-hidden"
                  style={{ 
                    height: `${(item.revenue / maxRevenue) * 180}px`,
                    animation: `slideInUp ${0.5 + index * 0.1}s ease-out`
                  }}
                >
                  {/* 반짝이는 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  
                  {/* 호버 시 툴팁 */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl z-20">
                    <div className="font-bold">{item.revenue}만원</div>
                    <div className="text-gray-300">{item.bookings}건</div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
                  </div>
                </div>
                
                {/* 예약건수 바 */}
                <div 
                  className="w-10 sm:w-12 bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-400 rounded-t-2xl shadow-2xl transition-all duration-500 group-hover:shadow-emerald-500/50 overflow-hidden"
                  style={{ 
                    height: `${(item.bookings / maxBookings) * 100}px`,
                    animation: `slideInUp ${0.6 + index * 0.1}s ease-out`
                  }}
                >
                  {/* 반짝이는 효과 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>
              </div>
              <span className="text-xs sm:text-sm text-gray-700 mt-3 font-bold">{item.month}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* 통계 요약 */}
      <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">총 매출</p>
          <p className="text-xl font-black text-blue-600">
            {data.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}만원
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">총 예약</p>
          <p className="text-xl font-black text-emerald-600">
            {data.reduce((sum, item) => sum + item.bookings, 0).toLocaleString()}건
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">평균 객단가</p>
          <p className="text-xl font-black text-purple-600">
            {Math.round(data.reduce((sum, item) => sum + item.revenue, 0) / data.reduce((sum, item) => sum + item.bookings, 0) * 10).toLocaleString()}만원
          </p>
        </div>
      </div>
    </div>
  );
};

const RoomStatsCard = ({ room }) => (
  <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 group relative overflow-hidden">
    {/* 배경 데코레이션 */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 dark:opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" style={{ backgroundImage: room.color }}></div>
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-black text-gray-800 dark:text-white">{room.name}</h4>
        <div className={`w-16 h-16 rounded-2xl ${room.color} flex items-center justify-center text-white text-xl font-black shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
          {room.occupancy}%
        </div>
      </div>
      
      {/* 점유율 진행바 */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">점유율</span>
          <span className="text-sm font-bold text-gray-800 dark:text-white">{room.occupancy}%</span>
        </div>
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
          <div 
            className={`h-full ${room.color} rounded-full shadow-lg transition-all duration-1000 relative overflow-hidden`}
            style={{ width: `${room.occupancy}%` }}
          >
            {/* 반짝이는 애니메이션 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>
      
      {/* 통계 그리드 */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-semibold">매출</p>
          <p className="text-xl font-black text-blue-600 dark:text-blue-400">{room.revenue}만원</p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-lg">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 font-semibold">평점</p>
          <div className="flex items-center space-x-1">
            <span className="text-xl font-black text-yellow-500">⭐</span>
            <span className="text-xl font-black text-gray-800 dark:text-white">{room.avgRating}</span>
          </div>
        </div>
      </div>
      
      {/* 객실 정보 */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <div>
          <span className="text-xs text-gray-600 dark:text-gray-400">전체 {room.totalRooms}실</span>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-bold shadow-lg ${
          room.availableRooms === 0 
            ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-300' 
            : room.availableRooms <= 2 
            ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-300' 
            : 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300'
        }`}>
          {room.availableRooms === 0 ? '만실' : `${room.availableRooms}실 가능`}
        </div>
      </div>
    </div>
  </div>
);

const ActivityFeed = ({ activities }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">실시간 활동</h3>
    <div className="space-y-4 max-h-80 overflow-y-auto">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
            activity.priority === 'high' ? 'bg-red-100 dark:bg-red-900/50' : 
            activity.priority === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/50' : 'bg-green-100 dark:bg-green-900/50'
          }`}>
            {activity.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800 dark:text-white">{activity.title}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{activity.description}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AlertPanel = ({ alerts }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">알림 센터</h3>
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div key={alert.id} className={`p-4 rounded-xl border-l-4 ${
          alert.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400' :
          alert.type === 'info' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400' :
          'bg-green-50 dark:bg-green-900/20 border-green-400'
        }`}>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-white">{alert.title}</h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{alert.message}</p>
        </div>
      ))}
    </div>
  </div>
);

export default function AdminDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 로딩 시뮬레이션
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  return (
    <Layout>
      <AdminNav />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 💎 프리미엄 헤더 섹션 */}
          <div className="mb-10">
            <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* 배경 장식 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-white">
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full text-sm font-bold mb-4">
                    ⚡ Live Dashboard
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-black mb-3">
                    프로페셔널 대시보드
                  </h1>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">📅</span>
                      <span className="font-semibold">
                        {currentTime.toLocaleDateString('ko-KR', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric',
                          weekday: 'short'
                        })}
                      </span>
                    </div>
                    <span className="hidden sm:block text-white/50">|</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">🕐</span>
                      <span className="font-mono font-bold text-lg">
                        {currentTime.toLocaleTimeString('ko-KR')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-0 flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-xl text-white px-5 py-3 rounded-xl border border-white/30 shadow-lg transition-all duration-300 hover:scale-105 font-semibold">
                    <span>📊</span>
                    <span>리포트</span>
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-gray-50 px-5 py-3 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 font-bold">
                    <span>🔄</span>
                    <span>새로고침</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* KPI 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiData.map((kpi) => (
              <KPICard key={kpi.id} data={kpi} isLoading={isLoading} />
            ))}
          </div>

          {/* 메인 콘텐츠 그리드 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* 매출 차트 (2/3 너비) */}
            <div className="lg:col-span-2">
              <RevenueChart data={revenueData} />
            </div>
            
            {/* 알림 패널 (1/3 너비) */}
            <div>
              <AlertPanel alerts={alerts} />
            </div>
          </div>

          {/* 객실 통계 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {roomStats.map((room) => (
              <RoomStatsCard key={room.name} room={room} />
            ))}
          </div>

          {/* 하단 섹션 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 실시간 활동 - 프리미엄 버전 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-800 dark:text-white">⚡ 실시간 활동</h3>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-300 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  LIVE
                </span>
              </div>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 dark:hover:from-gray-700 dark:hover:to-blue-900/30 transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-700 group">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
                      activity.priority === 'high' ? 'bg-gradient-to-br from-red-500 to-red-600 text-white' : 
                      activity.priority === 'medium' ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-white' : 
                      'bg-gradient-to-br from-green-400 to-green-500 text-white'
                    }`}>
                      {activity.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-800 dark:text-white">{activity.title}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-semibold">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* 빠른 액션 - 프리미엄 버전 */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-500">
              <h3 className="text-2xl font-black text-gray-800 dark:text-white mb-6">🚀 빠른 액션</h3>
              <div className="grid grid-cols-2 gap-4">
                <Link 
                  to="/admin/rooms" 
                  className="group block p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-2xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-2xl hover:shadow-emerald-500/50 transform hover:scale-105 hover:-rotate-1 duration-300 relative overflow-hidden"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">🏨</div>
                    <div className="text-sm font-black">객실 관리</div>
                    <div className="text-xs text-white/80 mt-1">58개 활성</div>
                  </div>
                </Link>
                
                <Link 
                  to="/admin/reservations" 
                  className="group block p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 hover:rotate-1 duration-300 relative overflow-hidden"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">📅</div>
                    <div className="text-sm font-black">예약 관리</div>
                    <div className="text-xs text-white/80 mt-1">142건 진행중</div>
                  </div>
                </Link>
                
                <Link 
                  to="/admin/reviews" 
                  className="group block p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 hover:-rotate-1 duration-300 relative overflow-hidden"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">⭐</div>
                    <div className="text-sm font-black">리뷰 관리</div>
                    <div className="text-xs text-white/80 mt-1">4.8/5.0 평균</div>
                  </div>
                </Link>
                
                <Link 
                  to="/admin/users" 
                  className="group block p-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-2xl hover:shadow-orange-500/50 transform hover:scale-105 hover:rotate-1 duration-300 relative overflow-hidden"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">👥</div>
                    <div className="text-sm font-black">사용자 관리</div>
                    <div className="text-xs text-white/80 mt-1">10,238명 가입</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
