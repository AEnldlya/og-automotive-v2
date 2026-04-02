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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const submitRef = useRef<HTMLButtonElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to send request');
      }

      // Show success state
      if (submitRef.current) {
        submitRef.current.textContent = 'Request Sent ✓';
        submitRef.current.style.backgroundColor = '#10b981';
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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      if (submitRef.current) {
        submitRef.current.textContent = 'Error - Try Again';
        submitRef.current.style.backgroundColor = '#ef4444';
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
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
              className="w-full px-4 py-3 bg-[#0a0f1a] border border-[rgba(255,255,255,0.08)] text-[#f1f5f9] focus:border-[#c41e3a] focus:outline-none transition-all"
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
              className="w-full px-4 py-3 bg-[#0a0f1a] border border-[rgba(255,255,255,0.08)] text-[#f1f5f9] focus:border-[#c41e3a] focus:outline-none transition-all"
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
            className="w-full px-4 py-3 bg-[#0a0f1a] border border-[rgba(255,255,255,0.08)] text-[#f1f5f9] focus:border-[#c41e3a] focus:outline-none transition-all"
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
            className="w-full px-4 py-3 bg-[#0a0f1a] border border-[rgba(255,255,255,0.08)] text-[#f1f5f9] placeholder-[#8b9db8] focus:border-[#c41e3a] focus:outline-none transition-all"
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
            className="w-full px-4 py-3 bg-[#0a0f1a] border border-[rgba(255,255,255,0.08)] text-[#f1f5f9] focus:border-[#c41e3a] focus:outline-none transition-all appearance-none cursor-pointer"
          >
            {services.map((service) => (
              <option key={service} value={service} className="bg-[#0a0f1a] text-[#f1f5f9]">
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
            className="w-full px-4 py-3 bg-[#0a0f1a] border border-[rgba(255,255,255,0.08)] text-[#f1f5f9] focus:border-[#c41e3a] focus:outline-none transition-all resize-none"
          />
        </div>

        {/* Error message */}
        {error && (
          <div className="px-4 py-3 bg-red-900/20 border border-red-600 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Submit button */}
        <button
          ref={submitRef}
          type="submit"
          disabled={submitted || loading}
          className="w-full btn-primary mt-8"
        >
          {loading ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </div>
  );
}
