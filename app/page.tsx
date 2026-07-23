'use client';

import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Why } from '@/components/sections/Why';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { Team } from '@/components/sections/Team';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Why />
      <Process />
      <Testimonials />
      <CaseStudy />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
