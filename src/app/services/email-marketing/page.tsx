'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckIcon,
  EnvelopeIcon,
  ChartBarIcon,
  UserGroupIcon,
  BoltIcon,
  PaintBrushIcon,
  CogIcon,
  BeakerIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ArrowPathIcon,
  HeartIcon,
  GiftIcon,
  ShoppingCartIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  BanknotesIcon,
  ClockIcon,
  DocumentTextIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

const emailBenefits = [
  {
    title: 'Direct Communication',
    description: 'Reach customers directly in their inbox with personalized messages',
    icon: EnvelopeIcon,
    stat: '3.7B',
    statLabel: 'Global Email Users'
  },
  {
    title: 'High ROI',
    description: 'Average return of AED 42 for every AED 1 spent on email marketing',
    icon: ChartBarIcon,
    stat: '4200%',
    statLabel: 'Average ROI'
  },
  {
    title: 'Customer Retention',
    description: 'Keep existing customers engaged and increase lifetime value',
    icon: UserGroupIcon,
    stat: '80%',
    statLabel: 'Business from Repeat Customers'
  },
  {
    title: 'Personalization',
    description: 'Deliver targeted content based on behavior and preferences',
    icon: HeartIcon,
    stat: '26%',
    statLabel: 'Higher Open Rates'
  }
];

const servicesOffered = [
  {
    title: 'Campaign Strategy & Planning',
    description: 'Comprehensive email marketing strategy tailored to UAE market',
    icon: DocumentTextIcon,
    features: ['Market analysis', 'Competitor research', 'Goal setting', 'Campaign calendar']
  },
  {
    title: 'Email Template Design (Arabic/English)',
    description: 'Responsive templates optimized for both languages and cultures',
    icon: PaintBrushIcon,
    features: ['Bilingual design', 'Mobile optimization', 'Brand consistency', 'Cultural adaptation']
  },
  {
    title: 'List Building & Segmentation',
    description: 'Grow and organize your email list for maximum engagement',
    icon: UserGroupIcon,
    features: ['Lead magnets', 'Opt-in forms', 'Audience segmentation', 'List cleaning']
  },
  {
    title: 'Automation Setup',
    description: 'Automated workflows for welcome series, cart recovery, and more',
    icon: CogIcon,
    features: ['Welcome sequences', 'Abandoned cart recovery', 'Drip campaigns', 'Trigger-based emails']
  },
  {
    title: 'Personalization & Dynamic Content',
    description: 'Personalized content that speaks directly to each subscriber',
    icon: BoltIcon,
    features: ['Dynamic content blocks', 'Behavioral triggers', 'Product recommendations', 'Custom fields']
  },
  {
    title: 'A/B Testing & Optimization',
    description: 'Continuous testing to improve performance and results',
    icon: BeakerIcon,
    features: ['Subject line testing', 'Content optimization', 'Send time testing', 'Performance analysis']
  },
  {
    title: 'Performance Analytics & Reporting',
    description: 'Detailed insights into campaign performance and ROI',
    icon: ChartBarIcon,
    features: ['Open rate tracking', 'Click analytics', 'Conversion reporting', 'Revenue attribution']
  },
  {
    title: 'Deliverability Optimization',
    description: 'Ensure your emails reach the inbox, not the spam folder',
    icon: ShieldCheckIcon,
    features: ['Domain authentication', 'Reputation monitoring', 'Spam testing', 'List hygiene']
  }
];

const uaePersonalization = [
  {
    title: 'Arabic and English Templates',
    description: 'Native-quality templates in both languages with proper typography',
    icon: GlobeAltIcon,
    features: ['RTL support', 'Arabic fonts', 'Cultural imagery', 'Localized content']
  },
  {
    title: 'Cultural Considerations',
    description: 'Timing and content adapted for local customs and holidays',
    icon: CalendarDaysIcon,
    features: ['Ramadan campaigns', 'Eid promotions', 'National Day content', 'Local events']
  },
  {
    title: 'UAE Business Hours Optimization',
    description: 'Send times optimized for maximum engagement in UAE timezone',
    icon: ClockIcon,
    features: ['Optimal send times', 'Weekend considerations', 'Business hours', 'Time zone targeting']
  },
  {
    title: 'Local Currency & Pricing',
    description: 'AED pricing and regional purchasing behavior considerations',
    icon: CurrencyDollarIcon,
    features: ['AED currency display', 'Local pricing strategies', 'Payment preferences', 'Regional offers']
  }
];

const automationWorkflows = [
  {
    name: 'Welcome Series',
    description: '5 emails over 2 weeks to onboard new subscribers',
    emails: 5,
    duration: '2 weeks',
    conversion: '25%',
    details: [
      'Welcome & brand introduction',
      'Product/service overview',
      'Customer testimonials',
      'Special offer for new subscribers',
      'Follow-up & engagement'
    ]
  },
  {
    name: 'Abandoned Cart Recovery',
    description: '3 emails over 1 week to recover lost sales',
    emails: 3,
    duration: '1 week',
    conversion: '15%',
    details: [
      'Gentle reminder (1 hour after abandonment)',
      'Incentive offer (24 hours)',
      'Final urgency message (72 hours)'
    ]
  },
  {
    name: 'Post-Purchase Follow-up',
    description: '4 emails over 1 month to increase customer satisfaction',
    emails: 4,
    duration: '1 month',
    conversion: '12%',
    details: [
      'Order confirmation & tracking',
      'Delivery confirmation',
      'Product usage tips',
      'Review request & cross-sell'
    ]
  },
  {
    name: 'Re-engagement Campaign',
    description: '3 emails for inactive subscribers to win them back',
    emails: 3,
    duration: '2 weeks',
    conversion: '8%',
    details: [
      'We miss you message',
      'Special comeback offer',
      'Last chance before unsubscribe'
    ]
  },
  {
    name: 'Birthday/Anniversary Campaigns',
    description: 'Personalized celebration emails with special offers',
    emails: 2,
    duration: '1 week',
    conversion: '20%',
    details: [
      'Birthday/anniversary greeting',
      'Exclusive birthday discount'
    ]
  }
];

const servicePackages = [
  {
    name: 'Basic',
    price: 'AED 1,500',
    period: '/month',
    description: 'Perfect for small businesses starting with email marketing',
    campaigns: '4 campaigns',
    features: [
      '4 email campaigns per month',
      'Basic email templates',
      'List management up to 5,000 contacts',
      'Monthly performance reporting',
      'Basic automation (welcome series)',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 'AED 3,000',
    period: '/month',
    description: 'Comprehensive email marketing for growing businesses',
    campaigns: '8 campaigns',
    features: [
      '8 email campaigns per month',
      'Custom template design',
      'List management up to 25,000 contacts',
      'Advanced automation workflows',
      'A/B testing & optimization',
      'Bi-weekly reporting & strategy calls',
      'Segmentation & personalization'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'AED 6,000',
    period: '/month',
    description: 'Full-scale email marketing for large businesses',
    campaigns: 'Unlimited',
    features: [
      'Unlimited email campaigns',
      'Dedicated account manager',
      'Custom integration setup',
      'Advanced personalization & dynamic content',
      'Priority support & consultation',
      'Custom reporting dashboard',
      'Deliverability optimization',
      'GDPR compliance management'
    ],
    popular: false
  }
];

const integrationCapabilities = [
  {
    name: 'Shopify',
    description: 'Complete e-commerce integration for abandoned cart and product recommendations',
    icon: ShoppingCartIcon,
    features: ['Product sync', 'Order tracking', 'Customer data', 'Abandoned cart recovery']
  },
  {
    name: 'WooCommerce',
    description: 'WordPress e-commerce integration for seamless email marketing',
    icon: ComputerDesktopIcon,
    features: ['Customer segmentation', 'Purchase behavior', 'Product catalogs', 'Order automation']
  },
  {
    name: 'Salesforce',
    description: 'CRM integration for advanced lead nurturing and sales alignment',
    icon: ChartBarIcon,
    features: ['Lead scoring', 'Sales pipeline', 'Contact management', 'Campaign attribution']
  },
  {
    name: 'HubSpot',
    description: 'Marketing automation platform integration for comprehensive campaigns',
    icon: CogIcon,
    features: ['Lead nurturing', 'Workflow automation', 'Contact properties', 'Analytics sync']
  },
  {
    name: 'Custom CRM',
    description: 'API integration with your existing customer relationship management system',
    icon: DevicePhoneMobileIcon,
    features: ['API connections', 'Data synchronization', 'Custom fields', 'Real-time updates']
  }
];

const emailTemplates = [
  {
    category: 'E-commerce',
    description: 'Product showcases, promotions, and transactional emails',
    examples: ['Product announcements', 'Sale notifications', 'Order confirmations', 'Shipping updates'],
    image: '/images/email-templates/ecommerce.jpg'
  },
  {
    category: 'Newsletters',
    description: 'Regular content updates and company news',
    examples: ['Monthly updates', 'Industry insights', 'Company news', 'Educational content'],
    image: '/images/email-templates/newsletters.jpg'
  },
  {
    category: 'Events',
    description: 'Event invitations, reminders, and follow-ups',
    examples: ['Event invitations', 'Registration confirmations', 'Reminder emails', 'Post-event surveys'],
    image: '/images/email-templates/events.jpg'
  },
  {
    category: 'Promotions',
    description: 'Special offers, discounts, and seasonal campaigns',
    examples: ['Flash sales', 'Seasonal promotions', 'Loyalty rewards', 'Referral programs'],
    image: '/images/email-templates/promotions.jpg'
  }
];

const deliverabilityPractices = [
  {
    practice: 'Domain Authentication',
    description: 'SPF, DKIM, and DMARC setup for email authentication',
    importance: 'Critical',
    impact: '+25% inbox placement'
  },
  {
    practice: 'List Hygiene',
    description: 'Regular cleaning of inactive and bounced email addresses',
    importance: 'High',
    impact: '+15% deliverability'
  },
  {
    practice: 'Spam Compliance',
    description: 'Content and technical compliance with anti-spam regulations',
    importance: 'Essential',
    impact: '+20% inbox rate'
  },
  {
    practice: 'Reputation Monitoring',
    description: 'Continuous monitoring of sender reputation and IP health',
    importance: 'High',
    impact: '+18% delivery rate'
  }
];

const successMetrics = [
  {
    metric: 'Open Rates',
    description: 'Percentage of recipients who open your emails',
    benchmark: '22-25%',
    uaeBenchmark: '24-28%'
  },
  {
    metric: 'Click Rates',
    description: 'Percentage of recipients who click on email links',
    benchmark: '2.5-3.5%',
    uaeBenchmark: '3-4%'
  },
  {
    metric: 'Conversion Rates',
    description: 'Percentage of clicks that result in desired actions',
    benchmark: '1-3%',
    uaeBenchmark: '2-4%'
  },
  {
    metric: 'Revenue Attribution',
    description: 'Total revenue generated from email campaigns',
    benchmark: '15-25%',
    uaeBenchmark: '20-30%'
  }
];

const caseStudies = [
  {
    client: 'UAE Fashion E-commerce',
    industry: 'E-commerce',
    challenge: 'Low email engagement and cart abandonment issues',
    solution: 'Implemented automated cart recovery and personalized product recommendations',
    results: {
      openRate: '+45%',
      clickRate: '+60%',
      revenue: '+180%',
      cartRecovery: '25%'
    },
    testimonial: 'Our email revenue increased by 180% within 6 months. The cart recovery alone brings us AED 50,000+ monthly.',
    image: '/images/case-studies/uae-fashion.jpg'
  },
  {
    client: 'Dubai B2B Services',
    industry: 'B2B Services',
    challenge: 'Poor lead nurturing and low conversion from email leads',
    solution: 'Developed sophisticated lead nurturing workflows and personalization',
    results: {
      openRate: '+35%',
      leadQuality: '+120%',
      salesCycle: '-30%',
      roi: '450%'
    },
    testimonial: 'Email marketing transformed our B2B lead generation. We now close 120% more qualified leads.',
    image: '/images/case-studies/dubai-b2b.jpg'
  }
];

const complianceFeatures = [
  'GDPR compliance for international customers',
  'UAE data protection law adherence',
  'Double opt-in confirmation systems',
  'Easy unsubscribe mechanisms',
  'Data retention and deletion policies',
  'Consent management and tracking',
  'Privacy policy integration',
  'Audit trail maintenance'
];

export default function EmailMarketing() {
  const [selectedWorkflow, setSelectedWorkflow] = useState(0);

  return (
    <>
      <SEO
        title="Email Marketing UAE | Automated Campaigns Dubai | Henry Club Digital"
        description="Professional email marketing services for UAE businesses. Automated campaigns, newsletters, personalization for Arabic and English audiences. Boost customer retention and sales."
        keywords="email marketing UAE, email campaigns Dubai, newsletter marketing UAE, marketing automation Dubai, email marketing agency UAE"
        canonicalUrl="/services/email-marketing"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Email Marketing That <span className="text-yellow-300">Converts</span> for UAE Businesses
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Professional email marketing services for UAE businesses. Automated campaigns, newsletters, 
            personalization for Arabic and English audiences. Boost customer retention and sales.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-300">28%</div>
              <div className="text-indigo-100 text-sm">UAE Open Rates</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-300">4200%</div>
              <div className="text-indigo-100 text-sm">Average ROI</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-300">150+</div>
              <div className="text-indigo-100 text-sm">UAE Campaigns</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-yellow-300">95%</div>
              <div className="text-indigo-100 text-sm">Deliverability Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Marketing Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Email Marketing Works for UAE Businesses
            </h2>
            <p className="text-xl text-gray-600">
              The most effective digital marketing channel with proven ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emailBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{benefit.stat}</div>
                  <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Email Marketing Services
            </h2>
            <p className="text-xl text-gray-600">
              End-to-end email marketing solutions tailored for the UAE market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesOffered.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE Market Personalization */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UAE Market Personalization
            </h2>
            <p className="text-xl text-gray-600">
              Culturally relevant email marketing that resonates with UAE audiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uaePersonalization.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                
                <ul className="space-y-2">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start justify-center">
                      <CheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Workflows */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Email Automation Workflows
            </h2>
            <p className="text-xl text-gray-600">
              Set-and-forget campaigns that work 24/7 to nurture leads and customers
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {automationWorkflows.map((workflow, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedWorkflow(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedWorkflow === index
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold">{workflow.name}</h3>
                      <div className={`text-sm ${selectedWorkflow === index ? 'text-indigo-200' : 'text-indigo-600'}`}>
                        {workflow.conversion} conversion
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <span>{workflow.emails} emails</span>
                      <span>•</span>
                      <span>{workflow.duration}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {automationWorkflows[selectedWorkflow].name}
                  </h3>
                  <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg font-semibold">
                    {automationWorkflows[selectedWorkflow].conversion} avg conversion
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {automationWorkflows[selectedWorkflow].description}
                </p>

                <div className="space-y-4">
                  {automationWorkflows[selectedWorkflow].details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4 mt-0.5">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{automationWorkflows[selectedWorkflow].emails}</div>
                    <div className="text-sm text-gray-600">Total Emails</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{automationWorkflows[selectedWorkflow].duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{automationWorkflows[selectedWorkflow].conversion}</div>
                    <div className="text-sm text-gray-600">Conversion Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Email Marketing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Flexible packages designed for UAE businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-indigo-600' : ''}`}>
                {pkg.popular && (
                  <div className="bg-indigo-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-4">
                    {pkg.price}<span className="text-lg text-gray-600">{pkg.period}</span>
                  </div>
                  
                  <div className="text-sm text-indigo-600 font-semibold mb-4">{pkg.campaigns}</div>
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
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
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

      {/* Integration Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your existing tools and platforms for unified marketing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {integrationCapabilities.map((integration, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <integration.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{integration.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{integration.description}</p>
                
                <ul className="space-y-2">
                  {integration.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs text-gray-500">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Templates Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Email Template Categories
            </h2>
            <p className="text-xl text-gray-600">
              Professional templates for every type of email campaign
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emailTemplates.map((template, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={template.image}
                  alt={template.category}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{template.category}</h3>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  
                  <ul className="space-y-2">
                    {template.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-gray-500">
                        • {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverability Best Practices */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Deliverability Best Practices
            </h2>
            <p className="text-xl text-gray-600">
              Ensure your emails reach the inbox with our proven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverabilityPractices.map((practice, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  practice.importance === 'Critical' ? 'bg-red-100 text-red-800' :
                  practice.importance === 'High' ? 'bg-orange-100 text-orange-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {practice.importance}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3">{practice.practice}</h3>
                <p className="text-gray-600 mb-4">{practice.description}</p>
                
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <div className="text-indigo-600 font-semibold text-sm">Impact:</div>
                  <div className="text-indigo-800 font-bold">{practice.impact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Metrics & Benchmarks
            </h2>
            <p className="text-xl text-gray-600">
              Track performance with industry-leading metrics and UAE-specific benchmarks
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Metric</th>
                  <th className="px-6 py-4 text-left">Description</th>
                  <th className="px-6 py-4 text-center">Global Benchmark</th>
                  <th className="px-6 py-4 text-center">UAE Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {successMetrics.map((metric, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">{metric.metric}</td>
                    <td className="px-6 py-4 text-gray-600">{metric.description}</td>
                    <td className="px-6 py-4 text-center font-semibold text-blue-600">{metric.benchmark}</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">{metric.uaeBenchmark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UAE Email Marketing Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from UAE businesses using our email marketing services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.client}
                  width={500}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.client}</h3>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-gray-600"><strong>Solution:</strong> {study.solution}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center bg-gray-50 p-3 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key.replaceAll(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <blockquote className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-600">
                    <p className="text-gray-700 italic">&quot;{study.testimonial}&quot;</p>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDPR and Privacy Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              GDPR & Privacy Compliance
            </h2>
            <p className="text-xl text-gray-600">
              Full compliance with international and UAE privacy regulations
            </p>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Compliance Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  {complianceFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-300 mr-3 mt-0.5" />
                      <span className="text-indigo-100">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <ShieldCheckIcon className="h-24 w-24 text-green-300 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">100% Compliant</h4>
                  <p className="text-indigo-200">All campaigns follow strict privacy and data protection standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join 150+ UAE businesses using our email marketing services to increase revenue and customer retention. 
            Start with a free strategy consultation and see how we can boost your email ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-yellow-500 text-indigo-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Free Email Audit
            </Link>
            <a
              href="https://wa.me/971501234567?text=Hi, I want to discuss email marketing for my UAE business"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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