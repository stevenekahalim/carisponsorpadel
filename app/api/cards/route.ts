import { NextRequest, NextResponse } from "next/server";
import { readFromSheet } from "@/lib/googleSheets";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const province = searchParams.get("province");

    // Read all rows from the "Cards" sheet
    const rows = await readFromSheet("Cards");

    if (!rows || rows.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    // First row is headers, skip it
    const headers = rows[0];
    const dataRows = rows.slice(1);

    // Map rows to card objects
    const cards = dataRows
      .map((row) => {
        // Ensure row has enough columns
        if (row.length < 10) return null;

        return {
          id: row[0] || "",
          type: row[1] || "",
          title: row[2] || "",
          description: row[3] || "",
          city: row[4] || "",
          province: row[5] || "",
          courts: row[6] ? parseInt(row[6]) : null,
          reach: row[7] ? parseInt(row[7]) : 0,
          frequency: row[8] || "",
          imageUrl: row[9] || "",
          status: row[10] || "Available",
        };
      })
      .filter((card) => card !== null);

    // Apply filters
    let filteredCards = cards;

    if (type && type !== "all") {
      filteredCards = filteredCards.filter((card) => card.type === type);
    }

    if (province && province !== "all") {
      filteredCards = filteredCards.filter((card) => card.province === province);
    }

    // Only show Available and Partially Sponsored cards (hide Fully Sponsored)
    filteredCards = filteredCards.filter(
      (card) => card.status === "Available" || card.status === "Partially Sponsored"
    );

    return NextResponse.json(filteredCards, { status: 200 });
  } catch (error) {
    console.error("Error fetching cards:", error);
    return NextResponse.json(
      { error: "Failed to fetch cards" },
      { status: 500 }
    );
  }
}
