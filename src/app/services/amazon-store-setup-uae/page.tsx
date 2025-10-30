'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckIcon, 
  ShoppingCartIcon,
  TruckIcon,
  ChartBarIcon,
  CameraIcon,
  CogIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  StarIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const setupSteps = [
  {
    step: 1,
    title: 'Account Registration & Verification',
    description: 'Complete Amazon seller account setup with UAE business verification and documentation.',
    details: ['Business license verification', 'Tax registration setup', 'Bank account linking', 'Identity verification'],
    duration: '2-3 days'
  },
  {
    step: 2,
    title: 'Product Research & Selection',
    description: 'Data-driven product research to identify profitable opportunities in UAE market.',
    details: ['Market demand analysis', 'Competition assessment', 'Profit margin calculations', 'Trend identification'],
    duration: '3-5 days'
  },
  {
    step: 3,
    title: 'Supplier Sourcing (UAE/International)',
    description: 'Connect with reliable suppliers for quality products at competitive prices.',
    details: ['UAE supplier network', 'International sourcing', 'Quality verification', 'Price negotiations'],
    duration: '5-7 days'
  },
  {
    step: 4,
    title: 'Product Listing Creation & Optimization',
    description: 'SEO-optimized product listings that convert browsers into buyers.',
    details: ['Keyword research', 'Title optimization', 'Bullet points creation', 'Description writing'],
    duration: '2-3 days'
  },
  {
    step: 5,
    title: 'Inventory Management Setup',
    description: 'Efficient inventory systems to prevent stockouts and overstock situations.',
    details: ['FBA shipment planning', 'Inventory forecasting', 'Reorder systems', 'Storage optimization'],
    duration: '1-2 days'
  },
  {
    step: 6,
    title: 'PPC Campaign Launch',
    description: 'Strategic advertising campaigns to drive traffic and increase sales velocity.',
    details: ['Keyword targeting', 'Bid optimization', 'Campaign structure', 'Budget allocation'],
    duration: '2-3 days'
  },
  {
    step: 7,
    title: 'Review Management',
    description: 'Proactive review management to build trust and improve product rankings.',
    details: ['Review monitoring', 'Response strategies', 'Feedback management', 'Rating improvement'],
    duration: 'Ongoing'
  },
  {
    step: 8,
    title: 'Performance Monitoring & Optimization',
    description: 'Continuous optimization based on performance data and market trends.',
    details: ['Sales analytics', 'Performance tracking', 'Strategy adjustments', 'Growth optimization'],
    duration: 'Ongoing'
  }
];

const servicesIncluded = [
  {
    title: 'Amazon Seller Account Setup',
    description: 'Complete professional setup with all required verifications',
    icon: UserGroupIcon
  },
  {
    title: 'Product Listing Optimization',
    description: 'SEO-optimized listings with high-converting keywords',
    icon: DocumentTextIcon
  },
  {
    title: 'Professional Product Photography',
    description: 'High-quality images that showcase your products perfectly',
    icon: CameraIcon
  },
  {
    title: 'A+ Content Creation',
    description: 'Enhanced brand content to improve conversion rates',
    icon: StarIcon
  },
  {
    title: 'PPC Advertising Management',
    description: 'Strategic campaigns to maximize visibility and sales',
    icon: ChartBarIcon
  },
  {
    title: 'Inventory Management',
    description: 'Efficient stock management and FBA optimization',
    icon: TruckIcon
  },
  {
    title: 'Customer Service Support',
    description: '24/7 customer support in Arabic and English',
    icon: PhoneIcon
  },
  {
    title: 'Performance Analytics',
    description: 'Detailed reporting and performance insights',
    icon: ArrowTrendingUpIcon
  }
];

const servicePackages = [
  {
    name: 'Basic Setup',
    price: 'AED 4,000',
    description: 'Perfect for getting started on Amazon UAE',
    features: [
      'Amazon seller account setup',
      '10 product listings creation',
      'Basic listing optimization',
      'Initial keyword research',
      'Account verification assistance',
      'Basic training session'
    ],
    popular: false
  },
  {
    name: 'Complete Package',
    price: 'AED 8,000',
    description: 'Comprehensive setup for serious sellers',
    features: [
      'Full Amazon store setup',
      '25 professional product listings',
      'Professional product photography',
      'A+ Content creation',
      'Advanced keyword optimization',
      'Initial PPC campaign setup',
      'Comprehensive training program'
    ],
    popular: true
  },
  {
    name: 'Managed Service',
    price: 'AED 2,000',
    period: '/month',
    description: 'Ongoing management and optimization',
    features: [
      'Monthly PPC management',
      'Listing optimization updates',
      'Inventory management',
      'Review management',
      'Performance reporting',
      'Strategy consultations',
      '24/7 support'
    ],
    popular: false
  }
];

const marketplaceInsights = [
  {
    category: 'Electronics & Gadgets',
    popularity: 'High',
    competition: 'Medium',
    opportunity: 'Excellent for tech-savvy UAE market'
  },
  {
    category: 'Fashion & Accessories',
    popularity: 'Very High',
    competition: 'High',
    opportunity: 'Strong demand for international brands'
  },
  {
    category: 'Home & Garden',
    popularity: 'High',
    competition: 'Low',
    opportunity: 'Growing market with less competition'
  },
  {
    category: 'Health & Personal Care',
    popularity: 'Medium',
    competition: 'Medium',
    opportunity: 'Premium products perform well'
  }
];

const successStories = [
  {
    name: 'TechZone UAE',
    category: 'Electronics',
    monthsActive: 8,
    revenueGrowth: '450%',
    monthlySales: 'AED 85,000',
    story: 'Started with phone accessories, now leading electronics seller in UAE Amazon marketplace.',
    image: '/images/success-stories/techzone-uae.jpg'
  },
  {
    name: 'Desert Rose Fashion',
    category: 'Fashion',
    monthsActive: 12,
    revenueGrowth: '320%',
    monthlySales: 'AED 62,000',
    story: 'Traditional Emirati fashion brand successfully entered international market via Amazon.',
    image: '/images/success-stories/desert-rose.jpg'
  },
  {
    name: 'Home Essentials Dubai',
    category: 'Home & Garden',
    monthsActive: 6,
    revenueGrowth: '280%',
    monthlySales: 'AED 45,000',
    story: 'Local home goods supplier expanded reach through optimized Amazon FBA strategy.',
    image: '/images/success-stories/home-essentials.jpg'
  }
];

const amazonVsNoon = [
  {
    aspect: 'Market Reach',
    amazon: 'Global marketplace with international shipping',
    noon: 'Regional focus on Middle East market'
  },
  {
    aspect: 'Customer Base',
    amazon: 'Larger international customer base',
    noon: 'Strong local UAE customer loyalty'
  },
  {
    aspect: 'Competition',
    amazon: 'Higher competition but larger market',
    noon: 'Lower competition, easier to rank'
  },
  {
    aspect: 'Fees Structure',
    amazon: 'Higher fees but better FBA services',
    noon: 'Lower fees, simpler pricing structure'
  }
];

const productCategories = [
  { name: 'Electronics', expertise: 'Advanced', demand: 'High' },
  { name: 'Fashion', expertise: 'Expert', demand: 'Very High' },
  { name: 'Home Goods', expertise: 'Advanced', demand: 'High' },
  { name: 'Books', expertise: 'Intermediate', demand: 'Medium' },
  { name: 'Health', expertise: 'Advanced', demand: 'High' }
];

export default function AmazonStoreSetupUAE() {
  const [activeTab, setActiveTab] = useState('amazon');

  return (
    <>
      <SEO
        title="Amazon Store Setup UAE | FBA Services Dubai | Henry Club Digital"
        description="Complete Amazon FBA setup for UAE sellers. Product listing optimization, PPC management, inventory handling. Launch your successful Amazon business in UAE market."
        keywords="Amazon store setup UAE, Amazon FBA Dubai, Amazon seller UAE, product listing optimization, Amazon PPC management UAE"
        canonicalUrl="/services/amazon-store-setup-uae"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-yellow-600 to-red-600 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Amazon Store Setup for <span className="text-yellow-200">UAE Sellers</span>
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Complete Amazon FBA setup for UAE sellers. Product listing optimization, PPC management, 
            inventory handling. Launch your successful Amazon business in UAE market.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-200">95%</div>
              <div className="text-orange-100 text-sm">Success Rate</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-200">2-4</div>
              <div className="text-orange-100 text-sm">Weeks to Launch</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-200">150+</div>
              <div className="text-orange-100 text-sm">Stores Launched</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-200">24/7</div>
              <div className="text-orange-100 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon FBA Explanation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Amazon FBA for UAE Market
            </h2>
            <p className="text-xl text-gray-600">
              Understanding the benefits, process, and requirements for UAE sellers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <TruckIcon className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Prime shipping eligibility</li>
                <li>• Amazon handles customer service</li>
                <li>• Automatic inventory management</li>
                <li>• Access to global markets</li>
                <li>• Scalable business model</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <CogIcon className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Create seller account</li>
                <li>• Send products to Amazon warehouse</li>
                <li>• Amazon stores and ships products</li>
                <li>• Customers order and receive quickly</li>
                <li>• You receive payments regularly</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <DocumentTextIcon className="h-12 w-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Requirements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• UAE business license</li>
                <li>• Valid bank account</li>
                <li>• Product compliance certificates</li>
                <li>• Tax registration</li>
                <li>• Quality product inventory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Setup Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Setup Process (8 Steps)
            </h2>
            <p className="text-xl text-gray-600">
              Our systematic approach to launching your successful Amazon store
            </p>
          </div>

          <div className="space-y-8">
            {setupSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3 bg-orange-600 p-8 flex items-center">
                    <div className="text-center w-full">
                      <div className="bg-white text-orange-600 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <div className="bg-orange-500 text-white px-4 py-2 rounded-lg">
                        {step.duration}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 p-8">
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Services Included
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive services to ensure your Amazon success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesIncluded.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <service.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right package for your Amazon business goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-orange-600' : ''}`}>
                {pkg.popular && (
                  <div className="bg-orange-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-4">
                    {pkg.price}{pkg.period && <span className="text-lg text-gray-600">{pkg.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/quote"
                    className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      pkg.popular 
                        ? 'bg-orange-600 text-white hover:bg-orange-700' 
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

      {/* UAE Amazon Marketplace Insights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UAE Amazon Marketplace Insights
            </h2>
            <p className="text-xl text-gray-600">
              Popular categories, competition analysis, and pricing strategies
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-orange-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-left">Popularity</th>
                  <th className="px-6 py-4 text-left">Competition</th>
                  <th className="px-6 py-4 text-left">Opportunity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {marketplaceInsights.map((insight, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{insight.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        insight.popularity === 'Very High' ? 'bg-green-100 text-green-800' :
                        insight.popularity === 'High' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {insight.popularity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        insight.competition === 'High' ? 'bg-red-100 text-red-800' :
                        insight.competition === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {insight.competition}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{insight.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              UAE Amazon sellers with remarkable revenue growth metrics
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <div className="text-orange-600 font-semibold mb-4">{story.category}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{story.revenueGrowth}</div>
                      <div className="text-sm text-gray-600">Revenue Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{story.monthlySales}</div>
                      <div className="text-sm text-gray-600">Monthly Sales</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="text-sm text-gray-500">Active for {story.monthsActive} months</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon vs Noon Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Amazon vs Noon Marketplace
            </h2>
            <p className="text-xl text-gray-600">
              When to choose Amazon vs Noon for your UAE business
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-gray-900 font-semibold">Aspect</th>
                    <th className="text-center py-4 px-6 text-orange-600 font-semibold">Amazon</th>
                    <th className="text-center py-4 px-6 text-blue-600 font-semibold">Noon</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {amazonVsNoon.map((comparison, index) => (
                    <tr key={index}>
                      <td className="py-4 px-6 font-medium text-gray-900">{comparison.aspect}</td>
                      <td className="py-4 px-6 text-gray-600 text-center">{comparison.amazon}</td>
                      <td className="py-4 px-6 text-gray-600 text-center">{comparison.noon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Product Category Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Product Category Expertise
            </h2>
            <p className="text-xl text-gray-600">
              Our specialized knowledge across diverse product categories
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <div className={`text-sm font-medium mb-2 ${
                  category.expertise === 'Expert' ? 'text-green-600' :
                  category.expertise === 'Advanced' ? 'text-blue-600' :
                  'text-yellow-600'
                }`}>
                  {category.expertise} Level
                </div>
                <div className={`text-sm px-3 py-1 rounded-full ${
                  category.demand === 'Very High' ? 'bg-green-100 text-green-800' :
                  category.demand === 'High' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {category.demand} Demand
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Launch Timeline: 2-4 Weeks from Start to First Sale
            </h2>
            <p className="text-xl text-gray-600">
              Fast-track your Amazon business with our proven timeline
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-orange-600"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center justify-start">
                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-orange-600 font-bold text-lg mb-2">Week 1</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Setup & Research</h3>
                    <p className="text-gray-600">Account creation, product research, supplier identification</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
              </div>

              <div className="relative flex items-center justify-end">
                <div className="w-5/12 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-orange-600 font-bold text-lg mb-2">Week 2</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Content Creation</h3>
                    <p className="text-gray-600">Product listings, photography, A+ content development</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
              </div>

              <div className="relative flex items-center justify-start">
                <div className="w-5/12 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-orange-600 font-bold text-lg mb-2">Week 3</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Inventory & Launch</h3>
                    <p className="text-gray-600">FBA shipment, PPC campaigns, store activation</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
              </div>

              <div className="relative flex items-center justify-end">
                <div className="w-5/12 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-orange-600 font-bold text-lg mb-2">Week 4</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Optimization & Sales</h3>
                    <p className="text-gray-600">Performance monitoring, optimization, first sales achieved</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Training Included
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive training to manage your Amazon business independently
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <AcademicCapIcon className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Amazon Seller Dashboard</h4>
                    <p className="text-gray-600">Navigate and utilize all seller central features effectively</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChartBarIcon className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">PPC Management</h4>
                    <p className="text-gray-600">Master advertising campaigns and budget optimization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <TruckIcon className="h-6 w-6 text-orange-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Inventory Planning</h4>
                    <p className="text-gray-600">Forecast demand and manage stock levels efficiently</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ongoing Support
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Monthly performance reviews and strategy adjustments for continued growth
              </p>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h4 className="font-bold text-gray-900 mb-4">Monthly Support Includes:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Performance review meetings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Strategy optimization recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Market trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                    <span className="text-gray-700">Technical support and troubleshooting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Launch Your Amazon Store in UAE?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join 150+ successful UAE sellers who trusted us to launch their Amazon business. 
            Get started today with our proven 2-4 week launch process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-yellow-500 text-orange-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Free Consultation
            </Link>
            <a
              href="https://wa.me/971501234567?text=Hi, I want to start selling on Amazon UAE"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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