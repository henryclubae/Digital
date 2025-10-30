'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, GlobeAltIcon, UserGroupIcon, StarIcon, ClockIcon, TrophyIcon, ArrowTrendingUpIcon, DevicePhoneMobileIcon, ComputerDesktopIcon, PresentationChartLineIcon, DocumentTextIcon, EnvelopeIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { generateServiceSchema } from '@/lib/schema';

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Instagram, Facebook, LinkedIn, TikTok management',
    details: 'Complete social media strategy, content creation, community management, and advertising campaigns across all major platforms.',
    icon: DevicePhoneMobileIcon,
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics & Reporting']
  },
  {
    title: 'Google Ads Management',
    description: 'Search, Display, Shopping campaigns',
    details: 'Strategic Google Ads campaigns optimized for UAE market with keyword research, ad creation, and conversion tracking.',
    icon: ComputerDesktopIcon,
    features: ['Campaign Setup', 'Keyword Research', 'Ad Optimization', 'Conversion Tracking']
  },
  {
    title: 'Content Marketing',
    description: 'Blog posts, videos, infographics in Arabic/English',
    details: 'High-quality content creation in both languages tailored for UAE audience preferences and search engines.',
    icon: DocumentTextIcon,
    features: ['Blog Writing', 'Video Production', 'Infographic Design', 'Content Strategy']
  },
  {
    title: 'Email Marketing',
    description: 'Automated campaigns, newsletters',
    details: 'Personalized email marketing campaigns with automation sequences to nurture leads and increase customer retention.',
    icon: EnvelopeIcon,
    features: ['Campaign Design', 'List Building', 'Automation Setup', 'Performance Tracking']
  },
  {
    title: 'SEO Services',
    description: 'On-page, off-page, local SEO',
    details: 'Complete SEO optimization for higher rankings on Google UAE with technical audits and content optimization.',
    icon: MagnifyingGlassIcon,
    features: ['Technical SEO', 'Content Optimization', 'Link Building', 'Local SEO']
  },
  {
    title: 'Analytics & Reporting',
    description: 'Monthly performance reports',
    details: 'Comprehensive reporting and analytics to track ROI, conversions, and campaign performance across all channels.',
    icon: PresentationChartLineIcon,
    features: ['Performance Tracking', 'ROI Analysis', 'Custom Dashboards', 'Monthly Reports']
  }
];

const packages = [
  {
    name: 'Starter',
    price: 'AED 3,000',
    period: '/month',
    description: '2 social platforms, basic SEO, monthly reporting',
    features: [
      '2 Social Media Platforms',
      'Basic SEO Optimization',
      'Monthly Performance Report',
      'Email Support',
      'Content Calendar',
      'Basic Analytics Setup'
    ],
    popular: false,
    cta: 'Start Growing'
  },
  {
    name: 'Professional',
    price: 'AED 7,500',
    period: '/month',
    description: '4 platforms, Google Ads, content creation, bi-weekly calls',
    features: [
      '4 Social Media Platforms',
      'Google Ads Management',
      'Content Creation (8 posts/week)',
      'Bi-weekly Strategy Calls',
      'Advanced SEO',
      'Email Marketing',
      'Monthly Video Reports',
      'Priority Support'
    ],
    popular: true,
    cta: 'Most Popular'
  },
  {
    name: 'Enterprise',
    price: 'AED 15,000',
    period: '/month',
    description: 'Full-service, dedicated manager, weekly calls',
    features: [
      'All Social Media Platforms',
      'Dedicated Account Manager',
      'Weekly Strategy Calls',
      'Custom Content Creation',
      'Advanced Google Ads',
      'Complete SEO Management',
      'Marketing Automation',
      'Custom Reporting Dashboard',
      '24/7 Support'
    ],
    popular: false,
    cta: 'Go Enterprise'
  }
];

const caseStudies = [
  {
    client: 'Dubai Luxury Hotels',
    industry: 'Hospitality',
    challenge: 'Low online bookings and poor social media presence',
    solution: 'Comprehensive social media strategy with targeted Google Ads campaigns',
    results: {
      bookings: '+250%',
      socialFollowers: '+180%',
      roi: '400%',
      revenue: 'AED 2.8M'
    },
    image: '/images/case-studies/dubai-hotels.jpg',
    testimonial: 'Henry Club Digital transformed our online presence. Our bookings increased by 250% in just 6 months!'
  },
  {
    client: 'UAE Fashion Retailer',
    industry: 'E-commerce',
    challenge: 'High competition and low online sales conversion',
    solution: 'SEO optimization, social commerce, and retargeting campaigns',
    results: {
      sales: '+320%',
      traffic: '+200%',
      roi: '500%',
      conversion: '+85%'
    },
    image: '/images/case-studies/fashion-retailer.jpg',
    testimonial: 'Our online sales tripled within 8 months. The ROI has been incredible!'
  },
  {
    client: 'Abu Dhabi Real Estate',
    industry: 'Real Estate',
    challenge: 'Limited lead generation and brand awareness',
    solution: 'LinkedIn marketing, content creation, and lead nurturing campaigns',
    results: {
      leads: '+400%',
      deals: '+150%',
      roi: '600%',
      brand: '+300%'
    },
    image: '/images/case-studies/real-estate.jpg',
    testimonial: 'Lead generation increased by 400%. We closed more deals than ever before!'
  }
];

const advantages = [
  {
    title: 'Local Market Knowledge',
    description: 'Deep understanding of UAE consumer behavior, cultural preferences, and market dynamics across all Emirates.',
    icon: GlobeAltIcon
  },
  {
    title: 'Arabic Content Expertise',
    description: 'Native Arabic speakers creating culturally accurate content that resonates with local audiences.',
    icon: DocumentTextIcon
  },
  {
    title: 'Cultural Understanding',
    description: 'Comprehensive knowledge of Middle Eastern business culture, holidays, and consumer patterns.',
    icon: UserGroupIcon
  }
];

const comparisonData = [
  {
    feature: 'Arabic Content Creation',
    henryClub: true,
    competitor1: false,
    competitor2: true,
    competitor3: false
  },
  {
    feature: 'Local UAE Team',
    henryClub: true,
    competitor1: false,
    competitor2: false,
    competitor3: true
  },
  {
    feature: '24/7 Support',
    henryClub: true,
    competitor1: true,
    competitor2: false,
    competitor3: true
  },
  {
    feature: 'Google Certified Team',
    henryClub: true,
    competitor1: true,
    competitor2: true,
    competitor3: false
  },
  {
    feature: 'ROI Guarantee',
    henryClub: true,
    competitor1: false,
    competitor2: false,
    competitor3: false
  },
  {
    feature: 'Custom Reporting',
    henryClub: true,
    competitor1: false,
    competitor2: true,
    competitor3: false
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Strategy',
    description: 'Comprehensive audit and custom strategy development',
    duration: '1-2 weeks'
  },
  {
    step: 2,
    title: 'Implementation',
    description: 'Campaign setup and content creation launch',
    duration: '2-3 weeks'
  },
  {
    step: 3,
    title: 'Optimization',
    description: 'Continuous optimization and performance improvement',
    duration: 'Ongoing'
  },
  {
    step: 4,
    title: 'Reporting',
    description: 'Monthly reports and strategy adjustments',
    duration: 'Monthly'
  }
];

const teamExpertise = [
  {
    certification: 'Google Ads Certified',
    description: 'Advanced certification in Google Ads management and optimization',
    icon: CheckIcon
  },
  {
    certification: 'Facebook Blueprint Certified',
    description: 'Expert-level Facebook and Instagram advertising certification',
    icon: CheckIcon
  },
  {
    certification: 'HubSpot Certified',
    description: 'Inbound marketing and sales software certification',
    icon: CheckIcon
  },
  {
    certification: 'UAE Market Experience',
    description: '5+ years specialized experience in UAE digital marketing',
    icon: CheckIcon
  }
];

const testimonials = [
  {
    name: 'Mohammed Al-Rashid',
    company: 'Al-Rashid Trading LLC',
    role: 'CEO',
    content: 'ROI increased by 350% within 6 months. Henry Club Digital exceeded all our expectations.',
    roi: '350%',
    image: '/images/testimonials/mohammed-rashid.jpg',
    rating: 5
  },
  {
    name: 'Fatima Al-Zahra',
    company: 'Dubai Beauty Salon',
    role: 'Owner',
    content: 'Our online bookings tripled and social media following grew by 400%. Exceptional service!',
    roi: '280%',
    image: '/images/testimonials/fatima-zahra.jpg',
    rating: 5
  },
  {
    name: 'James Mitchell',
    company: 'UAE Fitness Centers',
    role: 'Marketing Director',
    content: 'Lead generation increased by 500%. The best digital marketing investment we ever made.',
    roi: '450%',
    image: '/images/testimonials/james-mitchell.jpg',
    rating: 5
  }
];

interface ROIResult {
  investment: number;
  return: number;
  profit: number;
  percentage: number;
}

export default function DigitalMarketingUAE() {
  const [roiInputs, setRoiInputs] = useState({ budget: 5000, industry: 'retail' });
  const [calculatedROI, setCalculatedROI] = useState<ROIResult | null>(null);

  const calculateROI = () => {
    const multipliers: Record<string, number> = {
      retail: 4.2,
      hospitality: 3.8,
      realestate: 5.1,
      healthcare: 3.5,
      ecommerce: 4.8
    };
    
    const multiplier = multipliers[roiInputs.industry] || 4;
    const estimatedReturn = roiInputs.budget * multiplier;
    const roi = ((estimatedReturn - roiInputs.budget) / roiInputs.budget) * 100;
    
    setCalculatedROI({
      investment: roiInputs.budget,
      return: estimatedReturn,
      profit: estimatedReturn - roiInputs.budget,
      percentage: roi
    });
  };

  return (
    <>
      <SEO 
        title="Digital Marketing UAE | Best Agency Dubai | Henry Club Digital"
        description="Top digital marketing agency in UAE offering comprehensive services: social media, SEO, PPC, content marketing. Proven 200% ROI increase. Free strategy session!"
        keywords="digital marketing UAE, digital marketing agency Dubai, social media marketing UAE, PPC management Dubai, content marketing UAE"
        canonicalUrl="/services/digital-marketing-uae"
        schema={generateServiceSchema({
          name: 'Digital Marketing UAE',
          description: 'Top digital marketing agency in UAE offering comprehensive services: social media, SEO, PPC, content marketing. Proven 200% ROI increase.',
          url: 'https://digital.henryclub.ae/services/digital-marketing-uae',
          category: 'Digital Marketing'
        })}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Digital Marketing Agency Dubai | Grow Your UAE Business
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Achieve 200%+ ROI with our proven digital marketing strategies tailored for the UAE market. 
                From social media management to Google Ads, we drive real results for Dubai businesses.
              </p>
              
              <div className="bg-yellow-500 text-blue-900 p-4 rounded-lg mb-8">
                <div className="flex items-center">
                  <TrophyIcon className="h-6 w-6 mr-2" />
                  <span className="font-bold">ROI GUARANTEE: 200% minimum return or money back within 6 months</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center">
                  Get Free Strategy Session
                </Link>
                <Link href="#case-studies" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center">
                  View Success Stories
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/digital-marketing-dubai.jpg"
                alt="Digital Marketing Agency Dubai UAE"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-green-600">+200% ROI</div>
                <div className="text-sm">Average Client Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Digital Marketing for UAE Businesses Since 2020
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;ve helped over 200 UAE businesses achieve remarkable growth through strategic digital marketing. 
              Our data-driven approach and local market expertise deliver consistent results across all Emirates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <ArrowTrendingUpIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Proven Results</h3>
              <p className="text-gray-600">200+ successful campaigns with average 250% ROI increase for UAE clients.</p>
            </div>
            <div className="text-center">
              <GlobeAltIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of UAE market dynamics and cultural preferences.</p>
            </div>
            <div className="text-center">
              <UserGroupIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Dedicated Support</h3>
              <p className="text-gray-600">24/7 support with dedicated account managers for personalized service.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Digital Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              6 core services designed to maximize your online presence and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-sm text-gray-500 mb-4">{service.details}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckIcon className="h-4 w-4 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Digital Marketing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible packages designed for UAE businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-600' : 'border border-gray-200'}`}>
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
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Market Advantages */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why We Excel in the UAE Market
            </h2>
            <p className="text-xl text-gray-600">
              3 key advantages that set us apart from other digital marketing agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UAE Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real UAE businesses we&apos;ve helped grow
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <Image
                    src={study.image}
                    alt={study.client}
                    width={500}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {study.industry}
                  </div>
                  <h3 className="font-bold text-2xl mb-4">{study.client}</h3>
                  <p className="text-gray-600 mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                  <p className="text-gray-600 mb-6"><strong>Solution:</strong> {study.solution}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-green-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replaceAll(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-600 italic">&quot;{study.testimonial}&quot;</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ROI Calculator Tool
            </h2>
            <p className="text-xl text-gray-600">
              Calculate your potential return on digital marketing investment
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="budget-input" className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Marketing Budget (AED)
                </label>
                <input
                  id="budget-input"
                  type="number"
                  value={roiInputs.budget}
                  onChange={(e) => setRoiInputs({...roiInputs, budget: Number.parseInt(e.target.value) || 0})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="5000"
                />
              </div>
              <div>
                <label htmlFor="industry-select" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  id="industry-select"
                  value={roiInputs.industry}
                  onChange={(e) => setRoiInputs({...roiInputs, industry: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="retail">Retail</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="realestate">Real Estate</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="ecommerce">E-commerce</option>
                </select>
              </div>
            </div>
            
            <button
              onClick={calculateROI}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-6"
            >
              Calculate ROI
            </button>

            {calculatedROI && (
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-bold text-xl mb-4 text-green-800">Estimated Results:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">AED {calculatedROI.investment.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">AED {calculatedROI.return.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Return</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">AED {calculatedROI.profit.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Profit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{calculatedROI.percentage.toFixed(0)}%</div>
                    <div className="text-sm text-gray-600">ROI</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Henry Club Digital
            </h2>
            <p className="text-xl text-gray-600">
              Compare us with other Dubai digital marketing agencies
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Features</th>
                  <th className="px-6 py-4 text-center">Henry Club</th>
                  <th className="px-6 py-4 text-center">Agency A</th>
                  <th className="px-6 py-4 text-center">Agency B</th>
                  <th className="px-6 py-4 text-center">Agency C</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {row.henryClub ? <CheckIcon className="h-5 w-5 text-green-600 mx-auto" /> : '❌'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.competitor1 ? <CheckIcon className="h-5 w-5 text-green-600 mx-auto" /> : '❌'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.competitor2 ? <CheckIcon className="h-5 w-5 text-green-600 mx-auto" /> : '❌'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {row.competitor3 ? <CheckIcon className="h-5 w-5 text-green-600 mx-auto" /> : '❌'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600">
              Strategy → Implementation → Optimization → Reporting
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200 z-0"></div>
                )}
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">
                  {step.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <div className="flex items-center justify-center text-sm text-blue-600">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Expert Team Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Google certified team with specialized UAE market experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamExpertise.map((expertise, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <expertise.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">{expertise.certification}</h3>
                <p className="text-gray-600">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real testimonials with specific ROI results from UAE clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {Array.from({length: testimonial.rating}, (_, i) => (
                    <StarIcon key={`star-${testimonial.name}-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600">+{testimonial.roi}</div>
                  <div className="text-sm text-gray-600">ROI Increase</div>
                </div>
                <p className="text-gray-600 mb-6">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Audit CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Your Free Digital Marketing Audit
          </h2>
          <p className="text-xl mb-8">
            Discover hidden opportunities in your current digital marketing strategy. 
            Our comprehensive audit reveals exactly how to increase your ROI by 200%+.
          </p>
          <div className="bg-yellow-500 text-blue-900 p-6 rounded-lg mb-8 inline-block">
            <div className="text-2xl font-bold mb-2">FREE $2,000 VALUE</div>
            <div>Complete Digital Marketing Audit & Strategy Session</div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Claim Free Audit
            </Link>
            <Link 
              href="https://wa.me/971501234567?text=Hi, I want to claim my free digital marketing audit" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Now
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">No obligation • Results guaranteed • 60-minute strategy session included</p>
        </div>
      </section>
    </>
  );
}