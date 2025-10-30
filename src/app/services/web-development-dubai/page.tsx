'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { CheckIcon, CodeBracketIcon, DevicePhoneMobileIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, StarIcon, GlobeAltIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { generateServiceSchema } from '@/lib/schema';

const benefits = [
  {
    title: 'Mobile-First Responsive Design',
    description: 'Websites that look perfect on all devices, from smartphones to desktops, ensuring optimal user experience for Dubai mobile users.',
    icon: DevicePhoneMobileIcon
  },
  {
    title: 'Arabic Language Support & RTL Layout',
    description: 'Native Arabic support with proper right-to-left layout, catering to local UAE audiences and cultural preferences.',
    icon: GlobeAltIcon
  },
  {
    title: 'E-commerce Integration',
    description: 'Seamless online store functionality with shopping carts, payment processing, and inventory management for Dubai businesses.',
    icon: CurrencyDollarIcon
  },
  {
    title: 'SEO Optimization',
    description: 'Built-in SEO best practices to rank higher on Google UAE and attract more local customers organically.',
    icon: CheckIcon
  },
  {
    title: 'Lightning Fast Performance',
    description: 'Optimized loading speeds under 3 seconds, crucial for user experience and search rankings in competitive UAE market.',
    icon: CodeBracketIcon
  },
  {
    title: 'UAE Payment Gateway Integration',
    description: 'Integration with local payment systems like Network International, PayTabs, and major UAE banks for seamless transactions.',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Google Analytics Setup',
    description: 'Complete tracking setup to monitor website performance, user behavior, and conversion rates for data-driven decisions.',
    icon: CheckIcon
  },
  {
    title: '24/7 Support & Maintenance',
    description: 'Round-the-clock technical support and regular updates to keep your website secure and running smoothly.',
    icon: UserGroupIcon
  }
];

const developmentProcess = [
  {
    step: 1,
    title: 'Discovery & Planning',
    duration: '1-2 days',
    description: 'Business analysis, competitor research, strategy',
    details: 'We analyze your business goals, target audience, and UAE market positioning to create a comprehensive development strategy.'
  },
  {
    step: 2,
    title: 'Design & Wireframing',
    duration: '3-5 days',
    description: 'Custom designs, UAE market focus',
    details: 'Creating visually appealing designs that resonate with UAE audiences while maintaining modern web standards.'
  },
  {
    step: 3,
    title: 'Development & Testing',
    duration: '7-14 days',
    description: 'Clean code, cross-device testing',
    details: 'Building robust websites with clean code, thorough testing across all devices and browsers popular in UAE.'
  },
  {
    step: 4,
    title: 'Launch & Optimization',
    duration: '1-2 days',
    description: 'Go live, SEO setup, monitoring',
    details: 'Deploying your website, configuring SEO settings, and setting up monitoring systems for optimal performance.'
  }
];

const pricingPackages = [
  {
    name: 'Startup Website',
    price: 'AED 5,000',
    features: [
      '5 pages',
      'Responsive design',
      'Basic SEO',
      '3 months support',
      'Contact forms',
      'Social media integration',
      'Google Analytics setup'
    ],
    popular: false
  },
  {
    name: 'Business Website',
    price: 'AED 12,000',
    features: [
      '10 pages',
      'Arabic support',
      'Advanced SEO',
      'E-commerce integration',
      '6 months support',
      'Payment gateway setup',
      'Live chat integration',
      'Content management system'
    ],
    popular: true
  },
  {
    name: 'Enterprise Website',
    price: 'AED 25,000+',
    features: [
      'Unlimited pages',
      'Custom functionality',
      '12 months support',
      'Advanced integrations',
      'Custom CMS',
      'Multi-language support',
      'Performance optimization',
      'Dedicated project manager'
    ],
    popular: false
  }
];

const portfolio = [
  {
    title: 'Luxury Real Estate Dubai',
    category: 'Real Estate',
    image: '/images/portfolio/dubai-real-estate.jpg',
    description: 'Premium property website with Arabic support and advanced search functionality.',
    technologies: ['Next.js', 'MongoDB', 'Vercel']
  },
  {
    title: 'UAE Healthcare Network',
    category: 'Healthcare',
    image: '/images/portfolio/healthcare-uae.jpg',
    description: 'Medical center website with appointment booking and patient portal integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL']
  },
  {
    title: 'Dubai Restaurant Chain',
    category: 'Food & Beverage',
    image: '/images/portfolio/restaurant-dubai.jpg',
    description: 'Multi-location restaurant website with online ordering and delivery integration.',
    technologies: ['Next.js', 'Stripe', 'MongoDB']
  },
  {
    title: 'Abu Dhabi Construction',
    category: 'Construction',
    image: '/images/portfolio/construction-abudhabi.jpg',
    description: 'Corporate website showcasing major UAE infrastructure projects and services.',
    technologies: ['React', 'Vercel', 'Headless CMS']
  },
  {
    title: 'Sharjah E-commerce Store',
    category: 'E-commerce',
    image: '/images/portfolio/ecommerce-sharjah.jpg',
    description: 'Fashion retail website with bilingual support and UAE payment gateway integration.',
    technologies: ['Next.js', 'WooCommerce', 'PayTabs']
  },
  {
    title: 'Dubai Legal Firm',
    category: 'Professional Services',
    image: '/images/portfolio/legal-dubai.jpg',
    description: 'Law firm website with case study portal and client consultation booking system.',
    technologies: ['React', 'Node.js', 'MongoDB']
  }
];

const technologies = [
  { name: 'Next.js', description: 'React framework for production-ready websites', logo: '/images/tech/nextjs.svg' },
  { name: 'React', description: 'Modern JavaScript library for user interfaces', logo: '/images/tech/react.svg' },
  { name: 'Node.js', description: 'Server-side JavaScript runtime', logo: '/images/tech/nodejs.svg' },
  { name: 'MongoDB', description: 'NoSQL database for scalable applications', logo: '/images/tech/mongodb.svg' },
  { name: 'Vercel', description: 'Cloud platform for hosting and deployment', logo: '/images/tech/vercel.svg' }
];

const testimonials = [
  {
    name: 'Ahmed Al-Mansouri',
    company: 'Dubai Properties LLC',
    role: 'CEO',
    content: 'Henry Club Digital delivered an exceptional real estate website that perfectly captures our luxury brand. The Arabic integration is flawless.',
    rating: 5,
    image: '/images/testimonials/ahmed-mansouri.jpg'
  },
  {
    name: 'Sarah Johnson',
    company: 'UAE Medical Center',
    role: 'Marketing Director',
    content: 'Our new website has increased online appointments by 300%. The team understood our needs and delivered beyond expectations.',
    rating: 5,
    image: '/images/testimonials/sarah-johnson.jpg'
  },
  {
    name: 'Khalid bin Rashid',
    company: 'Al-Noor Restaurant Group',
    role: 'Operations Manager',
    content: 'The e-commerce integration transformed our business. We now process 500+ online orders daily across our Dubai locations.',
    rating: 5,
    image: '/images/testimonials/khalid-rashid.jpg'
  }
];

const faqs = [
  {
    question: 'How long does it take to develop a website in Dubai?',
    answer: 'Typical timelines are 2-4 weeks for basic websites, 4-8 weeks for business websites with e-commerce, and 8-16 weeks for enterprise solutions. We provide detailed project timelines during initial consultation.'
  },
  {
    question: 'Do you provide Arabic website development?',
    answer: 'Yes, we specialize in bilingual Arabic-English websites with proper RTL (right-to-left) support. Our team includes native Arabic speakers ensuring cultural accuracy and proper localization.'
  },
  {
    question: 'What is included in your web development pricing?',
    answer: 'All packages include responsive design, SEO setup, Google Analytics, contact forms, and support period. Higher tiers add e-commerce, Arabic support, and advanced integrations.'
  },
  {
    question: 'Do you integrate UAE payment gateways?',
    answer: 'Yes, we integrate major UAE payment systems including Network International, PayTabs, Checkout.com, and local bank payment gateways for seamless transactions.'
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'All our websites are built mobile-first with responsive design ensuring perfect functionality on smartphones, tablets, and desktops used throughout UAE.'
  },
  {
    question: 'Do you provide ongoing website maintenance?',
    answer: 'Yes, all projects include free support period (3-12 months based on package). We also offer maintenance packages starting from AED 500/month for ongoing updates and security.'
  },
  {
    question: 'Can you migrate my existing website?',
    answer: 'Yes, we provide website migration services preserving your SEO rankings and existing content. Migration is included in our development packages when building a new site.'
  },
  {
    question: 'What makes your web development different in Dubai?',
    answer: 'We specialize in UAE market with local payment integrations, Arabic support, cultural understanding, and SEO optimized for UAE search behavior and Google.ae rankings.'
  }
];

export default function WebDevelopmentDubai() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="Web Development Dubai | Custom Websites UAE | Henry Club Digital"
        description="Professional web development services in Dubai & UAE. Custom websites with Arabic support, mobile-first design, and e-commerce integration. Starting from AED 5,000. Free consultation!"
        keywords="web development Dubai, website design UAE, custom website Dubai, responsive web design, Arabic website development, e-commerce website Dubai"
        canonicalUrl="/services/web-development-dubai"
        schema={generateServiceSchema({
          name: 'Web Development Dubai',
          description: 'Professional web development services in Dubai & UAE. Custom websites with Arabic support, mobile-first design, and e-commerce integration.',
          url: 'https://digital.henryclub.ae/services/web-development-dubai',
          category: 'Web Development'
        })}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Professional Web Development Services in Dubai & UAE
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Custom websites built for UAE market success with Arabic support, mobile-first design, 
                and seamless e-commerce integration. Transform your business with professional web development.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>Arabic Support</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>Mobile-First Design</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-yellow-400 mr-2" />
                  <span>UAE Payment Integration</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-center">
                  Get Free Quote
                </Link>
                <Link href="/portfolio" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center">
                  View Portfolio
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/web-development-dubai.jpg"
                alt="Web Development Dubai UAE"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Custom Websites Built for UAE Market Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create powerful, responsive websites that drive results for Dubai and UAE businesses. 
              Our expertise in local market dynamics, Arabic language support, and mobile-first approach 
              ensures your website connects with your target audience effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <CodeBracketIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Modern Technology</h3>
              <p className="text-gray-600">
                Built with latest web technologies like Next.js and React for superior performance and scalability.
              </p>
            </div>
            <div className="text-center">
              <GlobeAltIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Arabic Support</h3>
              <p className="text-gray-600">
                Native Arabic language support with proper RTL layout catering to UAE&apos;s diverse audience.
              </p>
            </div>
            <div className="text-center">
              <DevicePhoneMobileIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Mobile-First Design</h3>
              <p className="text-gray-600">
                Responsive designs that look perfect on all devices, optimized for Dubai&apos;s mobile-heavy market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600">
              8 key benefits that make our web development services stand out in the UAE market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <benefit.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Web Development Process
            </h2>
            <p className="text-xl text-gray-600">
              4 strategic steps to deliver exceptional websites that drive business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-bold text-xl mb-2">{process.title}</h3>
                <div className="flex items-center justify-center mb-3">
                  <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm text-gray-500">{process.duration}</span>
                </div>
                <p className="text-gray-600 mb-3">{process.description}</p>
                <p className="text-sm text-gray-500">{process.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Web Development Pricing Packages
            </h2>
            <p className="text-xl text-gray-600">
              Transparent pricing for Dubai businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-600 relative' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-bold text-2xl mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/quote" 
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                      pkg.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Dubai Website Development Portfolio
            </h2>
            <p className="text-xl text-gray-600">
              Successful websites we&apos;ve built for UAE businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                  <h3 className="font-bold text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Modern technologies for powerful, scalable websites
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={60}
                    height={60}
                    className="mx-auto"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Testimonials from satisfied Dubai business owners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about our web development services in Dubai
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <h3 className="font-bold text-lg">{faq.question}</h3>
                  <ChevronDownIcon className={`h-5 w-5 transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Dream Website?
          </h2>
          <p className="text-xl mb-8">
            Transform your business with a professional website designed for the UAE market. 
            Get started with a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/quote" 
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Free Quote
            </Link>
            <Link 
              href="https://wa.me/971501234567?text=Hi, I'm interested in web development services" 
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}