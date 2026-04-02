import Link from 'next/link';

import HeroAceternity from '@/components/HeroAceternity';
import Logo from '@/components/Logo';
import { TextScrambleClient } from '@/components/ClientWrappers';

export default function Home() {
  return (
    <>
      {/* Navigation - fixed with proper z-index */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 lg:px-16 py-4 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/5">
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

      <HeroAceternity />

      {/* About Preview - NO PHOTOS */}
      <section id="about" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="label label-primary mb-4">
            <TextScrambleClient>About the Shop</TextScrambleClient>
          </div>
          <h2 className="font-bebas text-white mb-8 text-5xl lg:text-6xl">Built on Honest Work</h2>
          <div className="w-16 h-[2px] bg-[#c41e3a] mx-auto mb-8" />
          <p className="text-[#f1f5f9] mb-6 text-lg leading-relaxed">
            O. G. Auto has been the Upper Valley&apos;s shop for over 15 years. We started small because we wanted to stay small — to know every customer, to take our time, and to never cut corners.
          </p>
          <p className="text-[#f1f5f9] mb-12 text-lg leading-relaxed">
            When you bring your car in, you get a real technician who actually knows what they&apos;re looking at. No upselling. No surprises.
          </p>
          <Link href="/about" className="btn-ghost">
            Learn More About Us
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Services Preview - NO PHOTOS */}
      <section id="services" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#121929]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="label label-primary mb-4">
              <TextScrambleClient>Full-Service Repair Shop</TextScrambleClient>
            </div>
            <h2 className="font-bebas text-white text-5xl lg:text-6xl">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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
                className="relative border border-[rgba(255,255,255,0.08)] p-8 transition-all duration-300 group hover:border-[#c41e3a]/50 hover:bg-[#0a0f1a]"
              >
                <div className="text-sm font-bebas tracking-widest text-[#c41e3a] mb-4">
                  {service.number}
                </div>
                <h3 className="font-barlow-condensed font-semibold tracking-wider uppercase text-white mb-3 text-lg">
                  {service.name}
                </h3>
                <p className="text-[#8b9db8] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-ghost">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - NO PHOTOS */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="label label-primary mb-4">
              <TextScrambleClient>Why O.G. Auto</TextScrambleClient>
            </div>
            <h2 className="font-bebas text-white text-5xl lg:text-6xl">The Difference</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: '15+ Years', desc: 'Serving the Upper Valley since 2008' },
              { title: 'No Upselling', desc: 'We only fix what needs fixing' },
              { title: 'Fair Prices', desc: 'Honest quotes, no hidden fees' },
              { title: 'Fast Turnaround', desc: 'Most services same day' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="text-4xl font-bebas text-[#c41e3a] mb-4">{item.title}</div>
                <p className="text-[#8b9db8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview - NO PHOTOS */}
      <section id="testimonials" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#121929]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="label label-primary mb-4">
              <TextScrambleClient>Customer Testimonials</TextScrambleClient>
            </div>
            <h2 className="font-bebas text-white text-5xl lg:text-6xl">What People Are Saying</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {[
              {
                author: 'Dave K.',
                initials: 'DK',
                rating: 5,
                review: 'Brought my truck in with a noise I\'d been ignoring for two months. They found it in twenty minutes, gave me a straight number, and had it done by 3pm.',
              },
              {
                author: 'Sarah R.',
                initials: 'SR',
                rating: 5,
                review: 'Fair prices. Good work. They didn\'t try to sell me anything I didn\'t need — which, after years of dealing with other shops, felt like a miracle.',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#0a0f1a] border border-[rgba(255,255,255,0.08)] p-8 lg:p-12 hover:border-[#c41e3a]/30 transition-colors">
                <div className="text-6xl font-bebas text-[#c41e3a] opacity-20 leading-none mb-4">
                  &ldquo;
                </div>
                <p className="font-barlow font-light italic text-lg text-[#f1f5f9] leading-relaxed mb-8">
                  {testimonial.review}
                </p>
                <div className="h-px bg-[rgba(255,255,255,0.08)] mb-6" />
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-barlow-condensed font-semibold text-xs text-white"
                    style={{ background: 'linear-gradient(135deg, #c41e3a 0%, #1e3a5f 100%)' }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-barlow-condensed font-semibold text-white uppercase text-sm tracking-wider">
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

          <div className="text-center">
            <Link href="/why-us" className="btn-ghost">
              Read More Reviews
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bebas text-white mb-6 text-5xl lg:text-6xl">Ready to Fix Your Car?</h2>
          <p className="text-[#f1f5f9] mb-12 text-lg">
            Get a straight quote, honest work, and fast turnaround. Schedule your service today.
          </p>
          <Link href="/contact" className="btn-primary inline-block text-lg px-12 py-4">
            <span>Book a Service</span>
          </Link>
        </div>
      </section>
    </>
  );
}
