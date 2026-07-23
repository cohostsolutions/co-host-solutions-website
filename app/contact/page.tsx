'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Contact() {
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

    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      window.removeEventListener('scroll', handleReveal);
      document.head.removeChild(script);
    };
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

      {/* Contact Section */}
      <section className="py-20 md:py-24">
        <div className="max-w-wrap mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 items-start">
            {/* Left: Contact Info */}
            <div className="reveal">
              <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gold mb-4">
                Book a free consultation
              </p>
              <h1 className="font-display font-800 text-3xl md:text-4xl leading-tight text-ink mb-5">
                Let's find out what your property could do without you.
              </h1>
              <p className="text-lg leading-relaxed text-ink-mid mb-8 max-w-xl">
                One call. No cost, no pressure. Tell us about your property and we will show you exactly what fully hands-off management would look like, and what it could earn.
              </p>

              {/* Expectations List */}
              <ul className="space-y-4 mb-8">
                {[
                  { num: '1', title: 'You tell us about the unit', desc: 'Where it is, what it is, and what is draining your time right now.' },
                  { num: '2', title: 'We map the opportunity', desc: 'We share how we would run it and what hands-off looks like for you.' },
                  { num: '3', title: 'You decide, no pressure', desc: 'If it is a fit, we start onboarding. If not, you keep the insights.' },
                ].map((item) => (
                  <li key={item.num} className="flex gap-4 pb-4 border-b border-border last:border-b-0">
                    <span className="w-7 h-7 rounded-full bg-crimson-bg text-crimson font-display font-800 text-sm flex items-center justify-center flex-shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <strong className="text-ink font-bold block text-base">{item.title}</strong>
                      <span className="text-ink-mid text-sm">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Contact Channels */}
              <div className="border-t border-border pt-7">
                <h4 className="font-body font-bold text-xs uppercase tracking-[0.1em] text-gold-dark mb-4">
                  Or reach us directly
                </h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:office@co-hostsolutions.com"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-border-dark rounded-full text-sm font-bold text-ink-mid hover:border-crimson hover:text-crimson hover:bg-crimson-bg transition"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M22 7l-10 6L2 7"></path>
                    </svg>
                    Email
                  </a>
                  <a
                    href="https://instagram.com/co.hostsolutions"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-border-dark rounded-full text-sm font-bold text-ink-mid hover:border-crimson hover:text-crimson hover:bg-crimson-bg transition"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                      <circle cx="12" cy="12" r="4"></circle>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
                    </svg>
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/co.hostsolutions"
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 px-4 py-3 border border-border-dark rounded-full text-sm font-bold text-ink-mid hover:border-crimson hover:text-crimson hover:bg-crimson-bg transition"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"></path>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Calendly */}
            <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-lg reveal">
              <div className="px-7 py-8 border-b border-border">
                <h3 className="font-display font-800 text-2xl text-ink mb-2">Pick a time that works for you</h3>
                <p className="text-sm text-ink-muted">Book your free 30-minute assessment call directly on the calendar below.</p>
              </div>
              <div className="overflow-auto" style={{ height: '700px' }}>
                <iframe
                  src="https://calendly.com/office-co-hostsolutions/assessment-call?hide_gdpr_banner=1&primary_color=7A1C2E"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ minHeight: '700px' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Row */}
      <section className="bg-gold-pale py-16 md:py-20">
        <div className="max-w-wrap mx-auto px-7">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Free, no pressure', desc: 'The consultation costs nothing and commits you to nothing. Worst case, you walk away with a clearer picture of your unit.' },
              { title: 'Operators, not agents', desc: 'You will be talking to people who run their own properties, not a sales desk reading a script.' },
              { title: 'Nationwide', desc: 'Wherever your property is in the Philippines, we can talk. We are active in CDO, Pasay, and Bohol and growing.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface border border-border rounded-lg p-8 text-center transition-all hover:translate-y-[-4px] hover:shadow-md reveal">
                <h3 className="font-display font-700 text-xl text-ink mb-3">{item.title}</h3>
                <p className="text-base text-ink-mid leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
