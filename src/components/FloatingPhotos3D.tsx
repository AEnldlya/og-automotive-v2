'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useState } from 'react';

interface FloatingPhotoProps {
  position: [number, number, number];
  rotation: [number, number, number];
  url: string;
  index: number;
}

const FloatingPhoto = ({ position, rotation, url, index }: FloatingPhotoProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow rotation
    meshRef.current.rotation.x += 0.0005;
    meshRef.current.rotation.y += 0.001;

    // Bobbing motion
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.5;

    // Hover effect - bring forward
    if (hoveredIndex === index) {
      meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      meshRef.current.position.z = position[2] + 2;
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      meshRef.current.position.z = position[2];
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      onPointerEnter={() => setHoveredIndex(index)}
      onPointerLeave={() => setHoveredIndex(null)}
    >
      <planeGeometry args={[2, 2.5]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load(url)} />
    </mesh>
  );
};

interface Scene3DProps {
  photos: string[];
}

const Scene3D = ({ photos }: Scene3DProps) => {
  const positions: [number, number, number][] = [
    [-3, 0, -5],
    [-1.5, 1, -3],
    [0, -0.5, 0],
    [1.5, 1.2, -3],
    [3, 0, -5],
  ];

  const rotations: [number, number, number][] = [
    [-0.2, 0.4, -0.1],
    [-0.1, -0.3, 0.15],
    [0, 0, 0],
    [0.1, 0.3, -0.15],
    [0.2, -0.4, 0.1],
  ];

  return (
    <>
      {photos.map((photo, index) => (
        <FloatingPhoto
          key={index}
          position={positions[index]}
          rotation={rotations[index]}
          url={photo}
          index={index}
        />
      ))}
    </>
  );
};

export default function FloatingPhotos3D() {
  const photos = [
    '/workshop01.jpg',
    '/workshop03.jpg',
    '/workshop05.jpg',
    '/workshop06.jpg',
    '/workshop08.jpg',
  ];

  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden">
      <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }} camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <Scene3D photos={photos} />
      </Canvas>
    </div>
  );
}
