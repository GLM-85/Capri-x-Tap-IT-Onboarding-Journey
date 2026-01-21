'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, ChevronDown, CheckCircle2, Download } from 'lucide-react';
import Link from '../../../components/Link';

// --- DATA STRUCTURE ---
const slides = [
  {
    id: 1,
    type: 'title',
    title: "Capri Partners × Tap-IT",
    subtitle: "A future-proof digital workplace for growth"
  },
  {
    id: 2,
    type: 'content',
    title: "Why this conversation",
    bullets: [
      "Capri is growing across NL and BE",
      "Digital work is central to daily performance",
      "IT should support trust and growth, not create friction"
    ]
  },
  {
    id: 3,
    type: 'content',
    title: "Current situation",
    bullets: [
      "Google Workspace as a lean starting point",
      "Different devices and setups",
      "IT largely implicit",
      "Works today, less structured for scale"
    ]
  },
  {
    id: 4,
    type: 'content',
    title: "Direction of travel",
    bullets: [
      "More recruiters",
      "More candidate & client data",
      "Multiple locations",
      "Hybrid work as default"
    ]
  },
  {
    id: 5,
    type: 'statement',
    title: "EX = CX",
    subtitle: "Employee Experience = Customer Experience",
    text: "CX starts with a strong EX",
    subBullets: [
      "Less friction for employees",
      "One way of working",
      "Reliable tools",
      "Calm, predictable environment"
    ]
  },
  {
    id: 6,
    type: 'content',
    title: "What happens without structure",
    bullets: [
      "Ways of working differ per person",
      "IT grows ad-hoc",
      "Access and security are implicit",
      "Onboarding and offboarding cause friction"
    ]
  },
  {
    id: 7,
    type: 'statement',
    title: "What Tap-IT provides",
    subtitle: "A single professional standard for the digital workplace",
    subBullets: [
      "Professionalism",
      "Security",
      "Practical compliance",
      "Scalability",
      "Calm"
    ]
  },
  {
    id: 8,
    type: 'list-highlight',
    title: "Tap-IT Modern Workplace",
    subtitle: "Founder Partner Edition",
    bullets: [
      "Microsoft 365 Business Premium",
      "Identity & access management",
      "Device management & security",
      "Proactive managed services",
      "One point of responsibility"
    ]
  },
  {
    id: 9,
    type: 'content',
    title: "Network & locations",
    bullets: [
      "Consistent setup across Amsterdam & Brussels",
      "Reliable Wi-Fi and networking",
      "Guest and staff separation",
      "Centrally managed standards"
    ]
  },
  {
    id: 10,
    type: 'content',
    title: "Connectivity & mobility",
    bullets: [
      "Business-grade internet per location",
      "Automatic backup connectivity",
      "Mobile working as part of the workplace",
      "Teams used simply and effectively"
    ]
  },
  {
    id: 11,
    type: 'content',
    title: "What we deliberately avoid",
    bullets: [
      "No over-engineering",
      "No unnecessary complexity",
      "No audit-heavy processes",
      "No vendor lock-in"
    ]
  },
  {
    id: 12,
    type: 'split',
    title: "Pricing philosophy",
    bullets: [
      "Transparent and predictable",
      "€125 per user per month for the digital workplace",
      "Network and connectivity priced per location",
      "Hardware separated from services"
    ]
  },
  {
    id: 13,
    type: 'content',
    title: "Why Tap-IT",
    bullets: [
      "Enterprise mindset, pragmatic execution",
      "Small, focused, accountable team",
      "No legacy, no noise",
      "Capri as a founding partner"
    ]
  },
  {
    id: 14,
    type: 'highlight',
    title: "Partnership alignment",
    subtitle: "Founder Partner model",
    bullets: [
      "5% Virtual Stock Options in Tap-IT",
      "No investment required",
      "Long-term alignment",
      "Shared upside"
    ]
  },
  {
    id: 15,
    type: 'split',
    title: "Long-term view",
    leftTitle: "Tap-IT is built for:",
    leftBullets: ["Stability", "Continuity", "Long-term client relationships"],
    rightTitle: "For Capri:",
    rightBullets: ["No replatforming", "No rebuilds", "A workplace that grows with you"]
  },
  {
    id: 16,
    type: 'final',
    title: "Next steps",
    bullets: [
      "Confirm scope and locations",
      "Define migration approach",
      "Agree on planning"
    ]
  }
];

// --- COMPONENT ---
const CapriPitchPage: React.FC = () => {
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

  // --- RENDER HELPERS ---
  const renderSlideContent = (activeSlide: typeof slides[0]) => {
    // We add print-specific overrides to ensure animations don't hide content in PDF
    const baseContainerClass = "flex flex-col justify-center h-full px-12 print:animate-none print:opacity-100";
    
    switch (activeSlide.type) {
      case 'title':
        return (
          <div className={`${baseContainerClass} items-start max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000`}>
            <div className="mb-6 flex items-center gap-3">
              <div className="w-16 h-1 bg-[#3A6EFF]"></div>
              <span className="text-[#3A6EFF] font-bold uppercase tracking-[0.3em] text-sm">Confidential</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-sans uppercase leading-[0.9] text-white tracking-tight mb-8">
              {activeSlide.title}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-200 font-light max-w-2xl leading-relaxed">
              {activeSlide.subtitle}
            </p>
          </div>
        );

      case 'statement':
        return (
          <div className={`${baseContainerClass} items-center text-center max-w-4xl mx-auto animate-in fade-in duration-700`}>
             <h2 className="text-5xl md:text-7xl font-black font-sans uppercase text-white mb-6 leading-none tracking-tight">
               {activeSlide.title}
             </h2>
             {activeSlide.subtitle && (
               <p className="text-xl md:text-2xl text-[#3A6EFF] font-bold uppercase tracking-widest mb-12">
                 {activeSlide.subtitle}
               </p>
             )}
             {activeSlide.text && (
               <p className="text-2xl text-white mb-8 border-l-4 border-[#3A6EFF] pl-6 py-2">
                 {activeSlide.text}
               </p>
             )}
             {activeSlide.subBullets && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-left mt-8">
                 {activeSlide.subBullets.map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-lg text-gray-300">
                     <span className="w-1.5 h-1.5 bg-[#3A6EFF] rounded-full"></span>
                     {item}
                   </div>
                 ))}
               </div>
             )}
          </div>
        );

      case 'highlight':
      case 'list-highlight':
        return (
          <div className={`${baseContainerClass} max-w-5xl mx-auto animate-in fade-in duration-700`}>
            <div className="border-l-4 border-[#3A6EFF] pl-8">
              <h2 className="text-4xl md:text-6xl font-black font-sans uppercase text-white mb-2 leading-none">
                {activeSlide.title}
              </h2>
              {activeSlide.subtitle && (
                <p className="text-lg md:text-xl text-[#3A6EFF] font-bold uppercase tracking-widest mb-8">
                  {activeSlide.subtitle}
                </p>
              )}
            </div>
            
            <div className="mt-12 grid grid-cols-1 gap-6">
              {activeSlide.bullets?.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-lg border border-white/10 print:border-white/30 print:bg-transparent">
                  <CheckCircle2 className="text-[#3A6EFF] w-6 h-6 shrink-0" />
                  <span className="text-xl md:text-2xl text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'split':
        if ('leftTitle' in activeSlide) {
            // Layout for Slide 15 (Comparison)
            return (
              <div className={`${baseContainerClass} max-w-6xl mx-auto animate-in fade-in duration-700`}>
                 <h2 className="text-4xl md:text-6xl font-black font-sans uppercase text-white mb-16 leading-none">
                    {activeSlide.title}
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                    <div>
                       <h3 className="text-xl text-[#3A6EFF] font-bold uppercase tracking-widest mb-6 border-b border-[#3A6EFF]/30 pb-2">{(activeSlide as any).leftTitle}</h3>
                       <ul className="space-y-4">
                          {(activeSlide as any).leftBullets.map((item: string, i: number) => (
                             <li key={i} className="text-2xl text-white font-medium">{item}</li>
                          ))}
                       </ul>
                    </div>
                    <div>
                       <h3 className="text-xl text-white font-bold uppercase tracking-widest mb-6 border-b border-white/20 pb-2">{(activeSlide as any).rightTitle}</h3>
                       <ul className="space-y-4">
                          {(activeSlide as any).rightBullets.map((item: string, i: number) => (
                             <li key={i} className="text-2xl text-gray-400 font-medium">{item}</li>
                          ))}
                       </ul>
                    </div>
                 </div>
              </div>
            )
        }
        // Fallback to standard bullet list if not specific split structure
        return (
            <div className={`${baseContainerClass} max-w-5xl mx-auto animate-in fade-in duration-700`}>
              <h2 className="text-4xl md:text-6xl font-black font-sans uppercase text-white mb-12 leading-none">
                {activeSlide.title}
              </h2>
              <div className="bg-[#3A6EFF]/10 border border-[#3A6EFF]/30 p-10 rounded-xl print:bg-transparent print:border-[#3A6EFF]">
                 <ul className="space-y-6">
                    {activeSlide.bullets?.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-xl md:text-2xl text-white font-light">
                        <span className="mt-2.5 w-2 h-2 bg-[#3A6EFF] rounded-full shrink-0"></span>
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
        );

      case 'final':
        return (
          <div className={`${baseContainerClass} items-center text-center max-w-4xl mx-auto animate-in zoom-in duration-700`}>
             <div className="w-20 h-1 bg-[#3A6EFF] mb-12"></div>
             <h2 className="text-5xl md:text-7xl font-black font-sans uppercase text-white mb-12 leading-none tracking-tight">
               {activeSlide.title}
             </h2>
             <div className="flex flex-col gap-6 items-center">
                {activeSlide.bullets?.map((item, i) => (
                  <div key={i} className="text-2xl md:text-3xl text-gray-300 font-light">
                    {item}
                  </div>
                ))}
             </div>
             <div className="mt-20 opacity-50 text-sm uppercase tracking-[0.2em] text-white">
                Tap-IT × Capri Partners
             </div>
          </div>
        );

      default:
        // Standard Content Slide
        return (
          <div className={`${baseContainerClass} max-w-5xl mx-auto animate-in slide-in-from-right-4 duration-500`}>
            <h2 className="text-4xl md:text-6xl font-black font-sans uppercase text-white mb-12 leading-none flex items-center gap-4">
              <span className="text-[#3A6EFF] text-2xl font-bold tracking-widest opacity-50">0{activeSlide.id}</span>
              {activeSlide.title}
            </h2>
            <ul className="space-y-6 md:space-y-8 pl-4">
              {activeSlide.bullets?.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-2xl md:text-3xl text-gray-200 font-light leading-relaxed group">
                  <span className="mt-3 w-2 h-2 bg-gray-500 group-hover:bg-[#3A6EFF] transition-colors rounded-full shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[#081A57] text-white overflow-hidden relative font-sans selection:bg-[#3A6EFF] selection:text-white print:overflow-visible print:h-auto">
      
      <style>{`
         @media print {
           @page { 
             size: 1920px 1080px; 
             margin: 0; 
           }
           html, body {
             min-width: 1920px !important;
             background-color: #081A57 !important;
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
           /* Ensure text is visible and layout is robust */
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

      {/* --- INTERACTIVE VIEW (Hidden on Print) --- */}
      <div className="print-hidden h-screen flex flex-col relative">
          {/* Background Texture - Minimal/Premium */}
          <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3A6EFF_0%,_transparent_40%)]"></div>
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          {/* Header / Logo */}
          <header className="absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-start opacity-80 hover:opacity-100 transition-opacity">
            <Link href="/" className="flex flex-col">
                <span className="font-black text-xl tracking-tight leading-none text-white">TAP-IT</span>
                <span className="text-[10px] text-[#3A6EFF] uppercase tracking-[0.3em] font-bold">Capri Partners</span>
            </Link>
            <button 
               onClick={() => window.print()}
               className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#081A57] transition-all group"
            >
               <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
               <span className="hidden md:inline">Download Deck</span>
            </button>
          </header>

          {/* Main Slide Area */}
          <main className="flex-grow relative z-10 w-full h-full">
             {renderSlideContent(slides[currentSlide])}
          </main>

          {/* Footer / Controls */}
          <footer className="absolute bottom-0 left-0 w-full p-8 z-20 flex justify-between items-end">
             <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                {currentSlide + 1} <span className="text-gray-700">/</span> {slides.length}
             </div>
             <div className="flex gap-4">
                 <button 
                   onClick={prevSlide}
                   disabled={currentSlide === 0}
                   className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#081A57] transition-all disabled:opacity-0"
                 >
                   <ArrowLeft size={20} />
                 </button>
                 <button 
                   onClick={nextSlide}
                   disabled={currentSlide === slides.length - 1}
                   className="w-12 h-12 rounded-full bg-[#3A6EFF] text-white flex items-center justify-center hover:bg-white hover:text-[#081A57] transition-all shadow-lg disabled:opacity-0"
                 >
                   <ArrowRight size={20} />
                 </button>
             </div>
          </footer>
      </div>

      {/* --- PRINT VIEW (Visible only on Print) --- */}
      <div className="hidden print-visible w-full bg-[#081A57]">
          {slides.map((slide, index) => (
             <div key={slide.id} className="print-slide flex flex-col bg-[#081A57] text-white" style={{ pageBreakAfter: 'always' }}>
                 {/* Replicated Background for Print */}
                 <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#3A6EFF_0%,_transparent_40%)]"></div>
                     <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                 </div>

                 {/* Print Header */}
                 <div className="absolute top-8 left-8 z-10 flex flex-col opacity-60">
                    <span className="font-black text-xl tracking-tight leading-none text-white">TAP-IT</span>
                    <span className="text-[10px] text-[#3A6EFF] uppercase tracking-[0.3em] font-bold">Capri Partners</span>
                 </div>

                 {/* Content */}
                 <div className="relative z-10 flex-grow flex flex-col justify-center">
                    {renderSlideContent(slide)}
                 </div>

                 {/* Print Footer */}
                 <div className="absolute bottom-8 right-8 z-10 text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {index + 1} / {slides.length}
                 </div>
             </div>
          ))}
      </div>
      
    </div>
  );
};

export default CapriPitchPage;
