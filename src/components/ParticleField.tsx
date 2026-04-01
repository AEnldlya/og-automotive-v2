'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

const Particles = ({ particleCount = 300 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<Particle[]>([]);
  const { viewport, camera } = useThree();

  const { positions, geometry } = useMemo(() => {
    const particles: Particle[] = [];
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * viewport.width * 1.5;
      const y = (Math.random() - 0.5) * viewport.height * 1.5;
      const z = (Math.random() - 0.5) * 5;

      particles.push({
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.01,
        originalX: x,
        originalY: y,
        originalZ: z,
      });

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    particlesRef.current = particles;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return { positions, geometry };
  }, [particleCount, viewport]);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * viewport.width;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * viewport.height;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [viewport]);

  useFrame(() => {
    if (!pointsRef.current || !pointsRef.current.geometry) return;

    const positions = (pointsRef.current.geometry as THREE.BufferGeometry).attributes
      .position as THREE.BufferAttribute;

    let mouseX = 0;
    let mouseY = 0;

    // Get mouse position from document
    if (typeof window !== 'undefined') {
      const rect = window.innerWidth / 2;
      mouseX = rect - (document.documentElement.scrollLeft || 0);
      mouseY = window.innerHeight / 2 - (document.documentElement.scrollTop || 0);
    }

    particlesRef.current?.forEach((particle, i) => {
      // Drift slowly
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;

      // Bounce back if too far from origin
      const dist = Math.hypot(
        particle.x - particle.originalX,
        particle.y - particle.originalY
      );
      if (dist > 3) {
        particle.vx *= -0.5;
        particle.vy *= -0.5;
      }

      positions.array[i * 3] = particle.x;
      positions.array[i * 3 + 1] = particle.y;
      positions.array[i * 3 + 2] = particle.z;
    });

    positions.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry" {...geometry} />
      <pointsMaterial
        size={2}
        color="#c62828"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
};

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas dpr={[1, 1.5]} performance={{ min: 0.5 }} camera={{ position: [0, 0, 10], fov: 75 }}>
        <Particles particleCount={300} />
      </Canvas>
    </div>
  );
}
