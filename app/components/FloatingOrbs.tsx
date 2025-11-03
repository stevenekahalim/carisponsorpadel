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
    // Generate 20 small raindrop orbs with random properties
    const generatedOrbs = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 12, // Random delay (0-12s)
      duration: 5 + Math.random() * 3, // Random duration (5-8s)
      size: 8 + Math.random() * 8, // Random size (8-16px) - tiny raindrops
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
            background: `linear-gradient(135deg, rgba(16, 185, 129, 0.8) 0%, rgba(52, 211, 153, 0.6) 100%)`,
            filter: 'blur(1px)',
            boxShadow: '0 1px 3px rgba(16, 185, 129, 0.4)',
          }}
        />
      ))}
    </div>
  );
}
