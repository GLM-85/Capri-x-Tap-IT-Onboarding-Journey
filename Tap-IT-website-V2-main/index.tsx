import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './app/page';
import PhaseDetailClient from './app/capri-onboarding-journey/[slug]/PhaseDetailClient';
import { phases } from './app/capri-onboarding-journey/data';
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

  const isPhase = currentPath.startsWith('/capri-onboarding-journey/');
  const slug = isPhase ? currentPath.split('/').filter(Boolean)[1] : null;
  const phase = slug ? phases.find((p) => p.slug === slug) : null;
  const matchedRoute = phase ? `phase:${slug}` : 'home';

  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/5793bc13-8268-456b-a225-7d341b6cb439',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'Tap-IT-website-V2-main/index.tsx:44',message:'PreviewRouter route match',data:{currentPath,matchedRoute},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'H2'})}).catch(()=>{});
  // #endregion

  if (phase) {
    return <PhaseDetailClient phase={phase} allPhases={phases} />;
  }

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