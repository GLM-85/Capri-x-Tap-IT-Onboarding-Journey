import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Tap-IT | Tap into the Cloud';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Brand Colors
  const navy = '#081A57';
  const electricBlue = '#3A6EFF';
  const accentBlue = '#4C6FFF';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'white',
          position: 'relative',
          overflow: 'hidden',
          padding: '40px',
        }}
      >
        {/* --- BLUEPRINT BACKGROUND LAYER --- */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           
           {/* Center Crosshairs */}
           <div style={{ position: 'absolute', width: '1200px', height: '1px', background: electricBlue, opacity: 0.1 }} />
           <div style={{ position: 'absolute', width: '1px', height: '630px', background: electricBlue, opacity: 0.1 }} />

           {/* Concentric Rings - Engineering Aesthetic */}
           <div style={{ 
             position: 'absolute', 
             width: '500px', 
             height: '500px', 
             borderRadius: '50%', 
             border: `1px solid ${electricBlue}`, 
             opacity: 0.1 
           }} />
           <div style={{ 
             position: 'absolute', 
             width: '750px', 
             height: '750px', 
             borderRadius: '50%', 
             border: `1px solid ${navy}`, 
             opacity: 0.05 
           }} />
           <div style={{ 
             position: 'absolute', 
             width: '350px', 
             height: '350px', 
             borderRadius: '50%', 
             border: `1px dashed ${electricBlue}`, 
             opacity: 0.15 
           }} />

           {/* Technical Grid Dots */}
           <div style={{
              backgroundImage: `radial-gradient(${navy} 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
              opacity: 0.03,
              position: 'absolute',
              inset: 0,
           }}></div>
        </div>

        {/* --- CONTENT LAYER --- */}

        {/* 1. Logo (Top Center) */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30, zIndex: 10 }}>
           <img 
             src="https://storage.googleapis.com/tap-it-assets-eu/blue-logo-with-subtext.png" 
             height="70"
             style={{ objectFit: 'contain' }}
             alt="Tap-IT Logo"
           />
        </div>

        {/* 2. Main Subject (F1 Car) */}
        <div style={{ 
          display: 'flex', 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: '100%', 
          position: 'relative',
          marginTop: 10,
          marginBottom: 10
        }}>
           <img 
             src="https://storage.googleapis.com/tap-it-assets-eu/f1-car.jpg" 
             width="950"
             style={{ 
               objectFit: 'contain',
               // Multiply blend mode ensures the car's white background (if any) blends seamlessly
               mixBlendMode: 'multiply' 
             }}
             alt="F1 Car"
           />
        </div>

        {/* 3. Tagline (Bottom) */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 30, zIndex: 10 }}>
           <div style={{ 
             color: navy, 
             fontSize: 42, 
             fontWeight: 900, 
             textTransform: 'uppercase', 
             letterSpacing: '0.05em', 
             lineHeight: 1,
             fontFamily: 'sans-serif' 
           }}>
              Tap into the Cloud.
           </div>
           <div style={{ 
             color: accentBlue, 
             fontSize: 42, 
             fontWeight: 900, 
             textTransform: 'uppercase', 
             letterSpacing: '0.05em', 
             lineHeight: 1,
             marginTop: 5,
             fontFamily: 'sans-serif' 
           }}>
              Accelerate your Growth.
           </div>
        </div>

        {/* --- TECHNICAL ACCENTS --- */}
        {/* Top Left Corner */}
        <div style={{ position: 'absolute', top: 30, left: 30, width: 20, height: 20, borderTop: `3px solid ${electricBlue}`, borderLeft: `3px solid ${electricBlue}` }} />
        {/* Top Right Corner */}
        <div style={{ position: 'absolute', top: 30, right: 30, width: 20, height: 20, borderTop: `3px solid ${electricBlue}`, borderRight: `3px solid ${electricBlue}` }} />
        {/* Bottom Left Corner */}
        <div style={{ position: 'absolute', bottom: 30, left: 30, width: 20, height: 20, borderBottom: `3px solid ${electricBlue}`, borderLeft: `3px solid ${electricBlue}` }} />
        {/* Bottom Right Corner */}
        <div style={{ position: 'absolute', bottom: 30, right: 30, width: 20, height: 20, borderBottom: `3px solid ${electricBlue}`, borderRight: `3px solid ${electricBlue}` }} />

      </div>
    ),
    {
      ...size,
    }
  );
}