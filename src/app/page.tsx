import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Host Solutions - Airbnb Management Philippines",
  description: "Professional Airbnb property management and co-hosting services in the Philippines. Maximize your rental income with expert management.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ background: "var(--paper)" }}>
        {/* Hero Section */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "linear-gradient(135deg, var(--paper) 0%, var(--crimson-bg) 100%)" }}>
          <div className="wrap">
            <div style={{ maxWidth: "600px" }}>
              <span className="eyebrow">Welcome to Co-Host Solutions</span>
              <h1 style={{ fontSize: "48px", marginTop: "24px", marginBottom: "24px", lineHeight: "1.2" }}>
                Turn Your Property Into Passive Income
              </h1>
              <p style={{ fontSize: "18px", lineHeight: "1.7", color: "var(--ink-mid)", marginBottom: "32px" }}>
                We handle the complexity of Airbnb management so you can focus on what matters. Professional co-hosting services designed for property owners in the Philippines.
              </p>
              <div style={{ display: "flex", gap: "16px" }}>
                <button className="btn btn-primary">Book Assessment</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" style={{ paddingTop: "80px", paddingBottom: "80px", background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="eyebrow">Our Services</span>
              <h2 style={{ fontSize: "42px", marginTop: "16px" }}>What We Do</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "32px" }}>
              {[
                {
                  title: "Property Setup & Photography",
                  description: "Professional photography, listing optimization, and initial guest communication setup to launch your property.",
                },
                {
                  title: "Guest Management",
                  description: "Handle inquiries, booking coordination, check-ins, and guest support 24/7 for seamless guest experiences.",
                },
                {
                  title: "Cleaning & Maintenance",
                  description: "Coordinated cleaning between guests and proactive maintenance to keep your property in perfect condition.",
                },
                {
                  title: "Revenue Optimization",
                  description: "Dynamic pricing strategies and seasonal adjustments to maximize your earnings year-round.",
                },
              ].map((service, idx) => (
                <div key={idx} style={{ padding: "32px", background: "var(--paper)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-sm)" }}>
                  <h3 style={{ fontSize: "20px", marginBottom: "16px", color: "var(--crimson)" }}>{service.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: "1.6", color: "var(--ink-mid)" }}>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Properties Section */}
        <section id="properties" style={{ paddingTop: "80px", paddingBottom: "80px", background: "var(--paper)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="eyebrow">Portfolio</span>
              <h2 style={{ fontSize: "42px", marginTop: "16px" }}>Featured Properties</h2>
            </div>
            <p style={{ textAlign: "center", fontSize: "18px", color: "var(--ink-mid)", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
              Explore properties under professional management in key locations across the Philippines.
            </p>
            <div style={{ textAlign: "center" }}>
              <Link href="/properties" className="btn btn-primary">
                View All Properties
              </Link>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section style={{ paddingTop: "80px", paddingBottom: "80px", background: "var(--surface)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center", marginBottom: "64px" }}>
              <span className="eyebrow">Knowledge Base</span>
              <h2 style={{ fontSize: "42px", marginTop: "16px" }}>Resources</h2>
            </div>
            <p style={{ textAlign: "center", fontSize: "18px", color: "var(--ink-mid)", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
              Learn how to maximize your Airbnb earnings and navigate the short-term rental landscape in the Philippines.
            </p>
            <div style={{ textAlign: "center" }}>
              <Link href="/resources" className="btn btn-primary">
                Read Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={{ paddingTop: "80px", paddingBottom: "80px", background: "var(--crimson-bg)" }}>
          <div className="wrap">
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: "42px", marginBottom: "32px" }}>Ready to Get Started?</h2>
              <p style={{ fontSize: "18px", lineHeight: "1.7", color: "var(--ink-mid)", marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
                Schedule a free property assessment. We'll evaluate your unit and provide a detailed earnings projection.
              </p>
              <button className="btn btn-primary">Book Your Assessment</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
