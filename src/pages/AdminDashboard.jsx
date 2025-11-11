import AdminNav from "../components/AdminNav";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

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
  <div className={`${data.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group`}>
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${data.color} flex items-center justify-center text-white text-xl shadow-lg`}>
          {data.icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{data.label}</p>
          <div className="flex items-center space-x-2">
            <p className={`text-3xl font-bold ${data.textColor}`}>
              {isLoading ? "..." : data.value}{data.suffix || ""}
            </p>
            <div className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
              data.change >= 0 
                ? 'text-emerald-700 bg-emerald-100' 
                : 'text-red-700 bg-red-100'
            }`}>
              <span className="mr-1">{data.change >= 0 ? '↗' : '↘'}</span>
              {Math.abs(data.change)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const RevenueChart = ({ data }) => {
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">매출 트렌드</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600">매출</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
            <span className="text-sm text-gray-600">예약건수</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-end space-x-2 h-64 overflow-x-auto pb-4">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-shrink-0 group">
            <div className="flex flex-col items-center justify-end h-48 space-y-1">
              {/* 매출 바 */}
              <div 
                className="w-8 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg shadow-lg transition-all duration-300 group-hover:shadow-xl relative"
                style={{ height: `${(item.revenue / maxRevenue) * 160}px` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {item.revenue}만원
                </div>
              </div>
              
              {/* 예약건수 바 */}
              <div 
                className="w-8 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg shadow-lg transition-all duration-300 group-hover:shadow-xl"
                style={{ height: `${(item.bookings / 300) * 80}px` }}
              >
              </div>
            </div>
            <span className="text-xs text-gray-600 mt-2 font-medium">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const RoomStatsCard = ({ room }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <h4 className="text-lg font-bold text-gray-800">{room.name}</h4>
      <div className={`w-12 h-12 rounded-xl ${room.color} flex items-center justify-center text-white font-bold shadow-lg`}>
        {room.occupancy}%
      </div>
    </div>
    
    <div className="space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">점유율</span>
        <div className="flex items-center space-x-2">
          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${room.color} transition-all duration-500`}
              style={{ width: `${room.occupancy}%` }}
            ></div>
          </div>
          <span className="text-sm font-semibold text-gray-700">{room.occupancy}%</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">일 매출</span>
        <span className="text-sm font-semibold text-gray-700">{room.revenue}만원</span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">평점</span>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">⭐</span>
          <span className="text-sm font-semibold text-gray-700">{room.avgRating}</span>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">잔여객실</span>
        <span className={`text-sm font-semibold ${room.availableRooms === 0 ? 'text-red-600' : 'text-emerald-600'}`}>
          {room.availableRooms}/{room.totalRooms}
        </span>
      </div>
    </div>
  </div>
);

const ActivityFeed = ({ activities }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
    <h3 className="text-xl font-bold text-gray-800 mb-6">실시간 활동</h3>
    <div className="space-y-4 max-h-80 overflow-y-auto">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
            activity.priority === 'high' ? 'bg-red-100' : 
            activity.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
          }`}>
            {activity.icon}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-800">{activity.title}</p>
            <p className="text-sm text-gray-600 truncate">{activity.description}</p>
            <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const AlertPanel = ({ alerts }) => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
    <h3 className="text-xl font-bold text-gray-800 mb-6">알림 센터</h3>
    <div className="space-y-3">
      {alerts.map((alert) => (
        <div key={alert.id} className={`p-4 rounded-xl border-l-4 ${
          alert.type === 'warning' ? 'bg-yellow-50 border-yellow-400' :
          alert.type === 'info' ? 'bg-blue-50 border-blue-400' :
          'bg-green-50 border-green-400'
        }`}>
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-800">{alert.title}</h4>
            <span className="text-xs text-gray-500">{alert.time}</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{alert.message}</p>
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
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 헤더 섹션 */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  프로페셔널 대시보드
                </h1>
                <p className="text-gray-600">
                  바이칼 리조트 관리시스템 - {currentTime.toLocaleDateString('ko-KR', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    weekday: 'long'
                  })} {currentTime.toLocaleTimeString('ko-KR')}
                </p>
              </div>
              <div className="mt-4 sm:mt-0 flex space-x-3">
                <button className="bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg border border-gray-300 shadow-sm transition-colors">
                  📊 리포트 생성
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg shadow-lg transition-all">
                  🔄 새로고침
                </button>
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
            {/* 실시간 활동 */}
            <ActivityFeed activities={recentActivities} />
            
            {/* 추가 통계 또는 빠른 액션 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">빠른 액션</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg">
                  <div className="text-2xl mb-2">🏨</div>
                  <div className="text-sm font-semibold">객실 관리</div>
                </button>
                <button className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg">
                  <div className="text-2xl mb-2">📅</div>
                  <div className="text-sm font-semibold">예약 관리</div>
                </button>
                <button className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg">
                  <div className="text-2xl mb-2">⭐</div>
                  <div className="text-sm font-semibold">리뷰 관리</div>
                </button>
                <button className="p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg">
                  <div className="text-2xl mb-2">👥</div>
                  <div className="text-sm font-semibold">사용자 관리</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
