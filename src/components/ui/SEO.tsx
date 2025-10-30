import Head from 'next/head';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  article?: boolean;
  schema?: object;
}

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = '/images/og-dubai-digital-marketing.jpg',
  article = false,
  schema,
}: SEOProps) => {
  // Generate full title
  const fullTitle = title.includes('Henry Club') 
    ? title 
    : `${title} | Henry Club Digital Agency Dubai`;

  // Get site URL from environment
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digital.henryclub.ae';
  
  // Generate full canonical URL
  const fullCanonicalUrl = canonicalUrl 
    ? canonicalUrl.startsWith('http') 
      ? canonicalUrl 
      : `${siteUrl}${canonicalUrl}`
    : undefined;

  // Generate full OG image URL
  const fullOgImageUrl = ogImage.startsWith('http') 
    ? ogImage 
    : `${siteUrl}${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="author" content="Henry Club Digital Agency" />

      {/* Canonical URL */}
      {fullCanonicalUrl && <link rel="canonical" href={fullCanonicalUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      {fullCanonicalUrl && <meta property="og:url" content={fullCanonicalUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImageUrl} />
      <meta property="og:site_name" content="Henry Club Digital Agency" />
      <meta property="og:locale" content="en_AE" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImageUrl} />

      {/* Hreflang Tags */}
      {fullCanonicalUrl && (
        <>
          <link rel="alternate" hrefLang="en-ae" href={fullCanonicalUrl} />
          <link rel="alternate" hrefLang="ar-ae" href={fullCanonicalUrl.replace('/en/', '/ar/')} />
        </>
      )}

      {/* Preconnect Links */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://googletagmanager.com" />

      {/* Schema JSON-LD */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
        />
      )}

      {/* Additional SEO Meta Tags for UAE/Dubai */}
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="Dubai, UAE" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />
      
      {/* Language and Direction */}
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-ae" />

      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#D4AF37" />
      <meta name="theme-color" content="#1e40af" />

      {/* Google Analytics and GTM Meta */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <meta name="google-analytics" content={process.env.NEXT_PUBLIC_GA_ID} />
      )}

      {/* Security Headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta name="referrer" content="origin-when-cross-origin" />

      {/* Business Information for Local SEO */}
      <meta name="business:contact_data:street_address" content="Business Center, Sharjah Publishing City" />
      <meta name="business:contact_data:locality" content="Sharjah" />
      <meta name="business:contact_data:region" content="UAE" />
      <meta name="business:contact_data:postal_code" content="" />
      <meta name="business:contact_data:country_name" content="United Arab Emirates" />
      <meta name="business:contact_data:phone_number" content="+971-50-123-4567" />
      <meta name="business:contact_data:website" content={siteUrl} />

      {/* Article-specific meta tags */}
      {article && (
        <>
          <meta property="article:publisher" content="Henry Club Digital Agency" />
          <meta property="article:author" content="Henry Club Digital Agency" />
        </>
      )}
    </Head>
  );
};

export default SEO;