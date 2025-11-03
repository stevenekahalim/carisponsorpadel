'use client';

import { useEffect, useState } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Find the "Ready to get started?" section
      const ctaSection = Array.from(document.querySelectorAll('h2')).find(
        h => h.textContent?.includes('Ready to get started')
      )?.closest('section');

      if (!ctaSection) return;

      const ctaRect = ctaSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hide sticky bar when CTA section is visible in viewport
      if (ctaRect.top < windowHeight && ctaRect.bottom > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 py-2 md:py-4 px-2 md:px-4">
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-2 md:gap-4">
        <a
          href="/for-venues"
          className="bg-primary text-gray-900 px-3 md:px-6 py-2 md:py-4 rounded-lg font-bold text-xs md:text-base hover:bg-green-400 transition-all duration-200 flex flex-col items-center justify-center shadow-md"
        >
          <div className="text-[10px] md:text-xs font-normal mb-0.5 md:mb-1">Venue/Event</div>
          <div className="flex items-center gap-1 md:gap-2 text-center leading-tight">
            <span className="hidden md:inline">Find Sponsors →</span>
            <span className="md:hidden">Find Sponsors</span>
          </div>
        </a>
        <a
          href="/for-brands"
          className="bg-primary text-gray-900 px-3 md:px-6 py-2 md:py-4 rounded-lg font-bold text-xs md:text-base hover:bg-green-400 transition-all duration-200 flex flex-col items-center justify-center shadow-md"
        >
          <div className="text-[10px] md:text-xs font-normal mb-0.5 md:mb-1">Brand</div>
          <div className="flex items-center gap-1 md:gap-2 text-center leading-tight">
            <span className="hidden md:inline">See Opportunities →</span>
            <span className="md:hidden">See Opportunities</span>
          </div>
        </a>
      </div>
    </div>
  );
}
