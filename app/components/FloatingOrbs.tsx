'use client';

import { useEffect, useState } from 'react';

interface Orb {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
}

export default function FloatingOrbs() {
  const [orbs, setOrbs] = useState<Orb[]>([]);

  useEffect(() => {
    // Generate 30 smooth fresh orbs with random properties
    const generatedOrbs = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      delay: Math.random() * 15, // Random delay (0-15s)
      duration: 6 + Math.random() * 4, // Random duration (6-10s)
      size: 5 + Math.random() * 6, // Random size (5-11px) - slightly fatter droplets
      drift: (Math.random() - 0.5) * 30, // Random horizontal drift (-15px to +15px)
    }));
    setOrbs(generatedOrbs);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute bottom-0 rounded-full animate-float-up-drift"
          style={{
            left: `${orb.left}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            animationDelay: `${orb.delay}s`,
            animationDuration: `${orb.duration}s`,
            '--drift': `${orb.drift}px`,
            background: `linear-gradient(135deg, rgba(34, 197, 94, 0.85) 0%, rgba(74, 222, 128, 0.7) 100%)`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 6px rgba(34, 197, 94, 0.5), 0 0 12px rgba(74, 222, 128, 0.25)',
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
