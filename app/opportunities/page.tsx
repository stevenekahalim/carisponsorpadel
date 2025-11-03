"use client";

import { useState, useEffect } from "react";
import { getBrandWhatsAppLink } from '../utils/whatsapp';

// Type for opportunity cards
type OpportunityCard = {
  id: string;
  type: "venue" | "tournament" | "community";
  title: string;
  description: string;
  city: string;
  province: string;
  courts: number | null;
  reach: number;
  frequency: string;
  imageUrl: string;
  status: "Available" | "Partially Sponsored" | "Fully Sponsored";
};

export default function Opportunities() {
  const [cards, setCards] = useState<OpportunityCard[]>([]);
  const [filteredCards, setFilteredCards] = useState<OpportunityCard[]>([]);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProvince, setSelectedProvince] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  // Fetch cards from API
  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch("/api/cards");
        if (response.ok) {
          const data = await response.json();
          setCards(data);
          setFilteredCards(data);
        } else {
          console.error("Failed to fetch cards");
          // Use placeholder data as fallback
          const placeholderCards: OpportunityCard[] = [
            {
              id: "card-001",
              type: "venue",
              title: "Premium 6-Court Venue - Surabaya",
              description: "Modern padel facility with 150+ active members, seeking equipment and F&B sponsors. Prime location in East Surabaya.",
              city: "Surabaya",
              province: "Jawa Timur",
              courts: 6,
              reach: 5000,
              frequency: "Daily",
              imageUrl: "",
              status: "Available",
            },
          ];
          setCards(placeholderCards);
          setFilteredCards(placeholderCards);
        }
      } catch (error) {
        console.error("Error fetching cards:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCards();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = cards;

    if (selectedType !== "all") {
      filtered = filtered.filter((card) => card.type === selectedType);
    }

    if (selectedProvince !== "all") {
      filtered = filtered.filter((card) => card.province === selectedProvince);
    }

    setFilteredCards(filtered);
  }, [selectedType, selectedProvince, cards]);

  // Get unique provinces
  const provinces = Array.from(new Set(cards.map((card) => card.province)));

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center gap-2">
            <a href="/" className="text-base md:text-xl lg:text-2xl font-bold text-gray-900 flex-shrink-0">
              CariSponsor<span className="text-primary">Padel</span>
            </a>
            <div className="flex gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base flex-shrink-0">
              <a href="/for-venues" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Venues
              </a>
              <a href="/for-brands" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Brands
              </a>
              <a href="/opportunities" className="text-primary font-semibold whitespace-nowrap">
                Opps
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Sponsorship <span className="text-primary">Opportunities</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Browse curated padel sponsorship opportunities across Indonesia
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg p-4 md:p-6 mb-6 md:mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Types</option>
                <option value="venue">Venues</option>
                <option value="tournament">Tournaments</option>
                <option value="community">Communities</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Location</label>
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              >
                <option value="all">All Locations</option>
                {provinces.map((province) => (
                  <option key={province} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                Showing <strong>{filteredCards.length}</strong> of <strong>{cards.length}</strong> opportunities
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading opportunities...</p>
          </div>
        ) : filteredCards.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg">
            <p className="text-gray-600 mb-4">No opportunities match your filters</p>
            <button
              onClick={() => {
                setSelectedType("all");
                setSelectedProvince("all");
              }}
              className="text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <div key={card.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                {/* Card Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary to-green-600 flex items-center justify-center">
                  <span className="text-6xl">
                    {card.type === "venue" && "🎾"}
                    {card.type === "tournament" && "🏆"}
                    {card.type === "community" && "👥"}
                  </span>
                </div>

                <div className="p-6">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full capitalize">
                      {card.type}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        card.status === "Available"
                          ? "text-green-600"
                          : card.status === "Partially Sponsored"
                          ? "text-yellow-600"
                          : "text-gray-400"
                      }`}
                    >
                      {card.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{card.description}</p>

                  {/* Stats */}
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📍</span>
                      <span>
                        {card.city}, {card.province}
                      </span>
                    </div>
                    {card.courts && (
                      <div className="flex items-center text-gray-600">
                        <span className="mr-2">🎾</span>
                        <span>{card.courts} courts</span>
                      </div>
                    )}
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">👥</span>
                      <span>{card.reach.toLocaleString()} reach</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="mr-2">📅</span>
                      <span>{card.frequency}</span>
                    </div>
                  </div>

                  {/* CTA Button - WhatsApp Link */}
                  {card.status === "Fully Sponsored" ? (
                    <button
                      disabled
                      className="w-full bg-gray-200 text-gray-400 px-4 py-3 rounded-lg font-semibold cursor-not-allowed"
                    >
                      Fully Sponsored
                    </button>
                  ) : (
                    <a
                      href={getBrandWhatsAppLink(card.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-primary text-white px-4 py-3 rounded-lg font-semibold shadow-green hover:shadow-green-lg hover:-translate-y-0.5 transition-all duration-200 text-center"
                    >
                      Request Info
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 CariSponsorPadel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
