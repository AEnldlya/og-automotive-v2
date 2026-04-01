'use client';

import dynamic from 'next/dynamic';

export const VideoSectionClient = dynamic(() => import('@/components/VideoSection'), { ssr: false });
export const FloatingPhotos3DClient = dynamic(() => import('@/components/FloatingPhotos3D'), { ssr: false });
export const ParticleFieldClient = dynamic(() => import('@/components/ParticleField'), { ssr: false });
export const GearModelClient = dynamic(() => import('@/components/GearModel'), { ssr: false });
export const TextScrambleClient = dynamic(() => import('@/components/TextScramble'), { ssr: false });
