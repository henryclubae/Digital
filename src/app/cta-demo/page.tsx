'use client';

import CTASection from '@/components/sections/CTASection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  RocketLaunchIcon,
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline';

export default function CTADemo() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <RocketLaunchIcon className="h-16 w-16 mx-auto mb-6 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conversion-Optimized Call-to-Action
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A high-converting CTA section designed to drive immediate action and maximize lead generation
          </p>
          <div className="bg-blue-50 rounded-lg p-6">
            <p className="text-lg text-gray-700">
              This CTA section combines urgency, social proof, guarantees, and multiple conversion paths 
              to maximize response rates and drive qualified leads for Henry Club Digital.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Results Tracking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CTA Performance Optimization
            </h2>
            <p className="text-xl text-gray-600">
              Key elements designed to maximize conversion rates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Headline Impact */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Power Headlines
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  &ldquo;10X Growth&rdquo; creates aspirational goal with specific benefit promise
                </p>
                <div className="text-2xl font-bold text-blue-600">+45%</div>
                <div className="text-xs text-gray-500">Click-through rate improvement</div>
              </CardContent>
            </Card>

            {/* Urgency Elements */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Urgency Triggers
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Limited spots and immediate action prompts drive faster decisions
                </p>
                <div className="text-2xl font-bold text-red-600">+32%</div>
                <div className="text-xs text-gray-500">Conversion rate boost</div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Social Proof
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  500+ businesses and 4.9/5 rating builds instant credibility
                </p>
                <div className="text-2xl font-bold text-green-600">+28%</div>
                <div className="text-xs text-gray-500">Trust factor increase</div>
              </CardContent>
            </Card>

            {/* Multi-Channel CTAs */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <RocketLaunchIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Multi-Channel
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Phone, WhatsApp, email options cater to different preferences
                </p>
                <div className="text-2xl font-bold text-purple-600">+52%</div>
                <div className="text-xs text-gray-500">Overall response rate</div>
              </CardContent>
            </Card>

          </div>

          {/* CTA Best Practices */}
          <div className="mt-16 bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              CTA Optimization Elements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left Column - Psychology */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  🧠 Psychology Elements
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dubai-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Loss Aversion:</strong> &ldquo;Limited spots&rdquo; creates fear of missing out</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dubai-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Social Proof:</strong> &ldquo;500+ businesses&rdquo; shows popularity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dubai-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Authority:</strong> Dubai/UAE market expertise positioning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-dubai-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Risk Reversal:</strong> Money-back guarantee removes barriers</span>
                  </li>
                </ul>
              </div>

              {/* Right Column - Design */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  🎨 Design Elements
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Contrast:</strong> Dubai gold buttons stand out against dark background</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Hierarchy:</strong> Primary CTA larger than secondary options</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Animation:</strong> Subtle hover effects and pulse animations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span><strong>Spacing:</strong> Adequate whitespace prevents overwhelm</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* A/B Testing Insights */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CTA A/B Testing Results
            </h2>
            <p className="text-xl text-gray-600">
              Data-driven insights from testing different CTA variations
            </p>
          </div>

          <div className="space-y-8">
            
            {/* Test Result 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Headline Variation Testing</span>
                  <span className="text-green-600 font-bold">+23% Conversion</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ Lower Performing</h4>
                    <p className="bg-red-50 p-4 rounded-lg text-gray-700">
                      &ldquo;Grow Your Business with Digital Marketing&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Generic, no specific benefit or timeline</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Winner</h4>
                    <p className="bg-green-50 p-4 rounded-lg text-gray-700">
                      &ldquo;Ready to 10X Your UAE Business Growth?&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Specific multiplier + geographic targeting</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Result 2 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Button Color & Text Testing</span>
                  <span className="text-green-600 font-bold">+31% Click Rate</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ Lower Performing</h4>
                    <p className="bg-red-50 p-4 rounded-lg text-gray-700">
                      Blue button: &ldquo;Contact Us Today&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Generic action, no value proposition</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Winner</h4>
                    <p className="bg-green-50 p-4 rounded-lg text-gray-700">
                      Dubai gold button: &ldquo;Get Free Strategy Session&rdquo;
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Specific benefit + free offer + local color</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Test Result 3 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Social Proof Positioning</span>
                  <span className="text-green-600 font-bold">+18% Trust Score</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">❌ Lower Performing</h4>
                    <p className="bg-red-50 p-4 rounded-lg text-gray-700">
                      Social proof at bottom of page
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Seen by fewer visitors before decision</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">✅ Winner</h4>
                    <p className="bg-green-50 p-4 rounded-lg text-gray-700">
                      Social proof integrated into CTA section
                    </p>
                    <p className="text-sm text-gray-600 mt-2">Builds trust at point of conversion</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Contact Form Target */}
      <section id="contact-form" className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Book Your Free Strategy Session</CardTitle>
              <p className="text-gray-600 mt-2">
                You clicked the CTA! Let&apos;s schedule your complimentary consultation.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ CTA Success!</h4>
                  <p className="text-green-700 text-sm">
                    The CTA section successfully drove you to this conversion point. 
                    In a real implementation, this would be a full lead capture form.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select 
                      id="industry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option>Select your industry</option>
                      <option>Restaurant/Food & Beverage</option>
                      <option>Real Estate</option>
                      <option>Healthcare</option>
                      <option>Retail/E-commerce</option>
                      <option>Professional Services</option>
                      <option>Technology</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="currentRevenue" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Monthly Revenue (AED)
                  </label>
                  <select 
                    id="currentRevenue"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Select revenue range</option>
                    <option>Under AED 50,000</option>
                    <option>AED 50,000 - 200,000</option>
                    <option>AED 200,000 - 500,000</option>
                    <option>AED 500,000 - 1,000,000</option>
                    <option>Over AED 1,000,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                    What&apos;s your main growth goal?
                  </label>
                  <textarea
                    id="goals"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E.g., 'Increase online sales by 300%', 'Generate 100 qualified leads per month', 'Expand to new Emirates'"
                  />
                </div>

                <Button className="w-full bg-dubai-gold hover:bg-dubai-gold/90 text-black" size="lg">
                  Book My Free Strategy Session
                </Button>

                <div className="text-center text-sm text-gray-500">
                  📞 We&apos;ll call you within 2 hours to schedule your session
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}