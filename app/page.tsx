'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import OurClients from '@/components/OurClients';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
useEffect(() => {
  const hash = window.location.hash;

  if (hash) {
    const element = document.querySelector(hash);

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }
}, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <OurClients />
      <WhyChooseUs />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
