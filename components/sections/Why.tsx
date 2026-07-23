'use client';

const reasons = [
  { icon: '🏠', title: 'Proven Systems', text: 'Built from experience running 80%+ occupancy units across multiple markets.' },
  { icon: '🇵🇭', title: 'Filipino-First Team', text: 'Deeply familiar with local travel behavior, guest expectations, and market timing.' },
  { icon: '📊', title: 'Full Transparency', text: 'Monthly reports showing exactly what was earned, spent, and recommended.' },
  { icon: '✨', title: 'No Hidden Fees', text: 'What you see is what you get. Clear partnership structure from day one.' },
];

export function Why() {
  return (
    <section className="bg-dark text-white px-24 py-32">
      <div className="grid grid-cols-2 gap-24 items-center">
        <div>
          <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6">
            <div className="w-8 h-px bg-soft-gold"></div>
            Why Us
          </div>
          <h2 className="font-serif text-5xl font-light mb-8">
            We win only<br/>when <em className="italic text-soft-gold">you</em> win.
          </h2>
          <p className="text-lg leading-8 text-warm-beige font-light">
            Our commission-based model means our success is directly tied to yours. No hidden fees. No upfront monthly charges. We earn only when your unit earns.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-soft-gold/15">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-dark p-8 hover:bg-dark/80 transition">
              <div className="text-2xl mb-3">{reason.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-sm leading-6 text-warm-beige font-light">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
