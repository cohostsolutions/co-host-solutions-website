import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}>
      <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 28px" }}>
        <Link href="/" style={{ fontSize: "24px", fontWeight: "700", fontFamily: "var(--font-display)", color: "var(--crimson)" }}>
          Co-Host Solutions
        </Link>
        <nav style={{ display: "flex", gap: "32px" }}>
          <Link href="/#what-we-do" style={{ color: "var(--ink-mid)", fontSize: "15px" }}>
            What We Do
          </Link>
          <Link href="/#properties" style={{ color: "var(--ink-mid)", fontSize: "15px" }}>
            Properties
          </Link>
          <Link href="/resources" style={{ color: "var(--ink-mid)", fontSize: "15px" }}>
            Resources
          </Link>
          <Link href="/#contact" style={{ color: "var(--ink-mid)", fontSize: "15px" }}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
