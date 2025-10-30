'use client';

import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function TestimonialsDemo() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Form Target */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="mx-auto max-w-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Start Your Success Story</CardTitle>
              <p className="text-gray-600 mt-4">
                Join the growing list of successful UAE businesses. Get your free consultation 
                and discover how we can help you achieve similar results.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="currentRevenue" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Monthly Revenue
                    </label>
                    <select 
                      id="currentRevenue"
                      name="currentRevenue"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Select your current monthly revenue range"
                    >
                      <option value="">Select revenue range</option>
                      <option value="under-50k">Under AED 50,000</option>
                      <option value="50k-100k">AED 50,000 - 100,000</option>
                      <option value="100k-250k">AED 100,000 - 250,000</option>
                      <option value="250k-500k">AED 250,000 - 500,000</option>
                      <option value="500k-1m">AED 500,000 - 1M</option>
                      <option value="1m-plus">AED 1M+</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="growthGoals" className="block text-sm font-medium text-gray-700 mb-2">
                    Growth Goals *
                  </label>
                  <select 
                    id="growthGoals"
                    name="growthGoals"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Select your primary growth goal"
                  >
                    <option value="">What&apos;s your main goal?</option>
                    <option value="increase-sales">Increase Online Sales (like Emirates Fashion House - 250%)</option>
                    <option value="lead-generation">Generate More Leads (like HealthTech UAE - 400%)</option>
                    <option value="brand-awareness">Build Brand Awareness & Traffic (like Dubai Properties - 300%)</option>
                    <option value="social-media">Grow Social Media Presence (like Gulf Coast Restaurants - 180%)</option>
                    <option value="b2b-clients">Acquire B2B Clients (like Tech Solutions - 220%)</option>
                    <option value="ecommerce">Boost E-commerce/Amazon Sales (like Beauty & Wellness - 350%)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="currentChallenges" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Marketing Challenges
                  </label>
                  <textarea
                    id="currentChallenges"
                    name="currentChallenges"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What marketing challenges are you facing? (e.g., low website traffic, poor conversion rates, limited social media engagement, etc.)"
                  />
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <CheckIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        What You&apos;ll Get in Your Free Consultation:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Comprehensive digital marketing audit (Worth AED 2,500)</li>
                        <li>• Custom growth strategy based on your industry</li>
                        <li>• ROI projections and realistic timelines</li>
                        <li>• Success roadmap similar to our client testimonials</li>
                        <li>• No-obligation proposal with transparent pricing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  Get My Free Success Strategy Session
                </Button>

                <div className="text-center text-xs text-gray-500">
                  Join 500+ successful UAE businesses. No spam, just results. 
                  Your information is 100% secure and confidential.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Additional Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Our Work in Action
            </h2>
            <p className="text-xl text-gray-600">
              Watch how we&apos;ve transformed UAE businesses across different industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Case Study Videos */}
            <Card className="bg-white group cursor-pointer">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-700 rounded-t-lg flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <PlayIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  LIVE
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Dubai Real Estate Success
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  How Ahmed Al Mansoori increased property inquiries by 300% in 4 months using our digital marketing strategies.
                </p>
                <div className="flex items-center text-xs text-green-600 font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  300% Growth Achieved
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white group cursor-pointer">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-500 to-purple-700 rounded-t-lg flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <PlayIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  CASE STUDY
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Fashion E-commerce Boom
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Emirates Fashion House achieved 250% sales increase through our web development and SEO optimization.
                </p>
                <div className="flex items-center text-xs text-green-600 font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  250% Sales Boost
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white group cursor-pointer">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-amber-500 to-orange-600 rounded-t-lg flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                    <PlayIcon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  TUTORIAL
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">
                  Restaurant Social Media Magic
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Gulf Coast Restaurant Group&apos;s 180% reservation increase through strategic social media marketing.
                </p>
                <div className="flex items-center text-xs text-green-600 font-semibold">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  180% More Reservations
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
}