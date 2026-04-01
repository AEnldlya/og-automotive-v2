'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Gear = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusGeometry args={[1.5, 0.6, 16, 24]} />
      <meshStandardMaterial
        color="#c62828"
        metalness={0.8}
        roughness={0.2}
        emissive="#1565c0"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

export default function GearModel() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }} camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#c62828" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#ffffff" />
        <Gear />
      </Canvas>
    </div>
  );
}
