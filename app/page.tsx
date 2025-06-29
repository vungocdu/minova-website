import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { JsonLd } from '@/components/common/JsonLd';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { siteConfig } from '@/lib/constants';
import { generateMetadata as generateHomeMetadata } from '@/lib/metadata';

// Dynamic imports for better performance
const LiveHotels = dynamic(() => import('@/components/sections/LiveHotels'), {
  loading: () => <div className="h-96 animate-pulse bg-minova-cream/20" />,
});

const Portfolio = dynamic(() => import('@/components/sections/Portfolio'), {
  loading: () => <div className="h-96 animate-pulse bg-minova-cream/20" />,
});

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="h-96 animate-pulse bg-minova-cream/20" />,
});

const Technology = dynamic(() => import('@/components/sections/Technology'), {
  loading: () => <div className="h-96 animate-pulse bg-minova-cream/20" />,
});

const ContactSection = dynamic(() => import('@/components/sections/ContactSection'), {
  loading: () => <div className="h-96 animate-pulse bg-minova-cream/20" />,
});

// Homepage metadata
export const metadata: Metadata = generateHomeMetadata({
  title: 'Minova Group - Chuyên Gia Tư Vấn & Quản Lý Khách Sạn',
  description: 'Minova Group - Đối tác tin cậy giúp chủ đầu tư tối ưu hóa doanh thu và nâng cao giá trị thương hiệu trong lĩnh vực hospitality với công nghệ tiên tiến. Hơn 20 dự án thành công, 50+ nhân sự chuyên nghiệp.',
  keywords: [
    'tư vấn khách sạn Việt Nam',
    'quản lý khách sạn chuyên nghiệp',
    'PMS system khách sạn',
    'booking engine tối ưu',
    'tư vấn kỹ thuật khách sạn',
    'quản lý doanh thu khách sạn',
    'The Mansion Hoi An',
    '69 Boutique Hotel',
    'hospitality consulting Vietnam',
  ],
  openGraph: {
    title: 'Minova Group - Chuyên Gia Tư Vấn & Quản Lý Khách Sạn',
    description: 'Đối tác tin cậy cho thành công bền vững trong ngành hospitality. Từ ý tưởng đến vận hành - Chúng tôi đồng hành cùng bạn trên mọi hành trình.',
    images: [
      {
        url: '/images/og/homepage-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Minova Group - Chuyên gia tư vấn khách sạn hàng đầu Việt Nam',
      },
    ],
  },
});

// Website JSON-LD structured data
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  alternateName: 'The Mansions Vietnam',
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    '@type': 'Organization',
    name: 'Minova Group',
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo/logo.png`,
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  mainEntity: {
    '@type': 'Organization',
    name: 'Minova Group',
    sameAs: [
      'https://www.facebook.com/minovagroup',
      'https://www.linkedin.com/company/minova-group',
    ],
  },
};

// Service JSON-LD data
const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hotel Consulting and Management Services',
  description: 'Comprehensive hotel consulting, technical advisory, and management services for hospitality businesses in Vietnam',
  provider: {
    '@type': 'Organization',
    name: 'Minova Group',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '506A, Tòa nhà Ford Thăng Long, 105 Láng Hạ',
      addressLocality: 'Đống Đa',
      addressRegion: 'Hà Nội',
      addressCountry: 'VN',
    },
    telephone: '+84-24-66636480',
    email: 'info@themansions.vn',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Vietnam',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Minova Group Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical Consulting',
          description: 'Pre-opening technical consulting and design review services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technology Solutions',
          description: 'PMS, booking engine, and channel management technology',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Operations Management',
          description: 'Complete hotel operations and revenue management',
        },
      },
    ],
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: 4.8,
      bestRating: 5,
    },
    author: {
      '@type': 'Person',
      name: 'Hotel Industry Client',
    },
    reviewBody: 'Công cụ này giúp chúng tôi phát hiện và sửa 15+ lỗi disparity mỗi tuần, tăng direct booking 30% trong 3 tháng',
  },
};

// FAQPage JSON-LD data
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Minova Group cung cấp những dịch vụ gì?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Minova Group cung cấp 3 dịch vụ chính: Tư vấn kỹ thuật tiền khai trương, Công nghệ quản lý vận hành (PMS, Booking Engine), và Quản lý vận hành toàn diện cho khách sạn.',
      },
    },
    {
      '@type': 'Question',
      name: 'Minova Group đã thực hiện bao nhiêu dự án?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chúng tôi đã hoàn thành hơn 20 dự án thành công với 50+ nhân sự chuyên nghiệp, bao gồm The Mansion Hoi An, 69 Boutique Hotel, và nhiều dự án khác.',
      },
    },
    {
      '@type': 'Question',
      name: 'Làm thế nào để đặt lịch tư vấn miễn phí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bạn có thể liên hệ qua hotline 02 466 636 480 hoặc email info@themansions.vn để đặt lịch tư vấn miễn phí. Chúng tôi cung cấp đánh giá tài sản, demo công nghệ và phân tích ROI.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      {/* Hero Section - Critical, load immediately */}
      <section
        id="hero"
        aria-label="Giới thiệu Minova Group"
        className="relative"
      >
        <Hero />
      </section>

      {/* Services Section - Important, load immediately */}
      <section
        id="services"
        aria-label="Dịch vụ của Minova Group"
        className="scroll-mt-20"
      >
        <Services />
      </section>

      {/* Live Hotels Section - Load with Suspense */}
      <section
        id="live-hotels"
        aria-label="Khách sạn đang vận hành"
        className="scroll-mt-20"
      >
        <Suspense
          fallback={
            <div className="min-h-[600px] bg-gradient-to-br from-minova-cream-light to-white animate-pulse" />
          }
        >
          <LiveHotels />
        </Suspense>
      </section>

      {/* Portfolio Section - Load with Suspense */}
      <section
        id="portfolio"
        aria-label="Portfolio thành công"
        className="scroll-mt-20"
      >
        <Suspense
          fallback={
            <div className="min-h-[600px] bg-minova-cream-light animate-pulse" />
          }
        >
          <Portfolio />
        </Suspense>
      </section>

      {/* Projects Section - Load with Suspense */}
      <section
        id="completed-projects"
        aria-label="Danh mục dự án đã thực hiện"
        className="scroll-mt-20"
      >
        <Suspense
          fallback={
            <div className="min-h-[600px] bg-white animate-pulse" />
          }
        >
          <Projects />
        </Suspense>
      </section>

      {/* Technology Section - Load with Suspense */}
      <section
        id="technology"
        aria-label="Công nghệ tiên tiến"
        className="scroll-mt-20"
      >
        <Suspense
          fallback={
            <div className="min-h-[600px] bg-white animate-pulse" />
          }
        >
          <Technology />
        </Suspense>
      </section>

      {/* Contact Section - Load with Suspense */}
      <section
        id="contact"
        aria-label="Liên hệ tư vấn"
        className="scroll-mt-20"
      >
        <Suspense
          fallback={
            <div className="min-h-[600px] bg-gradient-to-br from-minova-sage to-minova-sage-light animate-pulse" />
          }
        >
          <ContactSection />
        </Suspense>
      </section>

      {/* Floating Contact Button for mobile */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <a
          href="#contact"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-minova-gold text-minova-charcoal shadow-lg transition-all hover:bg-minova-gold-light hover:scale-110 focus:outline-none focus:ring-2 focus:ring-minova-gold focus:ring-offset-2"
          aria-label="Liên hệ tư vấn"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </a>
      </div>

      {/* Back to top button */}
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-minova-sage text-white shadow-lg transition-all hover:bg-minova-sage-light hover:scale-110 focus:outline-none focus:ring-2 focus:ring-minova-sage focus:ring-offset-2 opacity-0 invisible"
          aria-label="Về đầu trang"
          id="back-to-top"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>

      {/* Client-side scroll behavior */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Show/hide back to top button
            window.addEventListener('scroll', function() {
              const backToTop = document.getElementById('back-to-top');
              if (window.scrollY > 500) {
                backToTop.classList.remove('opacity-0', 'invisible');
                backToTop.classList.add('opacity-100', 'visible');
              } else {
                backToTop.classList.add('opacity-0', 'invisible');
                backToTop.classList.remove('opacity-100', 'visible');
              }
            });

            // Smooth scroll polyfill for older browsers
            if (!('scrollBehavior' in document.documentElement.style)) {
              function smoothScroll(target) {
                const element = document.querySelector(target);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }
              
              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  smoothScroll(this.getAttribute('href'));
                });
              });
            }
          `,
        }}
      />
    </>
  );
}

// Static generation settings
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour