'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Lock, Shield, Search, FileText, BarChart, Check, Zap, Users, ArrowRight, CheckCircle, Activity } from 'lucide-react';
import SiteFooter from '../../components/SiteFooter';
import Link from '../../components/Link';
import Navbar from '../../components/Navbar';

// --- DATA FROM PDF ---
const analysisSteps = [
  {
    id: 1,
    title: "Identity & Access Security",
    icon: <Lock className="w-6 h-6" />,
    intro: "Your people, their logins, and access rules are your first line of defence.",
    checks: [
      "Weak or missing MFA",
      "Conditional Access gaps",
      "Risky sign-ins & unusual behaviour",
      "Privileged accounts without proper controls",
      "Identity drift & misconfigurations"
    ],
    outcome: "A clear view of who has access to what - and where risks are hiding."
  },
  {
    id: 2,
    title: "Device & Endpoint Protection",
    icon: <Shield className="w-6 h-6" />,
    intro: "If one laptop is exposed, your whole business is exposed.",
    checks: [
      "Missing Defender or EDR protection",
      "Devices without encryption (e.g., BitLocker)",
      "Outdated OS versions",
      "Missing Intune compliance baselines",
      "Patch & update risks"
    ],
    outcome: "A complete snapshot of device health and endpoint security."
  },
  {
    id: 3,
    title: "Microsoft 365 Security Gaps",
    icon: <Search className="w-6 h-6" />,
    intro: "Email, Teams and SharePoint are frequent attack targets.",
    checks: [
      "Anti-phishing & anti-malware gaps",
      "Unsafe email forwarding rules",
      "Risky SharePoint/OneDrive sharing settings",
      "Data loss exposure",
      "Authentication & session policies"
    ],
    outcome: "A practical list of risks that could lead to downtime, data leaks or business interruption."
  },
  {
    id: 4,
    title: "Compliance & Regulation Readiness",
    icon: <FileText className="w-6 h-6" />,
    intro: "Security is no longer optional - especially with NIS2 and GDPR tightening expectations.",
    checks: [
      "Missing controls that affect GDPR compliance",
      "Weak or outdated security baselines",
      "NIS2 Article 21 alignment",
      "Overall policy enforcement maturity"
    ],
    outcome: "A simple compliance score and clear next steps to reduce business exposure."
  },
  {
    id: 5,
    title: "Overall Security Score",
    icon: <BarChart className="w-6 h-6" />,
    intro: "You receive a visual scorecard showing:",
    checks: [
      "Your security baseline today",
      "How you compare to recommended standards",
      "The top issues that need attention",
      "The quickest improvements you can make"
    ],
    outcome: "This gives leadership clarity and helps guide IT decisions strategically."
  }
];

const deliverables = [
  "A complete Microsoft 365 risk overview",
  "Identity, device, and security findings",
  "Compliance insights (GDPR / NIS2 exposure)",
  "A visual security scorecard",
  "Clear, prioritised recommendations",
  "A 30-minute walkthrough with a Tap-IT expert"
];

// --- COMPONENTS ---

const HeroCircuit: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ width: 0, textWidth: 0 });

  useEffect(() => {
    const measure = () => {
      if (containerRef.current && textRef.current) {
        setDims({
          width: containerRef.current.offsetWidth,
          textWidth: textRef.current.offsetWidth
        });
      }
    };

    // Initial measure
    measure();

    // Observe changes
    const observer = new ResizeObserver(measure);
    if (containerRef.current) observer.observe(containerRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  // Constants for path construction
  const startY = 78; // Bottom of the container area (approx 80px high)
  const endY = 2;    // Top of the container area
  const diagWidth = 80;
  
  // 1. Construct the Visible Track (Straight lines)
  // M 0,78 -> L textWidth,78 -> L textWidth+80,2 -> L width,2
  const trackPath = dims.width > 0 
    ? `M 0,${startY} L ${dims.textWidth},${startY} L ${dims.textWidth + diagWidth},${endY} L ${dims.width},${endY}`
    : "";

  // 2. Animation Logic: Radius Pulsation
  
  let rValues = "5;5";
  let rKeyTimes = "0;1";

  if (dims.width > 0) {
     const seg1 = dims.textWidth;
     const diagLen = 110.3; // sqrt(80^2 + 76^2)
     const seg3 = dims.width - (dims.textWidth + diagWidth);
     const totalLen = seg1 + diagLen + seg3;

     // Target Points for Pulse
     const d1 = seg1 * 0.5; // Center of bottom segment
     const d2 = seg1 + diagLen + (seg3 * 0.33); // 1/3 into top segment
     
     // Time fractions (assuming calcMode="paced" for constant speed)
     const t1 = d1 / totalLen;
     const t2 = d2 / totalLen;

     // Pulse Duration fraction (e.g. 0.08 of 4s is 320ms)
     const pd = 0.08;

     // Construct Keyframes for "Double Beat" Pulse (Lub-Dub)
     // Base r=5. Peak r=10.
     // Pattern: 5 -> 10 -> 6 -> 10 -> 5
     
     const frames = [
        { t: 0, v: 5 },
        // Pulse 1
        { t: Math.max(0, t1), v: 5 },
        { t: Math.min(1, t1 + pd*0.25), v: 9 },
        { t: Math.min(1, t1 + pd*0.5), v: 6 },
        { t: Math.min(1, t1 + pd*0.75), v: 9 },
        { t: Math.min(1, t1 + pd), v: 5 },
        // Pulse 2
        { t: Math.max(0, t2), v: 5 },
        { t: Math.min(1, t2 + pd*0.25), v: 9 },
        { t: Math.min(1, t2 + pd*0.5), v: 6 },
        { t: Math.min(1, t2 + pd*0.75), v: 9 },
        { t: Math.min(1, t2 + pd), v: 5 },
        // End
        { t: 1, v: 5 }
     ];
     
     // Sort by time
     frames.sort((a,b) => a.t - b.t);
     
     rKeyTimes = frames.map(f => f.t.toFixed(3)).join(';');
     rValues = frames.map(f => f.v).join(';');
  }

  return (
    <div ref={containerRef} className="hidden md:flex flex-row items-end w-full relative z-10 mt-16 mb-2 h-[80px]">
       
       {/* SVG Animation Layer */}
       {dims.width > 0 && (
         <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-20">
            <defs>
               {/* Blue Glow Filter */}
               <filter id="blue-glow" x="-100%" y="-100%" width="300%" height="300%">
                 <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                 <feFlood floodColor="#3A6EFF" floodOpacity="1" result="glowColor" />
                 <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow_colored" />
                 <feMerge>
                   <feMergeNode in="softGlow_colored" />
                   <feMergeNode in="SourceGraphic" />
                 </feMerge>
               </filter>
            </defs>

            {/* The Static Track (Straight Blue Line) */}
            <path 
              d={trackPath} 
              fill="none" 
              stroke="#3A6EFF" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />

            {/* Ghost Trail (Fainter dot behind) */}
            <circle r="3" fill="#3A6EFF" opacity="0.4">
               <animateMotion 
                  dur="4s" 
                  repeatCount="indefinite" 
                  path={trackPath} 
                  begin="0.15s" 
                  calcMode="paced"
               />
            </circle>

            {/* The Main Glowing Dot with Pulse */}
            <circle r="5" fill="white" stroke="#3A6EFF" strokeWidth="2" filter="url(#blue-glow)">
                {/* Movement along path */}
                <animateMotion 
                  dur="4s" 
                  repeatCount="indefinite" 
                  path={trackPath} 
                  calcMode="paced"
                />
                {/* Heartbeat Pulse Animation */}
                <animate 
                   attributeName="r"
                   values={rValues}
                   keyTimes={rKeyTimes}
                   dur="4s"
                   repeatCount="indefinite"
                />
            </circle>

         </svg>
       )}

       {/* HTML Layout Content (Aligned with the SVG path) */}
       <div ref={textRef} className="relative pb-0 pr-12 z-0">
          <h2 className="text-3xl font-bold font-sans uppercase text-[#081A57] leading-tight pb-6 whitespace-nowrap">
             Reveal your <br /> blind spots.
          </h2>
       </div>
       
       <div style={{ width: diagWidth }} className="shrink-0 h-full" />
       
       <div className="flex-1 relative h-full">
           {/* Badge Container: z-30 ensures it covers the SVG line ending */}
           <div className="absolute right-0 top-[-28px] z-30">
              <div className="bg-gradient-to-r from-[#081A57] to-[#1e3a8a] text-white py-4 px-8 rounded-l-full shadow-xl border-t-2 border-b-2 border-l-2 border-white/10 relative">
                 <h3 className="text-xl font-bold font-sans uppercase tracking-[0.1em] text-right whitespace-nowrap">
                   IT Health Check
                 </h3>
              </div>
           </div>
       </div>

    </div>
  );
};

const ScannerTarget: React.FC = () => (
  // Updated positioning to work on mobile (left-[8px]) and desktop (left-1/2)
  <div className="absolute left-[8px] md:left-1/2 top-0 bottom-0 -translate-x-1/2 z-30 block w-0 pointer-events-none overflow-visible">
    {/* Removed items-center to let the content hang down from the sticky top, preventing it from floating "above" the line start */}
    <div className="sticky top-[50vh] flex justify-center w-0 h-0">
       {/* The Target UI - Increased size to w-48 h-48 */}
       {/* Removed -translate-y-1/2 so it starts at the line start and extends down */}
       <div className="relative w-48 h-48 flex items-center justify-center">
          
          {/* Inner Core - Red Dot (Always Visible) */}
          <div className="absolute w-3 h-3 bg-[#ef4444] rounded-full z-10 shadow-[0_0_15px_#ef4444] animate-pulse"></div>
          
          {/* Mobile Only - Subtle Ping Ring instead of full scanner */}
          <div className="md:hidden absolute w-8 h-8 rounded-full border border-red-500/30 animate-ping"></div>

          {/* Desktop Only - Full Scanner UI */}
          <div className="hidden md:block absolute inset-0">
             {/* Crosshair Static */}
             <svg className="absolute inset-0 w-full h-full drop-shadow-lg" viewBox="0 0 100 100">
                {/* Horizontal/Vertical thin lines */}
                <line x1="0" y1="50" x2="100" y2="50" stroke="#ef4444" strokeWidth="0.5" opacity="0.6" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="#ef4444" strokeWidth="0.5" opacity="0.6" />
                
                {/* Brackets */}
                <path d="M 35 25 L 25 25 L 25 35" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                <path d="M 65 25 L 75 25 L 75 35" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                <path d="M 35 75 L 25 75 L 25 65" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                <path d="M 65 75 L 75 75 L 75 65" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
             </svg>

             {/* Rotating Rings */}
             <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="38" stroke="#ef4444" strokeWidth="1" fill="none" strokeDasharray="10 30" opacity="0.4" />
                </svg>
             </div>
             
             <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse]">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="44" stroke="#ef4444" strokeWidth="0.5" fill="none" strokeDasharray="4 4" opacity="0.3" />
                </svg>
             </div>

             {/* Label */}
             <div className="absolute top-4 right-4 text-[10px] font-mono text-[#ef4444] font-bold uppercase tracking-widest bg-white/80 px-1 rounded">
                Scanning
             </div>
          </div>

       </div>
    </div>
  </div>
);

const AnalysisCard: React.FC<{ step: typeof analysisSteps[0]; index: number }> = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex w-full md:py-16 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col items-center group pl-8 md:pl-0`}>
      
      {/* Mobile Timeline Dot */}
      <div className="md:hidden absolute left-0 top-12 w-4 h-4 bg-white border-4 border-[#3A6EFF] rounded-full z-20 shadow-sm flex items-center justify-center"></div>

      {/* Center Line Marker (Desktop) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-4 border-[#3A6EFF] rounded-full z-20 shadow-md hidden md:flex items-center justify-center font-bold text-xs text-[#081A57]">
        {step.id}
      </div>

      {/* Connection Line (Horizontal) (Desktop) */}
      <div className={`hidden md:block absolute h-[2px] bg-[#3A6EFF] w-16 top-1/2 -translate-y-1/2 z-0 ${isEven ? 'left-1/2' : 'right-1/2'}`}></div>

      {/* Spacer */}
      <div className="w-full md:w-1/2 hidden md:block" />

      {/* Card */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-24' : 'md:pr-24'}`}>
        <div className={`bg-white p-6 lg:p-10 rounded-tr-3xl rounded-bl-3xl shadow-lg border-l-4 border-[#3A6EFF] hover:shadow-2xl transition-all hover:-translate-y-1 duration-300 h-full`}>
           <div className="flex items-center gap-4 lg:gap-5 mb-4 lg:mb-6">
              <div className="w-10 h-10 lg:w-14 lg:h-14 bg-blue-50 text-[#3A6EFF] rounded-xl flex items-center justify-center shrink-0">
                <div className="scale-100 lg:scale-125">{step.icon}</div>
              </div>
              <h3 className="text-xl lg:text-3xl font-extrabold font-sans uppercase text-[#081A57] leading-tight">
                {step.id}. {step.title}
              </h3>
           </div>
           
           <p className="text-gray-600 italic mb-6 lg:mb-8 text-sm lg:text-lg leading-relaxed font-medium">{step.intro}</p>

           <div className="space-y-4 mb-6 lg:mb-8">
             <h4 className="text-[10px] lg:text-sm font-bold uppercase text-[#3A6EFF] tracking-wider">We check for:</h4>
             <ul className="space-y-2 lg:space-y-3">
               {step.checks.map((check, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm lg:text-base text-gray-800 font-medium">
                   <span className="mt-1.5 lg:mt-2 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-[#3A6EFF] rounded-full shrink-0"></span>
                   <span className="leading-relaxed">{check}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="bg-gray-50 p-4 lg:p-6 rounded-xl border border-gray-100">
             <span className="block text-[10px] lg:text-sm font-bold uppercase text-[#081A57] mb-1 lg:mb-2">Outcome:</span>
             <p className="text-sm lg:text-base text-gray-900 font-medium leading-relaxed">{step.outcome}</p>
           </div>
        </div>
      </div>
    </div>
  );
};

const HealthCheckPage: React.FC = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initial Video Play
    const timer = setTimeout(() => {
        if(videoRef.current) {
            videoRef.current.play().then(() => {
                setIsVideoVisible(true);
            }).catch(e => console.log("Video Play Error:", e));
        }
    }, 500); // Slight initial delay for calm entrance
    
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnded = () => {
    setIsVideoVisible(false); // Fade out
    
    // Breathing Cycle: Fade Out (2s) -> Pause (1s) -> Restart
    setTimeout(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().then(() => {
                setIsVideoVisible(true); // Fade back in
            });
        }
    }, 3000); 
  };

  return (
    // Added scale-down-laptop to page wrapper
    <div className="min-h-screen bg-white flex flex-col font-sans text-[#081A57] pt-[80px] scale-down-laptop">
      
      {/* Universal Navigation */}
      <Navbar variant="solid" />

      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <section className="relative pt-16 md:pt-20 lg:pt-24 pb-0 px-6 max-w-7xl mx-auto">
           
           {/* Text Content */}
           <div className="flex flex-col md:flex-row relative z-10 mb-8 items-center">
              <div className="w-full md:w-3/5 relative z-20">
                 <div className="inline-block bg-[#3A6EFF] text-white px-4 py-1 text-xs font-bold font-sans uppercase tracking-[0.2em] mb-6 rounded">
                    Free • Remote • 48 Hours
                 </div>
                 <h1 className="text-5xl md:text-6xl lg:text-8xl font-black font-sans uppercase text-[#081A57] mb-6 lg:mb-8 tracking-tight leading-none">
                    IT HEALTH CHECK.
                 </h1>
                 <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold max-w-lg mb-6 lg:mb-8 leading-tight">
                    Find Your Risks. Strengthen Your Foundation. <span className="text-[#3A6EFF]">Accelerate Your Growth.</span>
                 </p>
                 <p className="text-base md:text-lg lg:text-xl text-gray-500 max-w-xl leading-relaxed mb-8">
                    Most organisations don’t know where their blind spots are until something goes wrong. 
                    Our free check gives you instant clarity across your entire Microsoft 365 environment: identities, devices, security, compliance and data protection.
                 </p>
                 <Link href="/contact" className="bg-[#081A57] text-white px-8 py-4 rounded-lg font-bold font-sans uppercase tracking-wider hover:bg-[#3A6EFF] transition-colors shadow-lg flex items-center justify-center gap-2 w-fit">
                     Start Free Check <ArrowRight size={20} />
                 </Link>
              </div>

               {/* F1 Video on Top Right */}
              <div className="w-full md:w-2/5 flex justify-center md:justify-end relative mt-8 md:mt-0 min-h-[300px] md:min-h-[400px]">
                 <div className="relative w-full max-w-[650px]">
                    <video
                        ref={videoRef}
                        muted
                        playsInline
                        onEnded={handleVideoEnded}
                        className={`w-full h-auto object-contain mix-blend-multiply transition-all duration-[2000ms] ease-in-out ${isVideoVisible ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}
                    >
                        <source src="https://storage.googleapis.com/tap-it-assets-eu/A_clean_white_background._A_complete_side_view_of_a_Tap-IT_Formula_1_car_standing_still%2C_perfectly_s_seed701564529.mp4" type="video/mp4" />
                    </video>
                 </div>
              </div>
           </div>
           
           {/* Dynamic Circuit Line Decoration */}
           <HeroCircuit />
           
           {/* Mobile view Decoration (Fallback) */}
           <div className="md:hidden mt-12 mb-12">
              <div className="border-b-4 border-[#3A6EFF] pb-4 mb-8">
                <h2 className="text-3xl font-bold font-sans uppercase text-[#081A57] leading-tight">
                   Reveal your <br /> blind spots.
                </h2>
              </div>
              <div className="w-full bg-gradient-to-r from-[#081A57] to-[#1e3a8a] text-white py-4 px-8 rounded-l-full shadow-xl">
                 <h3 className="text-xl font-bold font-sans uppercase tracking-[0.1em] text-right">
                   IT Health Check
                 </h3>
              </div>
           </div>

        </section>

        {/* ANALYSIS SECTION */}
        <section className="relative container mx-auto px-6 pb-24 max-w-7xl mt-16 lg:mt-20">
            
             <div className="max-w-7xl mx-auto mb-20 lg:mb-32 text-center md:text-left">
               <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                 Our intelligent platform performs a deep-dive analysis into 5 critical areas of your infrastructure. This is a comprehensive, automated review designed to uncover risks that manual checks often miss.
               </p>
            </div>

            {/* Layout Container */}
            <div className="relative grid grid-cols-1">
               
               {/* Mobile Timeline Line */}
               <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#3A6EFF] md:hidden z-0"></div>

               {/* Background Spine (Desktop) */}
               <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#3A6EFF] -translate-x-1/2 z-0 hidden md:block"></div>
               
               {/* Sticky Scanner Target */}
               <ScannerTarget />

               <div className="relative z-10 space-y-8 md:space-y-0">
                  {analysisSteps.map((step, index) => (
                    <AnalysisCard key={step.id} step={step} index={index} />
                  ))}
               </div>
               
               {/* End Node */}
               <div className="absolute bottom-0 left-[3px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-[#081A57] rounded-full border-2 md:border-4 border-white shadow-lg z-20"></div>
            </div>

        </section>

        {/* DELIVERABLES */}
        <section className="py-24 px-6 bg-[#081A57] text-white">
          <div className="container mx-auto max-w-5xl">
             <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="w-full md:w-1/2">
                 <h2 className="text-4xl font-bold font-sans uppercase mb-6">What You Receive</h2>
                 <p className="text-blue-100 text-lg mb-8">
                   Within 48 hours, you’ll get a comprehensive report written in normal, non-technical language. Perfect for leadership.
                 </p>
                 <div className="grid grid-cols-1 gap-4">
                   {deliverables.map((item, i) => (
                     <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                       <Check className="text-[#3A6EFF] w-5 h-5 shrink-0" />
                       <span className="font-medium text-sm">{item}</span>
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="w-full md:w-1/2 relative">
                  <div className="bg-white text-[#081A57] p-8 rounded-2xl shadow-2xl rotate-2 relative z-10">
                    <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                      <span className="font-bold uppercase tracking-widest text-xs text-gray-400">Sample Report</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Score: 68/100</span>
                    </div>
                    <div className="space-y-4">
                       <div className="h-4 bg-gray-100 rounded w-3/4"></div>
                       <div className="h-4 bg-gray-100 rounded w-full"></div>
                       <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                       <div className="flex gap-2 mt-4">
                         <div className="h-20 bg-blue-50 rounded flex-1"></div>
                         <div className="h-20 bg-blue-50 rounded flex-1"></div>
                       </div>
                    </div>
                    <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                       <div className="text-xs">
                         <div className="font-bold">Tap-IT Expert</div>
                         <div className="text-gray-500">Video walkthrough included</div>
                       </div>
                    </div>
                  </div>
                  {/* Decor elements */}
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-[#3A6EFF] rounded-full blur-2xl opacity-50"></div>
                  <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-[#3A6EFF] rounded-full blur-3xl opacity-30"></div>
               </div>
             </div>
          </div>
        </section>

        {/* WHY & WHO */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Why SMEs Choose This */}
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-50 p-3 rounded-full text-[#3A6EFF]">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-sans uppercase text-[#081A57]">Why SMEs Choose This</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Reveals blind spots quickly (things your team or MSP may not see)",
                    "Zero disruption to your environment",
                    "No cost, no obligations",
                    "Fast onboarding just a secure Microsoft tenant connection",
                    "Actionable insights, not generic advice",
                    "Helps prepare for audits, renewals and board discussions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#3A6EFF] rounded-full mt-2.5 shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 p-4 bg-blue-50 rounded-lg text-[#081A57] text-sm font-bold text-center">
                  The easiest way to understand your real security posture without buying anything.
                </div>
              </div>

              {/* Who Is It For */}
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
                 <div className="flex items-center gap-3 mb-8">
                  <div className="bg-blue-50 p-3 rounded-full text-[#3A6EFF]">
                    <Users size={24} />
                  </div>
                  <h3 className="text-2xl font-bold font-sans uppercase text-[#081A57]">Who Is It For?</h3>
                </div>
                <p className="text-gray-600 mb-6">This Health Check is perfect for organisations that:</p>
                <ul className="space-y-4">
                  {[
                    "Are growing fast or scaling teams",
                    "Use Microsoft 365 as their digital foundation",
                    "Want to improve security without slowing down productivity",
                    "Need clarity before making IT, licensing or security investments",
                    "Want a neutral second opinion on their current setup"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle size={18} className="text-[#3A6EFF] mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 bg-white border-t border-gray-100">
          <div className="container mx-auto max-w-4xl text-center">
             <h2 className="text-4xl md:text-5xl font-black font-sans uppercase text-[#081A57] mb-6">
               Start Your Free IT Health Check
             </h2>
             <p className="text-xl text-gray-600 mb-8">
               Get clarity. Reduce risk. Strengthen your IT foundation.
             </p>
             <Link href="/contact" className="bg-[#3A6EFF] text-white px-10 py-5 rounded-full font-bold font-sans uppercase tracking-wider hover:bg-[#081A57] transition-all shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
               Start Free IT Health Check <ArrowRight size={20} />
             </Link>
             <p className="mt-6 text-sm text-gray-400 font-medium">
               5-minute onboarding. Results in 48 hours.
             </p>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
};

export default HealthCheckPage;