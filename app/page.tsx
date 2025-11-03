import StickyCTA from './components/StickyCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center gap-2">
            <a href="/" className="text-base md:text-xl lg:text-2xl font-bold text-gray-900 flex-shrink-0">
              CariSponsor<span className="text-primary">Padel</span>
            </a>
            <div className="flex gap-2 sm:gap-3 md:gap-6 text-xs sm:text-sm md:text-base flex-shrink-0">
              <a href="/for-venues" className="text-gray-600 hover:text-primary transition whitespace-nowrap">
                Venues
              </a>
              <a href="/for-brands" className="text-gray-600 hover:text-primary transition whitespace-nowrap">
                Brands
              </a>
              <a href="/opportunities" className="text-gray-600 hover:text-primary transition whitespace-nowrap">
                Opps
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1920&h=1080&fit=crop" alt="Padel Court Background" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-gray-50/95"></div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              Indonesia's <span className="text-primary">#1</span> Padel<br/>
              Sponsorship Platform
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 px-2">
              Verified opportunities. Vetted brands.<br/>
              <span className="font-semibold text-gray-800">Fast deals. Zero guesswork.</span>
            </p>

            {/* Two Column Layout with Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Venue Column */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-primary">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900">For Venues/Events</h3>
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">Free to list</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">Pay only when deal closes (10-20%)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-700">Optional: Professional proposal (3M)</span>
                  </div>
                </div>
                <a
                  href="/for-venues"
                  className="block w-full bg-primary text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition shadow-md text-center"
                >
                  Find Sponsors →
                </a>
              </div>

              {/* Brand Column */}
              <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-lg border-2 border-gray-700">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">For Brands</h3>
                <div className="space-y-3 mb-6 text-left">
                  <div className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-200">Curated, verified opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-200">Bundle deals = 30-50% savings</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-primary text-xl">✓</span>
                    <span className="text-gray-200">Free consultation available</span>
                  </div>
                </div>
                <a
                  href="/for-brands"
                  className="block w-full bg-primary text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-400 transition shadow-md text-center"
                >
                  See Opportunities →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Trust Section */}
        <section className="py-12 bg-white border-y">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-center text-gray-500 text-sm uppercase tracking-wider mb-8">
              Brands That Trust Us
            </h3>
            <div className="flex justify-center items-center gap-12 flex-wrap opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300">
              <img src="/images/brands/sportx.svg" alt="SportX Indonesia" className="h-10" />
              <img src="/images/brands/nusacoffee.svg" alt="Nusa Coffee" className="h-10" />
              <img src="/images/brands/techhub.svg" alt="TechHub.id" className="h-10" />
              <img src="/images/brands/baliproperties.svg" alt="Bali Properties" className="h-10" />
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-4 md:py-6 bg-primary">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg">
              <span className="hidden sm:inline">50M+ in sponsorships matched  •  15+ active venues  •  5+ brand partners</span>
              <span className="sm:hidden">50M+ matched  •  15+ venues  •  5+ brands</span>
            </p>
          </div>
        </section>

        {/* Featured Opportunities */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Featured Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Premium 6-Court Venue", location: "Surabaya, East Java", courts: 6, players: "500+", reach: "2000+", image: "https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?w=400&h=300&fit=crop" },
                { title: "Elite Sports Complex", location: "Jakarta Selatan", courts: 8, players: "800+", reach: "5000+", image: "https://images.unsplash.com/photo-1595435742656-5272d0f6c8c1?w=400&h=300&fit=crop" },
                { title: "Coastal Padel Club", location: "Bali, Canggu", courts: 4, players: "300+", reach: "3000+", image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop" },
                { title: "Championship Tournament", location: "Bandung", courts: 10, players: "1000+", reach: "10000+", image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=400&h=300&fit=crop" },
                { title: "Community Padel Center", location: "Yogyakarta", courts: 3, players: "200+", reach: "1500+", image: "https://images.unsplash.com/photo-1576678927484-cc907957ee7a?w=400&h=300&fit=crop" },
                { title: "Executive Sports Hub", location: "Jakarta Pusat", courts: 5, players: "600+", reach: "4000+", image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=300&fit=crop" }
              ].map((venue, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden">
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
                    <a href="/opportunities" className="block w-full bg-primary text-gray-900 text-center py-2 rounded-lg font-semibold hover:bg-green-400 transition">
                      Request Info
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <a href="/opportunities" className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-gray-900 transition">
                View All Opportunities
              </a>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-12 md:py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://ui-avatars.com/api/?name=Andi+Wijaya&background=10b981&color=fff&size=64&bold=true"
                    alt="Andi Wijaya"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Andi Wijaya</p>
                    <p className="text-sm text-gray-600">Marketing Director, SportX Indonesia</p>
                  </div>
                </div>
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 mb-2 italic">
                  CSP helped us close 100M in sponsorships across 8 venues in Q1 2025. We're now the top-of-mind brand in Surabaya's padel scene.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://ui-avatars.com/api/?name=Siti+Rahman&background=3b82f6&color=fff&size=64&bold=true"
                    alt="Siti Rahman"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Siti Rahman</p>
                    <p className="text-sm text-gray-600">Tournament Director, Jakarta Padel Open</p>
                  </div>
                </div>
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 mb-2 italic">
                  Within 3 weeks, CSP secured 50M in sponsors for our tournament series. Their network is unmatched.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://ui-avatars.com/api/?name=Budi+Santoso&background=f59e0b&color=fff&size=64&bold=true"
                    alt="Budi Santoso"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Budi Santoso</p>
                    <p className="text-sm text-gray-600">Owner, Surabaya Padel Club</p>
                  </div>
                </div>
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-gray-700 mb-2 italic">
                  We listed our venue for free and landed a 6-month sponsorship deal worth 25M. CSP handled everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">How much does it cost?</h3>
                <p className="text-gray-600">Free to list. We only earn when you do (10-20% commission on closed deals).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">How long does it take?</h3>
                <p className="text-gray-600">From submission to first sponsor match: typically 2-4 weeks.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">What if I need help with proposals?</h3>
                <p className="text-gray-600">We offer professional proposal creation service for 3M (or free if deal closes within 60 days).</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Do you work with small events?</h3>
                <p className="text-gray-600">Yes! From local community tournaments to major venues.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Can brands customize their sponsorship packages?</h3>
                <p className="text-gray-600">Absolutely. We specialize in creating custom bundles that fit your budget and target audience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12">Ready to get started?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <a
                href="/for-venues"
                className="bg-primary text-gray-900 px-8 py-5 rounded-lg font-bold text-lg hover:bg-green-400 transition shadow-lg flex flex-col items-center justify-center min-h-[120px]"
              >
                <div className="text-sm font-normal mb-1">I Have a Venue/Event</div>
                <div className="flex items-center gap-2">
                  Find Sponsors →
                </div>
              </a>
              <a
                href="/for-brands"
                className="bg-gray-900 text-white px-8 py-5 rounded-lg font-bold text-lg hover:bg-gray-800 transition shadow-lg flex flex-col items-center justify-center min-h-[120px]"
              >
                <div className="text-sm font-normal mb-1">I'm a Brand</div>
                <div className="flex items-center gap-2">
                  See Opportunities →
                </div>
              </a>
            </div>
          </div>
        </section>

      </main>

      <StickyCTA />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 pb-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2">
            <a href="/about" className="hover:text-primary transition">About CSP</a>
            {" | "}
            Contact WhatsApp: <a href="https://wa.me/6282282226009" className="hover:text-primary transition">+62-822-8222-6009</a>
          </p>
          <p className="text-gray-400 text-sm">&copy; 2025 CariSponsorPadel</p>
        </div>
      </footer>
    </div>
  );
}
