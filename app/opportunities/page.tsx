"use client";

import { useState, useEffect } from "react";

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

// Modal component for inquiry
function InquiryModal({ card, onClose }: { card: OpportunityCard; onClose: () => void }) {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    whatsapp: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/submit-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          interestedIn: card.id,
          budget: "",
          industry: "",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          window.location.href = "/thank-you-brand";
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 md:p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-start mb-4 md:mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">Request Information</h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">About: {card.title}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl flex-shrink-0">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
              <input
                type="text"
                required
                value={formData.contactPerson}
                onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">WhatsApp *</label>
              <input
                type="tel"
                required
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="+6281234567890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                placeholder="email@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="Tell us about your interest in this sponsorship opportunity..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 disabled:bg-gray-300"
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </div>

          {submitStatus === "success" && (
            <p className="text-green-600 font-medium text-center">
              ✓ Inquiry submitted! Redirecting...
            </p>
          )}

          {submitStatus === "error" && (
            <p className="text-red-600 font-medium text-center">
              ✗ Error submitting inquiry. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default function Opportunities() {
  const [cards, setCards] = useState<OpportunityCard[]>([]);
  const [filteredCards, setFilteredCards] = useState<OpportunityCard[]>([]);
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedProvince, setSelectedProvince] = useState<string>("all");
  const [selectedCard, setSelectedCard] = useState<OpportunityCard | null>(null);
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

                  {/* CTA Button */}
                  <button
                    onClick={() => setSelectedCard(card)}
                    disabled={card.status === "Fully Sponsored"}
                    className="w-full bg-primary text-gray-900 px-4 py-3 rounded-lg font-semibold hover:bg-green-400 transition disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    {card.status === "Fully Sponsored" ? "Fully Sponsored" : "Request Info"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Inquiry Modal */}
      {selectedCard && <InquiryModal card={selectedCard} onClose={() => setSelectedCard(null)} />}

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 CariSponsorPadel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
