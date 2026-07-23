import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Co-Host Solutions — Optimized Hosting. Maximum Bookings.",
  description: "We run your short-term rental end to end so you never touch a guest message again. Hands-off property management for passive income.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body bg-paper text-ink-mid antialiased">
        <Navigation />
        <main className="pt-[74px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
