import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import About from '@/components/About';
import { FloatingPhotos3DClient, TextScrambleClient } from '@/components/ClientWrappers';



export const metadata: Metadata = {
  title: 'About O. G. Auto | White River Junction Auto Repair',
  description: 'Learn about O. G. Auto\'s 15+ years of honest service in White River Junction, Vermont.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Mike T.',
      role: 'Owner & Lead Technician',
      bio: '25+ years in automotive repair. Knows every car on the road.',
    },
    {
      name: 'Chris D.',
      role: 'Master Technician',
      bio: 'Specializes in diagnostics and engine work. ASE certified.',
    },
    {
      name: 'Alex M.',
      role: 'Service Advisor',
      bio: 'Your point of contact. Makes sure everything runs smooth.',
    },
  ];

  return (
    <>
      {/* Full About Component */}
      <About />

      {/* Floating Photos 3D Section */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <div className="label label-amber mb-4">
              <TextScrambleClient>Visual Gallery</TextScrambleClient>
            </div>
            <h2 className="font-bebas text-white">Our Workshop</h2>
          </div>
          <FloatingPhotos3DClient />
        </div>
      </section>

      {/* Team Section */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 lg:mb-20">
            <div className="label label-amber mb-4">
              <TextScrambleClient>Our Team</TextScrambleClient>
            </div>
            <h2 className="font-bebas text-white">The People Behind the Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="border border-border p-8 lg:p-10">
                <div className="w-16 h-16 bg-gradient-to-br from-amber to-rust rounded-full mb-6" />
                <h3 className="font-bebas text-xl lg:text-2xl text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase mb-4">
                  {member.role}
                </div>
                <p className="text-cream text-sm lg:text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <div className="label label-amber mb-4">
                <TextScrambleClient>Our Story</TextScrambleClient>
              </div>
              <h2 className="font-bebas text-white mb-8">How It Started</h2>
              <div className="w-16 h-[2px] bg-amber mb-8" />
              <div className="space-y-6 text-cream">
                <p>
                  O. G. Auto wasn't born from a corporate plan or a franchise model. It started with one technician who was tired of working for shops that treated customers like walking wallets.
                </p>
                <p>
                  Fifteen years ago, we opened our doors in White River Junction with a simple promise: treat people the way you'd want to be treated. Fix their cars right. Give straight quotes. Don't upsell.
                </p>
                <p>
                  That promise hasn't changed. Neither has our commitment to staying small, staying independent, and staying honest. We've turned down offers to expand because we believe the best work happens in a shop where everyone knows every customer's name.
                </p>
                <p>
                  When you bring your car to OG, you're not a ticket number. You're a person we want to take care of.
                </p>
              </div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bebas text-white mb-8">Let's Work Together</h2>
          <p className="text-cream mb-12 max-w-2xl mx-auto">
            Experience the OG difference. Schedule your next service today.
          </p>
          <Link href="/contact" className="btn-primary inline-block">
            Book a Service
          </Link>
        </div>
      </section>
    </>
  );
}
