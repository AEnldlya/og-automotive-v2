import type { Metadata } from 'next';

import Contact from '@/components/Contact';
import { GearModelClient, TextScrambleClient } from '@/components/ClientWrappers';

export const metadata: Metadata = {
  title: 'Contact O. G. Auto | Book a Service',
  description: 'Get in touch with O. G. Auto in White River Junction, Vermont. Book your service appointment today.',
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
          <h1 className="font-bebas text-white text-4xl lg:text-5xl">Book Your Service</h1>
          <p className="text-cream mt-6 max-w-2xl">
            Call us directly or fill out the form below. We respond to every message within a few hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="relative w-full py-6 px-8 lg:px-16 bg-charcoal border-y border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase">Call Now</span>
            <a href="tel:+18024782224" className="text-white font-barlow-condensed font-600 text-lg hover:text-amber transition-colors">
              (802) 478-2224
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase">Hours</span>
            <span className="text-cream text-sm">Mon-Fri 7:30am-5:30pm | Sat 8am-2pm</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase">Location</span>
            <span className="text-cream text-sm">160 Sykes Mountain Ave, WRJ, VT</span>
          </div>
        </div>
      </section>

      {/* Contact Form + Gear Model */}
      <section className="relative w-full py-16 lg:py-24 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Contact />
            <div className="hidden lg:flex flex-col gap-8">
              <GearModelClient />
              {/* Google Maps Embed */}
              <div className="w-full h-64 border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.5!2d-72.3197!3d43.6489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM4JzU2LjAiTiA3MsKwMTknMTAuOSJX!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(80%) contrast(1.1)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="O. G. Auto Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full py-16 px-8 lg:px-16 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-white text-3xl mb-4">Prefer to Call?</h2>
          <p className="text-cream mb-8">We pick up the phone. Every time.</p>
          <a href="tel:+18024782224" className="btn-primary inline-flex items-center justify-center h-12">
            Call (802) 478-2224
          </a>
        </div>
      </section>
    </>
  );
}
