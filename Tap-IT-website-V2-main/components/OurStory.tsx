'use client';

import React, { useEffect, useRef, useState } from 'react';

// --- Cinematic Word Reveal Component (For Titles & Paragraphs) ---
interface CinematicRevealProps {
  text: string;
  className?: string;
  delay?: number; // Delay before starting (ms)
  stagger?: number; // Delay between words (ms)
  triggerOnce?: boolean;
}

const CinematicWordReveal = ({ 
  text, 
  className = "", 
  delay = 0, 
  stagger = 120, 
  triggerOnce = true 
}: CinematicRevealProps) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
             setStarted(true);
          }, delay);
          if (triggerOnce) observer.disconnect();
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.2 } 
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, triggerOnce]);

  useEffect(() => {
    if (!started) return;
    
    const words = text.split(' ');
    // If animation is done, stop interval
    if (visibleCount >= words.length) return;

    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < words.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, stagger); 

    return () => clearInterval(interval);
  }, [started, text, stagger, visibleCount]);

  return (
    <span ref={ref} className={className} aria-label={text} style={{ display: 'inline' }}>
      {text.split(' ').map((word, i) => (
        <span 
          key={i} 
          style={{ 
            opacity: i < visibleCount ? 1 : 0.05, 
            filter: i < visibleCount ? 'blur(0px)' : 'blur(4px)',
            transform: i < visibleCount ? 'translateY(0) scale(1)' : 'translateY(4px) scale(0.98)',
            transition: 'opacity 0.8s ease, filter 0.8s ease, transform 0.8s ease',
            display: 'inline-block',
            marginRight: '0.25em',
            willChange: 'opacity, filter, transform'
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
};

const OurStory: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- Animation Settings ---
  
  // Header: Slower, more dramatic
  const headerStagger = isMobile ? 80 : 180;
  const missionStagger = isMobile ? 40 : 120; // Slightly faster than header
  
  // Content Blocks: Fast "flow" effect
  const bodyStagger = isMobile ? 25 : 40; 
  
  // Sequencing Delays (especially for Mobile scrolling)
  // We stagger the start times so they don't all trigger at once
  const block1Delay = 0;
  const block2Delay = isMobile ? 600 : 200; 
  const block3Delay = isMobile ? 1200 : 400; 

  return (
    <section id="story" className="py-20 md:py-24 2xl:py-32 bg-white overflow-hidden relative">
      <style>{`
        @keyframes marquee-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-slow {
          animation: marquee-slow 20s linear infinite;
        }
      `}</style>
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-40 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 1. Header Section */}
        <div className="text-center mb-12 md:mb-16 2xl:mb-20">
          {/* OPTIMIZATION: Reduced text size for standard laptop (text-6xl), reserved text-8xl for 2xl */}
          <h2 className="text-5xl md:text-6xl 2xl:text-8xl font-black font-sans uppercase mb-6 2xl:mb-8 tracking-tighter leading-[0.9]">
            <CinematicWordReveal text="All Your IT." className="text-[#081A57]" stagger={headerStagger} />
            <span className="inline-block w-4 md:w-6"></span>
            <CinematicWordReveal text="One Engine." className="text-[#3A6EFF]" delay={isMobile ? 500 : 1200} stagger={headerStagger} />
          </h2>
          <div className="w-full max-w-6xl mx-auto">
             {/* OPTIMIZATION: Standardized text size to xl, 2xl for 2xl screens */}
             <p className="text-lg md:text-xl 2xl:text-2xl text-gray-500 font-normal leading-relaxed text-balance">
              We build, secure, and run modern IT for ambitious companies.<br className="hidden lg:block" />
              From cloud and devices to security and connectivity, everything works together; everything runs faster.
            </p>
          </div>
        </div>

        {/* 2. The Machine (F1 Car) */}
        <div className="relative w-full mb-20 md:mb-24 group flex flex-col items-center">
          
          {/* The Car */}
          <div className="relative z-10 w-full max-w-[900px] 2xl:max-w-[1100px] overflow-hidden">
             <div className="hidden md:block absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-20"></div>
             <div className="hidden md:block absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-20"></div>
             
             <img 
               src="https://storage.googleapis.com/tap-it-assets-eu/f1-car.jpg" 
               alt="Formula 1 Car showing IT Speed" 
               className="w-full h-auto object-contain max-h-[400px] md:max-h-[500px] 2xl:max-h-[550px] drop-shadow-xl relative z-10 mix-blend-multiply"
             />
          </div>

          {/* The "Powered By" Bar */}
          <div className="w-full max-w-[900px] 2xl:max-w-[1100px] bg-[#081A57] py-2 md:py-3 2xl:py-4 px-4 md:px-8 shadow-xl relative z-30 mt-6 md:mt-8 rounded-sm overflow-hidden">
             <div className="flex whitespace-nowrap md:justify-center overflow-hidden">
                <div className="flex animate-marquee-slow md:animate-none">
                    <span className="text-xs md:text-[13px] 2xl:text-sm font-bold font-sans uppercase tracking-[0.15em] text-white/90 mr-12 md:mr-0">
                       Powered by Microsoft · TD-SYNNEX · N-Able · Sophos · Avepoint · SentinelOne · Cisco · Juniper · Odido
                    </span>
                    <span className="md:hidden text-xs md:text-[13px] 2xl:text-sm font-bold font-sans uppercase tracking-[0.15em] text-white/90 mr-12">
                       Powered by Microsoft · TD-SYNNEX · N-Able · Sophos · Avepoint · SentinelOne · Cisco · Juniper · Odido
                    </span>
                </div>
             </div>
          </div>
        </div>

        {/* 3. Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 2xl:gap-24 items-start max-w-7xl mx-auto">
          
          {/* Left Column: The Narrative */}
          <div className="lg:col-span-7 space-y-10 2xl:space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-12 h-1 bg-[#081A57]"></div>
                 <h3 className="text-xs 2xl:text-sm font-bold font-sans uppercase tracking-[0.2em] text-[#081A57]">Our Mission</h3>
              </div>
              
              {/* Mission Statement */}
              <div className="min-h-[120px] 2xl:min-h-[140px] text-2xl md:text-4xl 2xl:text-5xl font-bold font-sans uppercase text-[#081A57] mb-6 leading-tight">
                <CinematicWordReveal 
                  text="Make complex IT effortless so you can focus on growth."
                  className="inline"
                  stagger={missionStagger} 
                  delay={0}
                />
              </div>

              <p className="text-base md:text-lg 2xl:text-lg text-gray-600 leading-relaxed mt-4">
                Tap-IT helps ambitious companies build IT that moves as fast as they do. We combine enterprise-grade technology with SME-level agility giving you control, clarity, and confidence from day one.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-10 pt-8 border-t border-gray-100">
               {/* Column 1: How We Work */}
               <div>
                  <h5 className="font-bold font-sans uppercase text-[#081A57] mb-4 flex items-center gap-2 text-base 2xl:text-lg">
                    <span className="w-2.5 h-2.5 bg-[#3A6EFF] rounded-full"></span>
                    <CinematicWordReveal text="How We Work" stagger={bodyStagger} delay={block1Delay} />
                  </h5>
                  <div className="text-sm md:text-base 2xl:text-lg text-gray-600">
                    <CinematicWordReveal 
                        text="We keep IT simple, fast, and reliable. Every Tap-IT setup is tuned for performance: secure, automated, and effortless to manage."
                        stagger={bodyStagger}
                        delay={block1Delay + 200} // Start slightly after title
                    />
                  </div>
               </div>
               
               {/* Column 2: The Result */}
               <div>
                  <h5 className="font-bold font-sans uppercase text-[#081A57] mb-4 flex items-center gap-2 text-base 2xl:text-lg">
                    <span className="w-2.5 h-2.5 bg-[#3A6EFF] rounded-full"></span>
                    <CinematicWordReveal text="The Result" stagger={bodyStagger} delay={block2Delay} />
                  </h5>
                  <div className="text-sm md:text-base 2xl:text-lg text-gray-600">
                     <CinematicWordReveal 
                        text="A frictionless environment where your people are productive, your data is safe, and your infrastructure scales automatically."
                        stagger={bodyStagger}
                        delay={block2Delay + 200}
                     />
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Founder Insight */}
          <div className="lg:col-span-5 relative pt-4">
             <div className="bg-white rounded-xl p-0 relative">
                <blockquote className="text-lg 2xl:text-xl font-normal text-gray-600 leading-relaxed mb-8 italic relative border-l-4 border-[#3A6EFF] pl-6 py-1 min-h-[220px]">
                  <span className="text-2xl text-[#3A6EFF] mr-1">"</span>
                  <CinematicWordReveal 
                    text="After almost two decades at global corporates like Shell, Philips & ING I've learned how operational excellence and technology come together at scale. With Tap-IT, we bring that same precision to every business."
                    stagger={bodyStagger}
                    delay={block3Delay}
                  />
                  <span className="text-2xl text-[#3A6EFF] ml-1">"</span>
                </blockquote>

                <div className="flex items-start gap-6 pl-6 min-h-[200px]">
                   <div className="relative flex-shrink-0 z-10">
                       <img 
                         src="https://storage.googleapis.com/tap-it-assets-eu/Raadj%20Chedalal.jpg" 
                         alt="Raadj Chedalal" 
                         className="w-28 h-28 md:w-32 md:h-32 2xl:w-40 2xl:h-40 rounded-full object-cover shadow-sm border-2 border-white"
                         style={{ objectPosition: 'center 20%' }}
                       />
                   </div>
                   <div className="pt-8 md:pt-10">
                     <div className="font-bold font-sans uppercase text-[#081A57] text-sm tracking-wide">Raadj Chedalal</div>
                     <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Founder</div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;