import Link from 'next/link';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import HorizontalPhotoScroll from '@/components/HorizontalPhotoScroll';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* About Preview */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="flex flex-col justify-start">
              <div className="label label-amber mb-4">About the Shop</div>
              <h2 className="font-bebas text-white mb-8">Built on Honest Work</h2>
              <div className="w-16 h-[2px] bg-amber mb-8" />
              <p className="text-cream mb-6 max-w-md">
                OG Automotive has been the Upper Valley's shop for over 15 years. We started small because we wanted to stay small — to know every customer, to take our time, and to never cut corners.
              </p>
              <p className="text-cream mb-12 max-w-md">
                When you bring your car in, you get a real technician who actually knows what they're looking at. No upselling. No surprises.
              </p>
              <Link href="/about" className="btn-ghost">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Horizontal Photo Scroll */}
      <HorizontalPhotoScroll />

      {/* Services Preview */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20 items-start">
            <div>
              <div className="label label-amber mb-4">Full-Service Repair Shop</div>
              <h2 className="font-bebas text-white">What We Do</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border mb-12">
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
                className="relative border-r border-b border-border p-6 lg:p-8 transition-colors duration-300 group"
              >
                <div className="text-xs lg:text-sm font-bebas tracking-widest text-amber mb-6">
                  {service.number}
                </div>
                <h3 className="font-barlow-condensed font-600 tracking-wider uppercase text-white mb-3 text-sm lg:text-base">
                  {service.name}
                </h3>
                <p className="text-xs lg:text-sm text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <Link href="/services" className="btn-ghost">
            View All Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 lg:mb-20">
            <div>
              <div className="label label-amber mb-4">Customer Testimonials</div>
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
              <div key={idx} className="bg-charcoal border border-border p-8 lg:p-12">
                <div className="text-8xl font-bebas text-amber opacity-20 leading-none mb-4">
                  "
                </div>
                <p className="font-barlow font-300 italic text-base lg:text-lg text-cream leading-relaxed mb-8">
                  {testimonial.review}
                </p>
                <div className="h-px bg-border mb-6" />
                <div className="flex items-center gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-barlow-condensed font-600 text-xs text-white"
                    style={{
                      background: `linear-gradient(135deg, #e07b2a 0%, #9b3a1a 100%)`,
                    }}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-barlow-condensed font-600 text-white uppercase text-sm tracking-wider">
                      {testimonial.author}
                    </div>
                    <div className="text-amber text-sm">
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
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-white mb-8">Ready to Fix Your Car?</h2>
          <p className="text-cream mb-12 max-w-2xl mx-auto">
            Get a straight quote, honest work, and fast turnaround. Schedule your service today.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
}
