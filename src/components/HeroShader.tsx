'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ShaderPlane = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
    }

    void main() {
      vec2 uv = vUv;
      float n = noise(uv * 3.0 + uTime * 0.2);
      vec3 red = vec3(0.776, 0.157, 0.157);
      vec3 blue = vec3(0.082, 0.396, 0.753);
      vec3 dark = vec3(0.02, 0.02, 0.04);
      float t = uv.y + n * 0.3;
      vec3 color = mix(blue, red, smoothstep(-0.3, 0.7, t));
      color = mix(dark, color, smoothstep(-0.8, 0.8, t + n * 0.15));
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[viewport.width, viewport.height]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        }}
      />
    </mesh>
  );
};

export default function HeroShader() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // On mobile: pure CSS gradient (no WebGL = no lag)
  if (isMobile) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a1a 0%, #1565c0 40%, #c62828 70%, #0a0a1a 100%)',
          opacity: 0.4,
        }}
      />
    );
  }

  return (
    <div className="absolute inset-0">
      <Canvas dpr={1} camera={{ position: [0, 0, 1] }}>
        <ShaderPlane />
      </Canvas>
    </div>
  );
}
