'use client';

export function Footer() {
  return (
    <footer className="bg-black border-t border-soft-gold/10 px-24 py-8 flex items-center justify-between">
      <div className="text-xs text-text/40 tracking-widest">© 2025 Co-Host Solutions. All rights reserved.</div>
      <div className="flex gap-8">
        <a href="#about" className="text-xs text-text/40 hover:text-soft-gold transition">About</a>
        <a href="#services" className="text-xs text-text/40 hover:text-soft-gold transition">Services</a>
        <a href="#contact" className="text-xs text-text/40 hover:text-soft-gold transition">Contact</a>
      </div>
    </footer>
  );
}
