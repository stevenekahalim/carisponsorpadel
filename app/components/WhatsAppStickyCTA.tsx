'use client';

import { getVenueWhatsAppLink, getBrandWhatsAppLink } from '../utils/whatsapp';

type WhatsAppStickyCTAProps = {
  type: 'venue' | 'brand';
};

export default function WhatsAppStickyCTA({ type }: WhatsAppStickyCTAProps) {
  const isVenue = type === 'venue';
  const whatsappLink = isVenue ? getVenueWhatsAppLink() : getBrandWhatsAppLink();
  const buttonText = isVenue ? 'Find Sponsors on WhatsApp' : 'See Opportunities on WhatsApp';
  const mobileText = isVenue ? 'Find Sponsors' : 'See Opportunities';

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 py-3 md:py-4 px-4">
      <div className="max-w-4xl mx-auto">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary text-gray-900 px-6 py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-400 transition-all duration-200 text-center shadow-md"
        >
          <span className="hidden md:inline">{buttonText} →</span>
          <span className="md:hidden">{mobileText} →</span>
        </a>
      </div>
    </div>
  );
}
