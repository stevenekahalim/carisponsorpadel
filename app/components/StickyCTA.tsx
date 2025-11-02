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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 py-4 px-4">
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="/for-venues"
          className="bg-primary text-gray-900 px-6 py-4 rounded-lg font-bold text-base hover:bg-green-400 transition shadow-md flex flex-col items-center justify-center"
        >
          <div className="text-xs font-normal mb-1">I Have a Venue/Event</div>
          <div className="flex items-center gap-2">
            Find Me Sponsors →
          </div>
        </a>
        <a
          href="/opportunities"
          className="bg-gray-900 text-white px-6 py-4 rounded-lg font-bold text-base hover:bg-gray-800 transition shadow-md flex flex-col items-center justify-center"
        >
          <div className="text-xs font-normal mb-1">I'm a Brand</div>
          <div className="flex items-center gap-2">
            Show Me Opportunities →
          </div>
        </a>
      </div>
    </div>
  );
}
