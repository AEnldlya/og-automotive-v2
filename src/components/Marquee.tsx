'use client';

const services = [
  'Oil Change',
  'Brakes & Rotors',
  'Engine Diagnostics',
  'Transmission',
  'Suspension',
  'Tire Service',
  'AC & Heat',
  'Exhaust',
];

export default function Marquee() {
  return (
    <section className="w-full bg-amber py-3 lg:py-4 overflow-hidden">
      <div className="relative flex whitespace-nowrap">
        {/* First copy */}
        <div className="marquee-content flex gap-4 flex-shrink-0 animate-[marquee_22s_linear_infinite]">
          {services.map((service, idx) => (
            <div key={`first-${idx}`} className="flex items-center gap-4">
              <span className="font-bebas font-400 text-sm lg:text-base tracking-[0.18em] text-black uppercase">
                {service}
              </span>
              <span className="text-black text-xl">◆</span>
            </div>
          ))}
        </div>

        {/* Second copy for seamless loop */}
        <div className="marquee-content flex gap-4 flex-shrink-0 animate-[marquee_22s_linear_infinite]">
          {services.map((service, idx) => (
            <div key={`second-${idx}`} className="flex items-center gap-4">
              <span className="font-bebas font-400 text-sm lg:text-base tracking-[0.18em] text-black uppercase">
                {service}
              </span>
              <span className="text-black text-xl">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
