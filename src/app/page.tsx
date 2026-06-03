'use client';

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
