# 🎾 CariSponsorPadel

**Indonesia's First Padel Sponsorship Marketplace**

A platform connecting padel venues, tournaments, and communities with brands and sponsors across Indonesia.

---

## 🚀 Features

### For Venues/Events
- Submit sponsorship opportunities via web form
- Venue names kept confidential (anonymized when displayed)
- Receive curated brand matches via WhatsApp

### For Brands/Sponsors
- Browse curated sponsorship opportunities
- Filter by type (venue/tournament/community) and location
- Request information on specific opportunities
- Receive personalized matches from the team

### Admin Workflow (Hendry)
- Manage everything via Google Sheets (no complex admin panel!)
- Review venue submissions and approve/reject
- Manually create anonymized opportunity cards
- Track brand inquiries and facilitate deals

---

## 📋 Tech Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Database:** Google Sheets API (3 tabs: Submissions, Cards, Inquiries)
- **Backend:** Next.js API Routes (serverless)
- **Hosting:** Vercel (recommended)
- **Notifications:** WhatsApp links

---

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
cd carisponsorpadel
npm install
```

### 2. Set Up Google Sheets

Follow the detailed guide in **[SETUP.md](./SETUP.md)** to:
1. Create a Google Sheet with 3 tabs
2. Set up Google Cloud Project & Service Account
3. Get API credentials
4. Configure environment variables

### 3. Configure Environment Variables

Copy the example file:

```bash
cp .env.local.example .env.local
```

Then fill in your values in `.env.local`:

```env
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account",...}'
GOOGLE_SHEET_ID=your-sheet-id-here
CSP_WHATSAPP_NUMBER=+6281234567890
```

See [SETUP.md](./SETUP.md) for detailed instructions.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
carisponsorpadel/
├── app/
│   ├── api/
│   │   ├── cards/route.ts          # GET cards from Google Sheets
│   │   ├── submit-venue/route.ts   # POST venue submissions
│   │   └── submit-inquiry/route.ts # POST brand inquiries
│   ├── for-venues/page.tsx         # Venue submission page
│   ├── for-brands/page.tsx         # Brand inquiry page
│   ├── opportunities/page.tsx      # Browse opportunity cards
│   ├── thank-you-venue/page.tsx    # Confirmation page
│   ├── thank-you-brand/page.tsx    # Confirmation page
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Homepage
│   └── globals.css                 # Global styles
├── lib/
│   └── googleSheets.ts             # Google Sheets utility functions
├── SETUP.md                        # Detailed setup guide
└── README.md                       # This file
```

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, featured cards |
| `/for-venues` | Venue submission form |
| `/for-brands` | Brand inquiry form |
| `/opportunities` | Browse & filter sponsorship opportunities |
| `/thank-you-venue` | Confirmation after venue submission |
| `/thank-you-brand` | Confirmation after brand inquiry |

---

## 📊 Google Sheets Structure

### Submissions Tab
Stores raw venue/event submissions (private data)

### Cards Tab
Stores approved opportunities (anonymized for public display)

### Inquiries Tab
Stores brand inquiry requests

See [SETUP.md](./SETUP.md) for exact column structures.

---

## 🎯 Hendry's Daily Workflow

1. **Morning:** Check **Submissions** tab → Review & approve/reject
2. **Create Cards:** For approved submissions → Add anonymized row to **Cards** tab
3. **Contact Venues:** WhatsApp approved venues to confirm
4. **Check Inquiries:** Review **Inquiries** tab → Contact brands within 24h
5. **Facilitate Deals:** Match brands with opportunities
6. **Update Status:** Track progress in Google Sheets

---

## 🚢 Deployment (Vercel)

### Deploy to Vercel

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/carisponsorpadel.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `GOOGLE_SHEETS_CREDENTIALS`
   - `GOOGLE_SHEET_ID`
   - `CSP_WHATSAPP_NUMBER`
5. Deploy!

### Custom Domain

1. In Vercel project settings → Domains
2. Add `carisponsporpadel.com`
3. Follow DNS configuration instructions

---

## 📈 Success Metrics

### Week 1
- ✅ Website live
- ✅ 5 test submissions
- ✅ Forms working end-to-end

### Month 1
- 📊 10 venue submissions
- 📊 5 brand inquiries
- 💰 1 deal closed (10M+ IDR)

### Month 3
- 📊 20+ active cards
- 📊 15+ brand inquiries
- 💰 5 deals closed
- 💰 50M+ IDR in sponsorships matched

---

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production Build
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## 📝 To-Do / Future Enhancements

- [ ] Add image upload for opportunity cards (Cloudinary or Supabase Storage)
- [ ] Add email notifications (Resend or SendGrid)
- [ ] WhatsApp API integration for automated notifications
- [ ] Google Analytics tracking
- [ ] Meta Pixel for ad tracking
- [ ] Add search functionality to opportunities page
- [ ] Testimonials section with real case studies
- [ ] Blog section for padel + sponsorship content
- [ ] Migrate to Supabase if hitting 1000+ submissions

---

## 🤝 Contributing

This is a private project for CariSponsorPadel business.

---

## 📄 License

Proprietary - All rights reserved to CariSponsorPadel

---

## 📞 Support

For questions or issues:
- WhatsApp: +6281234567890
- Email: hello@carisponsporpadel.com

---

**Built with ❤️ and ⚡ Claude Code in 1 day**

🚀 **Ready to connect Indonesia's padel community with amazing sponsors!**
