'use client';

import { useState } from 'react';
import SEO from '@/components/SEO';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserIcon, MagnifyingGlassIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const blogPosts = [
  {
    title: 'SEO Strategies for Dubai Businesses in 2024',
    slug: 'seo-strategies-dubai-2024',
    excerpt: 'Complete guide to ranking your Dubai business on Google with local SEO techniques that work in the UAE market.',
    category: 'SEO',
    author: 'Sarah Ahmed',
    authorImage: '/images/authors/sarah.jpg',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    image: '/images/blog/seo-dubai.jpg',
    featured: true,
    tags: ['Local SEO', 'Dubai', 'Google Rankings']
  },
  {
    title: 'Social Media Marketing Trends in UAE for 2024',
    slug: 'social-media-trends-uae-2024',
    excerpt: 'Discover the latest social media marketing trends dominating the UAE market and how to leverage them for your business.',
    category: 'Social Media',
    author: 'Ahmed Hassan',
    authorImage: '/images/authors/ahmed.jpg',
    publishDate: '2024-01-12',
    readTime: '6 min read',
    image: '/images/blog/social-media-uae.jpg',
    featured: true,
    tags: ['Social Media', 'UAE', 'Marketing Trends']
  },
  {
    title: 'Complete Guide to E-commerce Success in Dubai',
    slug: 'ecommerce-success-dubai-guide',
    excerpt: 'Everything you need to know about building and scaling a successful e-commerce business in Dubai and UAE.',
    category: 'E-commerce',
    author: 'Fatima Al-Zahra',
    authorImage: '/images/authors/fatima.jpg',
    publishDate: '2024-01-10',
    readTime: '12 min read',
    image: '/images/blog/ecommerce-dubai.jpg',
    featured: true,
    tags: ['E-commerce', 'Dubai Business', 'Online Sales']
  },
  {
    title: 'Google Ads Optimization for UAE Market',
    slug: 'google-ads-optimization-uae',
    excerpt: 'Maximize your Google Ads ROI with UAE-specific targeting strategies and optimization techniques.',
    category: 'PPC',
    author: 'Omar Khalil',
    authorImage: '/images/authors/omar.jpg',
    publishDate: '2024-01-08',
    readTime: '10 min read',
    image: '/images/blog/google-ads-uae.jpg',
    featured: false,
    tags: ['Google Ads', 'PPC', 'UAE Marketing']
  },
  {
    title: 'Website Design Trends for Dubai Businesses',
    slug: 'website-design-trends-dubai-2024',
    excerpt: 'Latest web design trends that resonate with UAE audiences and drive conversions for Dubai businesses.',
    category: 'Web Development',
    author: 'Layla Mohammed',
    authorImage: '/images/authors/layla.jpg',
    publishDate: '2024-01-05',
    readTime: '7 min read',
    image: '/images/blog/web-design-dubai.jpg',
    featured: false,
    tags: ['Web Design', 'Dubai', 'UI/UX']
  },
  {
    title: 'Content Marketing Strategies for Middle East',
    slug: 'content-marketing-middle-east-strategies',
    excerpt: 'Cultural insights and effective content marketing approaches for engaging Middle Eastern audiences.',
    category: 'Content Marketing',
    author: 'Youssef Nasir',
    authorImage: '/images/authors/youssef.jpg',
    publishDate: '2024-01-03',
    readTime: '9 min read',
    image: '/images/blog/content-marketing-me.jpg',
    featured: false,
    tags: ['Content Marketing', 'Middle East', 'Cultural Marketing']
  },
  {
    title: 'Instagram Marketing for UAE Restaurants',
    slug: 'instagram-marketing-uae-restaurants',
    excerpt: 'Proven Instagram strategies to boost your restaurant business in Dubai and across UAE markets.',
    category: 'Social Media',
    author: 'Mariam Al-Rashid',
    authorImage: '/images/authors/mariam.jpg',
    publishDate: '2024-01-01',
    readTime: '6 min read',
    image: '/images/blog/instagram-restaurants.jpg',
    featured: false,
    tags: ['Instagram', 'Restaurants', 'UAE Business']
  },
  {
    title: 'Technical SEO Checklist for UAE Websites',
    slug: 'technical-seo-checklist-uae-websites',
    excerpt: 'Complete technical SEO audit checklist specifically designed for websites targeting UAE audiences.',
    category: 'SEO',
    author: 'Khalid Bin Rashid',
    authorImage: '/images/authors/khalid.jpg',
    publishDate: '2023-12-28',
    readTime: '11 min read',
    image: '/images/blog/technical-seo-uae.jpg',
    featured: false,
    tags: ['Technical SEO', 'Website Audit', 'UAE']
  },
  {
    title: 'Facebook Ads Success Stories from Dubai',
    slug: 'facebook-ads-success-stories-dubai',
    excerpt: 'Real case studies of successful Facebook advertising campaigns from Dubai-based businesses.',
    category: 'PPC',
    author: 'Nadia Abdullah',
    authorImage: '/images/authors/nadia.jpg',
    publishDate: '2023-12-25',
    readTime: '8 min read',
    image: '/images/blog/facebook-ads-dubai.jpg',
    featured: false,
    tags: ['Facebook Ads', 'Case Studies', 'Dubai Success']
  },
  {
    title: 'Mobile Commerce Trends in UAE 2024',
    slug: 'mobile-commerce-trends-uae-2024',
    excerpt: 'How mobile shopping behavior is evolving in UAE and what e-commerce businesses need to know.',
    category: 'E-commerce',
    author: 'Rashid Al-Maktoum',
    authorImage: '/images/authors/rashid.jpg',
    publishDate: '2023-12-22',
    readTime: '7 min read',
    image: '/images/blog/mobile-commerce-uae.jpg',
    featured: false,
    tags: ['Mobile Commerce', 'UAE Trends', 'M-Commerce']
  },
  {
    title: 'LinkedIn Marketing for B2B Companies in Dubai',
    slug: 'linkedin-marketing-b2b-dubai',
    excerpt: 'Effective LinkedIn marketing strategies for B2B companies looking to expand in Dubai and UAE.',
    category: 'Social Media',
    author: 'Sara Al-Mansouri',
    authorImage: '/images/authors/sara-m.jpg',
    publishDate: '2023-12-20',
    readTime: '9 min read',
    image: '/images/blog/linkedin-b2b-dubai.jpg',
    featured: false,
    tags: ['LinkedIn', 'B2B Marketing', 'Dubai Business']
  },
  {
    title: 'Voice Search Optimization for Arabic Content',
    slug: 'voice-search-optimization-arabic-content',
    excerpt: 'Optimize your Arabic content for voice search to capture the growing Arabic-speaking online audience.',
    category: 'SEO',
    author: 'Amina Al-Zaabi',
    authorImage: '/images/authors/amina.jpg',
    publishDate: '2023-12-18',
    readTime: '6 min read',
    image: '/images/blog/voice-search-arabic.jpg',
    featured: false,
    tags: ['Voice Search', 'Arabic SEO', 'Multilingual']
  }
];

const categories = ['All', 'SEO', 'Social Media', 'Web Development', 'E-commerce', 'PPC', 'Content Marketing'];

const popularPosts = [
  { title: 'SEO Strategies for Dubai Businesses in 2024', slug: 'seo-strategies-dubai-2024', readCount: 2847 },
  { title: 'Complete Guide to E-commerce Success in Dubai', slug: 'ecommerce-success-dubai-guide', readCount: 2156 },
  { title: 'Social Media Marketing Trends in UAE for 2024', slug: 'social-media-trends-uae-2024', readCount: 1923 },
  { title: 'Google Ads Optimization for UAE Market', slug: 'google-ads-optimization-uae', readCount: 1654 },
  { title: 'Technical SEO Checklist for UAE Websites', slug: 'technical-seo-checklist-uae-websites', readCount: 1432 }
];

const popularTags = [
  'Dubai SEO', 'UAE Marketing', 'Social Media', 'E-commerce', 'Google Ads', 
  'Web Design', 'Content Marketing', 'Local SEO', 'Arabic Marketing', 'PPC'
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const featuredPosts = blogPosts.filter(post => post.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <SEO 
        title="Digital Marketing Blog Dubai UAE | Expert Insights | Henry Club"
        description="Latest digital marketing insights, tips, and trends for UAE businesses. Expert advice on SEO, social media, web development, and e-commerce from Dubai marketing professionals."
        keywords="digital marketing blog Dubai, UAE marketing tips, SEO insights Dubai, social media marketing UAE"
        canonicalUrl="/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Digital Marketing Insights for UAE Businesses
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights, proven strategies, and latest trends in digital marketing 
              tailored for the UAE market. Get actionable advice from Dubai&apos;s top marketing professionals.
            </p>
            
            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email for weekly insights"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-200 mt-2">Join 5,000+ UAE business owners getting weekly insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Articles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <UserIcon className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Search and Filters */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {currentPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {new Date(post.publishDate).toLocaleDateString()}
                          </div>
                        </div>
                        <h2 className="font-bold text-xl mb-3 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex items-center text-sm text-gray-500">
                              <UserIcon className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeftIcon className="h-4 w-4 mr-1" />
                    Previous
                  </button>
                  
                  <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded-lg font-medium ${
                          currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                    <ChevronRightIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 mt-12 lg:mt-0">
              {/* Newsletter Signup Widget */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-3">Get Weekly Insights</h3>
                <p className="mb-4 text-blue-100">
                  Join 5,000+ UAE business owners receiving actionable marketing tips every Tuesday.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 rounded text-gray-900 focus:outline-none"
                  />
                  <button className="w-full bg-yellow-500 text-blue-900 font-semibold py-2 rounded hover:bg-yellow-400 transition-colors">
                    Subscribe Free
                  </button>
                </div>
                <p className="text-xs text-blue-200 mt-2">No spam, unsubscribe anytime</p>
              </div>

              {/* Popular Posts */}
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <h3 className="font-bold text-xl mb-4">Most Popular</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                      <div className="flex items-start space-x-3 group">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.readCount.toLocaleString()} reads</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-xl mb-4">Popular Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}