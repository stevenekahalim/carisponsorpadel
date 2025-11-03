'use client';

import { useEffect, useState } from 'react';

interface Orb {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    // Generate 15 small droplet orbs with random properties
    const generatedOrbs = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 10, // Random delay (0-10s)
      duration: 6 + Math.random() * 3, // Random duration (6-9s)
      size: 15 + Math.random() * 20, // Random size (15-35px) - small droplets
    }));
    setOrbs(generatedOrbs);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute bottom-0 rounded-full animate-float-up"
          style={{
            left: `${orb.left}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
            background: `radial-gradient(circle, rgba(16, 185, 129, 0.7) 0%, rgba(52, 211, 153, 0.4) 40%, rgba(16, 185, 129, 0.1) 70%, transparent 100%)`,
            filter: 'blur(8px)',
            boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
          }}
        />
      ))}
    </div>
  );
}
