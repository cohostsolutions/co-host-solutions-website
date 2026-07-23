import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Co-Host Solutions — Optimized Hosting. Maximum Bookings.",
  description: "Manage your short-term rental from listing to check-out. Passive income, zero stress.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-cream text-text antialiased">
        {children}
      </body>
    </html>
  );
}
