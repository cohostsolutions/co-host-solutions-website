'use client';

export function CTA() {
  return (
    <section id="contact" className="bg-dark text-white px-24 py-32 text-center relative overflow-hidden">
      <div className="absolute inset-0 radial-gradient opacity-10 pointer-events-none"></div>
      <div className="relative z-10">
        <div className="text-xs uppercase tracking-widest font-medium text-soft-gold mb-6">Ready to Start?</div>

        <h2 className="font-serif text-7xl font-light mb-6 leading-tight">
          Your unit doesn't<br/>have to stay <em className="italic text-soft-gold">idle.</em>
        </h2>

        <p className="text-xl text-warm-beige max-w-2xl mx-auto mb-12 font-light leading-8">
          Let's make it work. We're ready when you are.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a href="mailto:office@co-hostsolutions.com" className="bg-deep-red text-white px-10 py-4 text-xs uppercase tracking-widest font-medium hover:bg-crimson transition">
            Email Us Today
          </a>
          <a href="tel:+639958193671" className="text-light-beige px-8 py-4 border border-soft-gold/30 text-xs uppercase tracking-widest font-medium hover:border-soft-gold transition">
            +63 995 819 3671
          </a>
        </div>

        <div className="flex gap-12 justify-center flex-wrap">
          <a href="mailto:office@co-hostsolutions.com" className="flex items-center gap-2 text-sm text-warm-beige hover:text-soft-gold transition">
            <span>✉</span> office@co-hostsolutions.com
          </a>
          <a href="https://www.co-hostsolutions.com" target="_blank" className="flex items-center gap-2 text-sm text-warm-beige hover:text-soft-gold transition">
            <span>🌐</span> www.co-hostsolutions.com
          </a>
          <div className="flex items-center gap-2 text-sm text-warm-beige">
            <span>📍</span> Cagayan de Oro · Cebu · Manila
          </div>
        </div>
      </div>
    </section>
  );
}
