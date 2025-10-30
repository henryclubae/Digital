'use client';

import SEO from '@/components/SEO';
import QuoteForm from '@/components/forms/QuoteForm';
import { CheckIcon, ClockIcon, ShieldCheckIcon, StarIcon, PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: ClockIcon,
    title: '24-Hour Response',
    description: 'Get your detailed quote within 24 hours, guaranteed'
  },
  {
    icon: ShieldCheckIcon,
    title: 'No Obligations',
    description: 'Free consultation with no strings attached'
  },
  {
    icon: CheckIcon,
    title: 'Custom Pricing',
    description: 'Tailored solutions based on your specific needs'
  }
];

const pricingRanges = [
  {
    service: 'Web Development',
    range: 'AED 5,000 - 25,000',
    description: 'From simple business websites to complex e-commerce platforms',
    features: ['Responsive Design', 'SEO Optimized', 'Content Management', '3 Months Support']
  },
  {
    service: 'Digital Marketing',
    range: 'AED 3,000 - 15,000/month',
    description: 'Comprehensive digital marketing campaigns and strategy',
    features: ['Social Media Management', 'Content Creation', 'Analytics', 'Campaign Management']
  },
  {
    service: 'SEO Services',
    range: 'AED 2,500 - 7,500/month',
    description: 'Search engine optimization for better rankings',
    features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Monthly Reports']
  },
  {
    service: 'Amazon Setup',
    range: 'AED 4,000 - 8,000',
    description: 'Complete Amazon store setup and optimization',
    features: ['Store Setup', 'Product Listing', 'Optimization', 'Initial Marketing']
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Submit Quote Request',
    description: 'Fill out our detailed form with your requirements',
    duration: '5 minutes'
  },
  {
    step: 2,
    title: 'Free Consultation',
    description: 'Discuss your project with our experts',
    duration: '30-60 minutes'
  },
  {
    step: 3,
    title: 'Custom Proposal',
    description: 'Receive detailed proposal with timeline and pricing',
    duration: '24 hours'
  },
  {
    step: 4,
    title: 'Agreement & Launch',
    description: 'Finalize details and start your project',
    duration: '2-3 days'
  }
];

const guarantees = [
  {
    icon: CheckIcon,
    title: 'Free Consultation',
    description: 'No obligations, completely free consultation with industry experts'
  },
  {
    icon: ClockIcon,
    title: '24-Hour Response',
    description: 'Guaranteed response within 24 hours with detailed quote'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Custom Pricing',
    description: 'Tailored solutions and pricing based on your specific requirements'
  },
  {
    icon: StarIcon,
    title: 'Satisfaction Guarantee',
    description: 'Money-back guarantee if you\'re not satisfied with our services'
  }
];

const testimonials = [
  {
    name: 'Ahmed Al Mansouri',
    company: 'Al Mansouri Trading LLC',
    quote: 'Henry Club provided a detailed quote that was exactly what we needed. Their transparent pricing and clear timeline helped us make the right decision for our business.',
    service: 'E-commerce Development'
  },
  {
    name: 'Sarah Mitchell',
    company: 'Dubai Wellness Center',
    quote: 'The quote process was thorough and professional. They took time to understand our needs and provided options that fit our budget perfectly.',
    service: 'Digital Marketing Package'
  },
  {
    name: 'Mohammad Hassan',
    company: 'Emirates Tech Solutions',
    quote: 'Impressed with their detailed proposal. Every aspect was covered, from timeline to deliverables. Made it easy to get approval from our board.',
    service: 'Web Development & SEO'
  }
];

const trustSignals = [
  { number: '500+', label: 'Businesses Quoted' },
  { number: '95%', label: 'Quote-to-Client Conversion' },
  { number: '24hrs', label: 'Response Time' },
  { number: '200+', label: 'Successful Projects' }
];

const alternativeContacts = [
  {
    title: 'Phone Consultation',
    description: 'Speak directly with our quotes specialist',
    contact: '+971 50 123 4567',
    action: 'Call Now',
    href: 'tel:+971501234567',
    icon: PhoneIcon
  },
  {
    title: 'WhatsApp Quote',
    description: 'Get quick quote via WhatsApp chat',
    contact: 'Chat with Expert',
    action: 'Start Chat',
    href: 'https://wa.me/971501234567?text=Hi, I need a quote for digital marketing services',
    icon: ChatBubbleLeftRightIcon
  },
  {
    title: 'Email Request',
    description: 'Send detailed requirements via email',
    contact: 'quotes@henryclub.ae',
    action: 'Send Email',
    href: 'mailto:quotes@henryclub.ae',
    icon: EnvelopeIcon
  }
];

const quoteFAQs = [
  {
    question: 'How accurate are the quote estimates?',
    answer: 'Our quotes are highly accurate and based on detailed requirements analysis. We provide fixed pricing for defined scope, with clear terms for any additional work. 95% of our quotes match the final project cost.'
  },
  {
    question: 'Is the consultation really free?',
    answer: 'Yes, absolutely free with no obligations. We believe in earning your trust through expertise and value, not pressure. The consultation helps us understand your needs to provide an accurate quote.'
  },
  {
    question: 'How long is the quote valid?',
    answer: 'Our quotes are valid for 30 days from the date issued. This gives you sufficient time to review, get approvals, and make informed decisions. We can extend validity if needed.'
  },
  {
    question: 'Can I negotiate the pricing?',
    answer: 'We provide competitive, fair pricing based on market rates and project complexity. However, we\'re always open to discussing budget constraints and finding solutions that work for both parties.'
  },
  {
    question: 'What if my project requirements change?',
    answer: 'We understand projects evolve. Minor changes are usually accommodated within the original scope. For significant changes, we\'ll provide updated quotes with transparent pricing for additional work.'
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment terms including milestone-based payments for larger projects, monthly retainers for ongoing services, and custom payment schedules based on your cash flow needs.'
  }
];

export default function QuotePage() {
  return (
    <>
      <SEO
        title="Get Free Quote - Digital Marketing Services Dubai UAE | Henry Club"
        description="Get custom quote for digital marketing services in UAE. Free consultation, no obligations, 24-hour response. Web development, SEO, social media marketing pricing."
        keywords="digital marketing quote Dubai, UAE marketing services pricing, free consultation Dubai"
        canonicalUrl="/quote"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get Custom Quote for<br />
              Your <span className="text-dubai-gold">UAE Business</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transparent pricing, detailed proposals, and expert consultation for your digital marketing needs. 
              No hidden fees, no surprises - just honest, competitive quotes.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 text-center">
                <benefit.icon className="h-12 w-12 text-dubai-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-dubai-gold mb-1">
                  {signal.number}
                </div>
                <div className="text-gray-300 text-sm">{signal.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Custom Quote
            </h2>
            <p className="text-xl text-gray-600">
              Fill out our simple form and receive a detailed proposal within 24 hours
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>

      {/* Pricing Expectations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pricing Expectations
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing ranges to help you budget for your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingRanges.map((pricing, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pricing.service}</h3>
                <div className="text-2xl font-bold text-dubai-gold mb-4">{pricing.range}</div>
                <p className="text-gray-600 text-sm mb-4">{pricing.description}</p>
                
                <ul className="space-y-2">
                  {pricing.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 bg-blue-50 p-4 rounded-lg inline-block">
              <strong>Note:</strong> Final pricing depends on project complexity, timeline, and specific requirements. 
              All quotes include detailed scope and deliverables.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Quote Process
            </h2>
            <p className="text-xl text-gray-600">
              From initial request to project launch - here&apos;s how we work
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-dubai-gold hidden md:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                          <span className="text-sm text-dubai-gold">{step.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dubai-gold rounded-full border-4 border-white hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-gray-600">
              Your peace of mind is our priority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <guarantee.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Clients Say About Our Quotes
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from businesses who received quotes from us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-sm text-dubai-gold font-medium">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prefer Another Way to Get Your Quote?
            </h2>
            <p className="text-xl text-gray-600">
              Choose the contact method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {alternativeContacts.map((contact, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <contact.icon className="h-12 w-12 text-dubai-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{contact.title}</h3>
                <p className="text-gray-600 mb-4">{contact.description}</p>
                <p className="text-blue-600 font-semibold mb-4">{contact.contact}</p>
                <a
                  href={contact.href}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  target={contact.href.startsWith('https') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('https') ? 'noopener noreferrer' : ''}
                >
                  {contact.action}
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Quote Process FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our quote process and pricing
            </p>
          </div>

          <div className="space-y-6">
            {quoteFAQs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Your Custom Quote?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of UAE businesses that trust us with their digital transformation
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote-form"
              className="inline-flex items-center px-8 py-4 bg-dubai-gold text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get My Free Quote
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
          
          <p className="text-blue-200 text-sm mt-6">
            ✅ Free Consultation • ✅ 24-Hour Response • ✅ No Obligations
          </p>
        </div>
      </section>
    </>
  );
}