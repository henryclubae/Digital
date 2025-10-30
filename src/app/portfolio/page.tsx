'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon, FunnelIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  industry: string;
  location: string;
  description: string;
  results: string[];
  image: string;
  services: string[];
  href: string;
  featured?: boolean;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Al Fanar Restaurant Chain',
    category: 'Social Media',
    industry: 'Food & Beverage',
    location: 'Dubai',
    description: 'Complete social media transformation with Arabic content strategy',
    results: ['300% follower growth', '150% revenue increase', '10x engagement rate'],
    image: '/images/portfolio/alqanar.jpg',
    services: ['Social Media Marketing', 'Content Creation', 'Influencer Partnerships'],
    href: '/portfolio/al-fanar-restaurant',
    featured: true
  },
  {
    id: '2',
    title: 'Emirates Modern Clinic',
    category: 'Web Development',
    industry: 'Healthcare',
    location: 'Abu Dhabi',
    description: 'Modern healthcare website with patient portal and appointment system',
    results: ['400% online bookings', '250% patient inquiries', '50% reduced admin work'],
    image: '/images/portfolio/emirates-clinic.jpg',
    services: ['Web Development', 'UX/UI Design', 'Patient Management System'],
    href: '/portfolio/emirates-modern-clinic'
  },
  {
    id: '3',
    title: 'Dubai Properties Plus',
    category: 'SEO',
    industry: 'Real Estate',
    location: 'Dubai',
    description: 'SEO strategy for luxury real estate with Arabic and English optimization',
    results: ['500% organic traffic', '#1 ranking for 50+ keywords', '200% lead generation'],
    image: '/images/portfolio/dubai-properties.jpg',
    services: ['SEO Optimization', 'Content Marketing', 'Local SEO'],
    href: '/portfolio/dubai-properties-plus',
    featured: true
  },
  {
    id: '4',
    title: 'Sharjah Fashion Boutique',
    category: 'E-commerce',
    industry: 'Fashion & Retail',
    location: 'Sharjah',
    description: 'Complete e-commerce solution with Arabic/English bilingual support',
    results: ['800% online sales', '1000+ products sold', '95% customer satisfaction'],
    image: '/images/portfolio/fashion-boutique.jpg',
    services: ['E-commerce Development', 'Payment Gateway', 'Inventory Management'],
    href: '/portfolio/sharjah-fashion-boutique'
  },
  {
    id: '5',
    title: 'UAE Tech Startups Hub',
    category: 'Digital Marketing',
    industry: 'Technology',
    location: 'Dubai',
    description: 'Comprehensive digital marketing campaign for tech startup community',
    results: ['600% website traffic', '300% event attendance', '150% membership growth'],
    image: '/images/portfolio/tech-hub.jpg',
    services: ['Digital Strategy', 'PPC Campaigns', 'Community Building'],
    href: '/portfolio/uae-tech-startups-hub'
  },
  {
    id: '6',
    title: 'Al Ain Educational Center',
    category: 'Web Development',
    industry: 'Education',
    location: 'Al Ain',
    description: 'Educational platform with online courses and student management',
    results: ['500+ students enrolled', '40+ courses launched', '98% completion rate'],
    image: '/images/portfolio/educational-center.jpg',
    services: ['Learning Management System', 'Student Portal', 'Online Assessments'],
    href: '/portfolio/al-ain-educational-center'
  },
  {
    id: '7',
    title: 'Jumeirah Wellness Spa',
    category: 'Social Media',
    industry: 'Beauty & Wellness',
    location: 'Dubai',
    description: 'Luxury spa social media presence with influencer collaborations',
    results: ['450% Instagram growth', '250% booking increase', '15+ influencer partnerships'],
    image: '/images/portfolio/wellness-spa.jpg',
    services: ['Social Media Strategy', 'Influencer Marketing', 'Content Photography'],
    href: '/portfolio/jumeirah-wellness-spa',
    featured: true
  },
  {
    id: '8',
    title: 'Northern Emirates Auto',
    category: 'SEO',
    industry: 'Automotive',
    location: 'Ras Al Khaimah',
    description: 'Local SEO dominance for automotive dealership across Northern Emirates',
    results: ['700% local searches', '300% showroom visits', '#1 for car dealers RAK'],
    image: '/images/portfolio/auto-dealer.jpg',
    services: ['Local SEO', 'Google My Business', 'Automotive Marketing'],
    href: '/portfolio/northern-emirates-auto'
  },
  {
    id: '9',
    title: 'Ajman Electronics Store',
    category: 'E-commerce',
    industry: 'Electronics',
    location: 'Ajman',
    description: 'Multi-vendor electronics marketplace with advanced search and filters',
    results: ['1200% online revenue', '5000+ products', '200+ vendors onboarded'],
    image: '/images/portfolio/electronics-store.jpg',
    services: ['Marketplace Development', 'Vendor Management', 'Mobile App'],
    href: '/portfolio/ajman-electronics-store'
  },
  {
    id: '10',
    title: 'UAE Fitness Federation',
    category: 'Digital Marketing',
    industry: 'Sports & Fitness',
    location: 'Dubai',
    description: 'National fitness campaign promoting healthy lifestyle across UAE',
    results: ['1M+ campaign reach', '50,000 participants', '25 fitness centers joined'],
    image: '/images/portfolio/fitness-federation.jpg',
    services: ['Campaign Management', 'Event Marketing', 'Community Engagement'],
    href: '/portfolio/uae-fitness-federation'
  },
  {
    id: '11',
    title: 'Sharjah Traditional Crafts',
    category: 'Web Development',
    industry: 'Arts & Culture',
    location: 'Sharjah',
    description: 'Cultural heritage website showcasing traditional Emirati crafts',
    results: ['300% cultural awareness', '150+ artisan profiles', '50+ workshops booked'],
    image: '/images/portfolio/traditional-crafts.jpg',
    services: ['Cultural Web Design', 'Artisan Portfolios', 'Workshop Booking'],
    href: '/portfolio/sharjah-traditional-crafts'
  },
  {
    id: '12',
    title: 'Fujairah Marine Services',
    category: 'SEO',
    industry: 'Marine & Logistics',
    location: 'Fujairah',
    description: 'Maritime services SEO strategy targeting international shipping',
    results: ['600% international leads', '200% port inquiries', '50+ shipping partners'],
    image: '/images/portfolio/marine-services.jpg',
    services: ['International SEO', 'B2B Marketing', 'Maritime Content'],
    href: '/portfolio/fujairah-marine-services'
  },
  {
    id: '13',
    title: 'Dubai Gourmet Catering',
    category: 'Social Media',
    industry: 'Food & Beverage',
    location: 'Dubai',
    description: 'Premium catering social presence with event showcases and testimonials',
    results: ['400% event bookings', '250% social engagement', '100+ corporate clients'],
    image: '/images/portfolio/gourmet-catering.jpg',
    services: ['Social Media Management', 'Event Photography', 'Client Testimonials'],
    href: '/portfolio/dubai-gourmet-catering'
  },
  {
    id: '14',
    title: 'Umm Al Quwain Tours',
    category: 'E-commerce',
    industry: 'Travel & Tourism',
    location: 'Umm Al Quwain',
    description: 'Tourism booking platform featuring UAQ attractions and experiences',
    results: ['500% tour bookings', '30+ local experiences', '95% customer reviews'],
    image: '/images/portfolio/uaq-tours.jpg',
    services: ['Booking System', 'Tour Management', 'Review Platform'],
    href: '/portfolio/umm-al-quwain-tours'
  },
  {
    id: '15',
    title: 'Abu Dhabi Business Hub',
    category: 'Digital Marketing',
    industry: 'Business Services',
    location: 'Abu Dhabi',
    description: 'B2B digital marketing for business setup and consulting services',
    results: ['800% B2B leads', '300+ companies assisted', '150% consultation bookings'],
    image: '/images/portfolio/business-hub.jpg',
    services: ['B2B Marketing', 'Lead Generation', 'LinkedIn Campaigns'],
    href: '/portfolio/abu-dhabi-business-hub'
  },
  {
    id: '16',
    title: 'Dubai Medical Center',
    category: 'Web Development',
    industry: 'Healthcare',
    location: 'Dubai',
    description: 'Advanced medical center website with telemedicine capabilities',
    results: ['600% online consultations', '400+ doctors onboard', '24/7 patient support'],
    image: '/images/portfolio/medical-center.jpg',
    services: ['Telemedicine Platform', 'Doctor Scheduling', 'Patient Records'],
    href: '/portfolio/dubai-medical-center'
  },
  {
    id: '17',
    title: 'UAE Green Initiative',
    category: 'SEO',
    industry: 'Environmental',
    location: 'UAE Wide',
    description: 'Environmental awareness SEO campaign across all Emirates',
    results: ['1M+ awareness reach', '10,000+ participants', '100+ schools involved'],
    image: '/images/portfolio/green-initiative.jpg',
    services: ['Environmental SEO', 'Content Strategy', 'Educational Campaigns'],
    href: '/portfolio/uae-green-initiative'
  },
  {
    id: '18',
    title: 'Al Ain Organic Farm',
    category: 'E-commerce',
    industry: 'Agriculture & Food',
    location: 'Al Ain',
    description: 'Organic farm direct-to-consumer e-commerce with subscription model',
    results: ['1000+ subscribers', '300% farm revenue', '50+ organic products'],
    image: '/images/portfolio/organic-farm.jpg',
    services: ['Subscription E-commerce', 'Farm Management', 'Delivery System'],
    href: '/portfolio/al-ain-organic-farm'
  }
];

const categories = ['All', 'Web Development', 'Digital Marketing', 'SEO', 'E-commerce', 'Social Media'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleItems, setVisibleItems] = useState(6);

  const featuredProjects = portfolioItems.filter(item => item.featured);
  
  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedItems = filteredItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < filteredItems.length;

  const loadMoreItems = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredItems.length));
  };

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchTerm('');
    setVisibleItems(6);
  };

  return (
    <>
      <SEO
        title="Portfolio - UAE Digital Marketing Success Stories | Henry Club Dubai"
        description="View our portfolio of successful digital marketing projects in Dubai and UAE. Web development, SEO, social media campaigns for 500+ UAE businesses."
        keywords="UAE digital marketing portfolio, Dubai web development projects, marketing case studies UAE"
        canonicalUrl="/portfolio"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-dubai-gold">Success Stories</span><br />
            Across UAE
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover how we&apos;ve helped 500+ UAE businesses achieve remarkable digital transformation. 
            From Dubai&apos;s tech startups to traditional Emirati businesses, see our proven results.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-dubai-gold mb-1">500+</div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dubai-gold mb-1">7</div>
              <div className="text-gray-300 text-sm">Emirates Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dubai-gold mb-1">15+</div>
              <div className="text-gray-300 text-sm">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-dubai-gold mb-1">95%</div>
              <div className="text-gray-300 text-sm">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Highlighted projects showcasing exceptional results and innovation
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-dubai-gold text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-300">
                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{project.industry}</span>
                        <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{project.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-sm text-green-600 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={project.href}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      View Case Study
                      <ArrowRightIcon className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Filters and Search */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, industry, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <FunnelIcon className="h-6 w-6 text-gray-500 mt-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleItems(6);
                  }}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Reset Filters */}
            {(activeCategory !== 'All' || searchTerm) && (
              <button
                onClick={resetFilters}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600">
              Showing {displayedItems.length} of {filteredItems.length} projects
              {activeCategory !== 'All' && ` in ${activeCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          </div>

          {/* Portfolio Grid */}
          {displayedItems.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedItems.map((project) => (
                  <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-300">
                          <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{project.industry}</span>
                          <span className="bg-white bg-opacity-20 px-2 py-1 rounded">{project.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">Results:</h4>
                        <ul className="space-y-1">
                          {project.results.slice(0, 2).map((result, idx) => (
                            <li key={idx} className="text-xs text-green-600 flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {project.services.slice(0, 2).map((service, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {service}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          href={project.href}
                          className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                        >
                          View
                          <ArrowRightIcon className="h-3 w-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreItems && (
                <div className="text-center">
                  <button
                    onClick={loadMoreItems}
                    className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Load More Projects ({filteredItems.length - visibleItems} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <MagnifyingGlassIcon className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={resetFilters}
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ UAE businesses that have transformed their digital presence with Henry Club
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-dubai-gold text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}