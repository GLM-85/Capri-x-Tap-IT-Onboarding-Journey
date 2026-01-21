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
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/5793bc13-8268-456b-a225-7d341b6cb439',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tap-IT-website-V2-main/index.tsx:19',message:'PreviewRouter mount',data:{path:window.location.pathname},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2'})}).catch(()=>{});
    // #endregion
    const handleError = (event: ErrorEvent) => {
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/5793bc13-8268-456b-a225-7d341b6cb439',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tap-IT-website-V2-main/index.tsx:22',message:'window error',data:{message:event.message,filename:event.filename},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H3'})}).catch(()=>{});
      // #endregion
    };
    const handleRejection = (event: PromiseRejectionEvent) => {
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/5793bc13-8268-456b-a225-7d341b6cb439',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tap-IT-website-V2-main/index.tsx:27',message:'unhandled rejection',data:{reason:String(event.reason)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H3'})}).catch(()=>{});
      // #endregion
    };
    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    const handleRoute = (e: any) => {
      const path = e.detail;
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/5793bc13-8268-456b-a225-7d341b6cb439',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tap-IT-website-V2-main/index.tsx:24',message:'tapit-route event',data:{path},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2'})}).catch(()=>{});
      // #endregion
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    window.addEventListener('tapit-route', handleRoute);
    window.addEventListener('popstate', () => setCurrentPath(window.location.pathname));

    return () => {
      window.removeEventListener('tapit-route', handleRoute);
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  const matchedRoute =
    currentPath === '/about' ? 'about' :
    currentPath === '/ecosystem' ? 'ecosystem' :
    currentPath === '/health-check' ? 'health-check' :
    currentPath === '/contact' ? 'contact' :
    currentPath === '/pitch-deck' ? 'pitch-deck' :
    currentPath === '/pitch/capri-partners' ? 'pitch/capri-partners' :
    currentPath === '/pitch/capri-partners-styled' ? 'pitch/capri-partners-styled' :
    'home';

  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/5793bc13-8268-456b-a225-7d341b6cb439',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tap-IT-website-V2-main/index.tsx:44',message:'PreviewRouter route match',data:{currentPath,matchedRoute},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2'})}).catch(()=>{});
  // #endregion

  if (matchedRoute === 'about') return <AboutPage />;
  if (matchedRoute === 'ecosystem') return <EcosystemPage />;
  if (matchedRoute === 'health-check') return <HealthCheckPage />;
  if (matchedRoute === 'contact') return <ContactPage />;
  if (matchedRoute === 'pitch-deck') return <PitchDeckPage />;
  if (matchedRoute === 'pitch/capri-partners') return <CapriPitchPage />;
  if (matchedRoute === 'pitch/capri-partners-styled') return <CapriStyledPitchPage />;
  
  // Default to Home
  return <Home />;
};

const rootElement = document.getElementById('root');
// #region agent log
fetch('http://127.0.0.1:7244/ingest/5793bc13-8268-456b-a225-7d341b6cb439',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tap-IT-website-V2-main/index.tsx:61',message:'bootstrap root element',data:{hasRoot:!!rootElement},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H1'})}).catch(()=>{});
// #endregion

const root = createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <PreviewProvider>
      <PreviewRouter />
    </PreviewProvider>
  </React.StrictMode>
);