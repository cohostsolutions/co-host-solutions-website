'use client';

const team = [
  {
    name: 'Jasmin "Coco" Cornilla',
    role: 'Account Manager',
    bio: 'Your main point of contact. Tracks ROI, reports, and goals. Founder with 80+ properties under management across the Philippines and Bali.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
  {
    name: 'Carlos Arce II',
    role: 'Virtual Front Desk',
    bio: 'Guest messages, reviews, and rebookings handled with care. Available around the clock to ensure every guest inquiry is addressed promptly.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Don & Keyt Ipanag',
    role: 'Housekeeping Team',
    bio: 'Manages a trained and reliable housekeeping crew, ensuring every unit is guest-ready at every turnover — every single time.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
  },
];

export function Team() {
  return (
    <section id="team" className="bg-cream px-24 py-32">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-soft-gold mb-6">
          <div className="w-8 h-px bg-soft-gold"></div>
          Our Team
          <div className="w-8 h-px bg-soft-gold"></div>
        </div>
        <h2 className="font-serif text-6xl font-light">
          Meet your <em className="italic text-deep-red">Co-Host</em> team
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <div className="relative w-40 h-40 mx-auto mb-6">
              <div className="absolute inset-0 border-2 border-soft-gold rounded-full -m-3"></div>
              <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
            </div>
            <div className="text-xs uppercase tracking-widest font-medium text-soft-gold mb-2">{member.role}</div>
            <h3 className="font-serif text-2xl font-bold text-dark mb-3">{member.name}</h3>
            <p className="text-sm leading-6 text-text/60 font-light">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
