// Schema.org structured data generators for Henry Club Digital Agency

export interface ServiceData {
  name: string;
  description: string;
  url: string;
  price?: string;
  category?: string;
}

export interface ArticleData {
  headline: string;
  author: {
    name: string;
    url?: string;
  };
  datePublished: string;
  dateModified?: string;
  image: {
    url: string;
    width?: number;
    height?: number;
  };
  description?: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generates Organization schema for Henry Club Digital Agency
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Henry Club Digital Agency",
    "alternateName": "Henry Club",
    "description": "Leading digital marketing agency in UAE specializing in web development, SEO services, social media marketing, and Amazon store setup for businesses in Dubai, Sharjah, and across the Emirates.",
    "url": "https://digital.henryclub.ae",
    "logo": {
      "@type": "ImageObject",
      "url": "https://digital.henryclub.ae/images/henry-club-logo.png",
      "width": 300,
      "height": 100
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Center, Sharjah Publishing City",
      "addressLocality": "Sharjah",
      "addressRegion": "SPC Freezone",
      "addressCountry": "UAE",
      "postalCode": ""
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.3463,
      "longitude": 55.4209
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-50-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"],
      "areaServed": "UAE"
    },
    "sameAs": [
      "https://www.facebook.com/henryclub",
      "https://www.instagram.com/henryclub",
      "https://www.linkedin.com/company/henryclub",
      "https://twitter.com/henryclub",
      "https://www.youtube.com/henryclub"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "slogan": "Digital Excellence in the Heart of UAE"
  };
}

/**
 * Generates LocalBusiness schema with business details
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Henry Club Digital Agency",
    "description": "Premier digital marketing and web development agency serving UAE businesses with comprehensive online solutions.",
    "url": "https://digital.henryclub.ae",
    "telephone": "+971-50-123-4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Center, Sharjah Publishing City",
      "addressLocality": "Sharjah",
      "addressRegion": "SPC Freezone",
      "addressCountry": "UAE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.3463,
      "longitude": 55.4209
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "AED",
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    }
  };
}

/**
 * Generates Service schema for individual services
 */
export function generateServiceSchema(service: ServiceData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "url": service.url,
    "provider": {
      "@type": "Organization",
      "name": "Henry Club Digital Agency",
      "url": "https://digital.henryclub.ae",
      "telephone": "+971-50-123-4567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sharjah",
        "addressCountry": "UAE"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": service.url,
      "serviceSmsNumber": "+971-50-123-4567"
    },
    ...(service.price && {
      "offers": {
        "@type": "Offer",
        "price": service.price,
        "priceCurrency": "AED"
      }
    }),
    ...(service.category && {
      "category": service.category
    })
  };
}

/**
 * Generates Article schema for blog posts
 */
export function generateArticleSchema(article: ArticleData) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description || "",
    "url": article.url,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      ...(article.author.url && { "url": article.author.url })
    },
    "publisher": {
      "@type": "Organization",
      "name": "Henry Club Digital Agency",
      "url": "https://digital.henryclub.ae",
      "logo": {
        "@type": "ImageObject",
        "url": "https://digital.henryclub.ae/images/henry-club-logo.png",
        "width": 300,
        "height": 100
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": article.image.url,
      "width": article.image.width || 1200,
      "height": article.image.height || 630
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    },
    "isPartOf": {
      "@type": "Blog",
      "name": "Henry Club Digital Blog",
      "url": "https://digital.henryclub.ae/blog"
    }
  };
}

/**
 * Generates FAQPage schema from FAQ array
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates BreadcrumbList schema from breadcrumb items
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generates WebSite schema for the main website
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Henry Club Digital Agency",
    "alternateName": "Henry Club",
    "url": "https://digital.henryclub.ae",
    "description": "Leading digital marketing agency in UAE providing web development, SEO, social media marketing, and Amazon store setup services.",
    "publisher": {
      "@type": "Organization",
      "name": "Henry Club Digital Agency"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://digital.henryclub.ae/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

/**
 * Generates ContactPage schema
 */
export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Henry Club Digital Agency",
    "description": "Get in touch with Henry Club Digital Agency for your digital marketing and web development needs in UAE.",
    "url": "https://digital.henryclub.ae/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Henry Club Digital Agency",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+971-50-123-4567",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"],
        "areaServed": "UAE"
      }
    }
  };
}

/**
 * Utility function to inject structured data into HTML head
 */
export function injectStructuredData(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

// Common service schemas for Henry Club Digital
export const henryClubServices = {
  webDevelopment: {
    name: "Web Development Dubai",
    description: "Professional web development services in Dubai and UAE. Custom websites, e-commerce solutions, and web applications.",
    url: "https://digital.henryclub.ae/services/web-development-dubai",
    category: "Web Development"
  },
  seoServices: {
    name: "SEO Services Dubai", 
    description: "Expert SEO services in Dubai to improve your website ranking and organic traffic. Local and international SEO solutions.",
    url: "https://digital.henryclub.ae/services/seo-services-dubai",
    category: "Search Engine Optimization"
  },
  digitalMarketing: {
    name: "Digital Marketing UAE",
    description: "Comprehensive digital marketing services across UAE including social media marketing, PPC advertising, and content marketing.",
    url: "https://digital.henryclub.ae/services/digital-marketing-uae", 
    category: "Digital Marketing"
  },
  amazonSetup: {
    name: "Amazon Store Setup UAE",
    description: "Professional Amazon store setup and management services in UAE. Complete Amazon FBA and seller account optimization.",
    url: "https://digital.henryclub.ae/services/amazon-store-setup-uae",
    category: "E-commerce"
  }
};