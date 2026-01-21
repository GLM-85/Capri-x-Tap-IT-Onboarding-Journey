'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Check, ArrowRight, ShieldCheck, Plus, Minus, MessageSquare } from 'lucide-react';
import Link from './Link';

const packages = [
  {
    title: "Essentials",
    subtitle: "Secure Workplace",
    tagline: "Fast & Simple.",
    description: "A modern foundation for companies who want a reliable, secure workplace without complications.",
    features: [
      "Fully managed Microsoft cloud",
      "Secure devices (Auto-update)",
      "Fast employee onboarding",
      "Basic Cyberthreat protection",
      "Proactive Monitoring"
    ],
    perfectFor: "Small teams who want everything to “just work.”",
    isRecommended: false
  },
  {
    title: "Business",
    subtitle: "Stronger Security",
    tagline: "Zero Hassle.",
    description: "Upgrade to real, enterprise-grade security - without the enterprise price tag.",
    features: [
      "AI-powered Ransomware defense",
      "Safer Internet Access",
      "Automated compliance checks",
      "Priority Support Access",
      "Everything in Essentials"
    ],
    perfectFor: "Companies scaling up that need to stay safe.",
    isRecommended: false
  },
  {
    title: "Secure+",
    subtitle: "Full Visibility",
    tagline: "Total Peace of Mind.",
    description: "Know exactly how secure your business is and where improvements are needed.",
    features: [
      "External Tamper-proof Backups",
      "Disaster Recovery Testing",
      "Live Security Dashboards",
      "Quarterly Strategy Reviews",
      "Everything in Business"
    ],
    perfectFor: "Growing organizations minimizing risk.",
    isRecommended: true
  },
  {
    title: "Enterprise",
    subtitle: "High Performance",
    tagline: "Always-On.",
    description: "For businesses that demand speed, stability, and intelligent automation everywhere.",
    features: [
      "AI-optimized Wi-Fi & Network",
      "5G Automatic Backup",
      "Multi-site Performance Monitor",
      "24x7 Critical Response",
      "Custom SLA Definitions"
    ],
    perfectFor: "Multi-location teams relying on 100% uptime.",
    isRecommended: false
  }
];

const PackageCard: React.FC<{ pkg: typeof packages[0] }> = ({ pkg }) => {
  const { title, subtitle, tagline, description, features, perfectFor, isRecommended } = pkg;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // WRAPPER: 
    // Optimized for 1280px grid: md:w-full, h-[350px]
    <div className={`relative w-[80vw] md:w-full shrink-0 snap-start h-[350px] 2xl:h-[380px]`}>
      
      {/* INNER CARD: Positioned absolutely to float over content on expansion */}
      <div 
        onClick={toggleExpand}
        className={`
        absolute inset-x-0 top-0 
        flex flex-col p-5 2xl:p-8 border transition-all duration-300 ease-out
        rounded-xl overflow-hidden group cursor-pointer
        
        /* Height logic: use state for mobile/click, hover for desktop */
        ${isExpanded ? 'h-[600px] md:h-[650px] 2xl:h-[680px] shadow-2xl z-50' : 'h-full z-10 md:hover:h-[650px] 2xl:hover:h-[680px] hover:shadow-2xl hover:z-50'}
        
        ${isRecommended 
          ? 'bg-[#081A57] text-white border-[#081A57] shadow-xl md:scale-105 md:hover:scale-[1.06]' 
          : 'bg-white text-[#081A57] border-gray-200 hover:border-[#3A6EFF] hover:shadow-xl'}
      `}>
      
        {/* Recommended Badge */}
        {isRecommended && (
          <div className="absolute top-4 right-4 z-20">
             <div className="bg-[#3A6EFF] text-white text-[9px] font-bold px-2 py-1 uppercase tracking-widest rounded shadow-sm flex items-center gap-1">
               Best Value
             </div>
          </div>
        )}

        {/* --- ALWAYS VISIBLE CONTENT (Contracted State) --- */}
        <div className="relative z-10 shrink-0">
          {/* Eyebrow */}
          <h4 className={`text-[10px] 2xl:text-[11px] font-bold uppercase tracking-[0.2em] mb-2 2xl:mb-3 ${isRecommended ? 'text-[#3A6EFF]' : 'text-gray-400'}`}>
            {subtitle}
          </h4>
          
          {/* Title: Optimized text size */}
          <h3 className="text-3xl 2xl:text-4xl font-black font-sans uppercase mb-2 tracking-tight leading-[0.9]">
            {title}
          </h3>
          
          {/* Tagline */}
          <p className={`text-xs 2xl:text-sm font-bold uppercase tracking-widest mb-4 2xl:mb-6 ${isRecommended ? 'text-blue-200' : 'text-[#3A6EFF]'}`}>
             {tagline}
          </p>
          
          {/* Description */}
          <p className={`text-sm 2xl:text-[15px] leading-relaxed mb-0 font-medium ${isRecommended ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>

        {/* --- EXPANDED CONTENT --- */}
        {/* Uses opacity based on state (click) OR hover (desktop) */}
        <div className={`relative z-10 flex flex-col mt-6 2xl:mt-8 transition-opacity duration-500 delay-100 ${isExpanded ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
           
           {/* Separator */}
           <div className={`h-[1px] w-full mb-4 2xl:mb-6 ${isRecommended ? 'bg-white/10' : 'bg-gray-100'}`}></div>

           {/* Features List */}
           <div className="mb-4">
             <p className={`text-[10px] 2xl:text-[11px] font-bold uppercase tracking-widest mb-3 ${isRecommended ? 'text-gray-400' : 'text-gray-400'}`}>
               Includes:
             </p>
             <ul className="space-y-2 2xl:space-y-3">
               {features.map((feature, i) => (
                 <li key={i} className="flex items-start gap-3">
                   <div className={`mt-0.5 min-w-[14px] h-[14px] flex items-center justify-center rounded-full border ${isRecommended ? 'border-[#3A6EFF] text-[#3A6EFF]' : 'border-gray-200 text-[#3A6EFF]'}`}>
                     <Check size={8} strokeWidth={4} />
                   </div>
                   <span className={`text-[12px] 2xl:text-[13.5px] font-medium leading-snug ${isRecommended ? 'text-gray-200' : 'text-gray-700'}`}>
                     {feature}
                   </span>
                 </li>
               ))}
             </ul>
           </div>

           {/* Perfect For */}
           <div className={`mt-2 mb-6 p-3 rounded border text-[12px] 2xl:text-[13px] leading-relaxed ${isRecommended ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
              <span className="block font-bold uppercase mb-1 opacity-70 text-[10px] 2xl:text-[11px] tracking-wide">Perfect for:</span>
              {perfectFor}
           </div>

           {/* CTA */}
           <Link href="/contact" className={`w-full py-3 rounded font-bold font-sans uppercase text-[10px] 2xl:text-[11px] tracking-widest transition-all flex items-center justify-center gap-2
               ${isRecommended 
                 ? 'bg-[#3A6EFF] text-white hover:bg-white hover:text-[#081A57]' 
                 : 'bg-[#081A57] text-white hover:bg-[#3A6EFF]'}
            `}>
              Talk to an expert <ArrowRight size={14} />
           </Link>
        </div>

        {/* Expand Indicator (Changes based on expansion state) */}
        <div className={`absolute bottom-6 right-6 z-20 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'md:group-hover:opacity-0'}`}>
           <div className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest ${isRecommended ? 'text-white' : 'text-[#081A57]'}`}>
              <span>{isExpanded ? 'Close' : 'Expand'}</span>
              {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
           </div>
        </div>
        
        {/* Gradient Overlay for contracted state (Desktop only) */}
        <div className={`absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t pointer-events-none hidden md:block
           ${isRecommended ? 'from-[#081A57] via-[#081A57]/90 to-transparent' : 'from-white via-white/90 to-transparent'}
           transition-opacity duration-300 z-10 ${isExpanded ? 'opacity-0' : 'opacity-100 md:group-hover:opacity-0'}`}>
        </div>

      </div>
    </div>
  );
};

const PackagesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          if (container.scrollWidth > container.clientWidth) {
            setHasAnimated(true);
            setTimeout(() => {
              container.style.scrollSnapType = 'none';
              container.scrollTo({ left: 80, behavior: 'smooth' });
              setTimeout(() => {
                container.scrollTo({ left: 0, behavior: 'smooth' });
                setTimeout(() => {
                    container.style.scrollSnapType = 'x mandatory';
                }, 500);
              }, 1000); 
            }, 600);
          }
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="pricing" className="py-16 md:py-20 2xl:py-28 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
                 <div className="w-8 h-1 bg-[#3A6EFF]"></div>
                 <h3 className="text-xs font-bold font-sans uppercase tracking-[0.2em] text-[#3A6EFF]">Packages</h3>
            </div>
            {/* OPTIMIZATION: Headline size */}
            <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-black font-sans uppercase text-[#081A57] mb-4 tracking-tight leading-[0.9]">
              Enterprise Quality.<br />Scaled for you.
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
             <div className="inline-block px-3 py-1 bg-blue-50 text-[#3A6EFF] text-[10px] font-bold uppercase tracking-widest rounded mb-2">
                Pilot Access Only
             </div>
             <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Full Launch Q2 2026
             </div>
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="md:hidden flex items-center gap-2 mb-4 text-xs font-bold uppercase text-gray-400 tracking-wider">
           <ArrowRight size={12} className="animate-[bounce-x_1s_infinite]" /> 
           <style>{`
             @keyframes bounce-x {
               0%, 100% { transform: translateX(0); }
               50% { transform: translateX(4px); }
             }
           `}</style>
           Swipe to compare
        </div>

        {/* Grid / Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 2xl:gap-6 items-start mb-12 md:mb-16 pb-8 md:pb-0 snap-x snap-mandatory scroll-pl-6 px-6 -mx-6 md:mx-0 md:px-0 md:overflow-visible no-scrollbar"
        >
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>

        {/* Bottom Global CTA - CENTERED */}
        <div className="w-full bg-gray-50 rounded-2xl p-8 md:p-10 2xl:p-12 flex flex-col items-center justify-center gap-6 border border-gray-100 text-center relative z-0">
           <div>
              <h3 className="text-xl md:text-2xl font-bold font-sans uppercase text-[#081A57] mb-2">
                 Need a Custom Solution?
              </h3>
              <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
                 "Think of these as starting grids. We customize every solution together after understanding your specific needs."
              </p>
           </div>
           <Link href="/contact" className="bg-[#081A57] text-white px-8 py-3.5 2xl:px-10 2xl:py-4 rounded-md font-bold font-sans uppercase tracking-wider hover:bg-[#3A6EFF] transition-all shadow-lg hover:-translate-y-1 flex items-center gap-2 whitespace-nowrap text-xs 2xl:text-sm">
              Talk to an Expert <MessageSquare size={18} />
           </Link>
        </div>

      </div>
    </section>
  );
};

export default PackagesSection;