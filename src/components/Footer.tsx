import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "var(--ink)", color: "var(--surface)", marginTop: "80px" }}>
      <div className="wrap" style={{ padding: "64px 28px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "48px", marginBottom: "48px" }}>
          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "16px", color: "var(--gold)" }}>Co-Host Solutions</h3>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--ink-light)" }}>
              Professional Airbnb management and co-hosting services for property owners in the Philippines.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", gap: "8px", display: "flex", flexDirection: "column" }}>
              <li><Link href="/" style={{ color: "var(--ink-light)", fontSize: "14px" }}>Home</Link></li>
              <li><Link href="/#what-we-do" style={{ color: "var(--ink-light)", fontSize: "14px" }}>What We Do</Link></li>
              <li><Link href="/resources" style={{ color: "var(--ink-light)", fontSize: "14px" }}>Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Contact
            </h4>
            <p style={{ fontSize: "14px", color: "var(--ink-light)", marginBottom: "8px" }}>Cagayan de Oro, Philippines</p>
            <p style={{ fontSize: "14px", color: "var(--ink-light)" }}>office@co-hostsolutions.com</p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--ink-mid)", paddingTop: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "var(--ink-light)" }}>
            © {year} Co-Host Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
