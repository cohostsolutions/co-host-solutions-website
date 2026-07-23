'use client';

const services = [
  {
    name: 'Setup',
    desc: 'We prepare your unit for success from the ground up.',
    items: ['Renovation consultation', 'Interior styling guidance', 'Professional photography', 'Multi-platform listing creation'],
  },
  {
    name: 'Management',
    desc: 'Every booking, message, and turnover — handled.',
    items: ['Guest communication 24/7', 'Check-in coordination', 'Cleaning & turnover scheduling', 'Calendar synchronization'],
  },
  {
    name: 'Optimization',
    desc: 'We maximize your revenue through smart, data-driven adjustments.',
    items: ['Dynamic pricing adjustments', 'Review management', 'Monthly performance reports', 'Airbnb SEO optimization'],
  },
  {
    name: 'Marketing',
    desc: 'Your property gets noticed across all the right channels.',
    items: ['OTA listing optimization', 'Social media exposure', 'Digital advertising (optional)', 'Personalized guidebooks'],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream px-24 py-32">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6">
          <div className="w-8 h-px bg-soft-gold"></div>
          What We Do
          <div className="w-8 h-px bg-soft-gold"></div>
        </div>
        <h2 className="font-serif text-6xl font-light">
          Done-for-you <em className="italic text-deep-red">property</em><br/>management
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-px bg-light-beige">
        {services.map((service) => (
          <div key={service.name} className="bg-cream p-10 hover:bg-white transition group cursor-pointer relative">
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-deep-red scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            <h3 className="font-serif text-2xl font-bold text-dark mb-4">{service.name}</h3>
            <p className="text-sm leading-7 text-text/60 mb-6 font-light">{service.desc}</p>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="text-xs text-text/70 pb-2 border-b border-soft-gold/15 flex items-center gap-2">
                  <span className="text-soft-gold font-light">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
