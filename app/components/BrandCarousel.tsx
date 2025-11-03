'use client';

import { useEffect, useRef, useState } from 'react';

const brands = [
  'sportx.svg',
  'nusacoffee.svg',
  'techhub.svg',
  'baliproperties.svg',
  'fitpro.svg',
  'velocitylab.svg',
  'urbanwear.svg',
  'aquapure.svg',
  'zenhealth.svg',
  'pulseenergy.svg',
  'innovatech.svg',
  'naturalbrew.svg',
  'globaltravel.svg',
  'peakperformance.svg',
  'elitebank.svg',
  'vitagreen.svg',
  'luxuryestate.svg',
  'metroride.svg',
  'craftfoods.svg',
  'quantumdata.svg',
  'silvergym.svg',
  'ecogreen.svg',
];

export default function BrandCarousel() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden bg-white py-12">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling container */}
      <div
        className="flex gap-12 md:gap-16"
        style={{
          animation: isPaused ? 'none' : 'scroll 40s linear infinite',
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand}-${index}`}
            className="flex-shrink-0 transition-all duration-300 hover:scale-105 hover:drop-shadow-md"
          >
            <img
              src={`/images/brands/${brand}`}
              alt={`Brand ${index + 1}`}
              className="h-10 w-auto object-contain"
              style={{ minWidth: '120px', maxWidth: '140px' }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-140px * ${brands.length} - 48px * ${brands.length}));
          }
        }
      `}</style>
    </div>
  );
}
