'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Solutions() {
  useEffect(() => {
    const handleReveal = () => {
      const elements = document.querySelectorAll('.reveal:not(.in)');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
          el.classList.add('in');
        }
      });
    };

    window.addEventListener('scroll', handleReveal, { passive: true });
    handleReveal();
    [60, 200, 500].forEach((t) => setTimeout(handleReveal, t));

    return () => window.removeEventListener('scroll', handleReveal);
  }, []);

  return (
    <div className="bg-paper">
      <style jsx>{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal.in {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="absolute top-[-20%] right-[-8%] w-[620px] h-[620px] rounded-full bg-gradient-radial from-gold/10 to-transparent pointer-events-none z-0" />

        <div className="max-w-wrap mx-auto px-7 relative z-10 text-center max-w-3xl">
          <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gold mb-4">
            What we do
          </p>
          <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
            We run the whole thing. <span className="text-crimson italic font-700">You run your life.</span>
          </h1>
          <p className="text-lg md:text-lg leading-relaxed text-ink-mid">
            Co-Host Solutions is a complete short-term rental operation for your property. Not advice. Not software. We do the work, so the only thing you manage is what to do with your free time.
          </p>

          <div className="flex justify-center gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-crimson text-white font-bold text-base rounded transition-all hover:bg-crimson-dark hover:shadow-md hover:translate-y-[-2px]"
            >
              Book a free consultation <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid - 9 Cards */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-paper">
        <div className="max-w-wrap mx-auto px-7">
          <div className="mb-16 md:mb-20 text-center">
            <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gold mb-4 reveal">
              The full operation
            </p>
            <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl leading-tight text-ink max-w-2xl mx-auto mb-5 reveal">
              Everything your property needs. None of it on you.
            </h2>
            <p className="text-lg text-ink-mid max-w-2xl mx-auto reveal">
              Each of these is a job you would otherwise do yourself, or hire and manage someone else to do. We take all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '24/7 guest communication', desc: 'We answer every inquiry and message around the clock, in the guest\'s language, so no booking slips and no ping ever hits your phone.' },
              { title: 'Dynamic pricing', desc: 'We watch demand, seasons, and local events and move your rates to capture every peso the market will pay. You never open a calendar.' },
              { title: 'Real-time booking view', desc: 'Check your occupancy and booking rate any time you want from your owner dashboard. Or ignore it completely. Your choice.' },
              { title: 'Expense monitoring', desc: 'Cleaning, supplies, and turnover costs are tracked and reported transparently. You always see where the money goes.' },
              { title: 'Listing & marketing', desc: 'We build, optimize, and promote your listings and direct-booking channel, so your unit gets seen and booked without OTA dependence.' },
              { title: 'Check-in & turnovers', desc: 'Arrivals, departures, cleaning, and coordination all run through our team and trusted local crews. The unit resets on its own, to you.' },
              { title: 'Reviews & reputation', desc: 'We handle guest feedback and protect your rating, because a five-star history is what fills next month\'s calendar.' },
              { title: 'Monthly payout & report', desc: 'Every month, your income lands in your account with a clean report of bookings, revenue, and occupancy. No chasing, no spreadsheets.' },
              { title: 'OTA rescue', desc: 'Tired of rising OTA fees and rule changes? We shift your bookings toward channels you actually control, quietly and steadily.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-lg p-8 transition-all hover:translate-y-[-4px] hover:shadow-md hover:border-border-dark reveal">
                <h3 className="font-display font-700 text-xl text-ink mb-3">{service.title}</h3>
                <p className="text-base text-ink-mid leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 md:py-24 bg-paper">
        <div className="max-w-wrap mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="reveal">
              <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gold mb-4">
                Hands-off, not blind
              </p>
              <h2 className="font-display font-800 text-3xl md:text-4xl leading-tight text-ink mb-5">
                Full transparency, zero effort.
              </h2>
              <p className="text-lg leading-relaxed text-ink-mid mb-8">
                Hands-off does not mean out of the loop. Your owner dashboard is always there when you want a look, and your monthly report brings the numbers to you when you don't.
              </p>

              <ul className="space-y-4">
                {[
                  { title: 'Real-time booking rate.', desc: 'See occupancy and upcoming stays whenever curiosity strikes.' },
                  { title: 'Expense monitoring.', desc: 'Every cost tracked and visible, nothing buried.' },
                  { title: 'Monthly payout & report.', desc: 'Income and performance, delivered to you like clockwork.' },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-crimson flex items-center justify-center flex-shrink-0 mt-1">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <div>
                      <strong className="text-ink block text-base">{item.title}</strong>
                      <span className="text-ink-mid text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal">
              <div className="bg-surface border border-border rounded-lg p-8 shadow-lg">
                <h3 className="font-body font-bold text-sm uppercase tracking-[0.14em] text-gold mb-6">
                  This month at a glance
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-paper border border-border rounded-lg p-5">
                    <div className="font-display font-800 text-3xl text-crimson leading-none">86%</div>
                    <div className="text-xs text-ink-muted uppercase tracking-[0.08em] mt-2">Occupancy</div>
                  </div>
                  <div className="bg-paper border border-border rounded-lg p-5">
                    <div className="font-display font-800 text-3xl text-crimson leading-none">24</div>
                    <div className="text-xs text-ink-muted uppercase tracking-[0.08em] mt-2">Nights booked</div>
                  </div>
                </div>

                <div className="border-t border-dashed border-border-dark pt-4 flex items-center gap-3 text-sm text-ink-mid">
                  <div className="w-2 h-2 rounded-full bg-green-600" />
                  <span><strong className="text-ink">Payout sent.</strong> Report in your inbox. Nothing needed from you.</span>
                </div>

                <p className="text-xs text-ink-light text-center mt-4">Illustrative dashboard. Your real numbers, your unit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-white to-paper">
        <div className="max-w-wrap mx-auto px-7">
          <div className="mb-16 md:mb-20">
            <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gold mb-4 reveal">
              From first call to fully managed
            </p>
            <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl leading-tight text-ink mb-5 reveal">
              One week to hands-off.
            </h2>
            <p className="text-lg text-ink-mid reveal">
              Here is the entire path from your first conversation to a unit that runs without you.
            </p>
          </div>

          <div className="relative mt-6">
            <div className="absolute left-7 top-5 bottom-5 w-0.5 bg-gradient-to-b from-gold to-crimson hidden md:block" />

            <div className="space-y-6">
              {[
                { num: 1, when: 'Day 1', title: 'Free Consultation Call', desc: 'Book a 30-minute call with Coco. We look at your property, your goals, and whether the partnership makes sense. No commitment.' },
                { num: 2, when: 'Within 24 hours', title: 'Strategic Improvement Plan, Proposal and Quote', desc: 'You get a custom proposal: revenue projections for your specific unit, strategies on how to improve the unit, the full scope of what we\'ll manage, and clear pricing.' },
                { num: 3, when: 'Week 1', title: 'Onboarding', desc: 'Once you sign, we move fast. Listing audit, professional photoshoot, co-host setup, pricing loaded, dashboard access granted. You\'re in the system.' },
                { num: 4, when: 'Weeks 2–3', title: 'Production', desc: 'Rebuilt listings. Social media launched. OTA channels live. Full content strategy running.' },
                { num: 5, when: 'Ongoing', title: 'Fully Managed', desc: 'We run the full guest cycle end to end: marketing, guests, turnovers, maintenance coordination. You monitor via your dashboard.' },
                { num: 6, when: 'Every month', title: 'Payout & Monthly Report', desc: 'You wait for your payout and your monthly performance report. That\'s the whole job.' },
              ].map((step) => (
                <div key={step.num} className="grid grid-cols-[80px_1fr] md:grid-cols-[56px_1fr] gap-6 md:gap-6 relative reveal">
                  <div className="flex justify-center">
                    <div className="w-14 h-14 md:w-14 md:h-14 rounded-full bg-surface border-2 border-gold flex items-center justify-center font-display font-800 text-xl text-crimson shadow-sm relative z-10">
                      {step.num}
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="font-body font-bold text-xs uppercase tracking-[0.08em] text-gold-dark block mb-1">
                      {step.when}
                    </span>
                    <h3 className="font-display font-700 text-lg md:text-xl text-ink mb-2">{step.title}</h3>
                    <p className="text-base text-ink-mid leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 md:py-24 bg-gold-pale" id="pricing">
        <div className="max-w-wrap mx-auto px-7">
          <div className="mb-16 md:mb-20 text-center">
            <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gold mb-4 reveal">
              One flat model, nationwide
            </p>
            <h2 className="font-display font-800 text-3xl md:text-4xl lg:text-5xl leading-tight text-ink mb-5 reveal">
              Honest pricing. You keep the majority.
            </h2>
            <p className="text-lg text-ink-mid max-w-2xl mx-auto reveal">
              The same structure everywhere we operate. No tiers to decode, no surprises, no renewal fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-3xl mx-auto mb-8">
            {[
              {
                label: 'One-time onboarding',
                price: '₱10,000–₱30,000',
                priceNote: 'Based on location and size',
                desc: 'Full listing rebuild, professional photoshoot, co-host setup, pricing strategy & comms templates, annual refresh included.',
                features: [
                  'Full listing rebuild & optimization',
                  'Professional photoshoot',
                  'Social media & OTA setup',
                  'Pricing strategy & comms templates',
                  'Annual refresh included',
                ],
              },
              {
                label: 'Monthly management',
                price: '20%',
                priceNote: 'of gross bookings',
                desc: 'Full hands-off management. We only earn when your property earns.',
                features: [
                  '24/7 guest communication',
                  'Marketing & listing management',
                  'Dynamic pricing & calendar',
                  'Review & reputation management',
                  'Monthly payout & performance report',
                ],
                featured: true,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-10 transition-all reveal ${
                  card.featured
                    ? 'bg-surface border-2 border-crimson shadow-md'
                    : 'bg-surface border border-border'
                }`}
              >
                <p className="font-body font-bold text-xs uppercase tracking-[0.12em] text-gold mb-3">
                  {card.label}
                </p>
                <div className="mb-6">
                  <div className="font-display font-800 text-5xl text-crimson leading-none mb-1">
                    {card.price}
                  </div>
                  <div className="text-base text-ink-muted font-body">{card.priceNote}</div>
                </div>
                <p className="text-base text-ink-mid mb-6 pb-6 border-b border-border">
                  {card.desc}
                </p>
                <ul className="space-y-3 list-none">
                  {card.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-base text-ink-mid">
                      <span className="w-5 h-5 rounded-full bg-crimson-bg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="w-3 h-3 text-crimson" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center font-display italic text-xl text-crimson reveal">
            Transparent. No hidden fees. You keep 80% of every booking. We keep the work.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-crimson text-white py-24 md:py-32 text-center">
        <div className="max-w-wrap mx-auto px-7">
          <h2 className="font-display font-800 text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 max-w-4xl mx-auto reveal">
            Ready to stop managing and start owning?
          </h2>
          <p className="text-xl md:text-2xl text-white/82 mb-10 max-w-2xl mx-auto reveal">
            Book a free consultation. We will show you exactly what hands-off looks like for your property.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-white font-bold text-lg rounded transition-all hover:bg-gold-dark hover:shadow-md hover:translate-y-[-2px] reveal"
          >
            Book a free consultation <span>→</span>
          </Link>
          <p className="text-base text-white/62 mt-8 reveal">
            Serving property owners nationwide · Active in CDO, Pasay & Bohol
          </p>
        </div>
      </section>
    </div>
  );
}
