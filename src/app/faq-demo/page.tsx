'use client';

import FAQSection from '@/components/sections/FAQSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  QuestionMarkCircleIcon, 
  ChatBubbleLeftRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function FAQDemo() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Introduction Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <QuestionMarkCircleIcon className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h1 className="text-4xl font-bold mb-4">
            Your Questions Answered
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Everything you need to know about digital marketing services in Dubai and UAE
          </p>
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-lg">
              Get instant answers to the most common questions about costs, timelines, 
              processes, and results from our digital marketing experts.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Additional Support Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h2>
            <p className="text-xl text-gray-600">
              Our team is ready to provide personalized answers and detailed consultations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Live Chat */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  WhatsApp Chat
                </h3>
                <p className="text-gray-600 mb-6">
                  Get instant responses to your questions via WhatsApp. Our team responds within 15 minutes during business hours.
                </p>
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.open('https://wa.me/971501234567?text=Hi, I have questions about your digital marketing services', '_blank')}
                >
                  Start WhatsApp Chat
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                  Available: 9 AM - 9 PM UAE Time
                </div>
              </CardContent>
            </Card>

            {/* Phone Consultation */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PhoneIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Phone Consultation
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a 30-minute free consultation to discuss your specific needs and get detailed answers.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('tel:+971501234567', '_self')}
                >
                  Call +971 50 123 4567
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                  Free 30-min consultation available
                </div>
              </CardContent>
            </Card>

            {/* Email Support */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <EnvelopeIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Email Inquiry
                </h3>
                <p className="text-gray-600 mb-6">
                  Send detailed questions and get comprehensive written responses with recommendations and pricing.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:hello@henryclub.ae?subject=Digital Marketing Inquiry', '_self')}
                >
                  Send Email Inquiry
                </Button>
                <div className="mt-4 text-sm text-gray-500">
                  Response within 24 hours
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Facts About Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Key information at a glance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">AED 3K+</div>
              <div className="text-sm text-gray-600">Starting monthly packages</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">3-6M</div>
              <div className="text-sm text-gray-600">Months to see SEO results</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years combined experience</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">Emergency support available</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">2-12W</div>
              <div className="text-sm text-gray-600">Web development timeline</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-indigo-600 mb-2">3-5X</div>
              <div className="text-sm text-gray-600">Typical ROI within 6 months</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-pink-600 mb-2">50%</div>
              <div className="text-sm text-gray-600">Deposit for new projects</div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-3xl font-bold text-cyan-600 mb-2">3M</div>
              <div className="text-sm text-gray-600">Free support included</div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form Target */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ask Your Custom Question</CardTitle>
              <p className="text-gray-600 mt-2">
                Don&apos;t see your question above? Send us your specific inquiry and get a detailed response.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
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
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                    Business/Industry
                  </label>
                  <input
                    id="business"
                    name="business"
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="E.g., Restaurant, Real Estate, Tech Startup"
                  />
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Question *
                  </label>
                  <textarea
                    id="question"
                    name="question"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ask anything about our digital marketing services, pricing, timelines, or specific requirements for your business..."
                  />
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    How urgent is this?
                  </label>
                  <select 
                    id="urgency"
                    name="urgency"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select urgency level</option>
                    <option value="general-inquiry">General inquiry - no rush</option>
                    <option value="planning">Planning for next month</option>
                    <option value="soon">Need to start within 2 weeks</option>
                    <option value="urgent">Urgent - need immediate response</option>
                  </select>
                </div>

                <Button className="w-full" size="lg">
                  Send My Question
                </Button>

                <div className="text-center text-sm text-gray-500">
                  We typically respond within 2-4 hours during business hours.
                  Urgent inquiries get priority response within 30 minutes.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
}