/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://www.minova.vn',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/admin/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/services/consulting'),
    await config.transform(config, '/services/technology'),
    await config.transform(config, '/services/management'),
    await config.transform(config, '/hotels/the-mansion-hoi-an'),
    await config.transform(config, '/hotels/69-boutique'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://www.minova.vn/sitemap.xml',
    ],
  },
};