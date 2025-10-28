import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, RoundedBox, MeshDistortMaterial } from '@react-three/drei';

const Logo3D = () => {
  return (
    <group>
      {/* Center Glowing Core */}
      <mesh>
        <sphereGeometry args={[1.2, 64, 64]} />
        <MeshDistortMaterial
          color="#00E5FF"
          attach="material"
          distort={0.5}
          speed={3}
          roughness={0}
          metalness={1}
          emissive="#00E5FF"
          emissiveIntensity={1}
        />
      </mesh>
      
      {/* Inner Ring */}
      <group rotation={[0, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.15, 32, 100]} />
          <meshStandardMaterial
            color="#3B82F6"
            emissive="#3B82F6"
            emissiveIntensity={0.8}
            metalness={1}
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
      
      {/* Middle Ring */}
      <group rotation={[0, Math.PI / 3, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.12, 32, 100]} />
          <meshStandardMaterial
            color="#FF4E88"
            emissive="#FF4E88"
            emissiveIntensity={0.7}
            metalness={1}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
      
      {/* Outer Ring */}
      <group rotation={[0, -Math.PI / 4, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3, 0.1, 32, 100]} />
          <meshStandardMaterial
            color="#00E5FF"
            emissive="#00E5FF"
            emissiveIntensity={0.6}
            metalness={1}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>
      
      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 4 + Math.random();
        const x = Math.cos(angle) * radius;
        const y = (Math.random() - 0.5) * 4;
        const z = Math.sin(angle) * radius;
        
        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#00E5FF" : "#FF4E88"}
              emissive={i % 2 === 0 ? "#00E5FF" : "#FF4E88"}
              emissiveIntensity={1}
              metalness={1}
              roughness={0}
            />
          </mesh>
        );
      })}
    </group>
  );
};

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onLoadingComplete, 800);
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
        >
          {/* 3D Logo Scene */}
          <div className="w-full h-2/3 relative">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <color attach="background" args={['#0A0F1C']} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00E5FF" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF4E88" />
              
              <Logo3D />
              
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={2}
              />
            </Canvas>
            
            {/* Glow overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="w-96 h-96 bg-primary/30 rounded-full blur-[100px]"
              />
            </div>
          </div>

          {/* Brand and Progress */}
          <div className="w-full max-w-md px-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold gradient-text mb-3 tracking-wider">NEXLANCE</h1>
              <p className="text-lg text-muted-foreground subhead">Building the Future of Freelance Work</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3"
            >
              <div className="relative h-2 bg-border/30 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-secondary"
                  style={{
                    width: `${progress}%`,
                    boxShadow: '0 0 20px hsl(187 100% 50% / 0.6)',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Loading Experience</span>
                <span className="numeric text-primary font-bold">{Math.round(progress)}%</span>
              </div>
            </motion.div>

            {/* Loading Text Animation */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="flex justify-center gap-2"
            >
              {['Initializing', 'AI', 'Systems'].map((text, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-sm text-muted-foreground"
                >
                  {text}
                  {i < 2 && '•'}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
