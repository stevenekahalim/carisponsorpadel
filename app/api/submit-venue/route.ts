import { NextRequest, NextResponse } from "next/server";
import { appendToSheet } from "@/lib/googleSheets";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.contactName || !data.whatsapp || !data.venueName || !data.category || !data.city || !data.province) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Prepare row data for Submissions sheet
    const rowData = [
      data.contactName,
      data.whatsapp,
      data.email || "",
      data.venueName, // This remains PRIVATE
      data.category,
      data.city,
      data.province,
      data.courtsCount || "",
      data.participants || "",
      data.frequency || "",
      data.socialReach || "",
      data.details,
      "Pending", // Status
      "", // Notes (empty for now, admin will fill)
    ];

    // Append to Google Sheets "Submissions" tab
    await appendToSheet("Submissions", rowData);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error submitting venue:", error);
    return NextResponse.json(
      { error: "Failed to submit venue" },
      { status: 500 }
    );
  }
}
