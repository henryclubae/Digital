'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, MagnifyingGlassIcon, TrophyIcon, ClockIcon, ArrowTrendingUpIcon, MapPinIcon, ChevronDownIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Local Visibility',
    description: 'Dominate local search results in Dubai and UAE with targeted local SEO strategies that put your business in front of customers searching nearby.',
    icon: MapPinIcon,
    stat: '300% increase in local visibility'
  },
  {
    title: 'Targeted Traffic',
    description: 'Attract high-quality visitors who are actively searching for your products or services in Dubai, leading to better conversion rates.',
    icon: ArrowTrendingUpIcon,
    stat: '250% more qualified leads'
  },
  {
    title: 'Higher Conversions',
    description: 'Convert more website visitors into customers with SEO-optimized pages that match search intent and user experience.',
    icon: TrophyIcon,
    stat: '180% conversion improvement'
  }
];

const seoStrategy = [
  {
    months: 'Month 1-2',
    phase: 'Foundation & Analysis',
    tasks: 'Website audit, keyword research, on-page optimization',
    details: [
      'Comprehensive technical SEO audit',
      'Dubai-specific keyword research',
      'Competitor analysis and gap identification',
      'On-page optimization for target pages',
      'Meta tags and content optimization'
    ]
  },
  {
    months: 'Month 3-4',
    phase: 'Content & Authority Building',
    tasks: 'Content creation, link building, technical SEO',
    details: [
      'High-quality Arabic and English content creation',
      'Strategic link building campaigns',
      'Technical SEO improvements',
      'Site speed and mobile optimization',
      'Schema markup implementation'
    ]
  },
  {
    months: 'Month 5-6',
    phase: 'Local Optimization & Reporting',
    tasks: 'Local SEO, performance optimization, reporting',
    details: [
      'Google My Business optimization',
      'Local citations and directory listings',
      'Customer review management',
      'Performance monitoring and adjustments',
      'Comprehensive ranking and traffic reports'
    ]
  }
];

const seoPackages = [
  {
    name: 'Local SEO',
    price: 'AED 2,500',
    period: '/month',
    description: 'Perfect for local Dubai businesses wanting to dominate local search',
    features: [
      'Google My Business optimization',
      'Local keyword targeting',
      '5 pages optimization',
      'Local citation building',
      'Customer review management',
      'Monthly local ranking reports',
      'Google Maps optimization'
    ],
    popular: false,
    guarantee: '3-5 local keywords on page 1'
  },
  {
    name: 'National SEO',
    price: 'AED 5,000',
    period: '/month',
    description: 'Comprehensive SEO for UAE-wide visibility and growth',
    features: [
      '15 pages optimization',
      'Content creation (4 articles/month)',
      'Strategic link building',
      'Technical SEO improvements',
      'Competitor analysis',
      'Advanced keyword research',
      'Bi-weekly strategy calls',
      'Custom SEO dashboard'
    ],
    popular: true,
    guarantee: '10-15 keywords on page 1'
  },
  {
    name: 'E-commerce SEO',
    price: 'AED 7,500',
    period: '/month',
    description: 'Specialized SEO for online stores and e-commerce businesses',
    features: [
      'Product page optimization',
      'Category page optimization',
      'Technical e-commerce SEO',
      'Product schema markup',
      'Shopping campaign optimization',
      'Conversion rate optimization',
      'Advanced analytics setup',
      'Weekly performance reviews'
    ],
    popular: false,
    guarantee: '20+ product keywords on page 1'
  }
];

const beforeAfterExamples = [
  {
    business: 'Dubai Restaurant Chain',
    industry: 'Food & Beverage',
    keyword: 'best restaurants Dubai',
    before: 'Position 47',
    after: 'Position 3',
    traffic: '+450% organic traffic',
    image: '/images/seo-case-studies/restaurant-dubai.jpg'
  },
  {
    business: 'UAE Real Estate Agency',
    industry: 'Real Estate',
    keyword: 'Dubai property for sale',
    before: 'Position 65',
    after: 'Position 2',
    traffic: '+320% qualified leads',
    image: '/images/seo-case-studies/real-estate-uae.jpg'
  },
  {
    business: 'Dubai Medical Center',
    industry: 'Healthcare',
    keyword: 'dentist Dubai Marina',
    before: 'Position 38',
    after: 'Position 1',
    traffic: '+280% appointment bookings',
    image: '/images/seo-case-studies/medical-dubai.jpg'
  },
  {
    business: 'Abu Dhabi Law Firm',
    industry: 'Legal Services',
    keyword: 'lawyers Abu Dhabi',
    before: 'Position 52',
    after: 'Position 4',
    traffic: '+200% consultation requests',
    image: '/images/seo-case-studies/law-firm-abudhabi.jpg'
  },
  {
    business: 'Dubai Fashion Store',
    industry: 'Retail',
    keyword: 'designer clothes Dubai',
    before: 'Position 43',
    after: 'Position 2',
    traffic: '+380% online sales',
    image: '/images/seo-case-studies/fashion-dubai.jpg'
  }
];

const keywordExamples = [
  { industry: 'Restaurants', keywords: ['restaurants Dubai Marina', 'best Arabic food Dubai', 'fine dining DIFC', 'halal restaurants Dubai'] },
  { industry: 'Real Estate', keywords: ['Dubai property for sale', 'apartments Downtown Dubai', 'villas Palm Jumeirah', 'Dubai real estate investment'] },
  { industry: 'Healthcare', keywords: ['doctors Dubai Healthcare City', 'dentist Dubai Marina', 'hospitals Dubai', 'medical centers UAE'] },
  { industry: 'Legal', keywords: ['lawyers Dubai', 'legal services UAE', 'immigration lawyer Dubai', 'corporate law Dubai'] },
  { industry: 'Beauty', keywords: ['beauty salon Dubai', 'spa treatments Dubai', 'hair salon Marina', 'cosmetic surgery Dubai'] },
  { industry: 'Education', keywords: ['schools Dubai', 'international schools UAE', 'universities Dubai', 'online courses Dubai'] }
];

const seoTools = [
  {
    name: 'SEMrush',
    description: 'Comprehensive keyword research and competitor analysis',
    logo: '/images/seo-tools/semrush.svg'
  },
  {
    name: 'Ahrefs',
    description: 'Advanced backlink analysis and content research',
    logo: '/images/seo-tools/ahrefs.svg'
  },
  {
    name: 'Google Analytics',
    description: 'Traffic analysis and user behavior tracking',
    logo: '/images/seo-tools/google-analytics.svg'
  },
  {
    name: 'Search Console',
    description: 'Google search performance monitoring',
    logo: '/images/seo-tools/search-console.svg'
  }
];

const faqs = [
  {
    question: 'How long does it take to see SEO results in Dubai?',
    answer: 'Typically 3-6 months for significant SEO results in Dubai market. Local SEO can show improvements in 6-8 weeks. We guarantee first page rankings for agreed keywords within 6 months or continue working for free.'
  },
  {
    question: 'What is included in your SEO audit?',
    answer: 'Our comprehensive SEO audit includes technical analysis, on-page optimization review, content audit, backlink analysis, competitor research, and Dubai-specific local SEO assessment with actionable recommendations.'
  },
  {
    question: 'Do you guarantee first page Google rankings?',
    answer: 'Yes, we guarantee first page rankings for agreed keywords within 6 months. If we don\'t achieve this, we continue working for free until targets are met or provide a full refund.'
  },
  {
    question: 'How do you choose keywords for Dubai businesses?',
    answer: 'We conduct thorough keyword research focusing on Dubai-specific terms, search volume, competition level, and business relevance. We target both English and Arabic keywords based on your target audience.'
  },
  {
    question: 'What is local SEO and why is it important in Dubai?',
    answer: 'Local SEO helps your business appear in location-based searches like "restaurants near me" or "dentist Dubai Marina". It\'s crucial in Dubai\'s competitive market to capture local customers searching nearby.'
  },
  {
    question: 'How do you handle Google algorithm updates?',
    answer: 'Our team stays current with all Google algorithm changes. We follow white-hat SEO practices that withstand updates and quickly adapt strategies when needed to maintain and improve rankings.'
  },
  {
    question: 'What reporting do you provide for SEO campaigns?',
    answer: 'Monthly reports include keyword rankings, organic traffic growth, conversion tracking, technical improvements, content performance, and Dubai market competitor analysis with actionable insights.'
  },
  {
    question: 'Can you help with Arabic SEO content?',
    answer: 'Yes, our team includes native Arabic speakers who create culturally appropriate, SEO-optimized Arabic content that resonates with local UAE audiences and ranks well on Google.ae.'
  },
  {
    question: 'How is e-commerce SEO different from regular SEO?',
    answer: 'E-commerce SEO focuses on product pages, category optimization, shopping schema, technical performance, and conversion optimization. It requires specialized strategies for product visibility and sales growth.'
  },
  {
    question: 'What makes your SEO different from other Dubai agencies?',
    answer: 'Our Dubai-based team understands local market dynamics, cultural preferences, and search behavior. We combine international SEO expertise with deep local knowledge for superior results in UAE market.'
  }
];

export default function SEOServicesDubai() {
  const [auditInputs, setAuditInputs] = useState({ website: '', email: '' });
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedKeywordIndustry, setSelectedKeywordIndustry] = useState('Restaurants');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle audit form submission
    console.log('SEO Audit requested for:', auditInputs);
  };

  return (
    <>
      <SEO 
        title="SEO Services Dubai | Top Google Rankings UAE | Henry Club Digital"
        description="Expert SEO services in Dubai & UAE. Get your business on Google's first page with proven local SEO strategies. Guaranteed results in 6 months or money back!"
        keywords="SEO services Dubai, SEO company UAE, local SEO Dubai, Google ranking Dubai, search engine optimization UAE"
        canonicalUrl="/services/seo-services-dubai"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                SEO Services Dubai - Get Found on Google
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Dominate Google search results in Dubai and UAE with our proven SEO strategies. 
                We guarantee first page rankings for your target keywords within 6 months or your money back.
              </p>
              
              <div className="bg-yellow-500 text-blue-900 p-4 rounded-lg mb-8">
                <div className="flex items-center">
                  <ShieldCheckIcon className="h-6 w-6 mr-2" />
                  <span className="font-bold">RANKING GUARANTEE: First page results in 6 months or money back</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400">300%</div>
                  <div className="text-sm">Avg. Traffic Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">#1-3</div>
                  <div className="text-sm">Ranking Positions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400">6 Months</div>
                  <div className="text-sm">Guaranteed Results</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center">
                  Get Free SEO Audit
                </Link>
                <Link href="#case-studies" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center">
                  View Success Stories
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/seo-services-dubai.jpg"
                alt="SEO Services Dubai UAE"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SEO Benefits for Dubai Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Why SEO is essential for business growth in the competitive UAE market
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-xl mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                  {benefit.stat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Explanation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Local SEO for Dubai Market Success
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Dominate local search results and attract customers in your Dubai neighborhood with 
                specialized local SEO strategies that put your business on the map.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Google My Business Optimization</h3>
                    <p className="text-gray-600">Complete GMB setup with photos, reviews, and accurate business information for maximum visibility.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Local Citations & Directories</h3>
                    <p className="text-gray-600">Strategic listings in Dubai business directories and local citation building for authority.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Dubai-Specific Keywords</h3>
                    <p className="text-gray-600">Targeting location-based keywords like &quot;near me&quot; searches and Dubai neighborhood terms.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/local-seo-dubai.jpg"
                alt="Local SEO Dubai"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6-Month SEO Strategy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              6-Month SEO Strategy Breakdown
            </h2>
            <p className="text-xl text-gray-600">
              Our proven methodology for achieving first page rankings in Dubai market
            </p>
          </div>

          <div className="space-y-8">
            {seoStrategy.map((phase, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-blue-600 font-bold text-lg mb-2">{phase.months}</div>
                    <h3 className="font-bold text-xl mb-2">{phase.phase}</h3>
                    <p className="text-gray-600">{phase.tasks}</p>
                  </div>
                  <div className="md:col-span-2">
                    <ul className="space-y-2">
                      {phase.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SEO Packages for Dubai Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect SEO package for your business goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-2">{pkg.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="bg-green-100 text-green-800 p-3 rounded-lg mb-6">
                    <div className="font-semibold text-sm">Guarantee:</div>
                    <div className="text-sm">{pkg.guarantee}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/quote" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                      pkg.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Examples */}
      <section id="case-studies" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Before & After Ranking Examples
            </h2>
            <p className="text-xl text-gray-600">
              Real results from Dubai businesses we&apos;ve helped reach Google&apos;s first page
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterExamples.slice(0, 3).map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-blue-600 text-sm font-medium mb-2">{example.industry}</div>
                <h3 className="font-bold text-lg mb-4">{example.business}</h3>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-center mb-3">
                    <div className="font-medium text-gray-700">&quot;{example.keyword}&quot;</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-red-600 font-bold">{example.before}</div>
                      <div className="text-xs text-gray-500">Before</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-green-600 font-bold">{example.after}</div>
                      <div className="text-xs text-gray-500">After</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded text-sm font-medium text-center">
                  {example.traffic}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {beforeAfterExamples.slice(3).map((example, index) => (
              <div key={index + 3} className="bg-gray-50 rounded-lg p-6">
                <div className="text-blue-600 text-sm font-medium mb-2">{example.industry}</div>
                <h3 className="font-bold text-lg mb-4">{example.business}</h3>
                <div className="bg-white p-4 rounded-lg mb-4">
                  <div className="text-center mb-3">
                    <div className="font-medium text-gray-700">&quot;{example.keyword}&quot;</div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-red-600 font-bold">{example.before}</div>
                      <div className="text-xs text-gray-500">Before</div>
                    </div>
                    <div className="flex items-center justify-center">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-green-600 font-bold">{example.after}</div>
                      <div className="text-xs text-gray-500">After</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-2 rounded text-sm font-medium text-center">
                  {example.traffic}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Audit Tool */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Free SEO Audit Tool
            </h2>
            <p className="text-xl text-gray-600">
              Get a comprehensive analysis of your website with improvement recommendations
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleAuditSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={auditInputs.website}
                    onChange={(e) => setAuditInputs({...auditInputs, website: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://yourwebsite.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={auditInputs.email}
                    onChange={(e) => setAuditInputs({...auditInputs, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Free SEO Audit Report
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Your audit report will include: Technical SEO analysis, Keyword opportunities, 
                Competitor comparison, and Action plan for improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword Research Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Keyword Research Examples for Dubai Market
            </h2>
            <p className="text-xl text-gray-600">
              Industry-specific keywords we target for Dubai businesses
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {keywordExamples.map((industry) => (
                <button
                  key={industry.industry}
                  onClick={() => setSelectedKeywordIndustry(industry.industry)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    selectedKeywordIndustry === industry.industry
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {industry.industry}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="font-bold text-xl mb-6 text-center">
              {selectedKeywordIndustry} Keywords in Dubai
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {keywordExamples
                .find(industry => industry.industry === selectedKeywordIndustry)
                ?.keywords.map((keyword, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg text-center">
                    <MagnifyingGlassIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-medium text-gray-800">&quot;{keyword}&quot;</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Results */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <ShieldCheckIcon className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Guaranteed Results Section
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re so confident in our SEO strategies that we guarantee results or your money back
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-2xl font-bold text-green-600 mb-4">Our SEO Guarantee</div>
            <div className="text-lg text-gray-700 mb-6">
              First page rankings for agreed keywords within 6 months or money-back guarantee
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <ClockIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold">6 Month Timeline</div>
                <div className="text-sm text-gray-600">Results guaranteed within this period</div>
              </div>
              <div className="text-center">
                <TrophyIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold">First Page Rankings</div>
                <div className="text-sm text-gray-600">Top 10 positions on Google UAE</div>
              </div>
              <div className="text-center">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="font-bold">Money Back</div>
                <div className="text-sm text-gray-600">Full refund if targets not met</div>
              </div>
            </div>

            <Link 
              href="/quote" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
            >
              Claim Your Guarantee
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional SEO Tools We Use
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools for comprehensive SEO analysis and optimization
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {seoTools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4 border">
                  <Image
                    src={tool.logo}
                    alt={tool.name}
                    width={80}
                    height={80}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SEO Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our SEO process, timeline, and guarantees
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
                  <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Dominate Google Search in Dubai?
          </h2>
          <p className="text-xl mb-8">
            Get your free SEO audit and discover how we can get your business on Google&apos;s first page. 
            Results guaranteed in 6 months or money back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Free SEO Audit
            </Link>
            <Link 
              href="https://wa.me/971501234567?text=Hi, I want to improve my Google rankings in Dubai" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp SEO Expert
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">Free audit • No obligation • Results guaranteed</p>
        </div>
      </section>
    </>
  );
}