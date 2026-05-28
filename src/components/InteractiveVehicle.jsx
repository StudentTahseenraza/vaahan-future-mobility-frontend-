// src/components/InteractiveVehicle.jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
// import * as THREE from 'three';

const InteractiveVehicle = () => {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
    }
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Futuristic Vehicle Body */}
      <mesh ref={meshRef} position={[0, 0, 0]} castShadow receiveShadow>
        <torusKnotGeometry args={[1.2, 0.3, 128, 16, 3, 4]} />
        <MeshDistortMaterial
          color="#00E5FF"
          emissive="#4F46E5"
          emissiveIntensity={0.5}
          metalness={0.9}
          roughness={0.2}
          distort={0.3}
          speed={2}
        />
      </mesh>

      {/* Orbiting Particles */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 1.8, Math.sin(angle * 2) * 0.5, Math.sin(angle) * 1.8]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial color="#00FFAA" emissive="#00FFAA" emissiveIntensity={0.8} />
          </mesh>
        );
      })}

      {/* Data rings */}
      {[...Array(3)].map((_, i) => (
        <mesh key={i} rotation-x={Math.PI / 2} position-y={-0.5 + i * 0.5}>
          <torusGeometry args={[1.5 + i * 0.2, 0.02, 64, 200]} />
          <meshStandardMaterial color={i === 0 ? '#00E5FF' : i === 1 ? '#4F46E5' : '#00FFAA'} emissive={i === 0 ? '#00E5FF' : '#4F46E5'} emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
};

export default InteractiveVehicle;