'use client';

import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { 
  CheckIcon,
  EyeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CameraIcon,
  CalendarDaysIcon,
  HashtagIcon,
  StarIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  PlayIcon,
  FireIcon,
  PresentationChartLineIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';

const platformStrategies = [
  {
    name: 'Instagram',
    icon: CameraIcon,
    color: 'bg-pink-600',
    strategy: 'Visual content, Stories, Reels, UAE influencer partnerships',
    features: [
      'High-quality visual content creation',
      'Instagram Stories with polls and Q&A',
      'Reels for viral reach and engagement',
      'UAE influencer collaboration campaigns',
      'Shopping tags for e-commerce',
      'IGTV for long-form content'
    ]
  },
  {
    name: 'Facebook',
    icon: UserGroupIcon,
    color: 'bg-blue-600',
    strategy: 'Community building, events, local business promotion',
    features: [
      'Facebook Groups management',
      'Event creation and promotion',
      'Local business directory optimization',
      'Facebook Marketplace integration',
      'Live streaming events',
      'Community engagement campaigns'
    ]
  },
  {
    name: 'LinkedIn',
    icon: TrophyIcon,
    color: 'bg-blue-700',
    strategy: 'B2B networking, thought leadership, corporate branding',
    features: [
      'Professional content strategy',
      'Industry thought leadership posts',
      'Company page optimization',
      'LinkedIn article publishing',
      'Employee advocacy programs',
      'B2B lead generation campaigns'
    ]
  },
  {
    name: 'TikTok',
    icon: PlayIcon,
    color: 'bg-black',
    strategy: 'Viral content, trending hashtags, young audience engagement',
    features: [
      'Trending challenge participation',
      'UAE-specific viral content creation',
      'Music and audio trend utilization',
      'Young demographic targeting',
      'Creative video editing',
      'Hashtag challenge campaigns'
    ]
  },
  {
    name: 'Snapchat',
    icon: FireIcon,
    color: 'bg-yellow-500',
    strategy: 'UAE market popularity, location-based campaigns',
    features: [
      'Geo-targeted campaigns in UAE',
      'AR filters and lenses creation',
      'Snap Map optimization',
      'Stories and Discover content',
      'Event-based marketing',
      'Youth-focused campaigns'
    ]
  },
  {
    name: 'Twitter',
    icon: ChatBubbleLeftRightIcon,
    color: 'bg-sky-500',
    strategy: 'Real-time engagement, customer service, news updates',
    features: [
      'Real-time news and updates',
      'Customer service via Twitter',
      'Trend hijacking and participation',
      'Twitter Spaces hosting',
      'Crisis communication management',
      'Influencer engagement'
    ]
  }
];

const contentCreation = [
  {
    title: 'Arabic and English Content',
    description: 'Bilingual content creation with native speakers',
    icon: GlobeAltIcon,
    features: [
      'Native Arabic copywriters',
      'Cultural nuance understanding',
      'Proper Arabic typography',
      'Right-to-left layout optimization'
    ]
  },
  {
    title: 'Cultural Sensitivity',
    description: 'Respectful content aligned with local customs',
    icon: ShieldCheckIcon,
    features: [
      'Islamic culture considerations',
      'Local tradition respect',
      'Appropriate imagery selection',
      'Conservative content guidelines'
    ]
  },
  {
    title: 'Special Campaigns',
    description: 'Seasonal and cultural event marketing',
    icon: CalendarDaysIcon,
    features: [
      'Ramadan content strategies',
      'Eid celebration campaigns',
      'UAE National Day promotion',
      'Local festival participation'
    ]
  },
  {
    title: 'Event Coverage',
    description: 'Local Dubai and UAE events coverage',
    icon: CameraIcon,
    features: [
      'Live event coverage',
      'Behind-the-scenes content',
      'Event hashtag campaigns',
      'Real-time social updates'
    ]
  }
];

const servicePackages = [
  {
    name: 'Starter',
    price: 'AED 2,000',
    period: '/month',
    description: 'Perfect for small businesses starting social media',
    platforms: '2 platforms',
    posts: '12 posts/month',
    features: [
      '2 social media platforms',
      '12 professional posts per month',
      'Basic content calendar',
      'Monthly analytics report',
      'Community management (business hours)',
      'Basic hashtag research'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: 'AED 4,500',
    period: '/month',
    description: 'Comprehensive social media management',
    platforms: '4 platforms',
    posts: '20 posts/month',
    features: [
      '4 social media platforms',
      '20 high-quality posts per month',
      'Paid advertising management',
      'Influencer outreach campaigns',
      '24/7 community management',
      'Advanced analytics and reporting',
      'Content calendar and strategy'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'AED 8,000',
    period: '/month',
    description: 'Full-scale social media marketing',
    platforms: 'All platforms',
    posts: 'Daily posting',
    features: [
      'All major social platforms',
      'Daily content creation and posting',
      'Full campaign management',
      'Influencer partnership management',
      'Crisis management support',
      'Custom content creation',
      'Dedicated account manager'
    ],
    popular: false
  }
];

const contentCalendarExamples = [
  {
    day: 'Monday',
    theme: 'Motivation Monday',
    content: 'Inspirational quotes, success stories, weekly goals',
    hashtags: '#MondayMotivation #DubaiSuccess #UAEBusiness'
  },
  {
    day: 'Tuesday',
    theme: 'Tips Tuesday',
    content: 'Industry insights, helpful tips, educational content',
    hashtags: '#TipsTuesday #DubaiTips #LearnWithUs'
  },
  {
    day: 'Wednesday',
    theme: 'Wisdom Wednesday',
    content: 'Expert advice, thought leadership, case studies',
    hashtags: '#WisdomWednesday #ExpertAdvice #UAEInsights'
  },
  {
    day: 'Thursday',
    theme: 'Throwback Thursday',
    content: 'Company history, milestone celebrations, nostalgia',
    hashtags: '#ThrowbackThursday #CompanyHistory #DubaiMemories'
  },
  {
    day: 'Friday',
    theme: 'Feature Friday',
    content: 'Product features, client spotlights, team highlights',
    hashtags: '#FeatureFriday #ClientSpotlight #TeamDubai'
  }
];

const caseStudies = [
  {
    name: 'Luxe Fashion Dubai',
    industry: 'Fashion',
    duration: '6 months',
    platforms: ['Instagram', 'Facebook', 'TikTok'],
    results: {
      followers: '+250%',
      engagement: '+180%',
      sales: '+320%',
      reach: '2.5M monthly'
    },
    strategy: 'Fashion influencer partnerships with micro and macro influencers in Dubai fashion scene',
    image: '/images/case-studies/luxe-fashion.jpg'
  },
  {
    name: 'Taste of Emirates',
    industry: 'Food & Beverage',
    duration: '8 months',
    platforms: ['Instagram', 'Facebook', 'Snapchat'],
    results: {
      followers: '+400%',
      engagement: '+220%',
      sales: '+280%',
      reach: '1.8M monthly'
    },
    strategy: 'Food photography, Ramadan campaigns, and local food blogger collaborations',
    image: '/images/case-studies/taste-emirates.jpg'
  },
  {
    name: 'Dubai Properties Plus',
    industry: 'Real Estate',
    duration: '12 months',
    platforms: ['Instagram', 'LinkedIn', 'Facebook'],
    results: {
      followers: '+180%',
      engagement: '+150%',
      leads: '+360%',
      reach: '3.2M monthly'
    },
    strategy: 'Property showcases, virtual tours, and Dubai lifestyle content',
    image: '/images/case-studies/dubai-properties.jpg'
  }
];

const influencerTiers = [
  {
    tier: 'Nano Influencers',
    followers: '1K - 10K',
    engagement: '8-12%',
    cost: 'AED 200-800',
    bestFor: 'Niche products, local businesses, authentic engagement'
  },
  {
    tier: 'Micro Influencers',
    followers: '10K - 100K',
    engagement: '5-8%',
    cost: 'AED 800-3,000',
    bestFor: 'Targeted campaigns, product launches, brand awareness'
  },
  {
    tier: 'Macro Influencers',
    followers: '100K - 1M',
    engagement: '3-5%',
    cost: 'AED 3,000-15,000',
    bestFor: 'Mass market campaigns, major product launches'
  },
  {
    tier: 'Mega Influencers',
    followers: '1M+',
    engagement: '1-3%',
    cost: 'AED 15,000+',
    bestFor: 'Brand positioning, luxury products, viral campaigns'
  }
];

const analyticsMetrics = [
  { metric: 'Reach', description: 'Total unique users who saw your content' },
  { metric: 'Impressions', description: 'Total number of times content was displayed' },
  { metric: 'Engagement Rate', description: 'Percentage of audience that interacted with content' },
  { metric: 'Click-Through Rate', description: 'Percentage of users who clicked on links' },
  { metric: 'Conversion Rate', description: 'Percentage of social traffic that converted' },
  { metric: 'Share Rate', description: 'How often your content gets shared' },
  { metric: 'Mention Tracking', description: 'Brand mentions across social platforms' },
  { metric: 'Hashtag Performance', description: 'Effectiveness of branded and campaign hashtags' }
];

const popularHashtags = [
  { category: 'Dubai General', tags: ['#Dubai', '#UAE', '#MyDubai', '#DubaiLife', '#VisitDubai'] },
  { category: 'Business', tags: ['#DubaiBusiness', '#UAEBusiness', '#DubaiEntrepreneur', '#BusinessDubai'] },
  { category: 'Lifestyle', tags: ['#DubaiLifestyle', '#LuxuryDubai', '#DubaiFood', '#DubaiShopping'] },
  { category: 'Events', tags: ['#DubaiEvents', '#UAEEvents', '#DubaiExpo', '#DubaiFestival'] },
  { category: 'Culture', tags: ['#UAECulture', '#EmiratiCulture', '#DubaiTradition', '#UAEHeritage'] }
];

export default function SocialMediaMarketing() {
  return (
    <>
      <SEO
        title="Social Media Marketing UAE | Instagram Facebook Management Dubai | Henry Club"
        description="Expert social media marketing for UAE businesses. Instagram, Facebook, LinkedIn, TikTok management with Arabic content. Grow your brand presence in Dubai market."
        keywords="social media marketing UAE, Instagram marketing Dubai, Facebook marketing UAE, social media management Dubai, Arabic content creation"
        canonicalUrl="/services/social-media-marketing"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Social Media Marketing for <span className="text-pink-200">UAE Businesses</span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Expert social media marketing for UAE businesses. Instagram, Facebook, LinkedIn, 
            TikTok management with Arabic content. Grow your brand presence in Dubai market.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-pink-200">500%</div>
              <div className="text-purple-100 text-sm">Avg Engagement Growth</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-pink-200">2.5M</div>
              <div className="text-purple-100 text-sm">Monthly Reach</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-pink-200">200+</div>
              <div className="text-purple-100 text-sm">Brands Managed</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-pink-200">24/7</div>
              <div className="text-purple-100 text-sm">Community Management</div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Strategies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Platform-Specific Strategies
            </h2>
            <p className="text-xl text-gray-600">
              Tailored approaches for each social media platform
            </p>
          </div>

          <div className="grid lg:grid-cols-3 xl:grid-cols-2 gap-8">
            {platformStrategies.map((platform, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${platform.color} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <platform.icon className="h-8 w-8 mr-4" />
                    <h3 className="text-2xl font-bold">{platform.name}</h3>
                  </div>
                  <p className="text-sm opacity-90">{platform.strategy}</p>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Content Creation for UAE Audience
            </h2>
            <p className="text-xl text-gray-600">
              Culturally relevant content that resonates with local and international audiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentCreation.map((content, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                <content.icon className="h-12 w-12 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{content.title}</h3>
                <p className="text-gray-600 mb-6">{content.description}</p>
                
                <ul className="space-y-2 text-left">
                  {content.features.map((feature, featureIndex) => (
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

      {/* Influencer Marketing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Influencer Marketing Connections
            </h2>
            <p className="text-xl text-gray-600">
              Access to UAE&apos;s top influencers across all tiers and niches
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {influencerTiers.map((tier, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-bold text-purple-900 mb-2">{tier.tier}</h3>
                <div className="space-y-2 mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Followers:</span> {tier.followers}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Engagement:</span> {tier.engagement}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Cost:</span> {tier.cost}
                  </div>
                </div>
                <p className="text-sm text-gray-700">{tier.bestFor}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-purple-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Influencer Network Includes:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Fashion & Beauty</h4>
                <p className="text-purple-100 text-sm">Top UAE fashion bloggers and beauty enthusiasts</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Food & Lifestyle</h4>
                <p className="text-purple-100 text-sm">Dubai food critics and lifestyle influencers</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Business & Tech</h4>
                <p className="text-purple-100 text-sm">Industry experts and thought leaders</p>
              </div>
            </div>
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
              Flexible packages designed for different business sizes and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <div key={index} className={`rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-purple-600' : ''}`}>
                {pkg.popular && (
                  <div className="bg-purple-600 text-white text-center py-2 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-purple-600 mb-4">
                    {pkg.price}<span className="text-lg text-gray-600">{pkg.period}</span>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-purple-600 font-semibold">{pkg.platforms}</div>
                    <div className="text-sm text-purple-600 font-semibold">{pkg.posts}</div>
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
                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
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

      {/* Content Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Content Calendar Examples
            </h2>
            <p className="text-xl text-gray-600">
              Strategic weekly themes and posting schedules for consistent engagement
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 text-gray-900 font-semibold">Day</th>
                    <th className="text-left py-4 px-6 text-gray-900 font-semibold">Theme</th>
                    <th className="text-left py-4 px-6 text-gray-900 font-semibold">Content Type</th>
                    <th className="text-left py-4 px-6 text-gray-900 font-semibold">Popular Hashtags</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {contentCalendarExamples.map((day, index) => (
                    <tr key={index}>
                      <td className="py-4 px-6 font-medium text-purple-600">{day.day}</td>
                      <td className="py-4 px-6 font-semibold text-gray-900">{day.theme}</td>
                      <td className="py-4 px-6 text-gray-700">{day.content}</td>
                      <td className="py-4 px-6 text-sm text-blue-600">{day.hashtags}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UAE Brand Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from UAE brands across fashion, food, and real estate
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.name}</h3>
                  <div className="text-purple-600 font-semibold mb-4">{study.industry}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{study.results.followers}</div>
                      <div className="text-sm text-gray-600">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{study.results.engagement}</div>
                      <div className="text-sm text-gray-600">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{study.results.sales}</div>
                      <div className="text-sm text-gray-600">Sales Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{study.results.reach}</div>
                      <div className="text-sm text-gray-600">Monthly Reach</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{study.strategy}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.platforms.map((platform, platformIndex) => (
                      <span key={platformIndex} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {platform}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & Reporting */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Analytics & Reporting
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tracking of engagement, reach, conversions, and ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsMetrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-bold text-blue-900 mb-2">{metric.metric}</h3>
                <p className="text-sm text-gray-700">{metric.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Monthly Reporting Includes:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <PresentationChartLineIcon className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Performance Dashboard</h4>
                  <p className="text-purple-100 text-sm">Real-time metrics and KPI tracking</p>
                </div>
              </div>
              <div className="flex items-start">
                <ChartBarIcon className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Growth Analysis</h4>
                  <p className="text-purple-100 text-sm">Month-over-month growth insights</p>
                </div>
              </div>
              <div className="flex items-start">
                <TrophyIcon className="h-6 w-6 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Competitor Benchmarking</h4>
                  <p className="text-purple-100 text-sm">Performance vs industry standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Crisis Management & Reputation Protection
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                24/7 monitoring and rapid response to protect your brand reputation
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <BellAlertIcon className="h-8 w-8 text-red-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Real-Time Monitoring</h4>
                    <p className="text-gray-600">Continuous monitoring of mentions, comments, and reviews across all platforms</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Rapid Response Protocol</h4>
                    <p className="text-gray-600">Immediate response within 2 hours for critical issues, professional tone management</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Community Management</h4>
                    <p className="text-gray-600">Professional handling of negative feedback with cultural sensitivity for UAE market</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Crisis Response Time</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-semibold text-red-800">Critical Issues</span>
                  <span className="text-red-600 font-bold">&lt; 30 minutes</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-50 rounded-lg">
                  <span className="font-semibold text-yellow-800">Moderate Issues</span>
                  <span className="text-yellow-600 font-bold">&lt; 2 hours</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-green-800">General Inquiries</span>
                  <span className="text-green-600 font-bold">&lt; 4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hashtag Research */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UAE Hashtag Research & Strategy
            </h2>
            <p className="text-xl text-gray-600">
              Dubai and UAE-specific hashtags to maximize local and international reach
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {popularHashtags.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-purple-900 mb-4">{category.category}</h3>
                <div className="space-y-2">
                  {category.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="block text-sm text-blue-600 hover:text-blue-800 cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-purple-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Hashtag Strategy Includes:</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <HashtagIcon className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-2">Trending Analysis</h4>
                <p className="text-purple-100 text-sm">Daily monitoring of trending hashtags in UAE market</p>
              </div>
              <div>
                <StarIcon className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-2">Branded Hashtags</h4>
                <p className="text-purple-100 text-sm">Custom hashtag creation and community building</p>
              </div>
              <div>
                <EyeIcon className="h-8 w-8 mb-2" />
                <h4 className="font-semibold mb-2">Performance Tracking</h4>
                <p className="text-purple-100 text-sm">Hashtag effectiveness measurement and optimization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Grow Your Social Media Presence in UAE?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 200+ UAE brands who trust us with their social media marketing. 
            Get started with culturally relevant content that drives real engagement and results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-400 transition-colors"
            >
              Get Free Strategy Session
            </Link>
            <a
              href="https://wa.me/971501234567?text=Hi, I want to discuss social media marketing for my UAE business"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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