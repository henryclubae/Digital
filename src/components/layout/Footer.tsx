import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const services = [
  { name: 'Web Development Dubai', href: '/services/web-development-dubai' },
  { name: 'Digital Marketing UAE', href: '/services/digital-marketing-uae' },
  { name: 'SEO Services Dubai', href: '/services/seo-services-dubai' },
  { name: 'Amazon Store Setup', href: '/services/amazon-store-setup-uae' },
  { name: 'Social Media Marketing', href: '/services/social-media-marketing' },
  { name: 'Email Marketing', href: '/services/email-marketing' },
];

const quickLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms-of-service' },
  { name: 'Sitemap', href: '/sitemap' },
];

const socialMedia = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/henryclub.digital.uae',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/henryclub.digital.uae',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.222 5.238.42a5.893 5.893 0 00-2.126 1.384 5.868 5.868 0 00-1.384 2.126C1.533 4.411 1.4 4.966 1.36 5.795.014 7.926 0 8.4 0 12.017c0 3.618.014 4.091.048 4.919.04.828.175 1.383.372 1.862.205.52.478.96.923 1.405.444.445.884.719 1.405.923.479.197 1.034.332 1.862.372.828.036 1.302.048 4.919.048 3.618 0 4.091-.012 4.919-.048.828-.04 1.383-.175 1.862-.372a5.89 5.89 0 001.405-.923c.445-.445.718-.885.923-1.405.197-.479.332-1.034.372-1.862.036-.828.048-1.301.048-4.919 0-3.617-.012-4.091-.048-4.919-.04-.828-.175-1.383-.372-1.862A5.89 5.89 0 0018.654 1.3a5.893 5.893 0 00-1.405-.923c-.479-.197-1.034-.332-1.862-.372C15.558.014 15.085 0 12.017 0zm-.051 5.4a6.631 6.631 0 110 13.263 6.631 6.631 0 010-13.263zm6.532-.81a1.55 1.55 0 11-3.102 0 1.55 1.55 0 013.102 0zM12 7.475a4.525 4.525 0 100 9.05 4.525 4.525 0 000-9.05z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/henryclub-digital-uae',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://www.twitter.com/henryclub_uae',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Company Info Section */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Image
                  src="/images/henry-club-digital-logo-white.png"
                  alt="Henry Club Digital Agency"
                  width={180}
                  height={45}
                  className="h-8 w-auto mb-4"
                />
                <h3 className="text-lg font-bold text-dubai-gold mb-2">Henry Club Digital Agency</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Leading UAE digital marketing agency specializing in web development, SEO services, and comprehensive digital solutions for businesses across Dubai, Sharjah, and the Emirates. Your trusted partner for digital excellence in the UAE.
              </p>
              <div className="mb-4">
                <p className="text-xs text-gray-400">UAE Business License</p>
                <p className="text-xs text-gray-300">License #: 123456789</p>
              </div>
              
              {/* Certifications */}
              <div className="flex space-x-3 mb-4">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Google Premier Partner
                </div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Meta Business Partner
                </div>
              </div>
            </div>

            {/* Services Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-dubai-gold mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-dubai-gold transition-colors duration-200 text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links Section */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-dubai-gold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-dubai-gold transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information & Newsletter */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-bold text-dubai-gold mb-4">Contact Info</h3>
              
              {/* Address */}
              <div className="flex items-start space-x-2 mb-3">
                <MapPinIcon className="h-4 w-4 text-dubai-gold mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Business Center, Sharjah Publishing City</p>
                  <p>SPC Freezone, Sharjah UAE</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2 mb-3">
                <PhoneIcon className="h-4 w-4 text-dubai-gold" />
                <Link
                  href="tel:+971501234567"
                  className="text-gray-300 hover:text-dubai-gold transition-colors duration-200 text-sm"
                >
                  +971 50 123 4567
                </Link>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2 mb-3">
                <EnvelopeIcon className="h-4 w-4 text-dubai-gold" />
                <Link
                  href="mailto:info@henryclub.ae"
                  className="text-gray-300 hover:text-dubai-gold transition-colors duration-200 text-sm"
                >
                  info@henryclub.ae
                </Link>
              </div>

              {/* WhatsApp */}
              <div className="mb-3">
                <Link
                  href="https://wa.me/971501234567"
                  className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors duration-200 text-sm"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span>WhatsApp Us</span>
                </Link>
              </div>

              {/* Business Hours */}
              <div className="mb-4">
                <p className="text-xs text-gray-400 mb-1">Business Hours</p>
                <p className="text-xs text-gray-300">Sunday - Thursday</p>
                <p className="text-xs text-gray-300">9:00 AM - 6:00 PM GST</p>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-dubai-gold mb-2">Newsletter</h4>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-dubai-gold"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-dubai-gold text-gray-900 text-sm font-medium rounded-r-md hover:bg-yellow-500 transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                © {currentYear} Henry Club Digital Agency. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Registered in UAE | Professional Digital Marketing Services
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialMedia.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-dubai-gold transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}