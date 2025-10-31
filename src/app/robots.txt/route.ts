import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://digital.henryclub.ae';
  
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /api/
Disallow: /admin/
Disallow: /_next/
Disallow: /.*

# Allow important pages
Allow: /services/
Allow: /blog/
Allow: /about
Allow: /contact
Allow: /quote
Allow: /portfolio
Allow: /newsletter

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for respectful crawling
Crawl-delay: 1

# Specific rules for different bots
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot  
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /

# Block unwanted bots
User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /
`;

  return new NextResponse(robotsTxt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400', // Cache for 24 hours
    },
  });
}