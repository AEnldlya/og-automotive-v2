'use client';
import dynamic from 'next/dynamic';
const ParticleField = dynamic(() => import('./ParticleField'), { ssr: false });
export default function ClientParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <ParticleField />
    </div>
  );
}
