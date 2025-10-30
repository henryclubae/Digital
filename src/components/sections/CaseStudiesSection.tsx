'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRightIcon, TrophyIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const caseStudies = [
  {
    title: 'Dubai Restaurant Chain',
    subtitle: '300% Social Media Growth',
    client: 'Al Fanar Restaurant',
    industry: 'Food & Beverage',
    location: 'Dubai',
    challenge: 'Low social media engagement and foot traffic despite having multiple locations across Dubai.',
    solution: 'Comprehensive social media strategy with Arabic content, influencer partnerships, and targeted local campaigns.',
    results: [
      {
        metric: 'Social Media Followers',
        before: '2,500',
        after: '10,000',
        increase: '300%'
      },
      {
        metric: 'Monthly Revenue',
        before: 'AED 150K',
        after: 'AED 375K',
        increase: '150%'
      },
      {
        metric: 'Online Orders',
        before: '50/month',
        after: '400/month',
        increase: '700%'
      }
    ],
    image: '/images/case-studies/restaurant.jpg',
    testimonial: 'Henry Club understood our local market perfectly. The Arabic content strategy was brilliant.',
    duration: '6 months',
    services: ['Social Media Marketing', 'Content Strategy', 'Influencer Marketing']
  },
  {
    title: 'UAE Tech Startup',
    subtitle: '500% Lead Generation Boost',
    client: 'InnovateTech Solutions',
    industry: 'Technology',
    location: 'Abu Dhabi',
    challenge: 'New B2B tech startup struggling to generate qualified leads and establish market presence.',
    solution: 'Strategic LinkedIn marketing, content marketing, and targeted B2B lead generation campaigns.',
    results: [
      {
        metric: 'Qualified Leads',
        before: '10/month',
        after: '60/month',
        increase: '500%'
      },
      {
        metric: 'Website Traffic',
        before: '1,200/month',
        after: '8,500/month',
        increase: '608%'
      },
      {
        metric: 'Conversion Rate',
        before: '0.8%',
        after: '4.2%',
        increase: '425%'
      }
    ],
    image: '/images/case-studies/tech-startup.jpg',
    testimonial: 'Exceptional results! They helped us establish credibility and generate quality leads consistently.',
    duration: '8 months',
    services: ['B2B Lead Generation', 'LinkedIn Marketing', 'Content Strategy']
  },
  {
    title: 'Sharjah Retail Business',
    subtitle: '250% E-commerce Revenue Growth',
    client: 'Emirates Fashion Gallery',
    industry: 'Fashion Retail',
    location: 'Sharjah',
    challenge: 'Traditional retail business needed to expand online presence and compete with e-commerce giants.',
    solution: 'Complete e-commerce website development, SEO optimization, and digital marketing strategy.',
    results: [
      {
        metric: 'Online Revenue',
        before: 'AED 80K',
        after: 'AED 280K',
        increase: '250%'
      },
      {
        metric: 'Website Visitors',
        before: '800/month',
        after: '5,200/month',
        increase: '550%'
      },
      {
        metric: 'Customer Base',
        before: '500',
        after: '2,800',
        increase: '460%'
      }
    ],
    image: '/images/case-studies/retail-business.jpg',
    testimonial: 'From a small shop to a thriving online business. Their expertise in e-commerce is unmatched.',
    duration: '5 months',
    services: ['E-commerce Development', 'SEO Optimization', 'Digital Marketing']
  }
];

// Function to get progress bar color based on increase percentage
const getProgressColor = (increase: string) => {
  const percentage = Number.parseInt(increase.replace('%', ''));
  if (percentage >= 500) return 'bg-gradient-to-r from-purple-500 to-purple-600';
  if (percentage >= 400) return 'bg-gradient-to-r from-indigo-500 to-indigo-600';
  if (percentage >= 300) return 'bg-gradient-to-r from-blue-500 to-blue-600';
  if (percentage >= 200) return 'bg-gradient-to-r from-green-500 to-green-600';
  if (percentage >= 100) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
  return 'bg-gradient-to-r from-gray-400 to-gray-500';
};

// Function to get increase color
const getIncreaseColor = (increase: string) => {
  const percentage = Number.parseInt(increase.replace('%', ''));
  if (percentage >= 500) return 'text-purple-600';
  if (percentage >= 400) return 'text-indigo-600';
  if (percentage >= 300) return 'text-blue-600';
  if (percentage >= 200) return 'text-green-600';
  if (percentage >= 100) return 'text-orange-600';
  return 'text-gray-600';
};

// Function to get progress bar width class
const getProgressWidth = (increase: string) => {
  const percentage = Number.parseInt(increase.replace('%', ''));
  if (percentage >= 500) return 'w-full';
  if (percentage >= 400) return 'w-5/6';
  if (percentage >= 300) return 'w-4/5';
  if (percentage >= 200) return 'w-3/4';
  if (percentage >= 150) return 'w-2/3';
  if (percentage >= 100) return 'w-1/2';
  return 'w-1/3';
};

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            UAE Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Real businesses, real results. Discover how we&apos;ve helped UAE companies 
            across different industries achieve remarkable growth through strategic 
            digital marketing and innovative solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <div
              key={study.client}
              className="bg-white border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              
              {/* Case Study Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-dubai-gold/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {study.duration}
                  </span>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-xl font-bold mb-1">
                    {study.title}
                  </h3>
                  <p className="text-dubai-gold font-semibold">
                    {study.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                
                {/* Client & Location */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900">{study.client}</h4>
                    <p className="text-sm text-gray-600">{study.location}</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <TrophyIcon className="h-5 w-5 mr-1" />
                    <span className="text-sm font-semibold">Success</span>
                  </div>
                </div>

                {/* Challenge Section */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                    Challenge
                  </h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution Section */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    Solution
                  </h5>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {study.solution}
                  </p>
                  
                  {/* Services Tags */}
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results Section */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Results Achieved
                  </h5>
                  
                  <div className="space-y-4">
                    {study.results.map((result) => (
                      <div key={result.metric} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">
                            {result.metric}
                          </span>
                          <span className={`text-sm font-bold ${getIncreaseColor(result.increase)}`}>
                            +{result.increase}
                          </span>
                        </div>
                        
                        <div className="flex justify-between text-xs text-gray-600 mb-2">
                          <span>Before: {result.before}</span>
                          <span>After: {result.after}</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(result.increase)} ${getProgressWidth(result.increase)} transition-all duration-1000 ease-out`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                  <blockquote className="text-sm text-gray-700 italic">
                    &ldquo;{study.testimonial}&rdquo;
                  </blockquote>
                </div>

                {/* View Full Case Study Button */}
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-200"
                >
                  View Full Case Study
                  <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Metrics Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Combined Results Across All Projects
            </h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              These are the collective achievements from our UAE client portfolio, 
              demonstrating consistent excellence in digital marketing execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* Total Revenue Impact */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <ChartBarIcon className="h-10 w-10 text-dubai-gold mx-auto mb-4" />
                <div className="text-3xl font-bold text-dubai-gold mb-2">
                  AED 2.8M+
                </div>
                <div className="text-sm text-blue-100">
                  Additional Revenue Generated
                </div>
              </div>
            </div>

            {/* Average Growth */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <TrophyIcon className="h-10 w-10 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-green-400 mb-2">
                  358%
                </div>
                <div className="text-sm text-blue-100">
                  Average Growth Rate
                </div>
              </div>
            </div>

            {/* Project Success Rate */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <UserGroupIcon className="h-10 w-10 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-blue-100">
                  Project Success Rate
                </div>
              </div>
            </div>

            {/* Time to Results */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
                <svg className="h-10 w-10 text-orange-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  6.3
                </div>
                <div className="text-sm text-blue-100">
                  Average Months to Results
                </div>
              </div>
            </div>

          </div>

          {/* CTA Section */}
          <div className="text-center mt-12 pt-8 border-t border-white/20">
            <h4 className="text-2xl font-bold mb-4">
              Ready to Become Our Next Success Story?
            </h4>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join the growing list of successful UAE businesses. Let us create a 
              custom strategy that delivers measurable results for your company.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="dubai-gold"
                size="lg"
                className="group"
                onClick={() => {
                  document.getElementById('contact-form')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  });
                }}
              >
                Start Your Success Story
                <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => {
                  window.open('https://wa.me/971501234567?text=Hi! I saw your case studies and would like to discuss how you can help achieve similar results for my business.', '_blank');
                }}
              >
                Discuss My Project
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}