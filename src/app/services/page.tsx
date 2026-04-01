import type { Metadata } from 'next';
import Link from 'next/link';

import Services from '@/components/Services';
import { ParticleFieldClient, TextScrambleClient } from '@/components/ClientWrappers';



export const metadata: Metadata = {
  title: 'Services | OG Automotive - All Makes, All Models',
  description: 'Full-service auto repair for all makes and models. Oil changes, brakes, diagnostics, tires, AC, suspension, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-12 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="label label-amber mb-4">
            <TextScrambleClient>Full-Service Repair</TextScrambleClient>
          </div>
          <h1 className="font-bebas text-white text-4xl lg:text-5xl">All the Services Your Car Needs</h1>
          <p className="text-cream mt-6 max-w-2xl">
            From routine maintenance to major repairs, we handle everything for domestic, import, old, and new vehicles.
          </p>
        </div>
      </section>

      {/* Services Component with Particle Field */}
      <section className="relative w-full bg-black">
        <ParticleFieldClient />
        <div className="relative z-10">
          <Services />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-white mb-8">Don't See Your Service?</h2>
          <p className="text-cream mb-12 max-w-2xl mx-auto">
            We handle custom repairs and specialized work. Get in touch to discuss your specific needs.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
