import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Properties - Co-Host Solutions",
  description: "Browse our managed Airbnb properties in the Philippines.",
};

export default function PropertiesPage() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--paper)", minHeight: "100vh" }}>
        <section style={{ paddingTop: "80px", paddingBottom: "80px" }}>
          <div className="wrap">
            <div style={{ marginBottom: "64px" }}>
              <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>Our Properties</h1>
              <p style={{ fontSize: "18px", color: "var(--ink-mid)", maxWidth: "600px" }}>
                Professionally managed short-term rental properties with strong earning potential.
              </p>
            </div>

            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <p style={{ fontSize: "18px", color: "var(--ink-muted)" }}>Properties coming soon. Check back to see our portfolio!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
