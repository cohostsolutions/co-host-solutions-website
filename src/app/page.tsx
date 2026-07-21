import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Co-Host Solutions - Professional Airbnb Management Philippines",
  description:
    "Property management, done for you. We run your short-term rental end to end. You keep 80% of every booking. 80+ listings, 24/7 support.",
};

export default function Home() {
  return (
    <div className="cohost-site">
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-accent"></div>
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Property management, done for you</span>
              <h1>
                Your property should fund your life, <span className="accent">not run it.</span>
              </h1>
              <p className="hero-sub">
                You own the property. We run everything else. From the first guest inquiry to the final turnover, Co-Host Solutions manages your short-term rental end to end, so you can focus on your real business.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="https://calendly.com/cohost" target="_blank" rel="noopener noreferrer">
                  Book a free consultation <span className="arrow">→</span>
                </a>
                <a className="btn btn-ghost btn-lg" href="/properties">
                  Learn how it works
                </a>
              </div>
              <div className="hero-proof">
                <div className="hero-proof-item">
                  <div className="hero-proof-num">80+</div>
                  <div className="hero-proof-label">
                    Listings ran across<br/>the Philippines &amp; Bali
                  </div>
                </div>
                <div className="hero-proof-item">
                  <div className="hero-proof-num">24/7</div>
                  <div className="hero-proof-label">
                    Guest support,<br/>never on your phone
                  </div>
                </div>
                <div className="hero-proof-item">
                  <div className="hero-proof-num">80%</div>
                  <div className="hero-proof-label">
                    Of every booking<br/>stays yours
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <img
                src="/assets/jasmin-logo-2--mrt17mi7-yxet.png"
                alt=""
                className="hero-card-seal"
                width="96"
                height="96"
              />
              <div className="hero-card">
                <h3>While you were busy</h3>
                <div className="phone-thread">
                  <div className="msg msg-in">
                    Hi! Is the unit available this weekend? 😊
                    <div className="msg-meta">Guest · 2:14 AM</div>
                  </div>
                  <div className="msg msg-out">
                    Yes it is. I can hold it for you now and send the booking link. Two nights?
                    <div className="msg-meta">Co-Host · 2:14 AM</div>
                  </div>
                  <div className="msg msg-in">
                    Perfect, booking now. Thank you!
                    <div className="msg-meta">Guest · 2:16 AM</div>
                  </div>
                </div>
                <div className="hero-card-foot">
                  <span className="dot"></span>
                  <span>
                    <strong>Booked while you slept.</strong> You never saw a single message.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Quote Section */}
      <section className="section-pad bg-crimson pain">
        <div className="wrap">
          <p className="pain-quote reveal">
            <span className="q">"</span>My unit runs my life instead of the other way around.<span className="q">"</span>
          </p>
          <p className="pain-sub reveal">
            The endless messages. The 2 AM inquiries. The turnovers, the pricing, <br />
            the reviews. You didn't buy a property to become a <br />
            full-time customer service representative. So stop being one.
          </p>
        </div>
      </section>

      {/* Quick Value Props */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">What sets us apart</span>
            <h2>Three promises</h2>
          </div>
          <div className="cards">
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>We operate our own units</h3>
              <p>Not a call center or agency. We run properties ourselves, so every system works because we use it.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>You never touch a guest message</h3>
              <p>24/7 support means you're completely hands-off. Bookings, inquiries, issues—we handle it all.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <path d="M2 10h20"></path>
                </svg>
              </div>
              <h3>You keep 80% of every booking</h3>
              <p>No surprises. One flat model nationwide. We earn when you do, and we only take 20%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Intro */}
      <section className="section-pad bg-cream">
        <div className="wrap">
          <div className="founder">
            <div className="reveal">
              <div
                style={{
                  display: "block",
                  width: "100%",
                  aspectRatio: "5/6",
                  borderRadius: "14px",
                  overflow: "hidden",
                  background: "linear-gradient(135deg,#7A1C2E,#9B2540)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                {/* Placeholder for Coco's photo */}
              </div>
            </div>
            <div className="reveal">
              <span className="eyebrow">Meet Coco</span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", fontWeight: "800", margin: "14px 0 22px" }}>
                We operate so <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>you don't have to.</span>
              </h2>
              <p style={{ fontSize: "16.5px", lineHeight: "1.7", marginBottom: "16px" }}>
                Jasmin "Coco" Cornilla has managed 80+ properties across the Philippines and Bali. She doesn't just market units—she operates them. Every system we use has been tested on properties we own and manage ourselves.
              </p>
              <p style={{ fontSize: "16.5px", lineHeight: "1.7" }}>
                Ready to see what your property could earn without running your life?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-pad bg-crimson cta-band">
        <div className="wrap">
          <h2 className="reveal">Get your time back</h2>
          <p className="reveal">
            One free consultation is all it takes to find out what your property could do.
          </p>
          <a className="btn btn-gold btn-lg reveal" href="https://calendly.com/cohost" target="_blank" rel="noopener noreferrer">
            Book a free consultation <span className="arrow">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
