'use client';

export function About() {
  return (
    <section id="about" className="grid grid-cols-2 gap-0 min-h-80">
      <div className="relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80" alt="Team" className="w-full h-full object-cover" />
        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80" alt="Interior" className="absolute bottom-12 -right-6 w-7/12 border-8 border-cream shadow-2xl" />
      </div>

      <div className="bg-dark text-white px-20 py-24 flex flex-col justify-center">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6 w-fit">
          <div className="w-8 h-px bg-soft-gold"></div>
          Who We Are
        </div>

        <h2 className="font-serif text-5xl font-light mb-6">
          Built by people<br/>who've <em className="italic text-soft-gold">done this.</em>
        </h2>

        <p className="text-lg leading-8 text-warm-beige font-light mb-6">
          Co-Host Solutions was founded by Jasmin Cornilla — a seasoned short-term rental operator with hands-on experience managing 50+ listings remotely across Bali and 30+ listings on-site across the Philippines, with hotel and resort partnerships nationwide.
        </p>

        <p className="text-lg leading-8 text-warm-beige font-light mb-8">
          Our team is fully Filipino, deeply familiar with local travel behavior, and built around one mission: make short-term rentals simple, profitable, and stress-free for property owners.
        </p>

        <div className="flex gap-10 pt-8 border-t border-soft-gold/20">
          <div>
            <div className="font-serif text-4xl font-light text-soft-gold">80+</div>
            <div className="text-xs uppercase tracking-widest text-warm-beige mt-1">Properties Managed</div>
          </div>
          <div>
            <div className="font-serif text-4xl font-light text-soft-gold">4.9★</div>
            <div className="text-xs uppercase tracking-widest text-warm-beige mt-1">Average Guest Rating</div>
          </div>
          <div>
            <div className="font-serif text-4xl font-light text-soft-gold">CDO·Cebu·Manila</div>
            <div className="text-xs uppercase tracking-widest text-warm-beige mt-1">Cities We Serve</div>
          </div>
        </div>
      </div>
    </section>
  );
}
