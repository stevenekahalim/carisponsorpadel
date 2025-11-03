import StickyCTA from './components/StickyCTA';
import ScrollReveal from './components/ScrollReveal';
import BrandCarousel from './components/BrandCarousel';
import OpportunitiesCarousel from './components/OpportunitiesCarousel';

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
              <a href="/for-venues" className="text-gray-600 hover:text-primary transition-all duration-200 whitespace-nowrap relative group">
                Venues
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/for-brands" className="text-gray-600 hover:text-primary transition-all duration-200 whitespace-nowrap relative group">
                Brands
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/opportunities" className="text-gray-600 hover:text-primary transition-all duration-200 whitespace-nowrap relative group">
                Opps
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-[85vh] md:min-h-[80vh] py-16 sm:py-20 md:py-24 lg:py-28 px-4 relative bg-gradient-to-b from-white via-gray-50/30 to-gray-50 overflow-hidden flex items-center">
          {/* Animated gradient background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-[-10%] right-[-5%] w-[60%] md:w-[50%] h-[60%] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-[120px] animate-pulse-slow"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[50%] md:w-[40%] h-[50%] rounded-full bg-gradient-radial from-secondary-blue/15 via-secondary-blue/3 to-transparent blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 sm:mb-8 md:mb-10 leading-tight tracking-tight">
              Indonesia's <span className="text-primary bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">#1</span> Padel<br/>
              Sponsorship Platform
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 mb-10 sm:mb-12 md:mb-16 px-2 leading-relaxed max-w-4xl mx-auto">
              Verified opportunities. Vetted brands.<br/>
              <span className="font-bold text-gray-800 bg-gradient-to-r from-primary/20 to-transparent px-2 rounded">Fast deals. Zero guesswork.</span>
            </p>

            {/* Two Column Layout with Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Venue Column */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-9 shadow-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 md:mb-7 text-gray-900">For Venues/Events</h3>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform">✓</span>
                    <span className="text-gray-700 text-base sm:text-lg">Free to list</span>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform">✓</span>
                    <span className="text-gray-700 text-base sm:text-lg">Pay only when deal closes (10-20%)</span>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform">✓</span>
                    <span className="text-gray-700 text-base sm:text-lg">Optional: Professional proposal (3M)</span>
                  </div>
                </div>
                <a
                  href="/for-venues"
                  className="block w-full bg-primary text-gray-900 px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
                >
                  Find Sponsors →
                </a>
              </div>

              {/* Brand Column */}
              <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-6 sm:p-7 md:p-9 shadow-xl border border-gray-700/50 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5 md:mb-7 text-white">For Brands</h3>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-left">
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform">✓</span>
                    <span className="text-gray-200 text-base sm:text-lg">Curated, verified opportunities</span>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform">✓</span>
                    <span className="text-gray-200 text-base sm:text-lg">Bundle deals = 30-50% savings</span>
                  </div>
                  <div className="flex items-start gap-3 group/item">
                    <span className="text-primary text-2xl flex-shrink-0 group-hover/item:scale-110 transition-transform">✓</span>
                    <span className="text-gray-200 text-base sm:text-lg">Free consultation available</span>
                  </div>
                </div>
                <a
                  href="/for-brands"
                  className="block w-full bg-primary text-gray-900 px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl hover:bg-green-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center"
                >
                  See Opportunities →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brands Trust Section - Auto-Scrolling Carousel */}
        <ScrollReveal>
          <section className="bg-white border-y">
            <div className="max-w-7xl mx-auto px-4">
              <h3 className="text-center text-gray-500 text-sm uppercase tracking-wider pt-12 mb-4">
                Brands That Trust Us
              </h3>
            </div>
            <BrandCarousel />
          </section>
        </ScrollReveal>

        {/* Trust Bar */}
        <section className="py-4 md:py-6 bg-primary">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-900 font-semibold text-sm md:text-base lg:text-lg">
              <span className="hidden sm:inline">50M+ in sponsorships matched  •  15+ active venues  •  5+ brand partners</span>
              <span className="sm:hidden">50M+ matched  •  15+ venues  •  5+ brands</span>
            </p>
          </div>
        </section>

        {/* Featured Opportunities - Carousel */}
        <ScrollReveal delay={100}>
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-4 px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Featured Opportunities</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Curated padel sponsorship deals ready for your brand</p>
              </div>
              <OpportunitiesCarousel />
              <div className="text-center mt-12">
                <a href="/for-brands" className="inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition">
                  View All Opportunities →
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Success Stories */}
        <ScrollReveal delay={150}>
          <section className="py-12 md:py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-border-gray p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://ui-avatars.com/api/?name=Andi+Wijaya&background=00E67A&color=fff&size=64&bold=true"
                    alt="Andi Wijaya"
                    className="w-16 h-16 rounded-full ring-2 ring-primary/20"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Andi Wijaya</p>
                    <p className="text-sm text-text-gray">Marketing Director, SportX Indonesia</p>
                  </div>
                </div>
                <div className="text-5xl text-primary mb-3 leading-none">"</div>
                <p className="text-text-dark text-base leading-relaxed italic">
                  CSP helped us close 100M in sponsorships across 8 venues in Q1 2025. We're now the top-of-mind brand in Surabaya's padel scene.
                </p>
              </div>
              <div className="bg-white border border-border-gray p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://ui-avatars.com/api/?name=Siti+Rahman&background=0066FF&color=fff&size=64&bold=true"
                    alt="Siti Rahman"
                    className="w-16 h-16 rounded-full ring-2 ring-secondary-blue/20"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Siti Rahman</p>
                    <p className="text-sm text-text-gray">Tournament Director, Jakarta Padel Open</p>
                  </div>
                </div>
                <div className="text-5xl text-primary mb-3 leading-none">"</div>
                <p className="text-text-dark text-base leading-relaxed italic">
                  Within 3 weeks, CSP secured 50M in sponsors for our tournament series. Their network is unmatched.
                </p>
              </div>
              <div className="bg-white border border-border-gray p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://ui-avatars.com/api/?name=Budi+Santoso&background=F59E0B&color=fff&size=64&bold=true"
                    alt="Budi Santoso"
                    className="w-16 h-16 rounded-full ring-2 ring-status-partial/20"
                  />
                  <div>
                    <p className="font-bold text-gray-900">Budi Santoso</p>
                    <p className="text-sm text-text-gray">Owner, Surabaya Padel Club</p>
                  </div>
                </div>
                <div className="text-5xl text-primary mb-3 leading-none">"</div>
                <p className="text-text-dark text-base leading-relaxed italic">
                  We listed our venue for free and landed a 6-month sponsorship deal worth 25M. CSP handled everything.
                </p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        {/* FAQ Section */}
        <ScrollReveal delay={200}>
          <section className="py-12 md:py-20 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white border border-border-gray p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-text-dark">How much does it cost?</h3>
                <p className="text-text-gray leading-relaxed">Free to list. We only earn when you do (10-20% commission on closed deals).</p>
              </div>
              <div className="bg-white border border-border-gray p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-text-dark">How long does it take?</h3>
                <p className="text-text-gray leading-relaxed">From submission to first sponsor match: typically 2-4 weeks.</p>
              </div>
              <div className="bg-white border border-border-gray p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-text-dark">What if I need help with proposals?</h3>
                <p className="text-text-gray leading-relaxed">We offer professional proposal creation service for 3M (or free if deal closes within 60 days).</p>
              </div>
              <div className="bg-white border border-border-gray p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-text-dark">Do you work with small events?</h3>
                <p className="text-text-gray leading-relaxed">Yes! From local community tournaments to major venues.</p>
              </div>
              <div className="bg-white border border-border-gray p-6 rounded-xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <h3 className="font-bold text-lg mb-2 text-text-dark">Can brands customize their sponsorship packages?</h3>
                <p className="text-text-gray leading-relaxed">Absolutely. We specialize in creating custom bundles that fit your budget and target audience.</p>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal delay={250}>
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
        </ScrollReveal>

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
