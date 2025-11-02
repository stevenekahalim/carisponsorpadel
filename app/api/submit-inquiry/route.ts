import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.company || !data.contactPerson || !data.whatsapp || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare row data for Inquiries sheet
    const rowData = [
      data.company,
      data.contactPerson,
      data.whatsapp,
      data.email,
      data.industry || "",
      data.interestedIn || "General",
      data.budget || "",
      data.message,
      "New", // Status
      "", // Notes (empty for now, admin will fill)
    ];

    // Append to Google Sheets "Inquiries" tab
    await appendToSheet("Inquiries", rowData);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry" },
      { status: 500 }
    );
  }
}
