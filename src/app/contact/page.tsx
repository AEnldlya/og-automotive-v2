import type { Metadata } from 'next';

import Contact from '@/components/Contact';
import { GearModelClient, TextScrambleClient } from '@/components/ClientWrappers';



export const metadata: Metadata = {
  title: 'Contact OG Automotive | Book a Service',
  description: 'Get in touch with OG Automotive in White River Junction, Vermont. Book your service appointment today.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-12 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="label label-amber mb-4">
            <TextScrambleClient>Get In Touch</TextScrambleClient>
          </div>
          <h1 className="font-bebas text-white text-4xl lg:text-5xl">Let's Fix Your Car</h1>
          <p className="text-cream mt-6 max-w-2xl">
            Reach out with any questions or to book your next service. We'll get back to you fast.
          </p>
        </div>
      </section>

      {/* Contact Component with Gear Model */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Contact />
            <div className="hidden lg:block">
              <GearModelClient />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
