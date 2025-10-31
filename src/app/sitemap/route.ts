import { NextRequest, NextResponse } from 'next/server';

// Static pages configuration
const staticPages = [
  {
    url: '/',
    priority: 1,
    changefreq: 'weekly'
  },
  {
    url: '/about',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/contact',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    url: '/quote',
    priority: 0.9,
    changefreq: 'monthly'
  },
  {
    url: '/portfolio',
    priority: 0.7,
    changefreq: 'weekly'
  },
  {
    url: '/blog',
    priority: 0.6,
    changefreq: 'daily'
  },
  {
    url: '/newsletter',
    priority: 0.7,
    changefreq: 'monthly'
  }
];

// Service pages configuration
const servicePages = [
  '/services/web-development-dubai',
  '/services/digital-marketing-uae',
  '/services/seo-services-dubai',
  '/services/amazon-store-setup-uae',
  '/services/social-media-marketing',
  '/services/email-marketing'
];

// Base configuration
const baseUrl = 'https://digital.henryclub.ae';

// Mock blog posts data (replace with actual data source in production)
const getBlogPosts = async () => {
  // In production, fetch from your CMS, database, or file system
  // For now, returning mock data structure
  return [
    {
      slug: 'digital-marketing-trends-uae-2024',
      publishedAt: '2024-10-15T10:00:00Z',
      updatedAt: '2024-10-20T14:30:00Z'
    },
    {
      slug: 'seo-best-practices-dubai-businesses',
      publishedAt: '2024-10-10T08:00:00Z',
      updatedAt: '2024-10-10T08:00:00Z'
    },
    {
      slug: 'social-media-marketing-uae-guide',
      publishedAt: '2024-10-05T12:00:00Z',
      updatedAt: '2024-10-08T16:00:00Z'
    },
    {
      slug: 'google-ads-strategies-middle-east',
      publishedAt: '2024-09-30T09:00:00Z',
      updatedAt: '2024-10-01T11:00:00Z'
    },
    {
      slug: 'arabic-content-marketing-tips',
      publishedAt: '2024-09-25T14:00:00Z',
      updatedAt: '2024-09-25T14:00:00Z'
    }
  ];
};

// URL validation function
const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Generate XML sitemap entry
const generateUrlEntry = (url: string, lastmod: string, changefreq: string, priority: number): string => {
  const fullUrl = `${baseUrl}${url}`;
  
  // Validate URL before adding
  if (!isValidUrl(fullUrl)) {
    console.warn(`Invalid URL skipped: ${fullUrl}`);
    return '';
  }

  return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
};

// Format date for sitemap (ISO 8601 format)
const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toISOString().split('T')[0]; // YYYY-MM-DD format
};

export async function GET() {
  try {
    const currentDate = formatDate(new Date());
    const sitemapEntries: string[] = [];

    // Add static pages
    for (const page of staticPages) {
      const entry = generateUrlEntry(
        page.url,
        currentDate,
        page.changefreq,
        page.priority
      );
      if (entry) {
        sitemapEntries.push(entry);
      }
    }

    // Add service pages
    for (const servicePage of servicePages) {
      const entry = generateUrlEntry(
        servicePage,
        currentDate,
        'monthly',
        0.9
      );
      if (entry) {
        sitemapEntries.push(entry);
      }
    }

    // Add dynamic blog posts
    try {
      const blogPosts = await getBlogPosts();
      
      for (const post of blogPosts) {
        const blogUrl = `/blog/${post.slug}`;
        const lastmod = formatDate(post.updatedAt || post.publishedAt);
        
        const entry = generateUrlEntry(
          blogUrl,
          lastmod,
          'monthly',
          0.7
        );
        if (entry) {
          sitemapEntries.push(entry);
        }
      }
    } catch (error) {
      console.error('Error adding blog posts to sitemap:', error);
      // Continue without blog posts if there's an error
    }

    // Generate complete XML sitemap
    const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`;

    // Return XML response with proper headers
    return new NextResponse(xmlSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
        'X-Robots-Tag': 'noindex', // Don't index the sitemap itself
      },
    });

  } catch (error) {
    console.error('Sitemap generation error:', error);
    
    // Return error response
    return new NextResponse(
      `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${formatDate(new Date())}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`,
      {
        status: 500,
        headers: {
          'Content-Type': 'application/xml',
        },
      }
    );
  }
}

// Optional: Add POST method for manual sitemap regeneration (for admin use)
export async function POST(request: NextRequest) {
  try {
    // Verify admin access (in production, add proper authentication)
    const adminKey = request.headers.get('X-Admin-Key');
    
    if (adminKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Trigger sitemap regeneration or cache clearing
    // In production, you might want to:
    // 1. Clear CDN cache
    // 2. Notify search engines of sitemap update
    // 3. Log the regeneration event

    return NextResponse.json({
      success: true,
      message: 'Sitemap regenerated successfully',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Sitemap regeneration error:', error);
    
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}