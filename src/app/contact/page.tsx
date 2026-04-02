import type { Metadata } from 'next';

import Contact from '@/components/Contact';
import { TextScrambleClient } from '@/components/ClientWrappers';

export const metadata: Metadata = {
  title: 'Contact O. G. Auto | Book a Service',
  description: 'Get in touch with O. G. Auto in White River Junction, Vermont. Book your service appointment today.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative w-full pt-32 pb-12 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="label label-primary mb-4">
            <TextScrambleClient>Get In Touch</TextScrambleClient>
          </div>
          <h1 className="font-bebas text-white text-4xl lg:text-5xl">Book Your Service</h1>
          <p className="text-[#f1f5f9] mt-6 max-w-2xl">
            Call us directly or fill out the form below. We respond to every message within a few hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="relative w-full py-6 px-8 lg:px-16 bg-[#121929] border-y border-[rgba(255,255,255,0.08)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-barlow-condensed font-600 tracking-widest text-[#c41e3a] uppercase">Call Now</span>
            <a href="tel:+18024782224" className="text-white font-barlow-condensed font-600 text-lg hover:text-[#c41e3a] transition-colors">
              (802) 478-2224
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-barlow-condensed font-600 tracking-widest text-[#c41e3a] uppercase">Hours</span>
            <span className="text-[#f1f5f9] text-sm">Mon-Fri 7:30am-5:30pm | Sat 8am-2pm</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-barlow-condensed font-600 tracking-widest text-[#c41e3a] uppercase">Location</span>
            <span className="text-[#f1f5f9] text-sm">160 Sykes Mountain Ave, WRJ, VT</span>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="relative w-full py-16 lg:py-24 px-8 lg:px-16 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Contact />
            <div className="hidden lg:flex flex-col gap-8">
              {/* Google Maps Embed */}
              <div className="w-full h-96 border border-[rgba(255,255,255,0.08)] overflow-hidden">
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
      <section className="relative w-full py-16 px-8 lg:px-16 bg-[#121929]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-white text-3xl mb-4">Prefer to Call?</h2>
          <p className="text-[#f1f5f9] mb-8">We pick up the phone. Every time.</p>
          <a href="tel:+18024782224" className="btn-primary inline-flex items-center justify-center h-12">
            Call (802) 478-2224
          </a>
        </div>
      </section>
    </>
  );
}
