import React from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import CloudEcosystem from '../components/CloudEcosystem';
import PackagesSection from '../components/PackagesSection';
import HealthCheckSection from '../components/HealthCheckSection';
import PilotBanner from '../components/PilotBanner';
import SiteFooter from '../components/SiteFooter';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Hero />
      <OurStory />
      <CloudEcosystem />
      <PackagesSection />
      <HealthCheckSection />
      <PilotBanner />
      <SiteFooter />
    </main>
  );
}