'use client';

const testimonials = [
  {
    stars: 5,
    text: '"We didn\'t even lift a finger and now have a revenue-generating place we can come home to anytime. We\'re already getting a second unit."',
    author: 'Property Owner',
    location: 'Mesaverte Residences, Cagayan de Oro',
  },
  {
    stars: 5,
    text: '"The team is incredibly responsive. Guests love the experience, reviews have been amazing, and the monthly reports keep us in the loop without any stress."',
    author: 'Condo Owner',
    location: 'Cebu City',
  },
  {
    stars: 5,
    text: '"I was hesitant at first, but the Co-Host Solutions team made it seamless. Our unit went from vacant to consistently booked within two weeks of going live."',
    author: 'First-time Host',
    location: 'Manila',
  },
];

export function Testimonials() {
  return (
    <section className="bg-deep-red text-white px-24 py-32">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6">
          <div className="w-8 h-px bg-soft-gold"></div>
          What Owners Say
          <div className="w-8 h-px bg-soft-gold"></div>
        </div>
        <h2 className="font-serif text-6xl font-light">
          Real owners. <em className="italic text-soft-gold">Real results.</em>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-px bg-white/10">
        {testimonials.map((testimonial) => (
          <div key={testimonial.author} className="bg-deep-red p-12 hover:bg-crimson transition">
            <div className="text-soft-gold text-lg tracking-widest mb-6">★★★★★</div>
            <p className="font-serif text-xl font-light italic mb-8 leading-8 text-white/90">
              {testimonial.text}
            </p>
            <div className="text-xs uppercase tracking-widest font-medium text-soft-gold">
              {testimonial.author}
            </div>
            <div className="text-xs text-white/40 mt-1">{testimonial.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
