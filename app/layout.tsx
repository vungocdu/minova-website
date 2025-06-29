import type { Metadata, Viewport } from 'next';
import { EB_Garamond } from 'next/font/google';
import localFont from 'next/font/local';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@/components/common/Analytics';
import { JsonLd } from '@/components/common/JsonLd';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig } from '@/lib/constants';
import '@/styles/globals.css';

// Font configurations
const ebGaramond = EB_Garamond({
  subsets: ['latin', 'vietnamese'],
  variable: '--font-garamond',
  display: 'swap',
  fallback: ['serif'],
});

const wixMadefor = localFont({
  src: [
    {
      path: '../public/fonts/WixMadeforDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/WixMadeforDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/WixMadeforDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/WixMadeforDisplay-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-madefor',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

// Viewport configuration
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F2C962' },
    { media: '(prefers-color-scheme: dark)', color: '#3C3C3C' },
  ],
};

// Metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'tư vấn khách sạn',
    'quản lý khách sạn',
    'PMS system',
    'booking engine',
    'hospitality management',
    'hotel consulting',
    'property management',
    'revenue management',
    'Minova Group',
    'Vietnam hotel consulting',
  ],
  authors: [
    {
      name: 'Minova Group',
      url: 'https://www.themansions.vn',
    },
  ],
  creator: 'Minova Group',
  publisher: 'Minova Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    alternateLocale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Minova Group - Chuyên gia tư vấn & quản lý khách sạn',
        type: 'image/jpeg',
      },
      {
        url: '/images/og/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Minova Group Logo',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: ['/images/og/twitter-image.jpg'],
    creator: '@minovagroup',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/icon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icons/safari-pinned-tab.svg',
        color: '#F2C962',
      },
    ],
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
    languages: {
      'vi-VN': '/',
      'en-US': '/en',
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      'facebook-domain-verification': process.env.NEXT_PUBLIC_FB_VERIFICATION || '',
    },
  },
  category: 'business',
  classification: 'Hotel Management and Consulting Services',
  referrer: 'origin-when-cross-origin',
};

// Organization JSON-LD data
const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Minova Group',
  alternateName: 'The Mansions',
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/logo/logo.png`,
  description: siteConfig.description,
  foundingDate: '2019',
  founders: [
    {
      '@type': 'Person',
      name: 'Minova Group Founders',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '506A, Tòa nhà Ford Thăng Long, 105 Láng Hạ',
    addressLocality: 'Đống Đa',
    addressRegion: 'Hà Nội',
    addressCountry: 'VN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+84-24-66636480',
    contactType: 'customer service',
    availableLanguage: ['Vietnamese', 'English'],
    areaServed: 'VN',
  },
  sameAs: [
    'https://www.facebook.com/minovagroup',
    'https://www.linkedin.com/company/minova-group',
    'https://www.youtube.com/@minovagroup',
  ],
  service: [
    {
      '@type': 'Service',
      name: 'Hotel Consulting',
      description: 'Comprehensive hotel consulting and technical advisory services',
      provider: {
        '@type': 'Organization',
        name: 'Minova Group',
      },
    },
    {
      '@type': 'Service',
      name: 'Property Management System',
      description: 'Advanced PMS and booking engine technology solutions',
      provider: {
        '@type': 'Organization',
        name: 'Minova Group',
      },
    },
    {
      '@type': 'Service',
      name: 'Hotel Operations Management',
      description: 'Complete hotel operations and revenue management services',
      provider: {
        '@type': 'Organization',
        name: 'Minova Group',
      },
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="vi"
      className={`${ebGaramond.variable} ${wixMadefor.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/WixMadeforDisplay-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/WixMadeforDisplay-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Critical CSS for above-the-fold content */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              /* Critical CSS */
              .font-garamond { font-family: var(--font-garamond), serif; }
              .font-madefor { font-family: var(--font-madefor), sans-serif; }
              
              /* Prevent FOUC */
              html { visibility: hidden; opacity: 0; }
              html.wf-active { visibility: visible; opacity: 1; }
              
              /* Loading state */
              body { 
                font-family: var(--font-madefor), system-ui, -apple-system, sans-serif;
                line-height: 1.6;
                color: #3C3C3C;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `,
          }}
        />
      </head>
      <body 
        className="min-h-screen bg-white font-madefor text-minova-charcoal antialiased"
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-minova-gold text-minova-charcoal px-4 py-2 rounded-md font-medium"
        >
          Chuyển đến nội dung chính
        </a>

        {/* Structured Data */}
        <JsonLd data={organizationData} />

        {/* Layout Components */}
        <Header />
        
        <main 
          id="main-content" 
          className="flex-1"
          role="main"
        >
          {children}
        </main>
        
        <Footer />

        {/* Toast Notifications */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#F2C962',
              color: '#3C3C3C',
              fontFamily: 'var(--font-madefor)',
              fontWeight: '500',
            },
            success: {
              style: {
                background: '#5A7A6B',
                color: 'white',
              },
            },
            error: {
              style: {
                background: '#B85450',
                color: 'white',
              },
            },
          }}
        />

        {/* Analytics */}
        <Analytics />

        {/* Performance monitoring script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove loading state once fonts are loaded
              if (document.fonts) {
                document.fonts.ready.then(() => {
                  document.documentElement.classList.add('wf-active');
                });
              } else {
                // Fallback for older browsers
                setTimeout(() => {
                  document.documentElement.classList.add('wf-active');
                }, 100);
              }

              // Critical performance metrics
              window.addEventListener('load', () => {
                // Measure Core Web Vitals
                if ('PerformanceObserver' in window) {
                  // LCP (Largest Contentful Paint)
                  new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    console.log('LCP:', lastEntry.startTime);
                  }).observe({ entryTypes: ['largest-contentful-paint'] });

                  // FID (First Input Delay)
                  new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                      console.log('FID:', entry.processingStart - entry.startTime);
                    }
                  }).observe({ entryTypes: ['first-input'] });

                  // CLS (Cumulative Layout Shift)
                  new PerformanceObserver((entryList) => {
                    let clsValue = 0;
                    for (const entry of entryList.getEntries()) {
                      if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                      }
                    }
                    console.log('CLS:', clsValue);
                  }).observe({ entryTypes: ['layout-shift'] });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

// Error Boundary for this layout
export function generateStaticParams() {
  return [];
}

// Revalidate this layout every 24 hours
export const revalidate = 86400;