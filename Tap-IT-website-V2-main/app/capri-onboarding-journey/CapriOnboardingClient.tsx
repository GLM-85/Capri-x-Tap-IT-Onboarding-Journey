"use client";
/* eslint-disable react/no-unknown-property */
import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import Navbar from '../../components/Navbar';
import SiteFooter from '../../components/SiteFooter';
import { phases } from './data';

const CapriOnboardingClient: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [generating, setGenerating] = useState(false);

  const handleDownloadPdf = useCallback(async () => {
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
      const targetW = 1200; // points
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
    <div className="min-h-screen bg-[#EEE8E4] flex flex-col font-sans text-[#202020] pt-[80px]">
      <div className="pdf-ignore">
        <Navbar variant="solid" />
      </div>

      <main className="flex-grow">
        <div className="pdf-ignore sticky top-[104px] z-[90] flex justify-end container mx-auto max-w-6xl px-6">
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

        <div ref={containerRef}>
        {/* --- HERO --- */}
        <section className="relative pt-12 md:pt-20 pb-14 px-6 overflow-hidden">
           {/* Decor */}
           <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#BDB9B6] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

           <div className="container mx-auto max-w-6xl relative z-10 text-center md:text-left">
              <div className="inline-block px-4 py-2 bg-[#336F73] text-white text-xs font-bold uppercase tracking-widest rounded-full mb-8">
                  Journey Overview
              </div>
                        <h1 className="text-3xl md:text-5xl font-black font-sans uppercase leading-[0.9] tracking-tight mb-8 text-[#204445]">
                 Capri × Tap-IT <br />
                 <span className="text-[#FF7650]">Onboarding Journey</span>
              </h1>
              <p className="text-xl md:text-3xl font-light opacity-90 max-w-3xl leading-normal mb-10 md:text-left mx-auto md:mx-0">
                  Een gefaseerde aanpak waarin we Capri begeleiden naar een veilige, schaalbare en investeerbare IT-fundering, zonder snelheid of ondernemerschap te remmen.
              </p>
           </div>
        </section>

        {/* --- GUIDING PRINCIPLES --- */}
        <section className="py-6 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-[2rem] shadow-sm border border-[#E1E9E6] p-6 md:p-8">
              <div className="inline-block px-3 py-1 bg-[#336F73]/10 text-[#336F73] text-[10px] font-bold uppercase tracking-widest rounded-full mb-5">
                Guiding Principles
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-[#E1E9E6]">
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#204445] mb-4">
                    Samenwerkingsprincipe
                  </h3>
                  <ul className="space-y-3 text-sm text-[#202020]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#204445] rounded-full mt-2 shrink-0"></span>
                      Capri levert context, input en businessdoelen
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#204445] rounded-full mt-2 shrink-0"></span>
                      TAP-IT valideert, ontwerpt en bepaalt de oplossing
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#204445] rounded-full mt-2 shrink-0"></span>
                      Besluiten worden genomen op richting & scope, niet op technische invulling
                    </li>
                  </ul>
                </div>
                <div className="bg-[#FAFAF9] rounded-2xl p-6 border border-[#E1E9E6]">
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#204445] mb-4">
                    Governance
                  </h3>
                  <ul className="space-y-3 text-sm text-[#202020]">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#204445] rounded-full mt-2 shrink-0"></span>
                      Elke fase eindigt met een expliciet Go / No-Go akkoordmoment
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#204445] rounded-full mt-2 shrink-0"></span>
                      Akkoord = basis voor volgende fase, geen detailgoedkeuring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PHASE OVERVIEW --- */}
        <section className="py-10 px-6">
           <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-8">
                 {phases.map((phase) => (
                    <Link 
                        key={phase.id} 
                        href={`/capri-onboarding-journey/${phase.slug}`}
                        className="group bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-transparent hover:border-[#FF7650] hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center relative z-10">
                            {/* Number Badge */}
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#EEE8E4] rounded-full flex items-center justify-center shrink-0 group-hover:bg-[#FF7650] transition-colors duration-300">
                                <span className="text-2xl md:text-3xl font-black text-[#336F73] group-hover:text-white transition-colors">
                                    {phase.number}
                                </span>
                            </div>
                            
                            {/* Content */}
                            <div className="flex-grow">
                                <h3 className="text-3xl md:text-4xl font-black font-sans uppercase text-[#204445] mb-2 group-hover:text-[#FF7650] transition-colors">
                                    {phase.title}
                                </h3>
                                <p className="text-base md:text-lg text-[#202020] font-medium opacity-70 mb-4">
                                    {phase.shortDescription}
                                </p>
                                <p className="text-sm md:text-base text-[#202020] opacity-80 mb-4">
                                    {phase.overviewDecision}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-3 py-1 bg-[#336F73]/5 text-[#336F73]/70 text-[10px] font-bold uppercase tracking-wider rounded">
                                        Deliverable: {phase.deliverables[0]}
                                    </span>
                                </div>
                            </div>

                            {/* CTA Arrow */}
                            <div className="w-12 h-12 rounded-full border border-[#BDB9B6] flex items-center justify-center text-[#202020] group-hover:bg-[#FF7650] group-hover:border-[#FF7650] group-hover:text-white transition-all shrink-0">
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                 ))}
              </div>
           </div>
        </section>

        {/* --- HOW IT WORKS --- */}
        <section className="py-20 px-6 bg-[#204445] text-white mt-12">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3 max-w-md">
                        <div className="inline-block px-3 py-1 bg-[#336F73] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                            Werkwijze
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black font-sans uppercase leading-none mb-6">
                            Hoe werkt deze journey?
                        </h2>
                        <p className="text-lg opacity-80 leading-loose">
                            Onze aanpak is ontworpen om duidelijkheid en voorspelbaarheid te creëren. Geen verrassingen, wel resultaat. Dit vormt de basis voor alle fases.
                        </p>
                    </div>
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {[
                            { title: "Gefaseerde Aanpak", desc: "We knippen het project op in behapbare stukken. Elke fase heeft een duidelijk begin en eind." },
                            { title: "Expliciete Akkoordmomenten", desc: "We gaan pas door naar de volgende fase als er een formeel 'Go' besluit is genomen." },
                            { title: "Standaard vóór Maatwerk", desc: "We gebruiken bewezen standaarden tenzij er een dwingende reden is om af te wijken." },
                            { title: "Samenwerking", desc: "Capri levert input en context, Tap-IT is verantwoordelijk voor de architectuur en oplossing." }
                        ].map((item, i) => (
                            <div key={i} className="bg-[#336F73]/80 p-6 rounded-2xl">
                                <div className="w-8 h-8 bg-[#FF7650] rounded-full mb-4 flex items-center justify-center">
                                    <CheckCircle2 size={16} className="text-white" />
                                </div>
                                <h4 className="text-lg font-bold uppercase mb-2">{item.title}</h4>
                                <p className="opacity-80 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 bg-[#336F73]/80 p-8 md:p-10 rounded-2xl">
                    <div className="inline-block px-3 py-1 bg-[#204445] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                        Waarom deze aanpak?
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black uppercase mb-6">
                        Business-waarde zonder innovatie te remmen
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm md:text-base">
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                            Beschermt groei zonder innovatie te vertragen, Operational resilience.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                            Maakt risico’s expliciet vóór ze schade veroorzaken, Risk-adjusted value.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                            Ondersteunt professionalisering richting klanten, partners en investeerders, Enterprise compatibility.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 shrink-0"></span>
                            Creëert exit- en due-diligence-readiness
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </div>
      </main>

      <SiteFooter variant="capri" />
    </div>
  );
};

export default CapriOnboardingClient;

