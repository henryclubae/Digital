'use client';

import ServicesSection from '@/components/sections/ServicesSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckIcon, StarIcon } from '@heroicons/react/24/solid';

export default function ServicesDemo() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Contact Form Target */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="mx-auto max-w-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Get Your Custom Quote</CardTitle>
              <p className="text-gray-600 mt-4">
                Tell us about your project and we&apos;ll provide a detailed proposal 
                with timeline and pricing tailored to your specific needs.
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
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select 
                      id="industry"
                      name="industry"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      aria-label="Select your business industry"
                    >
                      <option value="">Select your industry</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="hospitality">Hospitality & Tourism</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="finance">Finance & Banking</option>
                      <option value="education">Education</option>
                      <option value="technology">Technology</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
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

                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700 mb-3">
                    Services Interested In *
                  </legend>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Web Development',
                      'Digital Marketing',
                      'SEO Services',
                      'Social Media Marketing',
                      'Amazon FBA Management',
                      'Email Marketing',
                      'E-commerce Development',
                      'Brand Strategy'
                    ].map((service) => (
                      <label key={service} className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                          value={service}
                        />
                        <span className="ml-2 text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select 
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Select your project budget range"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under AED 10,000</option>
                    <option value="10k-25k">AED 10,000 - 25,000</option>
                    <option value="25k-50k">AED 25,000 - 50,000</option>
                    <option value="50k-100k">AED 50,000 - 100,000</option>
                    <option value="100k-plus">AED 100,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select 
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    aria-label="Select your preferred project timeline"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP (Rush project)</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="flexible">Flexible timeline</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please describe your project requirements, goals, and any specific features you need..."
                  />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="ml-3 text-sm text-blue-800">
                      <strong>What happens next?</strong> We&apos;ll review your requirements and get back 
                      to you within 24 hours with a detailed proposal including timeline, deliverables, 
                      and transparent pricing.
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  Get My Custom Quote
                </Button>

                <div className="text-center text-xs text-gray-500">
                  By submitting this form, you agree to receive project communications. 
                  Your information is secure and never shared with third parties.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories from Our UAE Clients
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real businesses across Dubai and UAE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={`star-1-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  &ldquo;Henry Club Digital increased our online sales by 400% within 6 months. 
                  Their understanding of UAE market is exceptional.&rdquo;
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Sarah Al Zaabi</div>
                  <div className="text-sm text-gray-500">CEO, Luxury Fashion Dubai</div>
                  <div className="text-xs text-blue-600 mt-1">Web Development + Digital Marketing</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={`star-2-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  &ldquo;From zero to #1 on Google for our target keywords in Dubai. 
                  ROI exceeded our expectations by 250%.&rdquo;
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Mohammad Hassan</div>
                  <div className="text-sm text-gray-500">Owner, Real Estate Group</div>
                  <div className="text-xs text-blue-600 mt-1">SEO Services + Local Marketing</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={`star-3-${i}`} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  &ldquo;Professional team that delivered exactly what they promised. 
                  Our Amazon sales in UAE market doubled in 3 months.&rdquo;
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">Jennifer Smith</div>
                  <div className="text-sm text-gray-500">Founder, Health & Beauty Brand</div>
                  <div className="text-xs text-blue-600 mt-1">Amazon FBA + Social Media</div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

    </div>
  );
}