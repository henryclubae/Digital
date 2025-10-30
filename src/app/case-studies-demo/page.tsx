'use client';

import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckIcon, DocumentTextIcon, CalendarIcon } from '@heroicons/react/24/outline';

export default function CaseStudiesDemo() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Case Studies Section */}
      <CaseStudiesSection />
      
      {/* Contact Form Target */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="mx-auto max-w-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Start Your Success Story Today</CardTitle>
              <p className="text-gray-600 mt-4">
                Ready to achieve results like our case studies? Let&apos;s discuss your 
                project and create a custom strategy that delivers measurable growth.
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
                    <label htmlFor="similarBusiness" className="block text-sm font-medium text-gray-700 mb-2">
                      Most Similar Case Study
                    </label>
                    <select 
                      id="similarBusiness"
                      name="similarBusiness"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Select the case study most similar to your business"
                    >
                      <option value="">Which case resonates with you?</option>
                      <option value="restaurant">Al Fanar Restaurant - Food & Beverage (300% Social Growth)</option>
                      <option value="tech-startup">InnovateTech Solutions - B2B Technology (500% Lead Boost)</option>
                      <option value="fashion-retail">Emirates Fashion Gallery - Retail (250% E-commerce Growth)</option>
                      <option value="other">My situation is different</option>
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
                  <label htmlFor="currentMetrics" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Performance Metrics
                  </label>
                  <textarea
                    id="currentMetrics"
                    name="currentMetrics"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your current numbers: monthly revenue, website visitors, social media followers, leads, etc. This helps us benchmark and set realistic growth targets."
                  />
                </div>

                <div>
                  <label htmlFor="desiredResults" className="block text-sm font-medium text-gray-700 mb-2">
                    Desired Results
                  </label>
                  <textarea
                    id="desiredResults"
                    name="desiredResults"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What specific results do you want to achieve? (e.g., 'Increase online sales by 200%', 'Generate 50 qualified leads per month', 'Grow social media following to 10K+')"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Timeline
                  </label>
                  <select 
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Select your target timeline for results"
                  >
                    <option value="">When do you need results?</option>
                    <option value="3-months">Within 3 months (like our case studies)</option>
                    <option value="6-months">Within 6 months (comprehensive growth)</option>
                    <option value="12-months">12-month strategic transformation</option>
                    <option value="flexible">Flexible - focus on sustainable growth</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <DocumentTextIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Your Custom Case Study Proposal Will Include:
                      </h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Detailed analysis of your current situation vs. our case studies</li>
                        <li>• Custom strategy roadmap with realistic timelines</li>
                        <li>• Projected growth metrics based on similar businesses</li>
                        <li>• Investment proposal with ROI calculations</li>
                        <li>• Month-by-month implementation plan</li>
                        <li>• Success milestones and performance tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  Get My Custom Case Study Strategy
                </Button>

                <div className="text-center text-xs text-gray-500">
                  No generic proposals. Every strategy is custom-built based on your specific 
                  goals and our proven case study methodologies. 100% confidential.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Deliver Case Study Results
            </h2>
            <p className="text-xl text-gray-600">
              Our proven 4-phase methodology that consistently delivers measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Phase 1 */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Discovery & Audit
                </h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive analysis of your current digital presence, market position, and growth opportunities.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Week 1-2
                </div>
              </CardContent>
            </Card>

            {/* Phase 2 */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Strategy Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Custom strategy creation based on successful case studies in your industry and market.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Week 2-3
                </div>
              </CardContent>
            </Card>

            {/* Phase 3 */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Implementation
                </h3>
                <p className="text-gray-600 mb-4">
                  Execute the strategy with our proven processes, tools, and UAE market expertise.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Month 1-3
                </div>
              </CardContent>
            </Card>

            {/* Phase 4 */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Continuous monitoring, testing, and optimization to maximize results and ROI.
                </p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  Ongoing
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Success Guarantee */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Performance Guarantee
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Based on our case studies, we&apos;re confident in our ability to deliver results. 
              If we don&apos;t achieve at least 50% of our projected growth targets within 6 months, 
              we&apos;ll work for free until we do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="flex items-center justify-center">
                <CheckIcon className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-semibold">Results-Driven Approach</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckIcon className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-semibold">Transparent Reporting</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckIcon className="h-6 w-6 text-green-600 mr-3" />
                <span className="font-semibold">Performance Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}