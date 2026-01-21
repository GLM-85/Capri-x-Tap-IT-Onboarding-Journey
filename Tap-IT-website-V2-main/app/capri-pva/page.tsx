'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, Download, CheckCircle2 } from 'lucide-react';
import Link from '../../components/Link';

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
    subtitle: "Plan van Aanpak",
    subtitleSecondary: "Interne uitvoering & team alignment – Capri als eerste design-partner",
    footerNote: "Werkdocument – niet extern delen"
  },
  {
    id: 2,
    type: 'statement',
    title: "Doelstelling",
    subtitle: "Van onboarding naar ecosysteem",
    text: "Tap-IT onboardt Capri als eerste klant én design partner, terwijl parallel een herhaalbaar MSP-ecosysteem wordt opgebouwd.",
    bullets: [
      "Capri is referentieklant + validatiecase",
      "Elke fase levert input op voor standaardisatie",
      "Team werkt niet klant-specifiek, maar product-gericht"
    ]
  },
  {
    id: 3,
    type: 'content',
    title: "Uitgangspunten",
    bullets: [
      "Capri is eerste klant; standaard vóór maatwerk; schaalbaarheid centraal",
      "Gefaseerde aanpak met expliciete akkoord- en besluitmomenten",
      "Architectuurbeslissingen liggen bij Tap-IT",
      "Geen shortcuts in Fase 3–4 zonder expliciet Go-besluit",
      "Documentatie = onderdeel van de deliverable (niet achteraf)"
    ]
  },
  {
    id: 4,
    type: 'content',
    title: "Overzicht Fasering",
    bullets: [
      "F0 – Intake & Context (Begrijpen)",
      "F1 – High Level Design (Kiezen)",
      "F2 – MSP Blueprint (Ontwerpen)",
      "F3 – LLD & PoC (Valideren)",
      "F4 – Implementatie (Realiseren)",
      "F5 – Evaluatie & Standaardisatie (Borgen)"
    ]
  },
  {
    id: 5,
    type: 'split',
    title: "Fase 0: Intake & Context",
    leftTitle: "Inhoud",
    leftBullets: [
      "Bedrijfscontext & groei",
      "Gebruikers, devices, locaties",
      "IT Maturity Check + pijnpunten & ambities",
      "Wat betekent dit voor het team: nog geen oplossingen bedenken",
      "Engineers luisteren, niet ontwerpen; output is inputdocument, geen design"
    ],
    rightTitle: "Deliverable",
    rightBullets: ["Capri Customer Profile", "Capri Customer Profile = input voor alle vervolgfases"]
  },
  {
    id: 6,
    type: 'split',
    title: "Fase 1: High Level Design",
    leftTitle: "Inhoud",
    leftBullets: [
      "Doel: alignment op richting, niet op techniek",
      "Beslisniveau: werkplekconcept",
      "Beslisniveau: security-principes",
      "Beslisniveau: persona-indeling",
      "Nog niet vast: detailconfiguraties"
    ],
    rightTitle: "Deliverable",
    rightBullets: ["Capri High Level Design (HLD)"]
  },
  {
    id: 7,
    type: 'split',
    title: "Fase 2: MSP Blueprint",
    subtitle: "De kernfase van Tap-IT",
    leftTitle: "Inhoud",
    leftBullets: [
      "Technische domeinen + ITSM + rollen (standaard MSP-bouwblokken)",
      "Tenant- & billingstructuur",
      "Architectuur workshop = verplicht kwaliteitsmoment",
      "Frans = challenger, niet uitvoerder",
      "Output is Tap-IT IP, niet Capri-eigendom"
    ],
    rightTitle: "Deliverable",
    rightBullets: ["Tap-IT MSP Blueprint v1.0"]
  },
  {
    id: 8,
    type: 'content',
    title: "Fase 3: LLD & Proof of Concept",
    bullets: [
      "Doel: technische risico’s elimineren vóór productie",
      "Wat doen we: LLD per domein, naming conventions, policy-sets",
      "PoC voor kritische onderdelen (identity, security, device mgmt)",
      "Teamfocus: engineering & validatie, geen aannames meer",
      "Deliverable: Capri LLD + Go/No-Go richting implementatie"
    ]
  },
  {
    id: 9,
    type: 'content',
    title: "Fase 4: Implementatie & Decharge",
    bullets: [
      "Doel: productieomgeving realiseren zonder verrassingen",
      "Wat doen we: tenant build volgens LLD",
      "Migraties (mail, data, devices) + livegang & nazorg",
      "Teamfocus: discipline, checklist-based; afwijkingen alleen via expliciet besluit",
      "Deliverable: werkende productieomgeving + acceptatie/overdracht beheer"
    ]
  },
  {
    id: 10,
    type: 'content',
    title: "Fase 5: Evaluatie & Standaardisatie",
    bullets: [
      "Doel: Capri-ervaring vertalen naar MSP-standaard",
      "Wat doen we: projectevaluatie + lessons learned",
      "Update MSP Blueprint → v1.1 + regulier beheer (QBR, SLA)",
      "Teamfocus: verbeteren van het product, niet deze ene klant",
      "Deliverable: evaluatieverslag + geüpdatete MSP-standaard"
    ]
  },
  {
    id: 11,
    type: 'content',
    title: "Governance",
    bullets: [
      "Capri valideert",
      "Tap-IT beslist",
      "Team voert uit binnen kaders"
    ]
  },
  {
    id: 12,
    type: 'content',
    title: "Rollen & Betrokkenen",
    bullets: [
      "Programma / Product owner",
      "Architectuur",
      "Engineering",
      "Security",
      "Solution expert (Frans – adviserend)"
    ]
  },
  {
    id: 13,
    type: 'final',
    title: "Volgende Stappen",
    bullets: [
      "Start Fase 0 & 1",
      "Intake voorbereiden",
      "Architectuur workshop plannen",
      "Teamrollen bevestigen"
    ],
    cta: "Start Fase 0 & 1"
  }
];

// --- COMPONENT ---
const CapriPvADeckPage: React.FC = () => {
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
                            {(activeSlide as any).subtitleSecondary && (
                                <p className="text-lg md:text-2xl font-medium opacity-80 max-w-3xl mt-4">
                                    {(activeSlide as any).subtitleSecondary}
                                </p>
                            )}
                            {(activeSlide as any).footerNote && (
                                <p className="mt-16 text-sm md:text-base opacity-70 uppercase tracking-widest">
                                    {(activeSlide as any).footerNote}
                                </p>
                            )}
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
                            {(activeSlide as any).text && (
                                <div className="bg-[#294344] p-10 rounded-[3rem] shadow-xl border border-white/10 mx-auto inline-block">
                                    <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
                                        "{(activeSlide as any).text}"
                                    </p>
                                </div>
                            )}
                            {(activeSlide as any).bullets && (
                                <div className="mt-10">
                                    <ul className="space-y-4">
                                        {(activeSlide as any).bullets.map((item: string, i: number) => (
                                            <li key={i} className="text-lg md:text-2xl text-white/90 font-medium">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
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
                                {(activeSlide as any).subtitle && (
                                    <p className="text-xl text-[#436E72] font-bold uppercase tracking-widest">
                                        {(activeSlide as any).subtitle}
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
                                    {(activeSlide as any).subtitle && (
                                        <p className="text-xl md:text-2xl text-[#436E72] font-bold uppercase tracking-widest mb-10 text-center">
                                            {(activeSlide as any).subtitle}
                                        </p>
                                    )}
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
                                    {(activeSlide as any).cta ?? 'Aan de slag'}
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

export default CapriPvADeckPage;
