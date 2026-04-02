import Link from 'next/link';

import HeroEnhanced from '@/components/HeroEnhanced';
import Logo from '@/components/Logo';
import { VideoSectionClient, TextScrambleClient } from '@/components/ClientWrappers';



export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-16 py-4 bg-[#0a0f1a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <Link href="/about" className="text-sm text-[#8b9db8] hover:text-white transition-colors uppercase tracking-wider">About</Link>
            <Link href="/services" className="text-sm text-[#8b9db8] hover:text-white transition-colors uppercase tracking-wider">Services</Link>
            <Link href="/why-us" className="text-sm text-[#8b9db8] hover:text-white transition-colors uppercase tracking-wider">Why Us</Link>
            <Link href="/contact" className="btn-primary">Book Service</Link>
          </div>
        </div>
      </nav>

      <HeroEnhanced />

      {/* About Preview */}
      <section id="about" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col justify-start">
              <div className="label label-primary mb-4">
                <TextScrambleClient>About the Shop</TextScrambleClient>
              </div>
              <h2 className="font-bebas text-white mb-8">Built on Honest Work</h2>
              <div className="w-16 h-[2px] bg-[#c41e3a] mb-8" />
              <p className="text-[#f1f5f9] mb-6 max-w-md">
                O. G. Auto has been the Upper Valley's shop for over 15 years. We started small because we wanted to stay small — to know every customer, to take our time, and to never cut corners.
              </p>
              <p className="text-[#f1f5f9] mb-12 max-w-md">
                When you bring your car in, you get a real technician who actually knows what they're looking at. No upselling. No surprises.
              </p>
              <Link href="/about" className="btn-ghost">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              {/* Logo mark large */}
              <div className="w-64 h-64 opacity-20">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#c41e3a" strokeWidth="1" />
                  <circle cx="20" cy="20" r="8" fill="#c41e3a" />
                  <path d="M20 2 L20 10 M20 30 L20 38 M2 20 L10 20 M30 20 L38 20" stroke="#1e3a5f" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20 items-start">
            <div>
              <div className="label label-primary mb-4">
                <TextScrambleClient>Full-Service Repair Shop</TextScrambleClient>
              </div>
              <h2 className="font-bebas text-white">What We Do</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[rgba(255,255,255,0.08)] mb-12">
            {[
              {
                number: '01',
                name: 'Oil & Filter',
                description: 'Full synthetic, conventional, or high-mileage. Fast, done right.',
              },
              {
                number: '02',
                name: 'Brakes & Rotors',
                description: 'We inspect and advise. Only replace what actually needs it.',
              },
              {
                number: '03',
                name: 'Engine Diagnostics',
                description: 'We read codes, dig deeper, explain clearly. No upselling.',
              },
            ].map((service) => (
              <div
                key={service.number}
                className="relative border-r border-b border-[rgba(255,255,255,0.08)] p-6 lg:p-8 transition-colors duration-300 group hover:bg-[#121929]"
              >
                <div className="text-xs lg:text-sm font-bebas tracking-widest text-[#c41e3a] mb-6">
                  {service.number}
                </div>
                <h3 className="font-barlow-condensed font-600 tracking-wider uppercase text-white mb-3 text-sm lg:text-base">
                  {service.name}
                </h3>
                <p className="text-xs lg:text-sm text-[#8b9db8] leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <Link href="/services" className="btn-ghost">
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <VideoSectionClient />

      {/* Testimonials Preview */}
      <section id="testimonials" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 lg:mb-20">
            <div>
              <div className="label label-primary mb-4">
                <TextScrambleClient>Customer Testimonials</TextScrambleClient>
              </div>
              <h2 className="font-bebas text-white">What People Are Saying</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-12">
            {[
              {
                author: 'Dave K.',
                initials: 'DK',
                rating: 5,
                review:
                  '"Brought my truck in with a noise I\'d been ignoring for two months. They found it in twenty minutes, gave me a straight number, and had it done by 3pm."',
              },
              {
                author: 'Sarah R.',
                initials: 'SR',
                rating: 5,
                review:
                  '"Fair prices. Good work. They didn\'t try to sell me anything I didn\'t need — which, after years of dealing with other shops, felt like a miracle."',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#121929] border border-[rgba(255,255,255,0.08)] p-8 lg:p-12 hover:border-[#c41e3a]/30 transition-colors">
                <div className="text-8xl font-bebas text-[#c41e3a] opacity-20 leading-none mb-4">
                  &ldquo;
                </div>
                <p className="font-barlow font-300 italic text-base lg:text-lg text-[#f1f5f9] leading-relaxed mb-8">
                  {testimonial.review}
                </p>
                <div className="h-px bg-[rgba(255,255,255,0.08)] mb-6" />
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-barlow-condensed font-600 text-xs text-white"
                    style={{
                      background: `linear-gradient(135deg, #c41e3a 0%, #1e3a5f 100%)`,
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-barlow-condensed font-600 text-white uppercase text-sm tracking-wider">
                      {testimonial.author}
                    </div>
                    <div className="text-[#c41e3a] text-sm">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/why-us" className="btn-ghost">
            Read More Reviews
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#121929]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-white mb-8">Ready to Fix Your Car?</h2>
          <p className="text-[#f1f5f9] mb-12 max-w-2xl mx-auto">
            Get a straight quote, honest work, and fast turnaround. Schedule your service today.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            <span>Book a Service</span>
          </Link>
        </div>
      </section>
    </>
  );
}
