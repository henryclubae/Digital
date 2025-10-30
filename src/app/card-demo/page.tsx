'use client';

import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Star, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ChevronRight,
  Clock,
  Users,
  Award,
  Briefcase,
  Globe,
  Zap
} from 'lucide-react';


export default function CardDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Henry Club Digital - Card Components
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible card system with multiple variants, badges, and image overlay support for UAE digital marketing
          </p>
        </div>

        {/* Card Variants */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Card Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>
                  Standard card with subtle shadow
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Perfect for general content display with clean, professional appearance.
                </p>
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>
                  Enhanced shadow for prominence
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Ideal for featured content that needs to stand out from other elements.
                </p>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                <CardTitle>Outlined Card</CardTitle>
                <CardDescription>
                  Strong border emphasis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Great for sections that need clear visual separation and definition.
                </p>
              </CardContent>
            </Card>

            <Card variant="gradient">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>
                  Subtle gradient background
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Premium feel with gradient background, perfect for special offers.
                </p>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Badge Examples */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Card Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card variant="elevated" badge="popular">
              <CardHeader>
                <CardTitle>SEO Optimization</CardTitle>
                <CardDescription>
                  Most requested service in Dubai
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>Google ranking improvement</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Zap className="h-4 w-4 mr-2" />
                    <span>Fast results in 30 days</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="dubai-gold" className="w-full">
                  <Star className="h-4 w-4 mr-2" />
                  Starting from AED 2,500
                </Button>
              </CardFooter>
            </Card>

            <Card variant="default" badge="new" badgeText="Just Launched">
              <CardHeader>
                <CardTitle>Social Media AI</CardTitle>
                <CardDescription>
                  Latest automation technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>Automated posting & engagement</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>24/7 AI monitoring</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>

            <Card variant="gradient" badge="featured" badgeText="Premium">
              <CardHeader>
                <CardTitle>Brand Strategy</CardTitle>
                <CardDescription>
                  Complete brand transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Award-winning design team</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Briefcase className="h-4 w-4 mr-2" />
                    <span>UAE market expertise</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Get Free Consultation
                </Button>
              </CardFooter>
            </Card>

          </div>
        </section>

        {/* UAE Business Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">UAE Business Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Business Profile Card */}
            <Card variant="elevated" className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-700 relative">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-6 text-white">
                  <h3 className="text-2xl font-bold">Henry Club Digital</h3>
                  <p className="text-blue-100">Premium Digital Marketing Agency</p>
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Dubai Internet City, UAE</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    <span>500+ Happy Clients Across GCC</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-2" />
                    <span>5 Years UAE Market Experience</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button variant="whatsapp" className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="phone" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardFooter>
            </Card>

            {/* Service Package Card */}
            <Card variant="outlined" badge="popular" className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Digital Marketing Package
                  <div className="text-lg font-bold text-green-600">
                    AED 5,000<span className="text-sm text-gray-500">/month</span>
                  </div>
                </CardTitle>
                <CardDescription>
                  Complete digital presence for UAE businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    SEO Optimization for UAE market
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    Social Media Management (AR/EN)
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    Google Ads & Facebook Marketing
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    Content Creation & Copywriting
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    Monthly Analytics Reports
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="h-2 w-2 bg-green-500 rounded-full mr-3" />
                    24/7 Support in Arabic & English
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="dubai-gold" className="w-full">
                  <Star className="h-4 w-4 mr-2" />
                  Start Free Trial
                </Button>
              </CardFooter>
            </Card>

          </div>
        </section>

        {/* Client Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <Card variant="gradient">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-700 mb-4">
                  &ldquo;Henry Club Digital transformed our online presence completely. Our website traffic increased by 300% in just 3 months!&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="pt-0">
                <div>
                  <div className="font-semibold text-sm">Ahmed Al Mansouri</div>
                  <div className="text-xs text-gray-500">CEO, Emirates Trading LLC</div>
                </div>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-700 mb-4">
                  &ldquo;Professional team with deep understanding of UAE market. Our ROI improved significantly within 2 months.&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="pt-0">
                <div>
                  <div className="font-semibold text-sm">Sarah Johnson</div>
                  <div className="text-xs text-gray-500">Marketing Director, Dubai Retail</div>
                </div>
              </CardFooter>
            </Card>

            <Card variant="outlined">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-sm text-gray-700 mb-4">
                  &ldquo;Excellent Arabic content creation and cultural understanding. Perfect for our local UAE audience.&rdquo;
                </blockquote>
              </CardContent>
              <CardFooter className="pt-0">
                <div>
                  <div className="font-semibold text-sm">Khalid bin Rashid</div>
                  <div className="text-xs text-gray-500">Founder, Abu Dhabi Ventures</div>
                </div>
              </CardFooter>
            </Card>

          </div>
        </section>

        {/* Features Overview */}
        <section className="bg-white p-8 rounded-lg shadow-sm border">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Card Component Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Variants</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Default - Clean white background with subtle shadow</li>
                <li>• Elevated - Enhanced shadow for prominence</li>
                <li>• Outlined - Strong border emphasis</li>
                <li>• Gradient - Premium gradient background</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Components</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CardHeader - Proper spacing and typography</li>
                <li>• CardTitle - Semantic heading with custom levels</li>
                <li>• CardDescription - Muted text for subtitles</li>
                <li>• CardContent - Main content area</li>
                <li>• CardFooter - Action buttons and links</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Special Features</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Badge support (Popular, New, Featured)</li>
                <li>• Image overlay capabilities</li>
                <li>• Hover animations and transitions</li>
                <li>• Forward refs for all components</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Accessibility</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Proper semantic HTML structure</li>
                <li>• Screen reader friendly</li>
                <li>• Keyboard navigation support</li>
                <li>• High contrast color schemes</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}