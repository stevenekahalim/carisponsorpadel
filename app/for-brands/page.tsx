"use client";

import { useState } from "react";

export default function ForBrands() {
  const [formData, setFormData] = useState({
    company: "",
    contactPerson: "",
    whatsapp: "",
    email: "",
    industry: "",
    budget: "",
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
          interestedIn: "General",
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
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Cari<span className="text-primary">Sponsor</span>Padel
            </a>
            <div className="flex gap-4">
              <a href="/for-venues" className="text-gray-600 hover:text-gray-900">
                For Venues
              </a>
              <a href="/for-brands" className="text-primary font-semibold">
                For Brands
              </a>
              <a href="/opportunities" className="text-gray-600 hover:text-gray-900">
                Browse Opportunities
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sponsor <span className="text-primary">Padel in Indonesia</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with premium padel venues, tournaments, and communities to grow your brand
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3">Targeted Reach</h3>
            <p className="text-gray-600">
              Access to Indonesia's growing padel community with high engagement and purchasing power
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3">Curated Matches</h3>
            <p className="text-gray-600">
              We match you with opportunities that align with your brand values and budget
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-3">Bundle Deals</h3>
            <p className="text-gray-600">
              Sponsor multiple venues or events and maximize your brand visibility across Indonesia
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Why Sponsor Padel */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Sponsor Padel?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>
                  <strong>Fast Growing Sport:</strong> Padel is the fastest growing racquet sport globally
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>
                  <strong>Affluent Audience:</strong> Players are typically professionals and business owners
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>
                  <strong>High Engagement:</strong> Padel creates strong community bonds and brand loyalty
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>
                  <strong>Social Media Reach:</strong> Players actively share their games on social platforms
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>
                  <strong>Long-term Visibility:</strong> Court banners and venue branding seen daily by hundreds
                </span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Not sure where to start?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Browse our curated sponsorship opportunities to see what's available
              </p>
              <a
                href="/opportunities"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              >
                Browse Opportunities
              </a>
            </div>
          </div>

          {/* Right: General Inquiry Form */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h2>
            <p className="text-gray-600 mb-6">
              Fill out this form and we'll contact you within 24 hours to discuss sponsorship opportunities
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Wilson Indonesia"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  required
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Jane Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+6281234567890"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="jane@wilson.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry
                </label>
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Sports Equipment, F&B, Real Estate, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range (IDR, optional)
                </label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., 50-100 million"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tell us about your sponsorship goals, preferred locations, target audience, etc."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 font-medium text-center">
                  ✓ Inquiry submitted! We'll contact you within 24 hours.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-600 font-medium text-center">
                  ✗ Error submitting form. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Success Stories (placeholder) */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-lg mb-2">Tournament Sponsorship</h3>
              <p className="text-gray-600 text-sm">
                Brand X sponsored Jakarta Padel Open, reaching 500+ players and 10K social media impressions
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="font-bold text-lg mb-2">Venue Partnership</h3>
              <p className="text-gray-600 text-sm">
                Brand Y partnered with premium venue, gaining daily visibility to 200+ affluent players
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="font-bold text-lg mb-2">Community Engagement</h3>
              <p className="text-gray-600 text-sm">
                Brand Z sponsored padel community events, building loyalty among 300+ active members
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 CariSponsorPadel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
