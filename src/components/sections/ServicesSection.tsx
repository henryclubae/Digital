'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  CodeBracketIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const services = [
  {
    title: 'Web Development Dubai',
    description: 'Custom websites built for UAE market with Arabic support, mobile-first design, and lightning-fast performance.',
    icon: CodeBracketIcon,
    features: [
      'Mobile-First Design',
      'Arabic Language Support',
      'E-commerce Integration',
      'Performance Optimized'
    ],
    href: '/services/web-development-dubai',
    price: 'Starting from AED 5,000',
    image: '/images/placeholder-service.svg'
  },
  {
    title: 'Digital Marketing UAE',
    description: 'Complete digital marketing strategy for UAE businesses including social media, PPC, and content marketing.',
    icon: MagnifyingGlassIcon,
    features: [
      'Social Media Marketing',
      'Google Ads Management',
      'Content Strategy',
      'Brand Development'
    ],
    href: '/services/digital-marketing-uae',
    price: 'Starting from AED 3,000/month',
    image: '/images/placeholder-service.svg'
  },
  {
    title: 'SEO Services Dubai',
    description: 'Dominate Google search results in UAE market with our proven SEO strategies and Arabic content optimization.',
    icon: MagnifyingGlassIcon,
    features: [
      'Local SEO Dubai',
      'Arabic Content SEO',
      'Technical Optimization',
      'Google My Business'
    ],
    href: '/services/seo-services-dubai',
    price: 'Starting from AED 2,500/month',
    image: '/images/placeholder-service.svg'
  },
  {
    title: 'Amazon FBA UAE',
    description: 'Launch and scale your products on Amazon UAE marketplace with our comprehensive FBA management services.',
    icon: ShoppingCartIcon,
    features: [
      'Product Listing Optimization',
      'Amazon PPC Management',
      'Inventory Management',
      'Brand Registry Setup'
    ],
    href: '/services/amazon-fba-uae',
    price: 'Starting from AED 4,000/month',
    image: '/images/placeholder-service.svg'
  },
  {
    title: 'Social Media Marketing',
    description: 'Engage UAE audiences on Instagram, TikTok, and LinkedIn with culturally relevant content and strategic campaigns.',
    icon: ChatBubbleLeftRightIcon,
    features: [
      'Instagram Marketing',
      'TikTok Campaigns',
      'LinkedIn B2B Strategy',
      'Arabic Content Creation'
    ],
    href: '/services/social-media-marketing',
    price: 'Starting from AED 2,000/month',
    image: '/images/placeholder-service.svg'
  },
  {
    title: 'Email Marketing UAE',
    description: 'Build lasting customer relationships with personalized email campaigns designed for UAE business culture.',
    icon: EnvelopeIcon,
    features: [
      'Email Automation',
      'Newsletter Design',
      'Customer Segmentation',
      'Performance Analytics'
    ],
    href: '/services/email-marketing-uae',
    price: 'Starting from AED 1,500/month',
    image: '/images/placeholder-service.svg'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Digital Marketing Services in Dubai &amp; UAE
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From web development to digital marketing, we provide comprehensive solutions 
            tailored for UAE businesses. Drive growth with our proven strategies that 
            deliver measurable results in the competitive Dubai market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={service.href}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-dubai-gold/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Link href={service.href}>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution for Your Business?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Every UAE business is unique. Let us create a tailored digital marketing 
              strategy that aligns with your goals, budget, and market positioning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="dubai-gold" 
                size="lg"
                className="group"
                onClick={() => {
                  // Track conversion event
                  if (typeof globalThis !== 'undefined' && 'gtag' in globalThis) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (globalThis as any).gtag('event', 'services_custom_quote_click', {
                      event_category: 'engagement',
                      event_label: 'services_section'
                    });
                  }
                  
                  // Scroll to contact form or open modal
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Get Custom Quote for Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  window.open('https://wa.me/971501234567?text=Hi! I\'d like to discuss a custom digital marketing solution for my business.', '_blank');
                }}
              >
                WhatsApp Consultation
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-6 pt-6 border-t border-gray-100 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Free Consultation
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Custom Pricing
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                UAE Market Expertise
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Proven ROI Results
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}