'use client';

export function CaseStudy() {
  return (
    <section className="grid grid-cols-2 gap-0 bg-white">
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80" alt="Mesaverte Residences" className="w-full h-full object-cover" />
        <div className="absolute -top-6 -right-6 bg-dark text-white p-8 text-center">
          <div className="font-serif text-5xl font-light text-soft-gold">4.9</div>
          <div className="text-xs uppercase tracking-widest text-light-beige mt-2">★ Guest Rating</div>
        </div>
      </div>

      <div className="p-24 flex flex-col justify-center">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6 w-fit">
          <div className="w-8 h-px bg-soft-gold"></div>
          Case Study
        </div>

        <h2 className="font-serif text-4xl font-light text-dark mb-8">
          Mesaverte Residences,<br/>Cagayan de Oro
        </h2>

        <div className="space-y-6 mb-8">
          {[
            'Before: Vacant, fully furnished unit with no listing and zero income.',
            'After: 80% average occupancy within the first season of listing.',
            '₱30,000–₱40,000 monthly gross income consistently generated.',
            '4.9★ guest rating across Airbnb, Booking.com, and direct bookings.',
          ].map((result, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-5 h-5 bg-deep-red flex-shrink-0 flex items-center justify-center">
                <svg className="w-3 h-3 stroke-white" fill="none" viewBox="0 0 10 10" strokeWidth={3}>
                  <polyline points="1,5 4,8 9,2"/>
                </svg>
              </div>
              <p className="text-text leading-7">{result}</p>
            </div>
          ))}
        </div>

        <div className="border-l-4 border-soft-gold bg-cream p-6">
          <p className="font-serif text-xl italic text-dark leading-8 mb-4">
            "We didn't even lift a finger and we now have a revenue generating place that we can come home to anytime. Now we're getting a second unit!"
          </p>
          <div className="text-xs uppercase tracking-widest text-warm-beige">— Unit Owner, Mesaverte Residences CDO</div>
        </div>
      </div>
    </section>
  );
}
