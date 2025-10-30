'use client';

import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';
import { MessageCircle, Phone } from 'lucide-react';

const achievements = [
  '500+ UAE Businesses Served',
  '200% Average ROI Increase', 
  '99% Client Satisfaction Rate',
  'Google Premier Partner'
];

const auditBenefits = [
  'Complete website SEO analysis',
  'Social media performance review',
  'Competitor analysis report',
  'Custom growth strategy',
  'ROI improvement recommendations',
  'Free 30-minute consultation call'
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden min-h-screen">
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-800/95" />
        <div className="absolute inset-0 bg-dots-white opacity-30" />
      </div>

      {/* Main Content Container */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <div className="mb-12 lg:mb-0">
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Dubai&apos;s Premier{' '}
                <span className="text-dubai-gold">
                  Digital Marketing
                </span>
                {' '}&amp; E-commerce Agency
              </h1>

              {/* Subtitle */}
              <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
                Transform your business with data-driven strategies that deliver{' '}
                <strong className="text-dubai-gold font-semibold">
                  200% ROI increase
                </strong>
                {' '}for UAE companies. From Dubai to Abu Dhabi, we fuel digital growth.
              </p>

              {/* Achievements Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckIcon className="h-6 w-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-100 font-medium">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  variant="dubai-gold" 
                  size="lg"
                  className="group"
                  onClick={() => {
                    // Scroll to contact form or open modal
                    document.getElementById('contact-form')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  Get Free Digital Audit
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    window.open('https://wa.me/971501234567?text=Hi! I\'d like to discuss my digital marketing needs.', '_blank');
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp +971 50 123 4567
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-400 mr-2" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-400 mr-2" />
                  <span>Cancel Anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-4 w-4 text-green-400 mr-2" />
                  <span>Results in 30 Days</span>
                </div>
              </div>
            </div>

            {/* Right Side - Consultation Offer Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                
                {/* Card Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-dubai-gold/10 rounded-full mb-4">
                    <CheckIcon className="h-8 w-8 text-dubai-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Free Digital Marketing Audit
                  </h3>
                  <p className="text-gray-600">
                    Discover untapped opportunities in your digital presence
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  {auditBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing Banner */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 border border-green-200 rounded-lg p-4 mb-6 text-center">
                  <div className="text-green-800">
                    <div className="text-sm font-medium">Normally Worth</div>
                    <div className="text-2xl font-bold">AED 2,500</div>
                    <div className="text-lg font-semibold text-green-600">
                      Absolutely FREE for Limited Time
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="space-y-3">
                  <Button 
                    className="w-full" 
                    size="lg"
                    onClick={() => {
                      // Track conversion event
                      if (typeof window !== 'undefined' && window.gtag) {
                        window.gtag('event', 'hero_audit_request', {
                          event_category: 'engagement',
                          event_label: 'hero_section'
                        });
                      }
                      
                      // Scroll to contact form
                      document.getElementById('contact-form')?.scrollIntoView({ 
                        behavior: 'smooth' 
                      });
                    }}
                  >
                    Claim Your Free Audit Now
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      window.open('tel:+971501234567', '_self');
                    }}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Or Call +971 50 123 4567
                  </Button>
                </div>

                {/* Urgency & Social Proof */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-2">
                      🔥 Limited Time Offer - Only 10 Audits per Month
                    </div>
                    <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
                      <span>✓ No Credit Card Required</span>
                      <span>✓ 100% Free</span>
                      <span>✓ Instant Access</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-dubai-gold/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
    </section>
  );
}