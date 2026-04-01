'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import { TextureLoader, Group } from 'three';
import { Suspense } from 'react';

function PhotoOrbit() {
  const groupRef = useRef<Group>(null);
  const textureLoader = useMemo(() => new TextureLoader(), []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008;
      groupRef.current.rotation.x += 0.0002;
    }
  });

  const photos = [
    '/photo01.jpg',
    '/photo02.jpg',
    '/photo03.jpg',
    '/photo04.jpg',
    '/photo05.jpg',
  ];

  const textures = useMemo(
    () =>
      photos.map((photo) => {
        try {
          return textureLoader.load(photo);
        } catch {
          return null;
        }
      }),
    [textureLoader]
  );

  return (
    <group ref={groupRef}>
      {photos.map((photo, idx) => {
        const angle = (idx / photos.length) * Math.PI * 2;
        const x = Math.cos(angle) * 8;
        const z = Math.sin(angle) * 8 + 2;
        const rotY = angle + Math.PI / 2;

        return (
          <mesh key={idx} position={[x, Math.sin(idx) * 1.5, z]} rotation={[0, rotY, 0]} scale={[3, 4, 0.1]}>
            <planeGeometry args={[1, 1.33]} />
            {textures[idx] && (
              <meshStandardMaterial map={textures[idx]} transparent opacity={0.7} />
            )}
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero3DCarousel() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <PhotoOrbit />
        </Canvas>
      </Suspense>
    </div>
  );
}
