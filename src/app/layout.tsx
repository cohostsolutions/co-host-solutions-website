import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Co-Host Solutions - Airbnb Management Philippines",
  description:
    "Professional Airbnb property management and co-hosting services in the Philippines. Maximize your rental income with expert management.",
  openGraph: {
    title: "Co-Host Solutions",
    description:
      "Professional Airbnb property management in the Philippines",
    type: "website",
    url: "https://co-hostsolutions.com",
  },
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
