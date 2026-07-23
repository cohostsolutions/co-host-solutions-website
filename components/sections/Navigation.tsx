'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'What We Do', href: '/solutions' },
  { label: 'Properties', href: '/properties' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/92 backdrop-blur-lg border-b border-border">
      <div className="max-w-wrap mx-auto px-7">
        <nav className="flex items-center justify-between h-[74px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-cohost-horizontal.png"
              alt="Co-Host Solutions"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-normal transition-colors relative pb-1 ${
                    isActive(link.href)
                      ? 'text-crimson font-bold'
                      : 'text-ink-mid hover:text-crimson'
                  } after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:bg-gold after:transition-all ${
                    isActive(link.href) ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex px-[30px] py-[15px] bg-crimson text-white text-sm font-bold rounded transition-all hover:bg-crimson-dark hover:shadow-md hover:translate-y-[-2px]"
            >
              Book a free consultation
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-6 h-6 flex flex-col justify-center gap-1 bg-transparent border-none cursor-pointer p-2"
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-ink transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-ink transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-[74px] left-0 right-0 bg-paper border-b border-border shadow-md">
            <ul className="flex flex-col items-stretch list-none">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-border">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-7 py-3 text-sm font-normal transition-colors ${
                      isActive(link.href)
                        ? 'text-crimson font-bold bg-crimson-bg'
                        : 'text-ink-mid hover:text-crimson'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
