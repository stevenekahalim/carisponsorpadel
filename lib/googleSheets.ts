import { google } from "googleapis";

// Initialize Google Sheets API client
export async function getGoogleSheetsClient() {
  const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS;
  const sheetId = process.env.GOOGLE_SHEET_ID;

  if (!credentials || !sheetId) {
    throw new Error("Missing Google Sheets configuration");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(credentials),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  return { sheets, sheetId };
}

// Append a row to a specific sheet tab
export async function appendToSheet(tabName: string, values: any[]) {
  const { sheets, sheetId } = await getGoogleSheetsClient();

  const timestamp = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  const rowData = [timestamp, ...values];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tabName}!A:Z`,
    valueInputOption: "RAW",
    requestBody: {
      values: [rowData],
    },
  });
}

// Read data from a specific sheet tab
export async function readFromSheet(tabName: string) {
  const { sheets, sheetId } = await getGoogleSheetsClient();

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: sheetId,
    range: `${tabName}!A:Z`,
  });

  return response.data.values || [];
}
