import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Co-Host Solutions - Professional Airbnb Management",
  description:
    "Property management, done for you. We run your short-term rental end to end. You keep 80% of every booking. 80+ listings, 24/7 support.",
};

export default function Home() {
  return (
    <div className="cohost-site">
      {/* Header */}
      <header className="site-header" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="wrap nav">
          <a className="nav-logo" href="/">
            <img src="assets/logo-cohost-horizontal.png" alt="Co-Host Solutions" />
          </a>
          <ul className="nav-links">
            <li><a href="#solutions">How it works</a></li>
            <li><a href="#why">Why us</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a className="btn btn-primary" href="#contact">
              Book a free consultation
            </a>
          </div>
        </div>
      </header>

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
                <a className="btn btn-primary btn-lg" href="#contact">
                  Book a free consultation <span className="arrow">→</span>
                </a>
                <a className="btn btn-ghost btn-lg" href="#solutions">
                  See how it works
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
                src="./jasmin-logo-2--mrt17mi7-yxet.png"
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

      {/* What We Handle */}
      <section className="section-pad">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">The hands-off difference</span>
            <h2>You hand us the keys. We handle everything after.</h2>
            <p>
              One complete operation, run entirely by us. <br />
              Here is what leaves your plate the day you sign on.
            </p>
          </div>
          <div className="cards">
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Guest messages, 24/7</h3>
              <p>Every inquiry, question, and late-night message is answered by our team. You will never touch a guest thread again.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M3 3v18h18"></path>
                  <path d="M18 9l-5 5-3-3-4 4"></path>
                </svg>
              </div>
              <h3>Pricing that adjusts</h3>
              <p>We set and move your rates with demand and season, so the unit earns every night it can, without you touching a calendar.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                  <path d="M16 2v4M8 2v4M3 10h18"></path>
                </svg>
              </div>
              <h3>Bookings &amp; calendar</h3>
              <p>Availability, confirmations, and the whole booking flow run through us. Guests always book through your manager, never around you.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3>Check-in &amp; turnovers</h3>
              <p>Arrivals, departures, cleaning, and coordination are all managed. The unit resets itself, as far as you are concerned.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.6L5.7 21 8 14 2 9.4h7.6z"></path>
                </svg>
              </div>
              <h3>Reviews &amp; reputation</h3>
              <p>We manage feedback and keep your rating high, because your next booking depends on your last review.</p>
            </div>
            <div className="card reveal">
              <div className="card-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <path d="M2 10h20"></path>
                </svg>
              </div>
              <h3>Monthly payout &amp; report</h3>
              <p>Income lands in your account every month with a clear performance report. No chasing numbers, no bookkeeping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="section-pad bg-cream">
        <div className="wrap">
          <div className="split">
            <div className="reveal">
              <span className="eyebrow">The line that matters</span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,40px)", fontWeight: "800", margin: "14px 0 18px" }}>
                You will never touch a guest message again.
              </h2>
              <p style={{ fontSize: "17.5px", lineHeight: "1.65" }}>
                That is the whole point. We are operators first, marketers second, so we do not just list your property and disappear. We run it the way we run our own. The mental load that made you want out becomes ours.
              </p>
              <ul className="split-list">
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span>
                    <strong>We operate our own properties.</strong> We are not middlemen passing you to a call center or an agency.
                  </span>
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Everything is in house.</strong> We provide personal experience for you and your guests.
                  </span>
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span>
                    <strong>Every system is tested on ourselves first.</strong> No imported playbooks you become the experiment for.
                  </span>
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  <span>
                    <strong>One flat, honest model.</strong> You keep 80% of every booking. No surprises.
                  </span>
                </li>
              </ul>
            </div>
            <div className="reveal">
              <div className="ledger">
                <div className="ledger-head">
                  <div className="we">We handle</div>
                  <div className="you">You touch</div>
                </div>
                <div className="ledger-row">
                  <div className="we">Guest communication</div>
                  <div className="you none">Nothing</div>
                </div>
                <div className="ledger-row">
                  <div className="we">Listing &amp; marketing</div>
                  <div className="you none">Nothing</div>
                </div>
                <div className="ledger-row">
                  <div className="we">Pricing &amp; calendar</div>
                  <div className="you none">Nothing</div>
                </div>
                <div className="ledger-row">
                  <div className="we">Cleaning &amp; turnovers</div>
                  <div className="you none">Nothing</div>
                </div>
                <div className="ledger-row">
                  <div className="we">Reviews &amp; reputation</div>
                  <div className="you none">Nothing</div>
                </div>
                <div className="ledger-row">
                  <div className="we">Monthly reporting and Strategy</div>
                  <div className="you">Read it, if you want</div>
                </div>
                <div className="ledger-row">
                  <div className="we">Monthly payouts</div>
                  <div className="you">Check your bank</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section id="solutions" className="section-pad">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">From first call to fully managed</span>
            <h2>One week to hands-off.</h2>
            <p>Here is the entire path from your first conversation to a unit that runs without you.</p>
          </div>
          <div className="journey">
            <div className="journey-line"></div>
            <div className="step reveal">
              <div className="step-num">1</div>
              <div className="step-body">
                <span className="when">Day 1</span>
                <h3>Free Consultation Call</h3>
                <p>Book a 30-minute call with Coco. We look at your property, your goals, and whether the partnership makes sense. <b>No commitment.</b></p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">2</div>
              <div className="step-body">
                <span className="when">Within 24 hours</span>
                <h3>Strategic Improvement Plan, Proposal and Quote</h3>
                <p>You get a custom proposal: revenue projections for your specific unit, strategies on how to improve the unit, the full scope of what we'll manage, and clear pricing.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">3</div>
              <div className="step-body">
                <span className="when">Week 1</span>
                <h3>Onboarding</h3>
                <p>Once you sign, we move fast. Listing audit, professional photoshoot, co-host setup, pricing loaded, dashboard access granted. You're in the system.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">4</div>
              <div className="step-body">
                <span className="when">Weeks 2–3</span>
                <h3>Production</h3>
                <p>Rebuilt listings. Social media launched. OTA channels live. Full content strategy running.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">5</div>
              <div className="step-body">
                <span className="when">Ongoing</span>
                <h3>Fully Managed</h3>
                <p>We run the full guest cycle end to end: marketing, guests, turnovers, maintenance coordination. You monitor via your dashboard.</p>
              </div>
            </div>
            <div className="step reveal">
              <div className="step-num">6</div>
              <div className="step-body">
                <span className="when">Every month</span>
                <h3>Payout &amp; Monthly Report</h3>
                <p>You wait for your payout and your monthly performance report. That's the whole job.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-pad bg-gold-pale">
        <div className="wrap">
          <div className="section-head center reveal">
            <span className="eyebrow">One flat model, nationwide</span>
            <h2>Simple pricing. You keep the majority.</h2>
            <p>The same honest structure whether your property is in Cagayan de Oro, Pasay, Bohol, or anywhere in the Philippines.</p>
          </div>
          <div className="pricing">
            <div className="price-card reveal">
              <span className="price-tag-label">Onboarding fee</span>
              <div className="price-amount">
                ₱10,000–₱30,000
                <span>
                  <br />
                  Based on location and size
                </span>
              </div>
              <p className="price-desc">One-time setup includes full listing rebuild, professional photos, pricing strategy, and system configuration.</p>
              <ul className="price-list">
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Full listing rebuild &amp; optimization
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Professional photoshoot
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Social media &amp; OTA setup
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Pricing strategy &amp; comms templates
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Annual refresh included
                </li>
              </ul>
            </div>
            <div className="price-card feature reveal">
              <span className="price-tag-label">Monthly management</span>
              <div className="price-amount">
                20%
                <span> of gross bookings</span>
              </div>
              <p className="price-desc">Full hands-off management. We earn only when your property earns.</p>
              <ul className="price-list">
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  24/7 guest communication
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Marketing &amp; listing management
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Dynamic pricing &amp; calendar
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Review &amp; reputation management
                </li>
                <li>
                  <span className="check">
                    <svg viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Monthly payout &amp; performance report
                </li>
              </ul>
            </div>
          </div>
          <p className="price-keep reveal">Transparent. No hidden fees. You keep 80% of every booking. We keep the work.</p>
        </div>
      </section>

      {/* Founder Section */}
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
              <span className="eyebrow">Who we are</span>
              <h2 style={{ fontSize: "clamp(28px,3.6vw,42px)", fontWeight: "800", margin: "14px 0 22px" }}>
                We don't just market units. <span style={{ color: "var(--crimson)", fontStyle: "italic" }}>We operate them too.</span>
              </h2>
              <div style={{ fontSize: "16.5px", lineHeight: "1.7", marginBottom: "16px" }}>
                <p>
                  I'm Jasmin "Coco" Cornilla, founder of Co-Host Solutions. Before I started managing properties for other owners, I was managing 50+ listings remotely across Bali and 30+ on the ground across the Philippines, Cebu, Leyte, Manila, and Cagayan de Oro for different companies.
                </p>
                <p style={{ marginTop: "16px" }}>
                  I'm joined by Carlos Arce II, my real estate partner. Together we've lived in these markets, run these operations, and solved the problems you're about to hand us. Every system we use, every pricing call we make, every piece of content we produce it's all been tested on units we operate ourselves first.
                </p>
                <p style={{ marginTop: "16px" }}>
                  Every market in the Philippines has its own rhythm. We've operated in enough of them to know the difference, and to build a management approach that works for the city your unit is actually in.
                </p>
              </div>
              <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "22px", color: "var(--crimson)", margin: "0" }}>
                Coco
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
            One free consultation is all it takes to find out what your <br />
            property could do without you lifting a finger.
          </p>
          <a id="contact" className="btn btn-gold btn-lg reveal" href="https://calendly.com/cohost" target="_blank" rel="noopener noreferrer">
            Book a free consultation <span className="arrow">→</span>
          </a>
          <p className="cta-note reveal">Serving property owners nationwide · Active in CDO, Pasay &amp; Bohol</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <img src="assets/logo-cohost-horizontal.png" alt="Co-Host Solutions" />
            <p>Professional short-term rental management. We operate so you don't have to.</p>
            <p className="footer-tagline">80+ properties. 24/7 support. You keep 80%.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#solutions">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/">Guest Management</a></li>
              <li><a href="/">Property Optimization</a></li>
              <li><a href="/">Revenue Management</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:office@co-hostsolutions.com">office@co-hostsolutions.com</a></li>
              <li>Cagayan de Oro, Philippines</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Co-Host Solutions. All rights reserved.</p>
          <p>Privacy · Terms</p>
        </div>
      </footer>
    </div>
  );
}
