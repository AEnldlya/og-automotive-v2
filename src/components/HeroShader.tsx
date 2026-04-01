'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const ShaderMaterial = () => {
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

    // Simplex noise function
    vec3 permute(vec3 x) {
      return mod(x * 34. + 1., 289.);
    }

    float snoise(vec2 v) {
      const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
      vec2 i = floor(v + dot(v, C.yy));
      vec2 x0 = v - i + dot(i, C.xx);
      vec2 x1;
      x1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i;
      i = mod(i, 289.0);
      vec3 p = permute(permute(i.y + vec3(0.0, x1.y, 1.0)) + i.x + vec3(0.0, x1.x, 1.0));
      vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
      m = m * m;
      m = m * m;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 sx = sign(x) - sign(ox);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
      vec3 g;
      g.x = a0.x * x0.x + h.x * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    void main() {
      vec2 uv = vUv;

      // Distance from mouse
      vec2 mouseEffect = (uMouse - uv) * 0.3;

      // Animated noise
      float noise1 = snoise(uv * 3.0 + uTime * 0.3);
      float noise2 = snoise(uv * 1.5 + uTime * 0.2 + mouseEffect);
      float noise = mix(noise1, noise2, 0.5);

      // Colors: amber, rust, black
      vec3 amber = vec3(0.878, 0.482, 0.165); // #e07b2a
      vec3 rust = vec3(0.608, 0.227, 0.102); // #9b3a1a
      vec3 black = vec3(0.0, 0.0, 0.0);

      // Create gradient based on position and noise
      float t = uv.y + noise * 0.3;
      vec3 color = mix(rust, amber, smoothstep(-0.5, 0.5, t));
      color = mix(black, color, smoothstep(-1.0, 1.0, t + noise * 0.2));

      // Add subtle mouse interaction
      float mouseDist = length(uMouse - uv);
      color += amber * (0.2 - mouseDist) * 0.3;

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  useEffect(() => {
    let mouseX = 0.5;
    let mouseY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth;
      mouseY = 1.0 - e.clientY / window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (meshRef.current && 'material' in meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      material.uniforms.uMouse.value.x = (state.mouse.x + 1) * 0.5;
      material.uniforms.uMouse.value.y = (state.mouse.y + 1) * 0.5;
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
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ShaderMaterial />
      </Canvas>
    </div>
  );
}
