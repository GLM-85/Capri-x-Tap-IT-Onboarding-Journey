'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Download, FileText, Target, Users } from 'lucide-react';
import Navbar from '../../../components/Navbar';
import SiteFooter from '../../../components/SiteFooter';
import type { PhaseData } from '../data';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// --- ACCORDION COMPONENT ---
const ContentCard = ({
  title,
  children,
  defaultOpen = true,
  id,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  id?: string;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div id={id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-5 scroll-mt-32">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group bg-white relative z-10"
        type="button"
      >
        <h2 className="text-xl md:text-2xl font-black text-[#202020] uppercase tracking-wide group-hover:text-[#FF7650] transition-colors">
            {title}
        </h2>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#FF7650] text-white' : 'bg-[#EEE8E4] text-[#202020] group-hover:bg-[#FF7650] group-hover:text-white'}`}>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-[#FAFAF9] ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 md:px-8 md:py-6 text-lg text-gray-700 leading-relaxed border-t border-[#E1E9E6]">
            {children}
        </div>
      </div>
    </div>
  );
};

// --- CHECKLIST COMPONENT ---
const ChecklistSection = ({ checklist }: { checklist: any }) => {
    return (
        <div className="bg-[#204445] text-white rounded-xl p-8 md:p-10 shadow-lg mt-10 scroll-mt-32" id="checklist">
            <div className="flex items-center gap-4 mb-8">
                 <div className="w-8 h-8 rounded-full border-2 border-[#FF7650] flex items-center justify-center text-[#FF7650]">
                    <CheckCircle2 size={16} />
                 </div>
                 <h2 className="text-2xl md:text-3xl font-black uppercase tracking-wide">Capri Checklist</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/10 pt-8">
                {/* Column 1 */}
                <div>
                    <h4 className="flex items-center gap-2 text-[#FF7650] font-bold uppercase text-xs tracking-[0.2em] mb-4">
                        <FileText size={14} /> Wat hebben we nodig?
                    </h4>
                    <ul className="space-y-3">
                        {checklist.needs.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-white text-sm font-medium leading-relaxed">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0 opacity-50"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Column 2 */}
                <div>
                    <h4 className="flex items-center gap-2 text-[#FF7650] font-bold uppercase text-xs tracking-[0.2em] mb-4">
                        <Users size={14} /> Wie sluit aan?
                    </h4>
                    <ul className="space-y-3">
                        {checklist.roles.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-white text-sm font-medium leading-relaxed">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0 opacity-50"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Column 3 */}
                <div>
                    <h4 className="flex items-center gap-2 text-[#FF7650] font-bold uppercase text-xs tracking-[0.2em] mb-4">
                        <Target size={14} /> Besluiten (Go/No-Go)
                    </h4>
                    <ul className="space-y-3">
                        {checklist.decisions.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-white text-sm font-bold leading-relaxed">
                                <CheckCircle2 size={14} className="text-[#FF7650] mt-1 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

// --- SIDEBAR NAVIGATION ---
const SidebarNav = ({ phase }: { phase: PhaseData }) => {
    return (
        <div className="hidden lg:block w-full">
            {/* Menu Card (matches screenshot) */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#336F73] mb-4">
                    In deze fase
                </h3>
                <div className="h-px bg-gray-100 mb-4"></div>
                <nav className="flex flex-col gap-4">
                    {[
                        { id: 'doel', label: 'Doel van deze fase' },
                        { id: 'activiteiten', label: 'Wat doen we?' },
                        phase.questions ? { id: 'vragen', label: 'Kernvragen' } : null,
                        { id: 'deliverable', label: 'Deliverable' },
                    ].filter(Boolean).map((link: any) => (
                        <a
                           key={link.id}
                           href={`#${link.id}`}
                           className="text-[#202020] font-bold hover:text-[#FF7650] transition-colors text-sm"
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="h-px bg-gray-100 my-2"></div>

                    <a href="#checklist" className="flex items-center gap-3 text-[#336F73] font-bold text-sm hover:text-[#FF7650] transition-colors">
                        <div className="w-5 h-5 rounded-full border border-[#336F73]/30 flex items-center justify-center">
                            <CheckCircle2 size={12} />
                        </div>
                        Capri Checklist
                    </a>
                </nav>
            </div>

            {/* Help Widget */}
            <div className="bg-[#EBDDD7] rounded-xl p-6 border border-transparent">
                <h4 className="text-[#FF7650] font-bold uppercase text-xs tracking-widest mb-3">Hulp nodig?</h4>
                <p className="text-sm text-[#202020] mb-4 leading-relaxed">
                    Neem direct contact op met je Customer Success Manager.
                </p>
                <Link href="/contact" className="text-xs font-bold underline decoration-[#202020] hover:text-[#FF7650] hover:decoration-[#FF7650] transition-all">
                    Contact opnemen
                </Link>
            </div>
        </div>
    )
}

// --- MAIN CLIENT COMPONENT ---
export default function PhaseDetailClient({
  phase,
  allPhases,
}: {
  phase: PhaseData;
  allPhases: PhaseData[];
}) {
  const nextPhase = allPhases.find((p) => p.id === phase.nextPhase);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = React.useState(false);

  const handleDownloadPdf = React.useCallback(async () => {
    if (!containerRef.current || generating) return;
    setGenerating(true);
    document.body.classList.add('pdf-exporting');
    try {
      await new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 50)));
      const target = containerRef.current;
      const canvas = await html2canvas(target, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#EEE8E4',
        windowWidth: document.documentElement.clientWidth,
        windowHeight: target.scrollHeight,
      });

      const imgData = canvas.toDataURL('image/png');
      const targetW = 1200;
      const targetH = targetW * (canvas.height / canvas.width);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: [targetW, targetH],
      });
      pdf.addImage(imgData, 'PNG', 0, 0, targetW, targetH, undefined, 'FAST');
      pdf.save('capri-onboarding-journey.pdf');
    } catch (err) {
      console.error('PDF generation failed', err);
    } finally {
      document.body.classList.remove('pdf-exporting');
      setGenerating(false);
    }
  }, [generating]);

  return (
    <div className="min-h-screen bg-[#ECE8E4] flex flex-col font-sans text-[#202020] pt-[80px]">
      <div className="pdf-ignore">
        <Navbar variant="solid" />
      </div>

      <main className="flex-grow">
        <div className="pdf-ignore sticky top-[104px] z-50 flex justify-end container mx-auto max-w-7xl px-6">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={generating}
            className="inline-flex items-center justify-center bg-[#204445] text-white w-10 h-10 rounded-full shadow-md hover:bg-[#1f3233] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            aria-label="Download PDF"
            title="Download PDF"
          >
            <Download size={18} />
          </button>
        </div>
        
        {/* --- HERO (Dark Green) --- */}
        <div ref={containerRef}>
        <section className="bg-[#204445] text-white pt-16 pb-24 px-6 relative overflow-hidden">
             {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#336F73] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* Breadcrumb */}
                <Link
                    href="/capri-onboarding-journey"
                    className="inline-flex items-center gap-2 text-[#FF7650] hover:text-white transition-colors text-xs font-bold uppercase tracking-[0.2em] mb-12"
                >
                    <ArrowLeft size={14} /> Terug naar overzicht
                </Link>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                     {/* Big Number Circle */}
                     <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#FF7650] flex items-center justify-center shrink-0 shadow-2xl shadow-[#FF7650]/20">
                        <span className="text-4xl md:text-7xl font-black text-white">{phase.number}</span>
                     </div>
                     
                     {/* Text Content */}
                     <div className="max-w-4xl pt-2">
                        <h1 className="text-4xl md:text-7xl font-black font-sans uppercase leading-[0.9] mb-6">
                            {phase.title}
                        </h1>
                        <p className="text-lg md:text-2xl font-bold text-white/90 leading-relaxed max-w-3xl mb-8">
                            {phase.heroSummary}
                        </p>
                        
                        {/* Tags as Pills (Dark Grey) */}
                        <div className="flex flex-wrap gap-3">
                            {phase.tags.map((tag, i) => {
                                // Extract just the keyword if possible "Doel: Begrip" -> "Begrip"
                                const label = tag.split(': ')[1] || tag; 
                                return (
                                    <span key={i} className="px-4 py-2 bg-[#336F73]/40 backdrop-blur-sm border border-white/10 rounded-full text-[11px] font-black uppercase tracking-widest text-white">
                                        {label}
                                    </span>
                                )
                            })}
                        </div>
                     </div>
                </div>
            </div>
        </section>

        {/* --- PROGRESS BAR (Sticky) --- */}
        <div className="bg-white border-b border-gray-100 sticky top-[72px] z-50 shadow-sm">
             <div className="container mx-auto max-w-5xl px-6 py-6">
                 <div className="flex justify-between items-center relative">
                      {/* Grey Line */}
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>
                      
                      {allPhases.map((p, i) => {
                          const isCurrent = p.number === phase.number;
                          // const isPast = p.number < phase.number;
                          
                          return (
                              <Link key={p.id} href={`/capri-onboarding-journey/${p.slug}`} className="group relative flex flex-col items-center justify-center">
                                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-sm md:text-lg transition-all duration-300
                                      ${isCurrent ? 'bg-[#FF7650] text-white scale-110 shadow-lg' : 
                                        'bg-[#E5E5E5] text-[#A0A0A0] hover:bg-[#D4D4D4]'}
                                  `}>
                                      {p.number}
                                  </div>
                                  {isCurrent && (
                                      <div className="absolute top-full mt-6 text-[10px] font-bold uppercase tracking-widest text-[#FF7650] whitespace-nowrap">
                                          FASE {p.number}
                                      </div>
                                  )}
                              </Link>
                          )
                      })}
                 </div>
             </div>
        </div>

        {/* --- MAIN LAYOUT (Sidebar + Content) --- */}
        <section className="py-12 px-6 container mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                
                {/* Left Column: Sidebar (3/12) */}
                <div className="lg:w-3/12 lg:sticky lg:top-32 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
                     <SidebarNav phase={phase} />
                </div>

                {/* Right Column: Content (9/12) */}
                <div className="lg:w-9/12">
                    
                    {/* 1. DOEL */}
                    <ContentCard title="Doel van deze fase" id="doel" defaultOpen={true}>
                        <p className="text-[#202020]">{phase.goal}</p>
                    </ContentCard>

                    {/* 2. ACTIVITEITEN */}
                    <ContentCard title="Wat doen we?" id="activiteiten" defaultOpen={true}>
                        <ul className="space-y-3">
                            {phase.activities.map((act, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-[#202020] rounded-full mt-2.5 shrink-0"></span>
                                    <span className="leading-relaxed text-[#202020]">
                                        <strong className="font-bold text-[#202020]">{act.title}:</strong>{' '}
                                        <span className="text-gray-700">
                                            {act.content.join(' ')}
                                        </span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </ContentCard>

                    {/* 3. KERNVRAGEN */}
                    {phase.questions && (
                        <ContentCard title="Kernvragen" id="vragen" defaultOpen={true}>
                            <ul className="space-y-3 mb-6">
                                {phase.questions.map((q, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[#202020]">
                                        <div className="w-1.5 h-1.5 bg-[#202020] rounded-full mt-2.5 shrink-0"></div>
                                        {q}
                                    </li>
                                ))}
                            </ul>
                            {/* Callout Box Inside Accordion */}
                            <div className="bg-[#E9ECEC] rounded-xl p-6 border-l-4 border-[#336F73]">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#336F73] block mb-2">
                                    Wat betekent dit voor Capri?
                                </span>
                                <p className="font-bold text-[#204445]">
                                    "{phase.activities[0]?.callout || "We zorgen dat de oplossing past bij jullie dagelijkse realiteit."}"
                                </p>
                            </div>
                        </ContentCard>
                    )}

                    {/* 4. DELIVERABLE */}
                    <ContentCard title="Deliverable" id="deliverable" defaultOpen={true}>
                        {phase.id === 'fase-0' ? (
                            <div>
                                <div className="flex items-center gap-4">
                                    <h3 className="text-2xl font-bold text-[#202020]">
                                        {phase.deliverables[0]}
                                    </h3>
                                </div>

                                <p className="text-[#202020] mt-3">
                                    Een compact, helder profiel dat de context van Capri samenvat en zorgt dat we hetzelfde beeld hebben.
                                </p>
                                <p className="text-[#202020] mt-2">
                                    We gebruiken dit als input voor Fase 1 (High Level Design), zodat keuzes straks aansluiten op jullie dagelijkse praktijk.
                                </p>

                                {phase.deliverables.length > 1 && (
                                    <ul className="space-y-3 mt-4">
                                        {phase.deliverables.slice(1).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#202020]">
                                                <div className="w-1.5 h-1.5 bg-[#202020] rounded-full mt-2.5 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : phase.id === 'fase-1' ? (
                            <div>
                                <div className="flex items-center gap-4">
                                    <h3 className="text-2xl font-bold text-[#202020]">
                                        {phase.deliverables[0]}
                                    </h3>
                                </div>

                                <p className="text-[#202020] mt-3">
                                    Het High Level Design beschrijft de keuzes en uitgangspunten op hoofdlijnen: hoe jullie willen werken en welke afspraken daarbij horen.
                                </p>
                                <p className="text-[#202020] mt-2">
                                    Capri gebruikt dit om intern af te stemmen en om richting te geven aan Fase 2 (Blueprint). Dit is nadrukkelijk geen bouw- of implementatieplan.
                                </p>

                                {phase.deliverables.length > 1 && (
                                    <ul className="space-y-3 mt-4">
                                        {phase.deliverables.slice(1).map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-[#202020]">
                                                <div className="w-1.5 h-1.5 bg-[#202020] rounded-full mt-2.5 shrink-0"></div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-bold text-[#202020]">
                                    {phase.deliverables[0]}
                                </h3>
                            </div>
                        )}
                    </ContentCard>

                    {/* 5. CHECKLIST (Dark Section) */}
                    <ChecklistSection checklist={phase.checklist} />

                    {/* 6. NEXT STEP (Floating Pill) */}
                    <div className="flex justify-end mt-12">
                        {nextPhase ? (
                            <div className="flex flex-col items-end">
                                {phase.id === 'fase-0' && nextPhase.number === 1 && (
                                    <p className="text-[#202020] mb-3">
                                        Na bevestiging van het Capri Customer Profile is dit de logische volgende stap.
                                    </p>
                                )}
                                <Link 
                                    href={`/capri-onboarding-journey/${nextPhase.slug}`}
                                    className="bg-white pl-8 pr-2 py-2 rounded-full shadow-xl border border-gray-100 flex items-center gap-4 hover:scale-105 transition-transform group"
                                >
                                    <div className="text-right">
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-[#BDB9B6]">Volgende stap</span>
                                        <span className="block text-lg font-bold text-[#202020]">Ga naar Fase {nextPhase.number}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#F5F3F0] flex items-center justify-center group-hover:bg-[#FF7650] group-hover:text-white transition-colors">
                                        <ArrowRight size={20} />
                                    </div>
                                </Link>
                            </div>
                        ) : (
                            <div className="bg-white pl-8 pr-2 py-2 rounded-full shadow-xl border border-gray-100 flex items-center gap-4">
                                 <div className="text-right">
                                    <span className="block text-[10px] font-bold uppercase tracking-widest text-[#FF7650]">Journey Complete</span>
                                    <span className="block text-lg font-bold text-[#202020]">Start samenwerking</span>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-[#FF7650] text-white flex items-center justify-center">
                                    <CheckCircle2 size={20} />
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
