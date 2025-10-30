import SEO from '@/components/SEO';
import Image from 'next/image';
import { CheckIcon, UserGroupIcon, TrophyIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, BuildingOfficeIcon, HeartIcon, LightBulbIcon, ShieldCheckIcon, ChartBarIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const team = [
  {
    name: 'Omar Al Rashid',
    role: 'CEO & Founder',
    bio: '10+ years in UAE digital marketing, former Dubai Chamber digital advisor',
    expertise: ['Business Strategy', 'UAE Market Analysis', 'Client Relations'],
    image: '/images/team/omar.jpg'
  },
  {
    name: 'Sarah Mitchell',
    role: 'CTO & Tech Lead',
    bio: 'Full-stack developer with expertise in Next.js, React, and cloud architecture',
    expertise: ['Web Development', 'Cloud Solutions', 'Technical Strategy'],
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'Ahmed Hassan',
    role: 'Marketing Director',
    bio: 'Digital marketing strategist specializing in Middle East consumer behavior',
    expertise: ['Digital Strategy', 'Campaign Management', 'Analytics'],
    image: '/images/team/ahmed.jpg'
  },
  {
    name: 'Fatima Al Zahra',
    role: 'SEO Specialist',
    bio: 'Expert in Arabic and English SEO with focus on UAE local search optimization',
    expertise: ['SEO Optimization', 'Local Search', 'Content Strategy'],
    image: '/images/team/fatima.jpg'
  },
  {
    name: 'Michael Thompson',
    role: 'Creative Director',
    bio: 'Award-winning designer with 8+ years creating visual identities for UAE brands',
    expertise: ['Brand Design', 'UI/UX Design', 'Visual Strategy'],
    image: '/images/team/michael.jpg'
  },
  {
    name: 'Layla Mohamed',
    role: 'Account Manager',
    bio: 'Client relationship specialist ensuring project success and satisfaction',
    expertise: ['Project Management', 'Client Success', 'Business Development'],
    image: '/images/team/layla.jpg'
  }
];

const values = [
  {
    title: 'UAE Market Focus',
    description: 'Deep understanding of local culture, regulations, and consumer behavior across the Emirates.',
    icon: GlobeAltIcon
  },
  {
    title: 'Results-Driven Approach',
    description: 'Every strategy is built around measurable outcomes and clear ROI for our clients.',
    icon: ChartBarIcon
  },
  {
    title: 'Cultural Understanding',
    description: 'Bilingual team with native Arabic speakers ensuring culturally appropriate campaigns.',
    icon: HeartIcon
  },
  {
    title: 'Innovation',
    description: 'Staying ahead with latest digital trends and technologies for competitive advantage.',
    icon: LightBulbIcon
  },
  {
    title: 'Transparency',
    description: 'Clear communication, detailed reporting, and honest advice for long-term partnerships.',
    icon: ShieldCheckIcon
  }
];

const certifications = [
  {
    name: 'Google Premier Partner',
    description: 'Top-tier Google Ads certification with proven track record',
    logo: '/images/certifications/google-premier.png',
    color: 'bg-blue-500'
  },
  {
    name: 'Facebook Marketing Partner',
    description: 'Meta Business Partner with advanced social media expertise',
    logo: '/images/certifications/facebook-partner.png',
    color: 'bg-blue-600'
  },
  {
    name: 'HubSpot Partner',
    description: 'Certified in inbound marketing and sales automation',
    logo: '/images/certifications/hubspot-partner.png',
    color: 'bg-orange-500'
  }
];

const achievements = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started in Sharjah with a vision to transform UAE digital marketing'
  },
  {
    year: '2021',
    title: 'Google Premier Partner',
    description: 'Achieved Google Premier Partner status within first year'
  },
  {
    year: '2022',
    title: '100+ Clients Milestone',
    description: 'Reached 100 satisfied clients across UAE and GCC region'
  },
  {
    year: '2023',
    title: 'Award Recognition',
    description: 'Won "Best Digital Agency" at UAE Business Excellence Awards'
  },
  {
    year: '2024',
    title: 'Team Expansion',
    description: 'Grew to 15+ specialists covering all digital marketing disciplines'
  },
  {
    year: '2025',
    title: 'Market Leadership',
    description: 'Established as leading digital agency in Sharjah and Northern Emirates'
  }
];

const industries = [
  { name: 'Hospitality & Tourism', icon: BuildingOfficeIcon },
  { name: 'Real Estate & Property', icon: BuildingOfficeIcon },
  { name: 'Healthcare & Medical', icon: HeartIcon },
  { name: 'Retail & E-commerce', icon: ChartBarIcon },
  { name: 'Professional Services', icon: UserGroupIcon },
  { name: 'Technology & Startups', icon: LightBulbIcon }
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Henry Club Digital Agency | UAE Digital Marketing Experts"
        description="Learn about Henry Club Digital Agency - Dubai's leading digital marketing experts since 2020. Meet our team, our mission, and our commitment to growing UAE businesses."
        keywords="about henry club, digital marketing agency Dubai team, UAE marketing experts"
        canonicalUrl="/about"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 py-20">
        <div className="absolute inset-0 bg-dots-white opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-dubai-gold">Henry Club</span><br />
            Digital Agency
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Since 2020, we&apos;ve been the trusted digital marketing partner for businesses across the UAE, 
            delivering exceptional results through innovative strategies and deep local market expertise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-dubai-gold">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-dubai-gold">200+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-4">
              <div className="text-3xl font-bold text-dubai-gold">5</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020 in the heart of Sharjah, Henry Club Digital Agency was born from a simple 
                  vision: to help UAE businesses thrive in the digital age while respecting local culture 
                  and market dynamics.
                </p>
                <p>
                  What started as a small team of passionate digital marketers has grown into the UAE&apos;s 
                  most trusted digital agency, serving clients from Dubai to Abu Dhabi and across the 
                  Northern Emirates.
                </p>
                <p>
                  Our deep understanding of the UAE market, combined with cutting-edge digital strategies, 
                  has helped hundreds of businesses achieve remarkable growth. We&apos;re not just service 
                  providers – we&apos;re growth partners committed to your success.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-dubai-gold mb-2">300%</div>
                  <div className="text-gray-600">Average ROI Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-dubai-gold mb-2">95%</div>
                  <div className="text-gray-600">Client Retention Rate</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/about/company-story.jpg"
                alt="Henry Club Digital Agency Office"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mission & Vision
            </h2>
            <p className="text-xl text-gray-600">
              Guiding principles that drive everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <TrophyIcon className="h-12 w-12 text-dubai-gold mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower UAE businesses with innovative digital marketing solutions that drive 
                measurable growth while respecting local culture and values. We bridge the gap 
                between global digital trends and regional market needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <LightBulbIcon className="h-12 w-12 text-dubai-gold mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital transformation partner for businesses across the UAE and GCC, 
                known for delivering exceptional results, fostering innovation, and contributing to the 
                region&apos;s digital economy growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to your digital success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={120}
                  height={120}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-dubai-gold font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our work and relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <value.icon className="h-12 w-12 text-dubai-gold mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Recognized expertise by leading technology platforms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${cert.color} rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                  <CheckIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Located in the prestigious Sharjah Publishing City Free Zone, our modern office 
                serves as the hub for innovation and collaboration. We welcome clients to visit 
                and discuss their digital transformation goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="h-6 w-6 text-dubai-gold mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">
                      Business Center, Sharjah Publishing City<br />
                      SPC Freezone, Sharjah, UAE
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="h-6 w-6 text-dubai-gold" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+971 50 123 4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-6 w-6 text-dubai-gold" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@henryclub.ae</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-2">Business Hours</h4>
                <p className="text-gray-600">Sunday - Thursday: 9:00 AM - 6:00 PM GST</p>
                <p className="text-gray-600">Friday - Saturday: Closed</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-12 w-12 text-dubai-gold mx-auto mb-2" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">Sharjah Publishing City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Achievements Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that define our growth and commitment to excellence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-dubai-gold"></div>
            
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-dubai-gold font-bold text-lg mb-2">{achievement.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-dubai-gold rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Industries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized expertise across diverse business sectors
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                <industry.icon className="h-12 w-12 text-dubai-gold mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can help grow your business in the UAE market
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-dubai-gold text-gray-900 font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="https://wa.me/971501234567"
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}