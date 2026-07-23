'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-crimson-dark text-white">
      <div className="max-w-wrap mx-auto px-7 py-16">
        <div className="grid grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <Image
              src="/logo-cohost-horizontal.png"
              alt="Co-Host Solutions"
              width={140}
              height={50}
              className="h-12 w-auto mb-5 brightness-0 invert opacity-95"
            />
            <p className="text-sm leading-relaxed text-white/70 max-w-xs mb-4">
              We run your short-term rental end to end so you never touch a guest message again. End to end property management services for owners who want a passive investment, not a second job.
            </p>
            <p className="font-display italic text-gold-light text-sm">
              Optimized Hosting · Elevated Stays · Maximum Bookings
            </p>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-light mb-5">Explore</h4>
            <ul className="space-y-3 list-none">
              <li><Link href="/" className="text-sm text-white/72 hover:text-white transition">Home</Link></li>
              <li><Link href="/solutions" className="text-sm text-white/72 hover:text-white transition">What We Do</Link></li>
              <li><Link href="/properties" className="text-sm text-white/72 hover:text-white transition">Properties</Link></li>
              <li><Link href="/resources" className="text-sm text-white/72 hover:text-white transition">Resources</Link></li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-light mb-5">Get started</h4>
            <ul className="space-y-3 list-none">
              <li><Link href="/contact" className="text-sm text-white/72 hover:text-white transition">Book a consultation</Link></li>
              <li><Link href="/solutions" className="text-sm text-white/72 hover:text-white transition">How it works</Link></li>
              <li><Link href="/solutions#pricing" className="text-sm text-white/72 hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gold-light mb-5">Connect</h4>
            <p className="text-sm text-white/70 mb-5">
              Cagayan de Oro City<br />
              +63 995 819 3671<br />
              office@co-hostsolutions.com<br />
              8AM - 5PM Mon - Sat
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:office@co-hostsolutions.com"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-gold hover:border-gold hover:text-white transition hover:translate-y-[-2px]"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  <path d="M22 7l-10 6L2 7"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/co.hostsolutions"
                target="_blank"
                rel="noopener"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-gold hover:border-gold hover:text-white transition hover:translate-y-[-2px]"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
                </svg>
              </a>
              <a
                href="https://facebook.com/co.hostsolutions"
                target="_blank"
                rel="noopener"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-gold hover:border-gold hover:text-white transition hover:translate-y-[-2px]"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.4v1.7h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"></path>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@co.hostsolutions"
                target="_blank"
                rel="noopener"
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-gold hover:border-gold hover:text-white transition hover:translate-y-[-2px]"
                aria-label="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M16.5 3c.3 2.1 1.5 3.6 3.5 3.8v2.3c-1.2.1-2.4-.2-3.5-.8v5.9c0 3-2.1 5.3-5 5.3a5 5 0 0 1-5-5c0-2.9 2.3-5 5.2-5 .3 0 .5 0 .8.1v2.4a2.6 2.6 0 0 0-3.5 2.5 2.5 2.5 0 0 0 5 .1V3h2.5z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/12 pt-6 text-center text-sm text-white/55">
          © 2026 Co-Host Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
