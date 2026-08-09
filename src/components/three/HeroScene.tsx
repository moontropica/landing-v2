import * as React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

function Planet({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = React.useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.08;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial
        color={color}
        roughness={0.55}
        metalness={0.25}
        emissive={color}
        emissiveIntensity={0.18}
        flatShading
      />
    </mesh>
  );
}

function Ring() {
  const ref = React.useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.z += dt * 0.12;
      ref.current.rotation.x = Math.PI / 2.4;
    }
  });
  return (
    <mesh ref={ref} position={[2.2, -0.4, 0]}>
      <torusGeometry args={[1.6, 0.04, 16, 200]} />
      <meshBasicMaterial color="#f5c460" transparent opacity={0.55} />
    </mesh>
  );
}

export default function HeroScene() {
  const reduce = useReducedMotion();
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0.4, 6], fov: 42 }}
      frameloop={reduce ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 6, 4]} intensity={1.1} color="#ffe7c2" />
      <directionalLight position={[-6, -2, -3]} intensity={0.6} color="#b06ee2" />
      <Stars radius={60} depth={40} count={1800} factor={3} fade speed={0.4} />
      <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.9}>
        <Planet position={[-1.6, 0.2, 0]} color="#9a4fd4" scale={1.35} />
      </Float>
      <Float speed={0.7} rotationIntensity={0.6} floatIntensity={1.4}>
        <Planet position={[2.2, -0.4, 0]} color="#f5c460" scale={0.55} />
      </Float>
      <Ring />
    </Canvas>
  );
}
