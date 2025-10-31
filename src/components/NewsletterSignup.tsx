'use client';

import { useState } from 'react';
import { CheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface NewsletterSignupProps {
  className?: string;
  showInterests?: boolean;
  defaultLanguage?: 'en' | 'ar';
  variant?: 'default' | 'compact' | 'footer';
}

const interestOptions = [
  { id: 'seo', label: 'SEO Services', labelAr: 'خدمات السيو' },
  { id: 'social-media', label: 'Social Media Marketing', labelAr: 'التسويق عبر وسائل التواصل' },
  { id: 'web-development', label: 'Web Development', labelAr: 'تطوير المواقع' },
  { id: 'ecommerce', label: 'E-commerce', labelAr: 'التجارة الإلكترونية' },
  { id: 'content-marketing', label: 'Content Marketing', labelAr: 'تسويق المحتوى' },
  { id: 'google-ads', label: 'Google Ads', labelAr: 'إعلانات جوجل' },
  { id: 'email-marketing', label: 'Email Marketing', labelAr: 'التسويق عبر البريد الإلكتروني' },
  { id: 'analytics', label: 'Analytics & Reporting', labelAr: 'التحليلات والتقارير' }
];

export default function NewsletterSignup({ 
  className = '', 
  showInterests = true,
  defaultLanguage = 'en',
  variant = 'default'
}: NewsletterSignupProps) {
  const [formData, setFormData] = useState({
    email: '',
    interests: [] as string[],
    language: defaultLanguage,
    consent: false
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleInterestToggle = (interestId: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'website_newsletter_form'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        setFormData({
          email: '',
          interests: [],
          language: defaultLanguage,
          consent: false
        });
      } else {
        setStatus('error');
        setMessage(result.error || 'An error occurred. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  // Compact variant for headers/footers
  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        {status === 'success' ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <CheckIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
            <p className="text-green-800 font-medium">Almost there!</p>
            <p className="text-green-700 text-sm">Check your email to confirm your subscription.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="flex-1">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={status === 'loading'}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading' || !formData.consent}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
        
        {!showInterests && status !== 'success' && (
          <div className="mt-2">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                className="mr-2"
              />
              I agree to receive marketing emails and understand the privacy policy.
            </label>
          </div>
        )}

        {status === 'error' && (
          <p className="mt-2 text-red-600 text-sm">{message}</p>
        )}
      </div>
    );
  }

  // Footer variant
  if (variant === 'footer') {
    return (
      <div className={`${className}`}>
        <div className="flex items-center mb-4">
          <EnvelopeIcon className="h-6 w-6 text-white mr-2" />
          <h3 className="text-lg font-semibold text-white">
            {formData.language === 'ar' ? 'اشترك في نشرتنا الإخبارية' : 'Subscribe to Our Newsletter'}
          </h3>
        </div>
        
        <p className="text-gray-300 mb-4">
          {formData.language === 'ar' 
            ? 'احصل على أحدث النصائح والاستراتيجيات في التسويق الرقمي'
            : 'Get the latest digital marketing tips and strategies for UAE businesses'
          }
        </p>

        {status === 'success' ? (
          <div className="bg-green-600 text-white p-4 rounded-lg text-center">
            <CheckIcon className="h-6 w-6 mx-auto mb-2" />
            <p className="font-medium">
              {formData.language === 'ar' ? 'تم الاشتراك بنجاح!' : 'Successfully subscribed!'}
            </p>
            <p className="text-sm">
              {formData.language === 'ar' 
                ? 'تحقق من بريدك الإلكتروني لتأكيد الاشتراك'
                : 'Check your email to confirm your subscription'
              }
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex gap-2">
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder={formData.language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                className="flex-1 px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading' || !formData.consent}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {status === 'loading' 
                  ? (formData.language === 'ar' ? 'جاري الاشتراك...' : 'Subscribing...') 
                  : (formData.language === 'ar' ? 'اشترك' : 'Subscribe')
                }
              </button>
            </div>
            
            <label className="flex items-center text-sm text-gray-300">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                className="mr-2"
                required
              />
              {formData.language === 'ar' 
                ? 'أوافق على تلقي رسائل التسويق وأتفهم سياسة الخصوصية'
                : 'I agree to receive marketing emails and understand the privacy policy'
              }
            </label>

            {status === 'error' && (
              <p className="text-red-400 text-sm">{message}</p>
            )}
          </form>
        )}
      </div>
    );
  }

  // Default variant with full features
  return (
    <div className={`bg-white p-6 rounded-lg shadow-lg ${className}`}>
      <div className="flex items-center mb-4">
        <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-semibold text-gray-900">
          {formData.language === 'ar' ? 'اشترك في رؤى هنري كلوب الرقمية' : 'Subscribe to Henry Club Digital Insights'}
        </h3>
      </div>

      <p className="text-gray-600 mb-6">
        {formData.language === 'ar' 
          ? 'احصل على نصائح حصرية في التسويق الرقمي، دراسات حالة من السوق الإماراتي، وآخر اتجاهات الصناعة مباشرة في بريدك الإلكتروني.'
          : 'Get exclusive digital marketing tips, UAE market case studies, and industry trends delivered to your inbox weekly.'
        }
      </p>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <CheckIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h4 className="text-lg font-semibold text-green-800 mb-2">
            {formData.language === 'ar' ? 'شكراً لك!' : 'Thank You!'}
          </h4>
          <p className="text-green-700">
            {formData.language === 'ar' 
              ? 'تم إرسال بريد إلكتروني للتأكيد. يرجى التحقق من صندوق الوارد لتأكيد اشتراكك.'
              : 'A confirmation email has been sent. Please check your inbox to confirm your subscription.'
            }
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Language Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {formData.language === 'ar' ? 'اختر اللغة:' : 'Choose Language:'}
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="en"
                  checked={formData.language === 'en'}
                  onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value as 'en' | 'ar' }))}
                  className="mr-2"
                />
                English
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="ar"
                  checked={formData.language === 'ar'}
                  onChange={(e) => setFormData(prev => ({ ...prev, language: e.target.value as 'en' | 'ar' }))}
                  className="mr-2"
                />
                العربية
              </label>
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700 mb-2">
              {formData.language === 'ar' ? 'عنوان البريد الإلكتروني:' : 'Email Address:'}
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder={formData.language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              disabled={status === 'loading'}
            />
          </div>

          {/* Interests Selection */}
          {showInterests && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {formData.language === 'ar' ? 'اختر اهتماماتك (اختياري):' : 'Select Your Interests (Optional):'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {interestOptions.map((interest) => (
                  <label key={interest.id} className="flex items-center text-sm">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest.id)}
                      onChange={() => handleInterestToggle(interest.id)}
                      className="mr-2"
                      disabled={status === 'loading'}
                    />
                    {formData.language === 'ar' ? interest.labelAr : interest.label}
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* GDPR Consent */}
          <div>
            <label className="flex items-start text-sm text-gray-600">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))}
                className="mr-2 mt-0.5"
                required
                disabled={status === 'loading'}
              />
              <span>
                {formData.language === 'ar' 
                  ? 'أوافق على تلقي رسائل تسويقية من هنري كلوب الرقمي وأتفهم أنه يمكنني إلغاء الاشتراك في أي وقت. أقر بأنني قرأت وفهمت سياسة الخصوصية.'
                  : 'I agree to receive marketing emails from Henry Club Digital and understand that I can unsubscribe at any time. I acknowledge that I have read and understood the privacy policy.'
                }
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading' || !formData.consent}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' 
              ? (formData.language === 'ar' ? 'جاري الاشتراك...' : 'Subscribing...') 
              : (formData.language === 'ar' ? 'اشترك في النشرة الإخبارية' : 'Subscribe to Newsletter')
            }
          </button>

          {status === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">{message}</p>
            </div>
          )}
        </form>
      )}

      {/* Trust Indicators */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            {formData.language === 'ar' ? '🔒 آمن ومحمي' : '🔒 Secure & Protected'}
          </span>
          <span>
            {formData.language === 'ar' ? '📧 أسبوعياً' : '📧 Weekly'}
          </span>
          <span>
            {formData.language === 'ar' ? '🚫 لا سبام' : '🚫 No Spam'}
          </span>
        </div>
      </div>
    </div>
  );
}