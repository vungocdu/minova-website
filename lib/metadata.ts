import type { Metadata } from 'next';
import { siteConfig } from './constants';

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  type?: 'website' | 'article' | 'service' | 'organization';
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  noIndex = false,
  canonicalUrl,
  publishedTime,
  modifiedTime,
  authors,
  type = 'website',
}: GenerateMetadataProps): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const fullImageUrl = metaImage.startsWith('http') ? metaImage : `${siteConfig.url}${metaImage}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...keywords, 'Minova Group', 'hotel consulting', 'hospitality'],
    authors: authors?.map(name => ({ name })) || [{ name: siteConfig.creator }],
    openGraph: {
      type: type === 'article' ? 'article' : 'website',
      locale: 'vi_VN',
      url: canonicalUrl || siteConfig.url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
          type: 'image/jpeg',
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [fullImageUrl],
      creator: siteConfig.social.twitter,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// Specific page metadata generators
export const generateHomeMetadata = (props: Omit<GenerateMetadataProps, 'type'>) =>
  generateMetadata({ ...props, type: 'website' });

export const generateServiceMetadata = (props: Omit<GenerateMetadataProps, 'type'>) =>
  generateMetadata({ ...props, type: 'service' });

export const generateArticleMetadata = (props: Omit<GenerateMetadataProps, 'type'>) =>
  generateMetadata({ ...props, type: 'article' });

// JSON-LD Schema generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.company.name,
    legalName: siteConfig.company.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo.png`,
    description: siteConfig.description,
    foundingDate: siteConfig.company.foundingDate,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address.street,
      addressLocality: siteConfig.company.address.district,
      addressRegion: siteConfig.company.address.city,
      addressCountry: siteConfig.company.address.country,
      postalCode: siteConfig.company.address.postalCode,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.company.contact.phone,
      contactType: 'customer service',
      email: siteConfig.company.contact.email,
      availableLanguage: ['Vietnamese', 'English'],
      areaServed: 'VN',
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.company.name,
    image: `${siteConfig.url}/images/logo/logo.png`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.company.contact.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address.street,
      addressLocality: siteConfig.company.address.district,
      addressRegion: siteConfig.company.address.city,
      postalCode: siteConfig.company.address.postalCode,
      addressCountry: siteConfig.company.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.0285,
      longitude: 105.8542,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    priceRange: '$$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '50',
    },
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  category: string;
  offers?: {
    price?: string;
    currency?: string;
    availability?: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    category: service.category,
    provider: {
      '@type': 'Organization',
      name: siteConfig.company.name,
      url: siteConfig.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Vietnam',
    },
    ...(service.offers && {
      offers: {
        '@type': 'Offer',
        price: service.offers.price,
        priceCurrency: service.offers.currency || 'VND',
        availability: service.offers.availability || 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          name: siteConfig.company.name,
        },
      },
    }),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHotelSchema(hotel: {
  name: string;
  description: string;
  address: string;
  telephone: string;
  url: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  priceRange?: string;
  amenities?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name: hotel.name,
    description: hotel.description,
    url: hotel.url,
    image: hotel.image,
    telephone: hotel.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: hotel.address,
      addressCountry: 'VN',
    },
    ...(hotel.rating && hotel.reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: hotel.rating,
        reviewCount: hotel.reviewCount,
      },
    }),
    ...(hotel.priceRange && { priceRange: hotel.priceRange }),
    ...(hotel.amenities && {
      amenityFeature: hotel.amenities.map(amenity => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity,
      })),
    }),
  };
}

// SEO utils
export function generateCanonicalUrl(path: string): string {
  return `${siteConfig.url}${path}`;
}

export function generateOGImage(
  title: string,
  subtitle?: string,
  template: 'default' | 'service' | 'hotel' | 'project' = 'default'
): string {
  const params = new URLSearchParams({
    title,
    ...(subtitle && { subtitle }),
    template,
  });

  return `${siteConfig.url}/api/og?${params.toString()}`;
}

export function generateSitemap() {
  const routes = [
    '',
    '/services',
    '/services/consulting',
    '/services/technology',
    '/services/management',
    '/hotels',
    '/hotels/the-mansion-hoi-an',
    '/hotels/69-boutique',
    '/projects',
    '/about',
    '/contact',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      route => `
  <url>
    <loc>${siteConfig.url}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return sitemap;
}

export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /.*

Sitemap: ${siteConfig.url}/sitemap.xml
`;
}

// Meta tag helpers
export function generateHreflangTags(currentPath: string) {
  return [
    { rel: 'alternate', hreflang: 'vi', href: `${siteConfig.url}${currentPath}` },
    { rel: 'alternate', hreflang: 'en', href: `${siteConfig.url}/en${currentPath}` },
    { rel: 'alternate', hreflang: 'x-default', href: `${siteConfig.url}${currentPath}` },
  ];
}

// Performance and SEO optimization helpers
export function generatePreloadTags() {
  return [
    { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/WixMadeforDisplay-Regular.woff2', crossOrigin: 'anonymous' },
    { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/WixMadeforDisplay-Medium.woff2', crossOrigin: 'anonymous' },
    { rel: 'preload', as: 'image', href: '/images/hero/hero-image.webp' },
  ];
}

export function generateDNSPrefetchTags() {
  return [
    { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
    { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
    { rel: 'dns-prefetch', href: '//www.googletagmanager.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  ];
}