import WhatsAppStickyCTA from '../components/WhatsAppStickyCTA';
import { getBrandWhatsAppLink } from '../utils/whatsapp';

export default function ForBrands() {
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
              <a href="/for-brands" className="text-primary font-semibold whitespace-nowrap">
                Brands
              </a>
              <a href="/opportunities" className="text-gray-600 hover:text-gray-900 whitespace-nowrap">
                Opps
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Sponsor <span className="text-primary">Padel in Indonesia</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Connect with premium padel venues, tournaments, and communities to grow your brand
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
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

        {/* Why Sponsor Padel */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Why Sponsor Padel?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">✓</span>
              <span>
                <strong>Fast Growing Sport:</strong> Padel is the fastest growing racquet sport globally
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">✓</span>
              <span>
                <strong>Affluent Audience:</strong> Players are typically professionals and business owners
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">✓</span>
              <span>
                <strong>High Engagement:</strong> Padel creates strong community bonds and brand loyalty
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">✓</span>
              <span>
                <strong>Social Media Reach:</strong> Players actively share their games on social platforms
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2 flex-shrink-0">✓</span>
              <span>
                <strong>Long-term Visibility:</strong> Court banners and venue branding seen daily by hundreds
              </span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-green-600 rounded-lg p-8 md:p-12 text-center shadow-lg mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Explore Opportunities?
          </h2>
          <p className="text-gray-800 mb-6 text-lg">
            Contact us to see curated sponsorship opportunities
          </p>
          <a
            href={getBrandWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
          >
            See Opportunities →
          </a>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">Success Stories</h2>
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

      <WhatsAppStickyCTA type="brand" />

      <footer className="bg-gray-900 text-white py-8 mt-20 pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2025 CariSponsorPadel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
