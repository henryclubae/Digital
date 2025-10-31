import { NextResponse } from 'next/server';

export async function GET() {
  // Generate sitemap directly instead of fetching from API route
  // This avoids build-time issues and improves performance
  
  const baseUrl = 'https://digital.henryclub.ae';
  const currentDate = new Date().toISOString().split('T')[0];
  
  // Static pages
  const staticPages = [
    { url: '/', priority: 1, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/quote', priority: 0.9, changefreq: 'monthly' },
    { url: '/portfolio', priority: 0.7, changefreq: 'weekly' },
    { url: '/blog', priority: 0.6, changefreq: 'daily' },
    { url: '/newsletter', priority: 0.7, changefreq: 'monthly' }
  ];
  
  // Service pages
  const servicePages = [
    '/services/web-development-dubai',
    '/services/digital-marketing-uae',
    '/services/seo-services-dubai',
    '/services/amazon-store-setup-uae',
    '/services/social-media-marketing',
    '/services/email-marketing'
  ];
  
  // Generate XML entries
  let xmlEntries = '';
  
  // Add static pages
  for (const page of staticPages) {
    xmlEntries += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
  }
  
  // Add service pages
  for (const servicePage of servicePages) {
    xmlEntries += `  <url>
    <loc>${baseUrl}${servicePage}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
`;
  }
  
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries}</urlset>`;
  
  return new NextResponse(sitemapXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      'X-Robots-Tag': 'noindex',
    },
  });
}