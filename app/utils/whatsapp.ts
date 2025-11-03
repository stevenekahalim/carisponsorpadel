// WhatsApp number
export const WHATSAPP_NUMBER = "6282282226009";

// Brand Inquiry Template
export const getBrandWhatsAppLink = (opportunityTitle?: string) => {
  const template = `Hi CariSponsorPadel! 👋

I'm interested in sponsorship opportunities.${opportunityTitle ? `\n\n*INTERESTED IN:* ${opportunityTitle}` : ''}

*COMPANY/BRAND DETAILS:*
📌 Company/Brand Name:
📌 Industry: (contoh: F&B, Fashion, Tech, Properti)
📌 Contact Person:

*SPONSORSHIP NEEDS:*
📍 Location preference: (contoh: Jakarta, Surabaya, atau flexible)
💰 Budget: (ada paket mulai dari 5jt, bisa diskusi)
📅 Timeline: (contoh: Mulai Desember 2025)

*GOALS:*
Apa yang mau dicapai? Pilih yang sesuai:
☐ Brand visibility (logo, banner)
☐ Product sampling/booth
☐ Event activation/tournament
☐ Social media exposure
☐ Lainnya: _______

Thanks! 🙏`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(template)}`;
};

// Venue/Event Submission Template
export const getVenueWhatsAppLink = () => {
  const template = `Hi CariSponsorPadel! 👋

I want to find sponsors for my venue/event.

*VENUE/EVENT DETAILS:*
📌 Name:
📌 Type: (Venue/Tournament/Community)
📌 Location:

*WHAT WE HAVE:*
🎯 Courts/Capacity:
📱 Instagram: @

*SPONSORSHIP READINESS:*
☐ Sudah punya proposal sponsorship
☐ Belum punya proposal (butuh bantuan)

Looking forward to working together! 🙏`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(template)}`;
};
