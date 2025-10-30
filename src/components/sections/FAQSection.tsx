'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How much do digital marketing services cost in Dubai?',
    answer: 'Our digital marketing packages start from AED 3,000/month for small businesses. Pricing depends on services included, business size, and goals. We offer custom packages for enterprises. All packages include strategy, execution, and monthly reporting.'
  },
  {
    question: 'How long does it take to see results from SEO in UAE?',
    answer: 'Typically 3-6 months for significant SEO results in Dubai market. Local SEO can show improvements in 4-8 weeks. We provide monthly progress reports and guarantee first page rankings for agreed keywords within 6 months or continue working for free.'
  },
  {
    question: 'What is the typical timeline for web development projects?',
    answer: 'Simple websites take 2-4 weeks, while complex e-commerce or custom platforms require 6-12 weeks. We provide detailed project timelines during consultation and keep you updated weekly. Rush projects available with 48-hour turnaround for additional fees.'
  },
  {
    question: 'Do you create Arabic websites and RTL support?',
    answer: 'Yes, we specialize in bilingual Arabic-English websites with proper RTL (right-to-left) support. Our team includes native Arabic speakers who ensure cultural accuracy and proper localization for UAE market preferences and requirements.'
  },
  {
    question: 'How does Amazon FBA management work for UAE sellers?',
    answer: 'We handle complete Amazon FBA setup including product listing optimization, inventory management, PPC campaigns, and performance monitoring. Our UAE-specific expertise covers local regulations, VAT compliance, and market positioning strategies.'
  },
  {
    question: 'What ROI can I expect from social media marketing?',
    answer: 'Our clients typically see 3-5x ROI within 6 months. Results vary by industry, but we guarantee increased engagement, follower growth, and lead generation. We provide detailed analytics and adjust strategies based on performance data.'
  },
  {
    question: 'What are your payment terms and pricing structure?',
    answer: 'We offer flexible payment terms: monthly retainers for ongoing services, milestone payments for projects, and performance-based pricing available. All prices in AED, with 5% VAT. 50% deposit required for new projects.'
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, all projects include 3 months free support for bug fixes and minor updates. We offer maintenance packages starting from AED 500/month including security updates, backups, content updates, and technical support.'
  },
  {
    question: 'What qualifications does your team have?',
    answer: 'Our team holds Google Ads, Facebook Blueprint, and HubSpot certifications. Combined 15+ years experience in UAE market, with specialists in Arabic content, local SEO, and Middle East consumer behavior. All team members are Dubai-based.'
  },
  {
    question: 'Which industries do you specialize in?',
    answer: 'We excel in hospitality, retail, real estate, healthcare, and professional services in UAE. Deep understanding of local market dynamics, cultural preferences, and regulatory requirements across Emirates. Industry-specific case studies available.'
  },
  {
    question: 'What are your contract terms and cancellation policy?',
    answer: 'Minimum 3-month commitment for marketing services, month-to-month afterwards. 30-day notice for cancellation. Project work requires full payment schedule completion. No hidden fees, transparent pricing with detailed scope documentation.'
  },
  {
    question: 'How do you manage projects and communication?',
    answer: 'Dedicated project manager assigned to each client with weekly progress updates. We use Slack/WhatsApp for quick communication, monthly video calls for strategy reviews, and provide 24/7 emergency support for critical issues.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our digital marketing services in Dubai
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 flex-shrink-0 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Still have questions? We&apos;re here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971501234567?text=Hi, I have questions about your digital marketing services"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us Now
            </a>
            <a
              href="#contact-form"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Send Email Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}