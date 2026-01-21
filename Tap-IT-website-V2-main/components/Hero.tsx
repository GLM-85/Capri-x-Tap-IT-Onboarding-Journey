'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from './Link';
import Navbar from './Navbar';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.playbackRate = 0.6; 

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video auto-play prevented:", error);
        });
      }
    }
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] md:min-h-[700px] bg-white overflow-hidden" id="home">
      
      {/* Universal Navigation (Transparent initially) */}
      <Navbar variant="transparent" />

      {/* VIDEO BACKGROUND LAYER */}
      <div className="absolute top-0 right-0 bottom-0 z-0 w-full md:w-[75%] lg:w-[65%] xl:w-[75%] 2xl:w-[80%] overflow-hidden pointer-events-none">
        
        {/* The Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII="
          className="absolute inset-0 h-full w-full object-cover object-[25%_center] md:object-[center_bottom] bg-white"
        >
          <source src="https://storage.googleapis.com/tap-it-assets-eu/rocket-launch.mp4" type="video/mp4" />
          <source src="https://cdn.pixabay.com/video/2019/04/20/22908-331580556_large.mp4" type="video/mp4" />
        </video>

        {/* Dreamy Overlay */}
        <div className="absolute inset-0 bg-white/20 z-10 mix-blend-lighten"></div>
        <div className="absolute inset-0 bg-white/10 z-10"></div>

        {/* Soft Left Gradient */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-white/90 via-white/40 to-transparent md:from-white md:via-white/60 md:to-transparent z-20"></div>
        
        {/* Right Gradient */}
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20"></div>

        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white via-white/80 to-transparent z-20"></div>
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
        {/* OPTIMIZATION: Adjusted padding top to compensate for smaller screens */}
        <div className="w-full max-w-5xl flex flex-col justify-center pt-16 md:pt-0 relative">
          
          {/* Main Typography Block */}
          {/* OPTIMIZATION: Reduced margin-bottom for tighter vertical layout on 150% scaled screens */}
          <div className="mb-6 md:mb-8 2xl:mb-10 relative">
            
            {/* Status Badge - PILOT PHASE */}
            {/* UPDATED: Made text smaller on md/lg (text-[10px]) to match proportions */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-[#3A6EFF]/20 text-[#3A6EFF] text-[9px] md:text-[10px] 2xl:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 2xl:mb-6">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3A6EFF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3A6EFF]"></span>
               </span>
               <span className="flex items-center gap-2">
                 Pilot Phase Active · Full Launch Q2 '26
               </span>
            </div>

            {/* OPTIMIZATION: Typography scale adjusted. 
                UPDATED: lg:text-7xl to make it larger on laptops.
            */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black font-sans uppercase leading-[1.0] md:leading-[0.9] text-[#081A57] tracking-tighter whitespace-normal md:whitespace-nowrap mb-2 md:mb-4 drop-shadow-sm pb-2">
              Tap into the cloud.
            </h1>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-black font-sans uppercase leading-[1.0] md:leading-[0.9] text-[#3A6EFF] tracking-tighter drop-shadow-sm whitespace-normal md:whitespace-nowrap">
              Accelerate your<br className="hidden md:block" />
              <span className="md:hidden"> </span>growth.
            </h2>
          </div>

          {/* UPDATED: Reduced text size on md/lg to 'text-lg' (was xl) to make it smaller on company laptop */}
          <p className="text-base md:text-lg 2xl:text-xl text-gray-600 font-semibold leading-relaxed max-w-lg border-l-4 border-[#3A6EFF] pl-4 md:pl-6 mb-8 2xl:mb-12 pr-4 md:pr-0">
            We help ambitious businesses scale securely with future-ready IT infrastructure managed by experts.
          </p>

          {/* Call to Action Buttons */}
          {/* OPTIMIZATION: Button padding reduced (px-6 py-3) for standard view, increased (px-10 py-5) for 2xl view */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <Link href="/health-check" className="bg-[#081A57] text-white px-6 py-3.5 md:px-8 md:py-4 2xl:px-10 2xl:py-5 rounded-md font-bold font-sans uppercase tracking-wider flex items-center justify-center hover:bg-[#3A6EFF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 group min-w-[180px] md:min-w-[200px] text-sm 2xl:text-base">
              Health Check
              <ArrowRight className="ml-3 w-4 h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/contact" className="bg-white border border-[#081A57] text-[#081A57] px-6 py-3.5 md:px-8 md:py-4 2xl:px-10 2xl:py-5 rounded-md font-bold font-sans uppercase tracking-wider flex items-center justify-center hover:bg-[#081A57] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 min-w-[180px] md:min-w-[200px] text-sm 2xl:text-base">
              Join Pilot
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;