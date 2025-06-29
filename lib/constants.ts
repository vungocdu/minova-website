// Site configuration and constants
export const siteConfig = {
  name: 'Minova Group',
  title: 'Minova Group - Chuyên Gia Tư Vấn & Quản Lý Khách Sạn',
  description: 'Minova Group - Đối tác tin cậy giúp chủ đầu tư tối ưu hóa doanh thu và nâng cao giá trị thương hiệu trong lĩnh vực hospitality với công nghệ tiên tiến.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://www.minova.vn',
  ogImage: '/images/og/og-image.jpg',
  creator: 'Minova Group',
  company: {
    name: 'Minova Group',
    legalName: 'Công ty Cổ phần Minova Group',
    foundingDate: '2019',
    address: {
      street: '506A, Tòa nhà Ford Thăng Long, 105 Láng Hạ',
      district: 'Đống Đa',
      city: 'Hà Nội',
      country: 'Việt Nam',
      postalCode: '100000',
    },
    contact: {
      phone: '+84-24-66636480',
      email: 'info@themansions.vn',
      website: 'www.themansions.vn',
    },
  },
  social: {
    facebook: 'https://www.facebook.com/minovagroup',
    linkedin: 'https://www.linkedin.com/company/minova-group',
    youtube: 'https://www.youtube.com/@minovagroup',
    twitter: '@minovagroup',
  },
  analytics: {
    googleAnalytics: process.env.NEXT_PUBLIC_GA_ID,
    googleTagManager: process.env.NEXT_PUBLIC_GTM_ID,
    facebookPixel: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
} as const;

// Navigation menu items
export const mainNavigation = [
  {
    title: 'Dịch Vụ',
    href: '/services',
    description: 'Các dịch vụ tư vấn và quản lý khách sạn',
    submenu: [
      {
        title: 'Tư Vấn Kỹ Thuật',
        href: '/services/consulting',
        description: 'Tư vấn tiền khai trương và phản biện thiết kế',
      },
      {
        title: 'Công Nghệ Vận Hành',
        href: '/services/technology',
        description: 'PMS, Booking Engine, Channel Manager',
      },
      {
        title: 'Quản Lý Vận Hành',
        href: '/services/management',
        description: 'Quản lý doanh thu và vận hành toàn diện',
      },
    ],
  },
  {
    title: 'Khách Sạn',
    href: '/hotels',
    description: 'Khách sạn đang vận hành',
    submenu: [
      {
        title: 'The Mansion Hoi An',
        href: '/hotels/the-mansion-hoi-an',
        description: 'Boutique villa 8 phòng tại phố cổ Hội An',
      },
      {
        title: '69 Boutique Hotel',
        href: '/hotels/69-boutique',
        description: 'Boutique hotel 20 phòng tại trung tâm Hà Nội',
      },
    ],
  },
  {
    title: 'Dự Án',
    href: '/projects',
    description: 'Portfolio và dự án đã thực hiện',
  },
  {
    title: 'Về Chúng Tôi',
    href: '/about',
    description: 'Câu chuyện và đội ngũ Minova Group',
  },
  {
    title: 'Liên Hệ',
    href: '/contact',
    description: 'Thông tin liên hệ và tư vấn',
  },
] as const;

// Footer navigation
export const footerNavigation = {
  services: [
    { name: 'Tư Vấn Kỹ Thuật', href: '/services/consulting' },
    { name: 'Công Nghệ PMS', href: '/services/technology' },
    { name: 'Quản Lý Vận Hành', href: '/services/management' },
    { name: 'Đào Tạo & Hỗ Trợ', href: '/services/training' },
  ],
  portfolio: [
    { name: 'The Mansion Hoi An', href: '/hotels/the-mansion-hoi-an' },
    { name: '69 Boutique Hotel', href: '/hotels/69-boutique' },
    { name: 'The City Block', href: '/projects/the-city-block' },
    { name: 'Các Dự Án Khác', href: '/projects' },
  ],
  tools: [
    { name: 'OTA Rate Parity Checker', href: 'https://ota.minova.vn' },
    { name: 'Revenue Calculator', href: '/tools/revenue-calculator' },
    { name: 'Market Analysis Tool', href: '/tools/market-analysis' },
    { name: 'ROI Estimator', href: '/tools/roi-estimator' },
  ],
  company: [
    { name: 'Về Chúng Tôi', href: '/about' },
    { name: 'Đội Ngũ', href: '/about/team' },
    { name: 'Tuyển Dụng', href: '/careers' },
    { name: 'Tin Tức', href: '/news' },
    { name: 'Chính Sách Bảo Mật', href: '/privacy' },
    { name: 'Điều Khoản Sử Dụng', href: '/terms' },
  ],
} as const;

// Company statistics
export const companyStats = [
  {
    number: '20+',
    label: 'Dự án thành công',
    description: 'Hơn 20 dự án đa dạng từ tư vấn đến vận hành',
  },
  {
    number: '50+',
    label: 'Nhân sự chuyên nghiệp',
    description: 'Đội ngũ chuyên gia giàu kinh nghiệm',
  },
  {
    number: '88%',
    label: 'Tỷ lệ lấp đầy trung bình',
    description: 'Cao hơn 20% so với thị trường',
  },
] as const;

// Services overview
export const servicesOverview = [
  {
    id: 'consulting',
    title: 'Tư Vấn Kỹ Thuật Tiền Khai Trương',
    description: 'Dịch vụ phản biện thiết kế chuyên sâu và tư vấn kỹ thuật từ góc độ vận hành và kinh doanh.',
    icon: '🎯',
    features: [
      'Phản biện thiết kế kiến trúc & nội thất',
      'Tư vấn hệ thống kỹ thuật',
      'Định hướng thương hiệu & dịch vụ',
      'Thiết kế hạng mục OS&E',
    ],
    href: '/services/consulting',
  },
  {
    id: 'technology',
    title: 'Công Nghệ Quản Lý Vận Hành',
    description: 'Hệ thống PMS, Booking Engine và quản lý kênh tích hợp đầy đủ các OTA hàng đầu.',
    icon: '💻',
    features: [
      'Property Management System',
      'Booking Engine tối ưu chuyển đổi',
      'Channel Manager thời gian thực',
      'Revenue Management AI',
    ],
    href: '/services/technology',
  },
  {
    id: 'management',
    title: 'Quản Lý Vận Hành Toàn Diện',
    description: 'Từ quản lý doanh thu, vận hành front office đến trải nghiệm khách hàng xuất sắc.',
    icon: '📈',
    features: [
      'Quản lý doanh thu & định giá động',
      'Vận hành Front Office chuyên nghiệp',
      'Quản lý trải nghiệm khách hàng',
      'Đào tạo & hỗ trợ liên tục',
    ],
    href: '/services/management',
  },
] as const;

// Live hotels data
export const liveHotels = [
  {
    id: 'the-mansion-hoi-an',
    name: 'The Mansion Hoi An',
    description: 'Villa boutique 8 phòng độc đáo giữa lòng phố cổ Hội An, nơi kiến trúc Đông Dương gặp gỡ tiện nghi hiện đại.',
    location: 'Hội An, Quảng Nam • 8 phòng villa',
    bookingUrl: 'https://tmha.minova.vn',
    highlights: [
      { icon: '⭐', text: '9.2/10 điểm khách hàng' },
      { icon: '🏆', text: 'Michelin Selected 2023' },
      { icon: '🎯', text: '88.5% tỷ lệ lấp đầy' },
    ],
    image: '/images/hotels/mansion-hoi-an.webp',
    status: 'Đang Vận Hành',
  },
  {
    id: '69-boutique',
    name: '69 Boutique by Minova',
    description: 'Boutique hotel 20 phòng tại trung tâm Hà Nội, kết hợp hoàn hảo giữa nghệ thuật đường phố và luxury hospitality.',
    location: 'Hà Nội • 20 phòng boutique',
    bookingUrl: 'https://69bq.minova.vn',
    highlights: [
      { icon: '⭐', text: '9.0/10 Booking.com' },
      { icon: '🎨', text: 'Gallery nghệ thuật' },
      { icon: '📈', text: '85% tỷ lệ lấp đầy' },
    ],
    image: '/images/hotels/69-boutique.webp',
    status: 'Đang Vận Hành',
  },
] as const;

// Portfolio projects
export const portfolioProjects = [
  {
    id: 'mansion-hoi-an',
    title: 'The Mansion Hoi An',
    location: 'Hội An, Quảng Nam • 8 phòng villa',
    stats: [
      { label: 'Tỷ lệ lấp đầy', value: '88.5%' },
      { label: 'ADR', value: '$185' },
      { label: 'Điểm hài lòng', value: '9.2/10' },
    ],
    performance: {
      occupancy: '88.5% (cao hơn 25% so với thị trường)',
      adr: '$185 (cao nhất phân khúc villa)',
      satisfaction: '9.2/10 (trên các OTA)',
      directBooking: '35% (tiết kiệm hoa hồng $50k+/năm)',
      achievement: 'Top 3 villa được đánh giá cao nhất Hội An',
      revpar: 'Tăng 40% so với năm đầu vận hành',
    },
  },
  {
    id: '69-boutique',
    title: '69 Boutique by Minova',
    location: 'Hà Nội • 20 phòng boutique',
    stats: [
      { label: 'Tỷ lệ lấp đầy', value: '85%' },
      { label: 'Doanh thu/tháng', value: '$35k+' },
      { label: 'Booking.com', value: '9.0/10' },
    ],
    performance: {
      occupancy: '85% (trong phân khúc boutique hotel)',
      revenue: '$35,000+ hàng tháng',
      rating: '9.0/10 trên Booking.com',
      retention: '38% tỷ lệ khách quay lại',
      growth: '25% tăng trưởng doanh thu năm-qua-năm',
      directBooking: '28% tỷ lệ đặt phòng trực tiếp',
    },
  },
  {
    id: 'city-block',
    title: 'The City Block',
    location: 'Hà Nội/HCM/Đà Nẵng • Serviced Apartment',
    stats: [
      { label: 'Tỷ lệ lấp đầy', value: '92%' },
      { label: 'Doanh thu/tháng', value: '$45k+' },
      { label: 'ROI/năm', value: '18-22%' },
    ],
    performance: {
      occupancy: '92% (apartment dịch vụ)',
      revenue: '$45,000+ hàng tháng (tất cả chi nhánh)',
      rating: '9.1/10 điểm trung bình OTA',
      locations: 'Trung tâm Hà Nội, HCM, Đà Nẵng',
      roi: '18-22% ROI cho chủ đầu tư',
      costSaving: 'Chi phí vận hành giảm 30% nhờ tự động hóa',
    },
  },
] as const;

// Technology features
export const technologyFeatures = [
  'Hệ thống PMS dựa trên đám mây (99.9% uptime)',
  'Booking Engine thiết kế mobile-first',
  'Channel Manager kết nối thời gian thực',
  'Revenue Management hỗ trợ AI',
  'CRM với góc nhìn 360° khách hàng',
  'Phân tích Business Intelligence',
  'Ứng dụng di động cho nhân viên & khách',
  'Tích hợp IoT & điều khiển phòng thông minh',
] as const;

// Contact information
export const contactInfo = [
  {
    icon: '📍',
    title: 'Trụ Sở Chính',
    content: '506A, Tòa nhà Ford Thăng Long\n105 Láng Hạ, Đống Đa, Hà Nội',
  },
  {
    icon: '📞',
    title: 'Hotline',
    content: '02 466 636 480',
  },
  {
    icon: '✉️',
    title: 'Email',
    content: 'info@themansions.vn',
  },
  {
    icon: '🌐',
    title: 'Website',
    content: 'www.themansions.vn',
  },
] as const;

// Benefits of direct booking
export const bookingBenefits = [
  { icon: '🎁', text: 'Giảm 10-15% so với OTA' },
  { icon: '🍳', text: 'Miễn phí ăn sáng' },
  { icon: '⬆️', text: 'Room upgrade miễn phí' },
  { icon: '📞', text: 'Guest service 24/7' },
] as const;

// SEO keywords
export const seoKeywords = {
  primary: [
    'tư vấn khách sạn',
    'quản lý khách sạn',
    'PMS khách sạn',
    'booking engine',
    'hospitality consulting',
    'Minova Group',
  ],
  secondary: [
    'tư vấn kỹ thuật khách sạn',
    'quản lý doanh thu khách sạn',
    'hệ thống quản lý khách sạn',
    'channel manager',
    'revenue management',
    'hotel technology',
  ],
  long_tail: [
    'tư vấn thiết kế khách sạn Việt Nam',
    'quản lý vận hành khách sạn chuyên nghiệp',
    'phần mềm quản lý khách sạn tốt nhất',
    'tối ưu hóa doanh thu khách sạn',
    'The Mansion Hoi An booking',
    '69 Boutique Hotel Hanoi',
  ],
} as const;

// Common meta descriptions
export const metaDescriptions = {
  homepage: 'Minova Group - Đối tác tin cậy cho thành công bền vững trong ngành hospitality. Tư vấn kỹ thuật, công nghệ PMS và quản lý vận hành khách sạn chuyên nghiệp.',
  services: 'Dịch vụ tư vấn và quản lý khách sạn toàn diện từ Minova Group. Tư vấn kỹ thuật, công nghệ PMS, booking engine và quản lý vận hành.',
  consulting: 'Dịch vụ tư vấn kỹ thuật tiền khai trương chuyên sâu. Phản biện thiết kế, tư vấn hệ thống và định hướng thương hiệu khách sạn.',
  technology: 'Công nghệ quản lý khách sạn tiên tiến. PMS, booking engine, channel manager và revenue management AI từ Minova Group.',
  management: 'Quản lý vận hành khách sạn toàn diện. Quản lý doanh thu, front office và trải nghiệm khách hàng xuất sắc.',
  hotels: 'Khách sạn đang vận hành bởi Minova Group. The Mansion Hoi An và 69 Boutique Hotel với hiệu suất kinh doanh vượt trội.',
  projects: 'Portfolio dự án thành công của Minova Group. Hơn 20 dự án từ tư vấn thiết kế đến quản lý vận hành khách sạn.',
  contact: 'Liên hệ tư vấn miễn phí với Minova Group. Đánh giá tài sản, demo công nghệ và phân tích ROI cho dự án khách sạn.',
} as const;