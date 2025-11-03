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
    // Generate 8 orbs with random properties
    const generatedOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 8, // Random delay (0-8s)
      duration: 8 + Math.random() * 4, // Random duration (8-12s)
      size: 60 + Math.random() * 80, // Random size (60-140px)
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
            background: `radial-gradient(circle, rgba(0, 230, 122, 0.4) 0%, rgba(0, 230, 122, 0.1) 50%, transparent 100%)`,
            filter: 'blur(20px)',
          }}
        />
      ))}
    </div>
  );
}
