'use client';
import dynamic from 'next/dynamic';
const FloatingPhotos3D = dynamic(() => import('./FloatingPhotos3D'), { ssr: false });
export default function ClientFloatingPhotos() {
  return <FloatingPhotos3D />;
}
