'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckIcon, 
  MagnifyingGlassIcon, 
  TrophyIcon, 
  ClockIcon, 
  ArrowTrendingUpIcon, 
  MapPinIcon, 
  ChevronDownIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Local Visibility',
    description: 'Dominate local search results in Dubai and UAE. Get found by customers searching for your services in your neighborhood.',
    icon: MapPinIcon,
    stat: '300% increase in local visibility'
  },
  {
    title: 'Targeted Traffic',
    description: 'Attract high-quality visitors who are actively searching for your products or services in Dubai.',
    icon: ArrowTrendingUpIcon,
    stat: '250% more qualified leads'
  },
  {
    title: 'Higher Conversions',
    description: 'Convert more website visitors into customers with SEO-optimized pages that match search intent.',
    icon: TrophyIcon,
    stat: '180% conversion improvement'
  }
];

const seoStrategy = [
  {
    months: 'Month 1-2',
    phase: 'Foundation Setup',
    tasks: 'Website audit, keyword research, on-page optimization',
    details: [
      'Complete technical SEO audit',
      'Dubai-specific keyword research',
      'Competitor analysis',
      'On-page SEO optimization',
      'Meta tags optimization'
    ]
  },
  {
    months: 'Month 3-4',
    phase: 'Content & Authority',
    tasks: 'Content creation, link building, technical SEO',
    details: [
      'High-quality content creation',
      'Strategic link building',
      'Technical SEO improvements',
      'Site speed optimization',
      'Mobile optimization'
    ]
  },
  {
    months: 'Month 5-6',
    phase: 'Local & Performance',
    tasks: 'Local SEO, performance optimization, reporting',
    details: [
      'Google My Business optimization',
      'Local citation building',
      'Performance monitoring',
      'Ranking improvements',
      'Detailed reporting'
    ]
  }
];

const seoPackages = [
  {
    name: 'Local SEO',
    price: 'AED 2,500',
    period: '/month',
    description: 'Perfect for local Dubai businesses',
    features: [
      'Google My Business optimization',
      'Local keyword targeting',
      '5 pages optimization',
      'Local citation building',
      'Monthly reporting'
    ],
    popular: false
  },
  {
    name: 'National SEO',
    price: 'AED 5,000',
    period: '/month',
    description: 'Comprehensive SEO for UAE-wide reach',
    features: [
      '15 pages optimization',
      'Content creation',
      'Link building campaigns',
      'Technical SEO',
      'Competitor analysis',
      'Monthly strategy calls'
    ],
    popular: true
  },
  {
    name: 'E-commerce SEO',
    price: 'AED 7,500',
    period: '/month',
    description: 'Specialized for online stores',
    features: [
      'Product optimization',
      'Category pages SEO',
      'Technical e-commerce SEO',
      'Product schema markup',
      'Conversion optimization',
      'Weekly reviews'
    ],
    popular: false
  }
];

const beforeAfterExamples = [
  {
    business: 'Dubai Restaurant',
    industry: 'Food & Beverage',
    keyword: 'best restaurants Dubai',
    before: 'Position 47',
    after: 'Position 3'
  },
  {
    business: 'Real Estate Agency',
    industry: 'Real Estate',
    keyword: 'Dubai property for sale',
    before: 'Position 65',
    after: 'Position 2'
  },
  {
    business: 'Medical Center',
    industry: 'Healthcare',
    keyword: 'dentist Dubai Marina',
    before: 'Position 38',
    after: 'Position 1'
  },
  {
    business: 'Law Firm',
    industry: 'Legal Services',
    keyword: 'lawyers Dubai',
    before: 'Position 52',
    after: 'Position 4'
  },
  {
    business: 'Fashion Store',
    industry: 'Retail',
    keyword: 'designer clothes Dubai',
    before: 'Position 43',
    after: 'Position 2'
  }
];

const keywordExamples = [
  'restaurants Dubai',
  'real estate Dubai',
  'dentist Dubai',
  'lawyers Dubai',
  'hotels Dubai',
  'shopping Dubai'
];

const seoTools = [
  { name: 'SEMrush', description: 'Keyword research and competitor analysis' },
  { name: 'Ahrefs', description: 'Backlink analysis and content research' },
  { name: 'Google Analytics', description: 'Traffic analysis and user behavior' },
  { name: 'Search Console', description: 'Google search performance monitoring' }
];

const faqs = [
  {
    question: 'How long does SEO take to show results in Dubai?',
    answer: 'Typically 3-6 months for significant results. Local SEO can show improvements in 4-8 weeks. We guarantee first page rankings within 6 months.'
  },
  {
    question: 'What is your SEO guarantee?',
    answer: 'We guarantee first page rankings for agreed keywords within 6 months or continue working for free until achieved.'
  },
  {
    question: 'Do you provide monthly SEO reports?',
    answer: 'Yes, we provide detailed monthly reports showing rankings, traffic, conversions, and progress toward goals.'
  },
  {
    question: 'What SEO tools do you use?',
    answer: 'We use professional tools like SEMrush, Ahrefs, Google Analytics, and Search Console for comprehensive SEO analysis.'
  },
  {
    question: 'Do you handle Arabic SEO?',
    answer: 'Yes, we specialize in both Arabic and English SEO with native speakers ensuring cultural accuracy and proper localization.'
  },
  {
    question: 'What is included in the SEO audit?',
    answer: 'Complete technical analysis, keyword research, competitor analysis, on-page optimization recommendations, and improvement roadmap.'
  },
  {
    question: 'How do you adapt to Google algorithm updates?',
    answer: 'We stay updated on all Google algorithm changes and adjust strategies accordingly to maintain and improve rankings.'
  },
  {
    question: 'What is local SEO and why is it important?',
    answer: 'Local SEO optimizes your business for local searches, helping customers find you when searching for services in Dubai.'
  },
  {
    question: 'Can you help with Google My Business?',
    answer: 'Yes, Google My Business optimization is included in all our SEO packages to improve local visibility.'
  },
  {
    question: 'What makes your SEO different from competitors?',
    answer: 'We focus specifically on UAE market dynamics, have local expertise, and provide guaranteed results with transparent reporting.'
  }
];

export default function SEOServicesDubai() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('Restaurants');
  const [auditData, setAuditData] = useState({
    url: '',
    email: ''
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle audit form submission
    console.log('Audit request:', auditData);
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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            SEO Services Dubai - <span className="text-yellow-400">Get Found on Google</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Expert SEO services in Dubai & UAE. Get your business on Google&apos;s first page with proven local SEO strategies. 
            Guaranteed results in 6 months or money back!
          </p>
          
          <div className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg inline-block mb-8">
            🏆 Ranking Guarantee: First Page in 6 Months or Money Back
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <benefit.icon className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{benefit.description}</p>
                <div className="text-yellow-400 font-semibold">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local SEO Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dubai Local SEO Excellence
            </h2>
            <p className="text-xl text-gray-600">
              Dominate local search results with our specialized Dubai SEO strategies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What is Local SEO?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Google My Business Optimization</h4>
                    <p className="text-gray-600">Complete setup and optimization of your Google My Business profile for maximum local visibility.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Local Citations Building</h4>
                    <p className="text-gray-600">Strategic listing on Dubai and UAE directories to build local authority and trust signals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Dubai-Specific Keywords</h4>
                    <p className="text-gray-600">Targeting location-based keywords like &quot;near me&quot; searches and Dubai neighborhood terms.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/services/local-seo-dubai.jpg"
                alt="Local SEO Dubai Services"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6-Month SEO Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our 6-Month SEO Strategy
            </h2>
            <p className="text-xl text-gray-600">
              Systematic approach to get your business ranking on Google&apos;s first page
            </p>
          </div>

          <div className="space-y-8">
            {seoStrategy.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{phase.months}</h3>
                    <p className="text-blue-600 font-semibold">{phase.phase}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{phase.tasks}</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {phase.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SEO Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect SEO package for your Dubai business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {seoPackages.map((pkg, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-600' : ''}`}>
                {pkg.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    {pkg.price}<span className="text-lg text-gray-600">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/quote"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      pkg.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
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

      {/* Before/After Rankings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How We Outrank Competitors in Dubai
            </h2>
            <p className="text-xl text-gray-600">
              Our strategic approach to competitive analysis and market domination
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start">
                <ChartBarIcon className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Competitor Analysis</h3>
                  <p className="text-gray-600">We analyze your top 10 competitors to identify gaps and opportunities in the Dubai market.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <GlobeAltIcon className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Gap Analysis</h3>
                  <p className="text-gray-600">Identify content opportunities that your competitors are missing in Dubai searches.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CogIcon className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technical Advantages</h3>
                  <p className="text-gray-600">Implement superior technical SEO that gives you the edge over competitors.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4">Competitor Analysis Report Includes:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Top 10 competitor keyword analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Backlink profile comparison</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Content strategy gaps</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <span className="text-gray-700">Technical SEO opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Audit Tool */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <MagnifyingGlassIcon className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Free SEO Audit Tool
            </h2>
            <p className="text-xl text-blue-100">
              Get a comprehensive analysis of your website&apos;s SEO performance with improvement recommendations
            </p>
          </div>

          <form onSubmit={handleAuditSubmit} className="bg-white rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="audit-url" className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="audit-url"
                  value={auditData.url}
                  onChange={(e) => setAuditData({...auditData, url: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="audit-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="audit-email"
                  value={auditData.email}
                  onChange={(e) => setAuditData({...auditData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-yellow-500 text-blue-900 py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
            >
              Get My Free SEO Audit Report
            </button>
          </form>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <ClockIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-900 mb-1">Quick Analysis</h4>
              <p className="text-gray-600 text-sm">Get results within 24 hours</p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-900 mb-1">Detailed Report</h4>
              <p className="text-gray-600 text-sm">Comprehensive SEO analysis</p>
            </div>
            <div className="text-center">
              <DocumentTextIcon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h4 className="font-bold text-gray-900 mb-1">Action Plan</h4>
              <p className="text-gray-600 text-sm">Step-by-step improvements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Keyword Research Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dubai Market Keyword Research
            </h2>
            <p className="text-xl text-gray-600">
              Examples of high-value keywords we target for Dubai businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keywordExamples.map((keyword, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <MagnifyingGlassIcon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">&quot;{keyword}&quot;</h3>
                <div className="text-sm text-gray-600">High-value Dubai keyword</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Algorithm Updates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Google Algorithm Updates Knowledge
            </h2>
            <p className="text-xl text-gray-600">
              Stay ahead with our expertise in Google&apos;s ever-changing algorithms
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Algorithm Adaptation Strategy</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Continuous Monitoring</h4>
                    <p className="text-gray-600">24/7 tracking of algorithm changes and their impact on Dubai market rankings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Rapid Response</h4>
                    <p className="text-gray-600">Quick strategy adjustments to maintain and improve your search rankings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">Future-Proof SEO</h4>
                    <p className="text-gray-600">White-hat techniques that withstand algorithm updates and penalties.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4">Recent Algorithm Adaptations:</h4>
              <ul className="space-y-3">
                <li className="text-gray-700">• Core Web Vitals optimization</li>
                <li className="text-gray-700">• E-A-T (Expertise, Authority, Trust) improvements</li>
                <li className="text-gray-700">• Mobile-first indexing compliance</li>
                <li className="text-gray-700">• Local search algorithm updates</li>
                <li className="text-gray-700">• AI content quality standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Guaranteed Results */}
      <section className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
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
              First page rankings for agreed keywords within 6 months or we continue working for free until achieved.
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                <div className="text-gray-600">Months Maximum</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-gray-600">Money Back Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Performance Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Tools Used */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional SEO Tools We Use
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading tools for comprehensive SEO analysis and optimization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoTools.map((tool, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{tool.name[0]}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Reporting */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Monthly Reporting & Analysis
            </h2>
            <p className="text-xl text-gray-600">
              Transparent reporting with detailed analysis of traffic, rankings, and conversions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ChartBarIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traffic Analysis</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Organic traffic growth</li>
                <li>• User behavior metrics</li>
                <li>• Page performance data</li>
                <li>• Mobile vs desktop traffic</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <TrophyIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rankings Report</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Keyword position tracking</li>
                <li>• Local search rankings</li>
                <li>• Competitor comparisons</li>
                <li>• New keyword opportunities</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <ArrowTrendingUpIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conversion Tracking</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Goal completion rates</li>
                <li>• Lead generation metrics</li>
                <li>• ROI calculations</li>
                <li>• Revenue attribution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about SEO process, timeline, and guarantees
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                  aria-expanded={openIndex === index}
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 flex-shrink-0 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Dominate Google Search in Dubai?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
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
            <a
              href="https://wa.me/971501234567?text=Hi, I want to improve my Google rankings in Dubai"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}