'use client';

import React, { useEffect, useState } from 'react';
import { Monitor, ShieldCheck, Database, Network, Ticket, Users, ArrowRight, Plus } from 'lucide-react';
import SiteFooter from '../../components/SiteFooter';
import Link from '../../components/Link';
import Navbar from '../../components/Navbar';

// --- DATA ---
const ecosystemSections = [
  {
    id: 1,
    title: "Productivity, Devices & Lifecycle Management",
    icon: <Monitor className="w-8 h-8" />,
    poweredBy: "Microsoft 365, Intune, Autopilot & Tap-IT Hardware Services",
    descriptionItems: [
      "We supply and configure the full workspace. From laptops to monitors and essential accessories.",
      "Every device is pre-enrolled in Autopilot, so users simply log in and start working within minutes.",
      "Intune policies and Tap-IT patch automation keep all devices secure, compliant, and always up to date.",
      "Tap-IT manages the full lifecycle: deployment, repairs, replacements, and secure recycling at end of use."
    ],
    forYou: "No setup hassle, no outdated devices, no procurement headaches. Just reliable, ready-to-work hardware managed from day one, to day done."
  },
  {
    id: 2,
    title: "Security & Protection",
    icon: <ShieldCheck className="w-8 h-8" />,
    poweredBy: "Defender, SentinelOne & Juniper",
    descriptionItems: [
      "AI-driven protection detects and isolates threats instantly.",
      "MFA + Conditional Access secure every login.",
      "Continuous vulnerability scanning reveals and fixes risks proactively."
    ],
    forYou: "A continuously protected environment: silent but powerful."
  },
  {
    id: 3,
    title: "Backup & Business Continuity",
    icon: <Database className="w-8 h-8" />,
    poweredBy: "Tap-IT Back-up & Automation",
    descriptionItems: [
      "Continuous backup of Microsoft 365, endpoints, and servers.",
      "Verified restore points tested automatically.",
      "Fast recovery - from a single file to full disaster restoration."
    ],
    forYou: "Even if something fails, your business doesn't stop."
  },
  {
    id: 4,
    title: "Connectivity & Performance",
    icon: <Network className="w-8 h-8" />,
    poweredBy: "Odido Business & Juniper Mist A.I. Networking",
    descriptionItems: [
      "Connectivity is the foundation of every modern workspace. With Odido Business, Tap-IT delivers secure fiber and 5G connectivity.",
      "Fully integrated with Microsoft Teams Voice for unified calling and collaboration.",
      "Juniper Mist A.I. adds smart, self-healing Wi-Fi and real-time performance monitoring."
    ],
    forYou: "Seamless internet, crystal-clear calls, and uninterrupted collaboration - all managed by one partner."
  },
  {
    id: 5,
    title: "Support & Governance",
    icon: <Users className="w-8 h-8" />,
    poweredBy: "People who care",
    descriptionItems: [
      "8x5 or 24x7 support by engineers who know your environment.",
      "Secure onboarding/offboarding of employees and devices.",
      "Periodic reviews to align IT, compliance, and strategy."
    ],
    forYou: "A human partner who takes ownership — not just tickets."
  },
  {
    id: 6,
    title: "Automation, Monitoring & Ticketing",
    icon: <Ticket className="w-8 h-8" />,
    poweredBy: "Ninja-One RMM & HaloPSA",
    descriptionItems: [
      "Continuous monitoring of every device and service.",
      "Automated patching, backup checks, and incident remediation.",
      "Tickets are created, prioritized, and often resolved before users even notice."
    ],
    forYou: "Invisible IT - issues handled quietly, efficiently, and effectively."
  }
];

// --- COMPONENTS ---

const StickyHub = ({ isIdle, isHidden, scrollProgress }: { isIdle: boolean; isHidden: boolean; scrollProgress: number }) => {
  // Animation Phase State: 
  // 0 = Start
  // 1 = Diagonal Move (Entrance)
  // 2 = Probe/Scan (Shoot dot down and back)
  // 3 = Vertical Drop (To position)
  const [animPhase, setAnimPhase] = useState(0);
  // Track if the cinematic entrance flight has finished
  const [hasLanded, setHasLanded] = useState(false);

  useEffect(() => {
    // Sequence the entrance animation automatically on mount
    // Total Duration approx 4.6s
    
    // 1. Start Diagonal Move (Duration 1.6s)
    const timer1 = setTimeout(() => setAnimPhase(1), 200); 
    
    // 2. Start Probe Mission (Hub waits, Dot shoots) (Duration ~1.2s)
    const timer2 = setTimeout(() => setAnimPhase(2), 1800);

    // 3. Start Vertical Drop (Duration 1.6s)
    const timer3 = setTimeout(() => setAnimPhase(3), 3000);

    // 4. Mark Landed
    const timer4 = setTimeout(() => setHasLanded(true), 4600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  // --- Coordinate Logic ---
  
  // Start: Center of the white space (Top Right Quadrant)
  // Left 65% | Top 30%
  let currentLeft = 65;
  let currentTop = 30;
  let currentScale = 0.85;
  
  // Custom cubic bezier for very premium, weighted motion
  const transitionStyle = 'left 1.6s cubic-bezier(0.4, 0, 0.2, 1), top 1.6s cubic-bezier(0.4, 0, 0.2, 1), transform 1.6s cubic-bezier(0.4, 0, 0.2, 1)';

  // Override phase if user scrolls early (Force landing behavior)
  const effectivePhase = scrollProgress > 0.02 && animPhase < 3 ? 3 : animPhase;

  if (effectivePhase === 1 || effectivePhase === 2) {
    // Phase 1 & 2: Center Screen Hover
    // We move to Center X (50%) and slightly down Y (40%)
    currentLeft = 50;
    currentTop = 40; 
    currentScale = 0.95;
  } else if (effectivePhase === 3) {
    // Phase 3: Vertical Drop to Start of Timeline
    const baseLandingTop = 105; // 105% (off screen bottom)
    const centerTop = 50; // 50% (center screen)

    // SCROLL INTERPOLATION:
    const scrollFactor = Math.min(1, scrollProgress * 1.2); 
    const calculatedTop = baseLandingTop - ((baseLandingTop - centerTop) * scrollFactor);

    currentLeft = 50;
    currentTop = calculatedTop;
    currentScale = 1.0;
  }

  // Override: Hide if near footer
  const opacity = isHidden ? 0 : 1;

  // Transition Logic:
  // If we are in Phase 3 AND the user is scrolling, fast transition.
  const isScrolling = scrollProgress > 0.001; 
  const activeTransition = effectivePhase === 3 && isScrolling
     ? 'left 0.1s linear, top 0.05s linear, transform 0.5s ease' // Instant response
     : transitionStyle; // Smooth entrance

  // UFO Mode Logic:
  // Active if we are animating (Phase > 0), haven't landed yet, AND user isn't actively scrolling.
  const isFlying = effectivePhase > 0 && !hasLanded && scrollProgress < 0.02;

  // Probe Logic:
  // Active only during Phase 2
  const isProbing = effectivePhase === 2;

  return (
    <div 
      className="hidden lg:flex fixed z-50 pointer-events-none will-change-transform"
      style={{
         left: `${currentLeft}%`, 
         top: `${currentTop}%`,
         transform: `translate(-50%, -50%) scale(${currentScale})`,
         opacity: opacity,
         transition: `${activeTransition}, opacity 0.5s ease`
      }}
    >
       {/* Main Hub Container */}
       <div className={`relative w-[380px] h-[380px] flex items-center justify-center transition-transform duration-1000 ${isIdle ? 'scale-100' : 'scale-95'}`}>
         
         {/* Pulse Effect - Stronger when Idle */}
         <div className={`absolute inset-0 rounded-full border-2 border-[#3A6EFF]/20 transition-opacity duration-500 ${isIdle ? 'animate-ping opacity-100' : 'opacity-0'}`}></div>

         {/* Ring 1 - Clockwise */}
         <div className={`absolute w-[240px] h-[240px] rounded-full border border-[#3A6EFF]/40 animate-[spin_20s_linear_infinite] transition-all duration-1000 ${isIdle ? 'scale-105 opacity-80' : 'scale-100 opacity-100'}`}></div>
         
         {/* Ring 2 - Counter-Clockwise */}
         <div className={`absolute w-[280px] h-[280px] rounded-full border border-[#3A6EFF]/25 animate-[spin_15s_linear_infinite_reverse] transition-all duration-1000 delay-100 ${isIdle ? 'scale-110 opacity-60' : 'scale-100 opacity-100'}`}></div>

         {/* Ring 3 - Large Outer Orbit (New Bigger Circle) */}
         <div className={`absolute w-[650px] h-[650px] rounded-full border border-[#3A6EFF]/10 animate-[spin_60s_linear_infinite] transition-all duration-1000 delay-200 ${isIdle ? 'scale-105 opacity-40' : 'scale-100 opacity-20'}`}></div>
         
         {/* UFO DYNAMICS - Flight Mode Only (Entrance) */}
         <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-out ${isFlying ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* PROBE DRONE (Phase 2 Only) - NOW MUCH SMALLER & SUBTLE */}
            <div className={`absolute z-0 w-1 h-1 rounded-full bg-[#3A6EFF] shadow-[0_0_8px_#3A6EFF] ${isProbing ? 'animate-probe-mission' : 'opacity-0'}`}></div>

            {/* Outer Scanner Ring - Pulse (Blue) */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-[#3A6EFF]/30 animate-ping opacity-20"></div>

            {/* NEW: 6 Pulsating Dots on Outer Ring (Clockwise) */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_4s_linear_infinite]">
               {[0, 60, 120, 180, 240, 300].map((deg) => (
                  <div 
                    key={deg}
                    className="absolute w-2.5 h-2.5 bg-[#3A6EFF] rounded-full shadow-[0_0_15px_#3A6EFF] animate-pulse"
                    style={{
                       transform: `rotate(${deg}deg) translate(230px)`
                    }}
                  ></div>
               ))}
            </div>
            
            {/* High Speed Outer Rotor - Clockwise */}
            <div className="absolute w-[350px] h-[350px] rounded-full border-t-[3px] border-[#3A6EFF] border-r-[3px] border-transparent border-b-transparent border-l-transparent animate-[spin_0.8s_linear_infinite] shadow-[0_0_20px_rgba(58,110,255,0.6)]"></div>
            
            {/* Inner Counter Rotor - Counter-Clockwise (Blue) */}
            <div className="absolute w-[330px] h-[330px] rounded-full border-b-[3px] border-[#3A6EFF] border-l-[3px] border-transparent border-t-transparent border-r-transparent animate-[spin_1s_linear_infinite_reverse] shadow-[0_0_15px_rgba(58,110,255,0.5)]"></div>
            
            {/* Energy Core Glow */}
            <div className="absolute w-[200px] h-[200px] bg-[#3A6EFF]/10 blur-2xl animate-pulse"></div>
         </div>

         {/* Crosshairs - Static */}
         <div className="absolute w-[320px] h-[1px] bg-[#3A6EFF]/20 rotate-45"></div>
         <div className="absolute w-[320px] h-[1px] bg-[#3A6EFF]/20 -rotate-45"></div>

         {/* Center Core */}
         <div className={`relative z-20 w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center border-[4px] border-[#3A6EFF] transition-all duration-500 ${isIdle ? 'shadow-[0_0_60px_rgba(58,110,255,0.4)]' : 'shadow-[0_0_40px_rgba(58,110,255,0.15)]'}`}>
            <div className="flex flex-col items-center mt-1">
                <span className="text-4xl font-black font-sans uppercase text-[#081A57] tracking-tight leading-none mb-0.5">TAP-IT</span>
                <span className="text-[10px] font-bold font-sans uppercase text-[#3A6EFF] tracking-[0.2em]">ECOSYSTEM</span>
            </div>
         </div>
         
       </div>
    </div>
  );
};

const TimelineItem: React.FC<{
  section: typeof ecosystemSections[0];
  index: number;
  isActive: boolean;
}> = ({ section, index, isActive }) => {
  const isEven = index % 2 === 0;

  return (
    <div 
      id={`section-${section.id}`}
      data-section-id={section.id}
      className={`relative flex w-full min-h-[50vh] py-12 md:py-16 lg:py-24 snap-center scroll-mt-[50vh] 
        ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
        flex-col lg:items-center transition-all duration-700 ease-out 
        ${isActive ? 'opacity-100 scale-100 grayscale-0' : 'opacity-30 scale-95 grayscale'}`}
    >
      
      {/* Mobile Dot (Left aligned) */}
      <div className={`absolute left-0 top-12 lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 bg-[#3A6EFF] border-2 border-white rounded-full z-30 shadow-sm transition-all duration-500 ${isActive ? 'opacity-100 lg:opacity-0 scale-100 lg:scale-150' : 'opacity-100 scale-100'}`}></div>

      {/* Desktop Center Connector Line */}
      <div 
        className={`hidden lg:block absolute h-[2px] z-0 transition-all duration-1000 ease-out 
          ${isActive ? 'w-48 xl:w-64 bg-[#081A57]' : 'w-0 bg-[#3A6EFF]'} 
          ${isEven ? 'left-1/2 ml-2 origin-left' : 'right-1/2 mr-2 origin-right'}
        `}
      ></div>

      <div className="hidden lg:block w-1/2"></div>

      <div className={`
        w-full lg:w-1/2 
        px-6 md:px-8
        ${isEven 
          ? 'lg:px-0 lg:pl-32 xl:pl-48 lg:pr-12 xl:pr-24' 
          : 'lg:px-0 lg:pr-32 xl:pr-48 lg:pl-12 xl:pl-24' 
        }
      `}>
        <div className="relative group cursor-pointer w-full max-w-xl lg:max-w-2xl mx-auto">
          
          <div className={`
             bg-white p-6 lg:p-10 rounded-tr-3xl rounded-bl-3xl shadow-lg border-l-4 
             transition-all duration-500 ease-in-out hover:shadow-2xl hover:translate-y-[-4px]
             ${isEven ? 'border-[#3A6EFF] text-left' : 'border-[#081A57] lg:text-right text-left'}
             ${isActive ? 'ring-2 ring-[#3A6EFF]/20 translate-y-[-4px] shadow-2xl' : 'shadow-sm'}
             w-full mx-auto ${!isEven ? 'lg:ml-auto lg:mr-0' : 'lg:ml-0'}
          `}>
            
            <div className={`flex items-start gap-4 lg:gap-5 mb-4 lg:mb-6 ${isEven ? 'flex-row' : 'lg:flex-row-reverse flex-row'}`}>
              <div className={`w-10 h-10 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center shrink-0 border border-gray-100 transition-colors duration-300 ${isActive ? 'bg-[#081A57] text-white' : 'bg-gray-50 text-[#081A57] group-hover:bg-[#081A57] group-hover:text-white'}`}>
                {React.cloneElement(section.icon as React.ReactElement<any>, { className: 'w-5 h-5 lg:w-8 lg:h-8' })}
              </div>
              <h2 className="text-lg md:text-xl lg:text-3xl font-black font-sans uppercase text-[#081A57] leading-tight pt-1">
                {section.title}
              </h2>
            </div>

            <div className={`text-[10px] lg:text-xs font-bold font-sans uppercase text-[#3A6EFF] tracking-wide mb-4 lg:mb-6 border-b border-gray-100 pb-4 ${isEven ? '' : 'lg:ml-auto'}`}>
               Powered by: {section.poweredBy}
            </div>

            <div className="relative z-10">
               <p className="text-gray-700 text-sm lg:text-lg leading-relaxed font-medium inline-block w-full">
                  {section.descriptionItems[0]}
               </p>
            </div>

            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
               <div className="overflow-hidden">
                  <div className={`pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100`}>
                     <div className={`space-y-3 mb-6 ${isEven ? '' : 'lg:flex lg:flex-col lg:items-end'}`}>
                       {section.descriptionItems.slice(1).map((item, idx) => (
                         <p key={idx} className="text-gray-700 text-sm lg:text-lg leading-relaxed w-full font-medium">
                           {item}
                         </p>
                       ))}
                     </div>
                     <div className={`bg-gray-50 p-4 lg:p-5 rounded-lg border border-gray-100 ${isEven ? 'text-left' : 'lg:text-right text-left'}`}>
                        <p className="text-xs lg:text-sm text-gray-800 italic">
                           <span className="font-bold font-sans uppercase not-italic text-[#081A57] block mb-1">For you:</span>
                           {section.forYou}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-2 text-[10px] lg:text-xs font-bold uppercase text-[#3A6EFF] tracking-widest opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none animate-pulse">
                 <span>Expand</span>
                 <Plus size={16} />
            </div>
            
            <div className="h-4 lg:h-6 group-hover:h-0 transition-all duration-300"></div>

          </div>
        </div>
      </div>

    </div>
  );
};

const EcosystemPage: React.FC = () => {
  const [visibleSectionIds, setVisibleSectionIds] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hubVisible, setHubVisible] = useState(true);

  // --- Scroll Tracking ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // 1. Calculate Progress for Hub Positioning
      // 0 to 1 over first 600px of scrolling
      const transitionDistance = 600; 
      const progress = Math.min(1, Math.max(0, scrollY / transitionDistance));
      setScrollProgress(progress);

      // 2. Calculate Exit (Fade out near footer)
      const distToBottom = docHeight - (scrollY + windowHeight);
      if (distToBottom < 400) {
        setHubVisible(false);
      } else {
        setHubVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- Intersection Observer for Active Timeline Items ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -10% 0px', 
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      setVisibleSectionIds((prev) => {
        const next = new Set(prev);
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-section-id'));
          if (entry.isIntersecting) {
            next.add(id);
          } else {
            next.delete(id);
          }
        });
        return next;
      });
    }, observerOptions);

    ecosystemSections.forEach((section) => {
      const el = document.getElementById(`section-${section.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Added scale-down-laptop to page wrapper
    <div className="min-h-screen bg-white flex flex-col font-sans pt-[80px] scale-down-laptop">
      <style>{`
        html.ecosystem-snap {
          scroll-snap-type: y proximity;
        }
        @keyframes probe-mission {
          0% { transform: translateY(0) scale(0); opacity: 0.8; }
          15% { transform: translateY(0) scale(1); opacity: 1; }
          45% { transform: translateY(450px) scale(1); opacity: 0.6; } 
          55% { transform: translateY(450px) scale(1); opacity: 0.6; }
          85% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(0) scale(0); opacity: 0; }
        }
        .animate-probe-mission {
          animation: probe-mission 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
      
      {/* Universal Navigation */}
      <Navbar variant="solid" />

      {/* Global Sticky Hub (Outside normal flow) */}
      <StickyHub 
         isIdle={visibleSectionIds.size === 0} 
         isHidden={!hubVisible}
         scrollProgress={scrollProgress}
      />

      <main className="flex-grow">
        
        <section className="relative pt-16 md:pt-20 lg:pt-24 pb-0 px-6 max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row relative z-10 mb-8">
              <div className="w-full md:w-3/5">
                 <h1 className="text-5xl md:text-6xl lg:text-8xl font-black font-sans uppercase text-[#081A57] mb-6 lg:mb-8 tracking-tight">
                    WHY TAP-IT.
                 </h1>
                 <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold max-w-lg mb-6 lg:mb-8 leading-tight">
                    Modern IT shouldn't demand your attention; it should <span className="text-[#3A6EFF]">quietly empower your people.</span>
                 </p>
                 <p className="text-base md:text-lg text-gray-500 max-w-md leading-relaxed">
                    At Tap-IT, we make that happen. Our ecosystem brings productivity, security, connectivity, and continuity together in one managed environment.
                 </p>
              </div>
           </div>
           
           <div className="hidden lg:flex flex-row items-end w-full relative z-10 mt-12 lg:mt-16 mb-2">
              <div className="relative pb-0 pr-12">
                 <h2 className="text-3xl font-bold font-sans uppercase text-[#081A57] leading-tight pb-6">
                    Tap into the cloud. <br /> Accelerate your growth.
                 </h2>
                 <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#3A6EFF]"></div>
              </div>
              <div className="relative w-[80px] h-[80px]">
                  <svg className="w-full h-full overflow-visible">
                    <line x1="-1" y1="78" x2="81" y2="2" stroke="#3A6EFF" strokeWidth="4" strokeLinecap="square" />
                  </svg>
              </div>
              <div className="flex-1 relative h-[80px]">
                  <div className="absolute top-0 left-0 w-full h-[4px] bg-[#3A6EFF]"></div>
                  
                  {/* Timeline Badge */}
                  <div className="absolute right-0 -top-[28px] w-auto">
                     <div className="bg-gradient-to-r from-[#081A57] to-[#1e3a8a] text-white py-4 px-8 rounded-l-full shadow-xl border-t-2 border-b-2 border-l-2 border-white/10">
                        <h3 className="text-xl font-bold font-sans uppercase tracking-[0.1em] text-right whitespace-nowrap">
                          The Tap-IT Ecosystem
                        </h3>
                     </div>
                  </div>
              </div>
           </div>
           
           <div className="lg:hidden mt-8">
              <div className="border-b-4 border-[#3A6EFF] pb-4 mb-8">
                <h2 className="text-3xl font-bold font-sans uppercase text-[#081A57] leading-tight">
                   Tap into the cloud. <br /> Accelerate your growth.
                </h2>
              </div>
              <div className="w-full bg-gradient-to-r from-[#081A57] to-[#1e3a8a] text-white py-4 px-8 rounded-l-full shadow-xl">
                 <h3 className="text-xl font-bold font-sans uppercase tracking-[0.1em] text-right">
                   The Tap-IT Ecosystem
                 </h3>
              </div>
           </div>

        </section>


        <section className="relative container mx-auto px-6 pb-24 max-w-[1600px] mt-16 lg:mt-20">
            
            <div className="max-w-4xl mx-auto mb-20 lg:mb-24 text-center md:text-left">
               <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                 We've built Tap-IT around clusters that work in harmony. Each focuses on a different layer of your digital world and together they form one intelligent, self-healing system that keeps your business running.
               </p>
            </div>

            <div className="relative grid grid-cols-1">
               
               {/* Mobile: Line on left (index 0) */}
               <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#3A6EFF] lg:hidden z-0"></div>

               {/* Desktop: Line in center */}
               <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#3A6EFF] -translate-x-1/2 z-0 col-start-1 row-start-1 hidden lg:block"></div>

               <div className="col-start-1 row-start-1 relative z-10 pt-24 lg:pt-32 pb-24">
                  {ecosystemSections.map((section, index) => (
                    <TimelineItem 
                      key={section.id} 
                      section={section} 
                      index={index} 
                      isActive={visibleSectionIds.has(section.id)}
                    />
                  ))}
               </div>
               
               {/* End Node */}
               <div className="absolute bottom-0 left-[3px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 lg:w-8 lg:h-8 bg-[#081A57] rounded-full border-2 lg:border-4 border-white shadow-lg z-20 col-start-1 row-start-1 self-end"></div>
            </div>

        </section>

        <section className="bg-gray-50 py-24 mt-0 border-t border-gray-100">
           <div className="container mx-auto px-6 text-center">
               <h2 className="text-3xl md:text-4xl font-black font-sans uppercase text-[#081A57] mb-6">
                 Ready to upgrade your infrastructure?
               </h2>
               <Link href="/contact" className="bg-[#081A57] hover:bg-[#3A6EFF] text-white font-bold font-sans uppercase tracking-wider px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 mx-auto w-fit">
                 Book a Health Check <ArrowRight size={20} />
               </Link>
           </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default EcosystemPage;