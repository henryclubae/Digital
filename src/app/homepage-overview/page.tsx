'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  HomeIcon,
  ChartBarIcon,
  UserGroupIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function HomepageOverview() {
  const sections = [
    {
      name: 'Hero Section',
      icon: HomeIcon,
      description: 'Compelling headline, Dubai skyline background, dual CTAs, achievements grid',
      features: ['Dubai-themed background', 'Free consultation offer', 'WhatsApp integration', 'Achievement metrics']
    },
    {
      name: 'Services Section',
      icon: ChartBarIcon,
      description: '6 UAE-focused digital marketing services with interactive cards and pricing',
      features: ['SEO Services Dubai', 'Web Development', 'Social Media Marketing', 'Amazon Store Setup']
    },
    {
      name: 'Stats Section',
      icon: UserGroupIcon,
      description: 'Animated counters showing business metrics and achievements',
      features: ['500+ Happy Clients', '300% Average Growth', '99% Client Retention', 'Awards & Recognition']
    },
    {
      name: 'Case Studies Section',
      icon: StarIcon,
      description: 'Detailed business results with metrics visualization and progress bars',
      features: ['Al Fanar Restaurant', 'InnovateTech Solutions', 'Emirates Fashion Gallery', 'ROI Tracking']
    },
    {
      name: 'Testimonials Section',
      icon: UserGroupIcon,
      description: 'Auto-rotating carousel with 6 client success stories and star ratings',
      features: ['5-second auto-rotation', '6 UAE client stories', 'Star ratings', 'Company logos']
    },
    {
      name: 'FAQ Section',
      icon: QuestionMarkCircleIcon,
      description: '12 comprehensive FAQs covering pricing, timelines, and processes',
      features: ['Accordion behavior', 'Pricing information', 'Timeline expectations', 'Process details']
    },
    {
      name: 'CTA Section',
      icon: PhoneIcon,
      description: 'High-converting final call-to-action with urgency and social proof',
      features: ['10X Growth headline', 'Multiple contact options', 'Urgency triggers', 'Trust signals']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <HomeIcon className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl font-bold mb-4">
            Henry Club Digital Homepage
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Complete homepage with 7 optimized sections for maximum conversion
          </p>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-lg">
              A comprehensive digital marketing website designed specifically for the UAE market, 
              featuring conversion-optimized sections, proper SEO, and Dubai-themed styling.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Homepage Sections Overview
            </h2>
            <p className="text-xl text-gray-600">
              Each section is strategically designed to guide visitors through the conversion funnel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section) => (
              <Card key={section.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{section.name}</CardTitle>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {section.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {section.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Implementation
            </h2>
            <p className="text-xl text-gray-600">
              Built with modern React patterns and SEO best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* SEO & Performance */}
            <Card>
              <CardHeader>
                <CardTitle>SEO & Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Structured Data:</strong> Organization schema for better search visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Meta Tags:</strong> Complete Open Graph and Twitter cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>UAE Keywords:</strong> Optimized for Dubai and UAE searches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Canonical URLs:</strong> Proper URL structure and canonicalization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Components & Design */}
            <Card>
              <CardHeader>
                <CardTitle>Components & Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>TypeScript:</strong> Full type safety and better developer experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Responsive:</strong> Mobile-first design with desktop optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Accessibility:</strong> ARIA labels, keyboard navigation, screen reader support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Dubai Theme:</strong> Gold accents and UAE market customization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Conversion Optimization */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conversion Optimization Features
            </h2>
            <p className="text-xl text-gray-600">
              Strategic elements designed to maximize lead generation and sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multiple CTAs</h3>
              <p className="text-sm text-gray-600">
                Primary, secondary, and micro-CTAs throughout the funnel
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Social Proof</h3>
              <p className="text-sm text-gray-600">
                Client testimonials, case studies, and trust indicators
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Urgency Triggers</h3>
              <p className="text-sm text-gray-600">
                Limited spots, time-sensitive offers, and FOMO elements
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trust Signals</h3>
              <p className="text-sm text-gray-600">
                Guarantees, certifications, and risk reversal elements
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Launch Your Website?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            The complete homepage is built and ready for production deployment
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-dubai-gold hover:bg-dubai-gold/90 text-black"
              onClick={() => window.open('/', '_blank')}
            >
              View Live Homepage
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open('/contact', '_self')}
            >
              Get Started Now
            </Button>
          </div>

          <div className="mt-8 text-sm opacity-80">
            All sections are optimized for UAE market and ready for production use
          </div>
        </div>
      </section>

    </div>
  );
}