'use client';

import { useState, useEffect } from 'react';

const opportunities = [
  { title: "Premium 6-Court Venue", location: "Surabaya, East Java", courts: 6, players: "500+", reach: "2000+", image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=400&h=300&fit=crop" },
  { title: "Elite Sports Complex", location: "Jakarta Selatan", courts: 8, players: "800+", reach: "5000+", image: "https://images.unsplash.com/photo-1595435742656-5272d0f6c8c1?w=400&h=300&fit=crop" },
  { title: "Coastal Padel Club", location: "Bali, Canggu", courts: 4, players: "300+", reach: "3000+", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop" },
  { title: "Championship Tournament", location: "Bandung", courts: 10, players: "1000+", reach: "10000+", image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&h=300&fit=crop" },
  { title: "Community Padel Center", location: "Yogyakarta", courts: 3, players: "200+", reach: "1500+", image: "https://images.unsplash.com/photo-1576678927484-cc907957ee7a?w=400&h=300&fit=crop" },
  { title: "Executive Sports Hub", location: "Jakarta Pusat", courts: 5, players: "600+", reach: "4000+", image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=300&fit=crop" },
  { title: "Urban Training Ground", location: "Surabaya", courts: 4, players: "450+", reach: "2500+", image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&h=300&fit=crop" },
  { title: "Beachside Padel Resort", location: "Bali, Seminyak", courts: 6, players: "700+", reach: "6000+", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop" },
];

export default function OpportunitiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Calculate number of slides based on screen size
  const getCardsPerSlide = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 768) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerSlide(getCardsPerSlide());
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(opportunities.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-rotate
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered, cardsPerSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  const getCurrentCards = () => {
    const startIndex = currentIndex * cardsPerSlide;
    return opportunities.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <div
      className="relative px-4 md:px-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Arrow Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:bg-primary/10 hidden md:flex"
        aria-label="Previous"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center hover:bg-primary/10 hidden md:flex"
        aria-label="Next"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="grid gap-6 transition-all duration-500 ease-in-out"
          style={{
            gridTemplateColumns: `repeat(${cardsPerSlide}, 1fr)`,
          }}
        >
          {getCurrentCards().map((venue, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-border-gray shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <img src={venue.image} alt={venue.title} className="h-40 w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Venue</span>
                  <span className="text-sm font-medium text-green-600">Available</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{venue.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{venue.location}</p>
                <div className="space-y-1 text-sm text-gray-600 mb-4">
                  <div>• {venue.courts} courts</div>
                  <div>• {venue.players} monthly players</div>
                  <div>• {venue.reach} social reach</div>
                </div>
                <a
                  href="/opportunities"
                  className="block w-full bg-gradient-primary text-white text-center py-2 rounded-lg font-semibold shadow-green hover:shadow-green-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Request Info
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-primary'
                : 'w-2 bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
