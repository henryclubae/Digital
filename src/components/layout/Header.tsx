'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const servicesDropdown = [
  { name: 'Web Development Dubai', href: '/services/web-development-dubai' },
  { name: 'Digital Marketing UAE', href: '/services/digital-marketing-uae' },
  { name: 'SEO Services Dubai', href: '/services/seo-services-dubai' },
  { name: 'Amazon Store Setup', href: '/services/amazon-store-setup-uae' },
  { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/henry-club-digital-logo.png"
                alt="Henry Club Digital Agency"
                width={200}
                height={48}
                priority={true}
                className="h-8 w-auto sm:h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.name === 'Services' ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-900 hover:text-primary-600 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                    
                    {/* Services Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-900 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Section */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Phone Number */}
            <Link
              href="tel:+971501234567"
              className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <PhoneIcon className="h-4 w-4" />
              <span className="text-sm font-medium">+971 50 123 4567</span>
            </Link>

            {/* Get Free Quote Button */}
            <Link
              href="/quote"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="border-t border-gray-200 bg-white px-4 py-6 shadow-lg">
          {/* Mobile Navigation */}
          <div className="space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.name === 'Services' ? (
                  <div>
                    <button
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                      className="w-full text-left block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                    
                    {/* Mobile Services Submenu */}
                    {servicesDropdownOpen && (
                      <div className="pl-4 space-y-1">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setServicesDropdownOpen(false);
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile CTA Section */}
          <div className="mt-6 space-y-4 border-t border-gray-200 pt-6">
            {/* Mobile Phone Number */}
            <Link
              href="tel:+971501234567"
              className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="font-medium">+971 50 123 4567</span>
            </Link>

            {/* Mobile Get Free Quote Button */}
            <Link
              href="/quote"
              className="block w-full bg-primary-600 text-white text-center px-4 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}