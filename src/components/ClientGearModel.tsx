'use client';
import dynamic from 'next/dynamic';
const GearModel = dynamic(() => import('./GearModel'), { ssr: false });
export default function ClientGearModel() {
  return <GearModel />;
}
