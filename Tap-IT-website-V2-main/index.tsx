import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import AboutPage from './app/about/page';
import EcosystemPage from './app/ecosystem/page';
import HealthCheckPage from './app/health-check/page';
import ContactPage from './app/contact/page';
import PitchDeckPage from './app/pitch-deck/page';
import CapriPitchPage from './app/pitch/capri-partners/page';
import CapriStyledPitchPage from './app/pitch/capri-partners-styled/page';
import { PreviewProvider } from './context/PreviewContext';

const PreviewRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleRoute = (e: any) => {
      const path = e.detail;
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('tapit-route', handleRoute);
    window.addEventListener('popstate', () => setCurrentPath(window.location.pathname));

    return () => {
      window.removeEventListener('tapit-route', handleRoute);
    };
  }, []);

  // Simple Route Matching
  if (currentPath === '/about') return <AboutPage />;
  if (currentPath === '/ecosystem') return <EcosystemPage />;
  if (currentPath === '/health-check') return <HealthCheckPage />;
  if (currentPath === '/contact') return <ContactPage />;
  if (currentPath === '/pitch-deck') return <PitchDeckPage />;
  if (currentPath === '/pitch/capri-partners') return <CapriPitchPage />;
  if (currentPath === '/pitch/capri-partners-styled') return <CapriStyledPitchPage />;
  
  // Default to Home
  return <Home />;
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <PreviewProvider>
      <PreviewRouter />
    </PreviewProvider>
  </React.StrictMode>
);