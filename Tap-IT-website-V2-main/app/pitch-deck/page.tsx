'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ArrowLeft, ChevronRight, ChevronLeft, Maximize2, Minimize2, Circle, Disc } from 'lucide-react';
import Link from '../../components/Link';

const slides = [
  {
    id: 'title',
    layout: 'center',
    content: (
      <div className="text-center animate-in fade-in zoom-in duration-700">
        <div className="inline-block px-4 py-2 border border-[#3A6EFF] text-[#3A6EFF] text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-8 rounded-full">
          Investment Opportunity
        </div>
        <h1 className="text-6xl md:text-8xl font-black font-sans uppercase leading-none mb-6 text-white tracking-tight">
          Tap-IT
        </h1>
        <p className="text-xl md:text-3xl text-blue-200 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
          The Enterprise-Grade IT Engine for the <span className="text-white font-bold">SME Mass Market</span>.
        </p>
      </div>
    )
  },
  {
    id: 'problem',
    layout: 'split',
    title: "The Problem",
    content: (
        <div className="space-y-8 animate-in slide-in-from-left duration-500">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
                SME IT is <span className="text-red-400">Broken</span>.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-gray-300">
                <div className="flex items-start gap-4">
                    <span className="text-red-400 font-bold font-mono">01</span>
                    <p><strong>Fragmentation:</strong> Dozens of disconnected SaaS tools, vendors, and invoices.</p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-red-400 font-bold font-mono">02</span>
                    <p><strong>Security Risks:</strong> No enterprise-grade protection; prime targets for ransomware.</p>
                </div>
                <div className="flex items-start gap-4">
                    <span className="text-red-400 font-bold font-mono">03</span>
                    <p><strong>Reactive Support:</strong> "Break-fix" models that profit from your downtime.</p>
                </div>
            </div>
        </div>
    ),
    visual: (
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-full flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay"></div>
             <div className="grid grid-cols-2 gap-4 w-full max-w-md opacity-80">
                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded flex items-center justify-center text-red-300 font-bold uppercase tracking-widest text-xs animate-pulse">Disconnected</div>
                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded flex items-center justify-center text-red-300 font-bold uppercase tracking-widest text-xs animate-pulse delay-100">Unsafe</div>
                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded flex items-center justify-center text-red-300 font-bold uppercase tracking-widest text-xs animate-pulse delay-200">Slow</div>
                <div className="bg-red-500/10 border border-red-500/30 p-6 rounded flex items-center justify-center text-red-300 font-bold uppercase tracking-widest text-xs animate-pulse delay-300">Costly</div>
             </div>
        </div>
    )
  },
  {
    id: 'solution',
    layout: 'split',
    title: "The Solution",
    content: (
        <div className="space-y-8 animate-in slide-in-from-left duration-500">
             <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
                The Tap-IT <span className="text-[#3A6EFF]">Engine</span>.
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
                We don't just fix computers. We deploy a standardized, secure, and fully managed cloud ecosystem.
            </p>
             <div className="space-y-4 text-lg text-white">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="w-3 h-3 bg-[#3A6EFF] rounded-full shrink-0 shadow-[0_0_10px_#3A6EFF]"></div>
                    <p className="font-bold">Standardized "Golden Image"</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="w-3 h-3 bg-[#3A6EFF] rounded-full shrink-0 shadow-[0_0_10px_#3A6EFF]"></div>
                    <p className="font-bold">Enterprise Security (MFA, EDR, SOC)</p>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
                    <div className="w-3 h-3 bg-[#3A6EFF] rounded-full shrink-0 shadow-[0_0_10px_#3A6EFF]"></div>
                    <p className="font-bold">Proactive AI Monitoring</p>
                </div>
            </div>
        </div>
    ),
    visual: (
         <div className="relative w-full h-full min-h-[300px] bg-[#3A6EFF]/10 rounded-2xl border border-[#3A6EFF]/30 flex items-center justify-center overflow-hidden group">
             {/* Tech Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#3A6EFF20_1px,transparent_1px),linear-gradient(to_bottom,#3A6EFF20_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
             
             {/* Glowing Core */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3A6EFF]/40 to-transparent animate-pulse"></div>
             
             <div className="z-10 text-center relative">
                 <div className="w-24 h-24 rounded-full border-4 border-[#3A6EFF] mx-auto mb-4 flex items-center justify-center bg-[#081A57] shadow-[0_0_30px_#3A6EFF]">
                    <div className="w-16 h-16 rounded-full bg-[#3A6EFF] animate-ping opacity-20 absolute"></div>
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                 </div>
                 <div className="font-black uppercase tracking-[0.2em] text-[#3A6EFF] text-sm bg-[#081A57] px-4 py-2 rounded border border-[#3A6EFF]">All-in-One Core</div>
             </div>
         </div>
    )
  },
  {
      id: 'market',
      layout: 'center',
      content: (
          <div className="text-center max-w-6xl mx-auto w-full animate-in zoom-in duration-500">
               <h2 className="text-xl md:text-2xl font-bold text-[#3A6EFF] uppercase tracking-[0.3em] mb-4">Market Opportunity</h2>
               <h1 className="text-5xl md:text-7xl font-black font-sans text-white mb-12">
                 The Missing Middle
               </h1>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-left items-stretch">
                   
                   {/* Card 1 */}
                   <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col opacity-50">
                       <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Consumer IT</h3>
                       <p className="text-sm text-gray-500 mb-4 font-mono">Local Repair Shops</p>
                       <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                           <li className="flex items-center gap-2"><span className="text-red-500">×</span> Too simple</li>
                           <li className="flex items-center gap-2"><span className="text-red-500">×</span> No security</li>
                           <li className="flex items-center gap-2"><span className="text-red-500">×</span> No governance</li>
                       </ul>
                   </div>

                   {/* Card 2 - Winner */}
                   <div className="bg-[#3A6EFF] p-8 rounded-2xl border border-white/30 transform md:scale-110 shadow-[0_0_50px_rgba(58,110,255,0.3)] flex flex-col relative z-10">
                       <div className="absolute top-0 right-0 p-4">
                           <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                       </div>
                       <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-wider">Tap-IT Target</h3>
                       <p className="text-sm text-blue-100 mb-6 font-mono font-bold">SMEs (20-500 seats)</p>
                       <p className="text-white font-medium leading-relaxed mb-6">
                           Companies that need enterprise technology to grow, but lack the enterprise teams to manage it.
                       </p>
                       <div className="mt-auto pt-6 border-t border-white/20">
                           <span className="text-xs font-bold uppercase tracking-widest text-white">Total Addressable Market: <br/><span className="text-lg">€20B+ EU</span></span>
                       </div>
                   </div>

                   {/* Card 3 */}
                   <div className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col opacity-50">
                       <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-wider">Global S.I.</h3>
                       <p className="text-sm text-gray-500 mb-4 font-mono">Accenture / CapGemini</p>
                       <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                           <li className="flex items-center gap-2"><span className="text-red-500">×</span> Too expensive</li>
                           <li className="flex items-center gap-2"><span className="text-red-500">×</span> Too slow</li>
                           <li className="flex items-center gap-2"><span className="text-red-500">×</span> Ignore SMEs</li>
                       </ul>
                   </div>
               </div>
          </div>
      )
  },
  {
      id: 'ecosystem',
      layout: 'split',
      title: "The Ecosystem",
      content: (
          <div className="space-y-6 animate-in slide-in-from-left duration-500">
               <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-white">
                  6 Pillars of <br/><span className="text-[#3A6EFF]">Operational Excellence</span>.
              </h2>
              <p className="text-gray-300 text-lg">
                  We bundle best-in-class vendors into a single subscription.
              </p>
              <div className="grid grid-cols-1 gap-3">
                  {['Productivity & Devices (Microsoft)', 'Security (SentinelOne)', 'Backup (Veeam/Ninja)', 'Connectivity (Odido)', 'Support (Human)', 'Automation (HaloPSA)'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded border border-white/5">
                          <span className="text-[#3A6EFF] font-bold text-xs">0{i+1}</span>
                          <span className="text-white font-bold text-sm uppercase tracking-wider">{item}</span>
                      </div>
                  ))}
              </div>
          </div>
      ),
      visual: (
           <div className="w-full h-full flex items-center justify-center bg-[#081A57] relative rounded-2xl border border-white/10 overflow-hidden">
               {/* Simplified Ecosystem Visual */}
               <div className="absolute w-[400px] h-[400px] border border-[#3A6EFF]/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
               <div className="absolute w-[300px] h-[300px] border border-[#3A6EFF]/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
               <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center z-10 shadow-[0_0_40px_rgba(58,110,255,0.5)]">
                   <div className="text-[#081A57] font-black text-xl">TAP-IT</div>
               </div>
               {/* Orbiting Dots */}
               <div className="absolute w-4 h-4 bg-[#3A6EFF] rounded-full top-1/2 left-[10%] shadow-[0_0_10px_#3A6EFF]"></div>
               <div className="absolute w-4 h-4 bg-[#3A6EFF] rounded-full top-[10%] left-1/2 shadow-[0_0_10px_#3A6EFF]"></div>
               <div className="absolute w-4 h-4 bg-[#3A6EFF] rounded-full bottom-[20%] right-[20%] shadow-[0_0_10px_#3A6EFF]"></div>
           </div>
      )
  },
  {
      id: 'traction',
      layout: 'split',
      title: "Traction",
      content: (
          <div className="space-y-8 animate-in slide-in-from-left duration-500">
               <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-white">
                  Pilot Phase <span className="text-green-400">Active</span>.
              </h2>
              <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <div className="text-4xl font-bold text-white mb-1">Q2 '26</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Full Launch</div>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                      <div className="text-4xl font-bold text-white mb-1">100%</div>
                      <div className="text-xs text-gray-400 uppercase tracking-widest font-bold">Cloud Native</div>
                  </div>
              </div>
              <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Strategic Partners</p>
                  <div className="flex flex-wrap gap-3 opacity-80">
                      <span className="px-4 py-2 bg-white text-[#081A57] font-bold text-xs uppercase tracking-wider rounded">Microsoft</span>
                      <span className="px-4 py-2 bg-white text-[#081A57] font-bold text-xs uppercase tracking-wider rounded">Odido</span>
                      <span className="px-4 py-2 bg-white text-[#081A57] font-bold text-xs uppercase tracking-wider rounded">NinjaOne</span>
                  </div>
              </div>
          </div>
      ),
      visual: (
           <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                <img 
                    src="https://storage.googleapis.com/tap-it-assets-eu/f1-car.jpg" 
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700"
                    alt="Traction"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081A57] via-transparent to-transparent"></div>
           </div>
      )
  },
  {
      id: 'contact',
      layout: 'center',
      content: (
        <div className="text-center animate-in zoom-in duration-700">
            <h2 className="text-xl md:text-2xl font-bold text-[#3A6EFF] uppercase tracking-widest mb-6">Join the Journey</h2>
            <h1 className="text-5xl md:text-7xl font-black font-sans uppercase text-white mb-12 tracking-tight">
              Tap into the Cloud.
            </h1>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
                 <Link href="/" className="px-10 py-5 bg-white text-[#081A57] font-bold uppercase tracking-widest rounded shadow-lg hover:bg-gray-200 transition-colors">
                    View Platform
                 </Link>
                 <Link href="/contact" className="px-10 py-5 border-2 border-[#3A6EFF] text-[#3A6EFF] font-bold uppercase tracking-widest rounded hover:bg-[#3A6EFF] hover:text-white transition-colors shadow-lg shadow-[#3A6EFF]/20">
                    Contact Founder
                 </Link>
            </div>
            <div className="mt-20 text-gray-500 text-xs uppercase tracking-widest font-mono">
                Confidential • Capri Partners x Tap-IT • 2025
            </div>
        </div>
      )
  }
];

const PitchDeckPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slide = slides[currentSlide];

  return (
    <div className="h-screen w-screen bg-[#081A57] text-white overflow-hidden flex flex-col relative font-sans">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A6EFF] rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900 rounded-full blur-[150px] opacity-20"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Header */}
      <header className="relative z-20 flex justify-between items-center p-6 md:p-8">
          <Link href="/" className="flex items-center gap-2 group opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                  <span className="font-bold text-[#3A6EFF]">T</span>
              </div>
              <span className="font-bold text-sm tracking-widest uppercase">Tap-IT Deck</span>
          </Link>
          <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              Slide {currentSlide + 1} / {slides.length}
          </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative z-10 flex items-center justify-center p-6 md:p-12 lg:p-16">
          
          {slide.layout === 'center' && (
              <div className="w-full max-w-6xl mx-auto">
                  {slide.content}
              </div>
          )}

          {slide.layout === 'split' && (
              <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full">
                  <div className="order-2 lg:order-1">
                      {slide.title && (
                          <div className="flex items-center gap-3 mb-8">
                              <div className="w-12 h-1 bg-[#3A6EFF]"></div>
                              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#3A6EFF]">{slide.title}</h3>
                          </div>
                      )}
                      {slide.content}
                  </div>
                  <div className="order-1 lg:order-2 h-[300px] lg:h-[500px]">
                      {slide.visual}
                  </div>
              </div>
          )}

      </main>

      {/* Footer / Controls */}
      <footer className="relative z-20 p-6 md:p-8 flex justify-between items-end">
          
          {/* Progress Dots */}
          <div className="flex gap-2">
              {slides.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#3A6EFF] w-8' : 'bg-white/20 hover:bg-white/50'}`}
                  />
              ))}
          </div>

          {/* Nav Controls */}
          <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#081A57] transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                  <ArrowLeft size={20} />
              </button>
              <button 
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="w-12 h-12 rounded-full bg-[#3A6EFF] text-white flex items-center justify-center hover:bg-white hover:text-[#081A57] transition-all shadow-lg disabled:opacity-30 disabled:hover:bg-[#3A6EFF] disabled:hover:text-white"
              >
                  <ArrowRight size={20} />
              </button>
          </div>
      </footer>

    </div>
  );
};

export default PitchDeckPage;
