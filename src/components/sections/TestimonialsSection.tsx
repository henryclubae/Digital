'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: 'Ahmed Al Mansoori',
    company: 'Dubai Luxury Properties',
    role: 'CEO',
    image: '/images/testimonials/ahmed.jpg',
    rating: 5,
    review: 'Henry Club transformed our digital presence. Our property inquiries increased by 300% in just 4 months. Their understanding of the Dubai market is exceptional.',
    industry: 'Real Estate',
    location: 'Dubai',
    service: 'Digital Marketing',
    metrics: '300% inquiry increase'
  },
  {
    name: 'Fatima Al Zahra',
    company: 'Emirates Fashion House',
    role: 'Founder & Creative Director',
    image: '/images/testimonials/fatima.jpg',
    rating: 5,
    review: 'Outstanding results! Our e-commerce sales jumped 250% after their website redesign and SEO optimization. They truly understand luxury retail in the UAE.',
    industry: 'Fashion & Retail',
    location: 'Abu Dhabi',
    service: 'Web Development & SEO',
    metrics: '250% sales increase'
  },
  {
    name: 'Mohammad Hassan',
    company: 'Gulf Coast Restaurant Group',
    role: 'Managing Director',
    image: '/images/testimonials/mohammad.jpg',
    rating: 5,
    review: 'Their social media marketing drove incredible foot traffic to our restaurants. We saw a 180% increase in reservations within 3 months. Highly recommended!',
    industry: 'Hospitality',
    location: 'Dubai',
    service: 'Social Media Marketing',
    metrics: '180% reservation boost'
  },
  {
    name: 'Sarah Johnson',
    company: 'HealthTech UAE',
    role: 'Marketing Manager',
    image: '/images/testimonials/sarah.jpg',
    rating: 5,
    review: 'Professional team with deep market knowledge. Our lead generation improved by 400% through their targeted digital campaigns. Excellent ROI!',
    industry: 'Healthcare Technology',
    location: 'Sharjah',
    service: 'Lead Generation',
    metrics: '400% lead increase'
  },
  {
    name: 'Khalid bin Rashid',
    company: 'Innovative Tech Solutions',
    role: 'Co-Founder',
    image: '/images/testimonials/khalid.jpg',
    rating: 5,
    review: 'Henry Club Digital delivered beyond expectations. Our B2B client acquisition increased by 220% with their LinkedIn marketing strategy. Outstanding work!',
    industry: 'Technology',
    location: 'Dubai',
    service: 'B2B Marketing',
    metrics: '220% client growth'
  },
  {
    name: 'Jennifer Martinez',
    company: 'Beauty & Wellness Dubai',
    role: 'CEO',
    image: '/images/testimonials/jennifer.jpg',
    rating: 5,
    review: 'Incredible Amazon FBA management! Our product sales on Amazon UAE grew by 350% in 6 months. Their expertise in e-commerce is unmatched.',
    industry: 'Beauty & Wellness',
    location: 'Dubai',
    service: 'Amazon FBA Management',
    metrics: '350% Amazon growth'
  }
];

const companyLogos = [
  { name: 'Dubai Properties', logo: '/images/logos/dubai-properties.png' },
  { name: 'Emirates Group', logo: '/images/logos/emirates-group.png' },
  { name: 'ADNOC', logo: '/images/logos/adnoc.png' },
  { name: 'Majid Al Futtaim', logo: '/images/logos/majid-al-futtaim.png' },
  { name: 'Emaar', logo: '/images/logos/emaar.png' },
  { name: 'Dubai Islamic Bank', logo: '/images/logos/dib.png' }
];

// Star rating component defined outside render
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: 5 }, (_, index) => (
        <div key={`star-${index}`}>
          {index < rating ? (
            <StarIconSolid className="h-5 w-5 text-yellow-400" />
          ) : (
            <StarIcon className="h-5 w-5 text-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotating carousel with 5-second intervals
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Manual navigation functions
  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our UAE Clients Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from businesses across Dubai, Abu Dhabi, and the UAE. 
            Discover how we&apos;ve helped companies achieve remarkable digital growth.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
          </div>

          <div className="relative px-8 md:px-16 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Client Photo & Info - Left Side */}
              <div className="text-center lg:text-left">
                <div className="relative w-32 h-32 mx-auto lg:mx-0 mb-6">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="rounded-full object-cover border-4 border-dubai-gold"
                  />
                  
                  {/* Verified Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-2">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {currentTestimonial.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-1">
                  {currentTestimonial.role}
                </p>
                <p className="text-gray-600 mb-4">
                  {currentTestimonial.company}
                </p>

                {/* Star Rating */}
                <div className="flex justify-center lg:justify-start mb-4">
                  <StarRating rating={currentTestimonial.rating} />
                </div>

                {/* Metrics Badge */}
                <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                  {currentTestimonial.metrics}
                </div>
              </div>

              {/* Review Text - Center/Right Side */}
              <div className="lg:col-span-2">
                <div className="relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 text-6xl text-dubai-gold opacity-30 font-serif">
                    &ldquo;
                  </div>
                  
                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 relative z-10">
                    {currentTestimonial.review}
                  </blockquote>
                  
                  {/* Service & Location Tags */}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6.5A1.5 1.5 0 0116.5 16H3.5A1.5 1.5 0 012 14.5V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {currentTestimonial.service}
                    </span>
                    <span className="inline-flex items-center bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {currentTestimonial.location}
                    </span>
                    <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      {currentTestimonial.industry}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={goToPrevious}
              className="bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={goToNext}
              className="bg-white/90 hover:bg-white text-gray-700 hover:text-gray-900 rounded-full p-3 shadow-lg transition-all duration-200 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Testimonial Dots Navigation */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Company Logos Row */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-gray-600">
              Trusted by Leading UAE Companies
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-80 transition-opacity">
            {companyLogos.map((company) => (
              <div 
                key={company.name}
                className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results. Get your free digital marketing 
              consultation and discover how we can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-dubai-gold hover:bg-dubai-gold/90 text-gray-900 font-semibold px-8 py-3 rounded-lg transition-colors"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Get Your Free Consultation
              </button>
              
              <button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors"
                onClick={() => {
                  window.open('https://wa.me/971501234567?text=Hi! I saw your client testimonials and would like to discuss how you can help my business achieve similar results.', '_blank');
                }}
              >
                WhatsApp Us Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}