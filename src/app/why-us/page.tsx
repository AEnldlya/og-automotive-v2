import type { Metadata } from 'next';
import Link from 'next/link';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';

export const metadata: Metadata = {
  title: 'Why OG Automotive | Honest Service, Fair Prices',
  description: 'Learn why customers choose OG Automotive for transparent pricing, fast turnaround, and honest work.',
};

export default function WhyUsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-12 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="label label-amber mb-4">Why Choose Us</div>
          <h1 className="font-bebas text-white text-4xl lg:text-5xl">No Games. No Guessing. Just Fixed.</h1>
          <p className="text-cream mt-6 max-w-2xl">
            We believe in transparent pricing, honest advice, and treating your car like we'd treat our own.
          </p>
        </div>
      </section>

      {/* WhyUs Component */}
      <WhyUs />

      {/* Testimonials Component */}
      <Testimonials />

      {/* CTA Section */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-white mb-8">Experience the Difference</h2>
          <p className="text-cream mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust OG for honest, fast, local service.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Schedule Your Service
          </Link>
        </div>
      </section>
    </>
  );
}
