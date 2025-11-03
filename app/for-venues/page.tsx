import { getVenueWhatsAppLink } from '../utils/whatsapp';
import WhatsAppStickyCTA from '../components/WhatsAppStickyCTA';

export default function ForVenues() {
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
              <h3 className="font-semibold text-lg mb-2">Contact Us on WhatsApp</h3>
              <p className="text-gray-600">Tell us about your venue or event via WhatsApp</p>
            </div>
            <div>
              <div className="bg-primary text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                2
              </div>
              <h3 className="font-semibold text-lg mb-2">We Review & List</h3>
              <p className="text-gray-600">Our team reviews within 24 hours and adds you to our marketplace</p>
            </div>
            <div>
              <div className="bg-primary text-gray-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                3
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Matched</h3>
              <p className="text-gray-600">We connect you with interested brands and facilitate the deal</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg p-6 md:p-8 mb-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Why List With Us?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl flex-shrink-0">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Free to List</h3>
                <p className="text-gray-600">Commission-based only (bagi hasil) - you only pay when sponsors pay you</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl flex-shrink-0">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Access to Verified Brands</h3>
                <p className="text-gray-600">We work with legitimate brands across F&B, sports, fashion, and more</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl flex-shrink-0">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Professional Support</h3>
                <p className="text-gray-600">Professional proposals handled for you - free if your deal closes within 60 days</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary text-xl flex-shrink-0">✓</span>
              <div>
                <h3 className="font-semibold mb-1">Fast Turnaround</h3>
                <p className="text-gray-600">From submission to first match: typically 2-4 weeks</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary to-green-600 rounded-lg p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Sponsors?
          </h2>
          <p className="text-gray-800 mb-6 text-lg">
            Chat with us on WhatsApp to get started
          </p>
          <a
            href={getVenueWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
          >
            💬 Contact Us on WhatsApp
          </a>
        </div>

        {/* FAQ */}
        <div className="mt-12 bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">Common Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">How much does it cost?</h3>
              <p className="text-gray-600">Free to list. We only earn when you do through success-based commission (bagi hasil).</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">What if I don't have a sponsorship proposal?</h3>
              <p className="text-gray-600">We handle professional proposals for you - free if your deal closes within 60 days.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Do you work with small events?</h3>
              <p className="text-gray-600">Yes! From local community tournaments to major venues - all are welcome.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How long does the process take?</h3>
              <p className="text-gray-600">From submission to first sponsor match: typically 2-4 weeks.</p>
            </div>
          </div>
        </div>
      </main>

      <WhatsAppStickyCTA type="venue" />

      <footer className="bg-gray-900 text-white py-8 mt-20 pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 CariSponsorPadel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
