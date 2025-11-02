# CariSponsorPadel - Google Sheets Setup Guide

This guide will help you set up Google Sheets as the database for CariSponsorPadel.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **CariSponsorPadel Data**
4. Create 3 tabs (sheets) with the following names:
   - `Submissions`
   - `Cards`
   - `Inquiries`

### Submissions Tab (Venue/Event Forms)

Add these column headers in row 1:

| Timestamp | Contact Name | WhatsApp | Email | Venue Name | Category | City | Province | Courts Count | Participants | Frequency | Social Reach | Details | Status | Notes |
|-----------|--------------|----------|-------|------------|----------|------|----------|--------------|--------------|-----------|--------------|---------|--------|-------|

### Cards Tab (Public Opportunities)

Add these column headers in row 1:

| ID | Type | Title | Description | City | Province | Courts | Reach | Frequency | Image URL | Status | Created |
|----|------|-------|-------------|------|----------|--------|-------|-----------|-----------|--------|---------|

### Inquiries Tab (Brand Forms)

Add these column headers in row 1:

| Timestamp | Company | Contact Person | WhatsApp | Email | Industry | Interested In | Budget | Message | Status | Notes |
|-----------|---------|----------------|----------|-------|----------|---------------|--------|---------|--------|-------|

---

## Step 2: Create Google Cloud Project & Service Account

### 2.1 Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a Project" → "New Project"
3. Name: `carisponsorpadel`
4. Click "Create"

### 2.2 Enable Google Sheets API

1. In the Cloud Console, go to **APIs & Services** → **Library**
2. Search for "Google Sheets API"
3. Click on it and press **Enable**

### 2.3 Create Service Account

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **Service Account**
3. Fill in:
   - **Service account name:** `carisponsorpadel-sheets`
   - **Service account ID:** (auto-filled)
   - Click **Create and Continue**
4. **Grant this service account access to project:**
   - Role: **Editor** (or just "Viewer" if you only need read access)
   - Click **Continue** → **Done**

### 2.4 Create Service Account Key

1. In **Credentials**, find your service account in the list
2. Click on the service account email
3. Go to the **Keys** tab
4. Click **Add Key** → **Create new key**
5. Choose **JSON**
6. Click **Create**
7. A JSON file will download - **save this securely!**

---

## Step 3: Share Google Sheet with Service Account

1. Open your **CariSponsorPadel Data** Google Sheet
2. Click the **Share** button (top right)
3. Copy the **service account email** from the JSON file (looks like: `carisponsorpadel-sheets@project-name.iam.gserviceaccount.com`)
4. Paste it in the Share dialog
5. Give it **Editor** access
6. **Uncheck** "Notify people" (it's a bot, not a person)
7. Click **Share**

---

## Step 4: Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and fill in the values:

### GOOGLE_SHEETS_CREDENTIALS

Copy the **entire contents** of the downloaded JSON file (from Step 2.4) and paste it as a single line string:

```
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"your-project","private_key_id":"...","private_key":"-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n","client_email":"...@....iam.gserviceaccount.com",...}'
```

**Important:**
- Keep it as a single line
- Make sure to escape newlines in the private_key (use `\\n` instead of actual newlines)
- Wrap the entire JSON in single quotes

### GOOGLE_SHEET_ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the `SHEET_ID_HERE` part
4. Paste it in `.env.local`:
   ```
   GOOGLE_SHEET_ID=1abc...xyz
   ```

### CSP_WHATSAPP_NUMBER (Optional)

```
CSP_WHATSAPP_NUMBER=+6281234567890
```

---

## Step 5: Test the Integration

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000/for-venues

3. Fill out and submit the form

4. Check your Google Sheet's **Submissions** tab - you should see a new row!

---

## Step 6: Add Sample Cards (for Testing)

Manually add a few sample rows to the **Cards** tab in your Google Sheet:

| ID | Type | Title | Description | City | Province | Courts | Reach | Frequency | Image URL | Status | Created |
|----|------|-------|-------------|------|----------|--------|-------|-----------|-----------|--------|---------|
| card-001 | venue | Premium 6-Court Venue - Surabaya | Modern facility with 150+ members | Surabaya | Jawa Timur | 6 | 5000 | Daily | | Available | 2025-01-10 |
| card-002 | tournament | Jakarta Padel Open 2025 | Annual tournament, 200+ participants | Jakarta | DKI Jakarta | | 10000 | Annual | | Available | 2025-01-10 |

Then visit http://localhost:3000/opportunities to see them displayed!

---

## Troubleshooting

### "Missing Google Sheets configuration" error

- Make sure `.env.local` exists and has the correct values
- Restart the dev server after adding environment variables

### "Permission denied" error

- Make sure you shared the Google Sheet with the service account email
- Make sure the service account has Editor access

### Forms submit but nothing appears in Google Sheets

- Check the browser console for errors
- Check the terminal where `npm run dev` is running for API errors
- Verify the sheet tab names are exactly: `Submissions`, `Cards`, `Inquiries`

---

## Next Steps

1. ✅ Test venue submission form
2. ✅ Test brand inquiry form
3. ✅ Add a few sample cards to the Cards tab
4. ✅ Test the opportunities page filters
5. 🚀 Ready to deploy to Vercel!

---

## Hendry's Daily Workflow

### Morning: Check Submissions

1. Open Google Sheet → **Submissions** tab
2. Look for rows with Status = "Pending"
3. Review the details
4. Change Status to "Approved" or "Rejected"

### If Approved: Create a Card

1. Go to **Cards** tab
2. Add a new row with anonymized info:
   - **ID:** card-003 (increment)
   - **Type:** venue/tournament/community
   - **Title:** "Premium 6-Court Venue - Surabaya" (anonymized)
   - **Description:** Write a compelling pitch (without revealing venue name)
   - **City, Province, Courts, Reach, Frequency:** Copy from submission
   - **Status:** Available
3. Contact the venue via WhatsApp to confirm

### Check Brand Inquiries

1. Open **Inquiries** tab
2. Look for Status = "New"
3. Contact the brand via WhatsApp within 24 hours
4. Update Status to "Contacted" → "Negotiating" → "Closed" or "Lost"

---

**That's it! You're ready to run CariSponsorPadel!** 🎾
