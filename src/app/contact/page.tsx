import SEO from '@/components/SEO';
import ContactForm from '@/components/forms/ContactForm';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, ExclamationTriangleIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const contactMethods = [
  {
    title: 'Phone Consultation',
    description: 'Speak directly with our digital marketing experts',
    contact: '+971 50 123 4567',
    href: 'tel:+971501234567',
    icon: PhoneIcon,
    available: 'Sunday - Thursday, 9 AM - 6 PM GST'
  },
  {
    title: 'WhatsApp Support',
    description: 'Quick responses via WhatsApp for instant communication',
    contact: 'Chat Now',
    href: 'https://wa.me/971501234567?text=Hi, I need consultation for my digital marketing needs',
    icon: ChatBubbleLeftRightIcon,
    available: '24/7 Quick Response'
  },
  {
    title: 'Email Inquiry',
    description: 'Send detailed project requirements and get comprehensive proposals',
    contact: 'info@henryclub.ae',
    href: 'mailto:info@henryclub.ae',
    icon: EnvelopeIcon,
    available: 'Response within 2 hours'
  }
];

const consultationFAQs = [
  {
    question: 'What happens during the free consultation?',
    answer: 'Our consultation includes a comprehensive analysis of your current digital presence, discussion of your business goals, identification of growth opportunities, and a customized strategy proposal. We also provide competitive analysis and budget recommendations tailored to your needs.'
  },
  {
    question: 'How long does the consultation take?',
    answer: 'Initial consultations typically last 45-60 minutes. We can conduct them in-person at our Sharjah office, via video call, or at your business location in Dubai/UAE. We ensure adequate time to understand your business thoroughly.'
  },
  {
    question: 'Do you provide consultation for all business sizes?',
    answer: 'Yes, we work with startups, SMEs, and enterprises across UAE. Our approach is tailored to your business size, budget, and growth stage. From small local businesses to large corporations, we have relevant experience and solutions.'
  },
  {
    question: 'What should I prepare for the consultation?',
    answer: 'Please bring information about your current marketing efforts, business goals, target audience, competitors, and any existing website or social media accounts. This helps us provide more accurate recommendations during the consultation.'
  }
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Henry Club Digital Agency Dubai | Free Consultation UAE"
        description="Contact Dubai's premier digital marketing agency. Get free consultation for your UAE business. Located in Sharjah Publishing City. Call +971 50 123 4567"
        keywords="contact digital marketing Dubai, Henry Club agency contact, UAE digital marketing consultation"
        canonicalUrl="/contact"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-dubai-gold">Dubai&apos;s Leading</span><br />
            Digital Marketing Agency
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your business with proven digital marketing strategies? 
            Get your free consultation with UAE&apos;s most trusted digital marketing experts.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-dubai-gold mb-2">
              <ExclamationTriangleIcon className="h-5 w-5" />
              <span className="font-semibold">Response Time Guarantee</span>
            </div>
            <p className="text-white">
              We respond to all inquiries within <strong>2 hours</strong> during business hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600">
              Choose your preferred contact method for immediate assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <method.icon className="h-12 w-12 text-dubai-gold mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.href}
                  className="text-blue-600 hover:text-blue-800 font-semibold text-lg block mb-2"
                  target={method.href.startsWith('https') ? '_blank' : '_self'}
                  rel={method.href.startsWith('https') ? 'noopener noreferrer' : ''}
                >
                  {method.contact}
                </a>
                <p className="text-sm text-gray-500">{method.available}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section - Two Column Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form - Left Column */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information - Right Column */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Visit Our Dubai Office
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Meet our team of digital marketing experts at our modern office in Sharjah Publishing City. 
                  We welcome clients for face-to-face consultations and project discussions.
                </p>
              </div>

              {/* Office Address */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="h-6 w-6 text-dubai-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Business Center, Sharjah Publishing City<br />
                      SPC Freezone, Sharjah UAE<br />
                      Near Dubai - Sharjah Border
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-dubai-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Number</h3>
                    <a
                      href="tel:+971501234567"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                    >
                      +971 50 123 4567
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Direct line to our consultation team</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-dubai-gold mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Address</h3>
                    <a
                      href="mailto:info@henryclub.ae"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
                    >
                      info@henryclub.ae
                    </a>
                    <p className="text-gray-600 text-sm mt-1">For detailed project discussions</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <div className="flex items-start space-x-4">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
                    <a
                      href="https://wa.me/971501234567?text=Hi, I need consultation for my digital marketing needs in Dubai/UAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Start WhatsApp Chat
                    </a>
                    <p className="text-gray-600 text-sm mt-2">Fastest way to get immediate assistance</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="flex items-start space-x-4">
                  <ClockIcon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <p><span className="font-medium">Sunday - Thursday:</span> 9:00 AM - 6:00 PM (GST)</p>
                      <p><span className="font-medium">Friday - Saturday:</span> Closed</p>
                      <p className="text-sm text-blue-600 mt-2">
                        Emergency support available 24/7 for urgent projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located in Sharjah Publishing City, easily accessible from Dubai
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video relative">
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-16 w-16 text-dubai-gold mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Google Map</h3>
                  <p className="text-gray-600 mb-4">
                    Business Center, Sharjah Publishing City<br />
                    SPC Freezone, Sharjah UAE
                  </p>
                  <p className="text-sm text-gray-500">
                    Map integration available with Google Maps API
                  </p>
                </div>
              </div>
              
              {/* Google Maps Embed would go here in production */}
              {/* 
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3472!2d55.3683!3d25.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzAwLjEiTiA1NcKwMjInMDYuMiJF!5e0!3m2!1sen!2sae!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              */}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Consultation Process FAQ
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our free consultation service
            </p>
          </div>

          <div className="space-y-6">
            {consultationFAQs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
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

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t border-red-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600" />
            <h2 className="text-2xl font-bold text-red-900">
              Emergency Project Support
            </h2>
          </div>
          
          <p className="text-red-800 mb-6 leading-relaxed">
            Need immediate assistance for critical business issues or urgent project deadlines? 
            Our emergency support team is available 24/7 for existing clients and urgent new projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971501234567"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Emergency Hotline
            </a>
            <a
              href="https://wa.me/971501234567?text=URGENT: I need immediate assistance with my digital marketing project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
            >
              <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2" />
              WhatsApp Emergency
            </a>
          </div>
          
          <p className="text-red-700 text-sm mt-4">
            Emergency support may include additional charges based on urgency and scope
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 200+ successful businesses that trust Henry Club Digital with their growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 bg-dubai-gold text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Free Consultation
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}