// Services Data for Henry Club Digital - UAE Market Focus

export interface ServicePricingTier {
  name: string;
  price: number;
  currency?: string;
  popular?: boolean;
  features: string[];
  description?: string;
}

export interface ServiceProcess {
  step: number;
  title: string;
  description: string;
  duration: string;
  deliverables?: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  pricing: ServicePricingTier[];
  benefits: string[];
  process: ServiceProcess[];
  timeline: string;
  deliverables: string[];
  faqs: ServiceFAQ[];
  category: 'development' | 'marketing' | 'ecommerce' | 'seo' | 'social-media' | 'email';
  icon: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'web-development-dubai',
    title: 'Web Development Dubai',
    slug: 'web-development-dubai',
    shortDescription: 'Custom websites built for UAE market with Arabic support and mobile-first design',
    fullDescription: 'Professional web development services tailored for Dubai and UAE businesses. We create modern, responsive websites with Arabic language support, UAE payment gateway integration, and mobile-first design optimized for the Middle East market.',
    features: [
      'Mobile-First Design',
      'Arabic Language Support',
      'E-commerce Integration',
      'SEO Optimization',
      'Performance Optimized',
      'Payment Gateway Integration',
      'Analytics Setup',
      '24/7 Support'
    ],
    pricing: [
      {
        name: 'Startup',
        price: 5000,
        currency: 'AED',
        features: [
          '5 Pages',
          'Responsive Design',
          'Basic SEO',
          'Contact Forms',
          '3 Months Support'
        ],
        description: 'Perfect for small businesses and startups'
      },
      {
        name: 'Business',
        price: 12000,
        currency: 'AED',
        popular: true,
        features: [
          '10 Pages',
          'Advanced SEO',
          'E-commerce Ready',
          'Payment Integration',
          'Arabic Support',
          '6 Months Support',
          'Google Analytics',
          'Social Media Integration'
        ],
        description: 'Most popular for growing businesses'
      },
      {
        name: 'Enterprise',
        price: 25000,
        currency: 'AED',
        features: [
          'Unlimited Pages',
          'Custom Development',
          'Advanced E-commerce',
          'Multi-language Support',
          'API Integration',
          '12 Months Support',
          'Advanced Analytics',
          'Performance Monitoring',
          'Security Features'
        ],
        description: 'Complete solution for large businesses'
      }
    ],
    benefits: [
      'Increased online presence in UAE market',
      'Mobile-optimized for high mobile usage in region',
      'Arabic language support for local customers',
      'Local payment gateway integration',
      'SEO optimized for Dubai search market',
      'Fast loading times with regional hosting',
      'GDPR and UAE data compliance',
      'Ongoing technical support'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'Business analysis and strategy discussion',
        duration: '1-2 days',
        deliverables: ['Project scope', 'Technical requirements', 'Timeline']
      },
      {
        step: 2,
        title: 'Design & Wireframing',
        description: 'UI/UX design tailored for UAE market',
        duration: '3-5 days',
        deliverables: ['Wireframes', 'Design mockups', 'User flow']
      },
      {
        step: 3,
        title: 'Development',
        description: 'Frontend and backend development',
        duration: '1-3 weeks',
        deliverables: ['Responsive website', 'CMS setup', 'Testing']
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Quality assurance and deployment',
        duration: '2-3 days',
        deliverables: ['Live website', 'Training', 'Documentation']
      }
    ],
    timeline: '2-4 weeks',
    deliverables: [
      'Fully responsive website',
      'Content Management System',
      'SEO optimization setup',
      'Google Analytics integration',
      'Training materials',
      'Technical documentation',
      '3-12 months support'
    ],
    faqs: [
      {
        question: 'Do you provide Arabic language support?',
        answer: 'Yes, we specialize in bilingual websites with proper Arabic RTL support and cultural localization for the UAE market.'
      },
      {
        question: 'Can you integrate UAE payment gateways?',
        answer: 'Absolutely! We integrate popular UAE payment solutions like PayFort (Amazon Payment Services), Network International, and local bank gateways.'
      },
      {
        question: 'Is the website optimized for mobile users?',
        answer: 'Yes, all our websites are mobile-first designed, considering that over 90% of UAE users browse on mobile devices.'
      },
      {
        question: 'Do you provide ongoing support?',
        answer: 'Yes, we offer comprehensive support packages ranging from 3 to 12 months, including updates, security, and technical assistance.'
      }
    ],
    category: 'development',
    icon: '🌐',
    featured: true
  },
  {
    id: 'digital-marketing-uae',
    title: 'Digital Marketing UAE',
    slug: 'digital-marketing-uae',
    shortDescription: 'Complete digital marketing solutions for UAE businesses with local market expertise',
    fullDescription: 'Comprehensive digital marketing services designed specifically for the UAE market. We understand local consumer behavior, cultural nuances, and platform preferences to drive maximum ROI for your business.',
    features: [
      'Google Ads Management',
      'Social Media Marketing',
      'Content Marketing',
      'Email Campaigns',
      'Influencer Partnerships',
      'Local SEO',
      'Analytics & Reporting',
      'Conversion Optimization'
    ],
    pricing: [
      {
        name: 'Starter',
        price: 3000,
        currency: 'AED',
        features: [
          'Google Ads Setup',
          '2 Social Platforms',
          'Monthly Reporting',
          'Basic Analytics',
          '10 Posts/Month'
        ],
        description: 'Get started with digital presence'
      },
      {
        name: 'Growth',
        price: 8000,
        currency: 'AED',
        popular: true,
        features: [
          'Multi-Platform Ads',
          '4 Social Platforms',
          'Content Creation',
          'Influencer Outreach',
          'Weekly Reporting',
          'A/B Testing',
          '20 Posts/Month'
        ],
        description: 'Accelerate your business growth'
      },
      {
        name: 'Enterprise',
        price: 18000,
        currency: 'AED',
        features: [
          'Full Campaign Management',
          'All Major Platforms',
          'Custom Content Studio',
          'Dedicated Account Manager',
          'Real-time Reporting',
          'Advanced Analytics',
          'Unlimited Content',
          'Priority Support'
        ],
        description: 'Complete marketing solution'
      }
    ],
    benefits: [
      'Increased brand awareness in UAE market',
      'Higher quality leads and conversions',
      'Cultural and language-appropriate campaigns',
      'Platform optimization for regional preferences',
      'Measurable ROI and performance tracking',
      'Competitive advantage in local market',
      'Multi-channel customer engagement',
      'Expert knowledge of UAE regulations'
    ],
    process: [
      {
        step: 1,
        title: 'Market Analysis',
        description: 'UAE market research and competitor analysis',
        duration: '2-3 days',
        deliverables: ['Market insights', 'Competitor analysis', 'Strategy document']
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Customized marketing strategy for UAE audience',
        duration: '3-5 days',
        deliverables: ['Marketing strategy', 'Content plan', 'Campaign timeline']
      },
      {
        step: 3,
        title: 'Campaign Setup',
        description: 'Platform setup and campaign configuration',
        duration: '1 week',
        deliverables: ['Ad accounts setup', 'Tracking implementation', 'Initial campaigns']
      },
      {
        step: 4,
        title: 'Optimization & Reporting',
        description: 'Ongoing optimization and performance tracking',
        duration: 'Ongoing',
        deliverables: ['Regular reports', 'Optimizations', 'Strategy updates']
      }
    ],
    timeline: '2-3 weeks setup + ongoing',
    deliverables: [
      'Complete marketing strategy',
      'Campaign setup across platforms',
      'Content creation and scheduling',
      'Performance tracking dashboard',
      'Monthly performance reports',
      'Optimization recommendations',
      'Ongoing support and management'
    ],
    faqs: [
      {
        question: 'Which platforms work best in the UAE?',
        answer: 'Instagram, Facebook, YouTube, and LinkedIn perform exceptionally well in the UAE. We also leverage TikTok and Snapchat for younger demographics.'
      },
      {
        question: 'Do you create Arabic content?',
        answer: 'Yes, we have native Arabic speakers who create culturally relevant content that resonates with local audiences.'
      },
      {
        question: 'How do you measure campaign success?',
        answer: 'We track KPIs like reach, engagement, conversions, ROI, and cost per acquisition. We provide detailed monthly reports with actionable insights.'
      },
      {
        question: 'Can you work with our existing team?',
        answer: 'Absolutely! We collaborate seamlessly with internal marketing teams and provide training and knowledge transfer as needed.'
      }
    ],
    category: 'marketing',
    icon: '📊',
    featured: true
  },
  {
    id: 'seo-services-dubai',
    title: 'SEO Services Dubai',
    slug: 'seo-services-dubai',
    shortDescription: 'Dominate Dubai search results with our specialized local and international SEO strategies',
    fullDescription: 'Expert SEO services focused on Dubai and UAE market dynamics. We understand local search behavior, Arabic keyword optimization, and regional competition to get your business ranking on the first page of Google.',
    features: [
      'Local SEO Dubai',
      'Arabic Keyword Research',
      'Technical SEO Audit',
      'Content Optimization',
      'Link Building',
      'Google My Business',
      'Schema Markup',
      'Performance Monitoring'
    ],
    pricing: [
      {
        name: 'Local',
        price: 2500,
        currency: 'AED',
        features: [
          'Local SEO Setup',
          'Google My Business',
          '10 Target Keywords',
          'Monthly Reports',
          'Basic Link Building'
        ],
        description: 'Perfect for local Dubai businesses'
      },
      {
        name: 'Regional',
        price: 6000,
        currency: 'AED',
        popular: true,
        features: [
          'UAE-wide SEO',
          'Arabic Optimization',
          '30 Target Keywords',
          'Technical SEO',
          'Content Creation',
          'Advanced Link Building',
          'Bi-weekly Reports'
        ],
        description: 'Dominate UAE search results'
      },
      {
        name: 'International',
        price: 12000,
        currency: 'AED',
        features: [
          'Global SEO Strategy',
          'Multi-language SEO',
          'Unlimited Keywords',
          'Advanced Technical SEO',
          'Content Marketing',
          'Competitor Analysis',
          'Weekly Reports',
          'Dedicated SEO Specialist'
        ],
        description: 'International market expansion'
      }
    ],
    benefits: [
      'Higher search engine rankings in Dubai/UAE',
      'Increased organic website traffic',
      'Better local visibility for UAE customers',
      'Improved conversion rates',
      'Long-term sustainable growth',
      'Competitive advantage in search results',
      'Enhanced brand credibility',
      'Cost-effective lead generation'
    ],
    process: [
      {
        step: 1,
        title: 'SEO Audit & Analysis',
        description: 'Comprehensive website and competitor analysis',
        duration: '3-5 days',
        deliverables: ['Technical audit report', 'Keyword research', 'Competitor analysis']
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Custom SEO strategy for Dubai market',
        duration: '2-3 days',
        deliverables: ['SEO strategy document', 'Content plan', 'Timeline']
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Technical optimizations and content creation',
        duration: '2-4 weeks',
        deliverables: ['Technical fixes', 'Optimized content', 'Local listings']
      },
      {
        step: 4,
        title: 'Monitoring & Optimization',
        description: 'Ongoing tracking and improvements',
        duration: 'Ongoing',
        deliverables: ['Regular reports', 'Ranking updates', 'Strategy adjustments']
      }
    ],
    timeline: '1-2 weeks setup + 3-6 months for results',
    deliverables: [
      'Complete SEO audit report',
      'Keyword research and strategy',
      'Technical SEO optimizations',
      'Content optimization',
      'Local SEO setup',
      'Monthly ranking reports',
      'Ongoing optimization'
    ],
    faqs: [
      {
        question: 'How long does it take to see SEO results?',
        answer: 'Typically 3-6 months for significant improvements. Local SEO results can be seen faster, often within 4-8 weeks for Dubai-based searches.'
      },
      {
        question: 'Do you optimize for Arabic keywords?',
        answer: 'Yes, we specialize in Arabic keyword research and optimization, understanding the nuances of Arabic search behavior in the UAE.'
      },
      {
        question: 'Can you help with Google My Business?',
        answer: 'Absolutely! We optimize your Google My Business profile for maximum local visibility in Dubai and surrounding emirates.'
      },
      {
        question: 'Do you guarantee first page rankings?',
        answer: 'While we cannot guarantee specific rankings due to Google algorithm changes, we have a proven track record of achieving first page results for our Dubai clients.'
      }
    ],
    category: 'seo',
    icon: '🔍',
    featured: true
  },
  {
    id: 'amazon-store-setup-uae',
    title: 'Amazon Store Setup UAE',
    slug: 'amazon-store-setup-uae',
    shortDescription: 'Complete Amazon seller account setup and optimization for UAE marketplace success',
    fullDescription: 'Professional Amazon seller services for the UAE market. From account setup to product optimization, we help businesses succeed on Amazon.ae with proven strategies for the Middle East e-commerce landscape.',
    features: [
      'Seller Account Setup',
      'Product Listing Optimization',
      'Inventory Management',
      'PPC Campaign Management',
      'Brand Registry',
      'A+ Content Creation',
      'Review Management',
      'Performance Analytics'
    ],
    pricing: [
      {
        name: 'Startup',
        price: 4000,
        currency: 'AED',
        features: [
          'Account Setup',
          '10 Product Listings',
          'Basic Optimization',
          'Initial PPC Setup',
          '1 Month Support'
        ],
        description: 'Launch your Amazon presence'
      },
      {
        name: 'Growth',
        price: 10000,
        currency: 'AED',
        popular: true,
        features: [
          'Complete Store Setup',
          '50 Product Listings',
          'Advanced Optimization',
          'PPC Management',
          'Brand Registry',
          'A+ Content',
          '3 Months Support'
        ],
        description: 'Scale your Amazon business'
      },
      {
        name: 'Enterprise',
        price: 20000,
        currency: 'AED',
        features: [
          'Full Service Management',
          'Unlimited Listings',
          'Advanced PPC Strategies',
          'Inventory Management',
          'Brand Protection',
          'Enhanced Content',
          'Dedicated Account Manager',
          '6 Months Support'
        ],
        description: 'Complete Amazon domination'
      }
    ],
    benefits: [
      'Access to millions of UAE customers',
      'Reduced time to market',
      'Professional storefront presence',
      'Optimized for Amazon algorithm',
      'Increased sales and visibility',
      'Brand protection and registry',
      'Data-driven growth strategies',
      'Ongoing performance optimization'
    ],
    process: [
      {
        step: 1,
        title: 'Account & Legal Setup',
        description: 'Amazon seller account and UAE business registration',
        duration: '3-5 days',
        deliverables: ['Seller account', 'Legal documentation', 'Tax setup']
      },
      {
        step: 2,
        title: 'Product Research & Listing',
        description: 'Market research and product listing optimization',
        duration: '1-2 weeks',
        deliverables: ['Market analysis', 'Optimized listings', 'Keyword research']
      },
      {
        step: 3,
        title: 'Store Optimization',
        description: 'Storefront design and brand setup',
        duration: '1 week',
        deliverables: ['Brand registry', 'Store design', 'A+ content']
      },
      {
        step: 4,
        title: 'Launch & Management',
        description: 'PPC campaigns and performance monitoring',
        duration: 'Ongoing',
        deliverables: ['PPC campaigns', 'Performance reports', 'Optimizations']
      }
    ],
    timeline: '2-3 weeks setup + ongoing management',
    deliverables: [
      'Complete Amazon seller account',
      'Optimized product listings',
      'Professional storefront',
      'PPC campaign setup',
      'Brand registry and protection',
      'Performance tracking dashboard',
      'Monthly optimization reports'
    ],
    faqs: [
      {
        question: 'What documents are needed for Amazon UAE?',
        answer: 'You need UAE trade license, bank account, tax registration, and identity documents. We guide you through the entire documentation process.'
      },
      {
        question: 'How much inventory should I start with?',
        answer: 'We recommend starting with 2-3 months of inventory based on projected sales. Our team helps calculate optimal inventory levels.'
      },
      {
        question: 'Can you handle FBA setup?',
        answer: 'Yes, we manage the complete Fulfillment by Amazon setup, including inventory planning, shipping, and warehouse coordination.'
      },
      {
        question: 'How do you optimize product listings?',
        answer: 'We use data-driven keyword research, compelling copy, high-quality images, and A+ content to maximize conversion rates and visibility.'
      }
    ],
    category: 'ecommerce',
    icon: '📦',
    featured: false
  },
  {
    id: 'social-media-marketing-uae',
    title: 'Social Media Marketing UAE',
    slug: 'social-media-marketing-uae',
    shortDescription: 'Engage UAE audiences with culturally relevant social media strategies across all platforms',
    fullDescription: 'Specialized social media marketing for UAE businesses. We create engaging content that resonates with local culture, manages community interactions, and drives meaningful engagement across Instagram, Facebook, TikTok, and LinkedIn.',
    features: [
      'Content Strategy',
      'Visual Content Creation',
      'Community Management',
      'Influencer Partnerships',
      'Social Media Ads',
      'Analytics & Insights',
      'Crisis Management',
      'Multi-Platform Management'
    ],
    pricing: [
      {
        name: 'Essential',
        price: 2000,
        currency: 'AED',
        features: [
          '2 Social Platforms',
          '15 Posts/Month',
          'Basic Graphics',
          'Monthly Reports',
          'Community Management'
        ],
        description: 'Start your social presence'
      },
      {
        name: 'Professional',
        price: 5000,
        currency: 'AED',
        popular: true,
        features: [
          '4 Social Platforms',
          '30 Posts/Month',
          'Custom Graphics & Videos',
          'Story Management',
          'Influencer Outreach',
          'Paid Ads Management',
          'Weekly Reports'
        ],
        description: 'Comprehensive social strategy'
      },
      {
        name: 'Premium',
        price: 10000,
        currency: 'AED',
        features: [
          'All Major Platforms',
          'Unlimited Content',
          'Professional Photography',
          'Video Production',
          'Advanced Analytics',
          'Crisis Management',
          'Dedicated Social Manager',
          'Real-time Monitoring'
        ],
        description: 'Complete social domination'
      }
    ],
    benefits: [
      'Increased brand awareness in UAE',
      'Higher engagement with local audience',
      'Cultural relevance and sensitivity',
      'Multi-language content support',
      'Influencer network access',
      'Real-time customer interaction',
      'Improved brand loyalty',
      'Measurable social ROI'
    ],
    process: [
      {
        step: 1,
        title: 'Social Audit & Strategy',
        description: 'Analysis of current presence and competitor research',
        duration: '2-3 days',
        deliverables: ['Social audit report', 'Strategy document', 'Content calendar']
      },
      {
        step: 2,
        title: 'Content Planning',
        description: 'Content strategy and visual brand guidelines',
        duration: '1 week',
        deliverables: ['Content strategy', 'Visual guidelines', 'Publishing schedule']
      },
      {
        step: 3,
        title: 'Content Creation',
        description: 'Production of engaging visual and written content',
        duration: 'Ongoing',
        deliverables: ['Graphics and videos', 'Copy and captions', 'Stories content']
      },
      {
        step: 4,
        title: 'Management & Optimization',
        description: 'Daily posting, engagement, and performance tracking',
        duration: 'Ongoing',
        deliverables: ['Daily management', 'Engagement responses', 'Performance reports']
      }
    ],
    timeline: '1 week setup + ongoing management',
    deliverables: [
      'Social media strategy document',
      'Content calendar and planning',
      'Daily content creation and posting',
      'Community management',
      'Performance analytics dashboard',
      'Monthly optimization reports',
      'Crisis management protocols'
    ],
    faqs: [
      {
        question: 'Which social platforms are most effective in the UAE?',
        answer: 'Instagram and TikTok have the highest engagement rates, while LinkedIn works well for B2B. We tailor platform selection to your target audience.'
      },
      {
        question: 'Do you create content in Arabic?',
        answer: 'Yes, we have native Arabic content creators who understand cultural nuances and create authentic, engaging Arabic content.'
      },
      {
        question: 'How often should we post on social media?',
        answer: 'We recommend 3-5 posts per week for Instagram, daily stories, and platform-specific frequencies optimized for UAE audience engagement patterns.'
      },
      {
        question: 'Can you manage influencer partnerships?',
        answer: 'Absolutely! We have relationships with UAE micro and macro influencers and manage end-to-end influencer campaigns.'
      }
    ],
    category: 'social-media',
    icon: '📱',
    featured: false
  },
  {
    id: 'email-marketing-uae',
    title: 'Email Marketing UAE',
    slug: 'email-marketing-uae',
    shortDescription: 'Build lasting customer relationships with personalized email campaigns designed for UAE market',
    fullDescription: 'Strategic email marketing services tailored for UAE businesses. From welcome sequences to conversion campaigns, we create personalized email experiences that drive engagement and sales while complying with regional regulations.',
    features: [
      'Email Strategy Development',
      'List Building & Segmentation',
      'Campaign Design & Copy',
      'Automation Workflows',
      'A/B Testing',
      'Performance Analytics',
      'GDPR Compliance',
      'Multi-language Support'
    ],
    pricing: [
      {
        name: 'Starter',
        price: 1500,
        currency: 'AED',
        features: [
          'Up to 5,000 Contacts',
          '4 Campaigns/Month',
          'Basic Templates',
          'Monthly Reports',
          'Email Support'
        ],
        description: 'Perfect for small businesses'
      },
      {
        name: 'Growth',
        price: 4000,
        currency: 'AED',
        popular: true,
        features: [
          'Up to 25,000 Contacts',
          'Unlimited Campaigns',
          'Custom Design',
          'Automation Workflows',
          'A/B Testing',
          'Advanced Analytics',
          'Phone Support'
        ],
        description: 'Scale your email marketing'
      },
      {
        name: 'Enterprise',
        price: 8000,
        currency: 'AED',
        features: [
          'Unlimited Contacts',
          'Advanced Segmentation',
          'Custom Development',
          'Multi-language Campaigns',
          'Advanced Automation',
          'Dedicated Success Manager',
          'Priority Support',
          'Custom Integrations'
        ],
        description: 'Enterprise-level email marketing'
      }
    ],
    benefits: [
      'Higher customer lifetime value',
      'Improved customer retention rates',
      'Personalized customer experiences',
      'Increased sales conversions',
      'Cost-effective marketing channel',
      'Detailed customer insights',
      'Automated nurturing sequences',
      'Regulatory compliance assurance'
    ],
    process: [
      {
        step: 1,
        title: 'Strategy & Planning',
        description: 'Email marketing strategy and audience analysis',
        duration: '2-3 days',
        deliverables: ['Email strategy', 'Audience segments', 'Campaign calendar']
      },
      {
        step: 2,
        title: 'Setup & Integration',
        description: 'Platform setup and system integrations',
        duration: '3-5 days',
        deliverables: ['Platform configuration', 'Integrations', 'Template setup']
      },
      {
        step: 3,
        title: 'Campaign Creation',
        description: 'Design and copywriting for email campaigns',
        duration: '1 week',
        deliverables: ['Email designs', 'Copy and content', 'Automation workflows']
      },
      {
        step: 4,
        title: 'Launch & Optimization',
        description: 'Campaign deployment and performance optimization',
        duration: 'Ongoing',
        deliverables: ['Campaign launches', 'Performance reports', 'Optimizations']
      }
    ],
    timeline: '1-2 weeks setup + ongoing campaigns',
    deliverables: [
      'Email marketing strategy',
      'Platform setup and configuration',
      'Custom email templates',
      'Automated workflow sequences',
      'List segmentation and management',
      'Monthly performance reports',
      'Ongoing optimization recommendations'
    ],
    faqs: [
      {
        question: 'What email platforms do you use?',
        answer: 'We work with leading platforms like Mailchimp, Klaviyo, and HubSpot, choosing the best fit based on your business needs and integration requirements.'
      },
      {
        question: 'How do you ensure email deliverability?',
        answer: 'We follow best practices including proper authentication, list hygiene, content optimization, and reputation monitoring to maximize inbox delivery.'
      },
      {
        question: 'Can you create bilingual email campaigns?',
        answer: 'Yes, we create both English and Arabic email campaigns, with proper RTL formatting and cultural considerations for UAE audiences.'
      },
      {
        question: 'What kind of results can we expect?',
        answer: 'Typical results include 20-25% open rates, 3-5% click rates, and 15-30% improvement in customer retention, depending on industry and list quality.'
      }
    ],
    category: 'email',
    icon: '📧',
    featured: false
  }
];

// Helper Functions

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter(service => service.featured === true);
};

export const getAllCategories = (): string[] => {
  const categories = services.map(service => service.category);
  return [...new Set(categories)];
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Types are already exported with their interface declarations above