'use client';
import dynamic from 'next/dynamic';
const VideoSection = dynamic(() => import('./VideoSection'), { ssr: false });
export default function ClientVideoSection() {
  return <VideoSection />;
}
