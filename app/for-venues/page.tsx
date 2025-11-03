"use client";

import { useState } from "react";

export default function ForVenues() {
  const [formData, setFormData] = useState({
    contactName: "",
    whatsapp: "",
    email: "",
    venueName: "",
    category: "venue",
    city: "",
    province: "",
    courtsCount: "",
    participants: "",
    frequency: "",
    socialReach: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/submit-venue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        // Redirect to thank you page after 2 seconds
        setTimeout(() => {
          window.location.href = "/thank-you-venue";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center gap-2">
            <a href="/" className="text-base md:text-xl lg:text-2xl font-bold text-gray-900 flex-shrink-0">
              CariSponsor<span className="text-primary">Padel</span>
            </a>
            <div className="flex gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base flex-shrink-0">
              <a href="/for-venues" className="text-primary font-semibold whitespace-nowrap">
                Venues
              </a>
              <a href="/for-brands" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Brands
              </a>
              <a href="/opportunities" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Opps
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Find Sponsors for Your <span className="text-primary">Padel Venue or Event</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Connect with brands looking to sponsor padel venues, tournaments, and communities across Indonesia
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="bg-primary text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                1
              </div>
              <h3 className="font-semibold text-lg mb-2">Submit Your Details</h3>
              <p className="text-gray-600">Fill out the form with your venue or event information</p>
            </div>
            <div>
              <div className="bg-primary text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">We Review</h3>
              <p className="text-gray-600">Our team reviews your submission within 24 hours</p>
            </div>
            <div>
              <div className="bg-primary text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Matched</h3>
              <p className="text-gray-600">We connect you with interested brands via WhatsApp</p>
            </div>
          </div>
        </div>

        {/* Submission Form */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Submit Your Opportunity</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
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
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Venue/Event Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Venue/Event Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Venue/Event Name * (kept private)
                  </label>
                  <input
                    type="text"
                    name="venueName"
                    required
                    value={formData.venueName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Graha Padel Surabaya"
                  />
                  <p className="text-sm text-gray-500 mt-1">This will be kept confidential and anonymized when displayed</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="venue">Venue</option>
                    <option value="tournament">Tournament</option>
                    <option value="community">Community</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Surabaya"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Province *
                  </label>
                  <input
                    type="text"
                    name="province"
                    required
                    value={formData.province}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Jawa Timur"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Courts
                  </label>
                  <input
                    type="number"
                    name="courtsCount"
                    value={formData.courtsCount}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="6"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Participants
                  </label>
                  <input
                    type="number"
                    name="participants"
                    value={formData.participants}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="150"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frequency
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select frequency</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="One-time">One-time Event</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Social Media Reach
                  </label>
                  <input
                    type="number"
                    name="socialReach"
                    value={formData.socialReach}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="5000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details *
                  </label>
                  <textarea
                    name="details"
                    required
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Tell us about your sponsorship opportunity, target budget range, what you can offer sponsors, etc."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit for Review"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 font-medium">
                  ✓ Submission successful! Redirecting to confirmation...
                </p>
              )}

              {submitStatus === "error" && (
                <p className="text-red-600 font-medium">
                  ✗ Error submitting form. Please try again.
                </p>
              )}

              <p className="text-sm text-gray-600 text-center">
                By submitting, you agree to be contacted via WhatsApp for sponsorship matching
              </p>
            </div>
          </form>
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
