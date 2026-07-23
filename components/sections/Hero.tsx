'use client';

import Link from 'next/link';

export function Hero() {
  return (
    <section className="grid grid-cols-2 min-h-screen items-center pt-20 overflow-hidden">
      <div className="px-24 py-24 relative z-20">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6">
          <div className="w-10 h-px bg-soft-gold"></div>
          Optimized Hosting. Maximum Bookings.
        </div>

        <h1 className="font-serif text-7xl font-light leading-tight text-dark mb-8">
          Your unit,<br/><em className="italic text-deep-red">earning</em> while<br/>you rest.
        </h1>

        <p className="text-lg leading-8 text-text/70 max-w-md mb-12 font-light">
          Co-Host Solutions manages your short-term rental from listing to check-out — so you receive monthly income without the daily work.
        </p>

        <div className="flex gap-4 items-center">
          <Link href="#contact" className="bg-deep-red text-white px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-crimson transition">
            Let's Talk
          </Link>
          <Link href="#services" className="text-text px-8 py-4 border border-warm-beige text-xs uppercase tracking-widest font-medium hover:border-soft-gold hover:text-deep-red transition">
            What We Do
          </Link>
        </div>
      </div>

      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-transparent to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
          alt="Luxury rental property"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-12 -left-8 z-20 bg-dark text-white p-6 max-w-xs">
          <div className="font-serif text-4xl font-light text-soft-gold leading-none">80%+</div>
          <div className="text-xs uppercase tracking-widest text-light-beige mt-1">Average Occupancy Rate</div>
        </div>
      </div>
    </section>
  );
}
