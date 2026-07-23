'use client';

const steps = [
  { num: '1', title: 'Confirm the Proposal', desc: 'Review and confirm the partnership structure. We align on goals, unit details, and the setup plan together.' },
  { num: '2', title: 'Sign & Begin Setup', desc: 'Formalize the agreement and we begin preparing your unit — styling, photography, and platform listings.' },
  { num: '3', title: 'We Handle the Rest', desc: 'Go live within 7–14 days. Monthly payouts and performance reports follow every cycle.' },
];

export function Process() {
  return (
    <section id="how" className="bg-cream px-24 py-32">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6">
          <div className="w-8 h-px bg-soft-gold"></div>
          How It Works
          <div className="w-8 h-px bg-soft-gold"></div>
        </div>
        <h2 className="font-serif text-6xl font-light">
          Three steps to<br/><em className="italic text-deep-red">passive income.</em>
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-12 relative">
        <div className="absolute top-20 left-1/3 right-1/3 h-px bg-gradient-to-r from-soft-gold via-warm-beige to-soft-gold"></div>
        {steps.map((step) => (
          <div key={step.num} className="text-center relative">
            <div className="w-16 h-16 rounded-full bg-deep-red text-white font-serif text-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
              {step.num}
            </div>
            <h3 className="font-serif text-2xl font-bold text-dark mb-3">{step.title}</h3>
            <p className="text-sm leading-6 text-text/60 font-light">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
