import Link from 'next/link';
import { PhoneIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary-900 to-primary-700 py-20 relative overflow-hidden">
      {/* Background Pattern/Texture Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-pattern-dots bg-repeat opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        
        {/* Main Headlines */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to 10X Your UAE Business Growth?
        </h2>
        
        <p className="text-xl text-gray-100 mb-12 leading-relaxed max-w-3xl mx-auto">
          Get your free digital marketing strategy session and discover how to dominate 
          your market in Dubai and UAE.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link
            href="#contact-form"
            className="bg-dubai-gold hover:bg-dubai-gold/90 text-black font-bold text-lg px-10 py-5 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 hover:shadow-dubai-gold/20"
          >
            Get Free Strategy Session
          </Link>
          
          <a
            href="tel:+971501234567"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
          >
            <PhoneIcon className="h-6 w-6" />
            Call +971 50 123 4567
          </a>
        </div>

        {/* Contact Options Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://wa.me/971501234567?text=Hi, I want to book my free strategy session"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ChatBubbleLeftRightIcon className="h-5 w-5" />
            WhatsApp Us
          </a>
          
          <a
            href="mailto:info@henryclub.ae?subject=Free Strategy Session Request"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-colors"
          >
            Email: info@henryclub.ae
          </a>
        </div>

        {/* Urgency Element */}
        <div className="bg-red-600 text-white font-bold px-6 py-3 rounded-full inline-block mb-8 animate-pulse">
          ⚡ Limited spots available this month - Book now!
        </div>

        {/* Trust Signals - Client Logo Carousel */}
        <div className="mb-8">
          <p className="text-white/80 font-semibold mb-6">Trusted by 500+ UAE businesses</p>
          <div className="flex justify-center items-center gap-8 overflow-hidden">
            <div className="flex gap-8">
              {/* Client Logo Placeholders */}
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] h-16 flex items-center justify-center">
                <span className="text-white/60 font-semibold text-sm">Al Fanar</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] h-16 flex items-center justify-center">
                <span className="text-white/60 font-semibold text-sm">InnovateTech</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] h-16 flex items-center justify-center">
                <span className="text-white/60 font-semibold text-sm">Emirates Fashion</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] h-16 flex items-center justify-center">
                <span className="text-white/60 font-semibold text-sm">Dubai Properties</span>
              </div>
              <div className="bg-white/10 rounded-lg p-4 min-w-[120px] h-16 flex items-center justify-center">
                <span className="text-white/60 font-semibold text-sm">Gulf Medical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Badge */}
        <div className="bg-white/10 border-2 border-dubai-gold rounded-2xl p-6 mb-8 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 bg-dubai-gold rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">✓</span>
            </div>
            <span className="text-dubai-gold font-bold text-lg">100% Satisfaction Guaranteed</span>
          </div>
          <p className="text-white/80 text-sm">or money back within 30 days</p>
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <p className="text-white/90 text-lg font-medium">
            Join successful brands in Dubai, Abu Dhabi, and Sharjah
          </p>
          <div className="flex justify-center items-center gap-2 mt-4 text-dubai-gold">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>
            <span className="text-white/80 ml-2">4.9/5 Client Satisfaction Rating</span>
          </div>
        </div>

      </div>
    </section>
  );
}