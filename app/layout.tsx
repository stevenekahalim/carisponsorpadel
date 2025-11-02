import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CariSponsorPadel - Indonesia's Padel Sponsorship Marketplace",
  description: "Connecting padel venues, tournaments, and communities with brands and sponsors across Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
