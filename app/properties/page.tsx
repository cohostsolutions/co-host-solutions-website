'use client';

import Link from 'next/link';

export default function Properties() {
  return (
    <div className="bg-paper min-h-screen pt-16 pb-24">
      <div className="max-w-wrap mx-auto px-7">
        <section className="relative overflow-hidden pt-12 pb-12">
          <div className="absolute top-[-20%] right-[-8%] w-[620px] h-[620px] rounded-full bg-gradient-radial from-gold/10 to-transparent pointer-events-none z-0" />

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-20">
            <p className="font-body font-bold text-xs uppercase tracking-[0.18em] text-gold mb-4">
              Properties
            </p>
            <h1 className="font-display font-800 text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-ink mb-6">
              Coming Soon
            </h1>
            <p className="text-lg leading-relaxed text-ink-mid mb-8">
              We're building something great. In the meantime,{' '}
              <Link href="/contact" className="text-crimson font-bold hover:underline">
                book a consultation
              </Link>{' '}
              to discuss your property.
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-crimson text-white font-bold text-base rounded transition-all hover:bg-crimson-dark hover:shadow-md hover:translate-y-[-2px] mt-6"
            >
              Back to home <span>→</span>
            </Link>
          </div>
        </section>
      </div>

      {/* CTA Band */}
      <section className="bg-crimson text-white mt-24 py-24 md:py-32 text-center">
        <div className="max-w-wrap mx-auto px-7">
          <h2 className="font-display font-800 text-4xl md:text-5xl leading-tight mb-6 max-w-3xl mx-auto">
            Want your property here?
          </h2>
          <p className="text-xl text-white/82 mb-10 max-w-2xl mx-auto">
            Book a free consultation and let's talk about bringing your unit into the Co-Host family.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gold text-white font-bold text-lg rounded transition-all hover:bg-gold-dark hover:shadow-md hover:translate-y-[-2px]"
          >
            Book a free consultation <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
