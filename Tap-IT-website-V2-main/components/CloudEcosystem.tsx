'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Monitor, Network, Database, Ticket, Users, ArrowRight, Activity } from 'lucide-react';
import Link from './Link';

interface EcosystemItemData {
  id: number;
  title: string;
  desc: string;
  poweredBy: string;
  icon: React.ReactNode;
  position: string; 
}

const ecosystemItems: EcosystemItemData[] = [
  {
    id: 0,
    title: "Productivity & Devices",
    desc: "Pre-enrolled in Autopilot. Full lifecycle management.",
    poweredBy: "Microsoft 365, Intune",
    icon: <Monitor size={18} />,
    position: "bottom-10 left-1/2 -translate-x-1/2 text-center origin-bottom", 
  },
  {
    id: 1,
    title: "Security & Protection",
    desc: "AI-driven protection detects and isolates threats instantly.",
    poweredBy: "Defender, SentinelOne",
    icon: <ShieldCheck size={18} />,
    position: "left-10 top-1/2 -translate-y-1/2 text-left origin-left", 
  },
  {
    id: 2,
    title: "Backup & Continuity",
    desc: "Verified restore points tested automatically.",
    poweredBy: "Ninja-One Backup",
    icon: <Database size={18} />,
    position: "left-10 top-1/2 -translate-y-1/2 text-left origin-left", 
  },
  {
    id: 3,
    title: "Connectivity & Perf.",
    desc: "Secure fiber, 5G backup & smart self-healing Wi-Fi.",
    poweredBy: "Odido, Juniper Mist AI",
    icon: <Network size={18} />,
    position: "top-10 left-1/2 -translate-x-1/2 text-center origin-top", 
  },
  {
    id: 4,
    title: "Automation & Ticketing",
    desc: "Automated patching and fast remediation.",
    poweredBy: "Ninja-One, HaloPSA",
    icon: <Ticket size={18} />,
    position: "right-10 top-1/2 -translate-y-1/2 text-right origin-right", 
  },
  {
    id: 5,
    title: "Support & Governance",
    desc: "Engineers who actually know your environment.",
    poweredBy: "People who care",
    icon: <Users size={18} />,
    position: "right-10 top-1/2 -translate-y-1/2 text-right origin-right", 
  },
];

const CloudEcosystem: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  
  // Mobile Wheel Refs
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        setScrollProgress(scrollLeft / maxScroll);
      }
    };
    
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', handleScroll);
    return () => el?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="ecosystem" className="py-16 md:py-20 2xl:py-24 bg-gray-50 overflow-hidden">
      <style>{`
        @keyframes eco-pulse-ring {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; border-width: 4px; }
          10% { opacity: 0.8; }
          30% { transform: translate(-50%, -50%) scale(2.0); opacity: 0; border-width: 0px; }
          100% { transform: translate(-50%, -50%) scale(2.0); opacity: 0; border-width: 0px; }
        }
      `}</style>
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-black font-sans uppercase text-[#081A57] mb-4 tracking-tight">
            TAP-IT'S CLOUD ECOSYSTEM.
          </h2>
          <p className="text-sm md:text-base 2xl:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            One Partner. Every Layer. Seamlessly Connected.
          </p>
        </div>

        {/* --- MOBILE: WHEEL SCROLL EFFECT --- */}
        <div className="lg:hidden relative mb-12 h-[380px]">
           
           {/* The Curved Path (Visual Only) */}
           <div className="absolute top-[80px] left-0 w-full h-[200px] overflow-hidden pointer-events-none">
              <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                 <path d="M -50 100 Q 200 0 450 100" fill="none" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" />
              </svg>
           </div>
           <div className="absolute top-[80px] left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#3A6EFF] uppercase bg-gray-50 px-2 tracking-widest z-0">
              Scroll to explore
           </div>

           {/* Scroll Container */}
           <div 
             ref={scrollRef}
             className="flex overflow-x-auto snap-x snap-mandatory pb-8 px-[50vw] no-scrollbar h-full items-center"
           >
              {ecosystemItems.map((item, i) => {
                 return (
                 <div key={item.id} className="snap-center shrink-0 w-[260px] relative px-2 perspective-1000" style={{ perspective: '1000px' }}>
                    
                    {/* Inner Card Container that Rotates */}
                    <div className="wheel-card transition-all duration-300 ease-out origin-center transform-style-3d">
                        
                        {/* Connecting Line to Curve */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-[#3A6EFF]/50"></div>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-[#3A6EFF] rounded-full z-10"></div>

                        {/* Card Content */}
                        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex flex-col relative overflow-hidden h-[240px] justify-between">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                {item.icon}
                            </div>
                            
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="text-[#3A6EFF]">
                                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                                    </div>
                                    <h3 className="font-bold font-sans uppercase text-[#081A57] text-xs leading-tight">{item.title}</h3>
                                </div>
                                
                                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                            
                            <div className="pt-3 border-t border-gray-50">
                                <span className="text-[9px] font-bold text-[#3A6EFF] uppercase block mb-0.5">Powered by</span>
                                <span className="text-[10px] text-gray-700 font-semibold">{item.poweredBy}</span>
                            </div>
                        </div>
                    </div>
                 </div>
              )})}
              
              {/* CTA Card in Slider */}
              <div className="snap-center shrink-0 w-[200px] flex items-center justify-center">
                  <Link href="/ecosystem" className="w-full h-[160px] bg-[#081A57] rounded-xl flex flex-col items-center justify-center text-white p-4 text-center shadow-lg transform translate-y-8">
                      <Activity size={32} className="mb-2 text-[#3A6EFF]" />
                      <span className="text-xs font-bold uppercase tracking-widest">Explore Full Ecosystem</span>
                      <ArrowRight size={16} className="mt-2" />
                  </Link>
              </div>
           </div>
        </div>

        {/* --- DESKTOP: INTERACTIVE HUB (Optimized for 1280px) --- */}
        {/* OPTIMIZATION: Used scale-75 for lg, scale-90 for xl (1280px), scale-100 for 2xl */}
        <div className="hidden lg:flex flex-col items-center justify-center relative w-full lg:scale-75 xl:scale-90 2xl:scale-100 origin-center transition-transform duration-500">
          <div className="relative w-[500px] h-[500px] flex items-center justify-center mb-0">
            
            {/* Decor Rings */}
            <div className={`absolute w-[280px] h-[280px] rounded-full border border-[#3A6EFF]/20 animate-[spin_60s_linear_infinite] transition-all duration-700 pointer-events-none ${activeId !== null ? 'border-[#3A6EFF]/40 scale-105' : ''}`}></div>
            <div className={`absolute w-[240px] h-[240px] rounded-full border border-[#3A6EFF]/40 transition-all duration-700 pointer-events-none ${activeId !== null ? 'scale-105' : ''}`}></div>
            <div className="absolute w-[320px] h-[1px] bg-[#3A6EFF]/10 rotate-45 pointer-events-none"></div>
            <div className="absolute w-[320px] h-[1px] bg-[#3A6EFF]/10 -rotate-45 pointer-events-none"></div>
            <div className="absolute w-[360px] h-[360px] rounded-full border-[1px] border-dashed border-gray-300 opacity-50 z-0 pointer-events-none"></div>

            {/* Spokes */}
            {ecosystemItems.map((item, index) => {
               const angleDeg = index * 60 - 90;
               const isActive = activeId === item.id;
               return (
                 <div 
                    key={`line-${item.id}`}
                    className={`absolute top-1/2 left-1/2 h-[1px] origin-left transition-colors duration-300 z-10 pointer-events-none ${isActive ? 'bg-[#3A6EFF]' : 'bg-transparent'}`}
                    style={{ width: '180px', transform: `rotate(${angleDeg}deg)` }}
                 ></div>
               );
            })}
            
            {/* Center Hub */}
            <div className={`
                absolute rounded-full bg-white flex flex-col items-center justify-center text-center
                shadow-2xl border-[4px] transition-all duration-300 ease-out overflow-hidden
                ${activeId !== null 
                  ? 'w-[300px] h-[300px] border-[#3A6EFF] z-40'  // Increased active size to 300px
                  : 'w-48 h-48 border-[#081A57] z-20'}
            `}>
               {activeId === null ? (
                 <div className="flex flex-col items-center justify-center h-full animate-in fade-in duration-500 p-5">
                    <span className="text-3xl font-extrabold font-sans uppercase text-[#081A57] leading-none mb-1">Tap-IT</span>
                    <span className="text-[10px] font-bold font-sans uppercase text-[#3A6EFF] tracking-widest mb-2">Ecosystem</span>
                    <p className="text-[9px] font-bold font-sans text-gray-400 uppercase animate-pulse tracking-wide mt-2">Hover over a node</p>
                 </div>
               ) : (
                 <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center justify-between w-full h-full py-8 px-6">
                   <div className="flex flex-col items-center justify-center w-full shrink-0 mt-1">
                       <div className="w-10 h-10 bg-[#3A6EFF] text-white rounded-md flex items-center justify-center mb-4 shadow-sm shrink-0">
                          {React.cloneElement(ecosystemItems[activeId].icon as React.ReactElement<any>, { size: 20 })}
                       </div>
                       <h4 className="text-sm font-bold font-sans uppercase text-[#081A57] leading-tight text-center px-1 w-full mb-2">
                         {ecosystemItems[activeId].title}
                       </h4>
                   </div>
                   <div className="flex items-center justify-center w-full px-1">
                     <p className="text-[14px] text-gray-600 leading-relaxed text-center font-medium" style={{ textWrap: 'balance' }}>
                       {ecosystemItems[activeId].desc}
                     </p>
                   </div>
                   <div className="w-full border-t border-gray-100 pt-4 pb-1 shrink-0 mt-2">
                      <div className="text-[10px] font-bold text-[#3A6EFF] uppercase tracking-wide mb-1 text-center">Powered by</div>
                      <div className="text-xs text-gray-500 font-medium truncate px-1 text-center">
                        {ecosystemItems[activeId].poweredBy}
                      </div>
                   </div>
                 </div>
               )}
            </div>

            {/* Nodes */}
            {ecosystemItems.map((item, index) => {
              const radius = 180;
              const angleDeg = index * 60 - 90;
              const angleRad = (angleDeg * Math.PI) / 180;
              const x = radius * Math.cos(angleRad);
              const y = radius * Math.sin(angleRad);
              const isActive = activeId === item.id;
              const cycleDuration = ecosystemItems.length * 1.5; 
              const delay = index * 1.5;

              return (
                <div 
                  key={item.id}
                  className={`absolute top-1/2 left-1/2 group transition-all duration-300 ${isActive ? 'z-50' : 'z-30'}`}
                  style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  {!isActive && (
                    <div 
                      className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full border-2 border-[#3A6EFF] bg-[#3A6EFF]/10 pointer-events-none -z-10"
                      style={{
                        animation: `eco-pulse-ring ${cycleDuration}s infinite ease-out`,
                        animationDelay: `${delay}s`,
                        opacity: 0
                      }}
                    ></div>
                  )}
                  <div className={`w-4 h-4 rounded-full border-[2px] cursor-pointer transition-all duration-300 shadow-lg relative
                    ${isActive ? 'bg-[#3A6EFF] border-white scale-150 ring-4 ring-blue-100' : 'bg-white border-[#081A57] hover:scale-125'}`}
                  ></div>
                  <div className={`absolute ${item.position} transition-all duration-300 cursor-pointer w-max max-w-[280px]`}>
                    <div className={`
                      bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-xl border-l-4
                      transform transition-all duration-300
                      ${isActive ? 'opacity-100 scale-100 border-[#3A6EFF] translate-y-0 shadow-2xl' : 'opacity-100 scale-100 border-transparent hover:scale-105'} 
                    `}>
                      <h4 className={`font-bold font-sans uppercase text-sm leading-tight ${isActive ? 'text-[#3A6EFF]' : 'text-gray-600 hover:text-[#081A57]'}`}>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative z-30 mt-8">
             <Link 
                href="/ecosystem"
                className="bg-[#081A57] text-white px-8 py-4 rounded-full font-bold font-sans uppercase tracking-wider hover:bg-[#3A6EFF] transition-all shadow-xl hover:-translate-y-1 flex items-center gap-3 group"
             >
                Explore Full Ecosystem
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudEcosystem;