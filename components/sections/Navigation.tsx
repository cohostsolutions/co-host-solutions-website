'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-16 py-5 bg-cream/92 backdrop-blur-md border-b border-soft-gold/20 transition-shadow">
      <Link href="/" className="flex items-center gap-3">
        <svg className="w-9 h-9" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(30,30)">
            <ellipse rx="8" ry="16" fill="#CBAF6E" transform="rotate(0)"/>
            <ellipse rx="8" ry="16" fill="#CBAF6E" transform="rotate(60)"/>
            <ellipse rx="8" ry="16" fill="#CBAF6E" transform="rotate(120)"/>
            <ellipse rx="8" ry="16" fill="#9B1C31" transform="rotate(30)" opacity="0.5"/>
            <ellipse rx="8" ry="16" fill="#9B1C31" transform="rotate(90)" opacity="0.5"/>
            <ellipse rx="8" ry="16" fill="#9B1C31" transform="rotate(150)" opacity="0.5"/>
            <circle r="5" fill="#2C2418"/>
          </g>
        </svg>
        <div className="text-xs font-medium tracking-widest leading-tight">
          <div>CO-HOST</div>
          <div className="bg-deep-red text-white px-1 font-bold">SOLUTIONS</div>
        </div>
      </Link>

      <ul className="hidden lg:flex items-center gap-10 list-none">
        <li><Link href="#about" className="text-xs uppercase tracking-widest font-medium text-text hover:text-deep-red transition">About</Link></li>
        <li><Link href="#services" className="text-xs uppercase tracking-widest font-medium text-text hover:text-deep-red transition">Services</Link></li>
        <li><Link href="#how" className="text-xs uppercase tracking-widest font-medium text-text hover:text-deep-red transition">How It Works</Link></li>
        <li><Link href="#team" className="text-xs uppercase tracking-widest font-medium text-text hover:text-deep-red transition">Team</Link></li>
        <li>
          <Link href="#contact" className="px-6 py-2 bg-deep-red text-white text-xs uppercase tracking-widest font-medium hover:bg-crimson transition">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
}
