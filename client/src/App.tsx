import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Sparkles } from "@react-three/drei";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} shadows>
      <color attach="background" args={["#08111d"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2} color="#9ee7ff" />
      <pointLight position={[-3, -2, 3]} intensity={1.4} color="#ff9f7a" />
      <Float speed={1.4} rotationIntensity={1.2} floatIntensity={1.8}>
        <mesh castShadow receiveShadow rotation={[0.4, 0.8, 0.1]}>
          <torusKnotGeometry args={[1, 0.35, 180, 24]} />
          <meshStandardMaterial color="#b8f3ff" metalness={0.45} roughness={0.2} />
        </mesh>
      </Float>
      <Sparkles count={55} scale={7} size={2.2} speed={0.35} color="#ffffff" />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </motion.div>
  );
}

export default function App() {
  return (
    <main className="app-shell">
      <div className="backdrop backdrop-a" />
      <div className="backdrop backdrop-b" />
      <section className="hero-card">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            React, TypeScript, Node.js, MongoDB
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            A modern 3D portfolio scaffold with motion-first design.
          </motion.h1>
          <motion.p
            className="lede"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            This starter is wired for a polished portfolio experience: a React client, an Express API, MongoDB connection
            plumbing, Framer Motion transitions, and a React Three Fiber scene for immersive visuals.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            <a className="primary-btn" href="#work">
              Explore work
            </a>
            <a className="secondary-btn" href="#contact">
              Contact
            </a>
          </motion.div>

          <div className="stat-grid">
            <StatCard label="Motion system" value="Framer Motion" />
            <StatCard label="3D layer" value="React Three Fiber" />
            <StatCard label="API backend" value="Node + MongoDB" />
          </div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="visual-frame">
            <Scene />
          </div>
          <div className="visual-caption">Interactive 3D intro space</div>
        </motion.div>
      </section>

      <section className="content-grid" id="work">
        <article className="info-card">
          <span className="card-label">Direction</span>
          <h2>Bold typography, ambient gradients, and cinematic motion.</h2>
          <p>
            The layout is intentionally minimal so you can replace the starter content with your own projects, case
            studies, and contact details.
          </p>
        </article>
        <article className="info-card" id="contact">
          <span className="card-label">Next step</span>
          <h2>Add sections for projects, about, and contact.</h2>
          <p>
            The client and server folders are ready for the next iteration once dependencies are installed and the
            environment variables are configured.
          </p>
        </article>
      </section>
    </main>
  );
}
