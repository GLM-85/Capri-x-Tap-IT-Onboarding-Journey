'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import Link from '../../../components/Link';

// --- CAPRI DESIGN TOKENS ---
const theme = {
  colors: {
    primaryTeal: '#436E72',
    deepTeal: '#294344',
    accentCoral: '#EE7E5A',
    offWhite: '#EDE8E4',
    charcoal: '#202020',
    white: '#FFFFFF',
    warmGrey: '#BDB9B6'
  }
};

// --- DATA STRUCTURE (Dutch content, Capri Style) ---
const slides = [
  {
    id: 1,
    type: 'title',
    title: "Capri Partners × Tap-IT",
    subtitle: "Gebouwd voor groei"
  },
  {
    id: 2,
    type: 'content',
    title: "Waarom dit gesprek",
    bullets: [
      "Capri groeit hard in NL en BE",
      "Digitaal werken is de kern van de dagelijkse performance",
      "Werken in dezelfde omgeving als onze klanten (Microsoft 365 & Teams)",
      "IT moet vertrouwen en groei ondersteunen, geen frictie creëren"
    ]
  },
  {
    id: 3,
    type: 'content',
    title: "De huidige situatie",
    bullets: [
      "Google Workspace als lean startpunt",
      "Verschillende devices en setups door elkaar",
      "IT is vooral praktisch ingericht, zonder vaste standaard",
      "Werkt vandaag, maar minder gestructureerd voor schaal"
    ]
  },
  {
    id: 4,
    type: 'content',
    title: "Richting de toekomst",
    bullets: [
      "Meer recruiters",
      "Meer data van kandidaten & klanten",
      "Meerdere locaties",
      "Hybrid work als standaard"
    ]
  },
  {
    id: 5,
    type: 'statement',
    title: "EX = CX",
    subtitle: "Employee Experience = Customer Experience",
    text: "CX begint met een sterke EX",
    subBullets: [
      "Minder frictie voor medewerkers",
      "One way of working",
      "Betrouwbare tools",
      "Een rustige, voorspelbare omgeving"
    ]
  },
  {
    id: 6,
    type: 'content',
    title: "Wat er gebeurt zonder structuur",
    bullets: [
      "Werkwijzen verschillen per persoon",
      "IT groeit ad-hoc mee",
      "Toegang en security zijn vooral praktisch ingericht",
      "Onboarding en offboarding zorgen voor frictie"
    ]
  },
  {
    id: 7,
    type: 'statement',
    title: "Wat Tap-IT brengt",
    subtitle: "Één professionele standaard voor de digitale werkplek",
    subBullets: [
      "Professionaliteit",
      "Security & Governance",
      "Praktische compliance",
      "Schaalbaarheid",
      "Operationele rust"
    ]
  },
  {
    id: 8,
    type: 'list-highlight',
    title: "Tap-IT Modern Workplace",
    subtitle: "Founder Partner Edition",
    bullets: [
      "Microsoft 365 Business Premium",
      "Identity & Access Management",
      "Device Management & Security",
      "Proactieve Managed Services",
      "Eén aanspreekpunt voor alles"
    ]
  },
  {
    id: 9,
    type: 'content',
    title: "De filosofie achter de prijs", // NEW SLIDE A
    bullets: [
        "Wij leveren niet alleen licenties, wij nemen eigenaarschap",
        "Security is bij ons een actief proces, geen eenmalige instelling",
        "Ingericht op continuïteit: wij staan klaar voor groei én incidenten"
    ]
  },
  {
    id: 10,
    type: 'content',
    title: "Netwerk & locaties",
    bullets: [
      "Consistente setup in Amsterdam & Brussel",
      "Betrouwbare Wi-Fi en netwerk",
      "Scheiding tussen gasten en staff",
      "Centraal beheerde standaarden"
    ]
  },
  {
    id: 11,
    type: 'content',
    title: "Connectivity & Mobility",
    bullets: [
      "Business-grade internet per locatie",
      "Automatische backup-verbinding",
      "Mobiel werken als onderdeel van de werkplek",
      "Teams simpel en effectief ingezet"
    ]
  },
  {
    id: 12,
    type: 'content',
    title: "Wat we bewust níet doen",
    bullets: [
      "Geen over-engineering",
      "Geen onnodige complexiteit",
      "Geen audit-zware processen",
      "Geen 'uurtje-factuurtje' verrassingen"
    ]
  },
  {
    id: 13,
    type: 'split',
    title: "Pricing filosofie",
    bullets: [
      "Transparant en voorspelbaar",
      "€125 per user per maand voor de digitale werkplek",
      "Netwerk en connectivity geprijsd per locatie",
      "Hardware gescheiden van services",
      "Service-niveau afgestemd op context en complexiteit"
    ],
    contextText: "Deze pricing reflecteert de Founding Partner fase waarin we het ecosysteem samen vormgeven, op basis van de beoogde scope."
  },
  {
    id: 14,
    type: 'split', // NEW SLIDE B
    title: "Twee benaderingen",
    leftTitle: "Platform-benadering",
    leftBullets: ["Licenties & tools", "Ondersteuning op afroep", "Security als 'instelling'", "Risico blijft bij klant"],
    rightTitle: "Operating model (Tap-IT)",
    rightBullets: ["Governance & beheer", "Proactieve bewaking", "Security als proces", "Verantwoordelijkheid bij ons"]
  },
  {
    id: 15,
    type: 'content',
    title: "Waarom Tap-IT",
    bullets: [
      "Enterprise mindset, pragmatische executie",
      "Klein, gefocust en accountable team",
      "Geen legacy, geen ruis",
      "Capri als Founding Partner"
    ]
  },
  {
    id: 16,
    type: 'list-highlight', // NEW SLIDE C
    title: "Waarom Capri + Tap-IT",
    subtitle: "Specifiek voor jullie context",
    bullets: [
      "Kandidaat- en klantdata is vertrouwelijk",
      "Dynamiek in joiners & leavers vraagt strak proces",
      "Identiteit is de nieuwe security-perimeter",
      "Eén consistente standaard elimineert ruis",
      "Wij bieden een operating model, niet alleen een platform"
    ]
  },
  {
    id: 17,
    type: 'highlight',
    title: "Partnership alignment",
    subtitle: "Founder Partner model",
    bullets: [
      "5% Virtual Stock Options in Tap-IT",
      "Geen investering nodig",
      "Long-term alignment",
      "Shared upside"
    ]
  },
  {
    id: 18,
    type: 'split',
    title: "Long-term view",
    leftTitle: "Tap-IT is gebouwd voor:",
    leftBullets: ["Borging & Stabiliteit", "Continuïteit", "Langdurige klantrelaties"],
    rightTitle: "Voor Capri:",
    rightBullets: ["Geen replatforming", "Geen rebuilds", "Een werkplek die meegroeit"]
  },
  {
    id: 19,
    type: 'final',
    title: "Volgende stappen",
    bullets: [
      "Scope en locaties bevestigen",
      "Migratie-aanpak bepalen",
      "Planning afstemmen"
    ]
  }
];

// --- COMPONENT ---
const CapriStyledPitchPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Determine if the current slide uses a dark background (for UI contrast)
  const isDarkBg = (type: string) => {
      return ['title', 'statement', 'final'].includes(type);
  };
  
  const activeIsDark = isDarkBg(slides[currentSlide].type);

  // --- RENDER HELPERS ---
  const renderSlideContent = (activeSlide: typeof slides[0]) => {
    const baseContainerClass = "flex flex-col justify-center h-full px-12 md:px-24 print:animate-none print:opacity-100 transition-colors duration-500";
    
    // Background Color Logic based on slide type
    let bgClass = "bg-[#EDE8E4]"; // Default Off-White
    let textClass = "text-[#202020]"; // Default Charcoal
    
    if (activeSlide.type === 'title' || activeSlide.type === 'statement') {
        bgClass = "bg-[#436E72]"; // Primary Teal
        textClass = "text-white";
    } else if (activeSlide.type === 'final') {
        bgClass = "bg-[#294344]"; // Deep Teal
        textClass = "text-white";
    }

    const headerColorClass = isDarkBg(activeSlide.type) ? 'text-white' : 'text-[#202020]';

    return (
      <div className={`w-full h-full ${bgClass} ${textClass} relative overflow-hidden`}>
         
         {/* Decorative Element for Light Slides */}
         { !isDarkBg(activeSlide.type) && (
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#BDB9B6] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none print:hidden"></div>
         )}
         {/* Decorative Element for Dark Slides */}
         { isDarkBg(activeSlide.type) && (
             <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#EE7E5A] opacity-10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none print:hidden"></div>
         )}

         {/* Internal Header: "Capri Partners × Tap-IT" (Only on non-title slides) */}
         {activeSlide.type !== 'title' && (
            <div className={`absolute top-8 left-8 md:left-12 z-40 ${headerColorClass}`}>
                <Link href="/" className="font-bold tracking-widest uppercase text-xs opacity-60 hover:opacity-100 transition-opacity">
                    Capri Partners × Tap-IT
                </Link>
            </div>
         )}

         {/* Content Container */}
         <div className={baseContainerClass}>
            
            {/* Slide Type Switching */}
            {(() => {
                switch (activeSlide.type) {
                    case 'title':
                        return (
                        <div className="max-w-6xl">
                            <div className="inline-block px-4 py-2 bg-[#EE7E5A] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-8 animate-in slide-in-from-bottom-4 duration-700">
                                Confidential
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black font-sans uppercase leading-[0.9] tracking-tight mb-8">
                                {activeSlide.title}
                            </h1>
                            <p className="text-2xl md:text-4xl font-light opacity-90 max-w-3xl leading-tight">
                                {activeSlide.subtitle}
                            </p>
                        </div>
                        );

                    case 'statement':
                        return (
                        <div className="max-w-5xl mx-auto text-center">
                            <h2 className="text-5xl md:text-7xl font-black font-sans uppercase mb-8 leading-none">
                                {activeSlide.title}
                            </h2>
                            {activeSlide.subtitle && (
                                <p className="text-xl md:text-2xl text-[#EE7E5A] font-bold uppercase tracking-widest mb-12">
                                    {activeSlide.subtitle}
                                </p>
                            )}
                            {activeSlide.text && (
                                <div className="bg-[#294344] p-10 rounded-[3rem] shadow-xl border border-white/10 mx-auto inline-block">
                                    <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
                                        "{activeSlide.text}"
                                    </p>
                                </div>
                            )}
                            {activeSlide.subBullets && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left max-w-4xl mx-auto">
                                    {activeSlide.subBullets.map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 text-lg md:text-xl font-medium">
                                        <div className="w-2 h-2 bg-[#EE7E5A] rounded-full shrink-0"></div>
                                        {item}
                                    </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        );

                    case 'content':
                        return (
                        <div className="max-w-6xl">
                            <div className="flex items-baseline gap-4 mb-12">
                                <span className="text-[#EE7E5A] text-4xl font-black opacity-50">0{activeSlide.id}</span>
                                <h2 className="text-5xl md:text-6xl font-black font-sans uppercase leading-none text-[#202020]">
                                    {activeSlide.title}
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {activeSlide.bullets?.map((item, i) => (
                                    <div key={i} className="flex items-start gap-6 group">
                                        <div className="mt-2 w-3 h-3 bg-[#436E72] rounded-full shrink-0 group-hover:bg-[#EE7E5A] transition-colors"></div>
                                        <span className="text-2xl md:text-3xl font-medium text-[#202020] leading-relaxed border-b border-[#BDB9B6] pb-6 w-full">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        );

                    case 'highlight':
                    case 'list-highlight':
                        return (
                        <div className="max-w-6xl mx-auto w-full">
                            <div className="mb-12 text-center md:text-left">
                                <h2 className="text-5xl md:text-6xl font-black font-sans uppercase leading-none text-[#202020] mb-4">
                                    {activeSlide.title}
                                </h2>
                                {activeSlide.subtitle && (
                                    <p className="text-xl text-[#436E72] font-bold uppercase tracking-widest">
                                        {activeSlide.subtitle}
                                    </p>
                                )}
                            </div>
                            
                            <div className="grid grid-cols-1 gap-4">
                                {activeSlide.bullets?.map((item, i) => (
                                    <div key={i} className="bg-[#294344] text-white p-6 md:p-8 rounded-full flex items-center gap-6 shadow-lg hover:translate-x-2 transition-transform duration-300">
                                        <div className="bg-[#EE7E5A] p-1.5 rounded-full shrink-0">
                                            <CheckCircle2 className="text-white w-5 h-5" />
                                        </div>
                                        <span className="text-xl md:text-2xl font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        );

                    case 'split':
                        if ('leftTitle' in activeSlide) {
                            // Comparison Slide
                            return (
                                <div className="max-w-7xl mx-auto w-full">
                                    <h2 className="text-5xl md:text-6xl font-black font-sans uppercase leading-none text-[#202020] mb-16 text-center">
                                        {activeSlide.title}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                                        <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-[#BDB9B6]/30">
                                            <h3 className="text-xl text-[#436E72] font-bold uppercase tracking-widest mb-8 border-b-2 border-[#436E72] pb-4">
                                                {(activeSlide as any).leftTitle}
                                            </h3>
                                            <ul className="space-y-6">
                                                {(activeSlide as any).leftBullets.map((item: string, i: number) => (
                                                    <li key={i} className="text-2xl font-bold text-[#202020]">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-[#294344] p-10 rounded-[2rem] shadow-xl text-white">
                                            <h3 className="text-xl text-[#EE7E5A] font-bold uppercase tracking-widest mb-8 border-b-2 border-[#EE7E5A] pb-4">
                                                {(activeSlide as any).rightTitle}
                                            </h3>
                                            <ul className="space-y-6">
                                                {(activeSlide as any).rightBullets.map((item: string, i: number) => (
                                                    <li key={i} className="text-2xl font-medium opacity-90">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        // Fallback Split (Pricing)
                        return (
                            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-5xl md:text-7xl font-black font-sans uppercase leading-none text-[#202020] mb-8">
                                        {activeSlide.title}
                                    </h2>
                                    <div className="w-24 h-2 bg-[#EE7E5A] rounded-full mb-8"></div>
                                    {/* Added Context Text for Founding Partner Phase */}
                                    {(activeSlide as any).contextText && (
                                        <p className="text-lg text-[#436E72] font-medium italic opacity-80 max-w-sm leading-relaxed">
                                            {(activeSlide as any).contextText}
                                        </p>
                                    )}
                                </div>
                                <div className="bg-white p-10 rounded-[2rem] shadow-xl border-t-8 border-[#436E72]">
                                    <ul className="space-y-8">
                                        {activeSlide.bullets?.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <span className="mt-2 w-3 h-3 bg-[#EE7E5A] rounded-full shrink-0"></span>
                                                <span className="text-xl md:text-2xl text-[#202020] font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );

                    case 'final':
                        return (
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="text-6xl md:text-8xl font-black font-sans uppercase mb-12 text-white">
                                    {activeSlide.title}
                                </h2>
                                <div className="space-y-8 mb-16">
                                    {activeSlide.bullets?.map((item, i) => (
                                        <div key={i} className="text-2xl md:text-4xl text-[#BDB9B6] font-light">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <div className="inline-block px-8 py-4 bg-[#EE7E5A] text-white font-bold uppercase tracking-widest rounded-full shadow-lg">
                                    Aan de slag
                                </div>
                            </div>
                        );

                    default:
                         return null;
                }
            })()}
         </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-screen bg-[#EDE8E4] font-sans overflow-hidden relative print:overflow-visible print:h-auto">
      
      <style>{`
         @media print {
           @page { 
             size: 1920px 1080px; 
             margin: 0; 
           }
           html, body {
             min-width: 1920px !important;
             background-color: #EDE8E4 !important;
             -webkit-print-color-adjust: exact;
             print-color-adjust: exact;
             margin: 0;
             padding: 0;
           }
           .print-hidden { display: none !important; }
           .print-visible { display: block !important; }
           .print-slide {
             width: 1920px;
             height: 1080px;
             page-break-after: always;
             overflow: hidden;
             position: relative;
             display: flex;
             flex-direction: column;
           }
           * { 
             animation: none !important; 
             transition: none !important; 
             opacity: 1 !important; 
             transform: none !important; 
             -webkit-print-color-adjust: exact !important;
             print-color-adjust: exact !important;
           }
         }
      `}</style>

      {/* --- INTERACTIVE VIEW --- */}
      <div className="print-hidden h-screen flex flex-col relative">
          
          {/* Header Controls */}
          <header className={`absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-start transition-colors duration-300 ${activeIsDark ? 'text-white' : 'text-[#202020]'}`}>
            {/* Logo Link: Fades out after Title Slide to avoid duplication with slide header */}
            <div className={`transition-opacity duration-300 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Link href="/" className="flex flex-col group">
                    <span className="font-black text-xl tracking-tight leading-none">TAP-IT</span>
                    <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${activeIsDark ? 'text-[#EE7E5A]' : 'text-[#436E72]'}`}>Capri Partners</span>
                </Link>
            </div>

            <button 
               onClick={() => window.print()}
               className={`flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-bold uppercase tracking-widest transition-all ml-auto
                  ${activeIsDark ? 'border-white/20 hover:bg-white hover:text-[#202020]' : 'border-[#202020]/20 hover:bg-[#202020] hover:text-white'}
               `}
            >
               <Download size={16} />
               <span className="hidden md:inline">PDF</span>
            </button>
          </header>

          {/* Main Slide */}
          <main className="flex-grow w-full h-full">
             {renderSlideContent(slides[currentSlide])}
          </main>

          {/* Footer Navigation */}
          <footer className={`absolute bottom-0 left-0 w-full p-8 z-20 flex justify-between items-end transition-colors duration-300 ${activeIsDark ? 'text-white' : 'text-[#202020]'}`}>
             <div className="text-xs font-mono uppercase tracking-widest opacity-60">
                {currentSlide + 1} / {slides.length}
             </div>
             <div className="flex gap-4">
                 <button 
                   onClick={prevSlide}
                   disabled={currentSlide === 0}
                   className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all disabled:opacity-0
                      ${activeIsDark ? 'border-white/20 hover:bg-white hover:text-[#202020]' : 'border-[#202020]/10 hover:bg-[#202020] hover:text-white'}
                   `}
                 >
                   <ArrowLeft size={20} />
                 </button>
                 <button 
                   onClick={nextSlide}
                   disabled={currentSlide === slides.length - 1}
                   className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg disabled:opacity-0
                      ${activeIsDark ? 'bg-white text-[#294344] hover:bg-[#EE7E5A] hover:text-white' : 'bg-[#436E72] text-white hover:bg-[#EE7E5A]'}
                   `}
                 >
                   <ArrowRight size={20} />
                 </button>
             </div>
          </footer>
      </div>

      {/* --- PRINT VIEW --- */}
      <div className="hidden print-visible w-full">
          {slides.map((slide, index) => {
             const dark = isDarkBg(slide.type);
             const textColorClass = dark ? 'text-white' : 'text-[#202020]';

             return (
             <div key={slide.id} className="print-slide flex flex-col relative" style={{ pageBreakAfter: 'always' }}>
                 {renderSlideContent(slide)}
                 
                 {/* Print Footer: Slide Number */}
                 <div className={`absolute bottom-0 left-0 w-full p-8 z-50 flex justify-between items-end ${textColorClass}`}>
                     <div className="text-xs font-mono uppercase tracking-widest opacity-60">
                        {index + 1} / {slides.length}
                     </div>
                 </div>
             </div>
             )
          })}
      </div>
      
    </div>
  );
};

export default CapriStyledPitchPage;
