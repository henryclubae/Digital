'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Phone, MessageCircle, Star, ChevronRight } from 'lucide-react';

export default function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  const handleAsyncAction = async () => {
    setLoading(true);
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Henry Club Digital - Button Components
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive button system with multiple variants, sizes, and special features for the UAE market
          </p>
        </div>

        {/* Variants Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Variants</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="whatsapp">
              <MessageCircle className="h-4 w-4 mr-2" />
              WhatsApp
            </Button>
            <Button variant="phone">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button variant="dubai-gold">
              <Star className="h-4 w-4 mr-2" />
              Dubai Gold
            </Button>
          </div>
        </section>

        {/* Sizes Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Star className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Loading States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Loading States</h2>
          <div className="flex flex-wrap gap-4">
            <Button loading>Loading...</Button>
            <Button loading variant="outline">Processing</Button>
            <Button loading variant="dubai-gold">Submitting</Button>
            <Button 
              loading={loading} 
              onClick={handleAsyncAction}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Start Process'}
            </Button>
          </div>
        </section>

        {/* Icon Positions */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Icon Positions</h2>
          <div className="flex flex-wrap gap-4">
            <Button icon="left">
              <ChevronRight className="h-4 w-4" />
              Left Icon
            </Button>
            <Button icon="right">
              Right Icon
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button loading icon="left">
              Loading Left
            </Button>
            <Button loading icon="right">
              Loading Right
            </Button>
          </div>
        </section>

        {/* UAE Business Use Cases */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">UAE Business Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Contact Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-4">Contact Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="whatsapp" 
                  className="w-full"
                  onClick={() => window.open('https://wa.me/971501234567', '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </Button>
                <Button 
                  variant="phone" 
                  className="w-full"
                  onClick={() => window.open('tel:+971501234567', '_self')}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call +971 50 123 4567
                </Button>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-4">Premium Services</h3>
              <div className="space-y-3">
                <Button variant="dubai-gold" className="w-full">
                  <Star className="h-4 w-4 mr-2" />
                  Get Premium Package
                </Button>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Form Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="font-semibold text-gray-900 mb-4">Form Actions</h3>
              <div className="space-y-3">
                <Button className="w-full" loading={loading}>
                  Submit Inquiry
                </Button>
                <Button variant="secondary" className="w-full">
                  Save Draft
                </Button>
                <Button variant="ghost" className="w-full text-red-600">
                  Cancel
                </Button>
              </div>
            </div>

          </div>
        </section>

        {/* Accessibility Note */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Accessibility Features</h3>
          <ul className="text-blue-800 space-y-1 text-sm">
            <li>• Proper focus states with visible focus rings</li>
            <li>• ARIA attributes for loading and disabled states</li>
            <li>• Keyboard navigation support</li>
            <li>• Screen reader friendly loading indicators</li>
            <li>• Proper contrast ratios for all variants</li>
          </ul>
        </section>
      </div>
    </div>
  );
}