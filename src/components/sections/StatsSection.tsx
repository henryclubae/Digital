'use client';

import { useState, useEffect } from 'react';

const stats = [
  {
    number: 500,
    suffix: '+',
    label: 'Happy Clients',
    description: 'UAE businesses transformed'
  },
  {
    number: 300,
    suffix: '%',
    label: 'Average Growth',
    description: 'Revenue increase achieved'
  },
  {
    number: 50,
    suffix: '+',
    label: 'Team Experts',
    description: 'Certified professionals'
  },
  {
    number: 99,
    suffix: '%',
    label: 'Client Retention',
    description: 'Long-term partnerships'
  },
  {
    number: 5,
    suffix: ' Years',
    label: 'Market Experience',
    description: 'In UAE digital landscape'
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Support Available',
    description: 'Round-the-clock assistance'
  }
];

interface AnimatedCounterProps {
  readonly targetNumber: number;
  readonly suffix: string;
}

function AnimatedCounter({ targetNumber, suffix }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-pattern-dots bg-repeat opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Delivering Results That Matter
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the numbers that showcase 
            our commitment to driving exceptional results for UAE businesses.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-4">
                <AnimatedCounter 
                  targetNumber={stat.number} 
                  suffix={stat.suffix} 
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-300 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Award 1 */}
          <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div className="w-12 h-12 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">🏆</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Top Digital Agency</h4>
            <p className="text-gray-300 text-sm">Dubai Business Excellence Awards 2024</p>
          </div>

          {/* Award 2 */}
          <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div className="w-12 h-12 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">⭐</span>
            </div>
            <h4 className="text-white font-semibold mb-2">5-Star Rated</h4>
            <p className="text-gray-300 text-sm">Google My Business & Facebook Reviews</p>
          </div>

          {/* Award 3 */}
          <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div className="w-12 h-12 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">🚀</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Growth Leader</h4>
            <p className="text-gray-300 text-sm">UAE StartUp50 Recognition 2023</p>
          </div>

          {/* Award 4 */}
          <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
            <div className="w-12 h-12 bg-dubai-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-black font-bold text-xl">🎯</span>
            </div>
            <h4 className="text-white font-semibold mb-2">Results Driven</h4>
            <p className="text-gray-300 text-sm">Certified Google & Facebook Partner</p>
          </div>

        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Trusted by Leading UAE Brands
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {/* Client Logo Placeholders */}
            <div className="bg-white/10 rounded-lg p-4 h-16 flex items-center justify-center">
              <span className="text-white/80 font-semibold text-sm">Al Fanar</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 h-16 flex items-center justify-center">
              <span className="text-white/80 font-semibold text-sm">InnovateTech</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 h-16 flex items-center justify-center">
              <span className="text-white/80 font-semibold text-sm">Emirates Fashion</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 h-16 flex items-center justify-center">
              <span className="text-white/80 font-semibold text-sm">Dubai Properties</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 h-16 flex items-center justify-center">
              <span className="text-white/80 font-semibold text-sm">Gulf Medical</span>
            </div>
            <div className="bg-white/10 rounded-lg p-4 h-16 flex items-center justify-center">
              <span className="text-white/80 font-semibold text-sm">Sharjah Hotels</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12">
            <p className="text-gray-200 mb-6">
              Join hundreds of successful businesses that trust us with their digital growth
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 bg-dubai-gold hover:bg-dubai-gold/90 text-black font-semibold rounded-lg transform hover:scale-105 transition-all duration-200"
            >
              Start Your Success Story
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}