'use client';

import { useState, useRef } from 'react';

const services = [
  'Oil & Filter',
  'Brakes & Rotors',
  'Engine Diagnostics',
  'Tires & Alignment',
  'AC & Heating',
  'Suspension',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    vehicle: '',
    service: 'Oil & Filter',
    details: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const submitRef = useRef<HTMLButtonElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    // In production, this would connect to FormSpree, EmailJS, or a custom endpoint
    console.log('Form submitted:', formData);

    // Show success state
    if (submitRef.current) {
      submitRef.current.textContent = 'Request Sent ✓';
      submitRef.current.style.backgroundColor = 'var(--color-green, #10b981)';
      setSubmitted(true);

      // Reset after 3 seconds
      setTimeout(() => {
        if (submitRef.current) {
          submitRef.current.textContent = 'Send Request';
          submitRef.current.style.backgroundColor = '';
          setSubmitted(false);
        }
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          vehicle: '',
          service: 'Oil & Filter',
          details: '',
        });
      }, 3000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column - Contact info */}
          <div className="flex flex-col justify-start">
            {/* Label */}
            <div className="label label-amber mb-4">Get In Touch</div>

            {/* Title */}
            <h2 className="font-bebas text-white mb-8">Come Find Us in WRJ</h2>

            {/* Divider line */}
            <div className="w-16 h-[2px] bg-amber mb-12" />

            {/* Contact details */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-5 h-5 text-amber mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase mb-2">
                    Address
                  </div>
                  <p className="text-cream">160 Sykes Mountain Ave</p>
                  <p className="text-cream">White River Junction, VT 05001</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-5 h-5 text-amber mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase mb-2">
                    Phone
                  </div>
                  <p className="text-cream">
                    <a href="tel:+18024782224" className="hover:text-amber transition-colors">
                      (802) 478-2224
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-5 h-5 text-amber mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase mb-2">
                    Hours
                  </div>
                  <div className="text-cream text-sm">
                    <p>Mon–Fri: 7:30am–5:30pm</p>
                    <p>Sat: 8am–2pm</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Contact form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First and Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block label mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-border text-cream focus:border-amber focus:bg-opacity-100 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block label mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-border text-cream focus:border-amber focus:bg-opacity-100 transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block label mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-border text-cream focus:border-amber focus:bg-opacity-100 transition-all"
                />
              </div>

              {/* Vehicle */}
              <div>
                <label htmlFor="vehicle" className="block label mb-2">
                  Vehicle
                </label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  placeholder="2018 Toyota Tacoma"
                  value={formData.vehicle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-border text-cream placeholder-muted focus:border-amber focus:bg-opacity-100 transition-all"
                />
              </div>

              {/* Service dropdown */}
              <div>
                <label htmlFor="service" className="block label mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-border text-cream focus:border-amber focus:bg-opacity-100 transition-all appearance-none cursor-pointer"
                >
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-black text-cream">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Details textarea */}
              <div>
                <label htmlFor="details" className="block label mb-2">
                  Details / Message
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-black border border-border text-cream focus:border-amber focus:bg-opacity-100 transition-all resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                ref={submitRef}
                type="submit"
                disabled={submitted}
                className="w-full btn-primary mt-8"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
