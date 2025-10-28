import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox, MeshTransmissionMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const FloatingCard3D = ({ position, delay }: { position: [number, number, number]; delay: number }) => {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5} floatingRange={[-0.5, 0.5]}>
      <RoundedBox args={[1.2, 1.6, 0.15]} radius={0.05} position={position}>
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </RoundedBox>
    </Float>
  );
};

const GlassOrb = ({ position }: { position: [number, number, number] }) => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh position={position}>
        <sphereGeometry args={[0.8, 64, 64]} />
        <meshPhysicalMaterial
          color="#00E5FF"
          transmission={0.95}
          opacity={0.3}
          metalness={0.1}
          roughness={0}
          ior={1.5}
          thickness={0.5}
          transparent
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>
    </Float>
  );
};

const Ring3D = ({ radius, delay }: { radius: number; delay: number }) => {
  const ringRef = useRef<THREE.Mesh>(null);
  
  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <torusGeometry args={[radius, 0.05, 32, 100]} />
      <meshStandardMaterial
        color="#3B82F6"
        emissive="#3B82F6"
        emissiveIntensity={0.3}
        metalness={1}
        roughness={0.2}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

export const Professional3DScene = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <color attach="background" args={['#0A0F1C']} />
        
        {/* Enhanced Lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00E5FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#FF4E88" />
        <pointLight position={[0, -10, 5]} intensity={0.5} color="#3B82F6" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#00E5FF"
        />
        
        {/* Central Glass Orb */}
        <GlassOrb position={[0, 0, 0]} />
        
        {/* Rotating Rings */}
        <group rotation={[0, 0, 0]}>
          <Ring3D radius={3} delay={0} />
        </group>
        <group rotation={[0, Math.PI / 4, 0]}>
          <Ring3D radius={3.5} delay={0.5} />
        </group>
        <group rotation={[0, -Math.PI / 4, 0]}>
          <Ring3D radius={4} delay={1} />
        </group>
        
        {/* Professional Floating Cards */}
        <FloatingCard3D position={[-4, 2, -3]} delay={0} />
        <FloatingCard3D position={[4, -1.5, -3]} delay={0.3} />
        <FloatingCard3D position={[3, 2.5, -4]} delay={0.6} />
        <FloatingCard3D position={[-3, -2, -4]} delay={0.9} />
        <FloatingCard3D position={[0, 3.5, -5]} delay={1.2} />
        <FloatingCard3D position={[-4.5, 0, -2]} delay={1.5} />
        
        {/* Subtle Auto-Rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
      
      {/* Professional Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none" />
    </div>
  );
};
