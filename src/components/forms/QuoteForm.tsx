'use client';

import { useState } from 'react';
import { ChevronRightIcon, ChevronLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

interface QuoteData {
  // Step 1: Basic Information
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  
  // Step 2: Services
  services: string[];
  projectType: string;
  timeline: string;
  
  // Step 3: Budget & Requirements
  budget: string;
  requirements: string;
  currentMarketing: string;
  
  // Step 4: Goals
  businessGoals: string[];
  targetAudience: string;
  competitors: string;
}

const services = [
  'Web Development',
  'Digital Marketing Strategy',
  'SEO Services',
  'Social Media Marketing',
  'Amazon Store Setup & Management',
  'Google Ads Management',
  'Email Marketing',
  'Graphic Design & Branding',
  'E-commerce Development',
  'Content Creation'
];

const projectTypes = [
  'New Business Launch',
  'Website Redesign',
  'Marketing Campaign',
  'SEO Improvement',
  'Social Media Growth',
  'E-commerce Store',
  'Brand Development',
  'Lead Generation',
  'Other'
];

const budgetRanges = [
  'Under AED 5,000',
  'AED 5,000 - 10,000',
  'AED 10,000 - 25,000',
  'AED 25,000 - 50,000',
  'AED 50,000 - 100,000',
  'Over AED 100,000',
  'Discuss with Expert'
];

const businessGoals = [
  'Increase Website Traffic',
  'Generate More Leads',
  'Boost Online Sales',
  'Improve Brand Awareness',
  'Expand to New Markets',
  'Enhance Customer Engagement',
  'Improve Search Rankings',
  'Reduce Marketing Costs'
];

const timelineOptions = [
  'ASAP (Rush Project)',
  '2-4 weeks',
  '1-2 months',
  '3-6 months',
  'Flexible timeline',
  'Ongoing services'
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quoteData, setQuoteData] = useState<QuoteData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    services: [],
    projectType: '',
    timeline: '',
    budget: '',
    requirements: '',
    currentMarketing: '',
    businessGoals: [],
    targetAudience: '',
    competitors: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const updateQuoteData = (field: keyof QuoteData, value: string | string[]) => {
    setQuoteData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleService = (service: string) => {
    setQuoteData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const toggleGoal = (goal: string) => {
    setQuoteData(prev => ({
      ...prev,
      businessGoals: prev.businessGoals.includes(goal)
        ? prev.businessGoals.filter(g => g !== goal)
        : [...prev.businessGoals, goal]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return quoteData.name && quoteData.email && quoteData.phone;
      case 2:
        return quoteData.services.length > 0 && quoteData.timeline;
      case 3:
        return quoteData.budget && quoteData.requirements;
      case 4:
        return quoteData.businessGoals.length > 0;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { number: 1, title: 'Basic Info', description: 'Contact details' },
    { number: 2, title: 'Services', description: 'What you need' },
    { number: 3, title: 'Budget', description: 'Requirements & budget' },
    { number: 4, title: 'Goals', description: 'Your objectives' }
  ];

  if (submitStatus === 'success') {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckIcon className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Quote Request Submitted!</h3>
          <p className="text-gray-600">
            Thank you for your interest! Our team will review your requirements and send you a detailed quote within 24 hours.
          </p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
          <div className="text-left space-y-2 text-blue-800">
            <p>• Our expert will review your requirements</p>
            <p>• We&apos;ll prepare a custom proposal for your business</p>
            <p>• You&apos;ll receive a detailed quote within 24 hours</p>
            <p>• Optional free consultation call to discuss details</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <p className="text-sm text-gray-600">
            <strong>Quote ID:</strong> HCD-{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
          <p className="text-sm text-gray-600">
            Check your email for confirmation and next steps.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                currentStep >= step.number
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {currentStep > step.number ? (
                  <CheckIcon className="h-5 w-5" />
                ) : (
                  step.number
                )}
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${
                  currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Step {currentStep}: {steps[currentStep - 1].title}
          </h3>
          <p className="text-gray-600">{steps[currentStep - 1].description}</p>
        </div>
      </div>

      {/* Step Content */}
      <div className="space-y-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={quoteData.name}
                  onChange={(e) => updateQuoteData('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={quoteData.email}
                  onChange={(e) => updateQuoteData('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={quoteData.phone}
                  onChange={(e) => updateQuoteData('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+971 50 123 4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  value={quoteData.company}
                  onChange={(e) => updateQuoteData('company', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Website (if any)
              </label>
              <input
                type="url"
                value={quoteData.website}
                onChange={(e) => updateQuoteData('website', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Services & Project Type</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Which services do you need? (Select all that apply) *
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {services.map((service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      checked={quoteData.services.includes(service)}
                      onChange={() => toggleService(service)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={service} className="ml-3 text-sm text-gray-700">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Type
              </label>
              <select
                value={quoteData.projectType}
                onChange={(e) => updateQuoteData('projectType', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timeline *
              </label>
              <select
                value={quoteData.timeline}
                onChange={(e) => updateQuoteData('timeline', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((timeline) => (
                  <option key={timeline} value={timeline}>{timeline}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Budget & Requirements</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range *
              </label>
              <select
                value={quoteData.budget}
                onChange={(e) => updateQuoteData('budget', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Project Requirements *
              </label>
              <textarea
                value={quoteData.requirements}
                onChange={(e) => updateQuoteData('requirements', e.target.value)}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your project requirements, specific features needed, design preferences, etc..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Marketing Efforts
              </label>
              <textarea
                value={quoteData.currentMarketing}
                onChange={(e) => updateQuoteData('currentMarketing', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Tell us about your current marketing activities, what's working, what's not..."
              />
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Business Goals & Audience</h4>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What are your main business goals? (Select all that apply) *
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {businessGoals.map((goal) => (
                  <div key={goal} className="flex items-center">
                    <input
                      type="checkbox"
                      id={goal}
                      checked={quoteData.businessGoals.includes(goal)}
                      onChange={() => toggleGoal(goal)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={goal} className="ml-3 text-sm text-gray-700">
                      {goal}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Audience
              </label>
              <textarea
                value={quoteData.targetAudience}
                onChange={(e) => updateQuoteData('targetAudience', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Describe your target customers: age, location, interests, demographics..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Main Competitors
              </label>
              <input
                type="text"
                value={quoteData.competitors}
                onChange={(e) => updateQuoteData('competitors', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="List your main competitors (websites or company names)"
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeftIcon className="h-5 w-5 mr-2" />
          Previous
        </button>
        
        {currentStep < 4 ? (
          <button
            onClick={nextStep}
            disabled={!isStepValid()}
            className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
            <ChevronRightIcon className="h-5 w-5 ml-2" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isStepValid() || isSubmitting}
            className="flex items-center px-8 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              'Get My Quote'
            )}
          </button>
        )}
      </div>
    </div>
  );
}