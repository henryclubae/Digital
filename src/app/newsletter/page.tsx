import SEO from '@/components/SEO';
import NewsletterSignup from '@/components/NewsletterSignup';
import Link from 'next/link';
import { EnvelopeIcon, CheckIcon, TrophyIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function NewsletterPage() {
  return (
    <>
      <SEO 
        title="Digital Marketing Newsletter UAE | Henry Club Digital Insights"
        description="Subscribe to UAE's top digital marketing newsletter. Get exclusive tips, case studies, and market insights from Dubai's leading digital marketing experts."
        keywords="digital marketing newsletter UAE, Dubai marketing insights, UAE business tips, digital marketing trends Dubai"
        canonicalUrl="/newsletter"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <EnvelopeIcon className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
          <h1 className="text-5xl font-bold mb-6">
            UAE&apos;s #1 Digital Marketing Newsletter
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Join 5,000+ UAE business owners getting exclusive digital marketing insights, 
            strategies, and case studies delivered weekly to their inbox.
          </p>
          
          <div className="bg-yellow-500 text-blue-900 p-4 rounded-lg mb-8 inline-block">
            <div className="flex items-center">
              <TrophyIcon className="h-6 w-6 mr-2" />
              <span className="font-bold">FREE: Worth AED 500+ - Exclusive UAE Market Insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Get Every Week
            </h2>
            <p className="text-xl text-gray-600">
              Practical insights that drive real results for UAE businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Proven Strategies</h3>
              <p className="text-gray-600">
                Step-by-step strategies that our clients use to achieve 200%+ ROI increases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">UAE Market Insights</h3>
              <p className="text-gray-600">
                Exclusive analysis of UAE market trends, consumer behavior, and opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-3">Success Stories</h3>
              <p className="text-gray-600">
                Real case studies from Dubai and Abu Dhabi businesses with detailed results.
              </p>
            </div>
          </div>

          {/* Newsletter Signup Form */}
          <div className="max-w-2xl mx-auto">
            <NewsletterSignup 
              showInterests={true}
              defaultLanguage="en"
              variant="default"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by UAE&apos;s Leading Businesses
            </h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">5,000+</div>
                <div className="text-gray-600">Subscribers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">92%</div>
                <div className="text-gray-600">Open Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Case Studies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">5 Years</div>
                <div className="text-gray-600">UAE Experience</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Recent Newsletter Topics
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  &quot;How Dubai Hotels Increased Bookings by 250% Using Instagram Stories&quot;
                </h4>
                <p className="text-gray-600 text-sm">
                  Complete breakdown of the campaign strategy, creative approach, and results.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  &quot;UAE E-commerce Trends: What&apos;s Working in 2024&quot;
                </h4>
                <p className="text-gray-600 text-sm">
                  Data-driven insights on consumer behavior and successful strategies.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  &quot;Google Ads UAE: Cultural Considerations That Drive Results&quot;
                </h4>
                <p className="text-gray-600 text-sm">
                  Local insights for creating high-converting ad campaigns.
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  &quot;Arabic Content Strategy: Authentic vs. Translated&quot;
                </h4>
                <p className="text-gray-600 text-sm">
                  Best practices for creating compelling Arabic marketing content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Subscribers Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div className="ml-4">
                  <div className="font-semibold">Ahmed Al-Mansoori</div>
                  <div className="text-sm text-gray-600">CEO, Dubai Tech Startup</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;The insights I get from Henry Club&apos;s newsletter have directly contributed to our 300% 
                growth this year. The UAE-specific strategies are invaluable.&quot;
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  SA
                </div>
                <div className="ml-4">
                  <div className="font-semibold">Sarah Anderson</div>
                  <div className="text-sm text-gray-600">Marketing Director, Abu Dhabi Resort</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &quot;Every newsletter contains at least one actionable tip I can implement immediately. 
                Our online bookings have never been higher.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">How often will I receive emails?</h3>
              <p className="text-gray-600">
                We send one comprehensive newsletter every Tuesday with the week&apos;s insights, 
                plus occasional breaking news or special offers (max 2 emails per week).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Can I choose my content preferences?</h3>
              <p className="text-gray-600">
                Yes! When you subscribe, you can select your areas of interest such as SEO, 
                Social Media, E-commerce, etc. We&apos;ll tailor content based on your preferences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibent text-lg mb-2">Is the content available in Arabic?</h3>
              <p className="text-gray-600">
                Absolutely! You can choose to receive our newsletter in English or Arabic, 
                with content specifically crafted for each language and cultural context.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold text-lg mb-2">Can I unsubscribe anytime?</h3>
              <p className="text-gray-600">
                Of course! Every email includes an easy unsubscribe link, and we respect your 
                choice immediately. You can also update your preferences at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Digital Marketing?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of successful UAE businesses who rely on our insights to grow their revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#newsletter-form" 
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Subscribe Now (It&apos;s Free)
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Contact Us Instead
            </Link>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            No spam • Unsubscribe anytime • GDPR compliant • 100% secure
          </p>
        </div>
      </section>
    </>
  );
}